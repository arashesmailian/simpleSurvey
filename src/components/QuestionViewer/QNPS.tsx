import { useEffect, useState } from "react";
import store from "../../services/Store";
import { answerUpdate } from "../../services/Store/reducers/answers";

// Inputs definition
interface Inputs {
  configs: {
    id: number,
  },
}

export default function QNPS({configs: {id}}: Inputs) {
  const [inputValue, setInputValue] = useState("0");

  useEffect(() => {
    store.dispatch(answerUpdate({id: id, value: inputValue, title: inputValue}));
  }, [inputValue, id]);

  return (
    <>
      <input type="range" min={1} max={10} value={inputValue} onChange={e => setInputValue(e.target.value)} />
      {inputValue} / 10
    </>
  );
}
