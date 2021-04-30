import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// info Add lazy loading
import About from './pages/aboutPage/About';
import Label from './pages/labelPage/Label';
import Podcast from './pages/podcastPage/Podcast';
import Publishing from './pages/publishingPage/Publishing';
import Studio from './pages/studioPage/Studio';
import LiveAndCloseup from './pages/liveAndCloseupPage/LiveAndCloseup';
import MainNavigation from './components/navigations/MainNavigation';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <Label />
        </Route>
        <Route path="/publishing">
          <Publishing />
        </Route>
        <Route path="/studio">
          <Studio />
        </Route>
        <Route path="/liveAndCloseup">
          <LiveAndCloseup />
        </Route>
        <Route path="/podcast">
          <Podcast />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
