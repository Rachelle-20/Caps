import jsPDF from "jspdf";
import "jspdf-autotable"; // ✅ only import — no need to call autoTable(jsPDF)

/**
 * Generates a PDF report of the evaluation results
 * @param {Object} options - Configuration options
 * @param {Array} options.evaluationData - The evaluation data with questions, scores, and comments
 * @param {string} options.selectedGrade - The selected grade/level filter
 * @param {string} options.selectedCourse - The selected course filter
 * @param {string} options.title - The title of the PDF report
 */
export function generateEvaluationPDF({
  evaluationData,
  selectedGrade,
  selectedCourse,
  title = "Course Evaluation Report",
}) {
  const doc = new jsPDF();

  const allComments = evaluationData.flatMap((item) =>
    item.comments.map((comment, index) => ({
      id: `${item.id}-${index}`,
      questionId: item.id,
      text: comment,
    }))
  );
  const totalComments = allComments.length;

  doc.setFontSize(18);
  doc.text(title, 105, 15, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Grade/Level: ${selectedGrade}`, 20, 30);
  doc.text(`Course: ${selectedCourse}`, 20, 40);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);

  doc.setFontSize(14);
  doc.text("Evaluation Summary", 20, 65);

  const averageScore =
    evaluationData.reduce((sum, item) => sum + item.score, 0) / evaluationData.length;

  doc.setFontSize(12);
  doc.text(`Average Score: ${averageScore.toFixed(2)} / 10`, 20, 75);
  doc.text(`Total Comments: ${totalComments}`, 20, 85);

  const performanceCounts = {
    Excellent: evaluationData.filter((item) => item.score >= 9).length,
    VeryGood: evaluationData.filter((item) => item.score >= 8 && item.score < 9).length,
    Good: evaluationData.filter((item) => item.score >= 7 && item.score < 8).length,
    NeedsImprovement: evaluationData.filter((item) => item.score < 7).length,
  };

  doc.text("Performance Distribution:", 20, 95);
  doc.text(`Excellent: ${performanceCounts.Excellent}`, 30, 105);
  doc.text(`Very Good: ${performanceCounts.VeryGood}`, 30, 115);
  doc.text(`Good: ${performanceCounts.Good}`, 30, 125);
  doc.text(`Needs Improvement: ${performanceCounts.NeedsImprovement}`, 30, 135);

  doc.setFontSize(14);
  doc.text("Evaluation Scores", 20, 150);

  doc.autoTable({
    startY: 155,
    head: [["Question", "Score", "Performance Level"]],
    body: evaluationData.map((item) => [
      item.question,
      item.score.toFixed(1),
      item.score >= 9
        ? "Excellent"
        : item.score >= 8
        ? "Very Good"
        : item.score >= 7
        ? "Good"
        : "Needs Improvement",
    ]),
    headStyles: { fillColor: [66, 66, 66] },
    margin: { top: 155 },
  });

  const finalY = doc.lastAutoTable.finalY || 155;
  doc.setFontSize(14);
  doc.text("Student Comments", 20, finalY + 15);

  doc.autoTable({
    startY: finalY + 20,
    head: [["Question", "Comment"]],
    body: allComments.map((comment) => [`Q${comment.questionId}`, comment.text]),
    headStyles: { fillColor: [66, 66, 66] },
    margin: { top: finalY + 20 },
    columnStyles: {
      0: { cellWidth: 20 },
      1: { cellWidth: 170 },
    },
  });

  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 10,
      { align: "center" }
    );
  }

  doc.save(`Evaluation_${selectedCourse}_${selectedGrade}.pdf`);
}
