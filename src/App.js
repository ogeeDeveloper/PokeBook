import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavigationBar from './components/MainLayout/NavigationBar';
import PokeInfo from './components/UI/PokeInfo';
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Route path="/" component={PokeInfo} exact/>
      </Router>
    </div>
  );
}

export default App;
