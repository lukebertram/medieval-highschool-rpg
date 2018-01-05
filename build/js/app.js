(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function () {
  function Character(name) {
    _classCallCheck(this, Character);

    this.name = name;
    this.health = 10;
    this.dex = 0;
    this.str = 0;
    this.int = 0;
    this.cha = 0;
    this.inventory = [];
    this.exp = 0;
    this.lvl = 0;
    this.isDead = false;
  }

  _createClass(Character, [{
    key: "setDead",
    value: function setDead() {
      this.isDead = true;
    }
  }, {
    key: "takeDamage",
    value: function takeDamage(amount) {
      this.health -= amount;
      if (this.health < 1) {
        this.isDead = true;
      }
    }
  }, {
    key: "attack",
    value: function attack() {}
  }]);

  return Character;
}();

var Nerd = exports.Nerd = function (_Character) {
  _inherits(Nerd, _Character);

  function Nerd(name) {
    _classCallCheck(this, Nerd);

    var _this = _possibleConstructorReturn(this, (Nerd.__proto__ || Object.getPrototypeOf(Nerd)).call(this, name));

    _this.int = 3;
    _this.inventory = ["protractor"];

    return _this;
  }

  return Nerd;
}(Character);

var Jock = exports.Jock = function (_Character2) {
  _inherits(Jock, _Character2);

  function Jock() {
    _classCallCheck(this, Jock);

    return _possibleConstructorReturn(this, (Jock.__proto__ || Object.getPrototypeOf(Jock)).apply(this, arguments));
  }

  return Jock;
}(Character);

var Goth = exports.Goth = function (_Character3) {
  _inherits(Goth, _Character3);

  function Goth() {
    _classCallCheck(this, Goth);

    return _possibleConstructorReturn(this, (Goth.__proto__ || Object.getPrototypeOf(Goth)).apply(this, arguments));
  }

  return Goth;
}(Character);

},{}],2:[function(require,module,exports){
'use strict';

var _character = require('./../js/character.js');

$(document).ready(function () {});

},{"./../js/character.js":1}]},{},[2]);
