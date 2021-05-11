import './App.css';
import Router from './routers/Router';
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <div className="App">
      
        <GlobalState>
          <Router />
        </GlobalState>
      
    </div>
  );
}

export default App;
