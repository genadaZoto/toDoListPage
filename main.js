/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-param-reassign */
var jourSemaine = ['Activité ', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']; // ajouter une activité

var tableEl = document.createElement('table');
var trEl = document.createElement('tr');
tableEl.appendChild(trEl); // eslint-disable-next-line for-direction

for (var _i = 0, _jourSemaine = jourSemaine; _i < _jourSemaine.length; _i++) {
  var jour = _jourSemaine[_i];
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.innerText = jour;
  tdEl.style.color = ' blue';
}

document.body.appendChild(tableEl); // les activites realise

var btn = document.getElementById('addBtn');
var itemCounter = 1;
var input = document.getElementById('myInput');
btn.addEventListener('click', function () {
  var trActivite = document.createElement('tr');
  var tdActivite = document.createElement('td'); // create the close btn

  var close = document.createElement('span');
  close.innerText = "\xD7   ";
  close.setAttribute('id', "close".concat(itemCounter));
  tdActivite.appendChild(close);
  tdActivite.innerHTML += input.value;
  tdActivite.style.color = 'green';
  trActivite.appendChild(tdActivite);

  for (var i = 0; i < 7; i++) {
    var td = document.createElement('td');
    trActivite.appendChild(td);
    td.addEventListener('click', function (event) {
      if (event.target.innerHTML !== '') {
        // eslint-disable-next-line no-param-reassign
        event.target.innerHTML = '';
      } else {
        event.target.innerHTML = ' &bull;';
      }

      event.target.style.fontSize = '40px';
    });
  } // eslint-disable-next-line no-restricted-globals
  // eslint-disable-next-line no-template-curly-in-string


  tableEl.appendChild(trActivite);
  document.getElementById("close".concat(itemCounter)).addEventListener('click', function () {
    tableEl.removeChild(trActivite);
  });
  itemCounter++;
  input.value = ' ';
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
