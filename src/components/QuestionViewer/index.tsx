import QNumber from "./QNumber";
import QMultiOptions from "./QMultiOptions";
import QNPS from "./QNPS";
import QMatrix from "./QMatrix"
import store from "../../services/Store";
import { useState } from "react";

// Inputs definition
interface Inputs{
  configs: {
    questions: {
      id: number,
      type: string,
      title: string,
      viewMode?: string,
      options?: {
        title: string,
        value?: number
      }[]
      rows?: string[],
      columns?: string[],
    }[]
  }
}

export default function QuestionViewer({configs: {questions = []}}: Inputs) {
  const [answers, updateAnswers]: [any, any] = useState(store.getState().answers);

  const QuestionTypes: any = {
    'number': QNumber,
    'multi-options': QMultiOptions,
    'nps': QNPS,
    'matrix': QMatrix,
  };

  store.subscribe(() => updateAnswers(store.getState().answers))

  return (
    <div>
      {questions.map((question: any) => {

          // find question component based on name and QuestionTypes array
          let QuestionObject: any = QuestionTypes[question.type];
          let Question = (QuestionObject !== null) ? <QuestionObject configs={question} /> : <></>;
          
          return <div 
            key={question.id}
            style={{
              margin: 10,
              padding: 10,
              border: '1px solid blue',
              borderRadius: 5
            }}
          >
            <h2>
              <b style={{color: 'red'}}>Q{question.id}:</b> 
              {
                question.title.replace(/\{\{\s*Q(\d+)\s*\}\}/ig, 
                  (all: string, num: number) => (answers[num] !== undefined ? answers[num].title.toString() : ""))
              }
            </h2>
            {Question}
          </div>
      })}
    </div>
  );
}
