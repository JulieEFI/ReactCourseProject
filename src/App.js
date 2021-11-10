import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/';
import Home from './components/Home';
import Footer from './components/Footer';
import Structures from './components/Structures';
import Civilizations from './components/Civilizations';
import Units from './components/Units'
import Technologies from './components/Technologies'
import './App.scss';
import UniqueTechs from './components/UniqueTechs';
import UniqueUnits from './components/UniqueUnits';
import UnitsCreatedIn from './components/UnitsCreatedIn'


function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>
    <div className="container">
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/civilizations' exact component={Civilizations} />
    <Route path='/civilizations/unique_tech/:id' exact  component={UniqueTechs} />
    <Route path='/civilizations/unique_unit/:id'  component={UniqueUnits} />
    <Route path='/structures' component={Structures} />
    <Route path='/units' exact component={Units} />
    <Route path='/units/created_in/:id' component={UnitsCreatedIn} />
    <Route path='/technologies' component={Technologies} />

    </Switch>
    </div>
    <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
