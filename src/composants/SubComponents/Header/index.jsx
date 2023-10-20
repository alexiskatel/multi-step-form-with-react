import React from 'react';

export const Header = ({title, subTitle}) => {
  return (
    <div>
      <div>
        <h3 className='fw-bold'> {title} </h3>
        <span className='subtitle'> {subTitle} </span>
      </div>
    </div>
  );
};