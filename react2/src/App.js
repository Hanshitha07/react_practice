import './App.css';
import Apple from './Apple'; // Importing the Apple component
import Sample from './example/Sample'; // Importing the Sample component
import TestComponents from './example/TestComponents'; // Importing the TestComponents component
function App() {
  return (
    <div className="App">
      <Apple />
      <Sample />
      <TestComponents />
    </div>
  );
}

export default App;
