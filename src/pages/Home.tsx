import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchJobListings } from '../viewmodel/jobViewModel';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';
import { IonContent, IonButton, IonText, IonSpinner } from '@ionic/react';
import '../styles/home.css';

// Home component using Ionic components
function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { jobs, loading, error } = useSelector((state: RootState) => state.job);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        dispatch(fetchJobListings());
    }, [dispatch]);

    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show loading state while data is being fetched
    if (loading) return <div className="loading">Loading...</div>;

    // Show error state if data fetching fails
    if (error) return <div className="error">{error}</div>;

    return (
        <IonContent className="home">
            <div className="listingHeader">
                Job Listings
            </div>

            <div className="jobLists">
                {currentJobs.length === 0 ? (
                    <div>Oops! No jobs available at the moment. Try again later.</div>
                ) : (
                    currentJobs.map((job) => <JobCard key={job.id} job={job} />)
                )}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </IonContent>
    );
}

export default Home;
