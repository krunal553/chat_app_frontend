import './UserProfile.scss'
import React, { useEffect, useState } from 'react';


const UserProfile = ({ img }) => {

    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
        // Add event listener to handle the browser's back button
        window.history.pushState(null, '', window.location.href);
        window.onpopstate = handlePopstate;
    };

    const closeModal = () => {
        setIsOpen(false);
        // Remove event listener when the modal is closed
        window.onpopstate = null;
    };

    const handlePopstate = () => {
        closeModal();
    };

    useEffect(() => {
        // Remove event listener and close modal when the component is unmounted
        return () => {
            window.onpopstate = null;
            closeModal();
        };
    }, []);


    return (
        <div className='UserProfile'>
            <div className="userInfo" onClick={openModal}>
                <img src={img} alt="" />
            </div>

            {isOpen && (
                <div className="modal">
                    <span>Krunal Makwana</span>
                    {/* <div className="close" onClick={()=>{setIsOpen()}}>x</div> */}
                    <img src={img} alt="" />

                </div>
            )}
        </div>
    )
}

export default UserProfile