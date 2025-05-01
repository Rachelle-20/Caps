"use client";

import { useState } from "react";
import { Download, FileBarChart, Home, Users } from "lucide-react";
import { AnalyticsChart } from "@/components/analytics-chart";
import { EvaluationTable } from "@/components/evaluation-table";

export function DashboardPage() {
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-4 md:p-6">
          {/* Summary Cards */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
            {[
              {
                title: "Average Score",
                desc: "Across all evaluations",
                value: "4/5",
                note: "+2.1% from last semester",
              },
              {
                title: "Total Evaluations",
                desc: "Completed evaluations",
                value: "98",
                note: "87% completion rate",
              },
              {
                title: "Total Comments",
                desc: "Student feedback received",
                value: "11",
                note: "Most on teaching methodology",
              },
            ].map((card, idx) => (
              <div key={idx} className="border rounded-xl p-4 shadow-sm bg-white w-full">
                <div className="text-sm font-medium">{card.title}</div>
                <div className="text-xs text-gray-500">{card.desc}</div>
                <div className="text-2xl font-bold mt-2">{card.value}</div>
                <div className="text-xs text-gray-400">{card.note}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="border rounded-xl p-4 shadow-sm bg-white mb-6 w-full">
            <div className="mb-2">
              <h2 className="text-lg font-semibold">Overall Performance Analytics</h2>
            </div>
            <AnalyticsChart />
          </div>

          {/* Evaluation Table */}
          <div className="border rounded-xl p-4 shadow-sm bg-white mb-6 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
              {/* Optional controls can go here */}
            </div>
            <EvaluationTable grade={selectedGrade} course={selectedCourse} />
          </div>
        </main>
      </div>
    </div>
  );
}
