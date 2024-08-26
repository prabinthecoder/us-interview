"use client";

import { DATA } from "@/data/resume";

export function QuestionTable() {

    return (
        <div className="space-y-6">
        {DATA.question.map((section, index) => (
          <div key={index}>
            <h1 className="text-2xl font-bold mb-2 ">{section.title}</h1>
            <ul className="list-disc pl-5 space-y-2 ms-4">
              {section.questions.map((question, qIndex) => (
                <li key={qIndex} className="">{question}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    );
}

