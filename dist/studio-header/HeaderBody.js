import React from 'react';
import PropTypes from 'prop-types';
import { ActionRow, Button, Container, Nav, Row } from '@edx/paragon';
import { Close, MenuIcon } from '@edx/paragon/icons';
import CourseLockUp from './CourseLockUp';
import UserMenu from './UserMenu';
import BrandNav from './BrandNav';
import NavDropdownMenu from './NavDropdownMenu';
var HeaderBody = function HeaderBody(_ref) {
  var logo = _ref.logo,
    logoAltText = _ref.logoAltText,
    number = _ref.number,
    org = _ref.org,
    title = _ref.title,
    username = _ref.username,
    isAdmin = _ref.isAdmin,
    studioBaseUrl = _ref.studioBaseUrl,
    logoutUrl = _ref.logoutUrl,
    authenticatedUserAvatar = _ref.authenticatedUserAvatar,
    isMobile = _ref.isMobile,
    setModalPopupTarget = _ref.setModalPopupTarget,
    toggleModalPopup = _ref.toggleModalPopup,
    isModalPopupOpen = _ref.isModalPopupOpen,
    isHiddenMainMenu = _ref.isHiddenMainMenu,
    mainMenuDropdowns = _ref.mainMenuDropdowns,
    outlineLink = _ref.outlineLink;
  var renderBrandNav = /*#__PURE__*/React.createElement(BrandNav, {
    studioBaseUrl: studioBaseUrl,
    logo: logo,
    logoAltText: logoAltText
  });
  return /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    className: "px-4"
  }, /*#__PURE__*/React.createElement(ActionRow, {
    as: "header"
  }, isHiddenMainMenu ? /*#__PURE__*/React.createElement(Row, {
    className: "flex-nowrap ml-4"
  }, renderBrandNav) : /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(Button, {
    ref: setModalPopupTarget,
    className: "d-inline-flex align-items-center",
    variant: "tertiary",
    onClick: toggleModalPopup,
    iconBefore: isModalPopupOpen ? Close : MenuIcon,
    "data-testid": "mobile-menu-button"
  }, "Menu") : /*#__PURE__*/React.createElement(Row, {
    className: "flex-nowrap m-0"
  }, renderBrandNav, /*#__PURE__*/React.createElement(CourseLockUp, {
    outlineLink: outlineLink,
    number: number,
    org: org,
    title: title
  })), isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionRow.Spacer, null), renderBrandNav) : /*#__PURE__*/React.createElement(Nav, {
    "data-testid": "desktop-menu",
    className: "ml-4"
  }, mainMenuDropdowns.map(function (dropdown) {
    var id = dropdown.id,
      buttonTitle = dropdown.buttonTitle,
      items = dropdown.items;
    return /*#__PURE__*/React.createElement(NavDropdownMenu, {
      id: id,
      buttonTitle: buttonTitle,
      items: items
    });
  }))), /*#__PURE__*/React.createElement(ActionRow.Spacer, null), /*#__PURE__*/React.createElement(Nav, null, /*#__PURE__*/React.createElement(UserMenu, {
    username: username,
    studioBaseUrl: studioBaseUrl,
    logoutUrl: logoutUrl,
    authenticatedUserAvatar: authenticatedUserAvatar,
    isAdmin: isAdmin
  }))));
};
HeaderBody.propTypes = {
  studioBaseUrl: PropTypes.string.isRequired,
  logoutUrl: PropTypes.string.isRequired,
  setModalPopupTarget: PropTypes.func.isRequired,
  toggleModalPopup: PropTypes.func.isRequired,
  isModalPopupOpen: PropTypes.bool.isRequired,
  number: PropTypes.string,
  org: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  authenticatedUserAvatar: PropTypes.string,
  username: PropTypes.string,
  isAdmin: PropTypes.bool,
  isMobile: PropTypes.bool,
  isHiddenMainMenu: PropTypes.bool,
  mainMenuDropdowns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    buttonTitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string
    }))
  })),
  outlineLink: PropTypes.string
};
HeaderBody.defaultProps = {
  logo: null,
  logoAltText: null,
  number: '',
  org: '',
  title: '',
  authenticatedUserAvatar: null,
  username: null,
  isAdmin: false,
  isMobile: false,
  isHiddenMainMenu: false,
  mainMenuDropdowns: [],
  outlineLink: null
};
export default HeaderBody;
//# sourceMappingURL=HeaderBody.js.map