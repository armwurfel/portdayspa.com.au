import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ title, children, price, time }) => {
  return (
    <div className="flex flex-wrap lg:flex-no-wrap justify-between mt-2">
      <div className="mt-4 pr-4">
        <h4 className="font-bold">{title}</h4>
        {children}
      </div>
      <div className="flex-shrink-0 font-medium leading-tight mt-4 lg:text-right w-32">
        <p>{price}</p>
        <p className="mt-0">
          <small>{time}</small>
        </p>
      </div>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  price: PropTypes.any,
  time: PropTypes.string,
};

export default Service;
