"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"
import { generateEvaluationPDF } from "../components/pdf-generator"

const GRADES = ["All Grades", "Grade 11", "Grade 8", "College"]

const COURSE_OPTIONS_BY_GRADE = {
  "All Grades": ["All Courses"],
  "Grade 11": ["All Courses", "ABM", "STEM"],
  "Grade 8": ["All Courses", "Daniel"],
  "College": ["All Courses", "BSIS 4"],
}

export function EvaluationTable() {
  const [showAllComments, setShowAllComments] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState("All Grades")
  const [selectedCourse, setSelectedCourse] = useState("All Courses")
  const COMMENTS_TO_SHOW = 5

  useEffect(() => {
    setSelectedCourse("All Courses")
  }, [selectedGrade])

  const evaluationData = [
    {
      id: 1,
      question: "Learning Environments: Rate the classroom environment in terms of positivity and its impact on your learning experience.",
      score: 4,
      comments: [],
    },
    {
      id: 2,
      question: "Student Development: How well did the teacher support your intellectual, social, emotional, and physical development?",
      score: 4,
      comments: [],
    },
    {
      id: 3,
      question: "Content Knowledge: How would you rate the teacher's depth of knowledge in the subject matter?",
      score: 5,
      comments: [],
    },
    {
      id: 4,
      question: "Application of Content: How effectively did the teacher help you apply the knowledge gained in practical situations?",
      score: 3,
      comments: [],
    },
    {
      id: 5,
      question: "Planning for Instruction: Evaluate the clarity and organization of lessons and instructional materials.",
      score: 4,
      comments: [],
    },
    {
      id: 6,
      question: "Teaching Strategies: How diverse and effective were the teaching strategies used by the teacher?",
      score: 5,
      comments: [],
    },
    {
      id: 7,
      question: "Ethical Practice: To what extent did the teacher demonstrate ethical standards and professionalism?",
      score: 4,
      comments: [],
    },
    {
      id: 8,
      question: "Leadership and Collaboration: Rate the teacher's ability to collaborate with others and provide leadership within the school community.",
      score: 4,
      comments: [],
    },
    {
      id: 9,
      question: "Overall Rating: On a scale of 1 to 5, please rate your overall satisfaction with the teacher.",
      score: 4,
      comments: [],
    },
    {
      id: 10,
      question: "Provide any specific suggestions for how the teacher could improve their teaching methods or the course. Share any additional comments or thoughts about your experience with the teacher.",
      score: 0,
      comments: [
        "Very knowledgeable in the subject",
        "Shows deep understanding of concepts",
        "Could provide more real-world examples",
        "Sometimes goes too fast through complex topics",
        "Visual aids are helpful",
        "Explains difficult concepts in simple terms",
        "Shows deep understanding of concepts",
        "Could provide more real-world examples",
        "Sometimes goes too fast through complex topics",
        "Visual aids are helpful",
        "Explains difficult concepts in simple terms"
      ],
    },
  ]

  const filteredEvaluationData = evaluationData.filter(item => item.id !== 10)
  const totalComments = evaluationData.reduce((total, item) => total + item.comments.length, 0)

  const allComments = evaluationData.flatMap((item) =>
    item.comments.map((comment, commentIndex) => ({
      id: `${item.id}-${commentIndex}`,
      questionId: item.id,
      text: comment,
    }))
  )

  const commentsToDisplay = showAllComments ? allComments : allComments.slice(0, COMMENTS_TO_SHOW)
  const needsViewAllButton = totalComments > 6

  const handleGeneratePDF = () => {
    generateEvaluationPDF({
      evaluationData,
      selectedGrade,
      selectedCourse,
      title: "Course Evaluation Report",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
  <h2 className="text-lg font-semibold">Evaluation Results</h2>
  <button
    onClick={handleGeneratePDF}
    className="flex items-center justify-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 w-full sm:w-auto"
  >
    <Download className="h-4 w-4" />
    Download PDF
  </button>
</div>

{/* Filters */}
<div className="border rounded-lg p-4 mb-6 bg-white shadow-sm">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div>
      <label htmlFor="grade" className="block text-sm font-medium mb-1 text-gray-700">
        Grade/Level
      </label>
      <select
        id="grade"
        value={selectedGrade}
        onChange={(e) => setSelectedGrade(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {GRADES.map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label htmlFor="course" className="block text-sm font-medium mb-1 text-gray-700">
        Course
      </label>
      <select
        id="course"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {(COURSE_OPTIONS_BY_GRADE[selectedGrade] || ["All Courses"]).map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
    </div>
  </div>


      </div>

      {/* Evaluation Table */}
      <div className="rounded-md border overflow-x-auto max-w-full">
        <table className="min-w-[600px] w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 w-[60%] font-semibold">Question</th>
              <th className="px-6 py-3 font-semibold">Total Score (out of 5)</th>
              <th className="px-6 py-3 font-semibold text-right">Performance Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvaluationData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-6 py-4">{item.question}</td>
                <td className="px-6 py-4">{item.score.toFixed(1)}</td>
                <td className="px-6 py-4 text-right">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      item.score >= 5
                        ? "bg-blue-100 text-blue-800"
                        : item.score >= 4
                        ? "bg-yellow-100 text-yellow-800"
                        : item.score >= 3
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.score >= 5
                      ? "Very Good"
                      : item.score >= 4
                      ? "Good"
                      : item.score >= 3
                      ? "Excellent"
                      : "Needs Improvement"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comments Section */}
      <div className="border rounded-md shadow-sm p-6 bg-white">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start gap-2">
          <div>
            <h2 className="text-lg font-semibold">Student Comments</h2>
            <p className="text-sm text-gray-500">
              Total Comments: <span className="font-medium">{totalComments}</span>
            </p>
          </div>
          {needsViewAllButton && (
            <button
              onClick={() => setShowAllComments(!showAllComments)}
              className="border px-3 py-1.5 rounded text-sm hover:bg-gray-100"
            >
              {showAllComments ? "Show Less" : "View All Comments"}
            </button>
          )}
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">
            Provide any specific suggestions for how the teacher could improve their teaching methods or the course.
            <br /> Share any additional comments or thoughts about your experience with the teacher.
          </p>
        </div>
        <ul className="space-y-3">
          {commentsToDisplay.map((comment) => (
            <li key={comment.id} className="bg-gray-50 border rounded-md p-3 flex justify-between items-start">
              <p className="text-sm text-gray-700">"{comment.text}"</p>
            </li>
          ))}
        </ul>

        {!showAllComments && needsViewAllButton && totalComments > COMMENTS_TO_SHOW && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Showing {Math.min(COMMENTS_TO_SHOW, totalComments)} of {totalComments} comments
            </p>
          </div>
        )}
      </div>
    </div>
  )
}