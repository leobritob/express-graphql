"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRepository = void 0;

var _database = require("../../config/database");

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UserRepository {
  constructor() {
    var {
      db = _database.database
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.db = db;
  }

  findAll() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.db('users').select('*');
    })();
  }

  find(where) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      var result = yield _this2.db('users').select('*').where(where);
      return result[0];
    })();
  }

  save(user) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      var data = _objectSpread(_objectSpread({}, user), {}, {
        id: (0, _uuid.v4)()
      });

      yield _this3.db('users').insert(data);
      return data;
    })();
  }

}

var userRepository = new UserRepository();
exports.userRepository = userRepository;