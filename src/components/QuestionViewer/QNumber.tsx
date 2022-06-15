import { useEffect, useState } from "react";
import store from "../../services/Store";
import { answerUpdate } from "../../services/Store/reducers/answers";

// Inputs definition
interface Inputs {
  configs: {
    id: number,
  },
}

export default function QNumber({configs: {id}}: Inputs) {
  const [inputValue, setInputValue] = useState("0");

  useEffect(() => {
    store.dispatch(answerUpdate({id: id, value: inputValue, title: inputValue}));
  }, [inputValue, id]);

  return (
    <>
      <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
    </>
  );
}
