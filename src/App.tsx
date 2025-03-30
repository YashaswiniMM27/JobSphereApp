import { Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Header from './components/Header';
import './styles/index.css'

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Header/>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
