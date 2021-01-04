"use strict";

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
var resolveAfter2Seconds = function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}; // sequential:相继的 /[sɪˈkwenʃl]/


var sequential = function sequential() {
  var slow, fast;
  return regeneratorRuntime.async(function sequential$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('==SEQUENTIAL START==');
          _context.next = 3;
          return regeneratorRuntime.awrap(resolveAfter2Seconds());

        case 3:
          slow = _context.sent;
          console.log(slow);
          _context.next = 7;
          return regeneratorRuntime.awrap(resolveAfter1Second());

        case 7:
          fast = _context.sent;
          console.log(fast);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}; // concurrent:同时发生的 /[kənˈkʌrənt]/


var concurrent = function concurrent() {
  var slow, fast;
  return regeneratorRuntime.async(function concurrent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('==CONCURRENT START with await==');
          slow = resolveAfter2Seconds();
          fast = resolveAfter1Second();
          _context2.t0 = console;
          _context2.next = 6;
          return regeneratorRuntime.awrap(slow);

        case 6:
          _context2.t1 = _context2.sent;

          _context2.t0.log.call(_context2.t0, _context2.t1);

          _context2.t2 = console;
          _context2.next = 11;
          return regeneratorRuntime.awrap(fast);

        case 11:
          _context2.t3 = _context2.sent;

          _context2.t2.log.call(_context2.t2, _context2.t3);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var concurrentPromise = function concurrentPromise() {
  console.log('==CONCURRENT START with Promise.all==');
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(function (messages) {
    console.log(messages[0]);
    console.log(messages[1]);
  });
}; // parallel:平行的 /[ˈpærəlel]/


var parallel = function parallel() {
  return regeneratorRuntime.async(function parallel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log('==PARALLEL with await Promise.all==');
          _context5.next = 3;
          return regeneratorRuntime.awrap(Promise.all([function _callee() {
            var result;
            return regeneratorRuntime.async(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(resolveAfter2Seconds());

                  case 2:
                    result = _context3.sent;
                    console.log(result);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }(), function _callee2() {
            var result;
            return regeneratorRuntime.async(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return regeneratorRuntime.awrap(resolveAfter1Second());

                  case 2:
                    result = _context4.sent;
                    console.log(result);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          }()]));

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var parallelPromise = function parallelPromise() {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then(function (message) {
    return console.log(message);
  });
  resolveAfter1Second().then(function (message) {
    return console.log(message);
  });
}; // sequential();
// concurrent();
// concurrentPromise();


parallel(); // parallelPromise();