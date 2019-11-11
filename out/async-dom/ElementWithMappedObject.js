'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = require('./../cutie/exports'),
    AsyncObject = _require.AsyncObject;

var ElementWithMappedObject =
/*#__PURE__*/
function (_AsyncObject) {
  _inherits(ElementWithMappedObject, _AsyncObject);

  function ElementWithMappedObject(elm, obj) {
    _classCallCheck(this, ElementWithMappedObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(ElementWithMappedObject).call(this, elm, obj));
  }

  _createClass(ElementWithMappedObject, [{
    key: "syncCall",
    value: function syncCall() {
      var _this = this;

      return function (elm, obj) {
        var objName = elm.getAttribute('data-object-name');
        var initialization = "const ".concat(objName, " = obj");

        _this.iterateChildNodes(elm, function (node) {
          _this.iterateAttributes(node, function (attr) {
            node.setAttribute(attr.name, // eslint-disable-next-line no-eval
            eval(_this.appliedExpression(attr.value, initialization)));
          });
        });

        return elm;
      };
    }
  }, {
    key: "appliedExpression",
    value: function appliedExpression(expression, initialization) {
      return expression.replace(/\$\{([^${}]+)\}/g, function (match, p1) {
        return "\n        ".concat(initialization, "\n        ").concat(p1, "\n      ");
      });
    }
  }, {
    key: "iterateChildNodes",
    value: function iterateChildNodes(elm, func) {
      var _this2 = this;

      elm.childNodes.forEach(function (node) {
        func(node);

        _this2.iterateChildNodes(node, func);
      });
    }
  }, {
    key: "iterateAttributes",
    value: function iterateAttributes(elm, func) {
      if (elm.attributes) {
        for (var i = 0; i < elm.attributes.length; i++) {
          func(elm.attributes[i]);
        }
      }
    }
  }]);

  return ElementWithMappedObject;
}(AsyncObject);

module.exports = ElementWithMappedObject;
