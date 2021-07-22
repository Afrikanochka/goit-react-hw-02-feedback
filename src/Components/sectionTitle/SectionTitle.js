import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({title, children}) => {
    return (
        <section className="section">
            <h2 className="sectionTitle">{title}</h2>
            {children}
        </section>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default SectionTitle;