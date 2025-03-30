import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return(
        <IonHeader style={{ borderRadius: '0 0 50px 50px' }}>
            <IonToolbar style={{ borderRadius: '0 0 50px 50px' }}>
                <div className="header">
                    <Link className="headerLogo" to="/">
                        <img src="/assets/Favicon.png" alt="Logo"/>
                    </Link>
                    <Link className="headerTitle" to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        JobSphere
                    </Link>
                </div>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header;

