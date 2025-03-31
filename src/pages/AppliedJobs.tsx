import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";
import { Link } from "react-router-dom";
import storage from "../storage/storage";
import '../styles/appliedPage.css'

function AppliedJobs() {
    const [appliedJobs, setAppliedJobs] = useState<any[]>([]);

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            const jobs = await storage.get('appliedJobs') || [];
            setAppliedJobs(jobs);
        };

        fetchAppliedJobs();
    }, []);

    return (
        <IonContent fullscreen>
            <div className="appliedJobsContainer">
                <h1>Applied Jobs</h1>
                {appliedJobs.length > 0 ? (
                    <ul>
                        {appliedJobs.map((job, index) => (
                            <li className="appliedJobList" key={index}>
                                <h3>{job.jobTitle}</h3>
                                <p>{job.name}</p>
                                <p>{job.email}</p>
                                <p className="appliedCL">{job.coverLetter}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="noJobs">No jobs applied yet.</p>
                )}
                <Link className="backHome" style={{textDecoration: 'none'}} to="/">Back to Home</Link>
            </div>
        </IonContent>
    );
}

export default AppliedJobs;
