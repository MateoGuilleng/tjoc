import React from 'react';

const InfoCard = ({ imageUrl, title, content, createdAt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-white border-2 border-white/25">
      <img className="w-full" src={imageUrl} alt="Card image cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-white text-base">
          {content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-white/70 text-sm">Created on: {createdAt}</span>
      </div>
    </div>
  );
};

export default InfoCard;
