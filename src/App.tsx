import { Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Header from './components/Header';
import './styles/index.css';
import Home from './pages/Home';
import BottomNav from './components/BottomNav';
import Applied from './pages/AppliedJobs';
import About from './pages/about';
import JobDetails from './pages/JobDetails';
import { Provider } from 'react-redux';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <Header />

        <IonRouterOutlet>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/job-details/:id" component={JobDetails} />
            <Route exact path="/applied" component={Applied} />
            <Route exact path="/about" component={About} />
          </Switch>
        </IonRouterOutlet>

        <BottomNav />
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
