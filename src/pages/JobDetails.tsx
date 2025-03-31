import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchJobDetails } from '../viewmodel/jobViewModel';
import { Link, useParams } from 'react-router-dom';
import { IonContent, IonPage, IonButton, IonText, IonSpinner} from '@ionic/react';
import '../styles/jobDetails.css'

function JobDetails() {
    const { id } = useParams<{ id: string }>();  // Get job id from URL parameters
    const dispatch = useDispatch<AppDispatch>();  // Dispatch actions to Redux store
    const { selectedJob, loading, error } = useSelector((state: RootState) => state.job);  // Get job details, loading, and error states from Redux store

    // Fetch job details when component mounts or job id changes using view-model
    useEffect(() => {
        if (id) {
            dispatch(fetchJobDetails(Number(id)));  // Dispatching the async action to fetch job details
        }
    }, [dispatch, id]);

    return (
            <IonContent fullscreen className="jobDetailsContent">
                {loading && (
                    <div className="loading">
                        <IonSpinner name="crescent" />
                    </div>
                )}

                {error && (
                    <div className="error">
                        <IonText color="danger">{error}</IonText>
                    </div>
                )}

                <div className="backLink">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <IonButton fill="clear" color="primary">
                            <img className="backBtn" src="/assets/backButton.png" alt="back" />
                            Back
                        </IonButton>
                    </Link>
                </div>

                <div className="descriptionBox">
                    {selectedJob ? (
                        <div className="jobDescription">
                            <IonText>
                                <h1>{selectedJob.title}</h1>
                                <p>{selectedJob.body}</p>
                            </IonText>
                        </div>
                    ) : (
                        <div>No job details available</div>
                    )}

                    <div className="applyButtonContainer">
                        <Link to={selectedJob ? `/apply/${selectedJob.id}` : "#"}>
                            <IonButton disabled={!selectedJob} expand="full">Apply</IonButton>
                        </Link>
                    </div>
                </div>
            </IonContent>
    );
}

export default JobDetails;
