import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout_success } from '../../services/Store/reducers/auth';
import store from "../../services/Store";
import QNumber from "./QNumber";
import QMultiOptions from "./QMultiOptions";
import QNPS from "./QNPS";
import QMatrix from "./QMatrix"

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
  const navigate = useNavigate();
  const authState:any = useSelector((state:any):any => state.auth);
  console.log(authState)
  const buttonhandler = (event: React.MouseEvent<HTMLButtonElement>) => { 
    event.preventDefault();
    let user:any = JSON.parse(localStorage.getItem('user') || '{}')
    // console.log(user)
    // // store.dispatch(logout_success({ id:user.email ,  }));
    store.dispatch(logout_success({ id:user.email, email:user.email, password: user.password }));
    navigate("/login")
  }
  

  return (
    <div>
      <button type="button" onClick={buttonhandler}>logout</button>
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
