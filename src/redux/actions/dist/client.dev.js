"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.getLeaves = exports.getTask = exports.getEmployeeProfile = exports.getCompanyProfile = void 0;

var _init = _interopRequireDefault(require("../../utility/axios-token-manager/init"));

var _loading = require("./loading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//
var getTaskApi = function getTaskApi() {
  var tasks;
  return regeneratorRuntime.async(function getTaskApi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_init["default"].get("/app/v2/004/all-task"));

        case 3:
          tasks = _context.sent;
          return _context.abrupt("return", tasks.data.tasks);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getLeavesApi = function getLeavesApi(dispatch) {
  var response;
  return regeneratorRuntime.async(function getLeavesApi$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          dispatch((0, _loading.loadStart)());
          _context2.next = 4;
          return regeneratorRuntime.awrap(_init["default"].get("/app/v2/004/leave/all"));

        case 4:
          response = _context2.sent;
          dispatch((0, _loading.loadStop)());

          if (!response.data.applications) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", response.data.applications);

        case 10:
          return _context2.abrupt("return", []);

        case 11:
          _context2.next = 18;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          dispatch((0, _loading.loadStop)());
          return _context2.abrupt("return", []);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

var getCompanyProfile = function getCompanyProfile() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch((0, _loading.loadStart)());
            _context3.next = 3;
            return regeneratorRuntime.awrap(_init["default"].get("/app/v2/004/all-employees"));

          case 3:
            response = _context3.sent;
            dispatch((0, _loading.loadStop)());
            return _context3.abrupt("return", dispatch({
              type: "GET_CLIENT_PROFILE",
              payload: response.data.client
            }));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.getCompanyProfile = getCompanyProfile;

var getEmployeeProfile = function getEmployeeProfile(data) {
  return {
    type: "GET_EMPLOYEE_PROFILE",
    payload: data
  };
};

exports.getEmployeeProfile = getEmployeeProfile;

var getTask = function getTask() {
  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = dispatch;
            _context4.next = 3;
            return regeneratorRuntime.awrap(getTaskApi());

          case 3:
            _context4.t1 = _context4.sent;
            _context4.t2 = {
              type: "GET_TASKS",
              payload: _context4.t1
            };
            return _context4.abrupt("return", (0, _context4.t0)(_context4.t2));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.getTask = getTask;

var getLeaves = function getLeaves() {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = dispatch;
            _context5.next = 3;
            return regeneratorRuntime.awrap(getLeavesApi(dispatch));

          case 3:
            _context5.t1 = _context5.sent;
            _context5.t2 = {
              type: "GET_LEAVES",
              payload: _context5.t1
            };
            return _context5.abrupt("return", (0, _context5.t0)(_context5.t2));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.getLeaves = getLeaves;

var signOut = function signOut() {
  return {
    type: "RESET"
  };
};

exports.signOut = signOut;