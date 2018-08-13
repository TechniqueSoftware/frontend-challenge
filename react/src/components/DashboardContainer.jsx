import React from 'react';
import PropTypes from 'prop-types';

class DashboardContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Promotion Analytics</h1>
        <p>{this.props.example}</p>
      </React.Fragment>
    );
  }
}

DashboardContainer.propTypes = {
  example: PropTypes.string.isRequired
};

export default DashboardContainer;
