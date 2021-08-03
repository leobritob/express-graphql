"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userService = void 0;

var _users = require("./users.repository");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UserService {
  constructor() {
    var {
      repository = _users.userRepository
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.repository = repository;
  }

  findAll() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.repository.findAll();
    })();
  }

  findById(id) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      return yield _this2.repository.find({
        id
      });
    })();
  }

  findByFirstName(first_name) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      return yield _this3.repository.find({
        first_name
      });
    })();
  }

  save(user) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      return yield _this4.repository.save(user);
    })();
  }

}

var userService = new UserService();
exports.userService = userService;