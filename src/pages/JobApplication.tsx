import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitJobApplication } from "../viewmodel/jobViewModel";
import { fetchJobDetails } from "../viewmodel/jobViewModel";
import { AppDispatch, RootState } from "../store/store";
import "../styles/jobApplication.css";
import { Link } from "react-router-dom";
import { IonContent } from "@ionic/react";
import SuccessPopUp from "../components/SuccessPopup";

function JobApplication() {
    const { id } = useParams<{ id: string }>();  // Get job ID from URL
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>(); // Redux dispatch

    // Get job details and state from Redux store
    const { selectedJob, loading, error } = useSelector((state: RootState) => state.job);

    // Form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [resume, setResume] = useState<File | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);  // State to track success

    // Fetch job details when the component mounts
    useEffect(() => {
        if (id) {
            dispatch(fetchJobDetails(Number(id)));
        }
    }, [id, dispatch]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const applicationData = {
        name,
        email,
        coverLetter,
        jobId: id,
    };

    // Dispatch the application submission
    dispatch(submitJobApplication(applicationData));

    // Reset form after submission
    setName("");
    setEmail("");
    setCoverLetter("");
    setResume(null);

    // Show the success popup
    setIsSuccess(true);

    history.push("/");  // Adjust the time for popup visibility
};


    // Close the success popup
    const closePopUp = () => {
        setIsSuccess(false);
    };

            // Show loading state while data is being fetched
    if (loading) return <div className="loading">Loading...</div>;

        // Show loading state while data is being fetched
    if (error) return <div className="error">{error}</div>;

    return (
        <IonContent fullscreen>
            <div className="FormContainer">
                <Link className="backFromApplication" to={selectedJob ? `/job-details/${selectedJob.id}` : "#"}>
                    <img className="backBtn" src="/assets/backButton.png" alt="back" />
                    <div className="backTxtApplication">Back</div>
                </Link>

                <div className="jobApplication">
                    {selectedJob && (
                        <>
                            <h1>Apply for {selectedJob.title}</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="nameField">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="emailField">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="coverLetterField">
                                    <label htmlFor="coverLetter">Cover Letter</label>
                                    <textarea
                                        id="coverLetter"
                                        value={coverLetter}
                                        onChange={(e) => setCoverLetter(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="resumeField">
                                    <label htmlFor="resume">Upload Resume (PDF only)</label>
                                    <input
                                        className="resume"
                                        type="file"
                                        id="resume"
                                        accept=".pdf"
                                        onChange={(e) => setResume(e.target.files?.[0] || null)}
                                        required
                                        style={{
                                            position: 'absolute',
                                            width: '1px',
                                            height: '1px',
                                            opacity: 0,
                                            pointerEvents: 'none',
                                        }}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("resume")?.click()}
                                        className="chooseFileBtn"
                                    >
                                        <img src="/assets/download.png" alt="download" />
                                    </button>

                                    {resume && <p>{resume.name}</p>}
                                </div>

                                <button className="submitBtn" type="submit">Submit Application</button>
                            </form>
                        </>
                    )}
                </div>
            </div>

            {isSuccess && <SuccessPopUp message="Your application has been successfully submitted!" onClose={closePopUp} />}
        </IonContent>
    );
}

export default JobApplication;
