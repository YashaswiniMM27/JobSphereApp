import { Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Header from './components/Header';
import './styles/index.css';
import Home from './pages/Home';
import BottomNav from './components/BottomNav';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Header />
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
    <BottomNav/>
  </IonApp>
);

export default App;
