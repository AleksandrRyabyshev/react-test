import React from 'react';
import PropTypes from 'prop-types';

const Header = () => (
  <header>
    <div>
      Header
    </div>
  </header>
);

Header.propTypes = {
  intl: PropTypes.object.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
