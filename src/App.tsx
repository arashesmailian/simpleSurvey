import QuestionViewer from './components/QuestionViewer';
import formConfig from './services/formConfigs.json';


function App() {
  
  return (
    <>
      <QuestionViewer configs={formConfig} />
    </>
  );
}

export default App;
