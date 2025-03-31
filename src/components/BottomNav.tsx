import { IonFooter, IonTabBar, IonTabButton, IonText } from '@ionic/react';
import '../styles/bottomNav.css';

function BottomNav() {
    return (
        <IonFooter className="bottomNav">
            <IonTabBar slot="bottom">
                <IonTabButton tab="applied" href="/applied">
                    <IonText>Applied</IonText>
                </IonTabButton>

                <IonTabButton tab="about" href="/about">
                    <IonText>About</IonText>
                </IonTabButton>
            </IonTabBar>
        </IonFooter>
    );
};

export default BottomNav;
