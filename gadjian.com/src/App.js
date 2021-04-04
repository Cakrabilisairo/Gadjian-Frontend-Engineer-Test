import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import Home from './pages/Home'
import PersonelLists from './pages/PersonelList'

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/personel-list">
            <div className="flex">
              <SideNavbar />
              <PersonelLists />
            </div>
          </Route>  
          <Route path="/">
            <SideNavbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
