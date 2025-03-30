import React from 'react';
import { Link } from 'react-router-dom';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';
import '../styles/jobCard.css';

const JobCard: React.FC<{ job: any }> = ({ job }) => {
    return (
        <IonCard className="jobItem">
            <IonCardHeader className='jobItemHeader'>
                <IonCardTitle className='jobItemTitle'>{job.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='jobItemContent'>
                <p className='jobDescription'>{job.body}</p>
                <Link className='jobItemBtn' to={`/job-details/${job.id}`}>
                    <IonButton className="ion-no-style">
                        View Details
                    </IonButton>
                </Link>
            </IonCardContent>
        </IonCard>
    );
};

export default JobCard;
