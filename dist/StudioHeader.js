function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { APP_CONFIG_INITIALIZED, ensureConfig, getConfig, mergeConfig, subscribe } from '@edx/frontend-platform';
import { ActionRow } from '@edx/paragon';
import { Menu, MenuTrigger, MenuContent } from './Menu';
import Avatar from './Avatar';
import { LinkedLogo, Logo } from './Logo';
import { CaretIcon } from './Icons';
import messages from './Header.messages';
ensureConfig(['STUDIO_BASE_URL', 'LOGOUT_URL', 'LOGIN_URL', 'SITE_NAME', 'LOGO_URL', 'ORDER_HISTORY_URL'], 'StudioHeader component');
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER
  }, 'StudioHeader additional config');
});
var StudioDesktopHeaderBase = /*#__PURE__*/function (_React$Component) {
  _inherits(StudioDesktopHeaderBase, _React$Component);
  var _super = _createSuper(StudioDesktopHeaderBase);
  function StudioDesktopHeaderBase(props) {
    _classCallCheck(this, StudioDesktopHeaderBase);
    // eslint-disable-line no-useless-constructor
    return _super.call(this, props);
  }
  _createClass(StudioDesktopHeaderBase, [{
    key: "renderUserMenu",
    value: function renderUserMenu() {
      var _this$props = this.props,
        userMenu = _this$props.userMenu,
        avatar = _this$props.avatar,
        username = _this$props.username,
        intl = _this$props.intl;
      return /*#__PURE__*/React.createElement(Menu, {
        transitionClassName: "menu-dropdown",
        transitionTimeout: 250
      }, /*#__PURE__*/React.createElement(MenuTrigger, {
        tag: "button",
        "aria-label": intl.formatMessage(messages['header.label.account.menu.for'], {
          username: username
        }),
        className: "btn btn-outline-primary d-inline-flex align-items-center pl-2 pr-3"
      }, /*#__PURE__*/React.createElement(Avatar, {
        size: "1.5em",
        src: avatar,
        alt: "",
        className: "mr-2"
      }), username, " ", /*#__PURE__*/React.createElement(CaretIcon, {
        role: "img",
        "aria-hidden": true,
        focusable: "false"
      })), /*#__PURE__*/React.createElement(MenuContent, {
        className: "mb-0 dropdown-menu show dropdown-menu-right pin-right shadow py-2"
      }, userMenu.map(function (_ref) {
        var type = _ref.type,
          href = _ref.href,
          content = _ref.content;
        return /*#__PURE__*/React.createElement("a", {
          className: "dropdown-".concat(type),
          key: "".concat(type, "-").concat(content),
          href: href
        }, content);
      })));
    }
  }, {
    key: "renderLoggedOutItems",
    value: function renderLoggedOutItems() {
      var loggedOutItems = this.props.loggedOutItems;
      return loggedOutItems.map(function (item, i, arr) {
        return /*#__PURE__*/React.createElement("a", {
          key: "".concat(item.type, "-").concat(item.content),
          className: i < arr.length - 1 ? 'btn mr-2 btn-link' : 'btn mr-2 btn-outline-primary',
          href: item.href
        }, item.content);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        logo = _this$props2.logo,
        logoAltText = _this$props2.logoAltText,
        logoDestination = _this$props2.logoDestination,
        loggedIn = _this$props2.loggedIn,
        intl = _this$props2.intl,
        actionRowContent = _this$props2.actionRowContent;
      var logoProps = {
        src: logo,
        alt: logoAltText,
        href: logoDestination
      };
      var logoClasses = getConfig().AUTHN_MINIMAL_HEADER ? 'mw-100' : null;
      return /*#__PURE__*/React.createElement("header", {
        className: "site-header-desktop"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-skip sr-only sr-only-focusable",
        href: "#main"
      }, intl.formatMessage(messages['header.label.skip.nav'])), /*#__PURE__*/React.createElement("div", {
        className: "container-fluid ".concat(logoClasses)
      }, /*#__PURE__*/React.createElement("div", {
        className: "nav-container position-relative d-flex align-items-center"
      }, logoDestination === null ? /*#__PURE__*/React.createElement(Logo, {
        className: "logo",
        src: logo,
        alt: logoAltText
      }) : /*#__PURE__*/React.createElement(LinkedLogo, _extends({
        className: "logo"
      }, logoProps)), /*#__PURE__*/React.createElement(ActionRow, null, actionRowContent, /*#__PURE__*/React.createElement("nav", {
        "aria-label": intl.formatMessage(messages['header.label.secondary.nav']),
        className: "nav secondary-menu-container align-items-center ml-auto"
      }, loggedIn ? this.renderUserMenu() : this.renderLoggedOutItems())))));
    }
  }]);
  return StudioDesktopHeaderBase;
}(React.Component);
StudioDesktopHeaderBase.propTypes = {
  userMenu: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string
  })),
  loggedOutItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string
  })),
  logo: PropTypes.string,
  logoAltText: PropTypes.string,
  logoDestination: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  loggedIn: PropTypes.bool,
  actionRowContent: PropTypes.element,
  // i18n
  intl: intlShape.isRequired
};
StudioDesktopHeaderBase.defaultProps = {
  userMenu: [],
  loggedOutItems: [],
  logo: null,
  logoAltText: null,
  logoDestination: null,
  avatar: null,
  username: null,
  loggedIn: false,
  actionRowContent: null
};
var StudioDesktopHeader = injectIntl(StudioDesktopHeaderBase);
var StudioHeader = function StudioHeader(_ref2) {
  var intl = _ref2.intl,
    actionRowContent = _ref2.actionRowContent;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser,
    config = _useContext.config;
  var userMenu = authenticatedUser === null ? [] : [{
    type: 'item',
    href: "".concat(config.STUDIO_BASE_URL),
    content: intl.formatMessage(messages['header.user.menu.studio.home'])
  }, {
    type: 'item',
    href: "".concat(config.STUDIO_BASE_URL, "/maintenance"),
    content: intl.formatMessage(messages['header.user.menu.studio.maintenance'])
  }, {
    type: 'item',
    href: config.LOGOUT_URL,
    content: intl.formatMessage(messages['header.user.menu.logout'])
  }];
  var props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: config.STUDIO_BASE_URL,
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    actionRowContent: actionRowContent,
    userMenu: userMenu,
    loggedOutItems: []
  };
  return /*#__PURE__*/React.createElement(StudioDesktopHeader, props);
};
StudioHeader.propTypes = {
  intl: intlShape.isRequired,
  actionRowContent: PropTypes.element
};
StudioHeader.defaultProps = {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  actionRowContent: /*#__PURE__*/React.createElement(React.Fragment, null)
};
export default injectIntl(StudioHeader);
//# sourceMappingURL=StudioHeader.js.map