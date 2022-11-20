import React from 'react';

const ConfirmationModal = ({ title, message, modalCancel, handleDeleteDoctor, modalData }) => {
    return (
        <>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}.</p>
                    <div className="modal-action">
                        <label
                            onClick={() => handleDeleteDoctor(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg border-none text-sm mr-2">Yes, I'm sure</label>
                        <button
                            onClick={modalCancel}
                            className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10'>No, cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;