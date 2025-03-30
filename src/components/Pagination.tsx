import React, { useEffect, useState } from 'react';
import { IonButton, IonText } from '@ionic/react';
import '../styles/pagination.css';

/*
 * Pagination component for navigating through job listings pages.
 * Displays page numbers and "Previous" and "Next" buttons.
 */
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const [maxVisiblePages, setMaxVisiblePages] = useState(3); // Initially showing 3 pages (Prev, Current, Next)

    useEffect(() => {
        // Update max visible pages based on screen width
        const handleResize = () => {
            setMaxVisiblePages(window.innerWidth <= 600 ? 3 : 7); // Show 3 pages on mobile, 7 on larger screens
        };

        handleResize();
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    function handlePageChange(pageNumber: number) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    }

    // Determine page numbers to display
    const getVisiblePages = () => {
        const pages: number[] = [];
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust if the last page is too close to the start
        if (endPage - startPage + 1 < maxVisiblePages) {
            endPage = Math.min(totalPages, endPage + (maxVisiblePages - (endPage - startPage + 1)));
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="pagination">
            <IonButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="paginationButton"
            >
                <IonText className='paginationText' style={{color: 'black', fontSize: '12px'}}>Prev</IonText>
            </IonButton>

            {getVisiblePages().map((page) => (
                <IonButton
                    key={page}
                    fill={currentPage === page ? "solid" : "clear"}
                    color={currentPage === page ? "primary" : "medium"}
                    onClick={() => handlePageChange(page)}
                    size="small"
                    className="paginationButton"
                >
                    <IonText className='paginationText' style={{color: 'black', fontSize: '12px'}}>{page}</IonText>
                </IonButton>
            ))}

            <IonButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="paginationButton"
            >
                <IonText className='paginationText' style={{color: 'black', fontSize: '12px'}}>Next</IonText>
            </IonButton>
        </div>
    );
}

export default Pagination;
