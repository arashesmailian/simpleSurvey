import { useEffect, useState } from "react";
import store from "../../services/Store";
import { answerUpdate } from "../../services/Store/reducers/answers";

// Inputs definition
interface Inputs {
  configs: {
    id: number;
    viewMode?: string;
    options: {
      title: string;
      value?: number;
    }[];
  };
}

export default function QNumber({
  configs: { id, viewMode = "select", options = [] },
}: Inputs) {
  
  const [inputValue, setInputValue] = useState({ value: "", title: "" });

  useEffect(() => {
    store.dispatch(answerUpdate({ id: id, ...inputValue }));
  }, [inputValue, id]);

  let selectJSX = <>Problem in view mode</>;
  switch (viewMode) {
    case "select":
      selectJSX = (
        <>
          <select
            value={inputValue.value}
            onChange={(e) =>
              setInputValue({
                value: e.target.value,
                title: e.target.options[e.target.selectedIndex].innerHTML,
              })
            }
          >
            {options.map((option) => {
              const key = option.value === null ? option.title : option.value;
              return (
                <option value={key} key={key}>
                  {option.title}
                </option>
              );
            })}
          </select>
        </>
      );
      break;
    case "radio":
      selectJSX = (
        <>
          {options.map((option) => {
            const key = option.value === null ? option.title : option.value;
            return (
              <label
                key={key}
                style={{ cursor: "pointer" }}
                onClick={(e) =>
                  setInputValue({ value: `${key}`, title: option.title })
                } 
              >
                <input type={"radio"} name={`q${id}options`} value={key} />
                {option.title}
              </label>
            );
          })}
        </>
      );
      break;
  }

  return <>{selectJSX}</>;
}
