import { useEffect, useState } from "react";
import store from "../../services/Store";
import { answerUpdate } from "../../services/Store/reducers/answers";

// Inputs definition
interface Inputs {
  configs: {
    id: number;
    rows: string[];
    columns: string[];
  };
}

export default function QNumber({
  configs: { id, rows = [], columns = [] },
}: Inputs) {
  
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    store.dispatch(answerUpdate({ id: id,value:inputValue, title:inputValue }));
  }, [inputValue, id]);

      return (
        <>
        <table style={{width:"70%"}}>
          <thead>
            <tr>
              <th>&nbsp;</th>
              {
                columns.map((column)=>{
                  const key = column !== null ? column : "";
                  return(
                    <th
                     key={key}
                     style={{border: "1px solid #ddd", textAlign:"center",padding:"15px"}}
                     >
                      {column}
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              rows.map((row) => {
                const key = row !== null ? row : "";
                return(
                  <tr key={key}>
                  <td>{row}</td>
                  {
                    columns.map((column)=>{
                      return(
                        <td
                          style={{border: "1px solid #ddd", textAlign:"center",padding:"10px"}}
                        >
                          <label 
                            key={column}
                            onClick ={(e)=>
                              setInputValue({...inputValue,[row]:column})
                            }
                          >
                            <input type={"radio"} name={id+row} value={column} />
                          </label>
                        </td>
                      )
                    })
                  }
                  </tr>
                ) 
              })
            }
          </tbody>
        </table>
        </>
      );
}
