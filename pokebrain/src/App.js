import './css/main.scss';
import Router from './routers/Router';
import GlobalState from "./global/GlobalState";

function App() {
  document.title = 'PokeBrain'
  return (
    <div className="App">
      
        <GlobalState>
          <Router />
        </GlobalState>
      
    </div>
  );
}

export default App;
