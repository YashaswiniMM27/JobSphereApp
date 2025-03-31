// src/components/SuccessPopup.tsx
import React, { useEffect } from 'react';

interface SuccessPopUpProps {
    message: string;
    onClose: () => void;
}

const SuccessPopUp: React.FC<SuccessPopUpProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="success-popup">
            <p>{message}</p>
        </div>
    );
};

export default SuccessPopUp;