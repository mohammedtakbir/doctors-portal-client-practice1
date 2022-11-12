import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <>
            <div className={`card sm:flex-row flex-col card-side bg-base-100 shadow-xl px-6 py-10 ${bgClass} text-white md:mx-0 mx-3`}>
                <figure>
                    <img src={icon} className='sm:w-full w-[90px]' alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default InfoCard;