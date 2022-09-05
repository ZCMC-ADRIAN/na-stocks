import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from './Pages/AddItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddItem />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
