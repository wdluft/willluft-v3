import React from 'react';
import PropTypes from 'prop-types';

const ResumeItem = ({ position }) => (
  <div>
    <div className="position__heading">
      {position.company ? <h3>{position.company}</h3> : ''}
      <h5 className="position__title">{position.position}</h5>
      <p>
        {position.start} - {position.end}
      </p>
    </div>
    <p>{position.description}</p>
  </div>
);

ResumeItem.propTypes = {
  position: PropTypes.object.isRequired,
};

export default ResumeItem;
