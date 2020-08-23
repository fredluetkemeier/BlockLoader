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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/renderer/Main.elm":
/*!*******************************!*\
  !*** ./src/renderer/Main.elm ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function (_v0) {
	return _Utils_Tuple2(
		{},
		$elm$core$Platform$Cmd$none);
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$update = F2(
	function (msg, model) {
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$Main$colors = {
	accent: A3($mdgriffith$elm_ui$Element$rgb255, 204, 240, 255),
	background: A3($mdgriffith$elm_ui$Element$rgb255, 54, 54, 54),
	backgroundSecondary: A3($mdgriffith$elm_ui$Element$rgb255, 90, 83, 167),
	font: A3($mdgriffith$elm_ui$Element$rgb255, 227, 227, 227)
};
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = {$: 'AsColumn'};
var $mdgriffith$elm_ui$Internal$Model$asColumn = $mdgriffith$elm_ui$Internal$Model$AsColumn;
var $mdgriffith$elm_ui$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', focusedWithin: 'focus-within', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightExact: 'he', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputLabel: 'lbl', inputMultiline: 'iml', inputMultilineFiller: 'imlf', inputMultilineParent: 'imlp', inputMultilineWrapper: 'implw', inputText: 'it', italic: 'i', link: 'lnk', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 'Generic'};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.column);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.grid);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.page);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.row);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 'AsColumn':
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 'AsEl':
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 'AsGrid':
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 'AsParagraph':
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = {$: 'AsEl'};
var $mdgriffith$elm_ui$Internal$Model$asEl = $mdgriffith$elm_ui$Internal$Model$AsEl;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var $mdgriffith$elm_ui$Internal$Model$asParagraph = $mdgriffith$elm_ui$Internal$Model$AsParagraph;
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.row) + ('-' + ($elm$core$String$fromInt(pos.col) + ('-' + ($elm$core$String$fromInt(pos.width) + ('-' + $elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.blur) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.size) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.color))
				])));
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.focusedWithin) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus .focusable, ') + (($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + '.focusable:focus, ') + ('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ' .focusable-thumb'))),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.borderColor),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.backgroundColor),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										blur: shadow.blur,
										color: shadow.color,
										inset: false,
										offset: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.offset)),
										size: shadow.size
									}));
						},
						focus.shadow),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 'AllChildren', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = {$: 'Left'};
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = {$: 'Right'};
var $mdgriffith$elm_ui$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Bottom = {$: 'Bottom'};
var $mdgriffith$elm_ui$Internal$Style$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Internal$Style$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Internal$Style$Top = {$: 'Top'};
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[$mdgriffith$elm_ui$Internal$Style$Top, $mdgriffith$elm_ui$Internal$Style$Bottom, $mdgriffith$elm_ui$Internal$Style$Right, $mdgriffith$elm_ui$Internal$Style$Left, $mdgriffith$elm_ui$Internal$Style$CenterX, $mdgriffith$elm_ui$Internal$Style$CenterY]);
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _v1 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _v2 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		case 'Right':
			var _v3 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		case 'Left':
			var _v4 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _v5 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
		default:
			var _v6 = desc.a;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(
					$mdgriffith$elm_ui$Internal$Style$Content(alignment)),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(
							$mdgriffith$elm_ui$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = {$: 'Above'};
var $mdgriffith$elm_ui$Internal$Style$Behind = {$: 'Behind'};
var $mdgriffith$elm_ui$Internal$Style$Below = {$: 'Below'};
var $mdgriffith$elm_ui$Internal$Style$OnLeft = {$: 'OnLeft'};
var $mdgriffith$elm_ui$Internal$Style$OnRight = {$: 'OnRight'};
var $mdgriffith$elm_ui$Internal$Style$Within = {$: 'Within'};
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = $mdgriffith$elm_ui$Internal$Style$Above;
	var _v0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[$mdgriffith$elm_ui$Internal$Style$Above, $mdgriffith$elm_ui$Internal$Style$Below, $mdgriffith$elm_ui$Internal$Style$OnRight, $mdgriffith$elm_ui$Internal$Style$OnLeft, $mdgriffith$elm_ui$Internal$Style$Within, $mdgriffith$elm_ui$Internal$Style$Behind]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.hover, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.focus, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.active, $mdgriffith$elm_ui$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.link),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputLabel),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0px'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', 'min-content'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Left)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.any + ($mdgriffith$elm_ui$Internal$Style$selfName(
								$mdgriffith$elm_ui$Internal$Style$Self($mdgriffith$elm_ui$Internal$Style$Right)) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineWrapper),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineParent),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inputMultilineFiller),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.paragraph),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.underline),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.row) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'AllChildren':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector + (' ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return $mdgriffith$elm_ui$Internal$Style$Intermediate(
			A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.props;
		if (!_v2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0.a;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.others)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.mode;
	switch (_v0.$) {
		case 'Layout':
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 'NoStaticStyleSheet':
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 'Nothing') {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo.$) {
				case 'Hover':
					var _v2 = options.hover;
					switch (_v2.$) {
						case 'NoHover':
							return _List_Nil;
						case 'ForceHover':
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 'Focus':
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[
							selector + ('-fs:focus {' + (renderedProps + '\n}')),
							('.' + ($mdgriffith$elm_ui$Internal$Style$classes.any + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'),
							(selector + '-fs:focus-within {') + (renderedProps + '\n}'),
							('.ui-slide-bar:focus + ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.any) + (' .focusable-thumb' + (selector + '-fs {')))) + (renderedProps + '\n}')
						]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.variants)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return $elm$core$Maybe$Nothing;
		case 'Moved':
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 'Style':
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 'Shadows':
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 'Transparency':
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 'FontSize':
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 'FontFamily':
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 'Single':
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 'Colored':
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 'SpacingStyle':
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.single;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.row;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.wrapped + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.paragraph;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.page;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.column;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.any;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 'PaddingStyle':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 'BorderWidth':
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 'GridTemplateStyle':
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 'Px':
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 'Content':
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 'Nothing') {
										if (_v2.b.$ === 'Nothing') {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 'Nothing') {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Fill':
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 'Nothing') {
										if (_v7.b.$ === 'Nothing') {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 'Nothing') {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 'Min':
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.spacing.a);
				var ySpacing = toGridLength(template.spacing.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.rows)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.columns)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.columns)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.spacing.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 'GridPosition':
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.row) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.height) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.col) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.width) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.row) + (' / ' + ($elm$core$String$fromInt(position.row + position.height) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.col) + (' / ' + ($elm$core$String$fromInt(position.col + position.width) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.row) + ('-' + ($elm$core$String$fromInt(position.col) + ('-' + ($elm$core$String$fromInt(position.width) + ('-' + $elm$core$String$fromInt(position.height)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 'PseudoSelector':
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((_v12.a.$ === 'Just') && (_v12.b.$ === 'Just')) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.fullSize, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.sizeByCapital + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.descender,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.baseline,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.capital,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _v2 = _with.adjustment;
						if (_v2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 'Nothing') {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{rules: _List_Nil, topLevel: _List_Nil},
			stylesheet);
		var topLevel = _v0.topLevel;
		var rules = _v0.rules;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.mode;
		switch (_v0.$) {
			case 'Layout':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 'NoStaticStyleSheet':
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.focus)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.container, $mdgriffith$elm_ui$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthContent + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightContent)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.any + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.text + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFill + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.heightFill)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						html: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.inFront]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.nearby, $mdgriffith$elm_ui$Internal$Style$classes.single, $mdgriffith$elm_ui$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return $elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignLeft);
		case 'Right':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignRight);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedHorizontally + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterX);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignTop);
		case 'Bottom':
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignBottom);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.alignedVertically + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.alignCenterY);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px !important');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 'Nothing') {
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _v1.a;
					return {
						attributes: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.widthExact + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.widthFillPortion + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.row + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightExact + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.heightFillPortion + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.any + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.column + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 'Right':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 'Untransformed'};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 'Content'};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentTop + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentLeft)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = {$: 'AllowHover'};
var $mdgriffith$elm_ui$Internal$Model$Layout = {$: 'Layout'};
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	backgroundColor: $elm$core$Maybe$Nothing,
	borderColor: $elm$core$Maybe$Nothing,
	shadow: $elm$core$Maybe$Just(
		{
			blur: 0,
			color: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _v4 = record.hover;
					if (_v4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _v5 = record.focus;
					if (_v5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.mode;
					if (_v6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _v0 = record.focus;
				if (_v0.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _v1 = record.hover;
				if (_v1.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$AllowHover;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _v2 = record.mode;
				if (_v2.$ === 'Nothing') {
					return $mdgriffith$elm_ui$Internal$Model$Layout;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{focus: $elm$core$Maybe$Nothing, hover: $elm$core$Maybe$Nothing, mode: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.mode;
			if (_v0.$ === 'NoStaticStyleSheet') {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 'SansSerif'};
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.options;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.root, $mdgriffith$elm_ui$Internal$Style$classes.any, $mdgriffith$elm_ui$Internal$Style$classes.single]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{options: _List_Nil});
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = {$: 'CenterX'};
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX($mdgriffith$elm_ui$Internal$Model$CenterX);
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterY = {$: 'CenterY'};
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY($mdgriffith$elm_ui$Internal$Model$CenterY);
var $author$project$Main$edges = {bottom: 0, left: 0, right: 0, top: 0};
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.top;
	var right = _v0.right;
	var bottom = _v0.bottom;
	var left = _v0.left;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $mdgriffith$elm_ui$Internal$Model$AsRow = {$: 'AsRow'};
var $mdgriffith$elm_ui$Internal$Model$asRow = $mdgriffith$elm_ui$Internal$Model$AsRow;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentLeft + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.contentCenterY)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Element$spaceEvenly = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$spacing, $mdgriffith$elm_ui$Internal$Style$classes.spaceEvenly);
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $mdgriffith$elm_ui$Element$image = F2(
	function (attrs, _v0) {
		var src = _v0.src;
		var description = _v0.description;
		var imageAttributes = A2(
			$elm$core$List$filter,
			function (a) {
				switch (a.$) {
					case 'Width':
						return true;
					case 'Height':
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.imageContainer),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[
						A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asEl,
						$mdgriffith$elm_ui$Internal$Model$NodeName('img'),
						_Utils_ap(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$src(src)),
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$alt(description))
								]),
							imageAttributes),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil))
					])));
	});
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.url;
		var label = _v0.label;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.contentCenterX + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.contentCenterY + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.link)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Main$viewInstalledLink = A2(
	$mdgriffith$elm_ui$Element$link,
	_List_Nil,
	{
		label: A2(
			$mdgriffith$elm_ui$Element$image,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(20))
				]),
			{description: 'Installed mods icon', src: './assets/th-list.svg'}),
		url: '#installed'
	});
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $author$project$Main$viewLogo = A2(
	$mdgriffith$elm_ui$Element$link,
	_List_Nil,
	{
		label: A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size(28),
					$mdgriffith$elm_ui$Element$spacing(12)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$image,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$height(
							$mdgriffith$elm_ui$Element$px(32))
						]),
					{description: 'The MPM logo', src: './assets/logo.svg'}),
					$mdgriffith$elm_ui$Element$text('MPM')
				])),
		url: '#'
	});
var $author$project$Main$viewHeader = A2(
	$mdgriffith$elm_ui$Element$el,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Background$color($author$project$Main$colors.backgroundSecondary),
			$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
		]),
	A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[$mdgriffith$elm_ui$Element$centerX]),
		A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(800)),
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$spaceEvenly,
					$mdgriffith$elm_ui$Element$paddingEach(
					_Utils_update(
						$author$project$Main$edges,
						{bottom: 12, top: 12}))
				]),
			_List_fromArray(
				[$author$project$Main$viewLogo, $author$project$Main$viewInstalledLink]))));
var $author$project$Main$view = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$layout,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Background$color($author$project$Main$colors.background),
				$mdgriffith$elm_ui$Element$Font$color($author$project$Main$colors.font),
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$typeface('Quicksand'),
						$mdgriffith$elm_ui$Element$Font$sansSerif
					]))
			]),
		A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[$author$project$Main$viewHeader])));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{
		init: $author$project$Main$init,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: $author$project$Main$update,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));

/***/ }),

/***/ "./src/renderer/index.js":
/*!*******************************!*\
  !*** ./src/renderer/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/renderer/Main.elm");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Main__WEBPACK_IMPORTED_MODULE_0__);


const app = _Main__WEBPACK_IMPORTED_MODULE_0__["Elm"].Main.init({
    node: document.getElementById('app'),
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyL01haW4uZWxtIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHFCQUFxQixpQkFBaUIsR0FBRyxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUIscUJBQXFCLEdBQUc7QUFDckUsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3Qix3QkFBd0IsR0FBRyxHQUFHO0FBQ3RELEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCLDJCQUEyQixHQUFHLEdBQUcsR0FBRztBQUNqRixHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3QyxpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM3QyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3Qyx3QkFBd0IsaUNBQWlDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUN4RSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3Qyx3QkFBd0I7QUFDeEIsdUNBQXVDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3QixxQkFBcUI7QUFDN0MsMENBQTBDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDL0QsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qyx3QkFBd0IsRUFBRTs7OztBQUluRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyw2Q0FBNkMscUJBQXFCO0FBQ3pFO0FBQ0E7O0FBRUEsbUNBQW1DLDZCQUE2QixFQUFFO0FBQ2xFLG1DQUFtQyw2QkFBNkIsRUFBRTtBQUNsRSxtQ0FBbUMsNkJBQTZCLEVBQUU7QUFDbEUsbUNBQW1DLDhCQUE4QixFQUFFOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQixxQ0FBcUMsU0FBUyxjQUFjO0FBQzVELDhCQUE4QixTQUFTLHVCQUF1Qjs7QUFFOUQsd0NBQXdDLFNBQVMsb0JBQW9CO0FBQ3JFLGlDQUFpQyxTQUFTLDZCQUE2Qjs7QUFFdkUsK0JBQStCLFVBQVU7QUFDekMsd0JBQXdCLHNCQUFzQjs7O0FBRzlDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSx3QkFBd0I7QUFDeEIsaUJBQWlCOztBQUVqQixvQ0FBb0MsU0FBUyxzQkFBc0I7QUFDbkUsNkJBQTZCLFNBQVMseUJBQXlCOzs7QUFHL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXLDRCQUE0QjtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RywwREFBMEQ7O0FBRXZLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCxxQ0FBcUMsY0FBYyxFQUFFO0FBQ3JELHFDQUFxQyxjQUFjLEVBQUU7QUFDckQsc0NBQXNDLGNBQWMsRUFBRTtBQUN0RCxzQ0FBc0Msb0JBQW9CLEVBQUU7QUFDNUQ7O0FBRUEsNkNBQTZDLGNBQWMsRUFBRTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLDZCQUE2QixVQUFVO0FBQ3ZDLDhCQUE4QixjQUFjO0FBQzVDLGdDQUFnQywwQ0FBMEM7O0FBRTFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsNEJBQTRCLGNBQWM7QUFDMUMscUNBQXFDLGVBQWUsRUFBRTtBQUN0RCxxQ0FBcUMsZUFBZSxFQUFFO0FBQ3RELHFDQUFxQyxnQkFBZ0IsRUFBRTs7OztBQUl2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG9DQUFvQyxTQUFTLG9CQUFvQjtBQUNqRSxxQ0FBcUMsU0FBUyxvQkFBb0I7O0FBRWxFLGtDQUFrQyxTQUFTLGtCQUFrQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRSxpQkFBaUIsRUFBRTtBQUNyRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDRCQUE0QixTQUFTLGtCQUFrQjtBQUN2RCw4QkFBOEIsZ0JBQWdCOztBQUU5QyxtQ0FBbUMsY0FBYztBQUNqRCxxQ0FBcUMsY0FBYzs7QUFFbkQsNkJBQTZCLFdBQVc7QUFDeEMsOEJBQThCLFdBQVc7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxxQkFBcUIsa0JBQWtCO0FBQ3ZDLEVBQUU7QUFDRjs7Ozs7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw4QkFBOEIsb0NBQW9DOztBQUVsRTs7QUFFQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsNERBQTRELGNBQWMsRUFBRTs7O0FBRzVFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7OztBQUdEOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsbUJBQW1CLHFDQUFxQztBQUN4RCxFQUFFO0FBQ0Y7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSxvREFBb0QsWUFBWTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQixrQkFBa0IsV0FBVztBQUM3QixrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpQkFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsS0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3Qzs7O0FBR2hFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBLHlCQUF5QixnQ0FBZ0Msb0NBQW9DO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0NBQXdDO0FBQ25FLDZFQUE2RSxnQkFBZ0I7QUFDN0YscUJBQXFCLDhDQUE4QztBQUNuRSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1RkFBdUY7QUFDN0YsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQ7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEVBQUU7QUFDRiw4Q0FBOEM7QUFDOUM7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLCtDQUErQztBQUMvQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0EsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxnREFBZ0Q7QUFDaEQsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxpREFBaUQ7QUFDakQsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QscURBQXFELEdBQUcsdUVBQXVFLHFEQUFxRCxHQUFHLFVBQVUsOEJBQThCLEdBQUcsNkVBQTZFLHFEQUFxRCxHQUFHO0FBQ3RhLHVTQUF1Uyw0QkFBNEIsR0FBRztBQUN0VSwwRUFBMEUsNkJBQTZCLDZCQUE2QixzQkFBc0IsV0FBVyxVQUFVLGVBQWUsZ0JBQWdCLHdCQUF3QixpQkFBaUIsZUFBZSxHQUFHO0FBQ3pRLCtGQUErRiwrQkFBK0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsOEJBQThCLGtCQUFrQix5QkFBeUIsR0FBRyx1Q0FBdUMsbUJBQW1CLGtCQUFrQixtQkFBbUIsOEJBQThCLGtCQUFrQix5QkFBeUIsR0FBRyxnQ0FBZ0MsbUJBQW1CLGtCQUFrQixtQkFBbUIsOEJBQThCLGtCQUFrQix5QkFBeUIsR0FBRyxxQ0FBcUMsMEJBQTBCLG1EQUFtRCxpQkFBaUI7QUFDcHRCLDJGQUEyRiw4QkFBOEIsc0JBQXNCLEdBQUcsZ0NBQWdDLDhCQUE4QixzQkFBc0IsR0FBRyxvREFBb0QsOEJBQThCLHNCQUFzQixHQUFHO0FBQ3BWLDZIQUE2SCx5UkFBeVIsNkJBQTZCLEVBQUUsd1hBQXdYLDZCQUE2QixHQUFHO0FBQzcwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQTBFO0FBQzlFLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhLDJGQUEyRix3QkFBd0I7QUFDM0k7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZCQUE2QixrREFBa0Q7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHVEQUF1RDtBQUNqSSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5QkFBeUI7QUFDeEQsK0ZBQStGLDZCQUE2QjtBQUM1SCxzQ0FBc0MsMEJBQTBCO0FBQ2hFLG9LQUFvSyw2QkFBNkI7QUFDak07QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLDBFQUEwRTtBQUMxRTtBQUNBLCtDQUErQztBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5Q0FBeUM7QUFDMUUsOENBQThDLG9CQUFvQjtBQUNsRSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSw4RUFBOEU7QUFDOUUseUVBQXlFO0FBQ3pFLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SUFBdUk7QUFDdkkseUlBQXlJO0FBQ3pJO0FBQ0E7QUFDQSxpQ0FBaUMsd0JBQXdCO0FBQ3pELDhDQUE4QyxvQkFBb0I7QUFDbEUsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQ0FBc0M7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLG9EQUFvRDtBQUNwRCxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4RkFBOEY7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFLG1CQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFnRTtBQUNwRTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFzRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0JBQW9CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Ysa0JBQWtCLFFBQVE7QUFDMUIsbURBQW1ELEdBQUcsUTs7Ozs7Ozs7Ozs7O0FDdnRXdEQ7QUFBQTtBQUFBO0FBQTZCOztBQUU3QixZQUFZLHlDQUFHO0FBQ2Y7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0c1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9yZW5kZXJlci9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbihzY29wZSl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEYoYXJpdHksIGZ1biwgd3JhcHBlcikge1xuICB3cmFwcGVyLmEgPSBhcml0eTtcbiAgd3JhcHBlci5mID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjIoZnVuKSB7XG4gIHJldHVybiBGKDIsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuKGEsYik7IH07IH0pXG59XG5mdW5jdGlvbiBGMyhmdW4pIHtcbiAgcmV0dXJuIEYoMywgZnVuLCBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGZ1bihhLCBiLCBjKTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNChmdW4pIHtcbiAgcmV0dXJuIEYoNCwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkKTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNShmdW4pIHtcbiAgcmV0dXJuIEYoNSwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlKTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNihmdW4pIHtcbiAgcmV0dXJuIEYoNiwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYpOyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY3KGZ1bikge1xuICByZXR1cm4gRig3LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZyk7IH07IH07IH07IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjgoZnVuKSB7XG4gIHJldHVybiBGKDgsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGcpIHsgcmV0dXJuIGZ1bmN0aW9uKGgpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpOyB9OyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY5KGZ1bikge1xuICByZXR1cm4gRig5LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW5jdGlvbihoKSB7IHJldHVybiBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKTsgfTsgfTsgfTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEEyKGZ1biwgYSwgYikge1xuICByZXR1cm4gZnVuLmEgPT09IDIgPyBmdW4uZihhLCBiKSA6IGZ1bihhKShiKTtcbn1cbmZ1bmN0aW9uIEEzKGZ1biwgYSwgYiwgYykge1xuICByZXR1cm4gZnVuLmEgPT09IDMgPyBmdW4uZihhLCBiLCBjKSA6IGZ1bihhKShiKShjKTtcbn1cbmZ1bmN0aW9uIEE0KGZ1biwgYSwgYiwgYywgZCkge1xuICByZXR1cm4gZnVuLmEgPT09IDQgPyBmdW4uZihhLCBiLCBjLCBkKSA6IGZ1bihhKShiKShjKShkKTtcbn1cbmZ1bmN0aW9uIEE1KGZ1biwgYSwgYiwgYywgZCwgZSkge1xuICByZXR1cm4gZnVuLmEgPT09IDUgPyBmdW4uZihhLCBiLCBjLCBkLCBlKSA6IGZ1bihhKShiKShjKShkKShlKTtcbn1cbmZ1bmN0aW9uIEE2KGZ1biwgYSwgYiwgYywgZCwgZSwgZikge1xuICByZXR1cm4gZnVuLmEgPT09IDYgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmKSA6IGZ1bihhKShiKShjKShkKShlKShmKTtcbn1cbmZ1bmN0aW9uIEE3KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZykge1xuICByZXR1cm4gZnVuLmEgPT09IDcgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKTtcbn1cbmZ1bmN0aW9uIEE4KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCkge1xuICByZXR1cm4gZnVuLmEgPT09IDggPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKTtcbn1cbmZ1bmN0aW9uIEE5KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSkge1xuICByZXR1cm4gZnVuLmEgPT09IDkgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKShpKTtcbn1cblxuY29uc29sZS53YXJuKCdDb21waWxlZCBpbiBERVYgbW9kZS4gRm9sbG93IHRoZSBhZHZpY2UgYXQgaHR0cHM6Ly9lbG0tbGFuZy5vcmcvMC4xOS4xL29wdGltaXplIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgYW5kIHNtYWxsZXIgYXNzZXRzLicpO1xuXG5cbi8vIEVRVUFMSVRZXG5cbmZ1bmN0aW9uIF9VdGlsc19lcSh4LCB5KVxue1xuXHRmb3IgKFxuXHRcdHZhciBwYWlyLCBzdGFjayA9IFtdLCBpc0VxdWFsID0gX1V0aWxzX2VxSGVscCh4LCB5LCAwLCBzdGFjayk7XG5cdFx0aXNFcXVhbCAmJiAocGFpciA9IHN0YWNrLnBvcCgpKTtcblx0XHRpc0VxdWFsID0gX1V0aWxzX2VxSGVscChwYWlyLmEsIHBhaXIuYiwgMCwgc3RhY2spXG5cdFx0KVxuXHR7fVxuXG5cdHJldHVybiBpc0VxdWFsO1xufVxuXG5mdW5jdGlvbiBfVXRpbHNfZXFIZWxwKHgsIHksIGRlcHRoLCBzdGFjaylcbntcblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgeCA9PT0gbnVsbCB8fCB5ID09PSBudWxsKVxuXHR7XG5cdFx0dHlwZW9mIHggPT09ICdmdW5jdGlvbicgJiYgX0RlYnVnX2NyYXNoKDUpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmIChkZXB0aCA+IDEwMClcblx0e1xuXHRcdHN0YWNrLnB1c2goX1V0aWxzX1R1cGxlMih4LHkpKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKi9cblx0aWYgKHguJCA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdHtcblx0XHR4ID0gJGVsbSRjb3JlJFNldCR0b0xpc3QoeCk7XG5cdFx0eSA9ICRlbG0kY29yZSRTZXQkdG9MaXN0KHkpO1xuXHR9XG5cdGlmICh4LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHguJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKVxuXHR7XG5cdFx0eCA9ICRlbG0kY29yZSREaWN0JHRvTGlzdCh4KTtcblx0XHR5ID0gJGVsbSRjb3JlJERpY3QkdG9MaXN0KHkpO1xuXHR9XG5cdC8vKi9cblxuXHQvKipfVU5VU0VEL1xuXHRpZiAoeC4kIDwgMClcblx0e1xuXHRcdHggPSAkZWxtJGNvcmUkRGljdCR0b0xpc3QoeCk7XG5cdFx0eSA9ICRlbG0kY29yZSREaWN0JHRvTGlzdCh5KTtcblx0fVxuXHQvLyovXG5cblx0Zm9yICh2YXIga2V5IGluIHgpXG5cdHtcblx0XHRpZiAoIV9VdGlsc19lcUhlbHAoeFtrZXldLCB5W2tleV0sIGRlcHRoICsgMSwgc3RhY2spKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbnZhciBfVXRpbHNfZXF1YWwgPSBGMihfVXRpbHNfZXEpO1xudmFyIF9VdGlsc19ub3RFcXVhbCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuICFfVXRpbHNfZXEoYSxiKTsgfSk7XG5cblxuXG4vLyBDT01QQVJJU09OU1xuXG4vLyBDb2RlIGluIEdlbmVyYXRlL0phdmFTY3JpcHQuaHMsIEJhc2ljcy5qcywgYW5kIExpc3QuanMgZGVwZW5kcyBvblxuLy8gdGhlIHBhcnRpY3VsYXIgaW50ZWdlciB2YWx1ZXMgYXNzaWduZWQgdG8gTFQsIEVRLCBhbmQgR1QuXG5cbmZ1bmN0aW9uIF9VdGlsc19jbXAoeCwgeSwgb3JkKVxue1xuXHRpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKVxuXHR7XG5cdFx0cmV0dXJuIHggPT09IHkgPyAvKkVRKi8gMCA6IHggPCB5ID8gLypMVCovIC0xIDogLypHVCovIDE7XG5cdH1cblxuXHQvKiovXG5cdGlmICh4IGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0dmFyIGEgPSB4LnZhbHVlT2YoKTtcblx0XHR2YXIgYiA9IHkudmFsdWVPZigpO1xuXHRcdHJldHVybiBhID09PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxO1xuXHR9XG5cdC8vKi9cblxuXHQvKipfVU5VU0VEL1xuXHRpZiAodHlwZW9mIHguJCA9PT0gJ3VuZGVmaW5lZCcpXG5cdC8vKi9cblx0LyoqL1xuXHRpZiAoeC4kWzBdID09PSAnIycpXG5cdC8vKi9cblx0e1xuXHRcdHJldHVybiAob3JkID0gX1V0aWxzX2NtcCh4LmEsIHkuYSkpXG5cdFx0XHQ/IG9yZFxuXHRcdFx0OiAob3JkID0gX1V0aWxzX2NtcCh4LmIsIHkuYikpXG5cdFx0XHRcdD8gb3JkXG5cdFx0XHRcdDogX1V0aWxzX2NtcCh4LmMsIHkuYyk7XG5cdH1cblxuXHQvLyB0cmF2ZXJzZSBjb25zZXMgdW50aWwgZW5kIG9mIGEgbGlzdCBvciBhIG1pc21hdGNoXG5cdGZvciAoOyB4LmIgJiYgeS5iICYmICEob3JkID0gX1V0aWxzX2NtcCh4LmEsIHkuYSkpOyB4ID0geC5iLCB5ID0geS5iKSB7fSAvLyBXSElMRV9DT05TRVNcblx0cmV0dXJuIG9yZCB8fCAoeC5iID8gLypHVCovIDEgOiB5LmIgPyAvKkxUKi8gLTEgOiAvKkVRKi8gMCk7XG59XG5cbnZhciBfVXRpbHNfbHQgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpIDwgMDsgfSk7XG52YXIgX1V0aWxzX2xlID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gX1V0aWxzX2NtcChhLCBiKSA8IDE7IH0pO1xudmFyIF9VdGlsc19ndCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPiAwOyB9KTtcbnZhciBfVXRpbHNfZ2UgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpID49IDA7IH0pO1xuXG52YXIgX1V0aWxzX2NvbXBhcmUgPSBGMihmdW5jdGlvbih4LCB5KVxue1xuXHR2YXIgbiA9IF9VdGlsc19jbXAoeCwgeSk7XG5cdHJldHVybiBuIDwgMCA/ICRlbG0kY29yZSRCYXNpY3MkTFQgOiBuID8gJGVsbSRjb3JlJEJhc2ljcyRHVCA6ICRlbG0kY29yZSRCYXNpY3MkRVE7XG59KTtcblxuXG4vLyBDT01NT04gVkFMVUVTXG5cbnZhciBfVXRpbHNfVHVwbGUwX1VOVVNFRCA9IDA7XG52YXIgX1V0aWxzX1R1cGxlMCA9IHsgJDogJyMwJyB9O1xuXG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUyX1VOVVNFRChhLCBiKSB7IHJldHVybiB7IGE6IGEsIGI6IGIgfTsgfVxuZnVuY3Rpb24gX1V0aWxzX1R1cGxlMihhLCBiKSB7IHJldHVybiB7ICQ6ICcjMicsIGE6IGEsIGI6IGIgfTsgfVxuXG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUzX1VOVVNFRChhLCBiLCBjKSB7IHJldHVybiB7IGE6IGEsIGI6IGIsIGM6IGMgfTsgfVxuZnVuY3Rpb24gX1V0aWxzX1R1cGxlMyhhLCBiLCBjKSB7IHJldHVybiB7ICQ6ICcjMycsIGE6IGEsIGI6IGIsIGM6IGMgfTsgfVxuXG5mdW5jdGlvbiBfVXRpbHNfY2hyX1VOVVNFRChjKSB7IHJldHVybiBjOyB9XG5mdW5jdGlvbiBfVXRpbHNfY2hyKGMpIHsgcmV0dXJuIG5ldyBTdHJpbmcoYyk7IH1cblxuXG4vLyBSRUNPUkRTXG5cbmZ1bmN0aW9uIF9VdGlsc191cGRhdGUob2xkUmVjb3JkLCB1cGRhdGVkRmllbGRzKVxue1xuXHR2YXIgbmV3UmVjb3JkID0ge307XG5cblx0Zm9yICh2YXIga2V5IGluIG9sZFJlY29yZClcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gb2xkUmVjb3JkW2tleV07XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdXBkYXRlZEZpZWxkcylcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gdXBkYXRlZEZpZWxkc1trZXldO1xuXHR9XG5cblx0cmV0dXJuIG5ld1JlY29yZDtcbn1cblxuXG4vLyBBUFBFTkRcblxudmFyIF9VdGlsc19hcHBlbmQgPSBGMihfVXRpbHNfYXApO1xuXG5mdW5jdGlvbiBfVXRpbHNfYXAoeHMsIHlzKVxue1xuXHQvLyBhcHBlbmQgU3RyaW5nc1xuXHRpZiAodHlwZW9mIHhzID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiB4cyArIHlzO1xuXHR9XG5cblx0Ly8gYXBwZW5kIExpc3RzXG5cdGlmICgheHMuYilcblx0e1xuXHRcdHJldHVybiB5cztcblx0fVxuXHR2YXIgcm9vdCA9IF9MaXN0X0NvbnMoeHMuYSwgeXMpO1xuXHR4cyA9IHhzLmJcblx0Zm9yICh2YXIgY3VyciA9IHJvb3Q7IHhzLmI7IHhzID0geHMuYikgLy8gV0hJTEVfQ09OU1xuXHR7XG5cdFx0Y3VyciA9IGN1cnIuYiA9IF9MaXN0X0NvbnMoeHMuYSwgeXMpO1xuXHR9XG5cdHJldHVybiByb290O1xufVxuXG5cblxudmFyIF9MaXN0X05pbF9VTlVTRUQgPSB7ICQ6IDAgfTtcbnZhciBfTGlzdF9OaWwgPSB7ICQ6ICdbXScgfTtcblxuZnVuY3Rpb24gX0xpc3RfQ29uc19VTlVTRUQoaGQsIHRsKSB7IHJldHVybiB7ICQ6IDEsIGE6IGhkLCBiOiB0bCB9OyB9XG5mdW5jdGlvbiBfTGlzdF9Db25zKGhkLCB0bCkgeyByZXR1cm4geyAkOiAnOjonLCBhOiBoZCwgYjogdGwgfTsgfVxuXG5cbnZhciBfTGlzdF9jb25zID0gRjIoX0xpc3RfQ29ucyk7XG5cbmZ1bmN0aW9uIF9MaXN0X2Zyb21BcnJheShhcnIpXG57XG5cdHZhciBvdXQgPSBfTGlzdF9OaWw7XG5cdGZvciAodmFyIGkgPSBhcnIubGVuZ3RoOyBpLS07IClcblx0e1xuXHRcdG91dCA9IF9MaXN0X0NvbnMoYXJyW2ldLCBvdXQpO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIF9MaXN0X3RvQXJyYXkoeHMpXG57XG5cdGZvciAodmFyIG91dCA9IFtdOyB4cy5iOyB4cyA9IHhzLmIpIC8vIFdISUxFX0NPTlNcblx0e1xuXHRcdG91dC5wdXNoKHhzLmEpO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbnZhciBfTGlzdF9tYXAyID0gRjMoZnVuY3Rpb24oZiwgeHMsIHlzKVxue1xuXHRmb3IgKHZhciBhcnIgPSBbXTsgeHMuYiAmJiB5cy5iOyB4cyA9IHhzLmIsIHlzID0geXMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBMihmLCB4cy5hLCB5cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9tYXAzID0gRjQoZnVuY3Rpb24oZiwgeHMsIHlzLCB6cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHhzLmIgJiYgeXMuYiAmJiB6cy5iOyB4cyA9IHhzLmIsIHlzID0geXMuYiwgenMgPSB6cy5iKSAvLyBXSElMRV9DT05TRVNcblx0e1xuXHRcdGFyci5wdXNoKEEzKGYsIHhzLmEsIHlzLmEsIHpzLmEpKTtcblx0fVxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGFycik7XG59KTtcblxudmFyIF9MaXN0X21hcDQgPSBGNShmdW5jdGlvbihmLCB3cywgeHMsIHlzLCB6cylcbntcblx0Zm9yICh2YXIgYXJyID0gW107IHdzLmIgJiYgeHMuYiAmJiB5cy5iICYmIHpzLmI7IHdzID0gd3MuYiwgeHMgPSB4cy5iLCB5cyA9IHlzLmIsIHpzID0genMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBNChmLCB3cy5hLCB4cy5hLCB5cy5hLCB6cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9tYXA1ID0gRjYoZnVuY3Rpb24oZiwgdnMsIHdzLCB4cywgeXMsIHpzKVxue1xuXHRmb3IgKHZhciBhcnIgPSBbXTsgdnMuYiAmJiB3cy5iICYmIHhzLmIgJiYgeXMuYiAmJiB6cy5iOyB2cyA9IHZzLmIsIHdzID0gd3MuYiwgeHMgPSB4cy5iLCB5cyA9IHlzLmIsIHpzID0genMuYikgLy8gV0hJTEVfQ09OU0VTXG5cdHtcblx0XHRhcnIucHVzaChBNShmLCB2cy5hLCB3cy5hLCB4cy5hLCB5cy5hLCB6cy5hKSk7XG5cdH1cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShhcnIpO1xufSk7XG5cbnZhciBfTGlzdF9zb3J0QnkgPSBGMihmdW5jdGlvbihmLCB4cylcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShfTGlzdF90b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRyZXR1cm4gX1V0aWxzX2NtcChmKGEpLCBmKGIpKTtcblx0fSkpO1xufSk7XG5cbnZhciBfTGlzdF9zb3J0V2l0aCA9IEYyKGZ1bmN0aW9uKGYsIHhzKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KF9MaXN0X3RvQXJyYXkoeHMpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdHZhciBvcmQgPSBBMihmLCBhLCBiKTtcblx0XHRyZXR1cm4gb3JkID09PSAkZWxtJGNvcmUkQmFzaWNzJEVRID8gMCA6IG9yZCA9PT0gJGVsbSRjb3JlJEJhc2ljcyRMVCA/IC0xIDogMTtcblx0fSkpO1xufSk7XG5cblxuXG52YXIgX0pzQXJyYXlfZW1wdHkgPSBbXTtcblxuZnVuY3Rpb24gX0pzQXJyYXlfc2luZ2xldG9uKHZhbHVlKVxue1xuICAgIHJldHVybiBbdmFsdWVdO1xufVxuXG5mdW5jdGlvbiBfSnNBcnJheV9sZW5ndGgoYXJyYXkpXG57XG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aDtcbn1cblxudmFyIF9Kc0FycmF5X2luaXRpYWxpemUgPSBGMyhmdW5jdGlvbihzaXplLCBvZmZzZXQsIGZ1bmMpXG57XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShzaXplKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZnVuYyhvZmZzZXQgKyBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9pbml0aWFsaXplRnJvbUxpc3QgPSBGMihmdW5jdGlvbiAobWF4LCBscylcbntcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG1heCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heCAmJiBscy5iOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBscy5hO1xuICAgICAgICBscyA9IGxzLmI7XG4gICAgfVxuXG4gICAgcmVzdWx0Lmxlbmd0aCA9IGk7XG4gICAgcmV0dXJuIF9VdGlsc19UdXBsZTIocmVzdWx0LCBscyk7XG59KTtcblxudmFyIF9Kc0FycmF5X3Vuc2FmZUdldCA9IEYyKGZ1bmN0aW9uKGluZGV4LCBhcnJheSlcbntcbiAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xufSk7XG5cbnZhciBfSnNBcnJheV91bnNhZmVTZXQgPSBGMyhmdW5jdGlvbihpbmRleCwgdmFsdWUsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGFycmF5W2ldO1xuICAgIH1cblxuICAgIHJlc3VsdFtpbmRleF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9wdXNoID0gRjIoZnVuY3Rpb24odmFsdWUsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGggKyAxKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBhcnJheVtpXTtcbiAgICB9XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IHZhbHVlO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X2ZvbGRsID0gRjMoZnVuY3Rpb24oZnVuYywgYWNjLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGFjYyA9IEEyKGZ1bmMsIGFycmF5W2ldLCBhY2MpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG59KTtcblxudmFyIF9Kc0FycmF5X2ZvbGRyID0gRjMoZnVuY3Rpb24oZnVuYywgYWNjLCBhcnJheSlcbntcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXG4gICAge1xuICAgICAgICBhY2MgPSBBMihmdW5jLCBhcnJheVtpXSwgYWNjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xufSk7XG5cbnZhciBfSnNBcnJheV9tYXAgPSBGMihmdW5jdGlvbihmdW5jLCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBmdW5jKGFycmF5W2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9pbmRleGVkTWFwID0gRjMoZnVuY3Rpb24oZnVuYywgb2Zmc2V0LCBhcnJheSlcbntcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBBMihmdW5jLCBvZmZzZXQgKyBpLCBhcnJheVtpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfc2xpY2UgPSBGMyhmdW5jdGlvbihmcm9tLCB0bywgYXJyYXkpXG57XG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKGZyb20sIHRvKTtcbn0pO1xuXG52YXIgX0pzQXJyYXlfYXBwZW5kTiA9IEYzKGZ1bmN0aW9uKG4sIGRlc3QsIHNvdXJjZSlcbntcbiAgICB2YXIgZGVzdExlbiA9IGRlc3QubGVuZ3RoO1xuICAgIHZhciBpdGVtc1RvQ29weSA9IG4gLSBkZXN0TGVuO1xuXG4gICAgaWYgKGl0ZW1zVG9Db3B5ID4gc291cmNlLmxlbmd0aClcbiAgICB7XG4gICAgICAgIGl0ZW1zVG9Db3B5ID0gc291cmNlLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZSA9IGRlc3RMZW4gKyBpdGVtc1RvQ29weTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHNpemUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXN0TGVuOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBkZXN0W2ldO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNUb0NvcHk7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpICsgZGVzdExlbl0gPSBzb3VyY2VbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5cblxuLy8gTE9HXG5cbnZhciBfRGVidWdfbG9nX1VOVVNFRCA9IEYyKGZ1bmN0aW9uKHRhZywgdmFsdWUpXG57XG5cdHJldHVybiB2YWx1ZTtcbn0pO1xuXG52YXIgX0RlYnVnX2xvZyA9IEYyKGZ1bmN0aW9uKHRhZywgdmFsdWUpXG57XG5cdGNvbnNvbGUubG9nKHRhZyArICc6ICcgKyBfRGVidWdfdG9TdHJpbmcodmFsdWUpKTtcblx0cmV0dXJuIHZhbHVlO1xufSk7XG5cblxuLy8gVE9ET1NcblxuZnVuY3Rpb24gX0RlYnVnX3RvZG8obW9kdWxlTmFtZSwgcmVnaW9uKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdF9EZWJ1Z19jcmFzaCg4LCBtb2R1bGVOYW1lLCByZWdpb24sIG1lc3NhZ2UpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9kb0Nhc2UobW9kdWxlTmFtZSwgcmVnaW9uLCB2YWx1ZSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHRfRGVidWdfY3Jhc2goOSwgbW9kdWxlTmFtZSwgcmVnaW9uLCB2YWx1ZSwgbWVzc2FnZSk7XG5cdH07XG59XG5cblxuLy8gVE8gU1RSSU5HXG5cbmZ1bmN0aW9uIF9EZWJ1Z190b1N0cmluZ19VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAnPGludGVybmFscz4nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9TdHJpbmcodmFsdWUpXG57XG5cdHJldHVybiBfRGVidWdfdG9BbnNpU3RyaW5nKGZhbHNlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWUpXG57XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzxmdW5jdGlvbj4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfY3RvckNvbG9yKGFuc2ksIHZhbHVlID8gJ1RydWUnIDogJ0ZhbHNlJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfbnVtYmVyQ29sb3IoYW5zaSwgdmFsdWUgKyAnJyk7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2NoYXJDb2xvcihhbnNpLCBcIidcIiArIF9EZWJ1Z19hZGRTbGFzaGVzKHZhbHVlLCB0cnVlKSArIFwiJ1wiKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCAnXCInICsgX0RlYnVnX2FkZFNsYXNoZXModmFsdWUsIGZhbHNlKSArICdcIicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJyQnIGluIHZhbHVlKVxuXHR7XG5cdFx0dmFyIHRhZyA9IHZhbHVlLiQ7XG5cblx0XHRpZiAodHlwZW9mIHRhZyA9PT0gJ251bWJlcicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8aW50ZXJuYWxzPicpO1xuXHRcdH1cblxuXHRcdGlmICh0YWdbMF0gPT09ICcjJylcblx0XHR7XG5cdFx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0XHRmb3IgKHZhciBrIGluIHZhbHVlKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoayA9PT0gJyQnKSBjb250aW51ZTtcblx0XHRcdFx0b3V0cHV0LnB1c2goX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZVtrXSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcoJyArIG91dHB1dC5qb2luKCcsJykgKyAnKSc7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ1NldCcpXG5cdFx0XHRcdCsgX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCAnLmZyb21MaXN0JykgKyAnICdcblx0XHRcdFx0KyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksICRlbG0kY29yZSRTZXQkdG9MaXN0KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZyA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicgfHwgdGFnID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ0RpY3QnKVxuXHRcdFx0XHQrIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgJy5mcm9tTGlzdCcpICsgJyAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCAkZWxtJGNvcmUkRGljdCR0b0xpc3QodmFsdWUpKTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnQXJyYXlfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiBfRGVidWdfY3RvckNvbG9yKGFuc2ksICdBcnJheScpXG5cdFx0XHRcdCsgX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCAnLmZyb21MaXN0JykgKyAnICdcblx0XHRcdFx0KyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksICRlbG0kY29yZSRBcnJheSR0b0xpc3QodmFsdWUpKTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnOjonIHx8IHRhZyA9PT0gJ1tdJylcblx0XHR7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJ1snO1xuXG5cdFx0XHR2YWx1ZS5iICYmIChvdXRwdXQgKz0gX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZS5hKSwgdmFsdWUgPSB2YWx1ZS5iKVxuXG5cdFx0XHRmb3IgKDsgdmFsdWUuYjsgdmFsdWUgPSB2YWx1ZS5iKSAvLyBXSElMRV9DT05TXG5cdFx0XHR7XG5cdFx0XHRcdG91dHB1dCArPSAnLCcgKyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlLmEpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG91dHB1dCArICddJztcblx0XHR9XG5cblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSlcblx0XHR7XG5cdFx0XHRpZiAoaSA9PT0gJyQnKSBjb250aW51ZTtcblx0XHRcdHZhciBzdHIgPSBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlW2ldKTtcblx0XHRcdHZhciBjMCA9IHN0clswXTtcblx0XHRcdHZhciBwYXJlbmxlc3MgPSBjMCA9PT0gJ3snIHx8IGMwID09PSAnKCcgfHwgYzAgPT09ICdbJyB8fCBjMCA9PT0gJzwnIHx8IGMwID09PSAnXCInIHx8IHN0ci5pbmRleE9mKCcgJykgPCAwO1xuXHRcdFx0b3V0cHV0ICs9ICcgJyArIChwYXJlbmxlc3MgPyBzdHIgOiAnKCcgKyBzdHIgKyAnKScpO1xuXHRcdH1cblx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCB0YWcpICsgb3V0cHV0O1xuXHR9XG5cblx0aWYgKHR5cGVvZiBEYXRhVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGFWaWV3KVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCAnPCcgKyB2YWx1ZS5ieXRlTGVuZ3RoICsgJyBieXRlcz4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19pbnRlcm5hbENvbG9yKGFuc2ksICc8JyArIHZhbHVlLm5hbWUgKyAnPicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG5cdHtcblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0Zm9yICh2YXIga2V5IGluIHZhbHVlKVxuXHRcdHtcblx0XHRcdHZhciBmaWVsZCA9IGtleVswXSA9PT0gJ18nID8ga2V5LnNsaWNlKDEpIDoga2V5O1xuXHRcdFx0b3V0cHV0LnB1c2goX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCBmaWVsZCkgKyAnID0gJyArIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWVba2V5XSkpO1xuXHRcdH1cblx0XHRpZiAob3V0cHV0Lmxlbmd0aCA9PT0gMClcblx0XHR7XG5cdFx0XHRyZXR1cm4gJ3t9Jztcblx0XHR9XG5cdFx0cmV0dXJuICd7ICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgfSc7XG5cdH1cblxuXHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzxpbnRlcm5hbHM+Jyk7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19hZGRTbGFzaGVzKHN0ciwgaXNDaGFyKVxue1xuXHR2YXIgcyA9IHN0clxuXHRcdC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG5cdFx0LnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuXHRcdC5yZXBsYWNlKC9cXHQvZywgJ1xcXFx0Jylcblx0XHQucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG5cdFx0LnJlcGxhY2UoL1xcdi9nLCAnXFxcXHYnKVxuXHRcdC5yZXBsYWNlKC9cXDAvZywgJ1xcXFwwJyk7XG5cblx0aWYgKGlzQ2hhcilcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcJy9nLCAnXFxcXFxcJycpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5Nm0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX251bWJlckNvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTVtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19zdHJpbmdDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzkzbScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfY2hhckNvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTJtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19mYWRlQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYlszN20nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYlszNm0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvSGV4RGlnaXQobilcbntcblx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobiA8IDEwID8gNDggKyBuIDogNTUgKyBuKTtcbn1cblxuXG4vLyBDUkFTSFxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z19jcmFzaF9VTlVTRUQoaWRlbnRpZmllcilcbntcblx0dGhyb3cgbmV3IEVycm9yKCdodHRwczovL2dpdGh1Yi5jb20vZWxtL2NvcmUvYmxvYi8xLjAuMC9oaW50cy8nICsgaWRlbnRpZmllciArICcubWQnKTtcbn1cblxuXG5mdW5jdGlvbiBfRGVidWdfY3Jhc2goaWRlbnRpZmllciwgZmFjdDEsIGZhY3QyLCBmYWN0MywgZmFjdDQpXG57XG5cdHN3aXRjaChpZGVudGlmaWVyKVxuXHR7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdXaGF0IG5vZGUgc2hvdWxkIEkgdGFrZSBvdmVyPyBJbiBKYXZhU2NyaXB0IEkgbmVlZCBzb21ldGhpbmcgbGlrZTpcXG5cXG4gICAgRWxtLk1haW4uaW5pdCh7XFxuICAgICAgICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsbS1ub2RlXCIpXFxuICAgIH0pXFxuXFxuWW91IG5lZWQgdG8gZG8gdGhpcyB3aXRoIGFueSBCcm93c2VyLnNhbmRib3ggb3IgQnJvd3Nlci5lbGVtZW50IHByb2dyYW0uJyk7XG5cblx0XHRjYXNlIDE6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXIuYXBwbGljYXRpb24gcHJvZ3JhbXMgY2Fubm90IGhhbmRsZSBVUkxzIGxpa2UgdGhpczpcXG5cXG4gICAgJyArIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyAnXFxuXFxuV2hhdCBpcyB0aGUgcm9vdD8gVGhlIHJvb3Qgb2YgeW91ciBmaWxlIHN5c3RlbT8gVHJ5IGxvb2tpbmcgYXQgdGhpcyBwcm9ncmFtIHdpdGggYGVsbSByZWFjdG9yYCBvciBzb21lIG90aGVyIHNlcnZlci4nKTtcblxuXHRcdGNhc2UgMjpcblx0XHRcdHZhciBqc29uRXJyb3JTdHJpbmcgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUHJvYmxlbSB3aXRoIHRoZSBmbGFncyBnaXZlbiB0byB5b3VyIEVsbSBwcm9ncmFtIG9uIGluaXRpYWxpemF0aW9uLlxcblxcbicgKyBqc29uRXJyb3JTdHJpbmcpO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0dmFyIHBvcnROYW1lID0gZmFjdDE7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGNhbiBvbmx5IGJlIG9uZSBwb3J0IG5hbWVkIGAnICsgcG9ydE5hbWUgKyAnYCwgYnV0IHlvdXIgcHJvZ3JhbSBoYXMgbXVsdGlwbGUuJyk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHR2YXIgcG9ydE5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciBwcm9ibGVtID0gZmFjdDI7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBzZW5kIGFuIHVuZXhwZWN0ZWQgdHlwZSBvZiB2YWx1ZSB0aHJvdWdoIHBvcnQgYCcgKyBwb3J0TmFtZSArICdgOlxcbicgKyBwcm9ibGVtKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIHVzZSBgKD09KWAgb24gZnVuY3Rpb25zLlxcblRoZXJlIGlzIG5vIHdheSB0byBrbm93IGlmIGZ1bmN0aW9ucyBhcmUgXCJ0aGUgc2FtZVwiIGluIHRoZSBFbG0gc2Vuc2UuXFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly9wYWNrYWdlLmVsbS1sYW5nLm9yZy9wYWNrYWdlcy9lbG0vY29yZS9sYXRlc3QvQmFzaWNzIz09IHdoaWNoIGRlc2NyaWJlcyB3aHkgaXQgaXMgdGhpcyB3YXkgYW5kIHdoYXQgdGhlIGJldHRlciB2ZXJzaW9uIHdpbGwgbG9vayBsaWtlLicpO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91ciBwYWdlIGlzIGxvYWRpbmcgbXVsdGlwbGUgRWxtIHNjcmlwdHMgd2l0aCBhIG1vZHVsZSBuYW1lZCAnICsgbW9kdWxlTmFtZSArICcuIE1heWJlIGEgZHVwbGljYXRlIHNjcmlwdCBpcyBnZXR0aW5nIGxvYWRlZCBhY2NpZGVudGFsbHk/IElmIG5vdCwgcmVuYW1lIG9uZSBvZiB0aGVtIHNvIEkga25vdyB3aGljaCBpcyB3aGljaCEnKTtcblxuXHRcdGNhc2UgODpcblx0XHRcdHZhciBtb2R1bGVOYW1lID0gZmFjdDE7XG5cdFx0XHR2YXIgcmVnaW9uID0gZmFjdDI7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IGZhY3QzO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUT0RPIGluIG1vZHVsZSBgJyArIG1vZHVsZU5hbWUgKyAnYCAnICsgX0RlYnVnX3JlZ2lvblRvU3RyaW5nKHJlZ2lvbikgKyAnXFxuXFxuJyArIG1lc3NhZ2UpO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciByZWdpb24gPSBmYWN0Mjtcblx0XHRcdHZhciB2YWx1ZSA9IGZhY3QzO1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBmYWN0NDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0J1RPRE8gaW4gbW9kdWxlIGAnICsgbW9kdWxlTmFtZSArICdgIGZyb20gdGhlIGBjYXNlYCBleHByZXNzaW9uICdcblx0XHRcdFx0KyBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICdcXG5cXG5JdCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHZhbHVlOlxcblxcbiAgICAnXG5cdFx0XHRcdCsgX0RlYnVnX3RvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKCdcXG4nLCAnXFxuICAgICcpXG5cdFx0XHRcdCsgJ1xcblxcbkJ1dCB0aGUgYnJhbmNoIHRoYXQgaGFuZGxlcyBpdCBzYXlzOlxcblxcbiAgICAnICsgbWVzc2FnZS5yZXBsYWNlKCdcXG4nLCAnXFxuICAgICcpXG5cdFx0XHQpO1xuXG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignQnVnIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vdmlydHVhbC1kb20vaXNzdWVzJyk7XG5cblx0XHRjYXNlIDExOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGVyZm9ybSBtb2QgMC4gRGl2aXNpb24gYnkgemVybyBlcnJvci4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKVxue1xuXHRpZiAocmVnaW9uLnN0YXJ0LmxpbmUgPT09IHJlZ2lvbi5lbmQubGluZSlcblx0e1xuXHRcdHJldHVybiAnb24gbGluZSAnICsgcmVnaW9uLnN0YXJ0LmxpbmU7XG5cdH1cblx0cmV0dXJuICdvbiBsaW5lcyAnICsgcmVnaW9uLnN0YXJ0LmxpbmUgKyAnIHRocm91Z2ggJyArIHJlZ2lvbi5lbmQubGluZTtcbn1cblxuXG5cbi8vIE1BVEhcblxudmFyIF9CYXNpY3NfYWRkID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH0pO1xudmFyIF9CYXNpY3Nfc3ViID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pO1xudmFyIF9CYXNpY3NfbXVsID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAqIGI7IH0pO1xudmFyIF9CYXNpY3NfZmRpdiA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgLyBiOyB9KTtcbnZhciBfQmFzaWNzX2lkaXYgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiAoYSAvIGIpIHwgMDsgfSk7XG52YXIgX0Jhc2ljc19wb3cgPSBGMihNYXRoLnBvdyk7XG5cbnZhciBfQmFzaWNzX3JlbWFpbmRlckJ5ID0gRjIoZnVuY3Rpb24oYiwgYSkgeyByZXR1cm4gYSAlIGI7IH0pO1xuXG4vLyBodHRwczovL3d3dy5taWNyb3NvZnQuY29tL2VuLXVzL3Jlc2VhcmNoL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAyL2Rpdm1vZG5vdGUtbGV0dGVyLnBkZlxudmFyIF9CYXNpY3NfbW9kQnkgPSBGMihmdW5jdGlvbihtb2R1bHVzLCB4KVxue1xuXHR2YXIgYW5zd2VyID0geCAlIG1vZHVsdXM7XG5cdHJldHVybiBtb2R1bHVzID09PSAwXG5cdFx0PyBfRGVidWdfY3Jhc2goMTEpXG5cdFx0OlxuXHQoKGFuc3dlciA+IDAgJiYgbW9kdWx1cyA8IDApIHx8IChhbnN3ZXIgPCAwICYmIG1vZHVsdXMgPiAwKSlcblx0XHQ/IGFuc3dlciArIG1vZHVsdXNcblx0XHQ6IGFuc3dlcjtcbn0pO1xuXG5cbi8vIFRSSUdPTk9NRVRSWVxuXG52YXIgX0Jhc2ljc19waSA9IE1hdGguUEk7XG52YXIgX0Jhc2ljc19lID0gTWF0aC5FO1xudmFyIF9CYXNpY3NfY29zID0gTWF0aC5jb3M7XG52YXIgX0Jhc2ljc19zaW4gPSBNYXRoLnNpbjtcbnZhciBfQmFzaWNzX3RhbiA9IE1hdGgudGFuO1xudmFyIF9CYXNpY3NfYWNvcyA9IE1hdGguYWNvcztcbnZhciBfQmFzaWNzX2FzaW4gPSBNYXRoLmFzaW47XG52YXIgX0Jhc2ljc19hdGFuID0gTWF0aC5hdGFuO1xudmFyIF9CYXNpY3NfYXRhbjIgPSBGMihNYXRoLmF0YW4yKTtcblxuXG4vLyBNT1JFIE1BVEhcblxuZnVuY3Rpb24gX0Jhc2ljc190b0Zsb2F0KHgpIHsgcmV0dXJuIHg7IH1cbmZ1bmN0aW9uIF9CYXNpY3NfdHJ1bmNhdGUobikgeyByZXR1cm4gbiB8IDA7IH1cbmZ1bmN0aW9uIF9CYXNpY3NfaXNJbmZpbml0ZShuKSB7IHJldHVybiBuID09PSBJbmZpbml0eSB8fCBuID09PSAtSW5maW5pdHk7IH1cblxudmFyIF9CYXNpY3NfY2VpbGluZyA9IE1hdGguY2VpbDtcbnZhciBfQmFzaWNzX2Zsb29yID0gTWF0aC5mbG9vcjtcbnZhciBfQmFzaWNzX3JvdW5kID0gTWF0aC5yb3VuZDtcbnZhciBfQmFzaWNzX3NxcnQgPSBNYXRoLnNxcnQ7XG52YXIgX0Jhc2ljc19sb2cgPSBNYXRoLmxvZztcbnZhciBfQmFzaWNzX2lzTmFOID0gaXNOYU47XG5cblxuLy8gQk9PTEVBTlNcblxuZnVuY3Rpb24gX0Jhc2ljc19ub3QoYm9vbCkgeyByZXR1cm4gIWJvb2w7IH1cbnZhciBfQmFzaWNzX2FuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgJiYgYjsgfSk7XG52YXIgX0Jhc2ljc19vciAgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIHx8IGI7IH0pO1xudmFyIF9CYXNpY3NfeG9yID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAhPT0gYjsgfSk7XG5cblxuXG52YXIgX1N0cmluZ19jb25zID0gRjIoZnVuY3Rpb24oY2hyLCBzdHIpXG57XG5cdHJldHVybiBjaHIgKyBzdHI7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ191bmNvbnMoc3RyaW5nKVxue1xuXHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KDApO1xuXHRyZXR1cm4gIWlzTmFOKHdvcmQpXG5cdFx0PyAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGXG5cdFx0XHRcdD8gX1V0aWxzX1R1cGxlMihfVXRpbHNfY2hyKHN0cmluZ1swXSArIHN0cmluZ1sxXSksIHN0cmluZy5zbGljZSgyKSlcblx0XHRcdFx0OiBfVXRpbHNfVHVwbGUyKF9VdGlsc19jaHIoc3RyaW5nWzBdKSwgc3RyaW5nLnNsaWNlKDEpKVxuXHRcdClcblx0XHQ6ICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xufVxuXG52YXIgX1N0cmluZ19hcHBlbmQgPSBGMihmdW5jdGlvbihhLCBiKVxue1xuXHRyZXR1cm4gYSArIGI7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ19sZW5ndGgoc3RyKVxue1xuXHRyZXR1cm4gc3RyLmxlbmd0aDtcbn1cblxudmFyIF9TdHJpbmdfbWFwID0gRjIoZnVuY3Rpb24oZnVuYywgc3RyaW5nKVxue1xuXHR2YXIgbGVuID0gc3RyaW5nLmxlbmd0aDtcblx0dmFyIGFycmF5ID0gbmV3IEFycmF5KGxlbik7XG5cdHZhciBpID0gMDtcblx0d2hpbGUgKGkgPCBsZW4pXG5cdHtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRhcnJheVtpXSA9IGZ1bmMoX1V0aWxzX2NocihzdHJpbmdbaV0gKyBzdHJpbmdbaSsxXSkpO1xuXHRcdFx0aSArPSAyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGFycmF5W2ldID0gZnVuYyhfVXRpbHNfY2hyKHN0cmluZ1tpXSkpO1xuXHRcdGkrKztcblx0fVxuXHRyZXR1cm4gYXJyYXkuam9pbignJyk7XG59KTtcblxudmFyIF9TdHJpbmdfZmlsdGVyID0gRjIoZnVuY3Rpb24oaXNHb29kLCBzdHIpXG57XG5cdHZhciBhcnIgPSBbXTtcblx0dmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cdHZhciBpID0gMDtcblx0d2hpbGUgKGkgPCBsZW4pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cltpXTtcblx0XHR2YXIgd29yZCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRcdGkrKztcblx0XHRpZiAoMHhEODAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERCRkYpXG5cdFx0e1xuXHRcdFx0Y2hhciArPSBzdHJbaV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0aWYgKGlzR29vZChfVXRpbHNfY2hyKGNoYXIpKSlcblx0XHR7XG5cdFx0XHRhcnIucHVzaChjaGFyKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFyci5qb2luKCcnKTtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX3JldmVyc2Uoc3RyKVxue1xuXHR2YXIgbGVuID0gc3RyLmxlbmd0aDtcblx0dmFyIGFyciA9IG5ldyBBcnJheShsZW4pO1xuXHR2YXIgaSA9IDA7XG5cdHdoaWxlIChpIDwgbGVuKVxuXHR7XG5cdFx0dmFyIHdvcmQgPSBzdHIuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEODAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERCRkYpXG5cdFx0e1xuXHRcdFx0YXJyW2xlbiAtIGldID0gc3RyW2kgKyAxXTtcblx0XHRcdGkrKztcblx0XHRcdGFycltsZW4gLSBpXSA9IHN0cltpIC0gMV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRhcnJbbGVuIC0gaV0gPSBzdHJbaV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhcnIuam9pbignJyk7XG59XG5cbnZhciBfU3RyaW5nX2ZvbGRsID0gRjMoZnVuY3Rpb24oZnVuYywgc3RhdGUsIHN0cmluZylcbntcblx0dmFyIGxlbiA9IHN0cmluZy5sZW5ndGg7XG5cdHZhciBpID0gMDtcblx0d2hpbGUgKGkgPCBsZW4pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGkrKztcblx0XHRpZiAoMHhEODAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERCRkYpXG5cdFx0e1xuXHRcdFx0Y2hhciArPSBzdHJpbmdbaV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXHRcdHN0YXRlID0gQTIoZnVuYywgX1V0aWxzX2NocihjaGFyKSwgc3RhdGUpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19mb2xkciA9IEYzKGZ1bmN0aW9uKGZ1bmMsIHN0YXRlLCBzdHJpbmcpXG57XG5cdHZhciBpID0gc3RyaW5nLmxlbmd0aDtcblx0d2hpbGUgKGktLSlcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyaW5nW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4REMwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhERkZGKVxuXHRcdHtcblx0XHRcdGktLTtcblx0XHRcdGNoYXIgPSBzdHJpbmdbaV0gKyBjaGFyO1xuXHRcdH1cblx0XHRzdGF0ZSA9IEEyKGZ1bmMsIF9VdGlsc19jaHIoY2hhciksIHN0YXRlKTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59KTtcblxudmFyIF9TdHJpbmdfc3BsaXQgPSBGMihmdW5jdGlvbihzZXAsIHN0cilcbntcblx0cmV0dXJuIHN0ci5zcGxpdChzZXApO1xufSk7XG5cbnZhciBfU3RyaW5nX2pvaW4gPSBGMihmdW5jdGlvbihzZXAsIHN0cnMpXG57XG5cdHJldHVybiBzdHJzLmpvaW4oc2VwKTtcbn0pO1xuXG52YXIgX1N0cmluZ19zbGljZSA9IEYzKGZ1bmN0aW9uKHN0YXJ0LCBlbmQsIHN0cikge1xuXHRyZXR1cm4gc3RyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufSk7XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdHJpbShzdHIpXG57XG5cdHJldHVybiBzdHIudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RyaW1MZWZ0KHN0cilcbntcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sICcnKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ190cmltUmlnaHQoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgJycpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3dvcmRzKHN0cilcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShzdHIudHJpbSgpLnNwbGl0KC9cXHMrL2cpKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ19saW5lcyhzdHIpXG57XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoc3RyLnNwbGl0KC9cXHJcXG58XFxyfFxcbi9nKSk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdG9VcHBlcihzdHIpXG57XG5cdHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ190b0xvd2VyKHN0cilcbntcblx0cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuXG52YXIgX1N0cmluZ19hbnkgPSBGMihmdW5jdGlvbihpc0dvb2QsIHN0cmluZylcbntcblx0dmFyIGkgPSBzdHJpbmcubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJpbmdbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEQzAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERGRkYpXG5cdFx0e1xuXHRcdFx0aS0tO1xuXHRcdFx0Y2hhciA9IHN0cmluZ1tpXSArIGNoYXI7XG5cdFx0fVxuXHRcdGlmIChpc0dvb2QoX1V0aWxzX2NocihjaGFyKSkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0pO1xuXG52YXIgX1N0cmluZ19hbGwgPSBGMihmdW5jdGlvbihpc0dvb2QsIHN0cmluZylcbntcblx0dmFyIGkgPSBzdHJpbmcubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJpbmdbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEQzAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERGRkYpXG5cdFx0e1xuXHRcdFx0aS0tO1xuXHRcdFx0Y2hhciA9IHN0cmluZ1tpXSArIGNoYXI7XG5cdFx0fVxuXHRcdGlmICghaXNHb29kKF9VdGlsc19jaHIoY2hhcikpKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59KTtcblxudmFyIF9TdHJpbmdfY29udGFpbnMgPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5pbmRleE9mKHN1YikgPiAtMTtcbn0pO1xuXG52YXIgX1N0cmluZ19zdGFydHNXaXRoID0gRjIoZnVuY3Rpb24oc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIuaW5kZXhPZihzdWIpID09PSAwO1xufSk7XG5cbnZhciBfU3RyaW5nX2VuZHNXaXRoID0gRjIoZnVuY3Rpb24oc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoID49IHN1Yi5sZW5ndGggJiZcblx0XHRzdHIubGFzdEluZGV4T2Yoc3ViKSA9PT0gc3RyLmxlbmd0aCAtIHN1Yi5sZW5ndGg7XG59KTtcblxudmFyIF9TdHJpbmdfaW5kZXhlcyA9IEYyKGZ1bmN0aW9uKHN1Yiwgc3RyKVxue1xuXHR2YXIgc3ViTGVuID0gc3ViLmxlbmd0aDtcblxuXHRpZiAoc3ViTGVuIDwgMSlcblx0e1xuXHRcdHJldHVybiBfTGlzdF9OaWw7XG5cdH1cblxuXHR2YXIgaSA9IDA7XG5cdHZhciBpcyA9IFtdO1xuXG5cdHdoaWxlICgoaSA9IHN0ci5pbmRleE9mKHN1YiwgaSkpID4gLTEpXG5cdHtcblx0XHRpcy5wdXNoKGkpO1xuXHRcdGkgPSBpICsgc3ViTGVuO1xuXHR9XG5cblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShpcyk7XG59KTtcblxuXG4vLyBUTyBTVFJJTkdcblxuZnVuY3Rpb24gX1N0cmluZ19mcm9tTnVtYmVyKG51bWJlcilcbntcblx0cmV0dXJuIG51bWJlciArICcnO1xufVxuXG5cbi8vIElOVCBDT05WRVJTSU9OU1xuXG5mdW5jdGlvbiBfU3RyaW5nX3RvSW50KHN0cilcbntcblx0dmFyIHRvdGFsID0gMDtcblx0dmFyIGNvZGUwID0gc3RyLmNoYXJDb2RlQXQoMCk7XG5cdHZhciBzdGFydCA9IGNvZGUwID09IDB4MkIgLyogKyAqLyB8fCBjb2RlMCA9PSAweDJEIC8qIC0gKi8gPyAxIDogMDtcblxuXHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBzdHIubGVuZ3RoOyArK2kpXG5cdHtcblx0XHR2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmIChjb2RlIDwgMHgzMCB8fCAweDM5IDwgY29kZSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fVxuXHRcdHRvdGFsID0gMTAgKiB0b3RhbCArIGNvZGUgLSAweDMwO1xuXHR9XG5cblx0cmV0dXJuIGkgPT0gc3RhcnRcblx0XHQ/ICRlbG0kY29yZSRNYXliZSROb3RoaW5nXG5cdFx0OiAkZWxtJGNvcmUkTWF5YmUkSnVzdChjb2RlMCA9PSAweDJEID8gLXRvdGFsIDogdG90YWwpO1xufVxuXG5cbi8vIEZMT0FUIENPTlZFUlNJT05TXG5cbmZ1bmN0aW9uIF9TdHJpbmdfdG9GbG9hdChzKVxue1xuXHQvLyBjaGVjayBpZiBpdCBpcyBhIGhleCwgb2N0YWwsIG9yIGJpbmFyeSBudW1iZXJcblx0aWYgKHMubGVuZ3RoID09PSAwIHx8IC9bXFxzeGJvXS8udGVzdChzKSlcblx0e1xuXHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxuXHR2YXIgbiA9ICtzO1xuXHQvLyBmYXN0ZXIgaXNOYU4gY2hlY2tcblx0cmV0dXJuIG4gPT09IG4gPyAkZWxtJGNvcmUkTWF5YmUkSnVzdChuKSA6ICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX2Zyb21MaXN0KGNoYXJzKVxue1xuXHRyZXR1cm4gX0xpc3RfdG9BcnJheShjaGFycykuam9pbignJyk7XG59XG5cblxuXG5cbmZ1bmN0aW9uIF9DaGFyX3RvQ29kZShjaGFyKVxue1xuXHR2YXIgY29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcblx0aWYgKDB4RDgwMCA8PSBjb2RlICYmIGNvZGUgPD0gMHhEQkZGKVxuXHR7XG5cdFx0cmV0dXJuIChjb2RlIC0gMHhEODAwKSAqIDB4NDAwICsgY2hhci5jaGFyQ29kZUF0KDEpIC0gMHhEQzAwICsgMHgxMDAwMFxuXHR9XG5cdHJldHVybiBjb2RlO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl9mcm9tQ29kZShjb2RlKVxue1xuXHRyZXR1cm4gX1V0aWxzX2Nocihcblx0XHQoY29kZSA8IDAgfHwgMHgxMEZGRkYgPCBjb2RlKVxuXHRcdFx0PyAnXFx1RkZGRCdcblx0XHRcdDpcblx0XHQoY29kZSA8PSAweEZGRkYpXG5cdFx0XHQ/IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcblx0XHRcdDpcblx0XHQoY29kZSAtPSAweDEwMDAwLFxuXHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZShNYXRoLmZsb29yKGNvZGUgLyAweDQwMCkgKyAweEQ4MDAsIGNvZGUgJSAweDQwMCArIDB4REMwMClcblx0XHQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvVXBwZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfdG9Mb3dlcihjaGFyKVxue1xuXHRyZXR1cm4gX1V0aWxzX2NocihjaGFyLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b0xvY2FsZVVwcGVyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9Mb2NhbGVVcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvTG9jYWxlTG93ZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbn1cblxuXG5cbi8qKi9cbmZ1bmN0aW9uIF9Kc29uX2Vycm9yVG9TdHJpbmcoZXJyb3IpXG57XG5cdHJldHVybiAkZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZyhlcnJvcik7XG59XG4vLyovXG5cblxuLy8gQ09SRSBERUNPREVSU1xuXG5mdW5jdGlvbiBfSnNvbl9zdWNjZWVkKG1zZylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAwLFxuXHRcdGE6IG1zZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9mYWlsKG1zZylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAxLFxuXHRcdGE6IG1zZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVQcmltKGRlY29kZXIpXG57XG5cdHJldHVybiB7ICQ6IDIsIGI6IGRlY29kZXIgfTtcbn1cblxudmFyIF9Kc29uX2RlY29kZUludCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKVxuXHRcdD8gX0pzb25fZXhwZWN0aW5nKCdhbiBJTlQnLCB2YWx1ZSlcblx0XHQ6XG5cdCgtMjE0NzQ4MzY0NyA8IHZhbHVlICYmIHZhbHVlIDwgMjE0NzQ4MzY0NyAmJiAodmFsdWUgfCAwKSA9PT0gdmFsdWUpXG5cdFx0PyAkZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDpcblx0KGlzRmluaXRlKHZhbHVlKSAmJiAhKHZhbHVlICUgMSkpXG5cdFx0PyAkZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogX0pzb25fZXhwZWN0aW5nKCdhbiBJTlQnLCB2YWx1ZSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZUJvb2wgPSBfSnNvbl9kZWNvZGVQcmltKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpXG5cdFx0PyAkZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIEJPT0wnLCB2YWx1ZSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZUZsb2F0ID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG5cdFx0PyAkZWxtJGNvcmUkUmVzdWx0JE9rKHZhbHVlKVxuXHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIEZMT0FUJywgdmFsdWUpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVWYWx1ZSA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkT2soX0pzb25fd3JhcCh2YWx1ZSkpO1xufSk7XG5cbnZhciBfSnNvbl9kZWNvZGVTdHJpbmcgPSBfSnNvbl9kZWNvZGVQcmltKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdFx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUgKyAnJylcblx0XHRcdDogX0pzb25fZXhwZWN0aW5nKCdhIFNUUklORycsIHZhbHVlKTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVMaXN0KGRlY29kZXIpIHsgcmV0dXJuIHsgJDogMywgYjogZGVjb2RlciB9OyB9XG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVBcnJheShkZWNvZGVyKSB7IHJldHVybiB7ICQ6IDQsIGI6IGRlY29kZXIgfTsgfVxuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVOdWxsKHZhbHVlKSB7IHJldHVybiB7ICQ6IDUsIGM6IHZhbHVlIH07IH1cblxudmFyIF9Kc29uX2RlY29kZUZpZWxkID0gRjIoZnVuY3Rpb24oZmllbGQsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogNixcblx0XHRkOiBmaWVsZCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59KTtcblxudmFyIF9Kc29uX2RlY29kZUluZGV4ID0gRjIoZnVuY3Rpb24oaW5kZXgsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogNyxcblx0XHRlOiBpbmRleCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59KTtcblxuZnVuY3Rpb24gX0pzb25fZGVjb2RlS2V5VmFsdWVQYWlycyhkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDgsXG5cdFx0YjogZGVjb2RlclxuXHR9O1xufVxuXG5mdW5jdGlvbiBfSnNvbl9tYXBNYW55KGYsIGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDksXG5cdFx0ZjogZixcblx0XHRnOiBkZWNvZGVyc1xuXHR9O1xufVxuXG52YXIgX0pzb25fYW5kVGhlbiA9IEYyKGZ1bmN0aW9uKGNhbGxiYWNrLCBkZWNvZGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDEwLFxuXHRcdGI6IGRlY29kZXIsXG5cdFx0aDogY2FsbGJhY2tcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9vbmVPZihkZWNvZGVycylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAxMSxcblx0XHRnOiBkZWNvZGVyc1xuXHR9O1xufVxuXG5cbi8vIERFQ09ESU5HIE9CSkVDVFNcblxudmFyIF9Kc29uX21hcDEgPSBGMihmdW5jdGlvbihmLCBkMSlcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxXSk7XG59KTtcblxudmFyIF9Kc29uX21hcDIgPSBGMyhmdW5jdGlvbihmLCBkMSwgZDIpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDJdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwMyA9IEY0KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzXSk7XG59KTtcblxudmFyIF9Kc29uX21hcDQgPSBGNShmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNClcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDUgPSBGNihmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDVdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNiA9IEY3KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDcgPSBGOChmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNylcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3XSk7XG59KTtcblxudmFyIF9Kc29uX21hcDggPSBGOShmdW5jdGlvbihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgpXG57XG5cdHJldHVybiBfSnNvbl9tYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDhdKTtcbn0pO1xuXG5cbi8vIERFQ09ERVxuXG52YXIgX0pzb25fcnVuT25TdHJpbmcgPSBGMihmdW5jdGlvbihkZWNvZGVyLCBzdHJpbmcpXG57XG5cdHRyeVxuXHR7XG5cdFx0dmFyIHZhbHVlID0gSlNPTi5wYXJzZShzdHJpbmcpO1xuXHRcdHJldHVybiBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIHZhbHVlKTtcblx0fVxuXHRjYXRjaCAoZSlcblx0e1xuXHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JEVycihBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgJ1RoaXMgaXMgbm90IHZhbGlkIEpTT04hICcgKyBlLm1lc3NhZ2UsIF9Kc29uX3dyYXAoc3RyaW5nKSkpO1xuXHR9XG59KTtcblxudmFyIF9Kc29uX3J1biA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIHZhbHVlKVxue1xuXHRyZXR1cm4gX0pzb25fcnVuSGVscChkZWNvZGVyLCBfSnNvbl91bndyYXAodmFsdWUpKTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIHZhbHVlKVxue1xuXHRzd2l0Y2ggKGRlY29kZXIuJClcblx0e1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBkZWNvZGVyLmIodmFsdWUpO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuICh2YWx1ZSA9PT0gbnVsbClcblx0XHRcdFx0PyAkZWxtJGNvcmUkUmVzdWx0JE9rKGRlY29kZXIuYylcblx0XHRcdFx0OiBfSnNvbl9leHBlY3RpbmcoJ251bGwnLCB2YWx1ZSk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhIExJU1QnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gX0pzb25fcnVuQXJyYXlEZWNvZGVyKGRlY29kZXIuYiwgdmFsdWUsIF9MaXN0X2Zyb21BcnJheSk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBBUlJBWScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2Rlci5iLCB2YWx1ZSwgX0pzb25fdG9FbG1BcnJheSk7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgZmllbGQgPSBkZWNvZGVyLmQ7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKGZpZWxkIGluIHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYW4gT0JKRUNUIHdpdGggYSBmaWVsZCBuYW1lZCBgJyArIGZpZWxkICsgJ2AnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2ZpZWxkXSk7XG5cdFx0XHRyZXR1cm4gKCRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKSA/IHJlc3VsdCA6ICRlbG0kY29yZSRSZXN1bHQkRXJyKEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCwgZmllbGQsIHJlc3VsdC5hKSk7XG5cblx0XHRjYXNlIDc6XG5cdFx0XHR2YXIgaW5kZXggPSBkZWNvZGVyLmU7XG5cdFx0XHRpZiAoIV9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBBUlJBWScsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA+PSB2YWx1ZS5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2EgTE9OR0VSIGFycmF5LiBOZWVkIGluZGV4ICcgKyBpbmRleCArICcgYnV0IG9ubHkgc2VlICcgKyB2YWx1ZS5sZW5ndGggKyAnIGVudHJpZXMnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2luZGV4XSk7XG5cdFx0XHRyZXR1cm4gKCRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKSA/IHJlc3VsdCA6ICRlbG0kY29yZSRSZXN1bHQkRXJyKEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRJbmRleCwgaW5kZXgsIHJlc3VsdC5hKSk7XG5cblx0XHRjYXNlIDg6XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBfSnNvbl9pc0FycmF5KHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYW4gT0JKRUNUJywgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF9MaXN0X05pbDtcblx0XHRcdC8vIFRPRE8gdGVzdCBwZXJmIG9mIE9iamVjdC5rZXlzIGFuZCBzd2l0Y2ggd2hlbiBzdXBwb3J0IGlzIGdvb2QgZW5vdWdoXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5iLCB2YWx1ZVtrZXldKTtcblx0XHRcdFx0XHRpZiAoISRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JEVycihBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkRmllbGQsIGtleSwgcmVzdWx0LmEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5VmFsdWVQYWlycyA9IF9MaXN0X0NvbnMoX1V0aWxzX1R1cGxlMihrZXksIHJlc3VsdC5hKSwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JE9rKCRlbG0kY29yZSRMaXN0JHJldmVyc2Uoa2V5VmFsdWVQYWlycykpO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIGFuc3dlciA9IGRlY29kZXIuZjtcblx0XHRcdHZhciBkZWNvZGVycyA9IGRlY29kZXIuZztcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVjb2RlcnMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXJzW2ldLCB2YWx1ZSk7XG5cdFx0XHRcdGlmICghJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFuc3dlciA9IGFuc3dlcihyZXN1bHQuYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRPayhhbnN3ZXIpO1xuXG5cdFx0Y2FzZSAxMDpcblx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXIuYiwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuICghJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdD8gcmVzdWx0XG5cdFx0XHRcdDogX0pzb25fcnVuSGVscChkZWNvZGVyLmgocmVzdWx0LmEpLCB2YWx1ZSk7XG5cblx0XHRjYXNlIDExOlxuXHRcdFx0dmFyIGVycm9ycyA9IF9MaXN0X05pbDtcblx0XHRcdGZvciAodmFyIHRlbXAgPSBkZWNvZGVyLmc7IHRlbXAuYjsgdGVtcCA9IHRlbXAuYikgLy8gV0hJTEVfQ09OU1xuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscCh0ZW1wLmEsIHZhbHVlKTtcblx0XHRcdFx0aWYgKCRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlcnJvcnMgPSBfTGlzdF9Db25zKHJlc3VsdC5hLCBlcnJvcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKCRlbG0kanNvbiRKc29uJERlY29kZSRPbmVPZigkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGVycm9ycykpKTtcblxuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JEVycihBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgZGVjb2Rlci5hLCBfSnNvbl93cmFwKHZhbHVlKSkpO1xuXG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkT2soZGVjb2Rlci5hKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2RlciwgdmFsdWUsIHRvRWxtVmFsdWUpXG57XG5cdHZhciBsZW4gPSB2YWx1ZS5sZW5ndGg7XG5cdHZhciBhcnJheSA9IG5ldyBBcnJheShsZW4pO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHR7XG5cdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgdmFsdWVbaV0pO1xuXHRcdGlmICghJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRJbmRleCwgaSwgcmVzdWx0LmEpKTtcblx0XHR9XG5cdFx0YXJyYXlbaV0gPSByZXN1bHQuYTtcblx0fVxuXHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRPayh0b0VsbVZhbHVlKGFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2lzQXJyYXkodmFsdWUpXG57XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCAodHlwZW9mIEZpbGVMaXN0ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVMaXN0KTtcbn1cblxuZnVuY3Rpb24gX0pzb25fdG9FbG1BcnJheShhcnJheSlcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRBcnJheSRpbml0aWFsaXplLCBhcnJheS5sZW5ndGgsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGFycmF5W2ldOyB9KTtcbn1cblxuZnVuY3Rpb24gX0pzb25fZXhwZWN0aW5nKHR5cGUsIHZhbHVlKVxue1xuXHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJEZhaWx1cmUsICdFeHBlY3RpbmcgJyArIHR5cGUsIF9Kc29uX3dyYXAodmFsdWUpKSk7XG59XG5cblxuLy8gRVFVQUxJVFlcblxuZnVuY3Rpb24gX0pzb25fZXF1YWxpdHkoeCwgeSlcbntcblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh4LiQgIT09IHkuJClcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHN3aXRjaCAoeC4kKVxuXHR7XG5cdFx0Y2FzZSAwOlxuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiB4LmEgPT09IHkuYTtcblxuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiB4LmIgPT09IHkuYjtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiB4LmMgPT09IHkuYztcblxuXHRcdGNhc2UgMzpcblx0XHRjYXNlIDQ6XG5cdFx0Y2FzZSA4OlxuXHRcdFx0cmV0dXJuIF9Kc29uX2VxdWFsaXR5KHguYiwgeS5iKTtcblxuXHRcdGNhc2UgNjpcblx0XHRcdHJldHVybiB4LmQgPT09IHkuZCAmJiBfSnNvbl9lcXVhbGl0eSh4LmIsIHkuYik7XG5cblx0XHRjYXNlIDc6XG5cdFx0XHRyZXR1cm4geC5lID09PSB5LmUgJiYgX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0cmV0dXJuIHguZiA9PT0geS5mICYmIF9Kc29uX2xpc3RFcXVhbGl0eSh4LmcsIHkuZyk7XG5cblx0XHRjYXNlIDEwOlxuXHRcdFx0cmV0dXJuIHguaCA9PT0geS5oICYmIF9Kc29uX2VxdWFsaXR5KHguYiwgeS5iKTtcblxuXHRcdGNhc2UgMTE6XG5cdFx0XHRyZXR1cm4gX0pzb25fbGlzdEVxdWFsaXR5KHguZywgeS5nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfSnNvbl9saXN0RXF1YWxpdHkoYURlY29kZXJzLCBiRGVjb2RlcnMpXG57XG5cdHZhciBsZW4gPSBhRGVjb2RlcnMubGVuZ3RoO1xuXHRpZiAobGVuICE9PSBiRGVjb2RlcnMubGVuZ3RoKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG5cdHtcblx0XHRpZiAoIV9Kc29uX2VxdWFsaXR5KGFEZWNvZGVyc1tpXSwgYkRlY29kZXJzW2ldKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIEVOQ09ERVxuXG52YXIgX0pzb25fZW5jb2RlID0gRjIoZnVuY3Rpb24oaW5kZW50TGV2ZWwsIHZhbHVlKVxue1xuXHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoX0pzb25fdW53cmFwKHZhbHVlKSwgbnVsbCwgaW5kZW50TGV2ZWwpICsgJyc7XG59KTtcblxuZnVuY3Rpb24gX0pzb25fd3JhcCh2YWx1ZSkgeyByZXR1cm4geyAkOiAwLCBhOiB2YWx1ZSB9OyB9XG5mdW5jdGlvbiBfSnNvbl91bndyYXAodmFsdWUpIHsgcmV0dXJuIHZhbHVlLmE7IH1cblxuZnVuY3Rpb24gX0pzb25fd3JhcF9VTlVTRUQodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5mdW5jdGlvbiBfSnNvbl91bndyYXBfVU5VU0VEKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfVxuXG5mdW5jdGlvbiBfSnNvbl9lbXB0eUFycmF5KCkgeyByZXR1cm4gW107IH1cbmZ1bmN0aW9uIF9Kc29uX2VtcHR5T2JqZWN0KCkgeyByZXR1cm4ge307IH1cblxudmFyIF9Kc29uX2FkZEZpZWxkID0gRjMoZnVuY3Rpb24oa2V5LCB2YWx1ZSwgb2JqZWN0KVxue1xuXHRvYmplY3Rba2V5XSA9IF9Kc29uX3Vud3JhcCh2YWx1ZSk7XG5cdHJldHVybiBvYmplY3Q7XG59KTtcblxuZnVuY3Rpb24gX0pzb25fYWRkRW50cnkoZnVuYylcbntcblx0cmV0dXJuIEYyKGZ1bmN0aW9uKGVudHJ5LCBhcnJheSlcblx0e1xuXHRcdGFycmF5LnB1c2goX0pzb25fdW53cmFwKGZ1bmMoZW50cnkpKSk7XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9KTtcbn1cblxudmFyIF9Kc29uX2VuY29kZU51bGwgPSBfSnNvbl93cmFwKG51bGwpO1xuXG5cblxuLy8gVEFTS1NcblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9zdWNjZWVkKHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDAsXG5cdFx0YTogdmFsdWVcblx0fTtcbn1cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9mYWlsKGVycm9yKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDEsXG5cdFx0YTogZXJyb3Jcblx0fTtcbn1cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9iaW5kaW5nKGNhbGxiYWNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDIsXG5cdFx0YjogY2FsbGJhY2ssXG5cdFx0YzogbnVsbFxuXHR9O1xufVxuXG52YXIgX1NjaGVkdWxlcl9hbmRUaGVuID0gRjIoZnVuY3Rpb24oY2FsbGJhY2ssIHRhc2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogMyxcblx0XHRiOiBjYWxsYmFjayxcblx0XHRkOiB0YXNrXG5cdH07XG59KTtcblxudmFyIF9TY2hlZHVsZXJfb25FcnJvciA9IEYyKGZ1bmN0aW9uKGNhbGxiYWNrLCB0YXNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDQsXG5cdFx0YjogY2FsbGJhY2ssXG5cdFx0ZDogdGFza1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfcmVjZWl2ZShjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiA1LFxuXHRcdGI6IGNhbGxiYWNrXG5cdH07XG59XG5cblxuLy8gUFJPQ0VTU0VTXG5cbnZhciBfU2NoZWR1bGVyX2d1aWQgPSAwO1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3Jhd1NwYXduKHRhc2spXG57XG5cdHZhciBwcm9jID0ge1xuXHRcdCQ6IDAsXG5cdFx0ZTogX1NjaGVkdWxlcl9ndWlkKyssXG5cdFx0ZjogdGFzayxcblx0XHRnOiBudWxsLFxuXHRcdGg6IFtdXG5cdH07XG5cblx0X1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpO1xuXG5cdHJldHVybiBwcm9jO1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3NwYXduKHRhc2spXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1NjaGVkdWxlcl9yYXdTcGF3bih0YXNrKSkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9yYXdTZW5kKHByb2MsIG1zZylcbntcblx0cHJvYy5oLnB1c2gobXNnKTtcblx0X1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpO1xufVxuXG52YXIgX1NjaGVkdWxlcl9zZW5kID0gRjIoZnVuY3Rpb24ocHJvYywgbXNnKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0X1NjaGVkdWxlcl9yYXdTZW5kKHByb2MsIG1zZyk7XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59KTtcblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9raWxsKHByb2MpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgdGFzayA9IHByb2MuZjtcblx0XHRpZiAodGFzay4kID09PSAyICYmIHRhc2suYylcblx0XHR7XG5cdFx0XHR0YXNrLmMoKTtcblx0XHR9XG5cblx0XHRwcm9jLmYgPSBudWxsO1xuXG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59XG5cblxuLyogU1RFUCBQUk9DRVNTRVNcblxudHlwZSBhbGlhcyBQcm9jZXNzID1cbiAgeyAkIDogdGFnXG4gICwgaWQgOiB1bmlxdWVfaWRcbiAgLCByb290IDogVGFza1xuICAsIHN0YWNrIDogbnVsbCB8IHsgJDogU1VDQ0VFRCB8IEZBSUwsIGE6IGNhbGxiYWNrLCBiOiBzdGFjayB9XG4gICwgbWFpbGJveCA6IFttc2ddXG4gIH1cblxuKi9cblxuXG52YXIgX1NjaGVkdWxlcl93b3JraW5nID0gZmFsc2U7XG52YXIgX1NjaGVkdWxlcl9xdWV1ZSA9IFtdO1xuXG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfZW5xdWV1ZShwcm9jKVxue1xuXHRfU2NoZWR1bGVyX3F1ZXVlLnB1c2gocHJvYyk7XG5cdGlmIChfU2NoZWR1bGVyX3dvcmtpbmcpXG5cdHtcblx0XHRyZXR1cm47XG5cdH1cblx0X1NjaGVkdWxlcl93b3JraW5nID0gdHJ1ZTtcblx0d2hpbGUgKHByb2MgPSBfU2NoZWR1bGVyX3F1ZXVlLnNoaWZ0KCkpXG5cdHtcblx0XHRfU2NoZWR1bGVyX3N0ZXAocHJvYyk7XG5cdH1cblx0X1NjaGVkdWxlcl93b3JraW5nID0gZmFsc2U7XG59XG5cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9zdGVwKHByb2MpXG57XG5cdHdoaWxlIChwcm9jLmYpXG5cdHtcblx0XHR2YXIgcm9vdFRhZyA9IHByb2MuZi4kO1xuXHRcdGlmIChyb290VGFnID09PSAwIHx8IHJvb3RUYWcgPT09IDEpXG5cdFx0e1xuXHRcdFx0d2hpbGUgKHByb2MuZyAmJiBwcm9jLmcuJCAhPT0gcm9vdFRhZylcblx0XHRcdHtcblx0XHRcdFx0cHJvYy5nID0gcHJvYy5nLmk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXByb2MuZylcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cHJvYy5mID0gcHJvYy5nLmIocHJvYy5mLmEpO1xuXHRcdFx0cHJvYy5nID0gcHJvYy5nLmk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHJvb3RUYWcgPT09IDIpXG5cdFx0e1xuXHRcdFx0cHJvYy5mLmMgPSBwcm9jLmYuYihmdW5jdGlvbihuZXdSb290KSB7XG5cdFx0XHRcdHByb2MuZiA9IG5ld1Jvb3Q7XG5cdFx0XHRcdF9TY2hlZHVsZXJfZW5xdWV1ZShwcm9jKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRlbHNlIGlmIChyb290VGFnID09PSA1KVxuXHRcdHtcblx0XHRcdGlmIChwcm9jLmgubGVuZ3RoID09PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcm9jLmYgPSBwcm9jLmYuYihwcm9jLmguc2hpZnQoKSk7XG5cdFx0fVxuXHRcdGVsc2UgLy8gaWYgKHJvb3RUYWcgPT09IDMgfHwgcm9vdFRhZyA9PT0gNClcblx0XHR7XG5cdFx0XHRwcm9jLmcgPSB7XG5cdFx0XHRcdCQ6IHJvb3RUYWcgPT09IDMgPyAwIDogMSxcblx0XHRcdFx0YjogcHJvYy5mLmIsXG5cdFx0XHRcdGk6IHByb2MuZ1xuXHRcdFx0fTtcblx0XHRcdHByb2MuZiA9IHByb2MuZi5kO1xuXHRcdH1cblx0fVxufVxuXG5cblxuZnVuY3Rpb24gX1Byb2Nlc3Nfc2xlZXAodGltZSlcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHRcdH0sIHRpbWUpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuXHR9KTtcbn1cblxuXG5cblxuLy8gUFJPR1JBTVNcblxuXG52YXIgX1BsYXRmb3JtX3dvcmtlciA9IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRpbXBsLmluaXQsXG5cdFx0aW1wbC51cGRhdGUsXG5cdFx0aW1wbC5zdWJzY3JpcHRpb25zLFxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gZnVuY3Rpb24oKSB7fSB9XG5cdCk7XG59KTtcblxuXG5cbi8vIElOSVRJQUxJWkUgQSBQUk9HUkFNXG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luaXRpYWxpemUoZmxhZ0RlY29kZXIsIGFyZ3MsIGluaXQsIHVwZGF0ZSwgc3Vic2NyaXB0aW9ucywgc3RlcHBlckJ1aWxkZXIpXG57XG5cdHZhciByZXN1bHQgPSBBMihfSnNvbl9ydW4sIGZsYWdEZWNvZGVyLCBfSnNvbl93cmFwKGFyZ3MgPyBhcmdzWydmbGFncyddIDogdW5kZWZpbmVkKSk7XG5cdCRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpIHx8IF9EZWJ1Z19jcmFzaCgyIC8qKi8sIF9Kc29uX2Vycm9yVG9TdHJpbmcocmVzdWx0LmEpIC8qKi8pO1xuXHR2YXIgbWFuYWdlcnMgPSB7fTtcblx0dmFyIGluaXRQYWlyID0gaW5pdChyZXN1bHQuYSk7XG5cdHZhciBtb2RlbCA9IGluaXRQYWlyLmE7XG5cdHZhciBzdGVwcGVyID0gc3RlcHBlckJ1aWxkZXIoc2VuZFRvQXBwLCBtb2RlbCk7XG5cdHZhciBwb3J0cyA9IF9QbGF0Zm9ybV9zZXR1cEVmZmVjdHMobWFuYWdlcnMsIHNlbmRUb0FwcCk7XG5cblx0ZnVuY3Rpb24gc2VuZFRvQXBwKG1zZywgdmlld01ldGFkYXRhKVxuXHR7XG5cdFx0dmFyIHBhaXIgPSBBMih1cGRhdGUsIG1zZywgbW9kZWwpO1xuXHRcdHN0ZXBwZXIobW9kZWwgPSBwYWlyLmEsIHZpZXdNZXRhZGF0YSk7XG5cdFx0X1BsYXRmb3JtX2VucXVldWVFZmZlY3RzKG1hbmFnZXJzLCBwYWlyLmIsIHN1YnNjcmlwdGlvbnMobW9kZWwpKTtcblx0fVxuXG5cdF9QbGF0Zm9ybV9lbnF1ZXVlRWZmZWN0cyhtYW5hZ2VycywgaW5pdFBhaXIuYiwgc3Vic2NyaXB0aW9ucyhtb2RlbCkpO1xuXG5cdHJldHVybiBwb3J0cyA/IHsgcG9ydHM6IHBvcnRzIH0gOiB7fTtcbn1cblxuXG5cbi8vIFRSQUNLIFBSRUxPQURTXG4vL1xuLy8gVGhpcyBpcyB1c2VkIGJ5IGNvZGUgaW4gZWxtL2Jyb3dzZXIgYW5kIGVsbS9odHRwXG4vLyB0byByZWdpc3RlciBhbnkgSFRUUCByZXF1ZXN0cyB0aGF0IGFyZSB0cmlnZ2VyZWQgYnkgaW5pdC5cbi8vXG5cblxudmFyIF9QbGF0Zm9ybV9wcmVsb2FkO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9yZWdpc3RlclByZWxvYWQodXJsKVxue1xuXHRfUGxhdGZvcm1fcHJlbG9hZC5hZGQodXJsKTtcbn1cblxuXG5cbi8vIEVGRkVDVCBNQU5BR0VSU1xuXG5cbnZhciBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnMgPSB7fTtcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fc2V0dXBFZmZlY3RzKG1hbmFnZXJzLCBzZW5kVG9BcHApXG57XG5cdHZhciBwb3J0cztcblxuXHQvLyBzZXR1cCBhbGwgbmVjZXNzYXJ5IGVmZmVjdCBtYW5hZ2Vyc1xuXHRmb3IgKHZhciBrZXkgaW4gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzKVxuXHR7XG5cdFx0dmFyIG1hbmFnZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNba2V5XTtcblxuXHRcdGlmIChtYW5hZ2VyLmEpXG5cdFx0e1xuXHRcdFx0cG9ydHMgPSBwb3J0cyB8fCB7fTtcblx0XHRcdHBvcnRzW2tleV0gPSBtYW5hZ2VyLmEoa2V5LCBzZW5kVG9BcHApO1xuXHRcdH1cblxuXHRcdG1hbmFnZXJzW2tleV0gPSBfUGxhdGZvcm1faW5zdGFudGlhdGVNYW5hZ2VyKG1hbmFnZXIsIHNlbmRUb0FwcCk7XG5cdH1cblxuXHRyZXR1cm4gcG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2NyZWF0ZU1hbmFnZXIoaW5pdCwgb25FZmZlY3RzLCBvblNlbGZNc2csIGNtZE1hcCwgc3ViTWFwKVxue1xuXHRyZXR1cm4ge1xuXHRcdGI6IGluaXQsXG5cdFx0Yzogb25FZmZlY3RzLFxuXHRcdGQ6IG9uU2VsZk1zZyxcblx0XHRlOiBjbWRNYXAsXG5cdFx0Zjogc3ViTWFwXG5cdH07XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luc3RhbnRpYXRlTWFuYWdlcihpbmZvLCBzZW5kVG9BcHApXG57XG5cdHZhciByb3V0ZXIgPSB7XG5cdFx0Zzogc2VuZFRvQXBwLFxuXHRcdGg6IHVuZGVmaW5lZFxuXHR9O1xuXG5cdHZhciBvbkVmZmVjdHMgPSBpbmZvLmM7XG5cdHZhciBvblNlbGZNc2cgPSBpbmZvLmQ7XG5cdHZhciBjbWRNYXAgPSBpbmZvLmU7XG5cdHZhciBzdWJNYXAgPSBpbmZvLmY7XG5cblx0ZnVuY3Rpb24gbG9vcChzdGF0ZSlcblx0e1xuXHRcdHJldHVybiBBMihfU2NoZWR1bGVyX2FuZFRoZW4sIGxvb3AsIF9TY2hlZHVsZXJfcmVjZWl2ZShmdW5jdGlvbihtc2cpXG5cdFx0e1xuXHRcdFx0dmFyIHZhbHVlID0gbXNnLmE7XG5cblx0XHRcdGlmIChtc2cuJCA9PT0gMClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIEEzKG9uU2VsZk1zZywgcm91dGVyLCB2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY21kTWFwICYmIHN1Yk1hcFxuXHRcdFx0XHQ/IEE0KG9uRWZmZWN0cywgcm91dGVyLCB2YWx1ZS5pLCB2YWx1ZS5qLCBzdGF0ZSlcblx0XHRcdFx0OiBBMyhvbkVmZmVjdHMsIHJvdXRlciwgY21kTWFwID8gdmFsdWUuaSA6IHZhbHVlLmosIHN0YXRlKTtcblx0XHR9KSk7XG5cdH1cblxuXHRyZXR1cm4gcm91dGVyLmggPSBfU2NoZWR1bGVyX3Jhd1NwYXduKEEyKF9TY2hlZHVsZXJfYW5kVGhlbiwgbG9vcCwgaW5mby5iKSk7XG59XG5cblxuXG4vLyBST1VUSU5HXG5cblxudmFyIF9QbGF0Zm9ybV9zZW5kVG9BcHAgPSBGMihmdW5jdGlvbihyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHJvdXRlci5nKG1zZyk7XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59KTtcblxuXG52YXIgX1BsYXRmb3JtX3NlbmRUb1NlbGYgPSBGMihmdW5jdGlvbihyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIEEyKF9TY2hlZHVsZXJfc2VuZCwgcm91dGVyLmgsIHtcblx0XHQkOiAwLFxuXHRcdGE6IG1zZ1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gQkFHU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9sZWFmKGhvbWUpXG57XG5cdHJldHVybiBmdW5jdGlvbih2YWx1ZSlcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0azogaG9tZSxcblx0XHRcdGw6IHZhbHVlXG5cdFx0fTtcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fYmF0Y2gobGlzdClcbntcblx0cmV0dXJuIHtcblx0XHQkOiAyLFxuXHRcdG06IGxpc3Rcblx0fTtcbn1cblxuXG52YXIgX1BsYXRmb3JtX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgYmFnKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDMsXG5cdFx0bjogdGFnZ2VyLFxuXHRcdG86IGJhZ1xuXHR9XG59KTtcblxuXG5cbi8vIFBJUEUgQkFHUyBJTlRPIEVGRkVDVCBNQU5BR0VSU1xuLy9cbi8vIEVmZmVjdHMgbXVzdCBiZSBxdWV1ZWQhXG4vL1xuLy8gU2F5IHlvdXIgaW5pdCBjb250YWlucyBhIHN5bmNocm9ub3VzIGNvbW1hbmQsIGxpa2UgVGltZS5ub3cgb3IgVGltZS5oZXJlXG4vL1xuLy8gICAtIFRoaXMgd2lsbCBwcm9kdWNlIGEgYmF0Y2ggb2YgZWZmZWN0cyAoRlhfMSlcbi8vICAgLSBUaGUgc3luY2hyb25vdXMgdGFzayB0cmlnZ2VycyB0aGUgc3Vic2VxdWVudCBgdXBkYXRlYCBjYWxsXG4vLyAgIC0gVGhpcyB3aWxsIHByb2R1Y2UgYSBiYXRjaCBvZiBlZmZlY3RzIChGWF8yKVxuLy9cbi8vIElmIHdlIGp1c3Qgc3RhcnQgZGlzcGF0Y2hpbmcgRlhfMiwgc3Vic2NyaXB0aW9ucyBmcm9tIEZYXzIgY2FuIGJlIHByb2Nlc3NlZFxuLy8gYmVmb3JlIHN1YnNjcmlwdGlvbnMgZnJvbSBGWF8xLiBObyBnb29kISBFYXJsaWVyIHZlcnNpb25zIG9mIHRoaXMgY29kZSBoYWRcbi8vIHRoaXMgcHJvYmxlbSwgbGVhZGluZyB0byB0aGVzZSByZXBvcnRzOlxuLy9cbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL2VsbS9jb3JlL2lzc3Vlcy85ODBcbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL2VsbS9jb3JlL3B1bGwvOTgxXG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29tcGlsZXIvaXNzdWVzLzE3NzZcbi8vXG4vLyBUaGUgcXVldWUgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIG9yZGVyaW5nIGlzc3VlcyBmb3Igc3luY2hyb25vdXMgY29tbWFuZHMuXG5cblxuLy8gV2h5IHVzZSB0cnVlL2ZhbHNlIGhlcmU/IFdoeSBub3QganVzdCBjaGVjayB0aGUgbGVuZ3RoIG9mIHRoZSBxdWV1ZT9cbi8vIFRoZSBnb2FsIGlzIHRvIGRldGVjdCBcImFyZSB3ZSBjdXJyZW50bHkgZGlzcGF0Y2hpbmcgZWZmZWN0cz9cIiBJZiB3ZVxuLy8gYXJlLCB3ZSBuZWVkIHRvIGJhaWwgYW5kIGxldCB0aGUgb25nb2luZyB3aGlsZSBsb29wIGhhbmRsZSB0aGluZ3MuXG4vL1xuLy8gTm93IHNheSB0aGUgcXVldWUgaGFzIDEgZWxlbWVudC4gV2hlbiB3ZSBkZXF1ZXVlIHRoZSBmaW5hbCBlbGVtZW50LFxuLy8gdGhlIHF1ZXVlIHdpbGwgYmUgZW1wdHksIGJ1dCB3ZSBhcmUgc3RpbGwgYWN0aXZlbHkgZGlzcGF0Y2hpbmcgZWZmZWN0cy5cbi8vIFNvIHlvdSBjb3VsZCBnZXQgcXVldWUganVtcGluZyBpbiBhIHJlYWxseSB0cmlja3kgY2F0ZWdvcnkgb2YgY2FzZXMuXG4vL1xudmFyIF9QbGF0Zm9ybV9lZmZlY3RzUXVldWUgPSBbXTtcbnZhciBfUGxhdGZvcm1fZWZmZWN0c0FjdGl2ZSA9IGZhbHNlO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9lbnF1ZXVlRWZmZWN0cyhtYW5hZ2VycywgY21kQmFnLCBzdWJCYWcpXG57XG5cdF9QbGF0Zm9ybV9lZmZlY3RzUXVldWUucHVzaCh7IHA6IG1hbmFnZXJzLCBxOiBjbWRCYWcsIHI6IHN1YkJhZyB9KTtcblxuXHRpZiAoX1BsYXRmb3JtX2VmZmVjdHNBY3RpdmUpIHJldHVybjtcblxuXHRfUGxhdGZvcm1fZWZmZWN0c0FjdGl2ZSA9IHRydWU7XG5cdGZvciAodmFyIGZ4OyBmeCA9IF9QbGF0Zm9ybV9lZmZlY3RzUXVldWUuc2hpZnQoKTsgKVxuXHR7XG5cdFx0X1BsYXRmb3JtX2Rpc3BhdGNoRWZmZWN0cyhmeC5wLCBmeC5xLCBmeC5yKTtcblx0fVxuXHRfUGxhdGZvcm1fZWZmZWN0c0FjdGl2ZSA9IGZhbHNlO1xufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9kaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIGNtZEJhZywgc3ViQmFnKVxue1xuXHR2YXIgZWZmZWN0c0RpY3QgPSB7fTtcblx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHModHJ1ZSwgY21kQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGZhbHNlLCBzdWJCYWcsIGVmZmVjdHNEaWN0LCBudWxsKTtcblxuXHRmb3IgKHZhciBob21lIGluIG1hbmFnZXJzKVxuXHR7XG5cdFx0X1NjaGVkdWxlcl9yYXdTZW5kKG1hbmFnZXJzW2hvbWVdLCB7XG5cdFx0XHQkOiAnZngnLFxuXHRcdFx0YTogZWZmZWN0c0RpY3RbaG9tZV0gfHwgeyBpOiBfTGlzdF9OaWwsIGo6IF9MaXN0X05pbCB9XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZ2F0aGVyRWZmZWN0cyhpc0NtZCwgYmFnLCBlZmZlY3RzRGljdCwgdGFnZ2Vycylcbntcblx0c3dpdGNoIChiYWcuJClcblx0e1xuXHRcdGNhc2UgMTpcblx0XHRcdHZhciBob21lID0gYmFnLms7XG5cdFx0XHR2YXIgZWZmZWN0ID0gX1BsYXRmb3JtX3RvRWZmZWN0KGlzQ21kLCBob21lLCB0YWdnZXJzLCBiYWcubCk7XG5cdFx0XHRlZmZlY3RzRGljdFtob21lXSA9IF9QbGF0Zm9ybV9pbnNlcnQoaXNDbWQsIGVmZmVjdCwgZWZmZWN0c0RpY3RbaG9tZV0pO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0Zm9yICh2YXIgbGlzdCA9IGJhZy5tOyBsaXN0LmI7IGxpc3QgPSBsaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHRcdHtcblx0XHRcdFx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGxpc3QuYSwgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGJhZy5vLCBlZmZlY3RzRGljdCwge1xuXHRcdFx0XHRzOiBiYWcubixcblx0XHRcdFx0dDogdGFnZ2Vyc1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fdG9FZmZlY3QoaXNDbWQsIGhvbWUsIHRhZ2dlcnMsIHZhbHVlKVxue1xuXHRmdW5jdGlvbiBhcHBseVRhZ2dlcnMoeClcblx0e1xuXHRcdGZvciAodmFyIHRlbXAgPSB0YWdnZXJzOyB0ZW1wOyB0ZW1wID0gdGVtcC50KVxuXHRcdHtcblx0XHRcdHggPSB0ZW1wLnMoeCk7XG5cdFx0fVxuXHRcdHJldHVybiB4O1xuXHR9XG5cblx0dmFyIG1hcCA9IGlzQ21kXG5cdFx0PyBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbaG9tZV0uZVxuXHRcdDogX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2hvbWVdLmY7XG5cblx0cmV0dXJuIEEyKG1hcCwgYXBwbHlUYWdnZXJzLCB2YWx1ZSlcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5zZXJ0KGlzQ21kLCBuZXdFZmZlY3QsIGVmZmVjdHMpXG57XG5cdGVmZmVjdHMgPSBlZmZlY3RzIHx8IHsgaTogX0xpc3RfTmlsLCBqOiBfTGlzdF9OaWwgfTtcblxuXHRpc0NtZFxuXHRcdD8gKGVmZmVjdHMuaSA9IF9MaXN0X0NvbnMobmV3RWZmZWN0LCBlZmZlY3RzLmkpKVxuXHRcdDogKGVmZmVjdHMuaiA9IF9MaXN0X0NvbnMobmV3RWZmZWN0LCBlZmZlY3RzLmopKTtcblxuXHRyZXR1cm4gZWZmZWN0cztcbn1cblxuXG5cbi8vIFBPUlRTXG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSlcbntcblx0aWYgKF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSlcblx0e1xuXHRcdF9EZWJ1Z19jcmFzaCgzLCBuYW1lKVxuXHR9XG59XG5cblxuXG4vLyBPVVRHT0lORyBQT1JUU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnQobmFtZSwgY29udmVydGVyKVxue1xuXHRfUGxhdGZvcm1fY2hlY2tQb3J0TmFtZShuYW1lKTtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdID0ge1xuXHRcdGU6IF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnRNYXAsXG5cdFx0dTogY29udmVydGVyLFxuXHRcdGE6IF9QbGF0Zm9ybV9zZXR1cE91dGdvaW5nUG9ydFxuXHR9O1xuXHRyZXR1cm4gX1BsYXRmb3JtX2xlYWYobmFtZSk7XG59XG5cblxudmFyIF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnRNYXAgPSBGMihmdW5jdGlvbih0YWdnZXIsIHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfSk7XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwT3V0Z29pbmdQb3J0KG5hbWUpXG57XG5cdHZhciBzdWJzID0gW107XG5cdHZhciBjb252ZXJ0ZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0udTtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX1Byb2Nlc3Nfc2xlZXAoMCk7XG5cblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmIgPSBpbml0O1xuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0uYyA9IEYzKGZ1bmN0aW9uKHJvdXRlciwgY21kTGlzdCwgc3RhdGUpXG5cdHtcblx0XHRmb3IgKCA7IGNtZExpc3QuYjsgY21kTGlzdCA9IGNtZExpc3QuYikgLy8gV0hJTEVfQ09OU1xuXHRcdHtcblx0XHRcdC8vIGdyYWIgYSBzZXBhcmF0ZSByZWZlcmVuY2UgdG8gc3VicyBpbiBjYXNlIHVuc3Vic2NyaWJlIGlzIGNhbGxlZFxuXHRcdFx0dmFyIGN1cnJlbnRTdWJzID0gc3Vicztcblx0XHRcdHZhciB2YWx1ZSA9IF9Kc29uX3Vud3JhcChjb252ZXJ0ZXIoY21kTGlzdC5hKSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTdWJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50U3Vic1tpXSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpbml0O1xuXHR9KTtcblxuXHQvLyBQVUJMSUMgQVBJXG5cblx0ZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKVxuXHR7XG5cdFx0c3Vicy5wdXNoKGNhbGxiYWNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNhbGxiYWNrKVxuXHR7XG5cdFx0Ly8gY29weSBzdWJzIGludG8gYSBuZXcgYXJyYXkgaW4gY2FzZSB1bnN1YnNjcmliZSBpcyBjYWxsZWQgd2l0aGluIGFcblx0XHQvLyBzdWJzY3JpYmVkIGNhbGxiYWNrXG5cdFx0c3VicyA9IHN1YnMuc2xpY2UoKTtcblx0XHR2YXIgaW5kZXggPSBzdWJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdGlmIChpbmRleCA+PSAwKVxuXHRcdHtcblx0XHRcdHN1YnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN1YnNjcmliZTogc3Vic2NyaWJlLFxuXHRcdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuXHR9O1xufVxuXG5cblxuLy8gSU5DT01JTkcgUE9SVFNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5jb21pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0X1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSk7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSA9IHtcblx0XHRmOiBfUGxhdGZvcm1faW5jb21pbmdQb3J0TWFwLFxuXHRcdHU6IGNvbnZlcnRlcixcblx0XHRhOiBfUGxhdGZvcm1fc2V0dXBJbmNvbWluZ1BvcnRcblx0fTtcblx0cmV0dXJuIF9QbGF0Zm9ybV9sZWFmKG5hbWUpO1xufVxuXG5cbnZhciBfUGxhdGZvcm1faW5jb21pbmdQb3J0TWFwID0gRjIoZnVuY3Rpb24odGFnZ2VyLCBmaW5hbFRhZ2dlcilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKVxuXHR7XG5cdFx0cmV0dXJuIHRhZ2dlcihmaW5hbFRhZ2dlcih2YWx1ZSkpO1xuXHR9O1xufSk7XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwSW5jb21pbmdQb3J0KG5hbWUsIHNlbmRUb0FwcClcbntcblx0dmFyIHN1YnMgPSBfTGlzdF9OaWw7XG5cdHZhciBjb252ZXJ0ZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0udTtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX1NjaGVkdWxlcl9zdWNjZWVkKG51bGwpO1xuXG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5iID0gaW5pdDtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmMgPSBGMyhmdW5jdGlvbihyb3V0ZXIsIHN1Ykxpc3QsIHN0YXRlKVxuXHR7XG5cdFx0c3VicyA9IHN1Ykxpc3Q7XG5cdFx0cmV0dXJuIGluaXQ7XG5cdH0pO1xuXG5cdC8vIFBVQkxJQyBBUElcblxuXHRmdW5jdGlvbiBzZW5kKGluY29taW5nVmFsdWUpXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gQTIoX0pzb25fcnVuLCBjb252ZXJ0ZXIsIF9Kc29uX3dyYXAoaW5jb21pbmdWYWx1ZSkpO1xuXG5cdFx0JGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkgfHwgX0RlYnVnX2NyYXNoKDQsIG5hbWUsIHJlc3VsdC5hKTtcblxuXHRcdHZhciB2YWx1ZSA9IHJlc3VsdC5hO1xuXHRcdGZvciAodmFyIHRlbXAgPSBzdWJzOyB0ZW1wLmI7IHRlbXAgPSB0ZW1wLmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHRzZW5kVG9BcHAodGVtcC5hKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc2VuZDogc2VuZCB9O1xufVxuXG5cblxuLy8gRVhQT1JUIEVMTSBNT0RVTEVTXG4vL1xuLy8gSGF2ZSBERUJVRyBhbmQgUFJPRCB2ZXJzaW9ucyBzbyB0aGF0IHdlIGNhbiAoMSkgZ2l2ZSBuaWNlciBlcnJvcnMgaW5cbi8vIGRlYnVnIG1vZGUgYW5kICgyKSBub3QgcGF5IGZvciB0aGUgYml0cyBuZWVkZWQgZm9yIHRoYXQgaW4gcHJvZCBtb2RlLlxuLy9cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZXhwb3J0X1VOVVNFRChleHBvcnRzKVxue1xuXHRzY29wZVsnRWxtJ11cblx0XHQ/IF9QbGF0Zm9ybV9tZXJnZUV4cG9ydHNQcm9kKHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c1Byb2Qob2JqLCBleHBvcnRzKVxue1xuXHRmb3IgKHZhciBuYW1lIGluIGV4cG9ydHMpXG5cdHtcblx0XHQobmFtZSBpbiBvYmopXG5cdFx0XHQ/IChuYW1lID09ICdpbml0Jylcblx0XHRcdFx0PyBfRGVidWdfY3Jhc2goNilcblx0XHRcdFx0OiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzUHJvZChvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9leHBvcnQoZXhwb3J0cylcbntcblx0c2NvcGVbJ0VsbSddXG5cdFx0PyBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzRGVidWcoJ0VsbScsIHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUsIG9iaiwgZXhwb3J0cylcbntcblx0Zm9yICh2YXIgbmFtZSBpbiBleHBvcnRzKVxuXHR7XG5cdFx0KG5hbWUgaW4gb2JqKVxuXHRcdFx0PyAobmFtZSA9PSAnaW5pdCcpXG5cdFx0XHRcdD8gX0RlYnVnX2NyYXNoKDYsIG1vZHVsZU5hbWUpXG5cdFx0XHRcdDogX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUgKyAnLicgKyBuYW1lLCBvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cblxuXG4vLyBIRUxQRVJTXG5cblxudmFyIF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcDtcblxudmFyIF9WaXJ0dWFsRG9tX2RvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbnZhciBfVmlydHVhbERvbV9pbml0ID0gRjQoZnVuY3Rpb24odmlydHVhbE5vZGUsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHQvLyBOT1RFOiB0aGlzIGZ1bmN0aW9uIG5lZWRzIF9QbGF0Zm9ybV9leHBvcnQgYXZhaWxhYmxlIHRvIHdvcmtcblxuXHQvKipfVU5VU0VEL1xuXHR2YXIgbm9kZSA9IGFyZ3NbJ25vZGUnXTtcblx0Ly8qL1xuXHQvKiovXG5cdHZhciBub2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdC8vKi9cblxuXHRub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuXHRcdF9WaXJ0dWFsRG9tX3JlbmRlcih2aXJ0dWFsTm9kZSwgZnVuY3Rpb24oKSB7fSksXG5cdFx0bm9kZVxuXHQpO1xuXG5cdHJldHVybiB7fTtcbn0pO1xuXG5cblxuLy8gVEVYVFxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3RleHQoc3RyaW5nKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDAsXG5cdFx0YTogc3RyaW5nXG5cdH07XG59XG5cblxuXG4vLyBOT0RFXG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGVOUyA9IEYyKGZ1bmN0aW9uKG5hbWVzcGFjZSwgdGFnKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZmFjdExpc3QsIGtpZExpc3QpXG5cdHtcblx0XHRmb3IgKHZhciBraWRzID0gW10sIGRlc2NlbmRhbnRzQ291bnQgPSAwOyBraWRMaXN0LmI7IGtpZExpc3QgPSBraWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHR2YXIga2lkID0ga2lkTGlzdC5hO1xuXHRcdFx0ZGVzY2VuZGFudHNDb3VudCArPSAoa2lkLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGUgPSBfVmlydHVhbERvbV9ub2RlTlModW5kZWZpbmVkKTtcblxuXG5cbi8vIEtFWUVEIE5PREVcblxuXG52YXIgX1ZpcnR1YWxEb21fa2V5ZWROb2RlTlMgPSBGMihmdW5jdGlvbihuYW1lc3BhY2UsIHRhZylcbntcblx0cmV0dXJuIEYyKGZ1bmN0aW9uKGZhY3RMaXN0LCBraWRMaXN0KVxuXHR7XG5cdFx0Zm9yICh2YXIga2lkcyA9IFtdLCBkZXNjZW5kYW50c0NvdW50ID0gMDsga2lkTGlzdC5iOyBraWRMaXN0ID0ga2lkTGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdFx0e1xuXHRcdFx0dmFyIGtpZCA9IGtpZExpc3QuYTtcblx0XHRcdGRlc2NlbmRhbnRzQ291bnQgKz0gKGtpZC5iLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAyLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX2tleWVkTm9kZSA9IF9WaXJ0dWFsRG9tX2tleWVkTm9kZU5TKHVuZGVmaW5lZCk7XG5cblxuXG4vLyBDVVNUT01cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9jdXN0b20oZmFjdExpc3QsIG1vZGVsLCByZW5kZXIsIGRpZmYpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMyxcblx0XHRkOiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KSxcblx0XHRnOiBtb2RlbCxcblx0XHRoOiByZW5kZXIsXG5cdFx0aTogZGlmZlxuXHR9O1xufVxuXG5cblxuLy8gTUFQXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgbm9kZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiA0LFxuXHRcdGo6IHRhZ2dlcixcblx0XHRrOiBub2RlLFxuXHRcdGI6IDEgKyAobm9kZS5iIHx8IDApXG5cdH07XG59KTtcblxuXG5cbi8vIExBWllcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV90aHVuayhyZWZzLCB0aHVuaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiA1LFxuXHRcdGw6IHJlZnMsXG5cdFx0bTogdGh1bmssXG5cdFx0azogdW5kZWZpbmVkXG5cdH07XG59XG5cbnZhciBfVmlydHVhbERvbV9sYXp5ID0gRjIoZnVuY3Rpb24oZnVuYywgYSlcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZ1bmMoYSk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5MiA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGEsIGIpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYl0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBMihmdW5jLCBhLCBiKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenkzID0gRjQoZnVuY3Rpb24oZnVuYywgYSwgYiwgYylcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEzKGZ1bmMsIGEsIGIsIGMpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTQgPSBGNShmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGRdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTQoZnVuYywgYSwgYiwgYywgZCk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5NSA9IEY2KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZV0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBNShmdW5jLCBhLCBiLCBjLCBkLCBlKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenk2ID0gRjcoZnVuY3Rpb24oZnVuYywgYSwgYiwgYywgZCwgZSwgZilcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjLCBkLCBlLCBmXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEE2KGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTcgPSBGOChmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGddLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTcoZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZyk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5OCA9IEY5KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZywgaF0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBOChmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX29uID0gRjIoZnVuY3Rpb24oa2V5LCBoYW5kbGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMCcsXG5cdFx0bjoga2V5LFxuXHRcdG86IGhhbmRsZXJcblx0fTtcbn0pO1xudmFyIF9WaXJ0dWFsRG9tX3N0eWxlID0gRjIoZnVuY3Rpb24oa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTEnLFxuXHRcdG46IGtleSxcblx0XHRvOiB2YWx1ZVxuXHR9O1xufSk7XG52YXIgX1ZpcnR1YWxEb21fcHJvcGVydHkgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMicsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGUgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMycsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGVOUyA9IEYzKGZ1bmN0aW9uKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTQnLFxuXHRcdG46IGtleSxcblx0XHRvOiB7IGY6IG5hbWVzcGFjZSwgbzogdmFsdWUgfVxuXHR9O1xufSk7XG5cblxuXG4vLyBYU1MgQVRUQUNLIFZFQ1RPUiBDSEVDS1NcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub1NjcmlwdCh0YWcpXG57XG5cdHJldHVybiB0YWcgPT0gJ3NjcmlwdCcgPyAncCcgOiB0YWc7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4gL14ob258Zm9ybUFjdGlvbiQpL2kudGVzdChrZXkpID8gJ2RhdGEtJyArIGtleSA6IGtleTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4ga2V5ID09ICdpbm5lckhUTUwnIHx8IGtleSA9PSAnZm9ybUFjdGlvbicgPyAnZGF0YS0nICsga2V5IDoga2V5O1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub0phdmFTY3JpcHRVcmlfVU5VU0VEKHZhbHVlKVxue1xuXHRyZXR1cm4gL15qYXZhc2NyaXB0Oi9pLnRlc3QodmFsdWUucmVwbGFjZSgvXFxzL2csJycpKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eamF2YXNjcmlwdDovaS50ZXN0KHZhbHVlLnJlcGxhY2UoL1xccy9nLCcnKSlcblx0XHQ/ICdqYXZhc2NyaXB0OmFsZXJ0KFwiVGhpcyBpcyBhbiBYU1MgdmVjdG9yLiBQbGVhc2UgdXNlIHBvcnRzIG9yIHdlYiBjb21wb25lbnRzIGluc3RlYWQuXCIpJ1xuXHRcdDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaV9VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAvXlxccyooamF2YXNjcmlwdDp8ZGF0YTp0ZXh0XFwvaHRtbCkvaS50ZXN0KHZhbHVlKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eXFxzKihqYXZhc2NyaXB0OnxkYXRhOnRleHRcXC9odG1sKS9pLnRlc3QodmFsdWUpXG5cdFx0PyAnamF2YXNjcmlwdDphbGVydChcIlRoaXMgaXMgYW4gWFNTIHZlY3Rvci4gUGxlYXNlIHVzZSBwb3J0cyBvciB3ZWIgY29tcG9uZW50cyBpbnN0ZWFkLlwiKSdcblx0XHQ6IHZhbHVlO1xufVxuXG5cblxuLy8gTUFQIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcEF0dHJpYnV0ZSA9IEYyKGZ1bmN0aW9uKGZ1bmMsIGF0dHIpXG57XG5cdHJldHVybiAoYXR0ci4kID09PSAnYTAnKVxuXHRcdD8gQTIoX1ZpcnR1YWxEb21fb24sIGF0dHIubiwgX1ZpcnR1YWxEb21fbWFwSGFuZGxlcihmdW5jLCBhdHRyLm8pKVxuXHRcdDogYXR0cjtcbn0pO1xuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYXBIYW5kbGVyKGZ1bmMsIGhhbmRsZXIpXG57XG5cdHZhciB0YWcgPSAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdG9IYW5kbGVySW50KGhhbmRsZXIpO1xuXG5cdC8vIDAgPSBOb3JtYWxcblx0Ly8gMSA9IE1heVN0b3BQcm9wYWdhdGlvblxuXHQvLyAyID0gTWF5UHJldmVudERlZmF1bHRcblx0Ly8gMyA9IEN1c3RvbVxuXG5cdHJldHVybiB7XG5cdFx0JDogaGFuZGxlci4kLFxuXHRcdGE6XG5cdFx0XHQhdGFnXG5cdFx0XHRcdD8gQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCwgZnVuYywgaGFuZGxlci5hKVxuXHRcdFx0XHQ6XG5cdFx0XHRBMygkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0XHRcdFx0dGFnIDwgM1xuXHRcdFx0XHRcdD8gX1ZpcnR1YWxEb21fbWFwRXZlbnRUdXBsZVxuXHRcdFx0XHRcdDogX1ZpcnR1YWxEb21fbWFwRXZlbnRSZWNvcmQsXG5cdFx0XHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkKGZ1bmMpLFxuXHRcdFx0XHRoYW5kbGVyLmFcblx0XHRcdClcblx0fTtcbn1cblxudmFyIF9WaXJ0dWFsRG9tX21hcEV2ZW50VHVwbGUgPSBGMihmdW5jdGlvbihmdW5jLCB0dXBsZSlcbntcblx0cmV0dXJuIF9VdGlsc19UdXBsZTIoZnVuYyh0dXBsZS5hKSwgdHVwbGUuYik7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX21hcEV2ZW50UmVjb3JkID0gRjIoZnVuY3Rpb24oZnVuYywgcmVjb3JkKVxue1xuXHRyZXR1cm4ge1xuXHRcdG1lc3NhZ2U6IGZ1bmMocmVjb3JkLm1lc3NhZ2UpLFxuXHRcdHN0b3BQcm9wYWdhdGlvbjogcmVjb3JkLnN0b3BQcm9wYWdhdGlvbixcblx0XHRwcmV2ZW50RGVmYXVsdDogcmVjb3JkLnByZXZlbnREZWZhdWx0XG5cdH1cbn0pO1xuXG5cblxuLy8gT1JHQU5JWkUgRkFDVFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KVxue1xuXHRmb3IgKHZhciBmYWN0cyA9IHt9OyBmYWN0TGlzdC5iOyBmYWN0TGlzdCA9IGZhY3RMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0e1xuXHRcdHZhciBlbnRyeSA9IGZhY3RMaXN0LmE7XG5cblx0XHR2YXIgdGFnID0gZW50cnkuJDtcblx0XHR2YXIga2V5ID0gZW50cnkubjtcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5vO1xuXG5cdFx0aWYgKHRhZyA9PT0gJ2EyJylcblx0XHR7XG5cdFx0XHQoa2V5ID09PSAnY2xhc3NOYW1lJylcblx0XHRcdFx0PyBfVmlydHVhbERvbV9hZGRDbGFzcyhmYWN0cywga2V5LCBfSnNvbl91bndyYXAodmFsdWUpKVxuXHRcdFx0XHQ6IGZhY3RzW2tleV0gPSBfSnNvbl91bndyYXAodmFsdWUpO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YXIgc3ViRmFjdHMgPSBmYWN0c1t0YWddIHx8IChmYWN0c1t0YWddID0ge30pO1xuXHRcdCh0YWcgPT09ICdhMycgJiYga2V5ID09PSAnY2xhc3MnKVxuXHRcdFx0PyBfVmlydHVhbERvbV9hZGRDbGFzcyhzdWJGYWN0cywga2V5LCB2YWx1ZSlcblx0XHRcdDogc3ViRmFjdHNba2V5XSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGZhY3RzO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hZGRDbGFzcyhvYmplY3QsIGtleSwgbmV3Q2xhc3MpXG57XG5cdHZhciBjbGFzc2VzID0gb2JqZWN0W2tleV07XG5cdG9iamVjdFtrZXldID0gY2xhc3NlcyA/IGNsYXNzZXMgKyAnICcgKyBuZXdDbGFzcyA6IG5ld0NsYXNzO1xufVxuXG5cblxuLy8gUkVOREVSXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcmVuZGVyKHZOb2RlLCBldmVudE5vZGUpXG57XG5cdHZhciB0YWcgPSB2Tm9kZS4kO1xuXG5cdGlmICh0YWcgPT09IDUpXG5cdHtcblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fcmVuZGVyKHZOb2RlLmsgfHwgKHZOb2RlLmsgPSB2Tm9kZS5tKCkpLCBldmVudE5vZGUpO1xuXHR9XG5cblx0aWYgKHRhZyA9PT0gMClcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV9kb2MuY3JlYXRlVGV4dE5vZGUodk5vZGUuYSk7XG5cdH1cblxuXHRpZiAodGFnID09PSA0KVxuXHR7XG5cdFx0dmFyIHN1Yk5vZGUgPSB2Tm9kZS5rO1xuXHRcdHZhciB0YWdnZXIgPSB2Tm9kZS5qO1xuXG5cdFx0d2hpbGUgKHN1Yk5vZGUuJCA9PT0gNClcblx0XHR7XG5cdFx0XHR0eXBlb2YgdGFnZ2VyICE9PSAnb2JqZWN0J1xuXHRcdFx0XHQ/IHRhZ2dlciA9IFt0YWdnZXIsIHN1Yk5vZGUual1cblx0XHRcdFx0OiB0YWdnZXIucHVzaChzdWJOb2RlLmopO1xuXG5cdFx0XHRzdWJOb2RlID0gc3ViTm9kZS5rO1xuXHRcdH1cblxuXHRcdHZhciBzdWJFdmVudFJvb3QgPSB7IGo6IHRhZ2dlciwgcDogZXZlbnROb2RlIH07XG5cdFx0dmFyIGRvbU5vZGUgPSBfVmlydHVhbERvbV9yZW5kZXIoc3ViTm9kZSwgc3ViRXZlbnRSb290KTtcblx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IHN1YkV2ZW50Um9vdDtcblx0XHRyZXR1cm4gZG9tTm9kZTtcblx0fVxuXG5cdGlmICh0YWcgPT09IDMpXG5cdHtcblx0XHR2YXIgZG9tTm9kZSA9IHZOb2RlLmgodk5vZGUuZyk7XG5cdFx0X1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIHZOb2RlLmQpO1xuXHRcdHJldHVybiBkb21Ob2RlO1xuXHR9XG5cblx0Ly8gYXQgdGhpcyBwb2ludCBgdGFnYCBtdXN0IGJlIDEgb3IgMlxuXG5cdHZhciBkb21Ob2RlID0gdk5vZGUuZlxuXHRcdD8gX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZUVsZW1lbnROUyh2Tm9kZS5mLCB2Tm9kZS5jKVxuXHRcdDogX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZUVsZW1lbnQodk5vZGUuYyk7XG5cblx0aWYgKF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCAmJiB2Tm9kZS5jID09ICdhJylcblx0e1xuXHRcdGRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAoZG9tTm9kZSkpO1xuXHR9XG5cblx0X1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIHZOb2RlLmQpO1xuXG5cdGZvciAodmFyIGtpZHMgPSB2Tm9kZS5lLCBpID0gMDsgaSA8IGtpZHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRfVmlydHVhbERvbV9hcHBlbmRDaGlsZChkb21Ob2RlLCBfVmlydHVhbERvbV9yZW5kZXIodGFnID09PSAxID8ga2lkc1tpXSA6IGtpZHNbaV0uYiwgZXZlbnROb2RlKSk7XG5cdH1cblxuXHRyZXR1cm4gZG9tTm9kZTtcbn1cblxuXG5cbi8vIEFQUExZIEZBQ1RTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIGZhY3RzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gZmFjdHMpXG5cdHtcblx0XHR2YXIgdmFsdWUgPSBmYWN0c1trZXldO1xuXG5cdFx0a2V5ID09PSAnYTEnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5U3R5bGVzKGRvbU5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdGtleSA9PT0gJ2EwJ1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseUV2ZW50cyhkb21Ob2RlLCBldmVudE5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdGtleSA9PT0gJ2EzJ1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseUF0dHJzKGRvbU5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdGtleSA9PT0gJ2E0J1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseUF0dHJzTlMoZG9tTm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0KChrZXkgIT09ICd2YWx1ZScgJiYga2V5ICE9PSAnY2hlY2tlZCcpIHx8IGRvbU5vZGVba2V5XSAhPT0gdmFsdWUpICYmIChkb21Ob2RlW2tleV0gPSB2YWx1ZSk7XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIFNUWUxFU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5U3R5bGVzKGRvbU5vZGUsIHN0eWxlcylcbntcblx0dmFyIGRvbU5vZGVTdHlsZSA9IGRvbU5vZGUuc3R5bGU7XG5cblx0Zm9yICh2YXIga2V5IGluIHN0eWxlcylcblx0e1xuXHRcdGRvbU5vZGVTdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIEFUVFJTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlBdHRycyhkb21Ob2RlLCBhdHRycylcbntcblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0dmFyIHZhbHVlID0gYXR0cnNba2V5XTtcblx0XHR0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG5cdFx0XHQ/IGRvbU5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG5cdFx0XHQ6IGRvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIE5BTUVTUEFDRUQgQVRUUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUF0dHJzTlMoZG9tTm9kZSwgbnNBdHRycylcbntcblx0Zm9yICh2YXIga2V5IGluIG5zQXR0cnMpXG5cdHtcblx0XHR2YXIgcGFpciA9IG5zQXR0cnNba2V5XTtcblx0XHR2YXIgbmFtZXNwYWNlID0gcGFpci5mO1xuXHRcdHZhciB2YWx1ZSA9IHBhaXIubztcblxuXHRcdHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdD8gZG9tTm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSwgdmFsdWUpXG5cdFx0XHQ6IGRvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXkpO1xuXHR9XG59XG5cblxuXG4vLyBBUFBMWSBFVkVOVFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUV2ZW50cyhkb21Ob2RlLCBldmVudE5vZGUsIGV2ZW50cylcbntcblx0dmFyIGFsbENhbGxiYWNrcyA9IGRvbU5vZGUuZWxtRnMgfHwgKGRvbU5vZGUuZWxtRnMgPSB7fSk7XG5cblx0Zm9yICh2YXIga2V5IGluIGV2ZW50cylcblx0e1xuXHRcdHZhciBuZXdIYW5kbGVyID0gZXZlbnRzW2tleV07XG5cdFx0dmFyIG9sZENhbGxiYWNrID0gYWxsQ2FsbGJhY2tzW2tleV07XG5cblx0XHRpZiAoIW5ld0hhbmRsZXIpXG5cdFx0e1xuXHRcdFx0ZG9tTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGtleSwgb2xkQ2FsbGJhY2spO1xuXHRcdFx0YWxsQ2FsbGJhY2tzW2tleV0gPSB1bmRlZmluZWQ7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAob2xkQ2FsbGJhY2spXG5cdFx0e1xuXHRcdFx0dmFyIG9sZEhhbmRsZXIgPSBvbGRDYWxsYmFjay5xO1xuXHRcdFx0aWYgKG9sZEhhbmRsZXIuJCA9PT0gbmV3SGFuZGxlci4kKVxuXHRcdFx0e1xuXHRcdFx0XHRvbGRDYWxsYmFjay5xID0gbmV3SGFuZGxlcjtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBvbGRDYWxsYmFjayk7XG5cdFx0fVxuXG5cdFx0b2xkQ2FsbGJhY2sgPSBfVmlydHVhbERvbV9tYWtlQ2FsbGJhY2soZXZlbnROb2RlLCBuZXdIYW5kbGVyKTtcblx0XHRkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvbGRDYWxsYmFjayxcblx0XHRcdF9WaXJ0dWFsRG9tX3Bhc3NpdmVTdXBwb3J0ZWRcblx0XHRcdCYmIHsgcGFzc2l2ZTogJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludChuZXdIYW5kbGVyKSA8IDIgfVxuXHRcdCk7XG5cdFx0YWxsQ2FsbGJhY2tzW2tleV0gPSBvbGRDYWxsYmFjaztcblx0fVxufVxuXG5cblxuLy8gUEFTU0lWRSBFVkVOVFNcblxuXG52YXIgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZDtcblxudHJ5XG57XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkgeyBfVmlydHVhbERvbV9wYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTsgfVxuXHR9KSk7XG59XG5jYXRjaChlKSB7fVxuXG5cblxuLy8gRVZFTlQgSEFORExFUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYWtlQ2FsbGJhY2soZXZlbnROb2RlLCBpbml0aWFsSGFuZGxlcilcbntcblx0ZnVuY3Rpb24gY2FsbGJhY2soZXZlbnQpXG5cdHtcblx0XHR2YXIgaGFuZGxlciA9IGNhbGxiYWNrLnE7XG5cdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoaGFuZGxlci5hLCBldmVudCk7XG5cblx0XHRpZiAoISRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdGFnID0gJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludChoYW5kbGVyKTtcblxuXHRcdC8vIDAgPSBOb3JtYWxcblx0XHQvLyAxID0gTWF5U3RvcFByb3BhZ2F0aW9uXG5cdFx0Ly8gMiA9IE1heVByZXZlbnREZWZhdWx0XG5cdFx0Ly8gMyA9IEN1c3RvbVxuXG5cdFx0dmFyIHZhbHVlID0gcmVzdWx0LmE7XG5cdFx0dmFyIG1lc3NhZ2UgPSAhdGFnID8gdmFsdWUgOiB0YWcgPCAzID8gdmFsdWUuYSA6IHZhbHVlLm1lc3NhZ2U7XG5cdFx0dmFyIHN0b3BQcm9wYWdhdGlvbiA9IHRhZyA9PSAxID8gdmFsdWUuYiA6IHRhZyA9PSAzICYmIHZhbHVlLnN0b3BQcm9wYWdhdGlvbjtcblx0XHR2YXIgY3VycmVudEV2ZW50Tm9kZSA9IChcblx0XHRcdHN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSxcblx0XHRcdCh0YWcgPT0gMiA/IHZhbHVlLmIgOiB0YWcgPT0gMyAmJiB2YWx1ZS5wcmV2ZW50RGVmYXVsdCkgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKSxcblx0XHRcdGV2ZW50Tm9kZVxuXHRcdCk7XG5cdFx0dmFyIHRhZ2dlcjtcblx0XHR2YXIgaTtcblx0XHR3aGlsZSAodGFnZ2VyID0gY3VycmVudEV2ZW50Tm9kZS5qKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2YgdGFnZ2VyID09ICdmdW5jdGlvbicpXG5cdFx0XHR7XG5cdFx0XHRcdG1lc3NhZ2UgPSB0YWdnZXIobWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSB0YWdnZXIubGVuZ3RoOyBpLS07IClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG1lc3NhZ2UgPSB0YWdnZXJbaV0obWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN1cnJlbnRFdmVudE5vZGUgPSBjdXJyZW50RXZlbnROb2RlLnA7XG5cdFx0fVxuXHRcdGN1cnJlbnRFdmVudE5vZGUobWVzc2FnZSwgc3RvcFByb3BhZ2F0aW9uKTsgLy8gc3RvcFByb3BhZ2F0aW9uIGltcGxpZXMgaXNTeW5jXG5cdH1cblxuXHRjYWxsYmFjay5xID0gaW5pdGlhbEhhbmRsZXI7XG5cblx0cmV0dXJuIGNhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9lcXVhbEV2ZW50cyh4LCB5KVxue1xuXHRyZXR1cm4geC4kID09IHkuJCAmJiBfSnNvbl9lcXVhbGl0eSh4LmEsIHkuYSk7XG59XG5cblxuXG4vLyBESUZGXG5cblxuLy8gVE9ETzogU2hvdWxkIHdlIGRvIHBhdGNoZXMgbGlrZSBpbiBpT1M/XG4vL1xuLy8gdHlwZSBQYXRjaFxuLy8gICA9IEF0IEludCBQYXRjaFxuLy8gICB8IEJhdGNoIChMaXN0IFBhdGNoKVxuLy8gICB8IENoYW5nZSAuLi5cbi8vXG4vLyBIb3cgY291bGQgaXQgbm90IGJlIGJldHRlcj9cbi8vXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmKHgsIHkpXG57XG5cdHZhciBwYXRjaGVzID0gW107XG5cdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHgsIHksIHBhdGNoZXMsIDApO1xuXHRyZXR1cm4gcGF0Y2hlcztcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgdHlwZSwgaW5kZXgsIGRhdGEpXG57XG5cdHZhciBwYXRjaCA9IHtcblx0XHQkOiB0eXBlLFxuXHRcdHI6IGluZGV4LFxuXHRcdHM6IGRhdGEsXG5cdFx0dDogdW5kZWZpbmVkLFxuXHRcdHU6IHVuZGVmaW5lZFxuXHR9O1xuXHRwYXRjaGVzLnB1c2gocGF0Y2gpO1xuXHRyZXR1cm4gcGF0Y2g7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZkhlbHAoeCwgeSwgcGF0Y2hlcywgaW5kZXgpXG57XG5cdGlmICh4ID09PSB5KVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIHhUeXBlID0geC4kO1xuXHR2YXIgeVR5cGUgPSB5LiQ7XG5cblx0Ly8gQmFpbCBpZiB5b3UgcnVuIGludG8gZGlmZmVyZW50IHR5cGVzIG9mIG5vZGVzLiBJbXBsaWVzIHRoYXQgdGhlXG5cdC8vIHN0cnVjdHVyZSBoYXMgY2hhbmdlZCBzaWduaWZpY2FudGx5IGFuZCBpdCdzIG5vdCB3b3J0aCBhIGRpZmYuXG5cdGlmICh4VHlwZSAhPT0geVR5cGUpXG5cdHtcblx0XHRpZiAoeFR5cGUgPT09IDEgJiYgeVR5cGUgPT09IDIpXG5cdFx0e1xuXHRcdFx0eSA9IF9WaXJ0dWFsRG9tX2Rla2V5KHkpO1xuXHRcdFx0eVR5cGUgPSAxO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHQvLyBOb3cgd2Uga25vdyB0aGF0IGJvdGggbm9kZXMgYXJlIHRoZSBzYW1lICQuXG5cdHN3aXRjaCAoeVR5cGUpXG5cdHtcblx0XHRjYXNlIDU6XG5cdFx0XHR2YXIgeFJlZnMgPSB4Lmw7XG5cdFx0XHR2YXIgeVJlZnMgPSB5Lmw7XG5cdFx0XHR2YXIgaSA9IHhSZWZzLmxlbmd0aDtcblx0XHRcdHZhciBzYW1lID0gaSA9PT0geVJlZnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKHNhbWUgJiYgaS0tKVxuXHRcdFx0e1xuXHRcdFx0XHRzYW1lID0geFJlZnNbaV0gPT09IHlSZWZzW2ldO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNhbWUpXG5cdFx0XHR7XG5cdFx0XHRcdHkuayA9IHguaztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0eS5rID0geS5tKCk7XG5cdFx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeC5rLCB5LmssIHN1YlBhdGNoZXMsIDApO1xuXHRcdFx0c3ViUGF0Y2hlcy5sZW5ndGggPiAwICYmIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAxLCBpbmRleCwgc3ViUGF0Y2hlcyk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHQvLyBnYXRoZXIgbmVzdGVkIHRhZ2dlcnNcblx0XHRcdHZhciB4VGFnZ2VycyA9IHguajtcblx0XHRcdHZhciB5VGFnZ2VycyA9IHkuajtcblx0XHRcdHZhciBuZXN0aW5nID0gZmFsc2U7XG5cblx0XHRcdHZhciB4U3ViTm9kZSA9IHguaztcblx0XHRcdHdoaWxlICh4U3ViTm9kZS4kID09PSA0KVxuXHRcdFx0e1xuXHRcdFx0XHRuZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0XHR0eXBlb2YgeFRhZ2dlcnMgIT09ICdvYmplY3QnXG5cdFx0XHRcdFx0PyB4VGFnZ2VycyA9IFt4VGFnZ2VycywgeFN1Yk5vZGUual1cblx0XHRcdFx0XHQ6IHhUYWdnZXJzLnB1c2goeFN1Yk5vZGUuaik7XG5cblx0XHRcdFx0eFN1Yk5vZGUgPSB4U3ViTm9kZS5rO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgeVN1Yk5vZGUgPSB5Lms7XG5cdFx0XHR3aGlsZSAoeVN1Yk5vZGUuJCA9PT0gNClcblx0XHRcdHtcblx0XHRcdFx0bmVzdGluZyA9IHRydWU7XG5cblx0XHRcdFx0dHlwZW9mIHlUYWdnZXJzICE9PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8geVRhZ2dlcnMgPSBbeVRhZ2dlcnMsIHlTdWJOb2RlLmpdXG5cdFx0XHRcdFx0OiB5VGFnZ2Vycy5wdXNoKHlTdWJOb2RlLmopO1xuXG5cdFx0XHRcdHlTdWJOb2RlID0geVN1Yk5vZGUuaztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSnVzdCBiYWlsIGlmIGRpZmZlcmVudCBudW1iZXJzIG9mIHRhZ2dlcnMuIFRoaXMgaW1wbGllcyB0aGVcblx0XHRcdC8vIHN0cnVjdHVyZSBvZiB0aGUgdmlydHVhbCBET00gaGFzIGNoYW5nZWQuXG5cdFx0XHRpZiAobmVzdGluZyAmJiB4VGFnZ2Vycy5sZW5ndGggIT09IHlUYWdnZXJzLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGVjayBpZiB0YWdnZXJzIGFyZSBcInRoZSBzYW1lXCJcblx0XHRcdGlmIChuZXN0aW5nID8gIV9WaXJ0dWFsRG9tX3BhaXJ3aXNlUmVmRXF1YWwoeFRhZ2dlcnMsIHlUYWdnZXJzKSA6IHhUYWdnZXJzICE9PSB5VGFnZ2Vycylcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDIsIGluZGV4LCB5VGFnZ2Vycyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRpZmYgZXZlcnl0aGluZyBiZWxvdyB0aGUgdGFnZ2Vyc1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeFN1Yk5vZGUsIHlTdWJOb2RlLCBwYXRjaGVzLCBpbmRleCArIDEpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAwOlxuXHRcdFx0aWYgKHguYSAhPT0geS5hKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMywgaW5kZXgsIHkuYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDE6XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmTm9kZXMoeCwgeSwgcGF0Y2hlcywgaW5kZXgsIF9WaXJ0dWFsRG9tX2RpZmZLaWRzKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMjpcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZOb2Rlcyh4LCB5LCBwYXRjaGVzLCBpbmRleCwgX1ZpcnR1YWxEb21fZGlmZktleWVkS2lkcyk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRpZiAoeC5oICE9PSB5LmgpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAwLCBpbmRleCwgeSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGZhY3RzRGlmZiA9IF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4LmQsIHkuZCk7XG5cdFx0XHRmYWN0c0RpZmYgJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDQsIGluZGV4LCBmYWN0c0RpZmYpO1xuXG5cdFx0XHR2YXIgcGF0Y2ggPSB5LmkoeC5nLCB5LmcpO1xuXHRcdFx0cGF0Y2ggJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDUsIGluZGV4LCBwYXRjaCk7XG5cblx0XHRcdHJldHVybjtcblx0fVxufVxuXG4vLyBhc3N1bWVzIHRoZSBpbmNvbWluZyBhcnJheXMgYXJlIHRoZSBzYW1lIGxlbmd0aFxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcGFpcndpc2VSZWZFcXVhbChhcywgYnMpXG57XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRpZiAoYXNbaV0gIT09IGJzW2ldKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZk5vZGVzKHgsIHksIHBhdGNoZXMsIGluZGV4LCBkaWZmS2lkcylcbntcblx0Ly8gQmFpbCBpZiBvYnZpb3VzIGluZGljYXRvcnMgaGF2ZSBjaGFuZ2VkLiBJbXBsaWVzIG1vcmUgc2VyaW91c1xuXHQvLyBzdHJ1Y3R1cmFsIGNoYW5nZXMgc3VjaCB0aGF0IGl0J3Mgbm90IHdvcnRoIGl0IHRvIGRpZmYuXG5cdGlmICh4LmMgIT09IHkuYyB8fCB4LmYgIT09IHkuZilcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAwLCBpbmRleCwgeSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGZhY3RzRGlmZiA9IF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4LmQsIHkuZCk7XG5cdGZhY3RzRGlmZiAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNCwgaW5kZXgsIGZhY3RzRGlmZik7XG5cblx0ZGlmZktpZHMoeCwgeSwgcGF0Y2hlcywgaW5kZXgpO1xufVxuXG5cblxuLy8gRElGRiBGQUNUU1xuXG5cbi8vIFRPRE8gSW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBkaWZmIG9iamVjdCwgaXQncyBwb3NzaWJsZSB0byBqdXN0IHRlc3QgaWZcbi8vIHRoZXJlICppcyogYSBkaWZmLiBEdXJpbmcgdGhlIGFjdHVhbCBwYXRjaCwgZG8gdGhlIGRpZmYgYWdhaW4gYW5kIG1ha2UgdGhlXG4vLyBtb2RpZmljYXRpb25zIGRpcmVjdGx5LiBUaGlzIHdheSwgdGhlcmUncyBubyBuZXcgYWxsb2NhdGlvbnMuIFdvcnRoIGl0P1xuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHgsIHksIGNhdGVnb3J5KVxue1xuXHR2YXIgZGlmZjtcblxuXHQvLyBsb29rIGZvciBjaGFuZ2VzIGFuZCByZW1vdmFsc1xuXHRmb3IgKHZhciB4S2V5IGluIHgpXG5cdHtcblx0XHRpZiAoeEtleSA9PT0gJ2ExJyB8fCB4S2V5ID09PSAnYTAnIHx8IHhLZXkgPT09ICdhMycgfHwgeEtleSA9PT0gJ2E0Jylcblx0XHR7XG5cdFx0XHR2YXIgc3ViRGlmZiA9IF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4W3hLZXldLCB5W3hLZXldIHx8IHt9LCB4S2V5KTtcblx0XHRcdGlmIChzdWJEaWZmKVxuXHRcdFx0e1xuXHRcdFx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRcdFx0ZGlmZlt4S2V5XSA9IHN1YkRpZmY7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgaWYgbm90IGluIHRoZSBuZXcgZmFjdHNcblx0XHRpZiAoISh4S2V5IGluIHkpKVxuXHRcdHtcblx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0ZGlmZlt4S2V5XSA9XG5cdFx0XHRcdCFjYXRlZ29yeVxuXHRcdFx0XHRcdD8gKHR5cGVvZiB4W3hLZXldID09PSAnc3RyaW5nJyA/ICcnIDogbnVsbClcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdChjYXRlZ29yeSA9PT0gJ2ExJylcblx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHQoY2F0ZWdvcnkgPT09ICdhMCcgfHwgY2F0ZWdvcnkgPT09ICdhMycpXG5cdFx0XHRcdFx0PyB1bmRlZmluZWRcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdHsgZjogeFt4S2V5XS5mLCBvOiB1bmRlZmluZWQgfTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHhWYWx1ZSA9IHhbeEtleV07XG5cdFx0dmFyIHlWYWx1ZSA9IHlbeEtleV07XG5cblx0XHQvLyByZWZlcmVuY2UgZXF1YWwsIHNvIGRvbid0IHdvcnJ5IGFib3V0IGl0XG5cdFx0aWYgKHhWYWx1ZSA9PT0geVZhbHVlICYmIHhLZXkgIT09ICd2YWx1ZScgJiYgeEtleSAhPT0gJ2NoZWNrZWQnXG5cdFx0XHR8fCBjYXRlZ29yeSA9PT0gJ2EwJyAmJiBfVmlydHVhbERvbV9lcXVhbEV2ZW50cyh4VmFsdWUsIHlWYWx1ZSkpXG5cdFx0e1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0ZGlmZlt4S2V5XSA9IHlWYWx1ZTtcblx0fVxuXG5cdC8vIGFkZCBuZXcgc3R1ZmZcblx0Zm9yICh2YXIgeUtleSBpbiB5KVxuXHR7XG5cdFx0aWYgKCEoeUtleSBpbiB4KSlcblx0XHR7XG5cdFx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRcdGRpZmZbeUtleV0gPSB5W3lLZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkaWZmO1xufVxuXG5cblxuLy8gRElGRiBLSURTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZktpZHMoeFBhcmVudCwgeVBhcmVudCwgcGF0Y2hlcywgaW5kZXgpXG57XG5cdHZhciB4S2lkcyA9IHhQYXJlbnQuZTtcblx0dmFyIHlLaWRzID0geVBhcmVudC5lO1xuXG5cdHZhciB4TGVuID0geEtpZHMubGVuZ3RoO1xuXHR2YXIgeUxlbiA9IHlLaWRzLmxlbmd0aDtcblxuXHQvLyBGSUdVUkUgT1VUIElGIFRIRVJFIEFSRSBJTlNFUlRTIE9SIFJFTU9WQUxTXG5cblx0aWYgKHhMZW4gPiB5TGVuKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDYsIGluZGV4LCB7XG5cdFx0XHR2OiB5TGVuLFxuXHRcdFx0aTogeExlbiAtIHlMZW5cblx0XHR9KTtcblx0fVxuXHRlbHNlIGlmICh4TGVuIDwgeUxlbilcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA3LCBpbmRleCwge1xuXHRcdFx0djogeExlbixcblx0XHRcdGU6IHlLaWRzXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQQUlSV0lTRSBESUZGIEVWRVJZVEhJTkcgRUxTRVxuXG5cdGZvciAodmFyIG1pbkxlbiA9IHhMZW4gPCB5TGVuID8geExlbiA6IHlMZW4sIGkgPSAwOyBpIDwgbWluTGVuOyBpKyspXG5cdHtcblx0XHR2YXIgeEtpZCA9IHhLaWRzW2ldO1xuXHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhLaWQsIHlLaWRzW2ldLCBwYXRjaGVzLCArK2luZGV4KTtcblx0XHRpbmRleCArPSB4S2lkLmIgfHwgMDtcblx0fVxufVxuXG5cblxuLy8gS0VZRUQgRElGRlxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmZLZXllZEtpZHMoeFBhcmVudCwgeVBhcmVudCwgcGF0Y2hlcywgcm9vdEluZGV4KVxue1xuXHR2YXIgbG9jYWxQYXRjaGVzID0gW107XG5cblx0dmFyIGNoYW5nZXMgPSB7fTsgLy8gRGljdCBTdHJpbmcgRW50cnlcblx0dmFyIGluc2VydHMgPSBbXTsgLy8gQXJyYXkgeyBpbmRleCA6IEludCwgZW50cnkgOiBFbnRyeSB9XG5cdC8vIHR5cGUgRW50cnkgPSB7IHRhZyA6IFN0cmluZywgdm5vZGUgOiBWTm9kZSwgaW5kZXggOiBJbnQsIGRhdGEgOiBfIH1cblxuXHR2YXIgeEtpZHMgPSB4UGFyZW50LmU7XG5cdHZhciB5S2lkcyA9IHlQYXJlbnQuZTtcblx0dmFyIHhMZW4gPSB4S2lkcy5sZW5ndGg7XG5cdHZhciB5TGVuID0geUtpZHMubGVuZ3RoO1xuXHR2YXIgeEluZGV4ID0gMDtcblx0dmFyIHlJbmRleCA9IDA7XG5cblx0dmFyIGluZGV4ID0gcm9vdEluZGV4O1xuXG5cdHdoaWxlICh4SW5kZXggPCB4TGVuICYmIHlJbmRleCA8IHlMZW4pXG5cdHtcblx0XHR2YXIgeCA9IHhLaWRzW3hJbmRleF07XG5cdFx0dmFyIHkgPSB5S2lkc1t5SW5kZXhdO1xuXG5cdFx0dmFyIHhLZXkgPSB4LmE7XG5cdFx0dmFyIHlLZXkgPSB5LmE7XG5cdFx0dmFyIHhOb2RlID0geC5iO1xuXHRcdHZhciB5Tm9kZSA9IHkuYjtcblxuXHRcdHZhciBuZXdNYXRjaCA9IHVuZGVmaW5lZDtcblx0XHR2YXIgb2xkTWF0Y2ggPSB1bmRlZmluZWQ7XG5cblx0XHQvLyBjaGVjayBpZiBrZXlzIG1hdGNoXG5cblx0XHRpZiAoeEtleSA9PT0geUtleSlcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5vZGUsIHlOb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4Kys7XG5cdFx0XHR5SW5kZXgrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGxvb2sgYWhlYWQgMSB0byBkZXRlY3QgaW5zZXJ0aW9ucyBhbmQgcmVtb3ZhbHMuXG5cblx0XHR2YXIgeE5leHQgPSB4S2lkc1t4SW5kZXggKyAxXTtcblx0XHR2YXIgeU5leHQgPSB5S2lkc1t5SW5kZXggKyAxXTtcblxuXHRcdGlmICh4TmV4dClcblx0XHR7XG5cdFx0XHR2YXIgeE5leHRLZXkgPSB4TmV4dC5hO1xuXHRcdFx0dmFyIHhOZXh0Tm9kZSA9IHhOZXh0LmI7XG5cdFx0XHRvbGRNYXRjaCA9IHlLZXkgPT09IHhOZXh0S2V5O1xuXHRcdH1cblxuXHRcdGlmICh5TmV4dClcblx0XHR7XG5cdFx0XHR2YXIgeU5leHRLZXkgPSB5TmV4dC5hO1xuXHRcdFx0dmFyIHlOZXh0Tm9kZSA9IHlOZXh0LmI7XG5cdFx0XHRuZXdNYXRjaCA9IHhLZXkgPT09IHlOZXh0S2V5O1xuXHRcdH1cblxuXG5cdFx0Ly8gc3dhcCB4IGFuZCB5XG5cdFx0aWYgKG5ld01hdGNoICYmIG9sZE1hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4Tm9kZSwgeU5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB5Tm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB4TmV4dE5vZGUsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOZXh0Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAyO1xuXHRcdFx0eUluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpbnNlcnQgeVxuXHRcdGlmIChuZXdNYXRjaClcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHlLZXksIHlOb2RlLCB5SW5kZXgsIGluc2VydHMpO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5vZGUsIHlOZXh0Tm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAxO1xuXHRcdFx0eUluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgeFxuXHRcdGlmIChvbGRNYXRjaClcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHhOb2RlLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4TmV4dE5vZGUsIHlOb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOZXh0Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAyO1xuXHRcdFx0eUluZGV4ICs9IDE7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgeCwgaW5zZXJ0IHlcblx0XHRpZiAoeE5leHQgJiYgeE5leHRLZXkgPT09IHlOZXh0S2V5KVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeEtleSwgeE5vZGUsIGluZGV4KTtcblx0XHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB5S2V5LCB5Tm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOZXh0Tm9kZSwgeU5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOZXh0Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAyO1xuXHRcdFx0eUluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdC8vIGVhdCB1cCBhbnkgcmVtYWluaW5nIG5vZGVzIHdpdGggcmVtb3ZlTm9kZSBhbmQgaW5zZXJ0Tm9kZVxuXG5cdHdoaWxlICh4SW5kZXggPCB4TGVuKVxuXHR7XG5cdFx0aW5kZXgrKztcblx0XHR2YXIgeCA9IHhLaWRzW3hJbmRleF07XG5cdFx0dmFyIHhOb2RlID0geC5iO1xuXHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4LmEsIHhOb2RlLCBpbmRleCk7XG5cdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXHRcdHhJbmRleCsrO1xuXHR9XG5cblx0d2hpbGUgKHlJbmRleCA8IHlMZW4pXG5cdHtcblx0XHR2YXIgZW5kSW5zZXJ0cyA9IGVuZEluc2VydHMgfHwgW107XG5cdFx0dmFyIHkgPSB5S2lkc1t5SW5kZXhdO1xuXHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB5LmEsIHkuYiwgdW5kZWZpbmVkLCBlbmRJbnNlcnRzKTtcblx0XHR5SW5kZXgrKztcblx0fVxuXG5cdGlmIChsb2NhbFBhdGNoZXMubGVuZ3RoID4gMCB8fCBpbnNlcnRzLmxlbmd0aCA+IDAgfHwgZW5kSW5zZXJ0cylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA4LCByb290SW5kZXgsIHtcblx0XHRcdHc6IGxvY2FsUGF0Y2hlcyxcblx0XHRcdHg6IGluc2VydHMsXG5cdFx0XHR5OiBlbmRJbnNlcnRzXG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIENIQU5HRVMgRlJPTSBLRVlFRCBESUZGXG5cblxudmFyIF9WaXJ0dWFsRG9tX1BPU1RGSVggPSAnX2VsbVc2QkwnO1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXksIHZub2RlLCB5SW5kZXgsIGluc2VydHMpXG57XG5cdHZhciBlbnRyeSA9IGNoYW5nZXNba2V5XTtcblxuXHQvLyBuZXZlciBzZWVuIHRoaXMga2V5IGJlZm9yZVxuXHRpZiAoIWVudHJ5KVxuXHR7XG5cdFx0ZW50cnkgPSB7XG5cdFx0XHRjOiAwLFxuXHRcdFx0ejogdm5vZGUsXG5cdFx0XHRyOiB5SW5kZXgsXG5cdFx0XHRzOiB1bmRlZmluZWRcblx0XHR9O1xuXG5cdFx0aW5zZXJ0cy5wdXNoKHsgcjogeUluZGV4LCBBOiBlbnRyeSB9KTtcblx0XHRjaGFuZ2VzW2tleV0gPSBlbnRyeTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IHdhcyByZW1vdmVkIGVhcmxpZXIsIGEgbWF0Y2ghXG5cdGlmIChlbnRyeS5jID09PSAxKVxuXHR7XG5cdFx0aW5zZXJ0cy5wdXNoKHsgcjogeUluZGV4LCBBOiBlbnRyeSB9KTtcblxuXHRcdGVudHJ5LmMgPSAyO1xuXHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoZW50cnkueiwgdm5vZGUsIHN1YlBhdGNoZXMsIGVudHJ5LnIpO1xuXHRcdGVudHJ5LnIgPSB5SW5kZXg7XG5cdFx0ZW50cnkucy5zID0ge1xuXHRcdFx0dzogc3ViUGF0Y2hlcyxcblx0XHRcdEE6IGVudHJ5XG5cdFx0fTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IGhhcyBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQgb3IgbW92ZWQsIGEgZHVwbGljYXRlIVxuXHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5ICsgX1ZpcnR1YWxEb21fUE9TVEZJWCwgdm5vZGUsIHlJbmRleCwgaW5zZXJ0cyk7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSwgdm5vZGUsIGluZGV4KVxue1xuXHR2YXIgZW50cnkgPSBjaGFuZ2VzW2tleV07XG5cblx0Ly8gbmV2ZXIgc2VlbiB0aGlzIGtleSBiZWZvcmVcblx0aWYgKCFlbnRyeSlcblx0e1xuXHRcdHZhciBwYXRjaCA9IF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChsb2NhbFBhdGNoZXMsIDksIGluZGV4LCB1bmRlZmluZWQpO1xuXG5cdFx0Y2hhbmdlc1trZXldID0ge1xuXHRcdFx0YzogMSxcblx0XHRcdHo6IHZub2RlLFxuXHRcdFx0cjogaW5kZXgsXG5cdFx0XHRzOiBwYXRjaFxuXHRcdH07XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSB3YXMgaW5zZXJ0ZWQgZWFybGllciwgYSBtYXRjaCFcblx0aWYgKGVudHJ5LmMgPT09IDApXG5cdHtcblx0XHRlbnRyeS5jID0gMjtcblx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHZub2RlLCBlbnRyeS56LCBzdWJQYXRjaGVzLCBpbmRleCk7XG5cblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gobG9jYWxQYXRjaGVzLCA5LCBpbmRleCwge1xuXHRcdFx0dzogc3ViUGF0Y2hlcyxcblx0XHRcdEE6IGVudHJ5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgb3IgbW92ZWQsIGEgZHVwbGljYXRlIVxuXHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5ICsgX1ZpcnR1YWxEb21fUE9TVEZJWCwgdm5vZGUsIGluZGV4KTtcbn1cblxuXG5cbi8vIEFERCBET00gTk9ERVNcbi8vXG4vLyBFYWNoIERPTSBub2RlIGhhcyBhbiBcImluZGV4XCIgYXNzaWduZWQgaW4gb3JkZXIgb2YgdHJhdmVyc2FsLiBJdCBpcyBpbXBvcnRhbnRcbi8vIHRvIG1pbmltaXplIG91ciBjcmF3bCBvdmVyIHRoZSBhY3R1YWwgRE9NLCBzbyB0aGVzZSBpbmRleGVzIChhbG9uZyB3aXRoIHRoZVxuLy8gZGVzY2VuZGFudHNDb3VudCBvZiB2aXJ0dWFsIG5vZGVzKSBsZXQgdXMgc2tpcCB0b3VjaGluZyBlbnRpcmUgc3VidHJlZXMgb2Zcbi8vIHRoZSBET00gaWYgd2Uga25vdyB0aGVyZSBhcmUgbm8gcGF0Y2hlcyB0aGVyZS5cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hZGREb21Ob2Rlcyhkb21Ob2RlLCB2Tm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKVxue1xuXHRfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIDAsIDAsIHZOb2RlLmIsIGV2ZW50Tm9kZSk7XG59XG5cblxuLy8gYXNzdW1lcyBgcGF0Y2hlc2AgaXMgbm9uLWVtcHR5IGFuZCBpbmRleGVzIGluY3JlYXNlIG1vbm90b25pY2FsbHkuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIGksIGxvdywgaGlnaCwgZXZlbnROb2RlKVxue1xuXHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXHR2YXIgaW5kZXggPSBwYXRjaC5yO1xuXG5cdHdoaWxlIChpbmRleCA9PT0gbG93KVxuXHR7XG5cdFx0dmFyIHBhdGNoVHlwZSA9IHBhdGNoLiQ7XG5cblx0XHRpZiAocGF0Y2hUeXBlID09PSAxKVxuXHRcdHtcblx0XHRcdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzKGRvbU5vZGUsIHZOb2RlLmssIHBhdGNoLnMsIGV2ZW50Tm9kZSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHBhdGNoVHlwZSA9PT0gOClcblx0XHR7XG5cdFx0XHRwYXRjaC50ID0gZG9tTm9kZTtcblx0XHRcdHBhdGNoLnUgPSBldmVudE5vZGU7XG5cblx0XHRcdHZhciBzdWJQYXRjaGVzID0gcGF0Y2gucy53O1xuXHRcdFx0aWYgKHN1YlBhdGNoZXMubGVuZ3RoID4gMClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBzdWJQYXRjaGVzLCAwLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHBhdGNoVHlwZSA9PT0gOSlcblx0XHR7XG5cdFx0XHRwYXRjaC50ID0gZG9tTm9kZTtcblx0XHRcdHBhdGNoLnUgPSBldmVudE5vZGU7XG5cblx0XHRcdHZhciBkYXRhID0gcGF0Y2gucztcblx0XHRcdGlmIChkYXRhKVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLkEucyA9IGRvbU5vZGU7XG5cdFx0XHRcdHZhciBzdWJQYXRjaGVzID0gZGF0YS53O1xuXHRcdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBzdWJQYXRjaGVzLCAwLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHBhdGNoLnQgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2gudSA9IGV2ZW50Tm9kZTtcblx0XHR9XG5cblx0XHRpKys7XG5cblx0XHRpZiAoIShwYXRjaCA9IHBhdGNoZXNbaV0pIHx8IChpbmRleCA9IHBhdGNoLnIpID4gaGlnaClcblx0XHR7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHR2YXIgdGFnID0gdk5vZGUuJDtcblxuXHRpZiAodGFnID09PSA0KVxuXHR7XG5cdFx0dmFyIHN1Yk5vZGUgPSB2Tm9kZS5rO1xuXG5cdFx0d2hpbGUgKHN1Yk5vZGUuJCA9PT0gNClcblx0XHR7XG5cdFx0XHRzdWJOb2RlID0gc3ViTm9kZS5rO1xuXHRcdH1cblxuXHRcdHJldHVybiBfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgc3ViTm9kZSwgcGF0Y2hlcywgaSwgbG93ICsgMSwgaGlnaCwgZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYpO1xuXHR9XG5cblx0Ly8gdGFnIG11c3QgYmUgMSBvciAyIGF0IHRoaXMgcG9pbnRcblxuXHR2YXIgdktpZHMgPSB2Tm9kZS5lO1xuXHR2YXIgY2hpbGROb2RlcyA9IGRvbU5vZGUuY2hpbGROb2Rlcztcblx0Zm9yICh2YXIgaiA9IDA7IGogPCB2S2lkcy5sZW5ndGg7IGorKylcblx0e1xuXHRcdGxvdysrO1xuXHRcdHZhciB2S2lkID0gdGFnID09PSAxID8gdktpZHNbal0gOiB2S2lkc1tqXS5iO1xuXHRcdHZhciBuZXh0TG93ID0gbG93ICsgKHZLaWQuYiB8fCAwKTtcblx0XHRpZiAobG93IDw9IGluZGV4ICYmIGluZGV4IDw9IG5leHRMb3cpXG5cdFx0e1xuXHRcdFx0aSA9IF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChjaGlsZE5vZGVzW2pdLCB2S2lkLCBwYXRjaGVzLCBpLCBsb3csIG5leHRMb3csIGV2ZW50Tm9kZSk7XG5cdFx0XHRpZiAoIShwYXRjaCA9IHBhdGNoZXNbaV0pIHx8IChpbmRleCA9IHBhdGNoLnIpID4gaGlnaClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxvdyA9IG5leHRMb3c7XG5cdH1cblx0cmV0dXJuIGk7XG59XG5cblxuXG4vLyBBUFBMWSBQQVRDSEVTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKHJvb3REb21Ob2RlLCBvbGRWaXJ0dWFsTm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKVxue1xuXHRpZiAocGF0Y2hlcy5sZW5ndGggPT09IDApXG5cdHtcblx0XHRyZXR1cm4gcm9vdERvbU5vZGU7XG5cdH1cblxuXHRfVmlydHVhbERvbV9hZGREb21Ob2Rlcyhyb290RG9tTm9kZSwgb2xkVmlydHVhbE5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSk7XG5cdHJldHVybiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKHJvb3REb21Ob2RlLCBwYXRjaGVzKTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChyb290RG9tTm9kZSwgcGF0Y2hlcylcbntcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaGVzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIHBhdGNoID0gcGF0Y2hlc1tpXTtcblx0XHR2YXIgbG9jYWxEb21Ob2RlID0gcGF0Y2gudFxuXHRcdHZhciBuZXdOb2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaChsb2NhbERvbU5vZGUsIHBhdGNoKTtcblx0XHRpZiAobG9jYWxEb21Ob2RlID09PSByb290RG9tTm9kZSlcblx0XHR7XG5cdFx0XHRyb290RG9tTm9kZSA9IG5ld05vZGU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByb290RG9tTm9kZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaChkb21Ob2RlLCBwYXRjaClcbntcblx0c3dpdGNoIChwYXRjaC4kKVxuXHR7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZWRyYXcoZG9tTm9kZSwgcGF0Y2gucywgcGF0Y2gudSk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHRfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIHBhdGNoLnUsIHBhdGNoLnMpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRkb21Ob2RlLnJlcGxhY2VEYXRhKDAsIGRvbU5vZGUubGVuZ3RoLCBwYXRjaC5zKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAoZG9tTm9kZSwgcGF0Y2gucyk7XG5cblx0XHRjYXNlIDI6XG5cdFx0XHRpZiAoZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmLmogPSBwYXRjaC5zO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IHsgajogcGF0Y2gucywgcDogcGF0Y2gudSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuaTsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUuY2hpbGROb2Rlc1tkYXRhLnZdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA3OlxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0dmFyIGtpZHMgPSBkYXRhLmU7XG5cdFx0XHR2YXIgaSA9IGRhdGEudjtcblx0XHRcdHZhciB0aGVFbmQgPSBkb21Ob2RlLmNoaWxkTm9kZXNbaV07XG5cdFx0XHRmb3IgKDsgaSA8IGtpZHMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUuaW5zZXJ0QmVmb3JlKF9WaXJ0dWFsRG9tX3JlbmRlcihraWRzW2ldLCBwYXRjaC51KSwgdGhlRW5kKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0aWYgKCFkYXRhKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cdFx0XHRcdHJldHVybiBkb21Ob2RlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGVudHJ5ID0gZGF0YS5BO1xuXHRcdFx0aWYgKHR5cGVvZiBlbnRyeS5yICE9PSAndW5kZWZpbmVkJylcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0ZW50cnkucyA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAoZG9tTm9kZSwgZGF0YS53KTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA4OlxuXHRcdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZW9yZGVyKGRvbU5vZGUsIHBhdGNoKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBwYXRjaC5zKGRvbU5vZGUpO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdF9EZWJ1Z19jcmFzaCgxMCk7IC8vICdSYW4gaW50byBhbiB1bmtub3duIHBhdGNoISdcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZWRyYXcoZG9tTm9kZSwgdk5vZGUsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGU7XG5cdHZhciBuZXdOb2RlID0gX1ZpcnR1YWxEb21fcmVuZGVyKHZOb2RlLCBldmVudE5vZGUpO1xuXG5cdGlmICghbmV3Tm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYpXG5cdHtcblx0XHRuZXdOb2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmO1xuXHR9XG5cblx0aWYgKHBhcmVudE5vZGUgJiYgbmV3Tm9kZSAhPT0gZG9tTm9kZSlcblx0e1xuXHRcdHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpO1xuXHR9XG5cdHJldHVybiBuZXdOb2RlO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZW9yZGVyKGRvbU5vZGUsIHBhdGNoKVxue1xuXHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cblx0Ly8gcmVtb3ZlIGVuZCBpbnNlcnRzXG5cdHZhciBmcmFnID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXJFbmRJbnNlcnRzSGVscChkYXRhLnksIHBhdGNoKTtcblxuXHQvLyByZW1vdmFsc1xuXHRkb21Ob2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBkYXRhLncpO1xuXG5cdC8vIGluc2VydHNcblx0dmFyIGluc2VydHMgPSBkYXRhLng7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW5zZXJ0cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBpbnNlcnQgPSBpbnNlcnRzW2ldO1xuXHRcdHZhciBlbnRyeSA9IGluc2VydC5BO1xuXHRcdHZhciBub2RlID0gZW50cnkuYyA9PT0gMlxuXHRcdFx0PyBlbnRyeS5zXG5cdFx0XHQ6IF9WaXJ0dWFsRG9tX3JlbmRlcihlbnRyeS56LCBwYXRjaC51KTtcblx0XHRkb21Ob2RlLmluc2VydEJlZm9yZShub2RlLCBkb21Ob2RlLmNoaWxkTm9kZXNbaW5zZXJ0LnJdKTtcblx0fVxuXG5cdC8vIGFkZCBlbmQgaW5zZXJ0c1xuXHRpZiAoZnJhZylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKGRvbU5vZGUsIGZyYWcpO1xuXHR9XG5cblx0cmV0dXJuIGRvbU5vZGU7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXJFbmRJbnNlcnRzSGVscChlbmRJbnNlcnRzLCBwYXRjaClcbntcblx0aWYgKCFlbmRJbnNlcnRzKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGZyYWcgPSBfVmlydHVhbERvbV9kb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZEluc2VydHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgaW5zZXJ0ID0gZW5kSW5zZXJ0c1tpXTtcblx0XHR2YXIgZW50cnkgPSBpbnNlcnQuQTtcblx0XHRfVmlydHVhbERvbV9hcHBlbmRDaGlsZChmcmFnLCBlbnRyeS5jID09PSAyXG5cdFx0XHQ/IGVudHJ5LnNcblx0XHRcdDogX1ZpcnR1YWxEb21fcmVuZGVyKGVudHJ5LnosIHBhdGNoLnUpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gZnJhZztcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV92aXJ0dWFsaXplKG5vZGUpXG57XG5cdC8vIFRFWFQgTk9ERVNcblxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMylcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV90ZXh0KG5vZGUudGV4dENvbnRlbnQpO1xuXHR9XG5cblxuXHQvLyBXRUlSRCBOT0RFU1xuXG5cdGlmIChub2RlLm5vZGVUeXBlICE9PSAxKVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RleHQoJycpO1xuXHR9XG5cblxuXHQvLyBFTEVNRU5UIE5PREVTXG5cblx0dmFyIGF0dHJMaXN0ID0gX0xpc3RfTmlsO1xuXHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cdGZvciAodmFyIGkgPSBhdHRycy5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0dmFyIGF0dHIgPSBhdHRyc1tpXTtcblx0XHR2YXIgbmFtZSA9IGF0dHIubmFtZTtcblx0XHR2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xuXHRcdGF0dHJMaXN0ID0gX0xpc3RfQ29ucyggQTIoX1ZpcnR1YWxEb21fYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSksIGF0dHJMaXN0ICk7XG5cdH1cblxuXHR2YXIgdGFnID0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdHZhciBraWRMaXN0ID0gX0xpc3RfTmlsO1xuXHR2YXIga2lkcyA9IG5vZGUuY2hpbGROb2RlcztcblxuXHRmb3IgKHZhciBpID0ga2lkcy5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0a2lkTGlzdCA9IF9MaXN0X0NvbnMoX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShraWRzW2ldKSwga2lkTGlzdCk7XG5cdH1cblx0cmV0dXJuIEEzKF9WaXJ0dWFsRG9tX25vZGUsIHRhZywgYXR0ckxpc3QsIGtpZExpc3QpO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kZWtleShrZXllZE5vZGUpXG57XG5cdHZhciBrZXllZEtpZHMgPSBrZXllZE5vZGUuZTtcblx0dmFyIGxlbiA9IGtleWVkS2lkcy5sZW5ndGg7XG5cdHZhciBraWRzID0gbmV3IEFycmF5KGxlbik7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG5cdHtcblx0XHRraWRzW2ldID0ga2V5ZWRLaWRzW2ldLmI7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdCQ6IDEsXG5cdFx0Yzoga2V5ZWROb2RlLmMsXG5cdFx0ZDoga2V5ZWROb2RlLmQsXG5cdFx0ZToga2lkcyxcblx0XHRmOiBrZXllZE5vZGUuZixcblx0XHRiOiBrZXllZE5vZGUuYlxuXHR9O1xufVxuXG5cblxuXG4vLyBFTEVNRU5UXG5cblxudmFyIF9EZWJ1Z2dlcl9lbGVtZW50O1xuXG52YXIgX0Jyb3dzZXJfZWxlbWVudCA9IF9EZWJ1Z2dlcl9lbGVtZW50IHx8IEY0KGZ1bmN0aW9uKGltcGwsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHRyZXR1cm4gX1BsYXRmb3JtX2luaXRpYWxpemUoXG5cdFx0ZmxhZ0RlY29kZXIsXG5cdFx0YXJncyxcblx0XHRpbXBsLmluaXQsXG5cdFx0aW1wbC51cGRhdGUsXG5cdFx0aW1wbC5zdWJzY3JpcHRpb25zLFxuXHRcdGZ1bmN0aW9uKHNlbmRUb0FwcCwgaW5pdGlhbE1vZGVsKSB7XG5cdFx0XHR2YXIgdmlldyA9IGltcGwudmlldztcblx0XHRcdC8qKl9VTlVTRUQvXG5cdFx0XHR2YXIgZG9tTm9kZSA9IGFyZ3NbJ25vZGUnXTtcblx0XHRcdC8vKi9cblx0XHRcdC8qKi9cblx0XHRcdHZhciBkb21Ob2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdFx0XHQvLyovXG5cdFx0XHR2YXIgY3Vyck5vZGUgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKGRvbU5vZGUpO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IHZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3Vyck5vZGUsIG5leHROb2RlKTtcblx0XHRcdFx0ZG9tTm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhkb21Ob2RlLCBjdXJyTm9kZSwgcGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3Vyck5vZGUgPSBuZXh0Tm9kZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cblxuLy8gRE9DVU1FTlRcblxuXG52YXIgX0RlYnVnZ2VyX2RvY3VtZW50O1xuXG52YXIgX0Jyb3dzZXJfZG9jdW1lbnQgPSBfRGVidWdnZXJfZG9jdW1lbnQgfHwgRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdGltcGwuaW5pdCxcblx0XHRpbXBsLnVwZGF0ZSxcblx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0ZnVuY3Rpb24oc2VuZFRvQXBwLCBpbml0aWFsTW9kZWwpIHtcblx0XHRcdHZhciBkaXZlcnRIcmVmVG9BcHAgPSBpbXBsLnNldHVwICYmIGltcGwuc2V0dXAoc2VuZFRvQXBwKVxuXHRcdFx0dmFyIHZpZXcgPSBpbXBsLnZpZXc7XG5cdFx0XHR2YXIgdGl0bGUgPSBfVmlydHVhbERvbV9kb2MudGl0bGU7XG5cdFx0XHR2YXIgYm9keU5vZGUgPSBfVmlydHVhbERvbV9kb2MuYm9keTtcblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoYm9keU5vZGUpO1xuXHRcdFx0cmV0dXJuIF9Ccm93c2VyX21ha2VBbmltYXRvcihpbml0aWFsTW9kZWwsIGZ1bmN0aW9uKG1vZGVsKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAgPSBkaXZlcnRIcmVmVG9BcHA7XG5cdFx0XHRcdHZhciBkb2MgPSB2aWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIG5leHROb2RlID0gX1ZpcnR1YWxEb21fbm9kZSgnYm9keScpKF9MaXN0X05pbCkoZG9jLmJvZHkpO1xuXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3Vyck5vZGUsIG5leHROb2RlKTtcblx0XHRcdFx0Ym9keU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoYm9keU5vZGUsIGN1cnJOb2RlLCBwYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyTm9kZSA9IG5leHROb2RlO1xuXHRcdFx0XHRfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAgPSAwO1xuXHRcdFx0XHQodGl0bGUgIT09IGRvYy50aXRsZSkgJiYgKF9WaXJ0dWFsRG9tX2RvYy50aXRsZSA9IHRpdGxlID0gZG9jLnRpdGxlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0KTtcbn0pO1xuXG5cblxuLy8gQU5JTUFUSU9OXG5cblxudmFyIF9Ccm93c2VyX2NhbmNlbEFuaW1hdGlvbkZyYW1lID1cblx0dHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gY2FuY2VsQW5pbWF0aW9uRnJhbWVcblx0XHQ6IGZ1bmN0aW9uKGlkKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cbnZhciBfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxuXHR0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJ1xuXHRcdD8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cdFx0OiBmdW5jdGlvbihjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTsgfTtcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9tYWtlQW5pbWF0b3IobW9kZWwsIGRyYXcpXG57XG5cdGRyYXcobW9kZWwpO1xuXG5cdHZhciBzdGF0ZSA9IDA7XG5cblx0ZnVuY3Rpb24gdXBkYXRlSWZOZWVkZWQoKVxuXHR7XG5cdFx0c3RhdGUgPSBzdGF0ZSA9PT0gMVxuXHRcdFx0PyAwXG5cdFx0XHQ6ICggX0Jyb3dzZXJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUlmTmVlZGVkKSwgZHJhdyhtb2RlbCksIDEgKTtcblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbihuZXh0TW9kZWwsIGlzU3luYylcblx0e1xuXHRcdG1vZGVsID0gbmV4dE1vZGVsO1xuXG5cdFx0aXNTeW5jXG5cdFx0XHQ/ICggZHJhdyhtb2RlbCksXG5cdFx0XHRcdHN0YXRlID09PSAyICYmIChzdGF0ZSA9IDEpXG5cdFx0XHRcdClcblx0XHRcdDogKCBzdGF0ZSA9PT0gMCAmJiBfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlSWZOZWVkZWQpLFxuXHRcdFx0XHRzdGF0ZSA9IDJcblx0XHRcdFx0KTtcblx0fTtcbn1cblxuXG5cbi8vIEFQUExJQ0FUSU9OXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfYXBwbGljYXRpb24oaW1wbClcbntcblx0dmFyIG9uVXJsQ2hhbmdlID0gaW1wbC5vblVybENoYW5nZTtcblx0dmFyIG9uVXJsUmVxdWVzdCA9IGltcGwub25VcmxSZXF1ZXN0O1xuXHR2YXIga2V5ID0gZnVuY3Rpb24oKSB7IGtleS5hKG9uVXJsQ2hhbmdlKF9Ccm93c2VyX2dldFVybCgpKSk7IH07XG5cblx0cmV0dXJuIF9Ccm93c2VyX2RvY3VtZW50KHtcblx0XHRzZXR1cDogZnVuY3Rpb24oc2VuZFRvQXBwKVxuXHRcdHtcblx0XHRcdGtleS5hID0gc2VuZFRvQXBwO1xuXHRcdFx0X0Jyb3dzZXJfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywga2V5KTtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA8IDAgfHwgX0Jyb3dzZXJfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBrZXkpO1xuXG5cdFx0XHRyZXR1cm4gRjIoZnVuY3Rpb24oZG9tTm9kZSwgZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQuYnV0dG9uIDwgMSAmJiAhZG9tTm9kZS50YXJnZXQgJiYgIWRvbU5vZGUuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2YXIgaHJlZiA9IGRvbU5vZGUuaHJlZjtcblx0XHRcdFx0XHR2YXIgY3VyciA9IF9Ccm93c2VyX2dldFVybCgpO1xuXHRcdFx0XHRcdHZhciBuZXh0ID0gJGVsbSR1cmwkVXJsJGZyb21TdHJpbmcoaHJlZikuYTtcblx0XHRcdFx0XHRzZW5kVG9BcHAob25VcmxSZXF1ZXN0KFxuXHRcdFx0XHRcdFx0KG5leHRcblx0XHRcdFx0XHRcdFx0JiYgY3Vyci5wcm90b2NvbCA9PT0gbmV4dC5wcm90b2NvbFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLmhvc3QgPT09IG5leHQuaG9zdFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLnBvcnRfLmEgPT09IG5leHQucG9ydF8uYVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQ/ICRlbG0kYnJvd3NlciRCcm93c2VyJEludGVybmFsKG5leHQpXG5cdFx0XHRcdFx0XHRcdDogJGVsbSRicm93c2VyJEJyb3dzZXIkRXh0ZXJuYWwoaHJlZilcblx0XHRcdFx0XHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbihmbGFncylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMoaW1wbC5pbml0LCBmbGFncywgX0Jyb3dzZXJfZ2V0VXJsKCksIGtleSk7XG5cdFx0fSxcblx0XHR2aWV3OiBpbXBsLnZpZXcsXG5cdFx0dXBkYXRlOiBpbXBsLnVwZGF0ZSxcblx0XHRzdWJzY3JpcHRpb25zOiBpbXBsLnN1YnNjcmlwdGlvbnNcblx0fSk7XG59XG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFVybCgpXG57XG5cdHJldHVybiAkZWxtJHVybCRVcmwkZnJvbVN0cmluZyhfVmlydHVhbERvbV9kb2MubG9jYXRpb24uaHJlZikuYSB8fCBfRGVidWdfY3Jhc2goMSk7XG59XG5cbnZhciBfQnJvd3Nlcl9nbyA9IEYyKGZ1bmN0aW9uKGtleSwgbilcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sICRlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbigpIHtcblx0XHRuICYmIGhpc3RvcnkuZ28obik7XG5cdFx0a2V5KCk7XG5cdH0pKTtcbn0pO1xuXG52YXIgX0Jyb3dzZXJfcHVzaFVybCA9IEYyKGZ1bmN0aW9uKGtleSwgdXJsKVxue1xuXHRyZXR1cm4gQTIoJGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgJGVsbSRjb3JlJEJhc2ljcyRuZXZlciwgX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKCkge1xuXHRcdGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcblx0XHRrZXkoKTtcblx0fSkpO1xufSk7XG5cbnZhciBfQnJvd3Nlcl9yZXBsYWNlVXJsID0gRjIoZnVuY3Rpb24oa2V5LCB1cmwpXG57XG5cdHJldHVybiBBMigkZWxtJGNvcmUkVGFzayRwZXJmb3JtLCAkZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwpO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxuXG5cbi8vIEdMT0JBTCBFVkVOVFNcblxuXG52YXIgX0Jyb3dzZXJfZmFrZU5vZGUgPSB7IGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30sIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30gfTtcbnZhciBfQnJvd3Nlcl9kb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBfQnJvd3Nlcl9mYWtlTm9kZTtcbnZhciBfQnJvd3Nlcl93aW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IF9Ccm93c2VyX2Zha2VOb2RlO1xuXG52YXIgX0Jyb3dzZXJfb24gPSBGMyhmdW5jdGlvbihub2RlLCBldmVudE5hbWUsIHNlbmRUb1NlbGYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX3NwYXduKF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpXHR7IF9TY2hlZHVsZXJfcmF3U3Bhd24oc2VuZFRvU2VsZihldmVudCkpOyB9XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZCAmJiB7IHBhc3NpdmU6IHRydWUgfSk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTsgfTtcblx0fSkpO1xufSk7XG5cbnZhciBfQnJvd3Nlcl9kZWNvZGVFdmVudCA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIGV2ZW50KVxue1xuXHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLCBldmVudCk7XG5cdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSA/ICRlbG0kY29yZSRNYXliZSRKdXN0KHJlc3VsdC5hKSA6ICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xufSk7XG5cblxuXG4vLyBQQUdFIFZJU0lCSUxJVFlcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl92aXNpYmlsaXR5SW5mbygpXG57XG5cdHJldHVybiAodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5oaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdoaWRkZW4nLCBjaGFuZ2U6ICd2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdtb3pIaWRkZW4nLCBjaGFuZ2U6ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ21zSGlkZGVuJywgY2hhbmdlOiAnbXN2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICd3ZWJraXRIaWRkZW4nLCBjaGFuZ2U6ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OiB7IGhpZGRlbjogJ2hpZGRlbicsIGNoYW5nZTogJ3Zpc2liaWxpdHljaGFuZ2UnIH07XG59XG5cblxuXG4vLyBBTklNQVRJT04gRlJBTUVTXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfckFGKClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBpZCA9IF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRfQnJvd3Nlcl9jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG5cdFx0fTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfbm93KClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdH0pO1xufVxuXG5cblxuLy8gRE9NIFNUVUZGXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGRvU3R1ZmYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdGNhbGxiYWNrKG5vZGVcblx0XHRcdFx0PyBfU2NoZWR1bGVyX3N1Y2NlZWQoZG9TdHVmZihub2RlKSlcblx0XHRcdFx0OiBfU2NoZWR1bGVyX2ZhaWwoJGVsbSRicm93c2VyJEJyb3dzZXIkRG9tJE5vdEZvdW5kKGlkKSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX3dpdGhXaW5kb3coZG9TdHVmZilcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChkb1N0dWZmKCkpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuLy8gRk9DVVMgYW5kIEJMVVJcblxuXG52YXIgX0Jyb3dzZXJfY2FsbCA9IEYyKGZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSwgaWQpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGVbZnVuY3Rpb25OYW1lXSgpO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gV0lORE9XIFZJRVdQT1JUXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0Vmlld3BvcnQoKVxue1xuXHRyZXR1cm4ge1xuXHRcdHNjZW5lOiBfQnJvd3Nlcl9nZXRTY2VuZSgpLFxuXHRcdHZpZXdwb3J0OiB7XG5cdFx0XHR4OiBfQnJvd3Nlcl93aW5kb3cucGFnZVhPZmZzZXQsXG5cdFx0XHR5OiBfQnJvd3Nlcl93aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHR3aWR0aDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdGhlaWdodDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFNjZW5lKClcbntcblx0dmFyIGJvZHkgPSBfQnJvd3Nlcl9kb2MuYm9keTtcblx0dmFyIGVsZW0gPSBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBib2R5Lm9mZnNldFdpZHRoLCBlbGVtLnNjcm9sbFdpZHRoLCBlbGVtLm9mZnNldFdpZHRoLCBlbGVtLmNsaWVudFdpZHRoKSxcblx0XHRoZWlnaHQ6IE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgZWxlbS5zY3JvbGxIZWlnaHQsIGVsZW0ub2Zmc2V0SGVpZ2h0LCBlbGVtLmNsaWVudEhlaWdodClcblx0fTtcbn1cblxudmFyIF9Ccm93c2VyX3NldFZpZXdwb3J0ID0gRjIoZnVuY3Rpb24oeCwgeSlcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhXaW5kb3coZnVuY3Rpb24oKVxuXHR7XG5cdFx0X0Jyb3dzZXJfd2luZG93LnNjcm9sbCh4LCB5KTtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0fSk7XG59KTtcblxuXG5cbi8vIEVMRU1FTlQgVklFV1BPUlRcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRWaWV3cG9ydE9mKGlkKVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0d2lkdGg6IG5vZGUuc2Nyb2xsV2lkdGgsXG5cdFx0XHRcdGhlaWdodDogbm9kZS5zY3JvbGxIZWlnaHRcblx0XHRcdH0sXG5cdFx0XHR2aWV3cG9ydDoge1xuXHRcdFx0XHR4OiBub2RlLnNjcm9sbExlZnQsXG5cdFx0XHRcdHk6IG5vZGUuc2Nyb2xsVG9wLFxuXHRcdFx0XHR3aWR0aDogbm9kZS5jbGllbnRXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBub2RlLmNsaWVudEhlaWdodFxuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufVxuXG5cbnZhciBfQnJvd3Nlcl9zZXRWaWV3cG9ydE9mID0gRjMoZnVuY3Rpb24oaWQsIHgsIHkpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSlcblx0e1xuXHRcdG5vZGUuc2Nyb2xsTGVmdCA9IHg7XG5cdFx0bm9kZS5zY3JvbGxUb3AgPSB5O1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gRUxFTUVOVFxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldEVsZW1lbnQoaWQpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSlcblx0e1xuXHRcdHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgeCA9IF9Ccm93c2VyX3dpbmRvdy5wYWdlWE9mZnNldDtcblx0XHR2YXIgeSA9IF9Ccm93c2VyX3dpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2NlbmU6IF9Ccm93c2VyX2dldFNjZW5lKCksXG5cdFx0XHR2aWV3cG9ydDoge1xuXHRcdFx0XHR4OiB4LFxuXHRcdFx0XHR5OiB5LFxuXHRcdFx0XHR3aWR0aDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdFx0fSxcblx0XHRcdGVsZW1lbnQ6IHtcblx0XHRcdFx0eDogeCArIHJlY3QubGVmdCxcblx0XHRcdFx0eTogeSArIHJlY3QudG9wLFxuXHRcdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodFxuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufVxuXG5cblxuLy8gTE9BRCBhbmQgUkVMT0FEXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfcmVsb2FkKHNraXBDYWNoZSlcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sICRlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2RvYy5sb2NhdGlvbi5yZWxvYWQoc2tpcENhY2hlKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9sb2FkKHVybClcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sICRlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKVxuXHRcdHtcblx0XHRcdC8vIE9ubHkgRmlyZWZveCBjYW4gdGhyb3cgYSBOU19FUlJPUl9NQUxGT1JNRURfVVJJIGV4Y2VwdGlvbiBoZXJlLlxuXHRcdFx0Ly8gT3RoZXIgYnJvd3NlcnMgcmVsb2FkIHRoZSBwYWdlLCBzbyBsZXQncyBiZSBjb25zaXN0ZW50IGFib3V0IHRoYXQuXG5cdFx0XHRfVmlydHVhbERvbV9kb2MubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcblx0XHR9XG5cdH0pKTtcbn1cblxuXG5cbnZhciBfQml0d2lzZV9hbmQgPSBGMihmdW5jdGlvbihhLCBiKVxue1xuXHRyZXR1cm4gYSAmIGI7XG59KTtcblxudmFyIF9CaXR3aXNlX29yID0gRjIoZnVuY3Rpb24oYSwgYilcbntcblx0cmV0dXJuIGEgfCBiO1xufSk7XG5cbnZhciBfQml0d2lzZV94b3IgPSBGMihmdW5jdGlvbihhLCBiKVxue1xuXHRyZXR1cm4gYSBeIGI7XG59KTtcblxuZnVuY3Rpb24gX0JpdHdpc2VfY29tcGxlbWVudChhKVxue1xuXHRyZXR1cm4gfmE7XG59O1xuXG52YXIgX0JpdHdpc2Vfc2hpZnRMZWZ0QnkgPSBGMihmdW5jdGlvbihvZmZzZXQsIGEpXG57XG5cdHJldHVybiBhIDw8IG9mZnNldDtcbn0pO1xuXG52YXIgX0JpdHdpc2Vfc2hpZnRSaWdodEJ5ID0gRjIoZnVuY3Rpb24ob2Zmc2V0LCBhKVxue1xuXHRyZXR1cm4gYSA+PiBvZmZzZXQ7XG59KTtcblxudmFyIF9CaXR3aXNlX3NoaWZ0UmlnaHRaZkJ5ID0gRjIoZnVuY3Rpb24ob2Zmc2V0LCBhKVxue1xuXHRyZXR1cm4gYSA+Pj4gb2Zmc2V0O1xufSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRFUSA9IHskOiAnRVEnfTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJEdUID0geyQ6ICdHVCd9O1xudmFyICRlbG0kY29yZSRCYXNpY3MkTFQgPSB7JDogJ0xUJ307XG52YXIgJGVsbSRjb3JlJExpc3QkY29ucyA9IF9MaXN0X2NvbnM7XG52YXIgJGVsbSRjb3JlJERpY3QkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgdCkge1xuXHRcdGZvbGRyOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAodC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSB0LmI7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IHQuYztcblx0XHRcdFx0dmFyIGxlZnQgPSB0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IHQuZTtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEzKFxuXHRcdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdEEzKCRlbG0kY29yZSREaWN0JGZvbGRyLCBmdW5jLCBhY2MsIHJpZ2h0KSksXG5cdFx0XHRcdFx0JHRlbXAkdCA9IGxlZnQ7XG5cdFx0XHRcdGZ1bmMgPSAkdGVtcCRmdW5jO1xuXHRcdFx0XHRhY2MgPSAkdGVtcCRhY2M7XG5cdFx0XHRcdHQgPSAkdGVtcCR0O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkcjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JHRvTGlzdCA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMyhcblx0XHQkZWxtJGNvcmUkRGljdCRmb2xkcixcblx0XHRGMyhcblx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBsaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoa2V5LCB2YWx1ZSksXG5cdFx0XHRcdFx0bGlzdCk7XG5cdFx0XHR9KSxcblx0XHRfTGlzdF9OaWwsXG5cdFx0ZGljdCk7XG59O1xudmFyICRlbG0kY29yZSREaWN0JGtleXMgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwga2V5TGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoJGVsbSRjb3JlJExpc3QkY29ucywga2V5LCBrZXlMaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9MaXN0X05pbCxcblx0XHRkaWN0KTtcbn07XG52YXIgJGVsbSRjb3JlJFNldCR0b0xpc3QgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciBkaWN0ID0gX3YwLmE7XG5cdHJldHVybiAkZWxtJGNvcmUkRGljdCRrZXlzKGRpY3QpO1xufTtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIgPSBfSnNBcnJheV9mb2xkcjtcbnZhciAkZWxtJGNvcmUkQXJyYXkkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGJhc2VDYXNlLCBfdjApIHtcblx0XHR2YXIgdHJlZSA9IF92MC5jO1xuXHRcdHZhciB0YWlsID0gX3YwLmQ7XG5cdFx0dmFyIGhlbHBlciA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKG5vZGUsIGFjYykge1xuXHRcdFx0XHRpZiAobm9kZS4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0XHR2YXIgc3ViVHJlZSA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoJGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyLCBoZWxwZXIsIGFjYywgc3ViVHJlZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoJGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyLCBmdW5jLCBhY2MsIHZhbHVlcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkcixcblx0XHRcdGhlbHBlcixcblx0XHRcdEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciwgZnVuYywgYmFzZUNhc2UsIHRhaWwpLFxuXHRcdFx0dHJlZSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRBcnJheSR0b0xpc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblx0cmV0dXJuIEEzKCRlbG0kY29yZSRBcnJheSRmb2xkciwgJGVsbSRjb3JlJExpc3QkY29ucywgX0xpc3RfTmlsLCBhcnJheSk7XG59O1xudmFyICRlbG0kY29yZSRSZXN1bHQkRXJyID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXJyJywgYTogYX07XG59O1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRGYWlsdXJlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmFpbHVyZScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkRmllbGQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdGaWVsZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkSW5kZXggPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdJbmRleCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkUmVzdWx0JE9rID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnT2snLCBhOiBhfTtcbn07XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJE9uZU9mID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnT25lT2YnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRGYWxzZSA9IHskOiAnRmFsc2UnfTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGFkZCA9IF9CYXNpY3NfYWRkO1xudmFyICRlbG0kY29yZSRNYXliZSRKdXN0ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnSnVzdCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJGNvcmUkTWF5YmUkTm90aGluZyA9IHskOiAnTm90aGluZyd9O1xudmFyICRlbG0kY29yZSRTdHJpbmckYWxsID0gX1N0cmluZ19hbGw7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRhbmQgPSBfQmFzaWNzX2FuZDtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGFwcGVuZCA9IF9VdGlsc19hcHBlbmQ7XG52YXIgJGVsbSRqc29uJEpzb24kRW5jb2RlJGVuY29kZSA9IF9Kc29uX2VuY29kZTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQgPSBfU3RyaW5nX2Zyb21OdW1iZXI7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRqb2luID0gRjIoXG5cdGZ1bmN0aW9uIChzZXAsIGNodW5rcykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9TdHJpbmdfam9pbixcblx0XHRcdHNlcCxcblx0XHRcdF9MaXN0X3RvQXJyYXkoY2h1bmtzKSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRTdHJpbmckc3BsaXQgPSBGMihcblx0ZnVuY3Rpb24gKHNlcCwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdEEyKF9TdHJpbmdfc3BsaXQsIHNlcCwgc3RyaW5nKSk7XG5cdH0pO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRpbmRlbnQgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0J1xcbiAgICAnLFxuXHRcdEEyKCRlbG0kY29yZSRTdHJpbmckc3BsaXQsICdcXG4nLCBzdHIpKTtcbn07XG52YXIgJGVsbSRjb3JlJExpc3QkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgbGlzdCkge1xuXHRcdGZvbGRsOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoIWxpc3QuYikge1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHggPSBsaXN0LmE7XG5cdFx0XHRcdHZhciB4cyA9IGxpc3QuYjtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEyKGZ1bmMsIHgsIGFjYyksXG5cdFx0XHRcdFx0JHRlbXAkbGlzdCA9IHhzO1xuXHRcdFx0XHRmdW5jID0gJHRlbXAkZnVuYztcblx0XHRcdFx0YWNjID0gJHRlbXAkYWNjO1xuXHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0Y29udGludWUgZm9sZGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkTGlzdCRsZW5ndGggPSBmdW5jdGlvbiAoeHMpIHtcblx0cmV0dXJuIEEzKFxuXHRcdCRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKF92MCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gaSArIDE7XG5cdFx0XHR9KSxcblx0XHQwLFxuXHRcdHhzKTtcbn07XG52YXIgJGVsbSRjb3JlJExpc3QkbWFwMiA9IF9MaXN0X21hcDI7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRsZSA9IF9VdGlsc19sZTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJHN1YiA9IF9CYXNpY3Nfc3ViO1xudmFyICRlbG0kY29yZSRMaXN0JHJhbmdlSGVscCA9IEYzKFxuXHRmdW5jdGlvbiAobG8sIGhpLCBsaXN0KSB7XG5cdFx0cmFuZ2VIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoX1V0aWxzX2NtcChsbywgaGkpIDwgMSkge1xuXHRcdFx0XHR2YXIgJHRlbXAkbG8gPSBsbyxcblx0XHRcdFx0XHQkdGVtcCRoaSA9IGhpIC0gMSxcblx0XHRcdFx0XHQkdGVtcCRsaXN0ID0gQTIoJGVsbSRjb3JlJExpc3QkY29ucywgaGksIGxpc3QpO1xuXHRcdFx0XHRsbyA9ICR0ZW1wJGxvO1xuXHRcdFx0XHRoaSA9ICR0ZW1wJGhpO1xuXHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0Y29udGludWUgcmFuZ2VIZWxwO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkTGlzdCRyYW5nZSA9IEYyKFxuXHRmdW5jdGlvbiAobG8sIGhpKSB7XG5cdFx0cmV0dXJuIEEzKCRlbG0kY29yZSRMaXN0JHJhbmdlSGVscCwgbG8sIGhpLCBfTGlzdF9OaWwpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JG1hcDIsXG5cdFx0XHRmLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JHJhbmdlLFxuXHRcdFx0XHQwLFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRsZW5ndGgoeHMpIC0gMSksXG5cdFx0XHR4cyk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRDaGFyJHRvQ29kZSA9IF9DaGFyX3RvQ29kZTtcbnZhciAkZWxtJGNvcmUkQ2hhciRpc0xvd2VyID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHZhciBjb2RlID0gJGVsbSRjb3JlJENoYXIkdG9Db2RlKF9jaGFyKTtcblx0cmV0dXJuICg5NyA8PSBjb2RlKSAmJiAoY29kZSA8PSAxMjIpO1xufTtcbnZhciAkZWxtJGNvcmUkQ2hhciRpc1VwcGVyID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHZhciBjb2RlID0gJGVsbSRjb3JlJENoYXIkdG9Db2RlKF9jaGFyKTtcblx0cmV0dXJuIChjb2RlIDw9IDkwKSAmJiAoNjUgPD0gY29kZSk7XG59O1xudmFyICRlbG0kY29yZSRCYXNpY3Mkb3IgPSBfQmFzaWNzX29yO1xudmFyICRlbG0kY29yZSRDaGFyJGlzQWxwaGEgPSBmdW5jdGlvbiAoX2NoYXIpIHtcblx0cmV0dXJuICRlbG0kY29yZSRDaGFyJGlzTG93ZXIoX2NoYXIpIHx8ICRlbG0kY29yZSRDaGFyJGlzVXBwZXIoX2NoYXIpO1xufTtcbnZhciAkZWxtJGNvcmUkQ2hhciRpc0RpZ2l0ID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHZhciBjb2RlID0gJGVsbSRjb3JlJENoYXIkdG9Db2RlKF9jaGFyKTtcblx0cmV0dXJuIChjb2RlIDw9IDU3KSAmJiAoNDggPD0gY29kZSk7XG59O1xudmFyICRlbG0kY29yZSRDaGFyJGlzQWxwaGFOdW0gPSBmdW5jdGlvbiAoX2NoYXIpIHtcblx0cmV0dXJuICRlbG0kY29yZSRDaGFyJGlzTG93ZXIoX2NoYXIpIHx8ICgkZWxtJGNvcmUkQ2hhciRpc1VwcGVyKF9jaGFyKSB8fCAkZWxtJGNvcmUkQ2hhciRpc0RpZ2l0KF9jaGFyKSk7XG59O1xudmFyICRlbG0kY29yZSRMaXN0JHJldmVyc2UgPSBmdW5jdGlvbiAobGlzdCkge1xuXHRyZXR1cm4gQTMoJGVsbSRjb3JlJExpc3QkZm9sZGwsICRlbG0kY29yZSRMaXN0JGNvbnMsIF9MaXN0X05pbCwgbGlzdCk7XG59O1xudmFyICRlbG0kY29yZSRTdHJpbmckdW5jb25zID0gX1N0cmluZ191bmNvbnM7XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yT25lT2YgPSBGMihcblx0ZnVuY3Rpb24gKGksIGVycm9yKSB7XG5cdFx0cmV0dXJuICdcXG5cXG4oJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSArIDEpICsgKCcpICcgKyAkZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50KFxuXHRcdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmcoZXJyb3IpKSkpO1xuXHR9KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JUb1N0cmluZyA9IGZ1bmN0aW9uIChlcnJvcikge1xuXHRyZXR1cm4gQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmdIZWxwLCBlcnJvciwgX0xpc3RfTmlsKTtcbn07XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmdIZWxwID0gRjIoXG5cdGZ1bmN0aW9uIChlcnJvciwgY29udGV4dCkge1xuXHRcdGVycm9yVG9TdHJpbmdIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRzd2l0Y2ggKGVycm9yLiQpIHtcblx0XHRcdFx0Y2FzZSAnRmllbGQnOlxuXHRcdFx0XHRcdHZhciBmID0gZXJyb3IuYTtcblx0XHRcdFx0XHR2YXIgZXJyID0gZXJyb3IuYjtcblx0XHRcdFx0XHR2YXIgaXNTaW1wbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR2YXIgX3YxID0gJGVsbSRjb3JlJFN0cmluZyR1bmNvbnMoZik7XG5cdFx0XHRcdFx0XHRpZiAoX3YxLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgX3YyID0gX3YxLmE7XG5cdFx0XHRcdFx0XHRcdHZhciBfY2hhciA9IF92Mi5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVzdCA9IF92Mi5iO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJENoYXIkaXNBbHBoYShfY2hhcikgJiYgQTIoJGVsbSRjb3JlJFN0cmluZyRhbGwsICRlbG0kY29yZSRDaGFyJGlzQWxwaGFOdW0sIHJlc3QpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHR2YXIgZmllbGROYW1lID0gaXNTaW1wbGUgPyAoJy4nICsgZikgOiAoJ1tcXCcnICsgKGYgKyAnXFwnXScpKTtcblx0XHRcdFx0XHR2YXIgJHRlbXAkZXJyb3IgPSBlcnIsXG5cdFx0XHRcdFx0XHQkdGVtcCRjb250ZXh0ID0gQTIoJGVsbSRjb3JlJExpc3QkY29ucywgZmllbGROYW1lLCBjb250ZXh0KTtcblx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdGNvbnRleHQgPSAkdGVtcCRjb250ZXh0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0dmFyIGkgPSBlcnJvci5hO1xuXHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvci5iO1xuXHRcdFx0XHRcdHZhciBpbmRleE5hbWUgPSAnWycgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkpICsgJ10nKTtcblx0XHRcdFx0XHR2YXIgJHRlbXAkZXJyb3IgPSBlcnIsXG5cdFx0XHRcdFx0XHQkdGVtcCRjb250ZXh0ID0gQTIoJGVsbSRjb3JlJExpc3QkY29ucywgaW5kZXhOYW1lLCBjb250ZXh0KTtcblx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdGNvbnRleHQgPSAkdGVtcCRjb250ZXh0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGVycm9yVG9TdHJpbmdIZWxwO1xuXHRcdFx0XHRjYXNlICdPbmVPZic6XG5cdFx0XHRcdFx0dmFyIGVycm9ycyA9IGVycm9yLmE7XG5cdFx0XHRcdFx0aWYgKCFlcnJvcnMuYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdSYW4gaW50byBhIEpzb24uRGVjb2RlLm9uZU9mIHdpdGggbm8gcG9zc2liaWxpdGllcycgKyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdGlmICghY29udGV4dC5iKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICchJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJyBhdCBqc29uJyArIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGNvbnRleHQpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIWVycm9ycy5iLmIpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGVyciA9IGVycm9ycy5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkZXJyb3IgPSBlcnIsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdFx0XHRcdGVycm9yID0gJHRlbXAkZXJyb3I7XG5cdFx0XHRcdFx0XHRcdGNvbnRleHQgPSAkdGVtcCRjb250ZXh0O1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZSBlcnJvclRvU3RyaW5nSGVscDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBzdGFydGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghY29udGV4dC5iKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJ0pzb24uRGVjb2RlLm9uZU9mJztcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICdUaGUgSnNvbi5EZWNvZGUub25lT2YgYXQganNvbicgKyBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBzdGFydGVyICsgKCcgZmFpbGVkIGluIHRoZSBmb2xsb3dpbmcgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbGVuZ3RoKGVycm9ycykpICsgJyB3YXlzOicpKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnXFxuXFxuJyxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnRyb2R1Y3Rpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkZXJyb3JPbmVPZiwgZXJyb3JzKSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR2YXIgbXNnID0gZXJyb3IuYTtcblx0XHRcdFx0XHR2YXIganNvbiA9IGVycm9yLmI7XG5cdFx0XHRcdFx0dmFyIGludHJvZHVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmICghY29udGV4dC5iKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnUHJvYmxlbSB3aXRoIHRoZSBnaXZlbiB2YWx1ZTpcXG5cXG4nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdQcm9ibGVtIHdpdGggdGhlIHZhbHVlIGF0IGpzb24nICsgKEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnJyxcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGNvbnRleHQpKSArICc6XFxuXFxuICAgICcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHRyZXR1cm4gaW50cm9kdWN0aW9uICsgKCRlbG0kanNvbiRKc29uJERlY29kZSRpbmRlbnQoXG5cdFx0XHRcdFx0XHRBMigkZWxtJGpzb24kSnNvbiRFbmNvZGUkZW5jb2RlLCA0LCBqc29uKSkgKyAoJ1xcblxcbicgKyBtc2cpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IgPSAzMjtcbnZhciAkZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4gPSBGNChcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4geyQ6ICdBcnJheV9lbG1fYnVpbHRpbicsIGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGR9O1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkgPSBfSnNBcnJheV9lbXB0eTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGNlaWxpbmcgPSBfQmFzaWNzX2NlaWxpbmc7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRmZGl2ID0gX0Jhc2ljc19mZGl2O1xudmFyICRlbG0kY29yZSRCYXNpY3MkbG9nQmFzZSA9IEYyKFxuXHRmdW5jdGlvbiAoYmFzZSwgbnVtYmVyKSB7XG5cdFx0cmV0dXJuIF9CYXNpY3NfbG9nKG51bWJlcikgLyBfQmFzaWNzX2xvZyhiYXNlKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyR0b0Zsb2F0ID0gX0Jhc2ljc190b0Zsb2F0O1xudmFyICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAgPSAkZWxtJGNvcmUkQmFzaWNzJGNlaWxpbmcoXG5cdEEyKCRlbG0kY29yZSRCYXNpY3MkbG9nQmFzZSwgMiwgJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvcikpO1xudmFyICRlbG0kY29yZSRBcnJheSRlbXB0eSA9IEE0KCRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgMCwgJGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCwgJGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5LCAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHkpO1xudmFyICRlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplID0gX0pzQXJyYXlfaW5pdGlhbGl6ZTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkTGVhZiA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0xlYWYnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRhcEwgPSBGMihcblx0ZnVuY3Rpb24gKGYsIHgpIHtcblx0XHRyZXR1cm4gZih4KTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRhcFIgPSBGMihcblx0ZnVuY3Rpb24gKHgsIGYpIHtcblx0XHRyZXR1cm4gZih4KTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRlcSA9IF9VdGlsc19lcXVhbDtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGZsb29yID0gX0Jhc2ljc19mbG9vcjtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoID0gX0pzQXJyYXlfbGVuZ3RoO1xudmFyICRlbG0kY29yZSRCYXNpY3MkZ3QgPSBfVXRpbHNfZ3Q7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRtYXggPSBGMihcblx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRyZXR1cm4gKF9VdGlsc19jbXAoeCwgeSkgPiAwKSA/IHggOiB5O1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJG11bCA9IF9CYXNpY3NfbXVsO1xudmFyICRlbG0kY29yZSRBcnJheSRTdWJUcmVlID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnU3ViVHJlZScsIGE6IGF9O1xufTtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0ID0gX0pzQXJyYXlfaW5pdGlhbGl6ZUZyb21MaXN0O1xudmFyICRlbG0kY29yZSRBcnJheSRjb21wcmVzc05vZGVzID0gRjIoXG5cdGZ1bmN0aW9uIChub2RlcywgYWNjKSB7XG5cdFx0Y29tcHJlc3NOb2Rlczpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplRnJvbUxpc3QsICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIG5vZGVzKTtcblx0XHRcdHZhciBub2RlID0gX3YwLmE7XG5cdFx0XHR2YXIgcmVtYWluaW5nTm9kZXMgPSBfdjAuYjtcblx0XHRcdHZhciBuZXdBY2MgPSBBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JFN1YlRyZWUobm9kZSksXG5cdFx0XHRcdGFjYyk7XG5cdFx0XHRpZiAoIXJlbWFpbmluZ05vZGVzLmIpIHtcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRMaXN0JHJldmVyc2UobmV3QWNjKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciAkdGVtcCRub2RlcyA9IHJlbWFpbmluZ05vZGVzLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IG5ld0FjYztcblx0XHRcdFx0bm9kZXMgPSAkdGVtcCRub2Rlcztcblx0XHRcdFx0YWNjID0gJHRlbXAkYWNjO1xuXHRcdFx0XHRjb250aW51ZSBjb21wcmVzc05vZGVzO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJFR1cGxlJGZpcnN0ID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgeCA9IF92MC5hO1xuXHRyZXR1cm4geDtcbn07XG52YXIgJGVsbSRjb3JlJEFycmF5JHRyZWVGcm9tQnVpbGRlciA9IEYyKFxuXHRmdW5jdGlvbiAobm9kZUxpc3QsIG5vZGVMaXN0U2l6ZSkge1xuXHRcdHRyZWVGcm9tQnVpbGRlcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIG5ld05vZGVTaXplID0gJGVsbSRjb3JlJEJhc2ljcyRjZWlsaW5nKG5vZGVMaXN0U2l6ZSAvICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpO1xuXHRcdFx0aWYgKG5ld05vZGVTaXplID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCBub2RlTGlzdCkuYTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciAkdGVtcCRub2RlTGlzdCA9IEEyKCRlbG0kY29yZSRBcnJheSRjb21wcmVzc05vZGVzLCBub2RlTGlzdCwgX0xpc3RfTmlsKSxcblx0XHRcdFx0XHQkdGVtcCRub2RlTGlzdFNpemUgPSBuZXdOb2RlU2l6ZTtcblx0XHRcdFx0bm9kZUxpc3QgPSAkdGVtcCRub2RlTGlzdDtcblx0XHRcdFx0bm9kZUxpc3RTaXplID0gJHRlbXAkbm9kZUxpc3RTaXplO1xuXHRcdFx0XHRjb250aW51ZSB0cmVlRnJvbUJ1aWxkZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkYnVpbGRlclRvQXJyYXkgPSBGMihcblx0ZnVuY3Rpb24gKHJldmVyc2VOb2RlTGlzdCwgYnVpbGRlcikge1xuXHRcdGlmICghYnVpbGRlci5ub2RlTGlzdFNpemUpIHtcblx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKGJ1aWxkZXIudGFpbCksXG5cdFx0XHRcdCRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSxcblx0XHRcdFx0YnVpbGRlci50YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHRyZWVMZW4gPSBidWlsZGVyLm5vZGVMaXN0U2l6ZSAqICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3I7XG5cdFx0XHR2YXIgZGVwdGggPSAkZWxtJGNvcmUkQmFzaWNzJGZsb29yKFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIHRyZWVMZW4gLSAxKSk7XG5cdFx0XHR2YXIgY29ycmVjdE5vZGVMaXN0ID0gcmV2ZXJzZU5vZGVMaXN0ID8gJGVsbSRjb3JlJExpc3QkcmV2ZXJzZShidWlsZGVyLm5vZGVMaXN0KSA6IGJ1aWxkZXIubm9kZUxpc3Q7XG5cdFx0XHR2YXIgdHJlZSA9IEEyKCRlbG0kY29yZSRBcnJheSR0cmVlRnJvbUJ1aWxkZXIsIGNvcnJlY3ROb2RlTGlzdCwgYnVpbGRlci5ub2RlTGlzdFNpemUpO1xuXHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgoYnVpbGRlci50YWlsKSArIHRyZWVMZW4sXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRCYXNpY3MkbWF4LCA1LCBkZXB0aCAqICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXApLFxuXHRcdFx0XHR0cmVlLFxuXHRcdFx0XHRidWlsZGVyLnRhaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRpZGl2ID0gX0Jhc2ljc19pZGl2O1xudmFyICRlbG0kY29yZSRCYXNpY3MkbHQgPSBfVXRpbHNfbHQ7XG52YXIgJGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemVIZWxwID0gRjUoXG5cdGZ1bmN0aW9uIChmbiwgZnJvbUluZGV4LCBsZW4sIG5vZGVMaXN0LCB0YWlsKSB7XG5cdFx0aW5pdGlhbGl6ZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChmcm9tSW5kZXggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkYnVpbGRlclRvQXJyYXksXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0e25vZGVMaXN0OiBub2RlTGlzdCwgbm9kZUxpc3RTaXplOiAobGVuIC8gJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvcikgfCAwLCB0YWlsOiB0YWlsfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbGVhZiA9ICRlbG0kY29yZSRBcnJheSRMZWFmKFxuXHRcdFx0XHRcdEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplLCAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCBmcm9tSW5kZXgsIGZuKSk7XG5cdFx0XHRcdHZhciAkdGVtcCRmbiA9IGZuLFxuXHRcdFx0XHRcdCR0ZW1wJGZyb21JbmRleCA9IGZyb21JbmRleCAtICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsXG5cdFx0XHRcdFx0JHRlbXAkbGVuID0gbGVuLFxuXHRcdFx0XHRcdCR0ZW1wJG5vZGVMaXN0ID0gQTIoJGVsbSRjb3JlJExpc3QkY29ucywgbGVhZiwgbm9kZUxpc3QpLFxuXHRcdFx0XHRcdCR0ZW1wJHRhaWwgPSB0YWlsO1xuXHRcdFx0XHRmbiA9ICR0ZW1wJGZuO1xuXHRcdFx0XHRmcm9tSW5kZXggPSAkdGVtcCRmcm9tSW5kZXg7XG5cdFx0XHRcdGxlbiA9ICR0ZW1wJGxlbjtcblx0XHRcdFx0bm9kZUxpc3QgPSAkdGVtcCRub2RlTGlzdDtcblx0XHRcdFx0dGFpbCA9ICR0ZW1wJHRhaWw7XG5cdFx0XHRcdGNvbnRpbnVlIGluaXRpYWxpemVIZWxwO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRyZW1haW5kZXJCeSA9IF9CYXNpY3NfcmVtYWluZGVyQnk7XG52YXIgJGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemUgPSBGMihcblx0ZnVuY3Rpb24gKGxlbiwgZm4pIHtcblx0XHRpZiAobGVuIDw9IDApIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkQXJyYXkkZW1wdHk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0YWlsTGVuID0gbGVuICUgJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcjtcblx0XHRcdHZhciB0YWlsID0gQTMoJGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemUsIHRhaWxMZW4sIGxlbiAtIHRhaWxMZW4sIGZuKTtcblx0XHRcdHZhciBpbml0aWFsRnJvbUluZGV4ID0gKGxlbiAtIHRhaWxMZW4pIC0gJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcjtcblx0XHRcdHJldHVybiBBNSgkZWxtJGNvcmUkQXJyYXkkaW5pdGlhbGl6ZUhlbHAsIGZuLCBpbml0aWFsRnJvbUluZGV4LCBsZW4sIF9MaXN0X05pbCwgdGFpbCk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJFRydWUgPSB7JDogJ1RydWUnfTtcbnZhciAkZWxtJGNvcmUkUmVzdWx0JGlzT2sgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdGlmIChyZXN1bHQuJCA9PT0gJ09rJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwID0gX0pzb25fbWFwMTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMiA9IF9Kc29uX21hcDI7XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQgPSBfSnNvbl9zdWNjZWVkO1xudmFyICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0b0hhbmRsZXJJbnQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRzd2l0Y2ggKGhhbmRsZXIuJCkge1xuXHRcdGNhc2UgJ05vcm1hbCc6XG5cdFx0XHRyZXR1cm4gMDtcblx0XHRjYXNlICdNYXlTdG9wUHJvcGFnYXRpb24nOlxuXHRcdFx0cmV0dXJuIDE7XG5cdFx0Y2FzZSAnTWF5UHJldmVudERlZmF1bHQnOlxuXHRcdFx0cmV0dXJuIDI7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAzO1xuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciRCcm93c2VyJEV4dGVybmFsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXh0ZXJuYWwnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRicm93c2VyJEJyb3dzZXIkSW50ZXJuYWwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdJbnRlcm5hbCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGlkZW50aXR5ID0gZnVuY3Rpb24gKHgpIHtcblx0cmV0dXJuIHg7XG59O1xudmFyICRlbG0kYnJvd3NlciRCcm93c2VyJERvbSROb3RGb3VuZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ05vdEZvdW5kJywgYTogYX07XG59O1xudmFyICRlbG0kdXJsJFVybCRIdHRwID0geyQ6ICdIdHRwJ307XG52YXIgJGVsbSR1cmwkVXJsJEh0dHBzID0geyQ6ICdIdHRwcyd9O1xudmFyICRlbG0kdXJsJFVybCRVcmwgPSBGNihcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBob3N0LCBwb3J0XywgcGF0aCwgcXVlcnksIGZyYWdtZW50KSB7XG5cdFx0cmV0dXJuIHtmcmFnbWVudDogZnJhZ21lbnQsIGhvc3Q6IGhvc3QsIHBhdGg6IHBhdGgsIHBvcnRfOiBwb3J0XywgcHJvdG9jb2w6IHByb3RvY29sLCBxdWVyeTogcXVlcnl9O1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGNvbnRhaW5zID0gX1N0cmluZ19jb250YWlucztcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGxlbmd0aCA9IF9TdHJpbmdfbGVuZ3RoO1xudmFyICRlbG0kY29yZSRTdHJpbmckc2xpY2UgPSBfU3RyaW5nX3NsaWNlO1xudmFyICRlbG0kY29yZSRTdHJpbmckZHJvcExlZnQgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHN0cmluZykge1xuXHRcdHJldHVybiAobiA8IDEpID8gc3RyaW5nIDogQTMoXG5cdFx0XHQkZWxtJGNvcmUkU3RyaW5nJHNsaWNlLFxuXHRcdFx0bixcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0cmluZyksXG5cdFx0XHRzdHJpbmcpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMgPSBfU3RyaW5nX2luZGV4ZXM7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nID09PSAnJztcbn07XG52YXIgJGVsbSRjb3JlJFN0cmluZyRsZWZ0ID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKG4gPCAxKSA/ICcnIDogQTMoJGVsbSRjb3JlJFN0cmluZyRzbGljZSwgMCwgbiwgc3RyaW5nKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFN0cmluZyR0b0ludCA9IF9TdHJpbmdfdG9JbnQ7XG52YXIgJGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCA9IEY1KFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIHBhdGgsIHBhcmFtcywgZnJhZywgc3RyKSB7XG5cdFx0aWYgKCRlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpIHx8IEEyKCRlbG0kY29yZSRTdHJpbmckY29udGFpbnMsICdAJywgc3RyKSkge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnOicsIHN0cik7XG5cdFx0XHRpZiAoIV92MC5iKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRBNigkZWxtJHVybCRVcmwkVXJsLCBwcm90b2NvbCwgc3RyLCAkZWxtJGNvcmUkTWF5YmUkTm90aGluZywgcGF0aCwgcGFyYW1zLCBmcmFnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIV92MC5iLmIpIHtcblx0XHRcdFx0XHR2YXIgaSA9IF92MC5hO1xuXHRcdFx0XHRcdHZhciBfdjEgPSAkZWxtJGNvcmUkU3RyaW5nJHRvSW50KFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSArIDEsIHN0cikpO1xuXHRcdFx0XHRcdGlmIChfdjEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBwb3J0XyA9IF92MTtcblx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRcdFx0QTYoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSR1cmwkVXJsJFVybCxcblx0XHRcdFx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0ciksXG5cdFx0XHRcdFx0XHRcdFx0cG9ydF8sXG5cdFx0XHRcdFx0XHRcdFx0cGF0aCxcblx0XHRcdFx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0ZnJhZykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5ID0gRjQoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgcGFyYW1zLCBmcmFnLCBzdHIpIHtcblx0XHRpZiAoJGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRTdHJpbmckaW5kZXhlcywgJy8nLCBzdHIpO1xuXHRcdFx0aWYgKCFfdjAuYikge1xuXHRcdFx0XHRyZXR1cm4gQTUoJGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCwgcHJvdG9jb2wsICcvJywgcGFyYW1zLCBmcmFnLCBzdHIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBfdjAuYTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdCRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVBhdGgsXG5cdFx0XHRcdFx0cHJvdG9jb2wsXG5cdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSwgc3RyKSxcblx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdFx0ZnJhZyxcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0cikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSR1cmwkVXJsJGNob21wQmVmb3JlRnJhZ21lbnQgPSBGMyhcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBmcmFnLCBzdHIpIHtcblx0XHRpZiAoJGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRTdHJpbmckaW5kZXhlcywgJz8nLCBzdHIpO1xuXHRcdFx0aWYgKCFfdjAuYikge1xuXHRcdFx0XHRyZXR1cm4gQTQoJGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUXVlcnksIHByb3RvY29sLCAkZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZnJhZywgc3RyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gX3YwLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHQkZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVRdWVyeSxcblx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKSxcblx0XHRcdFx0XHRmcmFnLFxuXHRcdFx0XHRcdEEyKCRlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJHVybCRVcmwkY2hvbXBBZnRlclByb3RvY29sID0gRjIoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgc3RyKSB7XG5cdFx0aWYgKCRlbG0kY29yZSRTdHJpbmckaXNFbXB0eShzdHIpKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfdjAgPSBBMigkZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICcjJywgc3RyKTtcblx0XHRcdGlmICghX3YwLmIpIHtcblx0XHRcdFx0cmV0dXJuIEEzKCRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZUZyYWdtZW50LCBwcm90b2NvbCwgJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsIHN0cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaSA9IF92MC5hO1xuXHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0JGVsbSR1cmwkVXJsJGNob21wQmVmb3JlRnJhZ21lbnQsXG5cdFx0XHRcdFx0cHJvdG9jb2wsXG5cdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCBpICsgMSwgc3RyKSksXG5cdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFN0cmluZyRsZWZ0LCBpLCBzdHIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRTdHJpbmckc3RhcnRzV2l0aCA9IF9TdHJpbmdfc3RhcnRzV2l0aDtcbnZhciAkZWxtJHVybCRVcmwkZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRTdHJpbmckc3RhcnRzV2l0aCwgJ2h0dHA6Ly8nLCBzdHIpID8gQTIoXG5cdFx0JGVsbSR1cmwkVXJsJGNob21wQWZ0ZXJQcm90b2NvbCxcblx0XHQkZWxtJHVybCRVcmwkSHR0cCxcblx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCA3LCBzdHIpKSA6IChBMigkZWxtJGNvcmUkU3RyaW5nJHN0YXJ0c1dpdGgsICdodHRwczovLycsIHN0cikgPyBBMihcblx0XHQkZWxtJHVybCRVcmwkY2hvbXBBZnRlclByb3RvY29sLFxuXHRcdCRlbG0kdXJsJFVybCRIdHRwcyxcblx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCA4LCBzdHIpKSA6ICRlbG0kY29yZSRNYXliZSROb3RoaW5nKTtcbn07XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRuZXZlciA9IGZ1bmN0aW9uIChfdjApIHtcblx0bmV2ZXI6XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0dmFyIG52ciA9IF92MC5hO1xuXHRcdHZhciAkdGVtcCRfdjAgPSBudnI7XG5cdFx0X3YwID0gJHRlbXAkX3YwO1xuXHRcdGNvbnRpbnVlIG5ldmVyO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSRUYXNrJFBlcmZvcm0gPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdQZXJmb3JtJywgYTogYX07XG59O1xudmFyICRlbG0kY29yZSRUYXNrJHN1Y2NlZWQgPSBfU2NoZWR1bGVyX3N1Y2NlZWQ7XG52YXIgJGVsbSRjb3JlJFRhc2skaW5pdCA9ICRlbG0kY29yZSRUYXNrJHN1Y2NlZWQoX1V0aWxzX1R1cGxlMCk7XG52YXIgJGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIgPSBGNChcblx0ZnVuY3Rpb24gKGZuLCBhY2MsIGN0ciwgbHMpIHtcblx0XHRpZiAoIWxzLmIpIHtcblx0XHRcdHJldHVybiBhY2M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBhID0gbHMuYTtcblx0XHRcdHZhciByMSA9IGxzLmI7XG5cdFx0XHRpZiAoIXIxLmIpIHtcblx0XHRcdFx0cmV0dXJuIEEyKGZuLCBhLCBhY2MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGIgPSByMS5hO1xuXHRcdFx0XHR2YXIgcjIgPSByMS5iO1xuXHRcdFx0XHRpZiAoIXIyLmIpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRBMihmbiwgYiwgYWNjKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGMgPSByMi5hO1xuXHRcdFx0XHRcdHZhciByMyA9IHIyLmI7XG5cdFx0XHRcdFx0aWYgKCFyMy5iKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRiLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGZuLCBjLCBhY2MpKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBkID0gcjMuYTtcblx0XHRcdFx0XHRcdHZhciByNCA9IHIzLmI7XG5cdFx0XHRcdFx0XHR2YXIgcmVzID0gKGN0ciA+IDUwMCkgPyBBMyhcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhY2MsXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JHJldmVyc2UocjQpKSA6IEE0KCRlbG0kY29yZSRMaXN0JGZvbGRySGVscGVyLCBmbiwgYWNjLCBjdHIgKyAxLCByNCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRiLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdFx0XHRjLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZm4sIGQsIHJlcykpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkTGlzdCRmb2xkciA9IEYzKFxuXHRmdW5jdGlvbiAoZm4sIGFjYywgbHMpIHtcblx0XHRyZXR1cm4gQTQoJGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIsIGZuLCBhY2MsIDAsIGxzKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0RjIoXG5cdFx0XHRcdGZ1bmN0aW9uICh4LCBhY2MpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0Zih4KSxcblx0XHRcdFx0XHRcdGFjYyk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkVGFzayRhbmRUaGVuID0gX1NjaGVkdWxlcl9hbmRUaGVuO1xudmFyICRlbG0kY29yZSRUYXNrJG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgdGFza0EpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0ZnVuYyhhKSk7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkVGFzayRtYXAyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCB0YXNrQSwgdGFza0IpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRBMihmdW5jLCBhLCBiKSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0YXNrQik7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkVGFzayRzZXF1ZW5jZSA9IGZ1bmN0aW9uICh0YXNrcykge1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0JGVsbSRjb3JlJFRhc2skbWFwMigkZWxtJGNvcmUkTGlzdCRjb25zKSxcblx0XHQkZWxtJGNvcmUkVGFzayRzdWNjZWVkKF9MaXN0X05pbCksXG5cdFx0dGFza3MpO1xufTtcbnZhciAkZWxtJGNvcmUkUGxhdGZvcm0kc2VuZFRvQXBwID0gX1BsYXRmb3JtX3NlbmRUb0FwcDtcbnZhciAkZWxtJGNvcmUkVGFzayRzcGF3bkNtZCA9IEYyKFxuXHRmdW5jdGlvbiAocm91dGVyLCBfdjApIHtcblx0XHR2YXIgdGFzayA9IF92MC5hO1xuXHRcdHJldHVybiBfU2NoZWR1bGVyX3NwYXduKFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdCRlbG0kY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAocm91dGVyKSxcblx0XHRcdFx0dGFzaykpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkVGFzayRvbkVmZmVjdHMgPSBGMyhcblx0ZnVuY3Rpb24gKHJvdXRlciwgY29tbWFuZHMsIHN0YXRlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRjb3JlJFRhc2skbWFwLFxuXHRcdFx0ZnVuY3Rpb24gKF92MCkge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0XHRcdH0sXG5cdFx0XHQkZWxtJGNvcmUkVGFzayRzZXF1ZW5jZShcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRUYXNrJHNwYXduQ21kKHJvdXRlciksXG5cdFx0XHRcdFx0Y29tbWFuZHMpKSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRUYXNrJG9uU2VsZk1zZyA9IEYzKFxuXHRmdW5jdGlvbiAoX3YwLCBfdjEsIF92Mikge1xuXHRcdHJldHVybiAkZWxtJGNvcmUkVGFzayRzdWNjZWVkKF9VdGlsc19UdXBsZTApO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkVGFzayRjbWRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKHRhZ2dlciwgX3YwKSB7XG5cdFx0dmFyIHRhc2sgPSBfdjAuYTtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJFRhc2skUGVyZm9ybShcblx0XHRcdEEyKCRlbG0kY29yZSRUYXNrJG1hcCwgdGFnZ2VyLCB0YXNrKSk7XG5cdH0pO1xuX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzWydUYXNrJ10gPSBfUGxhdGZvcm1fY3JlYXRlTWFuYWdlcigkZWxtJGNvcmUkVGFzayRpbml0LCAkZWxtJGNvcmUkVGFzayRvbkVmZmVjdHMsICRlbG0kY29yZSRUYXNrJG9uU2VsZk1zZywgJGVsbSRjb3JlJFRhc2skY21kTWFwKTtcbnZhciAkZWxtJGNvcmUkVGFzayRjb21tYW5kID0gX1BsYXRmb3JtX2xlYWYoJ1Rhc2snKTtcbnZhciAkZWxtJGNvcmUkVGFzayRwZXJmb3JtID0gRjIoXG5cdGZ1bmN0aW9uICh0b01lc3NhZ2UsIHRhc2spIHtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJFRhc2skY29tbWFuZChcblx0XHRcdCRlbG0kY29yZSRUYXNrJFBlcmZvcm0oXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRUYXNrJG1hcCwgdG9NZXNzYWdlLCB0YXNrKSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkQnJvd3NlciRlbGVtZW50ID0gX0Jyb3dzZXJfZWxlbWVudDtcbnZhciAkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJGJhdGNoID0gX1BsYXRmb3JtX2JhdGNoO1xudmFyICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSA9ICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkYmF0Y2goX0xpc3RfTmlsKTtcbnZhciAkYXV0aG9yJHByb2plY3QkTWFpbiRpbml0ID0gZnVuY3Rpb24gKF92MCkge1xuXHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHR7fSxcblx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xufTtcbnZhciAkZWxtJGNvcmUkUGxhdGZvcm0kU3ViJGJhdGNoID0gX1BsYXRmb3JtX2JhdGNoO1xudmFyICRlbG0kY29yZSRQbGF0Zm9ybSRTdWIkbm9uZSA9ICRlbG0kY29yZSRQbGF0Zm9ybSRTdWIkYmF0Y2goX0xpc3RfTmlsKTtcbnZhciAkYXV0aG9yJHByb2plY3QkTWFpbiR1cGRhdGUgPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgbW9kZWwpIHtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgJGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENvbG9yZWQgPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdDb2xvcmVkJywgYTogYSwgYjogYiwgYzogY307XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZUNsYXNzID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnU3R5bGVDbGFzcycsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRGbGFnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRmxhZycsIGE6IGF9O1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRTZWNvbmQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTZWNvbmQnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRjb3JlJEJpdHdpc2Ukc2hpZnRMZWZ0QnkgPSBfQml0d2lzZV9zaGlmdExlZnRCeTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnID0gZnVuY3Rpb24gKGkpIHtcblx0cmV0dXJuIChpID4gMzEpID8gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckU2Vjb25kKDEgPDwgKGkgLSAzMikpIDogJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckRmxhZygxIDw8IGkpO1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRiZ0NvbG9yID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZyg4KTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJHJvdW5kID0gX0Jhc2ljc19yb3VuZDtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmxvYXRDbGFzcyA9IGZ1bmN0aW9uICh4KSB7XG5cdHJldHVybiAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0JGVsbSRjb3JlJEJhc2ljcyRyb3VuZCh4ICogMjU1KSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvckNsYXNzID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgcmVkID0gX3YwLmE7XG5cdHZhciBncmVlbiA9IF92MC5iO1xuXHR2YXIgYmx1ZSA9IF92MC5jO1xuXHR2YXIgYWxwaGEgPSBfdjAuZDtcblx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmbG9hdENsYXNzKHJlZCkgKyAoJy0nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmbG9hdENsYXNzKGdyZWVuKSArICgnLScgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3MoYmx1ZSkgKyAoJy0nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3MoYWxwaGEpKSkpKSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JEJhY2tncm91bmQkY29sb3IgPSBmdW5jdGlvbiAoY2xyKSB7XG5cdHJldHVybiBBMihcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU3R5bGVDbGFzcyxcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRiZ0NvbG9yLFxuXHRcdEEzKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENvbG9yZWQsXG5cdFx0XHQnYmctJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvckNsYXNzKGNsciksXG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcicsXG5cdFx0XHRjbHIpKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZm9udENvbG9yID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZygxNCk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkRm9udCRjb2xvciA9IGZ1bmN0aW9uIChmb250Q29sb3IpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZUNsYXNzLFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZvbnRDb2xvcixcblx0XHRBMyhcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDb2xvcmVkLFxuXHRcdFx0J2ZjLScgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9ybWF0Q29sb3JDbGFzcyhmb250Q29sb3IpLFxuXHRcdFx0J2NvbG9yJyxcblx0XHRcdGZvbnRDb2xvcikpO1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUmdiYSA9IEY0KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuXHRcdHJldHVybiB7JDogJ1JnYmEnLCBhOiBhLCBiOiBiLCBjOiBjLCBkOiBkfTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkcmdiMjU1ID0gRjMoXG5cdGZ1bmN0aW9uIChyZWQsIGdyZWVuLCBibHVlKSB7XG5cdFx0cmV0dXJuIEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRSZ2JhLCByZWQgLyAyNTUsIGdyZWVuIC8gMjU1LCBibHVlIC8gMjU1LCAxKTtcblx0fSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JE1haW4kY29sb3JzID0ge1xuXHRhY2NlbnQ6IEEzKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHJnYjI1NSwgMjA0LCAyNDAsIDI1NSksXG5cdGJhY2tncm91bmQ6IEEzKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHJnYjI1NSwgNTQsIDU0LCA1NCksXG5cdGJhY2tncm91bmRTZWNvbmRhcnk6IEEzKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHJnYjI1NSwgOTAsIDgzLCAxNjcpLFxuXHRmb250OiBBMygkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRyZ2IyNTUsIDIyNywgMjI3LCAyMjcpXG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRVbmtleWVkID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnVW5rZXllZCcsIGE6IGF9O1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQXNDb2x1bW4gPSB7JDogJ0FzQ29sdW1uJ307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFzQ29sdW1uID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEFzQ29sdW1uO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzID0ge2Fib3ZlOiAnYScsIGFjdGl2ZTogJ2F0dicsIGFsaWduQm90dG9tOiAnYWInLCBhbGlnbkNlbnRlclg6ICdjeCcsIGFsaWduQ2VudGVyWTogJ2N5JywgYWxpZ25Db250YWluZXJCb3R0b206ICdhY2InLCBhbGlnbkNvbnRhaW5lckNlbnRlclg6ICdhY2N4JywgYWxpZ25Db250YWluZXJDZW50ZXJZOiAnYWNjeScsIGFsaWduQ29udGFpbmVyUmlnaHQ6ICdhY3InLCBhbGlnbkxlZnQ6ICdhbCcsIGFsaWduUmlnaHQ6ICdhcicsIGFsaWduVG9wOiAnYXQnLCBhbGlnbmVkSG9yaXpvbnRhbGx5OiAnYWgnLCBhbGlnbmVkVmVydGljYWxseTogJ2F2JywgYW55OiAncycsIGJlaGluZDogJ2JoJywgYmVsb3c6ICdiJywgYm9sZDogJ3c3JywgYm9yZGVyRGFzaGVkOiAnYmQnLCBib3JkZXJEb3R0ZWQ6ICdiZHQnLCBib3JkZXJOb25lOiAnYm4nLCBib3JkZXJTb2xpZDogJ2JzJywgY2FwdHVyZVBvaW50ZXJFdmVudHM6ICdjcGUnLCBjbGlwOiAnY3AnLCBjbGlwWDogJ2NweCcsIGNsaXBZOiAnY3B5JywgY29sdW1uOiAnYycsIGNvbnRhaW5lcjogJ2N0cicsIGNvbnRlbnRCb3R0b206ICdjYicsIGNvbnRlbnRDZW50ZXJYOiAnY2N4JywgY29udGVudENlbnRlclk6ICdjY3knLCBjb250ZW50TGVmdDogJ2NsJywgY29udGVudFJpZ2h0OiAnY3InLCBjb250ZW50VG9wOiAnY3QnLCBjdXJzb3JQb2ludGVyOiAnY3B0cicsIGN1cnNvclRleHQ6ICdjdHh0JywgZm9jdXM6ICdmY3MnLCBmb2N1c2VkV2l0aGluOiAnZm9jdXMtd2l0aGluJywgZnVsbFNpemU6ICdmcycsIGdyaWQ6ICdnJywgaGFzQmVoaW5kOiAnaGJoJywgaGVpZ2h0Q29udGVudDogJ2hjJywgaGVpZ2h0RXhhY3Q6ICdoZScsIGhlaWdodEZpbGw6ICdoZicsIGhlaWdodEZpbGxQb3J0aW9uOiAnaGZwJywgaG92ZXI6ICdodicsIGltYWdlQ29udGFpbmVyOiAnaWMnLCBpbkZyb250OiAnZnInLCBpbnB1dExhYmVsOiAnbGJsJywgaW5wdXRNdWx0aWxpbmU6ICdpbWwnLCBpbnB1dE11bHRpbGluZUZpbGxlcjogJ2ltbGYnLCBpbnB1dE11bHRpbGluZVBhcmVudDogJ2ltbHAnLCBpbnB1dE11bHRpbGluZVdyYXBwZXI6ICdpbXBsdycsIGlucHV0VGV4dDogJ2l0JywgaXRhbGljOiAnaScsIGxpbms6ICdsbmsnLCBuZWFyYnk6ICduYicsIG5vVGV4dFNlbGVjdGlvbjogJ25vdHh0Jywgb25MZWZ0OiAnb2wnLCBvblJpZ2h0OiAnb3InLCBvcGFxdWU6ICdvcScsIG92ZXJmbG93SGlkZGVuOiAnb2gnLCBwYWdlOiAncGcnLCBwYXJhZ3JhcGg6ICdwJywgcGFzc1BvaW50ZXJFdmVudHM6ICdwcGUnLCByb290OiAndWknLCByb3c6ICdyJywgc2Nyb2xsYmFyczogJ3NiJywgc2Nyb2xsYmFyc1g6ICdzYngnLCBzY3JvbGxiYXJzWTogJ3NieScsIHNlQnV0dG9uOiAnc2J0Jywgc2luZ2xlOiAnZScsIHNpemVCeUNhcGl0YWw6ICdjYXAnLCBzcGFjZUV2ZW5seTogJ3NldicsIHN0cmlrZTogJ3NrJywgdGV4dDogJ3QnLCB0ZXh0Q2VudGVyOiAndGMnLCB0ZXh0RXh0cmFCb2xkOiAndzgnLCB0ZXh0RXh0cmFMaWdodDogJ3cyJywgdGV4dEhlYXZ5OiAndzknLCB0ZXh0SnVzdGlmeTogJ3RqJywgdGV4dEp1c3RpZnlBbGw6ICd0amEnLCB0ZXh0TGVmdDogJ3RsJywgdGV4dExpZ2h0OiAndzMnLCB0ZXh0TWVkaXVtOiAndzUnLCB0ZXh0Tm9ybWFsV2VpZ2h0OiAndzQnLCB0ZXh0UmlnaHQ6ICd0cicsIHRleHRTZW1pQm9sZDogJ3c2JywgdGV4dFRoaW46ICd3MScsIHRleHRVbml0YWxpY2l6ZWQ6ICd0dW4nLCB0cmFuc2l0aW9uOiAndHMnLCB0cmFuc3BhcmVudDogJ2NscicsIHVuZGVybGluZTogJ3UnLCB3aWR0aENvbnRlbnQ6ICd3YycsIHdpZHRoRXhhY3Q6ICd3ZScsIHdpZHRoRmlsbDogJ3dmJywgd2lkdGhGaWxsUG9ydGlvbjogJ3dmcCcsIHdyYXBwZWQ6ICd3cnAnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkR2VuZXJpYyA9IHskOiAnR2VuZXJpYyd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRkaXYgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkR2VuZXJpYztcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkTm9OZWFyYnlDaGlsZHJlbiA9IHskOiAnTm9OZWFyYnlDaGlsZHJlbid9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRjb2x1bW5DbGFzcyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICgnICcgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb2x1bW4pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRncmlkQ2xhc3MgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuZ3JpZCk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHBhZ2VDbGFzcyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICgnICcgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5wYWdlKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcGFyYWdyYXBoQ2xhc3MgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucGFyYWdyYXBoKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcm93Q2xhc3MgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucm93KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkc2luZ2xlQ2xhc3MgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkY29udGV4dENsYXNzZXMgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuXHRzd2l0Y2ggKGNvbnRleHQuJCkge1xuXHRcdGNhc2UgJ0FzUm93Jzpcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcm93Q2xhc3M7XG5cdFx0Y2FzZSAnQXNDb2x1bW4nOlxuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRjb2x1bW5DbGFzcztcblx0XHRjYXNlICdBc0VsJzpcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkc2luZ2xlQ2xhc3M7XG5cdFx0Y2FzZSAnQXNHcmlkJzpcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZ3JpZENsYXNzO1xuXHRcdGNhc2UgJ0FzUGFyYWdyYXBoJzpcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcGFyYWdyYXBoQ2xhc3M7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcGFnZUNsYXNzO1xuXHR9XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRLZXllZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0tleWVkJywgYTogYX07XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCROb1N0eWxlU2hlZXQgPSB7JDogJ05vU3R5bGVTaGVldCd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZWQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTdHlsZWQnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFVuc3R5bGVkID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnVW5zdHlsZWQnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZENoaWxkcmVuID0gRjIoXG5cdGZ1bmN0aW9uIChleGlzdGluZywgbmVhcmJ5Q2hpbGRyZW4pIHtcblx0XHRzd2l0Y2ggKG5lYXJieUNoaWxkcmVuLiQpIHtcblx0XHRcdGNhc2UgJ05vTmVhcmJ5Q2hpbGRyZW4nOlxuXHRcdFx0XHRyZXR1cm4gZXhpc3Rpbmc7XG5cdFx0XHRjYXNlICdDaGlsZHJlbkJlaGluZCc6XG5cdFx0XHRcdHZhciBiZWhpbmQgPSBuZWFyYnlDaGlsZHJlbi5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX2FwKGJlaGluZCwgZXhpc3RpbmcpO1xuXHRcdFx0Y2FzZSAnQ2hpbGRyZW5JbkZyb250Jzpcblx0XHRcdFx0dmFyIGluRnJvbnQgPSBuZWFyYnlDaGlsZHJlbi5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX2FwKGV4aXN0aW5nLCBpbkZyb250KTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBiZWhpbmQgPSBuZWFyYnlDaGlsZHJlbi5hO1xuXHRcdFx0XHR2YXIgaW5Gcm9udCA9IG5lYXJieUNoaWxkcmVuLmI7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfYXAoXG5cdFx0XHRcdFx0YmVoaW5kLFxuXHRcdFx0XHRcdF9VdGlsc19hcChleGlzdGluZywgaW5Gcm9udCkpO1xuXHRcdH1cblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZEtleWVkQ2hpbGRyZW4gPSBGMyhcblx0ZnVuY3Rpb24gKGtleSwgZXhpc3RpbmcsIG5lYXJieUNoaWxkcmVuKSB7XG5cdFx0c3dpdGNoIChuZWFyYnlDaGlsZHJlbi4kKSB7XG5cdFx0XHRjYXNlICdOb05lYXJieUNoaWxkcmVuJzpcblx0XHRcdFx0cmV0dXJuIGV4aXN0aW5nO1xuXHRcdFx0Y2FzZSAnQ2hpbGRyZW5CZWhpbmQnOlxuXHRcdFx0XHR2YXIgYmVoaW5kID0gbmVhcmJ5Q2hpbGRyZW4uYTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19hcChcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKGtleSwgeCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0YmVoaW5kKSxcblx0XHRcdFx0XHRleGlzdGluZyk7XG5cdFx0XHRjYXNlICdDaGlsZHJlbkluRnJvbnQnOlxuXHRcdFx0XHR2YXIgaW5Gcm9udCA9IG5lYXJieUNoaWxkcmVuLmE7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfYXAoXG5cdFx0XHRcdFx0ZXhpc3RpbmcsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihrZXksIHgpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGluRnJvbnQpKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBiZWhpbmQgPSBuZWFyYnlDaGlsZHJlbi5hO1xuXHRcdFx0XHR2YXIgaW5Gcm9udCA9IG5lYXJieUNoaWxkcmVuLmI7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfYXAoXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihrZXksIHgpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGJlaGluZCksXG5cdFx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdFx0ZXhpc3RpbmcsXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKGtleSwgeCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGluRnJvbnQpKSk7XG5cdFx0fVxuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQXNFbCA9IHskOiAnQXNFbCd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc0VsID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEFzRWw7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEFzUGFyYWdyYXBoID0geyQ6ICdBc1BhcmFncmFwaCd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc1BhcmFncmFwaCA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBc1BhcmFncmFwaDtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhbGlnbkJvdHRvbSA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoNDEpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFsaWduUmlnaHQgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnKDQwKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRjZW50ZXJYID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZyg0Mik7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckY2VudGVyWSA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoNDMpO1xudmFyICRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcgPSBfSnNvbl93cmFwO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkgPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X1ZpcnR1YWxEb21fcHJvcGVydHksXG5cdFx0XHRrZXksXG5cdFx0XHQkZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKHN0cmluZykpO1xuXHR9KTtcbnZhciAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzID0gJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgnY2xhc3NOYW1lJyk7XG52YXIgJGVsbSRodG1sJEh0bWwkZGl2ID0gX1ZpcnR1YWxEb21fbm9kZSgnZGl2Jyk7XG52YXIgJGVsbSRjb3JlJFNldCRTZXRfZWxtX2J1aWx0aW4gPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTZXRfZWxtX2J1aWx0aW4nLCBhOiBhfTtcbn07XG52YXIgJGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbiA9IHskOiAnUkJFbXB0eV9lbG1fYnVpbHRpbid9O1xudmFyICRlbG0kY29yZSREaWN0JGVtcHR5ID0gJGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbjtcbnZhciAkZWxtJGNvcmUkU2V0JGVtcHR5ID0gJGVsbSRjb3JlJFNldCRTZXRfZWxtX2J1aWx0aW4oJGVsbSRjb3JlJERpY3QkZW1wdHkpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRsZW5ndGhDbGFzc05hbWUgPSBmdW5jdGlvbiAoeCkge1xuXHRzd2l0Y2ggKHguJCkge1xuXHRcdGNhc2UgJ1B4Jzpcblx0XHRcdHZhciBweCA9IHguYTtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocHgpICsgJ3B4Jztcblx0XHRjYXNlICdDb250ZW50Jzpcblx0XHRcdHJldHVybiAnYXV0byc7XG5cdFx0Y2FzZSAnRmlsbCc6XG5cdFx0XHR2YXIgaSA9IHguYTtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSkgKyAnZnInO1xuXHRcdGNhc2UgJ01pbic6XG5cdFx0XHR2YXIgbWluID0geC5hO1xuXHRcdFx0dmFyIGxlbiA9IHguYjtcblx0XHRcdHJldHVybiAnbWluJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobWluKSArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRsZW5ndGhDbGFzc05hbWUobGVuKSk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBtYXggPSB4LmE7XG5cdFx0XHR2YXIgbGVuID0geC5iO1xuXHRcdFx0cmV0dXJuICdtYXgnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChtYXgpICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGxlbmd0aENsYXNzTmFtZShsZW4pKTtcblx0fVxufTtcbnZhciAkZWxtJGNvcmUkVHVwbGUkc2Vjb25kID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgeSA9IF92MC5iO1xuXHRyZXR1cm4geTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRyYW5zZm9ybUNsYXNzID0gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuXHRzd2l0Y2ggKHRyYW5zZm9ybS4kKSB7XG5cdFx0Y2FzZSAnVW50cmFuc2Zvcm1lZCc6XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0Y2FzZSAnTW92ZWQnOlxuXHRcdFx0dmFyIF92MSA9IHRyYW5zZm9ybS5hO1xuXHRcdFx0dmFyIHggPSBfdjEuYTtcblx0XHRcdHZhciB5ID0gX3YxLmI7XG5cdFx0XHR2YXIgeiA9IF92MS5jO1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHQnbXYtJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmxvYXRDbGFzcyh4KSArICgnLScgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3MoeSkgKyAoJy0nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3MoeikpKSkpKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFyIF92MiA9IHRyYW5zZm9ybS5hO1xuXHRcdFx0dmFyIHR4ID0gX3YyLmE7XG5cdFx0XHR2YXIgdHkgPSBfdjIuYjtcblx0XHRcdHZhciB0eiA9IF92Mi5jO1xuXHRcdFx0dmFyIF92MyA9IHRyYW5zZm9ybS5iO1xuXHRcdFx0dmFyIHN4ID0gX3YzLmE7XG5cdFx0XHR2YXIgc3kgPSBfdjMuYjtcblx0XHRcdHZhciBzeiA9IF92My5jO1xuXHRcdFx0dmFyIF92NCA9IHRyYW5zZm9ybS5jO1xuXHRcdFx0dmFyIG94ID0gX3Y0LmE7XG5cdFx0XHR2YXIgb3kgPSBfdjQuYjtcblx0XHRcdHZhciBveiA9IF92NC5jO1xuXHRcdFx0dmFyIGFuZ2xlID0gdHJhbnNmb3JtLmQ7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdCd0ZnJtLScgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3ModHgpICsgKCctJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmxvYXRDbGFzcyh0eSkgKyAoJy0nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmbG9hdENsYXNzKHR6KSArICgnLScgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3Moc3gpICsgKCctJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmxvYXRDbGFzcyhzeSkgKyAoJy0nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmbG9hdENsYXNzKHN6KSArICgnLScgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZsb2F0Q2xhc3Mob3gpICsgKCctJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmxvYXRDbGFzcyhveSkgKyAoJy0nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmbG9hdENsYXNzKG96KSArICgnLScgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmxvYXRDbGFzcyhhbmdsZSkpKSkpKSkpKSkpKSkpKSkpKSkpO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSRNYXliZSR3aXRoRGVmYXVsdCA9IEYyKFxuXHRmdW5jdGlvbiAoX2RlZmF1bHQsIG1heWJlKSB7XG5cdFx0aWYgKG1heWJlLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHZhbHVlID0gbWF5YmUuYTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9kZWZhdWx0O1xuXHRcdH1cblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGdldFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuXHRzd2l0Y2ggKHN0eWxlLiQpIHtcblx0XHRjYXNlICdTaGFkb3dzJzpcblx0XHRcdHZhciBuYW1lID0gc3R5bGUuYTtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdGNhc2UgJ1RyYW5zcGFyZW5jeSc6XG5cdFx0XHR2YXIgbmFtZSA9IHN0eWxlLmE7XG5cdFx0XHR2YXIgbyA9IHN0eWxlLmI7XG5cdFx0XHRyZXR1cm4gbmFtZTtcblx0XHRjYXNlICdTdHlsZSc6XG5cdFx0XHR2YXIgX2NsYXNzID0gc3R5bGUuYTtcblx0XHRcdHJldHVybiBfY2xhc3M7XG5cdFx0Y2FzZSAnRm9udEZhbWlseSc6XG5cdFx0XHR2YXIgbmFtZSA9IHN0eWxlLmE7XG5cdFx0XHRyZXR1cm4gbmFtZTtcblx0XHRjYXNlICdGb250U2l6ZSc6XG5cdFx0XHR2YXIgaSA9IHN0eWxlLmE7XG5cdFx0XHRyZXR1cm4gJ2ZvbnQtc2l6ZS0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkpO1xuXHRcdGNhc2UgJ1NpbmdsZSc6XG5cdFx0XHR2YXIgX2NsYXNzID0gc3R5bGUuYTtcblx0XHRcdHJldHVybiBfY2xhc3M7XG5cdFx0Y2FzZSAnQ29sb3JlZCc6XG5cdFx0XHR2YXIgX2NsYXNzID0gc3R5bGUuYTtcblx0XHRcdHJldHVybiBfY2xhc3M7XG5cdFx0Y2FzZSAnU3BhY2luZ1N0eWxlJzpcblx0XHRcdHZhciBjbHMgPSBzdHlsZS5hO1xuXHRcdFx0dmFyIHggPSBzdHlsZS5iO1xuXHRcdFx0dmFyIHkgPSBzdHlsZS5jO1xuXHRcdFx0cmV0dXJuIGNscztcblx0XHRjYXNlICdQYWRkaW5nU3R5bGUnOlxuXHRcdFx0dmFyIGNscyA9IHN0eWxlLmE7XG5cdFx0XHR2YXIgdG9wID0gc3R5bGUuYjtcblx0XHRcdHZhciByaWdodCA9IHN0eWxlLmM7XG5cdFx0XHR2YXIgYm90dG9tID0gc3R5bGUuZDtcblx0XHRcdHZhciBsZWZ0ID0gc3R5bGUuZTtcblx0XHRcdHJldHVybiBjbHM7XG5cdFx0Y2FzZSAnQm9yZGVyV2lkdGgnOlxuXHRcdFx0dmFyIGNscyA9IHN0eWxlLmE7XG5cdFx0XHR2YXIgdG9wID0gc3R5bGUuYjtcblx0XHRcdHZhciByaWdodCA9IHN0eWxlLmM7XG5cdFx0XHR2YXIgYm90dG9tID0gc3R5bGUuZDtcblx0XHRcdHZhciBsZWZ0ID0gc3R5bGUuZTtcblx0XHRcdHJldHVybiBjbHM7XG5cdFx0Y2FzZSAnR3JpZFRlbXBsYXRlU3R5bGUnOlxuXHRcdFx0dmFyIHRlbXBsYXRlID0gc3R5bGUuYTtcblx0XHRcdHJldHVybiAnZ3JpZC1yb3dzLScgKyAoQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0Jy0nLFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRtYXAsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRsZW5ndGhDbGFzc05hbWUsIHRlbXBsYXRlLnJvd3MpKSArICgnLWNvbHMtJyArIChBMihcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHQnLScsXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGxlbmd0aENsYXNzTmFtZSwgdGVtcGxhdGUuY29sdW1ucykpICsgKCctc3BhY2UteC0nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRsZW5ndGhDbGFzc05hbWUodGVtcGxhdGUuc3BhY2luZy5hKSArICgnLXNwYWNlLXktJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRsZW5ndGhDbGFzc05hbWUodGVtcGxhdGUuc3BhY2luZy5iKSkpKSkpKTtcblx0XHRjYXNlICdHcmlkUG9zaXRpb24nOlxuXHRcdFx0dmFyIHBvcyA9IHN0eWxlLmE7XG5cdFx0XHRyZXR1cm4gJ2dwIGdyaWQtcG9zLScgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvcy5yb3cpICsgKCctJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9zLmNvbCkgKyAoJy0nICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChwb3Mud2lkdGgpICsgKCctJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChwb3MuaGVpZ2h0KSkpKSkpKTtcblx0XHRjYXNlICdQc2V1ZG9TZWxlY3Rvcic6XG5cdFx0XHR2YXIgc2VsZWN0b3IgPSBzdHlsZS5hO1xuXHRcdFx0dmFyIHN1YlN0eWxlID0gc3R5bGUuYjtcblx0XHRcdHZhciBuYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzd2l0Y2ggKHNlbGVjdG9yLiQpIHtcblx0XHRcdFx0XHRjYXNlICdGb2N1cyc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ2ZzJztcblx0XHRcdFx0XHRjYXNlICdIb3Zlcic6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ2h2Jztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuICdhY3QnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KCk7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0JyAnLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHN0eSkge1xuXHRcdFx0XHRcdFx0dmFyIF92MSA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRnZXRTdHlsZU5hbWUoc3R5KTtcblx0XHRcdFx0XHRcdGlmIChfdjEgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBzdHlsZU5hbWUgPSBfdjE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdHlsZU5hbWUgKyAoJy0nICsgbmFtZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdWJTdHlsZSkpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YXIgeCA9IHN0eWxlLmE7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRNYXliZSR3aXRoRGVmYXVsdCxcblx0XHRcdFx0JycsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0cmFuc2Zvcm1DbGFzcyh4KSk7XG5cdH1cbn07XG52YXIgJGVsbSRjb3JlJERpY3QkQmxhY2sgPSB7JDogJ0JsYWNrJ307XG52YXIgJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluID0gRjUoXG5cdGZ1bmN0aW9uIChhLCBiLCBjLCBkLCBlKSB7XG5cdFx0cmV0dXJuIHskOiAnUkJOb2RlX2VsbV9idWlsdGluJywgYTogYSwgYjogYiwgYzogYywgZDogZCwgZTogZX07XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JFJlZCA9IHskOiAnUmVkJ307XG52YXIgJGVsbSRjb3JlJERpY3QkYmFsYW5jZSA9IEY1KFxuXHRmdW5jdGlvbiAoY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0KSB7XG5cdFx0aWYgKChyaWdodC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKHJpZ2h0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHR2YXIgX3YxID0gcmlnaHQuYTtcblx0XHRcdHZhciBySyA9IHJpZ2h0LmI7XG5cdFx0XHR2YXIgclYgPSByaWdodC5jO1xuXHRcdFx0dmFyIHJMZWZ0ID0gcmlnaHQuZDtcblx0XHRcdHZhciByUmlnaHQgPSByaWdodC5lO1xuXHRcdFx0aWYgKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0XHR2YXIgX3YzID0gbGVmdC5hO1xuXHRcdFx0XHR2YXIgbEsgPSBsZWZ0LmI7XG5cdFx0XHRcdHZhciBsViA9IGxlZnQuYztcblx0XHRcdFx0dmFyIGxMZWZ0ID0gbGVmdC5kO1xuXHRcdFx0XHR2YXIgbFJpZ2h0ID0gbGVmdC5lO1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JFJlZCxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0QTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRCbGFjaywgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JEJsYWNrLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0ckssXG5cdFx0XHRcdFx0clYsXG5cdFx0XHRcdFx0QTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRSZWQsIGtleSwgdmFsdWUsIGxlZnQsIHJMZWZ0KSxcblx0XHRcdFx0XHRyUmlnaHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoKCgobGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxlZnQuYS4kID09PSAnUmVkJykpICYmIChsZWZ0LmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAobGVmdC5kLmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdHZhciBfdjUgPSBsZWZ0LmE7XG5cdFx0XHRcdHZhciBsSyA9IGxlZnQuYjtcblx0XHRcdFx0dmFyIGxWID0gbGVmdC5jO1xuXHRcdFx0XHR2YXIgX3Y2ID0gbGVmdC5kO1xuXHRcdFx0XHR2YXIgX3Y3ID0gX3Y2LmE7XG5cdFx0XHRcdHZhciBsbEsgPSBfdjYuYjtcblx0XHRcdFx0dmFyIGxsViA9IF92Ni5jO1xuXHRcdFx0XHR2YXIgbGxMZWZ0ID0gX3Y2LmQ7XG5cdFx0XHRcdHZhciBsbFJpZ2h0ID0gX3Y2LmU7XG5cdFx0XHRcdHZhciBsUmlnaHQgPSBsZWZ0LmU7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUmVkLFxuXHRcdFx0XHRcdGxLLFxuXHRcdFx0XHRcdGxWLFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkQmxhY2ssIGxsSywgbGxWLCBsbExlZnQsIGxsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkQmxhY2ssIGtleSwgdmFsdWUsIGxSaWdodCwgcmlnaHQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUgPSBfVXRpbHNfY29tcGFyZTtcbnZhciAkZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRyZXR1cm4gQTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRSZWQsIGtleSwgdmFsdWUsICRlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbkNvbG9yID0gZGljdC5hO1xuXHRcdFx0dmFyIG5LZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgblZhbHVlID0gZGljdC5jO1xuXHRcdFx0dmFyIG5MZWZ0ID0gZGljdC5kO1xuXHRcdFx0dmFyIG5SaWdodCA9IGRpY3QuZTtcblx0XHRcdHZhciBfdjEgPSBBMigkZWxtJGNvcmUkQmFzaWNzJGNvbXBhcmUsIGtleSwgbktleSk7XG5cdFx0XHRzd2l0Y2ggKF92MS4kKSB7XG5cdFx0XHRcdGNhc2UgJ0xUJzpcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdEEzKCRlbG0kY29yZSREaWN0JGluc2VydEhlbHAsIGtleSwgdmFsdWUsIG5MZWZ0KSxcblx0XHRcdFx0XHRcdG5SaWdodCk7XG5cdFx0XHRcdGNhc2UgJ0VRJzpcblx0XHRcdFx0XHRyZXR1cm4gQTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBuQ29sb3IsIG5LZXksIHZhbHVlLCBuTGVmdCwgblJpZ2h0KTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdG5MZWZ0LFxuXHRcdFx0XHRcdFx0QTMoJGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCwga2V5LCB2YWx1ZSwgblJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkRGljdCRpbnNlcnQgPSBGMyhcblx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIGRpY3QpIHtcblx0XHR2YXIgX3YwID0gQTMoJGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCwga2V5LCB2YWx1ZSwgZGljdCk7XG5cdFx0aWYgKChfdjAuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfdjAuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdHZhciBfdjEgPSBfdjAuYTtcblx0XHRcdHZhciBrID0gX3YwLmI7XG5cdFx0XHR2YXIgdiA9IF92MC5jO1xuXHRcdFx0dmFyIGwgPSBfdjAuZDtcblx0XHRcdHZhciByID0gX3YwLmU7XG5cdFx0XHRyZXR1cm4gQTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRCbGFjaywgaywgdiwgbCwgcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB4ID0gX3YwO1xuXHRcdFx0cmV0dXJuIHg7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkU2V0JGluc2VydCA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCBfdjApIHtcblx0XHR2YXIgZGljdCA9IF92MC5hO1xuXHRcdHJldHVybiAkZWxtJGNvcmUkU2V0JFNldF9lbG1fYnVpbHRpbihcblx0XHRcdEEzKCRlbG0kY29yZSREaWN0JGluc2VydCwga2V5LCBfVXRpbHNfVHVwbGUwLCBkaWN0KSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JGdldCA9IEYyKFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBkaWN0KSB7XG5cdFx0Z2V0OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHRcdFx0dmFyIHZhbHVlID0gZGljdC5jO1xuXHRcdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdFx0XHR2YXIgX3YxID0gQTIoJGVsbSRjb3JlJEJhc2ljcyRjb21wYXJlLCB0YXJnZXRLZXksIGtleSk7XG5cdFx0XHRcdHN3aXRjaCAoX3YxLiQpIHtcblx0XHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkdGFyZ2V0S2V5ID0gdGFyZ2V0S2V5LFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gbGVmdDtcblx0XHRcdFx0XHRcdHRhcmdldEtleSA9ICR0ZW1wJHRhcmdldEtleTtcblx0XHRcdFx0XHRcdGRpY3QgPSAkdGVtcCRkaWN0O1xuXHRcdFx0XHRcdFx0Y29udGludWUgZ2V0O1xuXHRcdFx0XHRcdGNhc2UgJ0VRJzpcblx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdCh2YWx1ZSk7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR0YXJnZXRLZXkgPSB0YXJnZXRLZXksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJGRpY3QgPSByaWdodDtcblx0XHRcdFx0XHRcdHRhcmdldEtleSA9ICR0ZW1wJHRhcmdldEtleTtcblx0XHRcdFx0XHRcdGRpY3QgPSAkdGVtcCRkaWN0O1xuXHRcdFx0XHRcdFx0Y29udGludWUgZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkRGljdCRtZW1iZXIgPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgZGljdCkge1xuXHRcdHZhciBfdjAgPSBBMigkZWxtJGNvcmUkRGljdCRnZXQsIGtleSwgZGljdCk7XG5cdFx0aWYgKF92MC4kID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkU2V0JG1lbWJlciA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCBfdjApIHtcblx0XHR2YXIgZGljdCA9IF92MC5hO1xuXHRcdHJldHVybiBBMigkZWxtJGNvcmUkRGljdCRtZW1iZXIsIGtleSwgZGljdCk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZWR1Y2VTdHlsZXMgPSBGMihcblx0ZnVuY3Rpb24gKHN0eWxlLCBuZXZlcm1pbmQpIHtcblx0XHR2YXIgY2FjaGUgPSBuZXZlcm1pbmQuYTtcblx0XHR2YXIgZXhpc3RpbmcgPSBuZXZlcm1pbmQuYjtcblx0XHR2YXIgc3R5bGVOYW1lID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGdldFN0eWxlTmFtZShzdHlsZSk7XG5cdFx0cmV0dXJuIEEyKCRlbG0kY29yZSRTZXQkbWVtYmVyLCBzdHlsZU5hbWUsIGNhY2hlKSA/IG5ldmVybWluZCA6IF9VdGlsc19UdXBsZTIoXG5cdFx0XHRBMigkZWxtJGNvcmUkU2V0JGluc2VydCwgc3R5bGVOYW1lLCBjYWNoZSksXG5cdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBzdHlsZSwgZXhpc3RpbmcpKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnUHJvcGVydHknLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFN0eWxlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnU3R5bGUnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCA9IGZ1bmN0aW9uIChjKSB7XG5cdHJldHVybiAnLicgKyBjO1xufTtcbnZhciAkZWxtJGNvcmUkTGlzdCRtYXliZUNvbnMgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIG14LCB4cykge1xuXHRcdHZhciBfdjAgPSBmKG14KTtcblx0XHRpZiAoX3YwLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHggPSBfdjAuYTtcblx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkTGlzdCRjb25zLCB4LCB4cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB4cztcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRMaXN0JGZpbHRlck1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdCRlbG0kY29yZSRMaXN0JG1heWJlQ29ucyhmKSxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQgPSBfU3RyaW5nX2Zyb21OdW1iZXI7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvcm1hdENvbG9yID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgcmVkID0gX3YwLmE7XG5cdHZhciBncmVlbiA9IF92MC5iO1xuXHR2YXIgYmx1ZSA9IF92MC5jO1xuXHR2YXIgYWxwaGEgPSBfdjAuZDtcblx0cmV0dXJuICdyZ2JhKCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdCRlbG0kY29yZSRCYXNpY3Mkcm91bmQocmVkICogMjU1KSkgKyAoKCcsJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHQkZWxtJGNvcmUkQmFzaWNzJHJvdW5kKGdyZWVuICogMjU1KSkpICsgKCgnLCcgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0JGVsbSRjb3JlJEJhc2ljcyRyb3VuZChibHVlICogMjU1KSkpICsgKCcsJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChhbHBoYSkgKyAnKScpKSkpKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvcm1hdEJveFNoYWRvdyA9IGZ1bmN0aW9uIChzaGFkb3cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHQnICcsXG5cdFx0QTIoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRmaWx0ZXJNYXAsXG5cdFx0XHQkZWxtJGNvcmUkQmFzaWNzJGlkZW50aXR5LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0c2hhZG93Lmluc2V0ID8gJGVsbSRjb3JlJE1heWJlJEp1c3QoJ2luc2V0JykgOiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChzaGFkb3cub2Zmc2V0LmEpICsgJ3B4JyksXG5cdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoc2hhZG93Lm9mZnNldC5iKSArICdweCcpLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUZsb2F0KHNoYWRvdy5ibHVyKSArICdweCcpLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUZsb2F0KHNoYWRvdy5zaXplKSArICdweCcpLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvcihzaGFkb3cuY29sb3IpKVxuXHRcdFx0XHRdKSkpO1xufTtcbnZhciAkZWxtJGNvcmUkTWF5YmUkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCBtYXliZSkge1xuXHRcdGlmIChtYXliZS4kID09PSAnSnVzdCcpIHtcblx0XHRcdHZhciB2YWx1ZSA9IG1heWJlLmE7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdGYodmFsdWUpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJFR1cGxlJG1hcEZpcnN0ID0gRjIoXG5cdGZ1bmN0aW9uIChmdW5jLCBfdjApIHtcblx0XHR2YXIgeCA9IF92MC5hO1xuXHRcdHZhciB5ID0gX3YwLmI7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRmdW5jKHgpLFxuXHRcdFx0eSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRUdXBsZSRtYXBTZWNvbmQgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIF92MCkge1xuXHRcdHZhciB4ID0gX3YwLmE7XG5cdFx0dmFyIHkgPSBfdjAuYjtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdHgsXG5cdFx0XHRmdW5jKHkpKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlckZvY3VzU3R5bGUgPSBmdW5jdGlvbiAoZm9jdXMpIHtcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHRBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuZm9jdXNlZFdpdGhpbikgKyAnOmZvY3VzLXdpdGhpbicsXG5cdFx0XHRBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZmlsdGVyTWFwLFxuXHRcdFx0XHQkZWxtJGNvcmUkQmFzaWNzJGlkZW50aXR5LFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkbWFwLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0J2JvcmRlci1jb2xvcicsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvcm1hdENvbG9yKGNvbG9yKSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Zm9jdXMuYm9yZGVyQ29sb3IpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkbWFwLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvcihjb2xvcikpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZvY3VzLmJhY2tncm91bmRDb2xvciksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoc2hhZG93KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0J2JveC1zaGFkb3cnLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRCb3hTaGFkb3coXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJsdXI6IHNoYWRvdy5ibHVyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogc2hhZG93LmNvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnNldDogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFR1cGxlJG1hcFNlY29uZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkQmFzaWNzJHRvRmxvYXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFR1cGxlJG1hcEZpcnN0LCAkZWxtJGNvcmUkQmFzaWNzJHRvRmxvYXQsIHNoYWRvdy5vZmZzZXQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZTogc2hhZG93LnNpemVcblx0XHRcdFx0XHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmb2N1cy5zaGFkb3cpLFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksICdvdXRsaW5lJywgJ25vbmUnKSlcblx0XHRcdFx0XHRdKSkpLFxuXHRcdFx0QTIoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU3R5bGUsXG5cdFx0XHQoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpICsgJzpmb2N1cyAuZm9jdXNhYmxlLCAnKSArICgoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpICsgJy5mb2N1c2FibGU6Zm9jdXMsICcpICsgKCcudWktc2xpZGUtYmFyOmZvY3VzICsgJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSkgKyAnIC5mb2N1c2FibGUtdGh1bWInKSkpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGZpbHRlck1hcCxcblx0XHRcdFx0JGVsbSRjb3JlJEJhc2ljcyRpZGVudGl0eSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJG1hcCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChjb2xvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHRcdCdib3JkZXItY29sb3InLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvcihjb2xvcikpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZvY3VzLmJvcmRlckNvbG9yKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJG1hcCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChjb2xvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJyxcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9ybWF0Q29sb3IoY29sb3IpKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmb2N1cy5iYWNrZ3JvdW5kQ29sb3IpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkbWFwLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKHNoYWRvdykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHRcdCdib3gtc2hhZG93Jyxcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9ybWF0Qm94U2hhZG93KFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRibHVyOiBzaGFkb3cuYmx1cixcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHNoYWRvdy5jb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5zZXQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvZmZzZXQ6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRUdXBsZSRtYXBTZWNvbmQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJEJhc2ljcyR0b0Zsb2F0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRUdXBsZSRtYXBGaXJzdCwgJGVsbSRjb3JlJEJhc2ljcyR0b0Zsb2F0LCBzaGFkb3cub2Zmc2V0KSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU6IHNoYWRvdy5zaXplXG5cdFx0XHRcdFx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Zm9jdXMuc2hhZG93KSxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnb3V0bGluZScsICdub25lJykpXG5cdFx0XHRcdFx0XSkpKVxuXHRcdF0pO1xufTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZSA9IGZ1bmN0aW9uICh0YWcpIHtcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX25vZGUoXG5cdFx0X1ZpcnR1YWxEb21fbm9TY3JpcHQodGFnKSk7XG59O1xudmFyICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9wZXJ0eSA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9WaXJ0dWFsRG9tX3Byb3BlcnR5LFxuXHRcdFx0X1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24oa2V5KSxcblx0XHRcdF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSh2YWx1ZSkpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQWxsQ2hpbGRyZW4gPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdBbGxDaGlsZHJlbicsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQmF0Y2ggPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdCYXRjaCcsIGE6IGF9O1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdDaGlsZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2xhc3MgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdDbGFzcycsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvciA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0Rlc2NyaXB0b3InLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJExlZnQgPSB7JDogJ0xlZnQnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1Byb3AnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFJpZ2h0ID0geyQ6ICdSaWdodCd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRTZWxmID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnU2VsZicsIGE6IGF9O1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkU3VwcG9ydHMgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdTdXBwb3J0cycsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ29udGVudCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0NvbnRlbnQnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEJvdHRvbSA9IHskOiAnQm90dG9tJ307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENlbnRlclggPSB7JDogJ0NlbnRlclgnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2VudGVyWSA9IHskOiAnQ2VudGVyWSd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRUb3AgPSB7JDogJ1RvcCd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRhbGlnbm1lbnRzID0gX0xpc3RfZnJvbUFycmF5KFxuXHRbJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFRvcCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEJvdHRvbSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFJpZ2h0LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkTGVmdCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENlbnRlclgsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDZW50ZXJZXSk7XG52YXIgJGVsbSRjb3JlJExpc3QkYXBwZW5kID0gRjIoXG5cdGZ1bmN0aW9uICh4cywgeXMpIHtcblx0XHRpZiAoIXlzLmIpIHtcblx0XHRcdHJldHVybiB4cztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEEzKCRlbG0kY29yZSRMaXN0JGZvbGRyLCAkZWxtJGNvcmUkTGlzdCRjb25zLCB5cywgeHMpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkY29uY2F0ID0gZnVuY3Rpb24gKGxpc3RzKSB7XG5cdHJldHVybiBBMygkZWxtJGNvcmUkTGlzdCRmb2xkciwgJGVsbSRjb3JlJExpc3QkYXBwZW5kLCBfTGlzdF9OaWwsIGxpc3RzKTtcbn07XG52YXIgJGVsbSRjb3JlJExpc3QkY29uY2F0TWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCBsaXN0KSB7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRMaXN0JGNvbmNhdChcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgZiwgbGlzdCkpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY29udGVudE5hbWUgPSBmdW5jdGlvbiAoZGVzYykge1xuXHRzd2l0Y2ggKGRlc2MuYS4kKSB7XG5cdFx0Y2FzZSAnVG9wJzpcblx0XHRcdHZhciBfdjEgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50VG9wKTtcblx0XHRjYXNlICdCb3R0b20nOlxuXHRcdFx0dmFyIF92MiA9IGRlc2MuYTtcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNvbnRlbnRCb3R0b20pO1xuXHRcdGNhc2UgJ1JpZ2h0Jzpcblx0XHRcdHZhciBfdjMgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50UmlnaHQpO1xuXHRcdGNhc2UgJ0xlZnQnOlxuXHRcdFx0dmFyIF92NCA9IGRlc2MuYTtcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNvbnRlbnRMZWZ0KTtcblx0XHRjYXNlICdDZW50ZXJYJzpcblx0XHRcdHZhciBfdjUgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50Q2VudGVyWCk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBfdjYgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50Q2VudGVyWSk7XG5cdH1cbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHNlbGZOYW1lID0gZnVuY3Rpb24gKGRlc2MpIHtcblx0c3dpdGNoIChkZXNjLmEuJCkge1xuXHRcdGNhc2UgJ1RvcCc6XG5cdFx0XHR2YXIgX3YxID0gZGVzYy5hO1xuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Ub3ApO1xuXHRcdGNhc2UgJ0JvdHRvbSc6XG5cdFx0XHR2YXIgX3YyID0gZGVzYy5hO1xuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Cb3R0b20pO1xuXHRcdGNhc2UgJ1JpZ2h0Jzpcblx0XHRcdHZhciBfdjMgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnblJpZ2h0KTtcblx0XHRjYXNlICdMZWZ0Jzpcblx0XHRcdHZhciBfdjQgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkxlZnQpO1xuXHRcdGNhc2UgJ0NlbnRlclgnOlxuXHRcdFx0dmFyIF92NSA9IGRlc2MuYTtcblx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ2VudGVyWCk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBfdjYgPSBkZXNjLmE7XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNlbnRlclkpO1xuXHR9XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkZXNjcmliZUFsaWdubWVudCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcblx0dmFyIGNyZWF0ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGFsaWdubWVudCkge1xuXHRcdHZhciBfdjAgPSB2YWx1ZXMoYWxpZ25tZW50KTtcblx0XHR2YXIgY29udGVudCA9IF92MC5hO1xuXHRcdHZhciBpbmRpdiA9IF92MC5iO1xuXHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNvbnRlbnROYW1lKFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDb250ZW50KGFsaWdubWVudCkpLFxuXHRcdFx0XHRjb250ZW50KSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRzZWxmTmFtZShcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFNlbGYoYWxpZ25tZW50KSksXG5cdFx0XHRcdFx0XHRpbmRpdilcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pO1xuXHR9O1xuXHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEJhdGNoKFxuXHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbmNhdE1hcCwgY3JlYXRlRGVzY3JpcHRpb24sICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRhbGlnbm1lbnRzKSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRlbERlc2NyaXB0aW9uID0gX0xpc3RfZnJvbUFycmF5KFxuXHRbXG5cdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2ZsZXgnKSxcblx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZGlyZWN0aW9uJywgJ2NvbHVtbicpLFxuXHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2hpdGUtc3BhY2UnLCAncHJlJyksXG5cdFx0QTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oYXNCZWhpbmQpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzAnKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5iZWhpbmQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJy0xJylcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKSxcblx0XHRBMihcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNlQnV0dG9uKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oZWlnaHRGaWxsKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1ncm93JywgJzAnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aEZpbGwpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ2F1dG8gIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKVxuXHRcdFx0XSkpLFxuXHRcdEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodENvbnRlbnQpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnYXV0bycpXG5cdFx0XHRdKSksXG5cdFx0QTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbCksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcxMDAwMDAnKVxuXHRcdFx0XSkpLFxuXHRcdEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndpZHRoRmlsbCksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3dpZHRoJywgJzEwMCUnKVxuXHRcdFx0XSkpLFxuXHRcdEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndpZHRoRmlsbFBvcnRpb24pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aWR0aCcsICcxMDAlJylcblx0XHRcdF0pKSxcblx0XHRBMihcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aENvbnRlbnQpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ2ZsZXgtc3RhcnQnKVxuXHRcdFx0XSkpLFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkZXNjcmliZUFsaWdubWVudChcblx0XHRmdW5jdGlvbiAoYWxpZ25tZW50KSB7XG5cdFx0XHRzd2l0Y2ggKGFsaWdubWVudC4kKSB7XG5cdFx0XHRcdGNhc2UgJ1RvcCc6XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2p1c3RpZnktY29udGVudCcsICdmbGV4LXN0YXJ0Jylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbi1ib3R0b20nLCAnYXV0byAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tdG9wJywgJzAgIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0Y2FzZSAnQm90dG9tJzpcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ2ZsZXgtZW5kJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbi10b3AnLCAnYXV0byAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tYm90dG9tJywgJzAgIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0Y2FzZSAnUmlnaHQnOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdmbGV4LWVuZCcpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ2ZsZXgtZW5kJylcblx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRjYXNlICdMZWZ0Jzpcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24taXRlbXMnLCAnZmxleC1zdGFydCcpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ2ZsZXgtc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdGNhc2UgJ0NlbnRlclgnOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdjZW50ZXInKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24tc2VsZicsICdjZW50ZXInKVxuXHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tdG9wJywgJ2F1dG8nKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tYm90dG9tJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tdG9wJywgJ2F1dG8gIWltcG9ydGFudCcpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnbWFyZ2luLWJvdHRvbScsICdhdXRvICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGdyaWRBbGlnbm1lbnRzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHR2YXIgY3JlYXRlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoYWxpZ25tZW50KSB7XG5cdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRzZWxmTmFtZShcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFNlbGYoYWxpZ25tZW50KSksXG5cdFx0XHRcdFx0XHR2YWx1ZXMoYWxpZ25tZW50KSlcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pO1xuXHR9O1xuXHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEJhdGNoKFxuXHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbmNhdE1hcCwgY3JlYXRlRGVzY3JpcHRpb24sICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRhbGlnbm1lbnRzKSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRBYm92ZSA9IHskOiAnQWJvdmUnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQmVoaW5kID0geyQ6ICdCZWhpbmQnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQmVsb3cgPSB7JDogJ0JlbG93J307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJE9uTGVmdCA9IHskOiAnT25MZWZ0J307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJE9uUmlnaHQgPSB7JDogJ09uUmlnaHQnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkV2l0aGluID0geyQ6ICdXaXRoaW4nfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkbG9jYXRpb25zID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbG9jID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEFib3ZlO1xuXHR2YXIgX3YwID0gZnVuY3Rpb24gKCkge1xuXHRcdHN3aXRjaCAobG9jLiQpIHtcblx0XHRcdGNhc2UgJ0Fib3ZlJzpcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdFx0XHRjYXNlICdCZWxvdyc6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHRcdFx0Y2FzZSAnT25SaWdodCc6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHRcdFx0Y2FzZSAnT25MZWZ0Jzpcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdFx0XHRjYXNlICdXaXRoaW4nOlxuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHRcdH1cblx0fSgpO1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFskbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQWJvdmUsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRCZWxvdywgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJE9uUmlnaHQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRPbkxlZnQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRXaXRoaW4sICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRCZWhpbmRdKTtcbn0oKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkYmFzZVNoZWV0ID0gX0xpc3RfZnJvbUFycmF5KFxuXHRbXG5cdFx0QTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdCdodG1sLGJvZHknLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3BhZGRpbmcnLCAnMCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbicsICcwJylcblx0XHRcdF0pKSxcblx0XHRBMihcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2xhc3MsXG5cdFx0X1V0aWxzX2FwKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpbmdsZSksXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaW1hZ2VDb250YWluZXIpKSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnYmxvY2snKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodEZpbGwpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQnaW1nJyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnbWF4LWhlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdvYmplY3QtZml0JywgJ2NvdmVyJylcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhGaWxsKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0J2ltZycsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21heC13aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdvYmplY3QtZml0JywgJ2NvdmVyJylcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSksXG5cdFx0QTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55KSArICc6Zm9jdXMnLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdvdXRsaW5lJywgJ25vbmUnKVxuXHRcdFx0XSkpLFxuXHRcdEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDbGFzcyxcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnJvb3QpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnaGVpZ2h0JywgJ2F1dG8nKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtaW4taGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzAnKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRfVXRpbHNfYXAoXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbCkpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodEZpbGwpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnMTAwJScpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5pbkZyb250KSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm5lYXJieSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzIwJylcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSksXG5cdFx0QTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMubmVhcmJ5KSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdib3JkZXInLCAnbm9uZScpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnZmxleCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZGlyZWN0aW9uJywgJ3JvdycpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtYmFzaXMnLCAnYXV0bycpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlKSxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGVsRGVzY3JpcHRpb24pLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQmF0Y2goXG5cdFx0XHRcdGZ1bmN0aW9uIChmbikge1xuXHRcdFx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkTGlzdCRtYXAsIGZuLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkbG9jYXRpb25zKTtcblx0XHRcdFx0fShcblx0XHRcdFx0XHRmdW5jdGlvbiAobG9jKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGxvYy4kKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0Fib3ZlJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWJvdmUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYm90dG9tJywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2xlZnQnLCAnMCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnei1pbmRleCcsICcyMCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnbWFyZ2luJywgJzAgIWltcG9ydGFudCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodEZpbGwpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhGaWxsKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2lkdGgnLCAnMTAwJScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcqJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdCZWxvdyc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmJlbG93KSxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2JvdHRvbScsICcwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdsZWZ0JywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2hlaWdodCcsICcwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzIwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4nLCAnMCAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcqJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2hlaWdodCcsICdhdXRvJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ09uUmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5vblJpZ2h0KSxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2xlZnQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4nLCAnMCAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzIwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcqJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdPbkxlZnQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5vbkxlZnQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncmlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4nLCAnMCAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzIwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcqJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdXaXRoaW4nOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5pbkZyb250KSxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdsZWZ0JywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3RvcCcsICcwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4nLCAnMCAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcqJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5iZWhpbmQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2xlZnQnLCAnMCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbicsICcwICFpbXBvcnRhbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3otaW5kZXgnLCAnMCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnbm9uZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnKicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSlcblx0XHRcdF0pKSxcblx0XHRBMihcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2xhc3MsXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2JvcmRlcicsICdub25lJyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1zaHJpbmsnLCAnMCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnZmxleCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZGlyZWN0aW9uJywgJ3JvdycpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtYmFzaXMnLCAnYXV0bycpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3Jlc2l6ZScsICdub25lJyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC1mZWF0dXJlLXNldHRpbmdzJywgJ2luaGVyaXQnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4nLCAnMCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3BhZGRpbmcnLCAnMCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2JvcmRlci13aWR0aCcsICcwJyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYm9yZGVyLXN0eWxlJywgJ3NvbGlkJyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC1zaXplJywgJ2luaGVyaXQnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdjb2xvcicsICdpbmhlcml0JyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC1mYW1pbHknLCAnaW5oZXJpdCcpLFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2xpbmUtaGVpZ2h0JywgJzEnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LXdlaWdodCcsICdpbmhlcml0JyksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndGV4dC1kZWNvcmF0aW9uJywgJ25vbmUnKSxcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LXN0eWxlJywgJ2luaGVyaXQnKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndyYXBwZWQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LXdyYXAnLCAnd3JhcCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMubm9UZXh0U2VsZWN0aW9uKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnLW1vei11c2VyLXNlbGVjdCcsICdub25lJyksXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJy13ZWJraXQtdXNlci1zZWxlY3QnLCAnbm9uZScpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICctbXMtdXNlci1zZWxlY3QnLCAnbm9uZScpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd1c2VyLXNlbGVjdCcsICdub25lJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jdXJzb3JQb2ludGVyKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnY3Vyc29yJywgJ3BvaW50ZXInKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmN1cnNvclRleHQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdjdXJzb3InLCAndGV4dCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucGFzc1BvaW50ZXJFdmVudHMpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNhcHR1cmVQb2ludGVyRXZlbnRzKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAncG9pbnRlci1ldmVudHMnLCAnYXV0byAhaW1wb3J0YW50Jylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50cmFuc3BhcmVudCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ29wYWNpdHknLCAnMCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMub3BhcXVlKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3BhY2l0eScsICcxJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdChcblx0XHRcdFx0XHRfVXRpbHNfYXAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaG92ZXIsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRyYW5zcGFyZW50KSkgKyAnOmhvdmVyJyxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3BhY2l0eScsICcwJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdChcblx0XHRcdFx0XHRfVXRpbHNfYXAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaG92ZXIsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm9wYXF1ZSkpICsgJzpob3ZlcicsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ29wYWNpdHknLCAnMScpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoXG5cdFx0XHRcdFx0X1V0aWxzX2FwKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmZvY3VzLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50cmFuc3BhcmVudCkpICsgJzpmb2N1cycsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ29wYWNpdHknLCAnMCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoXG5cdFx0XHRcdFx0X1V0aWxzX2FwKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmZvY3VzLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5vcGFxdWUpKSArICc6Zm9jdXMnLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdvcGFjaXR5JywgJzEnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KFxuXHRcdFx0XHRcdF9VdGlsc19hcCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hY3RpdmUsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRyYW5zcGFyZW50KSkgKyAnOmFjdGl2ZScsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ29wYWNpdHknLCAnMCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoXG5cdFx0XHRcdFx0X1V0aWxzX2FwKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFjdGl2ZSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMub3BhcXVlKSkgKyAnOmFjdGl2ZScsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ29wYWNpdHknLCAnMScpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudHJhbnNpdGlvbiksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLFxuXHRcdFx0XHRcdFx0J3RyYW5zaXRpb24nLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0JywgJyxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4geCArICcgMTYwbXMnO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0Wyd0cmFuc2Zvcm0nLCAnb3BhY2l0eScsICdmaWx0ZXInLCAnYmFja2dyb3VuZC1jb2xvcicsICdjb2xvcicsICdmb250LXNpemUnXSkpKSlcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zY3JvbGxiYXJzKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3ZlcmZsb3cnLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LXNocmluaycsICcxJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zY3JvbGxiYXJzWCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ292ZXJmbG93LXgnLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucm93KSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1zaHJpbmsnLCAnMScpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNjcm9sbGJhcnNZKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3ZlcmZsb3cteScsICdhdXRvJyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb2x1bW4pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LXNocmluaycsICcxJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1zaHJpbmsnLCAnMScpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNsaXApLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdvdmVyZmxvdycsICdoaWRkZW4nKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNsaXBYKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3ZlcmZsb3cteCcsICdoaWRkZW4nKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNsaXBZKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3ZlcmZsb3cteScsICdoaWRkZW4nKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndpZHRoQ29udGVudCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3dpZHRoJywgJ2F1dG8nKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmJvcmRlck5vbmUpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdib3JkZXItd2lkdGgnLCAnMCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYm9yZGVyRGFzaGVkKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYm9yZGVyLXN0eWxlJywgJ2Rhc2hlZCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYm9yZGVyRG90dGVkKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYm9yZGVyLXN0eWxlJywgJ2RvdHRlZCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYm9yZGVyU29saWQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdib3JkZXItc3R5bGUnLCAnc29saWQnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRleHQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aGl0ZS1zcGFjZScsICdwcmUnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmlucHV0VGV4dCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2xpbmUtaGVpZ2h0JywgJzEuMDUnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYmFja2dyb3VuZCcsICd0cmFuc3BhcmVudCcpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd0ZXh0LWFsaWduJywgJ2luaGVyaXQnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpbmdsZSksXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRlbERlc2NyaXB0aW9uKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnJvdyksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnZmxleCcpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWRpcmVjdGlvbicsICdyb3cnKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWJhc2lzJywgJzAlJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aEV4YWN0KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1iYXNpcycsICdhdXRvJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmxpbmspLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWJhc2lzJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oZWlnaHRGaWxsKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24tc2VsZicsICdzdHJldGNoICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbFBvcnRpb24pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ3N0cmV0Y2ggIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aEZpbGwpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWdyb3cnLCAnMTAwMDAwJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNvbnRhaW5lciksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcwJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWJhc2lzJywgJ2F1dG8nKSxcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2FsaWduLXNlbGYnLCAnc3RyZXRjaCcpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0J3U6Zmlyc3Qtb2YtdHlwZS4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Db250YWluZXJSaWdodCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1ncm93JywgJzEnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCdzOmZpcnN0LW9mLXR5cGUuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1ncm93JywgJzEnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNlbnRlclgpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tbGVmdCcsICdhdXRvICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0J3M6bGFzdC1vZi10eXBlLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNvbnRhaW5lckNlbnRlclgsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcxJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25DZW50ZXJYKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnbWFyZ2luLXJpZ2h0JywgJ2F1dG8gIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQnczpvbmx5LW9mLXR5cGUuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWCxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1ncm93JywgJzEnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNlbnRlclkpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tdG9wJywgJ2F1dG8gIWltcG9ydGFudCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbi1ib3R0b20nLCAnYXV0byAhaW1wb3J0YW50Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCdzOmxhc3Qtb2YtdHlwZS4nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWCArICcgfiB1JyksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcwJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQndTpmaXJzdC1vZi10eXBlLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Db250YWluZXJSaWdodCArICgnIH4gcy4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Db250YWluZXJDZW50ZXJYKSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcwJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRlc2NyaWJlQWxpZ25tZW50KFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGFsaWdubWVudCkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGFsaWdubWVudC4kKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnVG9wJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdmbGV4LXN0YXJ0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24tc2VsZicsICdmbGV4LXN0YXJ0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnQm90dG9tJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdmbGV4LWVuZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2FsaWduLXNlbGYnLCAnZmxleC1lbmQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdSaWdodCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ2ZsZXgtZW5kJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdMZWZ0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdqdXN0aWZ5LWNvbnRlbnQnLCAnZmxleC1zdGFydCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnQ2VudGVyWCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ2NlbnRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdjZW50ZXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ2NlbnRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNwYWNlRXZlbmx5KSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ3NwYWNlLWJldHdlZW4nKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5pbnB1dExhYmVsKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24taXRlbXMnLCAnYmFzZWxpbmUnKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb2x1bW4pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2ZsZXgnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1kaXJlY3Rpb24nLCAnY29sdW1uJyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55KSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1iYXNpcycsICcwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21pbi1oZWlnaHQnLCAnbWluLWNvbnRlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodEV4YWN0KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1iYXNpcycsICdhdXRvJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbCksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcxMDAwMDAnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhGaWxsKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2lkdGgnLCAnMTAwJScpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aEZpbGxQb3J0aW9uKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2lkdGgnLCAnMTAwJScpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aENvbnRlbnQpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ2ZsZXgtc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCd1OmZpcnN0LW9mLXR5cGUuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQm90dG9tLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWdyb3cnLCAnMScpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0J3M6Zmlyc3Qtb2YtdHlwZS4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Db250YWluZXJDZW50ZXJZLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWdyb3cnLCAnMScpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ2VudGVyWSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbi10b3AnLCAnYXV0byAhaW1wb3J0YW50JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnbWFyZ2luLWJvdHRvbScsICcwICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0J3M6bGFzdC1vZi10eXBlLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNvbnRhaW5lckNlbnRlclksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcxJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25DZW50ZXJZKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnbWFyZ2luLWJvdHRvbScsICdhdXRvICFpbXBvcnRhbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tdG9wJywgJzAgIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQnczpvbmx5LW9mLXR5cGUuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1ncm93JywgJzEnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNlbnRlclkpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tdG9wJywgJ2F1dG8gIWltcG9ydGFudCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbi1ib3R0b20nLCAnYXV0byAhaW1wb3J0YW50Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCdzOmxhc3Qtb2YtdHlwZS4nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWSArICcgfiB1JyksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZsZXgtZ3JvdycsICcwJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQndTpmaXJzdC1vZi10eXBlLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25Db250YWluZXJCb3R0b20gKyAoJyB+IHMuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWSkpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWdyb3cnLCAnMCcpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkZXNjcmliZUFsaWdubWVudChcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChhbGlnbm1lbnQpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChhbGlnbm1lbnQuJCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1RvcCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ2ZsZXgtc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4tYm90dG9tJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdCb3R0b20nOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2p1c3RpZnktY29udGVudCcsICdmbGV4LWVuZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbi10b3AnLCAnYXV0bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdmbGV4LWVuZCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2FsaWduLXNlbGYnLCAnZmxleC1lbmQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdMZWZ0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1pdGVtcycsICdmbGV4LXN0YXJ0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24tc2VsZicsICdmbGV4LXN0YXJ0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnQ2VudGVyWCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24tc2VsZicsICdjZW50ZXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2p1c3RpZnktY29udGVudCcsICdjZW50ZXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250YWluZXIpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWdyb3cnLCAnMCcpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxleC1iYXNpcycsICdhdXRvJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdhbGlnbi1zZWxmJywgJ3N0cmV0Y2ggIWltcG9ydGFudCcpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNwYWNlRXZlbmx5KSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ3NwYWNlLWJldHdlZW4nKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5ncmlkKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICctbXMtZ3JpZCcpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQnLmdwJyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3dpZHRoJywgJzEwMCUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFN1cHBvcnRzLFxuXHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMignZGlzcGxheScsICdncmlkJyksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKCdkaXNwbGF5JywgJ2dyaWQnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZ3JpZEFsaWdubWVudHMoXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoYWxpZ25tZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoYWxpZ25tZW50LiQpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdUb3AnOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ2ZsZXgtc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdCb3R0b20nOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnanVzdGlmeS1jb250ZW50JywgJ2ZsZXgtZW5kJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnUmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnYWxpZ24taXRlbXMnLCAnZmxleC1lbmQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdMZWZ0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2FsaWduLWl0ZW1zJywgJ2ZsZXgtc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdDZW50ZXJYJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2FsaWduLWl0ZW1zJywgJ2NlbnRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdqdXN0aWZ5LWNvbnRlbnQnLCAnY2VudGVyJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucGFnZSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnYmxvY2snKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAnOmZpcnN0LWNoaWxkJyksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbicsICcwICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkc2VsZk5hbWUoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFNlbGYoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJExlZnQpKSArICgnOmZpcnN0LWNoaWxkICsgLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpKSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ21hcmdpbicsICcwICFpbXBvcnRhbnQnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDaGlsZCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkc2VsZk5hbWUoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFNlbGYoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFJpZ2h0KSkgKyAoJzpmaXJzdC1jaGlsZCArIC4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55KSkpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdtYXJnaW4nLCAnMCAhaW1wb3J0YW50Jylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRlc2NyaWJlQWxpZ25tZW50KFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGFsaWdubWVudCkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGFsaWdubWVudC4kKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnVG9wJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKF9MaXN0X05pbCwgX0xpc3RfTmlsKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdCb3R0b20nOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoX0xpc3RfTmlsLCBfTGlzdF9OaWwpO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Zsb2F0JywgJ3JpZ2h0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jzo6YWZ0ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdjb250ZW50JywgJ1xcXCJcXFwiJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ3RhYmxlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdjbGVhcicsICdib3RoJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ0xlZnQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZmxvYXQnLCAnbGVmdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc6OmFmdGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnY29udGVudCcsICdcXFwiXFxcIicpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICd0YWJsZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnY2xlYXInLCAnYm90aCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdDZW50ZXJYJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKF9MaXN0X05pbCwgX0xpc3RfTmlsKTtcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoX0xpc3RfTmlsLCBfTGlzdF9OaWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmlucHV0TXVsdGlsaW5lKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2hpdGUtc3BhY2UnLCAncHJlLXdyYXAgIWltcG9ydGFudCcpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmlucHV0TXVsdGlsaW5lV3JhcHBlciksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zaW5nbGUpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbGV4LWJhc2lzJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5pbnB1dE11bHRpbGluZVBhcmVudCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3doaXRlLXNwYWNlJywgJ3ByZS13cmFwICFpbXBvcnRhbnQnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnY3Vyc29yJywgJ3RleHQnKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5pbnB1dE11bHRpbGluZUZpbGxlciksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3doaXRlLXNwYWNlJywgJ3ByZS13cmFwICFpbXBvcnRhbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2NvbG9yJywgJ3RyYW5zcGFyZW50Jylcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucGFyYWdyYXBoKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdibG9jaycpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aGl0ZS1zcGFjZScsICdub3JtYWwnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnb3ZlcmZsb3ctd3JhcCcsICdicmVhay13b3JkJyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oYXNCZWhpbmQpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5iZWhpbmQpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd6LWluZGV4JywgJy0xJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRBbGxDaGlsZHJlbixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dCksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnaW5saW5lJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aGl0ZS1zcGFjZScsICdub3JtYWwnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRBbGxDaGlsZHJlbixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucGFyYWdyYXBoKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdpbmxpbmUnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQnOjphZnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2NvbnRlbnQnLCAnbm9uZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdFx0XHRcdFx0Jzo6YmVmb3JlJyxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnY29udGVudCcsICdub25lJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRBbGxDaGlsZHJlbixcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdpbmxpbmUnKSxcblx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3doaXRlLXNwYWNlJywgJ25vcm1hbCcpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhFeGFjdCksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmluRnJvbnQpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYmVoaW5kKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFib3ZlKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmJlbG93KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm9uUmlnaHQpLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2ZsZXgnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMub25MZWZ0KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdmbGV4Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0KSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZGlzcGxheScsICdpbmxpbmUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd3aGl0ZS1zcGFjZScsICdub3JtYWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5yb3cpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2lubGluZScpXG5cdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENoaWxkLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb2x1bW4pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2lubGluZS1mbGV4Jylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2hpbGQsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmdyaWQpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ2lubGluZS1ncmlkJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRlc2NyaWJlQWxpZ25tZW50KFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGFsaWdubWVudCkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGFsaWdubWVudC4kKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnVG9wJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKF9MaXN0X05pbCwgX0xpc3RfTmlsKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdCb3R0b20nOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoX0xpc3RfTmlsLCBfTGlzdF9OaWwpO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2Zsb2F0JywgJ3JpZ2h0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTGVmdCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmbG9hdCcsICdsZWZ0Jylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnQ2VudGVyWCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihfTGlzdF9OaWwsIF9MaXN0X05pbCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKF9MaXN0X05pbCwgX0xpc3RfTmlsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0Jy5oaWRkZW4nLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdkaXNwbGF5JywgJ25vbmUnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRleHRUaGluKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC13ZWlnaHQnLCAnMTAwJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0RXh0cmFMaWdodCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZvbnQtd2VpZ2h0JywgJzIwMCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dExpZ2h0KSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC13ZWlnaHQnLCAnMzAwJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0Tm9ybWFsV2VpZ2h0KSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC13ZWlnaHQnLCAnNDAwJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0TWVkaXVtKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC13ZWlnaHQnLCAnNTAwJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0U2VtaUJvbGQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LXdlaWdodCcsICc2MDAnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmJvbGQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LXdlaWdodCcsICc3MDAnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRleHRFeHRyYUJvbGQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LXdlaWdodCcsICc4MDAnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRleHRIZWF2eSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZvbnQtd2VpZ2h0JywgJzkwMCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaXRhbGljKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC1zdHlsZScsICdpdGFsaWMnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnN0cmlrZSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3RleHQtZGVjb3JhdGlvbicsICdsaW5lLXRocm91Z2gnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnVuZGVybGluZSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3RleHQtZGVjb3JhdGlvbicsICd1bmRlcmxpbmUnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rJywgJ2F1dG8nKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndGV4dC1kZWNvcmF0aW9uLXNraXAnLCAnaW5rJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudW5kZXJsaW5lKSxcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnN0cmlrZSkpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd0ZXh0LWRlY29yYXRpb24nLCAnbGluZS10aHJvdWdoIHVuZGVybGluZScpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd0ZXh0LWRlY29yYXRpb24tc2tpcC1pbmsnLCAnYXV0bycpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd0ZXh0LWRlY29yYXRpb24tc2tpcCcsICdpbmsnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRleHRVbml0YWxpY2l6ZWQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LXN0eWxlJywgJ25vcm1hbCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dEp1c3RpZnkpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd0ZXh0LWFsaWduJywgJ2p1c3RpZnknKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSREZXNjcmlwdG9yLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnRleHRKdXN0aWZ5QWxsKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndGV4dC1hbGlnbicsICdqdXN0aWZ5LWFsbCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dENlbnRlciksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0UmlnaHQpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICd0ZXh0LWFsaWduJywgJ3JpZ2h0Jylcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkRGVzY3JpcHRvcixcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0TGVmdCksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ3RleHQtYWxpZ24nLCAnbGVmdCcpXG5cdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJERlc2NyaXB0b3IsXG5cdFx0XHRcdCcubW9kYWwnLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb3NpdGlvbicsICdmaXhlZCcpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdsZWZ0JywgJzAnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnd2lkdGgnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdoZWlnaHQnLCAnMTAwJScpLFxuXHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdwb2ludGVyLWV2ZW50cycsICdub25lJylcblx0XHRcdFx0XHRdKSlcblx0XHRcdF0pKVxuXHRdKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZm9udFZhcmlhbnQgPSBmdW5jdGlvbiAoX3Zhcikge1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdFx0Jy52LScgKyBfdmFyLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLCAnXFxcIicgKyAoX3ZhciArICdcXFwiJykpXG5cdFx0XHRcdF0pKSxcblx0XHRcdEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdFx0Jy52LScgKyAoX3ZhciArICctb2ZmJyksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkUHJvcCwgJ2ZvbnQtZmVhdHVyZS1zZXR0aW5ncycsICdcXFwiJyArIChfdmFyICsgJ1xcXCIgMCcpKVxuXHRcdFx0XHRdKSlcblx0XHRdKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNvbW1vblZhbHVlcyA9ICRlbG0kY29yZSRMaXN0JGNvbmNhdChcblx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0ZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDbGFzcyxcblx0XHRcdFx0XHQnLmJvcmRlci0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHgpLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLFxuXHRcdFx0XHRcdFx0XHQnYm9yZGVyLXdpZHRoJyxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHgpICsgJ3B4Jylcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdH0sXG5cdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRyYW5nZSwgMCwgNikpLFxuXHRcdFx0QTIoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdFx0XHRcdCcuZm9udC1zaXplLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJFByb3AsXG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnLFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSkgKyAncHgnKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0fSxcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JHJhbmdlLCA4LCAzMikpLFxuXHRcdFx0QTIoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJENsYXNzLFxuXHRcdFx0XHRcdCcucC0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkpLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLFxuXHRcdFx0XHRcdFx0XHQncGFkZGluZycsXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludChpKSArICdweCcpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9LFxuXHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkcmFuZ2UsIDAsIDI0KSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkQ2xhc3MsXG5cdFx0XHRcdCcudi1zbWNwJyxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC12YXJpYW50JywgJ3NtYWxsLWNhcHMnKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRDbGFzcyxcblx0XHRcdFx0Jy52LXNtY3Atb2ZmJyxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRQcm9wLCAnZm9udC12YXJpYW50JywgJ25vcm1hbCcpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRmb250VmFyaWFudCgnemVybycpLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGZvbnRWYXJpYW50KCdvbnVtJyksXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZm9udFZhcmlhbnQoJ2xpZ2EnKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRmb250VmFyaWFudCgnZGxpZycpLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGZvbnRWYXJpYW50KCdvcmRuJyksXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZm9udFZhcmlhbnQoJ3RudW0nKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRmb250VmFyaWFudCgnYWZyYycpLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGZvbnRWYXJpYW50KCdmcmFjJylcblx0XHRdKSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGV4cGxhaW5lciA9ICdcXG4uZXhwbGFpbiB7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYigxNzQsIDEyMSwgMTUpICFpbXBvcnRhbnQ7XFxufVxcbi5leHBsYWluID4gLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55ICsgKCcge1xcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiKDAsIDE1MSwgMTY3KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY3RyIHtcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5leHBsYWluID4gLmN0ciA+IC4nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICcge1xcbiAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiKDAsIDE1MSwgMTY3KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4nKSkpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRpbnB1dFRleHRSZXNldCA9ICdcXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XFxufVxcbic7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHNsaWRlclJlc2V0ID0gJ1xcbmlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgbGVmdDowO1xcbiAgdG9wOjA7XFxuICB6LWluZGV4OjEwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBkYXNoZWQgMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuJztcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkdGh1bWJSZXNldCA9ICdcXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdW29yaWVudD12ZXJ0aWNhbF17XFxuICAgIHdyaXRpbmctbW9kZTogYnQtbHI7IC8qIElFICovXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogc2xpZGVyLXZlcnRpY2FsOyAgLyogV2ViS2l0ICovXFxufVxcbic7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHRyYWNrUmVzZXQgPSAnXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuJztcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkb3ZlcnJpZGVzID0gJ0BtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7JyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSkgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5yb3cpICsgKCcgPiAnICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55KSArICgnIHsgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50OyB9ICcgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkpICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucm93KSArICgnID4gJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSkgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250YWluZXIpICsgKCcgeyBmbGV4LWJhc2lzOiBhdXRvICFpbXBvcnRhbnQ7IH19JyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkaW5wdXRUZXh0UmVzZXQgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHNsaWRlclJlc2V0ICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSR0cmFja1Jlc2V0ICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSR0aHVtYlJlc2V0ICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGV4cGxhaW5lcikpKSkpKSkpKSkpKSkpKTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGNvbmNhdCA9IGZ1bmN0aW9uIChzdHJpbmdzKSB7XG5cdHJldHVybiBBMigkZWxtJGNvcmUkU3RyaW5nJGpvaW4sICcnLCBzdHJpbmdzKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEludGVybWVkaWF0ZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0ludGVybWVkaWF0ZScsIGE6IGF9O1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZW1wdHlJbnRlcm1lZGlhdGUgPSBGMihcblx0ZnVuY3Rpb24gKHNlbGVjdG9yLCBjbG9zaW5nKSB7XG5cdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRJbnRlcm1lZGlhdGUoXG5cdFx0XHR7Y2xvc2luZzogY2xvc2luZywgb3RoZXJzOiBfTGlzdF9OaWwsIHByb3BzOiBfTGlzdF9OaWwsIHNlbGVjdG9yOiBzZWxlY3Rvcn0pO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkcmVuZGVyUnVsZXMgPSBGMihcblx0ZnVuY3Rpb24gKF92MCwgcnVsZXNUb1JlbmRlcikge1xuXHRcdHZhciBwYXJlbnQgPSBfdjAuYTtcblx0XHR2YXIgZ2VuZXJhdGVJbnRlcm1lZGlhdGVzID0gRjIoXG5cdFx0XHRmdW5jdGlvbiAocnVsZSwgcmVuZGVyZWQpIHtcblx0XHRcdFx0c3dpdGNoIChydWxlLiQpIHtcblx0XHRcdFx0XHRjYXNlICdQcm9wJzpcblx0XHRcdFx0XHRcdHZhciBuYW1lID0gcnVsZS5hO1xuXHRcdFx0XHRcdFx0dmFyIHZhbCA9IHJ1bGUuYjtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlZCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKG5hbWUsIHZhbCksXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlZC5wcm9wcylcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y2FzZSAnU3VwcG9ydHMnOlxuXHRcdFx0XHRcdFx0dmFyIF92MiA9IHJ1bGUuYTtcblx0XHRcdFx0XHRcdHZhciBwcm9wID0gX3YyLmE7XG5cdFx0XHRcdFx0XHR2YXIgdmFsdWUgPSBfdjIuYjtcblx0XHRcdFx0XHRcdHZhciBwcm9wcyA9IHJ1bGUuYjtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlZCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdG90aGVyczogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJEludGVybWVkaWF0ZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Nsb3Npbmc6ICdcXG59Jywgb3RoZXJzOiBfTGlzdF9OaWwsIHByb3BzOiBwcm9wcywgc2VsZWN0b3I6ICdAc3VwcG9ydHMgKCcgKyAocHJvcCArICgnOicgKyAodmFsdWUgKyAoJykgeycgKyBwYXJlbnQuc2VsZWN0b3IpKSkpfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlZC5vdGhlcnMpXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNhc2UgJ0FkamFjZW50Jzpcblx0XHRcdFx0XHRcdHZhciBzZWxlY3RvciA9IHJ1bGUuYTtcblx0XHRcdFx0XHRcdHZhciBhZGpSdWxlcyA9IHJ1bGUuYjtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlZCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdG90aGVyczogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRyZW5kZXJSdWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGVtcHR5SW50ZXJtZWRpYXRlLCBwYXJlbnQuc2VsZWN0b3IgKyAoJyArICcgKyBzZWxlY3RvciksICcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWRqUnVsZXMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyZWQub3RoZXJzKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjYXNlICdDaGlsZCc6XG5cdFx0XHRcdFx0XHR2YXIgY2hpbGQgPSBydWxlLmE7XG5cdFx0XHRcdFx0XHR2YXIgY2hpbGRSdWxlcyA9IHJ1bGUuYjtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlZCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdG90aGVyczogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRyZW5kZXJSdWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGVtcHR5SW50ZXJtZWRpYXRlLCBwYXJlbnQuc2VsZWN0b3IgKyAoJyA+ICcgKyBjaGlsZCksICcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRSdWxlcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlZC5vdGhlcnMpXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNhc2UgJ0FsbENoaWxkcmVuJzpcblx0XHRcdFx0XHRcdHZhciBjaGlsZCA9IHJ1bGUuYTtcblx0XHRcdFx0XHRcdHZhciBjaGlsZFJ1bGVzID0gcnVsZS5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVkLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0b3RoZXJzOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHJlbmRlclJ1bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZW1wdHlJbnRlcm1lZGlhdGUsIHBhcmVudC5zZWxlY3RvciArICgnICcgKyBjaGlsZCksICcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRSdWxlcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJlZC5vdGhlcnMpXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNhc2UgJ0Rlc2NyaXB0b3InOlxuXHRcdFx0XHRcdFx0dmFyIGRlc2NyaXB0b3IgPSBydWxlLmE7XG5cdFx0XHRcdFx0XHR2YXIgZGVzY3JpcHRvclJ1bGVzID0gcnVsZS5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVkLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0b3RoZXJzOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHJlbmRlclJ1bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZW1wdHlJbnRlcm1lZGlhdGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X1V0aWxzX2FwKHBhcmVudC5zZWxlY3RvciwgZGVzY3JpcHRvciksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdG9yUnVsZXMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyZWQub3RoZXJzKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dmFyIGJhdGNoZWQgPSBydWxlLmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0cmVuZGVyZWQsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRvdGhlcnM6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkcmVuZGVyUnVsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRlbXB0eUludGVybWVkaWF0ZSwgcGFyZW50LnNlbGVjdG9yLCAnJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhdGNoZWQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyZWQub3RoZXJzKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRJbnRlcm1lZGlhdGUoXG5cdFx0XHRBMygkZWxtJGNvcmUkTGlzdCRmb2xkciwgZ2VuZXJhdGVJbnRlcm1lZGlhdGVzLCBwYXJlbnQsIHJ1bGVzVG9SZW5kZXIpKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHJlbmRlckNvbXBhY3QgPSBmdW5jdGlvbiAoc3R5bGVDbGFzc2VzKSB7XG5cdHZhciByZW5kZXJWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRTdHJpbmckY29uY2F0KFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0ZnVuY3Rpb24gKF92Mykge1xuXHRcdFx0XHRcdHZhciB4ID0gX3YzLmE7XG5cdFx0XHRcdFx0dmFyIHkgPSBfdjMuYjtcblx0XHRcdFx0XHRyZXR1cm4geCArICgnOicgKyAoeSArICc7JykpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZXMpKTtcblx0fTtcblx0dmFyIHJlbmRlckNsYXNzID0gZnVuY3Rpb24gKHJ1bGUpIHtcblx0XHR2YXIgX3YyID0gcnVsZS5wcm9wcztcblx0XHRpZiAoIV92Mi5iKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBydWxlLnNlbGVjdG9yICsgKCd7JyArIChyZW5kZXJWYWx1ZXMocnVsZS5wcm9wcykgKyAocnVsZS5jbG9zaW5nICsgJ30nKSkpO1xuXHRcdH1cblx0fTtcblx0dmFyIHJlbmRlckludGVybWVkaWF0ZSA9IGZ1bmN0aW9uIChfdjApIHtcblx0XHR2YXIgcnVsZSA9IF92MC5hO1xuXHRcdHJldHVybiBfVXRpbHNfYXAoXG5cdFx0XHRyZW5kZXJDbGFzcyhydWxlKSxcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckY29uY2F0KFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRtYXAsIHJlbmRlckludGVybWVkaWF0ZSwgcnVsZS5vdGhlcnMpKSk7XG5cdH07XG5cdHJldHVybiAkZWxtJGNvcmUkU3RyaW5nJGNvbmNhdChcblx0XHRBMihcblx0XHRcdCRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdHJlbmRlckludGVybWVkaWF0ZSxcblx0XHRcdEEzKFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKF92MSwgZXhpc3RpbmcpIHtcblx0XHRcdFx0XHRcdHZhciBuYW1lID0gX3YxLmE7XG5cdFx0XHRcdFx0XHR2YXIgc3R5bGVSdWxlcyA9IF92MS5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkcmVuZGVyUnVsZXMsXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGVtcHR5SW50ZXJtZWRpYXRlLCBuYW1lLCAnJyksXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVSdWxlcyksXG5cdFx0XHRcdFx0XHRcdGV4aXN0aW5nKTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRzdHlsZUNsYXNzZXMpKSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRydWxlcyA9IF9VdGlsc19hcChcblx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJG92ZXJyaWRlcyxcblx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJHJlbmRlckNvbXBhY3QoXG5cdFx0X1V0aWxzX2FwKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRiYXNlU2hlZXQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjb21tb25WYWx1ZXMpKSk7XG52YXIgJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQgPSBfVmlydHVhbERvbV90ZXh0O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRzdGF0aWNSb290ID0gZnVuY3Rpb24gKG9wdHMpIHtcblx0dmFyIF92MCA9IG9wdHMubW9kZTtcblx0c3dpdGNoIChfdjAuJCkge1xuXHRcdGNhc2UgJ0xheW91dCc6XG5cdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlLFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZSxcblx0XHRcdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdGV4dCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkcnVsZXMpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKTtcblx0XHRjYXNlICdOb1N0YXRpY1N0eWxlU2hlZXQnOlxuXHRcdFx0cmV0dXJuICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0ZXh0KCcnKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZSxcblx0XHRcdFx0J2VsbS11aS1zdGF0aWMtcnVsZXMnLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kcHJvcGVydHksXG5cdFx0XHRcdFx0XHQncnVsZXMnLFxuXHRcdFx0XHRcdFx0JGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkcnVsZXMpKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9OaWwpO1xuXHR9XG59O1xudmFyICRlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0ID0gRjIoXG5cdGZ1bmN0aW9uIChmdW5jLCBlbnRyaWVzKSB7XG5cdFx0cmV0dXJuIF9Kc29uX3dyYXAoXG5cdFx0XHRBMyhcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdF9Kc29uX2FkZEVudHJ5KGZ1bmMpLFxuXHRcdFx0XHRfSnNvbl9lbXB0eUFycmF5KF9VdGlsc19UdXBsZTApLFxuXHRcdFx0XHRlbnRyaWVzKSk7XG5cdH0pO1xudmFyICRlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QgPSBmdW5jdGlvbiAocGFpcnMpIHtcblx0cmV0dXJuIF9Kc29uX3dyYXAoXG5cdFx0QTMoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoX3YwLCBvYmopIHtcblx0XHRcdFx0XHR2YXIgayA9IF92MC5hO1xuXHRcdFx0XHRcdHZhciB2ID0gX3YwLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKF9Kc29uX2FkZEZpZWxkLCBrLCB2LCBvYmopO1xuXHRcdFx0XHR9KSxcblx0XHRcdF9Kc29uX2VtcHR5T2JqZWN0KF9VdGlsc19UdXBsZTApLFxuXHRcdFx0cGFpcnMpKTtcbn07XG52YXIgJGVsbSRjb3JlJExpc3QkYW55ID0gRjIoXG5cdGZ1bmN0aW9uIChpc09rYXksIGxpc3QpIHtcblx0XHRhbnk6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmICghbGlzdC5iKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB4ID0gbGlzdC5hO1xuXHRcdFx0XHR2YXIgeHMgPSBsaXN0LmI7XG5cdFx0XHRcdGlmIChpc09rYXkoeCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgJHRlbXAkaXNPa2F5ID0gaXNPa2F5LFxuXHRcdFx0XHRcdFx0JHRlbXAkbGlzdCA9IHhzO1xuXHRcdFx0XHRcdGlzT2theSA9ICR0ZW1wJGlzT2theTtcblx0XHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0XHRjb250aW51ZSBhbnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb250TmFtZSA9IGZ1bmN0aW9uIChmb250KSB7XG5cdHN3aXRjaCAoZm9udC4kKSB7XG5cdFx0Y2FzZSAnU2VyaWYnOlxuXHRcdFx0cmV0dXJuICdzZXJpZic7XG5cdFx0Y2FzZSAnU2Fuc1NlcmlmJzpcblx0XHRcdHJldHVybiAnc2Fucy1zZXJpZic7XG5cdFx0Y2FzZSAnTW9ub3NwYWNlJzpcblx0XHRcdHJldHVybiAnbW9ub3NwYWNlJztcblx0XHRjYXNlICdUeXBlZmFjZSc6XG5cdFx0XHR2YXIgbmFtZSA9IGZvbnQuYTtcblx0XHRcdHJldHVybiAnXFxcIicgKyAobmFtZSArICdcXFwiJyk7XG5cdFx0Y2FzZSAnSW1wb3J0Rm9udCc6XG5cdFx0XHR2YXIgbmFtZSA9IGZvbnQuYTtcblx0XHRcdHZhciB1cmwgPSBmb250LmI7XG5cdFx0XHRyZXR1cm4gJ1xcXCInICsgKG5hbWUgKyAnXFxcIicpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YXIgbmFtZSA9IGZvbnQuYS5uYW1lO1xuXHRcdFx0cmV0dXJuICdcXFwiJyArIChuYW1lICsgJ1xcXCInKTtcblx0fVxufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkaXNTbWFsbENhcHMgPSBmdW5jdGlvbiAoX3Zhcikge1xuXHRzd2l0Y2ggKF92YXIuJCkge1xuXHRcdGNhc2UgJ1ZhcmlhbnRBY3RpdmUnOlxuXHRcdFx0dmFyIG5hbWUgPSBfdmFyLmE7XG5cdFx0XHRyZXR1cm4gbmFtZSA9PT0gJ3NtY3AnO1xuXHRcdGNhc2UgJ1ZhcmlhbnRPZmYnOlxuXHRcdFx0dmFyIG5hbWUgPSBfdmFyLmE7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBuYW1lID0gX3Zhci5hO1xuXHRcdFx0dmFyIGluZGV4ID0gX3Zhci5iO1xuXHRcdFx0cmV0dXJuIChuYW1lID09PSAnc21jcCcpICYmIChpbmRleCA9PT0gMSk7XG5cdH1cbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGhhc1NtYWxsQ2FwcyA9IGZ1bmN0aW9uICh0eXBlZmFjZSkge1xuXHRpZiAodHlwZWZhY2UuJCA9PT0gJ0ZvbnRXaXRoJykge1xuXHRcdHZhciBmb250ID0gdHlwZWZhY2UuYTtcblx0XHRyZXR1cm4gQTIoJGVsbSRjb3JlJExpc3QkYW55LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkaXNTbWFsbENhcHMsIGZvbnQudmFyaWFudHMpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJG1pbiA9IEYyKFxuXHRmdW5jdGlvbiAoeCwgeSkge1xuXHRcdHJldHVybiAoX1V0aWxzX2NtcCh4LCB5KSA8IDApID8geCA6IHk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkbmVnYXRlID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIC1uO1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyUHJvcHMgPSBGMyhcblx0ZnVuY3Rpb24gKGZvcmNlLCBfdjAsIGV4aXN0aW5nKSB7XG5cdFx0dmFyIGtleSA9IF92MC5hO1xuXHRcdHZhciB2YWwgPSBfdjAuYjtcblx0XHRyZXR1cm4gZm9yY2UgPyAoZXhpc3RpbmcgKyAoJ1xcbiAgJyArIChrZXkgKyAoJzogJyArICh2YWwgKyAnICFpbXBvcnRhbnQ7JykpKSkpIDogKGV4aXN0aW5nICsgKCdcXG4gICcgKyAoa2V5ICsgKCc6ICcgKyAodmFsICsgJzsnKSkpKSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSA9IEY0KFxuXHRmdW5jdGlvbiAob3B0aW9ucywgbWF5YmVQc2V1ZG8sIHNlbGVjdG9yLCBwcm9wcykge1xuXHRcdGlmIChtYXliZVBzZXVkby4kID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRzZWxlY3RvciArICgneycgKyAoQTMoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclByb3BzKGZhbHNlKSxcblx0XHRcdFx0XHQnJyxcblx0XHRcdFx0XHRwcm9wcykgKyAnXFxufScpKVxuXHRcdFx0XHRdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBzZXVkbyA9IG1heWJlUHNldWRvLmE7XG5cdFx0XHRzd2l0Y2ggKHBzZXVkby4kKSB7XG5cdFx0XHRcdGNhc2UgJ0hvdmVyJzpcblx0XHRcdFx0XHR2YXIgX3YyID0gb3B0aW9ucy5ob3Zlcjtcblx0XHRcdFx0XHRzd2l0Y2ggKF92Mi4kKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdOb0hvdmVyJzpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0XHRcdFx0XHRcdGNhc2UgJ0ZvcmNlSG92ZXInOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdG9yICsgKCctaHYgeycgKyAoQTMoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJQcm9wcyh0cnVlKSxcblx0XHRcdFx0XHRcdFx0XHRcdCcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMpICsgJ1xcbn0nKSlcblx0XHRcdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0b3IgKyAoJy1odjpob3ZlciB7JyArIChBMyhcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclByb3BzKGZhbHNlKSxcblx0XHRcdFx0XHRcdFx0XHRcdCcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvcHMpICsgJ1xcbn0nKSlcblx0XHRcdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0ZvY3VzJzpcblx0XHRcdFx0XHR2YXIgcmVuZGVyZWRQcm9wcyA9IEEzKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyUHJvcHMoZmFsc2UpLFxuXHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRwcm9wcyk7XG5cdFx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0c2VsZWN0b3IgKyAoJy1mczpmb2N1cyB7JyArIChyZW5kZXJlZFByb3BzICsgJ1xcbn0nKSksXG5cdFx0XHRcdFx0XHRcdCgnLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55ICsgKCc6Zm9jdXMgJyArIChzZWxlY3RvciArICctZnMgIHsnKSkpKSArIChyZW5kZXJlZFByb3BzICsgJ1xcbn0nKSxcblx0XHRcdFx0XHRcdFx0KHNlbGVjdG9yICsgJy1mczpmb2N1cy13aXRoaW4geycpICsgKHJlbmRlcmVkUHJvcHMgKyAnXFxufScpLFxuXHRcdFx0XHRcdFx0XHQoJy51aS1zbGlkZS1iYXI6Zm9jdXMgKyAnICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55KSArICgnIC5mb2N1c2FibGUtdGh1bWInICsgKHNlbGVjdG9yICsgJy1mcyB7JykpKSkgKyAocmVuZGVyZWRQcm9wcyArICdcXG59Jylcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHNlbGVjdG9yICsgKCctYWN0OmFjdGl2ZSB7JyArIChBMyhcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJQcm9wcyhmYWxzZSksXG5cdFx0XHRcdFx0XHRcdCcnLFxuXHRcdFx0XHRcdFx0XHRwcm9wcykgKyAnXFxufScpKVxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyVmFyaWFudCA9IGZ1bmN0aW9uIChfdmFyKSB7XG5cdHN3aXRjaCAoX3Zhci4kKSB7XG5cdFx0Y2FzZSAnVmFyaWFudEFjdGl2ZSc6XG5cdFx0XHR2YXIgbmFtZSA9IF92YXIuYTtcblx0XHRcdHJldHVybiAnXFxcIicgKyAobmFtZSArICdcXFwiJyk7XG5cdFx0Y2FzZSAnVmFyaWFudE9mZic6XG5cdFx0XHR2YXIgbmFtZSA9IF92YXIuYTtcblx0XHRcdHJldHVybiAnXFxcIicgKyAobmFtZSArICdcXFwiIDAnKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFyIG5hbWUgPSBfdmFyLmE7XG5cdFx0XHR2YXIgaW5kZXggPSBfdmFyLmI7XG5cdFx0XHRyZXR1cm4gJ1xcXCInICsgKG5hbWUgKyAoJ1xcXCIgJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChpbmRleCkpKTtcblx0fVxufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyVmFyaWFudHMgPSBmdW5jdGlvbiAodHlwZWZhY2UpIHtcblx0aWYgKHR5cGVmYWNlLiQgPT09ICdGb250V2l0aCcpIHtcblx0XHR2YXIgZm9udCA9IHR5cGVmYWNlLmE7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0JywgJyxcblx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkbWFwLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyVmFyaWFudCwgZm9udC52YXJpYW50cykpKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRyYW5zZm9ybVZhbHVlID0gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuXHRzd2l0Y2ggKHRyYW5zZm9ybS4kKSB7XG5cdFx0Y2FzZSAnVW50cmFuc2Zvcm1lZCc6XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0Y2FzZSAnTW92ZWQnOlxuXHRcdFx0dmFyIF92MSA9IHRyYW5zZm9ybS5hO1xuXHRcdFx0dmFyIHggPSBfdjEuYTtcblx0XHRcdHZhciB5ID0gX3YxLmI7XG5cdFx0XHR2YXIgeiA9IF92MS5jO1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHQndHJhbnNsYXRlM2QoJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdCh4KSArICgncHgsICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoeSkgKyAoJ3B4LCAnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUZsb2F0KHopICsgJ3B4KScpKSkpKSk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBfdjIgPSB0cmFuc2Zvcm0uYTtcblx0XHRcdHZhciB0eCA9IF92Mi5hO1xuXHRcdFx0dmFyIHR5ID0gX3YyLmI7XG5cdFx0XHR2YXIgdHogPSBfdjIuYztcblx0XHRcdHZhciBfdjMgPSB0cmFuc2Zvcm0uYjtcblx0XHRcdHZhciBzeCA9IF92My5hO1xuXHRcdFx0dmFyIHN5ID0gX3YzLmI7XG5cdFx0XHR2YXIgc3ogPSBfdjMuYztcblx0XHRcdHZhciBfdjQgPSB0cmFuc2Zvcm0uYztcblx0XHRcdHZhciBveCA9IF92NC5hO1xuXHRcdFx0dmFyIG95ID0gX3Y0LmI7XG5cdFx0XHR2YXIgb3ogPSBfdjQuYztcblx0XHRcdHZhciBhbmdsZSA9IHRyYW5zZm9ybS5kO1xuXHRcdFx0dmFyIHRyYW5zbGF0ZSA9ICd0cmFuc2xhdGUzZCgnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUZsb2F0KHR4KSArICgncHgsICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQodHkpICsgKCdweCwgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdCh0eikgKyAncHgpJykpKSkpO1xuXHRcdFx0dmFyIHNjYWxlID0gJ3NjYWxlM2QoJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChzeCkgKyAoJywgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChzeSkgKyAoJywgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChzeikgKyAnKScpKSkpKTtcblx0XHRcdHZhciByb3RhdGUgPSAncm90YXRlM2QoJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChveCkgKyAoJywgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChveSkgKyAoJywgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChveikgKyAoJywgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChhbmdsZSkgKyAncmFkKScpKSkpKSkpO1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KHRyYW5zbGF0ZSArICgnICcgKyAoc2NhbGUgKyAoJyAnICsgcm90YXRlKSkpKTtcblx0fVxufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGVSdWxlID0gRjMoXG5cdGZ1bmN0aW9uIChvcHRpb25zLCBydWxlLCBtYXliZVBzZXVkbykge1xuXHRcdHN3aXRjaCAocnVsZS4kKSB7XG5cdFx0XHRjYXNlICdTdHlsZSc6XG5cdFx0XHRcdHZhciBzZWxlY3RvciA9IHJ1bGUuYTtcblx0XHRcdFx0dmFyIHByb3BzID0gcnVsZS5iO1xuXHRcdFx0XHRyZXR1cm4gQTQoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclN0eWxlLCBvcHRpb25zLCBtYXliZVBzZXVkbywgc2VsZWN0b3IsIHByb3BzKTtcblx0XHRcdGNhc2UgJ1NoYWRvd3MnOlxuXHRcdFx0XHR2YXIgbmFtZSA9IHJ1bGUuYTtcblx0XHRcdFx0dmFyIHByb3AgPSBydWxlLmI7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHQnLicgKyBuYW1lLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnYm94LXNoYWRvdycsIHByb3ApXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRjYXNlICdUcmFuc3BhcmVuY3knOlxuXHRcdFx0XHR2YXIgbmFtZSA9IHJ1bGUuYTtcblx0XHRcdFx0dmFyIHRyYW5zcGFyZW5jeSA9IHJ1bGUuYjtcblx0XHRcdFx0dmFyIG9wYWNpdHkgPSBBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkQmFzaWNzJG1heCxcblx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdEEyKCRlbG0kY29yZSRCYXNpY3MkbWluLCAxLCAxIC0gdHJhbnNwYXJlbmN5KSk7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHQnLicgKyBuYW1lLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSxcblx0XHRcdFx0XHRcdFx0J29wYWNpdHknLFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChvcGFjaXR5KSlcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdGNhc2UgJ0ZvbnRTaXplJzpcblx0XHRcdFx0dmFyIGkgPSBydWxlLmE7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHQnLmZvbnQtc2l6ZS0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkpLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSxcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZScsXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludChpKSArICdweCcpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRjYXNlICdGb250RmFtaWx5Jzpcblx0XHRcdFx0dmFyIG5hbWUgPSBydWxlLmE7XG5cdFx0XHRcdHZhciB0eXBlZmFjZXMgPSBydWxlLmI7XG5cdFx0XHRcdHZhciBmZWF0dXJlcyA9IEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHQnLCAnLFxuXHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGZpbHRlck1hcCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclZhcmlhbnRzLCB0eXBlZmFjZXMpKTtcblx0XHRcdFx0dmFyIGZhbWlsaWVzID0gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0J2ZvbnQtZmFtaWx5Jyxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdCcsICcsXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvbnROYW1lLCB0eXBlZmFjZXMpKSksXG5cdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLCBmZWF0dXJlcyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSxcblx0XHRcdFx0XHRcdCdmb250LXZhcmlhbnQnLFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkYW55LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkaGFzU21hbGxDYXBzLCB0eXBlZmFjZXMpID8gJ3NtYWxsLWNhcHMnIDogJ25vcm1hbCcpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdHJldHVybiBBNCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsIG9wdGlvbnMsIG1heWJlUHNldWRvLCAnLicgKyBuYW1lLCBmYW1pbGllcyk7XG5cdFx0XHRjYXNlICdTaW5nbGUnOlxuXHRcdFx0XHR2YXIgX2NsYXNzID0gcnVsZS5hO1xuXHRcdFx0XHR2YXIgcHJvcCA9IHJ1bGUuYjtcblx0XHRcdFx0dmFyIHZhbCA9IHJ1bGUuYztcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSxcblx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdCcuJyArIF9jbGFzcyxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgcHJvcCwgdmFsKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0Y2FzZSAnQ29sb3JlZCc6XG5cdFx0XHRcdHZhciBfY2xhc3MgPSBydWxlLmE7XG5cdFx0XHRcdHZhciBwcm9wID0gcnVsZS5iO1xuXHRcdFx0XHR2YXIgY29sb3IgPSBydWxlLmM7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHQnLicgKyBfY2xhc3MsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHRwcm9wLFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9ybWF0Q29sb3IoY29sb3IpKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0Y2FzZSAnU3BhY2luZ1N0eWxlJzpcblx0XHRcdFx0dmFyIGNscyA9IHJ1bGUuYTtcblx0XHRcdFx0dmFyIHggPSBydWxlLmI7XG5cdFx0XHRcdHZhciB5ID0gcnVsZS5jO1xuXHRcdFx0XHR2YXIgeVB4ID0gJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHkpICsgJ3B4Jztcblx0XHRcdFx0dmFyIHhQeCA9ICRlbG0kY29yZSRTdHJpbmckZnJvbUludCh4KSArICdweCc7XG5cdFx0XHRcdHZhciBzaW5nbGUgPSAnLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zaW5nbGU7XG5cdFx0XHRcdHZhciByb3cgPSAnLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5yb3c7XG5cdFx0XHRcdHZhciB3cmFwcGVkUm93ID0gJy4nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndyYXBwZWQgKyByb3cpO1xuXHRcdFx0XHR2YXIgcmlnaHQgPSAnLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnblJpZ2h0O1xuXHRcdFx0XHR2YXIgcGFyYWdyYXBoID0gJy4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMucGFyYWdyYXBoO1xuXHRcdFx0XHR2YXIgcGFnZSA9ICcuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnBhZ2U7XG5cdFx0XHRcdHZhciBsZWZ0ID0gJy4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25MZWZ0O1xuXHRcdFx0XHR2YXIgaGFsZlkgPSAkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdCh5IC8gMikgKyAncHgnO1xuXHRcdFx0XHR2YXIgaGFsZlggPSAkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdCh4IC8gMikgKyAncHgnO1xuXHRcdFx0XHR2YXIgY29sdW1uID0gJy4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuY29sdW1uO1xuXHRcdFx0XHR2YXIgX2NsYXNzID0gJy4nICsgY2xzO1xuXHRcdFx0XHR2YXIgYW55ID0gJy4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55O1xuXHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJExpc3QkY29uY2F0KFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTQoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSxcblx0XHRcdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRcdFx0bWF5YmVQc2V1ZG8sXG5cdFx0XHRcdFx0XHRcdF9jbGFzcyArIChyb3cgKyAoJyA+ICcgKyAoYW55ICsgKCcgKyAnICsgYW55KSkpKSxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgJ21hcmdpbi1sZWZ0JywgeFB4KVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTQoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSxcblx0XHRcdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRcdFx0bWF5YmVQc2V1ZG8sXG5cdFx0XHRcdFx0XHRcdF9jbGFzcyArICh3cmFwcGVkUm93ICsgKCcgPiAnICsgYW55KSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksICdtYXJnaW4nLCBoYWxmWSArICgnICcgKyBoYWxmWCkpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclN0eWxlLFxuXHRcdFx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHRcdFx0X2NsYXNzICsgKGNvbHVtbiArICgnID4gJyArIChhbnkgKyAoJyArICcgKyBhbnkpKSkpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnbWFyZ2luLXRvcCcsIHlQeClcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdFx0XHRfY2xhc3MgKyAocGFnZSArICgnID4gJyArIChhbnkgKyAoJyArICcgKyBhbnkpKSkpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnbWFyZ2luLXRvcCcsIHlQeClcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdFx0XHRfY2xhc3MgKyAocGFnZSArICgnID4gJyArIGxlZnQpKSxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgJ21hcmdpbi1yaWdodCcsIHhQeClcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdFx0XHRfY2xhc3MgKyAocGFnZSArICgnID4gJyArIHJpZ2h0KSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksICdtYXJnaW4tbGVmdCcsIHhQeClcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfYXAoX2NsYXNzLCBwYXJhZ3JhcGgpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0J2NhbGMoMWVtICsgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoeSkgKyAncHgpJykpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclN0eWxlLFxuXHRcdFx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHRcdFx0J3RleHRhcmVhJyArIChhbnkgKyBfY2xhc3MpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0J2NhbGMoMWVtICsgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoeSkgKyAncHgpJykpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdCdjYWxjKDEwMCUgKyAnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludCh5KSArICdweCknKSlcblx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdFx0XHRfY2xhc3MgKyAocGFyYWdyYXBoICsgKCcgPiAnICsgbGVmdCkpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnbWFyZ2luLXJpZ2h0JywgeFB4KVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTQoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSxcblx0XHRcdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRcdFx0bWF5YmVQc2V1ZG8sXG5cdFx0XHRcdFx0XHRcdF9jbGFzcyArIChwYXJhZ3JhcGggKyAoJyA+ICcgKyByaWdodCkpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnbWFyZ2luLWxlZnQnLCB4UHgpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclN0eWxlLFxuXHRcdFx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHRcdFx0X2NsYXNzICsgKHBhcmFncmFwaCArICc6OmFmdGVyJyksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksICdjb250ZW50JywgJ1xcJ1xcJycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnZGlzcGxheScsICdibG9jaycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnaGVpZ2h0JywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgJ3dpZHRoJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0J21hcmdpbi10b3AnLFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KCgtMSkgKiAoKHkgLyAyKSB8IDApKSArICdweCcpXG5cdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclN0eWxlLFxuXHRcdFx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHRcdFx0X2NsYXNzICsgKHBhcmFncmFwaCArICc6OmJlZm9yZScpLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LCAnY29udGVudCcsICdcXCdcXCcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgJ2Rpc3BsYXknLCAnYmxvY2snKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgJ2hlaWdodCcsICcwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksICd3aWR0aCcsICcwJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSxcblx0XHRcdFx0XHRcdFx0XHRcdCdtYXJnaW4tYm90dG9tJyxcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludCgoLTEpICogKCh5IC8gMikgfCAwKSkgKyAncHgnKVxuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0Y2FzZSAnUGFkZGluZ1N0eWxlJzpcblx0XHRcdFx0dmFyIGNscyA9IHJ1bGUuYTtcblx0XHRcdFx0dmFyIHRvcCA9IHJ1bGUuYjtcblx0XHRcdFx0dmFyIHJpZ2h0ID0gcnVsZS5jO1xuXHRcdFx0XHR2YXIgYm90dG9tID0gcnVsZS5kO1xuXHRcdFx0XHR2YXIgbGVmdCA9IHJ1bGUuZTtcblx0XHRcdFx0dmFyIF9jbGFzcyA9ICcuJyArIGNscztcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSxcblx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdG1heWJlUHNldWRvLFxuXHRcdFx0XHRcdF9jbGFzcyxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdCdwYWRkaW5nJyxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQodG9wKSArICgncHggJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChyaWdodCkgKyAoJ3B4ICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoYm90dG9tKSArICgncHggJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdChsZWZ0KSArICdweCcpKSkpKSkpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRjYXNlICdCb3JkZXJXaWR0aCc6XG5cdFx0XHRcdHZhciBjbHMgPSBydWxlLmE7XG5cdFx0XHRcdHZhciB0b3AgPSBydWxlLmI7XG5cdFx0XHRcdHZhciByaWdodCA9IHJ1bGUuYztcblx0XHRcdFx0dmFyIGJvdHRvbSA9IHJ1bGUuZDtcblx0XHRcdFx0dmFyIGxlZnQgPSBydWxlLmU7XG5cdFx0XHRcdHZhciBfY2xhc3MgPSAnLicgKyBjbHM7XG5cdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyU3R5bGUsXG5cdFx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHRfY2xhc3MsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHQnYm9yZGVyLXdpZHRoJyxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHRvcCkgKyAoJ3B4ICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHJpZ2h0KSArICgncHggJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoYm90dG9tKSArICgncHggJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobGVmdCkgKyAncHgnKSkpKSkpKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0Y2FzZSAnR3JpZFRlbXBsYXRlU3R5bGUnOlxuXHRcdFx0XHR2YXIgdGVtcGxhdGUgPSBydWxlLmE7XG5cdFx0XHRcdHZhciB0b0dyaWRMZW5ndGhIZWxwZXIgPSBGMyhcblx0XHRcdFx0XHRmdW5jdGlvbiAobWluaW11bSwgbWF4aW11bSwgeCkge1xuXHRcdFx0XHRcdFx0dG9HcmlkTGVuZ3RoSGVscGVyOlxuXHRcdFx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh4LiQpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdQeCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcHggPSB4LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHB4KSArICdweCc7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnQ29udGVudCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3YyID0gX1V0aWxzX1R1cGxlMihtaW5pbXVtLCBtYXhpbXVtKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChfdjIuYS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKF92Mi5iLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBfdjMgPSBfdjIuYTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3Y0ID0gX3YyLmI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICdtYXgtY29udGVudCc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIF92NiA9IF92Mi5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBtYXhTaXplID0gX3YyLmIuYTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJ21pbm1heChtYXgtY29udGVudCwgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobWF4U2l6ZSkgKyAncHgpJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChfdjIuYi4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgbWluU2l6ZSA9IF92Mi5hLmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIF92NSA9IF92Mi5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnbWlubWF4KCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG1pblNpemUpICsgKCdweCwgJyArICdtYXgtY29udGVudCknKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG1pblNpemUgPSBfdjIuYS5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBtYXhTaXplID0gX3YyLmIuYTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJ21pbm1heCgnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChtaW5TaXplKSArICgncHgsICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG1heFNpemUpICsgJ3B4KScpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjYXNlICdGaWxsJzpcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBpID0geC5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF92NyA9IF9VdGlsc19UdXBsZTIobWluaW11bSwgbWF4aW11bSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3Y3LmEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChfdjcuYi4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3Y4ID0gX3Y3LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIF92OSA9IF92Ny5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSkgKyAnZnInO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBfdjExID0gX3Y3LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG1heFNpemUgPSBfdjcuYi5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnbWlubWF4KG1heC1jb250ZW50LCAnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChtYXhTaXplKSArICdweCknKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKF92Ny5iLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBtaW5TaXplID0gX3Y3LmEuYTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3YxMCA9IF92Ny5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnbWlubWF4KCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG1pblNpemUpICsgKCdweCwgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaSkgKyAoJ2ZyJyArICdmciknKSkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgbWluU2l6ZSA9IF92Ny5hLmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG1heFNpemUgPSBfdjcuYi5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnbWlubWF4KCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG1pblNpemUpICsgKCdweCwgJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobWF4U2l6ZSkgKyAncHgpJykpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ01pbic6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbSA9IHguYTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBsZW4gPSB4LmI7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkbWluaW11bSA9ICRlbG0kY29yZSRNYXliZSRKdXN0KG0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRtYXhpbXVtID0gbWF4aW11bSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkeCA9IGxlbjtcblx0XHRcdFx0XHRcdFx0XHRcdG1pbmltdW0gPSAkdGVtcCRtaW5pbXVtO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWF4aW11bSA9ICR0ZW1wJG1heGltdW07XG5cdFx0XHRcdFx0XHRcdFx0XHR4ID0gJHRlbXAkeDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHRvR3JpZExlbmd0aEhlbHBlcjtcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG0gPSB4LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbGVuID0geC5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJG1pbmltdW0gPSBtaW5pbXVtLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRtYXhpbXVtID0gJGVsbSRjb3JlJE1heWJlJEp1c3QobSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHggPSBsZW47XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW5pbXVtID0gJHRlbXAkbWluaW11bTtcblx0XHRcdFx0XHRcdFx0XHRcdG1heGltdW0gPSAkdGVtcCRtYXhpbXVtO1xuXHRcdFx0XHRcdFx0XHRcdFx0eCA9ICR0ZW1wJHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZSB0b0dyaWRMZW5ndGhIZWxwZXI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0dmFyIHRvR3JpZExlbmd0aCA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKHRvR3JpZExlbmd0aEhlbHBlciwgJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsICRlbG0kY29yZSRNYXliZSROb3RoaW5nLCB4KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0dmFyIHhTcGFjaW5nID0gdG9HcmlkTGVuZ3RoKHRlbXBsYXRlLnNwYWNpbmcuYSk7XG5cdFx0XHRcdHZhciB5U3BhY2luZyA9IHRvR3JpZExlbmd0aCh0ZW1wbGF0ZS5zcGFjaW5nLmIpO1xuXHRcdFx0XHR2YXIgcm93cyA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuICdncmlkLXRlbXBsYXRlLXJvd3M6ICcgKyAoeCArICc7Jyk7XG5cdFx0XHRcdH0oXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRtYXAsIHRvR3JpZExlbmd0aCwgdGVtcGxhdGUucm93cykpKTtcblx0XHRcdFx0dmFyIG1zUm93cyA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuICctbXMtZ3JpZC1yb3dzOiAnICsgKHggKyAnOycpO1xuXHRcdFx0XHR9KFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0eVNwYWNpbmcsXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRtYXAsIHRvR3JpZExlbmd0aCwgdGVtcGxhdGUuY29sdW1ucykpKTtcblx0XHRcdFx0dmFyIG1zQ29sdW1ucyA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuICctbXMtZ3JpZC1jb2x1bW5zOiAnICsgKHggKyAnOycpO1xuXHRcdFx0XHR9KFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0eVNwYWNpbmcsXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRtYXAsIHRvR3JpZExlbmd0aCwgdGVtcGxhdGUuY29sdW1ucykpKTtcblx0XHRcdFx0dmFyIGdhcFkgPSAnZ3JpZC1yb3ctZ2FwOicgKyAodG9HcmlkTGVuZ3RoKHRlbXBsYXRlLnNwYWNpbmcuYikgKyAnOycpO1xuXHRcdFx0XHR2YXIgZ2FwWCA9ICdncmlkLWNvbHVtbi1nYXA6JyArICh0b0dyaWRMZW5ndGgodGVtcGxhdGUuc3BhY2luZy5hKSArICc7Jyk7XG5cdFx0XHRcdHZhciBjb2x1bW5zID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ2dyaWQtdGVtcGxhdGUtY29sdW1uczogJyArICh4ICsgJzsnKTtcblx0XHRcdFx0fShcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgdG9HcmlkTGVuZ3RoLCB0ZW1wbGF0ZS5jb2x1bW5zKSkpO1xuXHRcdFx0XHR2YXIgX2NsYXNzID0gJy5ncmlkLXJvd3MtJyArIChBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0Jy0nLFxuXHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGxlbmd0aENsYXNzTmFtZSwgdGVtcGxhdGUucm93cykpICsgKCctY29scy0nICsgKEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHQnLScsXG5cdFx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkbWFwLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkbGVuZ3RoQ2xhc3NOYW1lLCB0ZW1wbGF0ZS5jb2x1bW5zKSkgKyAoJy1zcGFjZS14LScgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGxlbmd0aENsYXNzTmFtZSh0ZW1wbGF0ZS5zcGFjaW5nLmEpICsgKCctc3BhY2UteS0nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGxlbmd0aENsYXNzTmFtZSh0ZW1wbGF0ZS5zcGFjaW5nLmIpKSkpKSkpO1xuXHRcdFx0XHR2YXIgbW9kZXJuR3JpZCA9IF9jbGFzcyArICgneycgKyAoY29sdW1ucyArIChyb3dzICsgKGdhcFggKyAoZ2FwWSArICd9JykpKSkpO1xuXHRcdFx0XHR2YXIgc3VwcG9ydHMgPSAnQHN1cHBvcnRzIChkaXNwbGF5OmdyaWQpIHsnICsgKG1vZGVybkdyaWQgKyAnfScpO1xuXHRcdFx0XHR2YXIgYmFzZSA9IF9jbGFzcyArICgneycgKyAobXNDb2x1bW5zICsgKG1zUm93cyArICd9JykpKTtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbYmFzZSwgc3VwcG9ydHNdKTtcblx0XHRcdGNhc2UgJ0dyaWRQb3NpdGlvbic6XG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHJ1bGUuYTtcblx0XHRcdFx0dmFyIG1zUG9zaXRpb24gPSBBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0JyAnLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0Jy1tcy1ncmlkLXJvdzogJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9zaXRpb24ucm93KSArICc7JyksXG5cdFx0XHRcdFx0XHRcdCctbXMtZ3JpZC1yb3ctc3BhbjogJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9zaXRpb24uaGVpZ2h0KSArICc7JyksXG5cdFx0XHRcdFx0XHRcdCctbXMtZ3JpZC1jb2x1bW46ICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvc2l0aW9uLmNvbCkgKyAnOycpLFxuXHRcdFx0XHRcdFx0XHQnLW1zLWdyaWQtY29sdW1uLXNwYW46ICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvc2l0aW9uLndpZHRoKSArICc7Jylcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0dmFyIG1vZGVyblBvc2l0aW9uID0gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCdncmlkLXJvdzogJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9zaXRpb24ucm93KSArICgnIC8gJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9zaXRpb24ucm93ICsgcG9zaXRpb24uaGVpZ2h0KSArICc7JykpKSxcblx0XHRcdFx0XHRcdFx0J2dyaWQtY29sdW1uOiAnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChwb3NpdGlvbi5jb2wpICsgKCcgLyAnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChwb3NpdGlvbi5jb2wgKyBwb3NpdGlvbi53aWR0aCkgKyAnOycpKSlcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0dmFyIF9jbGFzcyA9ICcuZ3JpZC1wb3MtJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9zaXRpb24ucm93KSArICgnLScgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvc2l0aW9uLmNvbCkgKyAoJy0nICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChwb3NpdGlvbi53aWR0aCkgKyAoJy0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvc2l0aW9uLmhlaWdodCkpKSkpKSk7XG5cdFx0XHRcdHZhciBtb2Rlcm5HcmlkID0gX2NsYXNzICsgKCd7JyArIChtb2Rlcm5Qb3NpdGlvbiArICd9JykpO1xuXHRcdFx0XHR2YXIgc3VwcG9ydHMgPSAnQHN1cHBvcnRzIChkaXNwbGF5OmdyaWQpIHsnICsgKG1vZGVybkdyaWQgKyAnfScpO1xuXHRcdFx0XHR2YXIgYmFzZSA9IF9jbGFzcyArICgneycgKyAobXNQb3NpdGlvbiArICd9JykpO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtiYXNlLCBzdXBwb3J0c10pO1xuXHRcdFx0Y2FzZSAnUHNldWRvU2VsZWN0b3InOlxuXHRcdFx0XHR2YXIgX2NsYXNzID0gcnVsZS5hO1xuXHRcdFx0XHR2YXIgc3R5bGVzID0gcnVsZS5iO1xuXHRcdFx0XHR2YXIgcmVuZGVyUHNldWRvUnVsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuXHRcdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZVJ1bGUsXG5cdFx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdFx0c3R5bGUsXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChfY2xhc3MpKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIEEyKCRlbG0kY29yZSRMaXN0JGNvbmNhdE1hcCwgcmVuZGVyUHNldWRvUnVsZSwgc3R5bGVzKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciB0cmFuc2Zvcm0gPSBydWxlLmE7XG5cdFx0XHRcdHZhciB2YWwgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkdHJhbnNmb3JtVmFsdWUodHJhbnNmb3JtKTtcblx0XHRcdFx0dmFyIF9jbGFzcyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0cmFuc2Zvcm1DbGFzcyh0cmFuc2Zvcm0pO1xuXHRcdFx0XHR2YXIgX3YxMiA9IF9VdGlsc19UdXBsZTIoX2NsYXNzLCB2YWwpO1xuXHRcdFx0XHRpZiAoKF92MTIuYS4kID09PSAnSnVzdCcpICYmIChfdjEyLmIuJCA9PT0gJ0p1c3QnKSkge1xuXHRcdFx0XHRcdHZhciBjbHMgPSBfdjEyLmEuYTtcblx0XHRcdFx0XHR2YXIgdiA9IF92MTIuYi5hO1xuXHRcdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZSxcblx0XHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRtYXliZVBzZXVkbyxcblx0XHRcdFx0XHRcdCcuJyArIGNscyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQcm9wZXJ0eSwgJ3RyYW5zZm9ybScsIHYpXG5cdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZW5jb2RlU3R5bGVzID0gRjIoXG5cdGZ1bmN0aW9uIChvcHRpb25zLCBzdHlsZXNoZWV0KSB7XG5cdFx0cmV0dXJuICRlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0XHRBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRmdW5jdGlvbiAoc3R5bGUpIHtcblx0XHRcdFx0XHR2YXIgc3R5bGVkID0gQTMoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclN0eWxlUnVsZSwgb3B0aW9ucywgc3R5bGUsICRlbG0kY29yZSRNYXliZSROb3RoaW5nKTtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRnZXRTdHlsZU5hbWUoc3R5bGUpLFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QsICRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcsIHN0eWxlZCkpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdHlsZXNoZWV0KSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRicmFja2V0ID0gRjIoXG5cdGZ1bmN0aW9uIChzZWxlY3RvciwgcnVsZXMpIHtcblx0XHR2YXIgcmVuZGVyUGFpciA9IGZ1bmN0aW9uIChfdjApIHtcblx0XHRcdHZhciBuYW1lID0gX3YwLmE7XG5cdFx0XHR2YXIgdmFsID0gX3YwLmI7XG5cdFx0XHRyZXR1cm4gbmFtZSArICgnOiAnICsgKHZhbCArICc7JykpO1xuXHRcdH07XG5cdFx0cmV0dXJuIHNlbGVjdG9yICsgKCcgeycgKyAoQTIoXG5cdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHQnJyxcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgcmVuZGVyUGFpciwgcnVsZXMpKSArICd9JykpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9udFJ1bGUgPSBGMyhcblx0ZnVuY3Rpb24gKG5hbWUsIG1vZGlmaWVyLCBfdjApIHtcblx0XHR2YXIgcGFyZW50QWRqID0gX3YwLmE7XG5cdFx0dmFyIHRleHRBZGp1c3RtZW50ID0gX3YwLmI7XG5cdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGJyYWNrZXQsICcuJyArIChuYW1lICsgKCcuJyArIChtb2RpZmllciArICgnLCAnICsgKCcuJyArIChuYW1lICsgKCcgLicgKyBtb2RpZmllcikpKSkpKSksIHBhcmVudEFkaiksXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRicmFja2V0LCAnLicgKyAobmFtZSArICgnLicgKyAobW9kaWZpZXIgKyAoJz4gLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dCArICgnLCAuJyArIChuYW1lICsgKCcgLicgKyAobW9kaWZpZXIgKyAoJyA+IC4nICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dCkpKSkpKSkpKSksIHRleHRBZGp1c3RtZW50KVxuXHRcdFx0XSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJGb250QWRqdXN0bWVudFJ1bGUgPSBGMyhcblx0ZnVuY3Rpb24gKGZvbnRUb0FkanVzdCwgX3YwLCBvdGhlckZvbnROYW1lKSB7XG5cdFx0dmFyIGZ1bGwgPSBfdjAuYTtcblx0XHR2YXIgY2FwaXRhbCA9IF92MC5iO1xuXHRcdHZhciBuYW1lID0gX1V0aWxzX2VxKGZvbnRUb0FkanVzdCwgb3RoZXJGb250TmFtZSkgPyBmb250VG9BZGp1c3QgOiAob3RoZXJGb250TmFtZSArICgnIC4nICsgZm9udFRvQWRqdXN0KSk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0JyAnLFxuXHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRBMygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9udFJ1bGUsIG5hbWUsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpemVCeUNhcGl0YWwsIGNhcGl0YWwpLFxuXHRcdFx0XHRBMygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9udFJ1bGUsIG5hbWUsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmZ1bGxTaXplLCBmdWxsKSkpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyTnVsbEFkanVzdG1lbnRSdWxlID0gRjIoXG5cdGZ1bmN0aW9uIChmb250VG9BZGp1c3QsIG90aGVyRm9udE5hbWUpIHtcblx0XHR2YXIgbmFtZSA9IF9VdGlsc19lcShmb250VG9BZGp1c3QsIG90aGVyRm9udE5hbWUpID8gZm9udFRvQWRqdXN0IDogKG90aGVyRm9udE5hbWUgKyAoJyAuJyArIGZvbnRUb0FkanVzdCkpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdCcgJyxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRicmFja2V0LFxuXHRcdFx0XHRcdCcuJyArIChuYW1lICsgKCcuJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zaXplQnlDYXBpdGFsICsgKCcsICcgKyAoJy4nICsgKG5hbWUgKyAoJyAuJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpemVCeUNhcGl0YWwpKSkpKSkpLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMignbGluZS1oZWlnaHQnLCAnMScpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGJyYWNrZXQsXG5cdFx0XHRcdFx0Jy4nICsgKG5hbWUgKyAoJy4nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpemVCeUNhcGl0YWwgKyAoJz4gLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMudGV4dCArICgnLCAuJyArIChuYW1lICsgKCcgLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2l6ZUJ5Q2FwaXRhbCArICgnID4gLicgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0KSkpKSkpKSkpKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoJ3ZlcnRpY2FsLWFsaWduJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMignbGluZS1oZWlnaHQnLCAnMScpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRqdXN0ID0gRjMoXG5cdGZ1bmN0aW9uIChzaXplLCBoZWlnaHQsIHZlcnRpY2FsKSB7XG5cdFx0cmV0dXJuIHtoZWlnaHQ6IGhlaWdodCAvIHNpemUsIHNpemU6IHNpemUsIHZlcnRpY2FsOiB2ZXJ0aWNhbH07XG5cdH0pO1xudmFyICRlbG0kY29yZSRMaXN0JGZpbHRlciA9IEYyKFxuXHRmdW5jdGlvbiAoaXNHb29kLCBsaXN0KSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHgsIHhzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGlzR29vZCh4KSA/IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHgsIHhzKSA6IHhzO1xuXHRcdFx0XHR9KSxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdGxpc3QpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkTGlzdCRtYXhpbXVtID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0aWYgKGxpc3QuYikge1xuXHRcdHZhciB4ID0gbGlzdC5hO1xuXHRcdHZhciB4cyA9IGxpc3QuYjtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRBMygkZWxtJGNvcmUkTGlzdCRmb2xkbCwgJGVsbSRjb3JlJEJhc2ljcyRtYXgsIHgsIHhzKSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSRMaXN0JG1pbmltdW0gPSBmdW5jdGlvbiAobGlzdCkge1xuXHRpZiAobGlzdC5iKSB7XG5cdFx0dmFyIHggPSBsaXN0LmE7XG5cdFx0dmFyIHhzID0gbGlzdC5iO1xuXHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEzKCRlbG0kY29yZSRMaXN0JGZvbGRsLCAkZWxtJGNvcmUkQmFzaWNzJG1pbiwgeCwgeHMpKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cbn07XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRuZXEgPSBfVXRpbHNfbm90RXF1YWw7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGNvbnZlcnRBZGp1c3RtZW50ID0gZnVuY3Rpb24gKGFkanVzdG1lbnQpIHtcblx0dmFyIGxpbmVzID0gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFthZGp1c3RtZW50LmNhcGl0YWwsIGFkanVzdG1lbnQuYmFzZWxpbmUsIGFkanVzdG1lbnQuZGVzY2VuZGVyLCBhZGp1c3RtZW50Lmxvd2VyY2FzZV0pO1xuXHR2YXIgbGluZUhlaWdodCA9IDEuNTtcblx0dmFyIG5vcm1hbERlc2NlbmRlciA9IChsaW5lSGVpZ2h0IC0gMSkgLyAyO1xuXHR2YXIgb2xkTWlkZGxlID0gbGluZUhlaWdodCAvIDI7XG5cdHZhciBkZXNjZW5kZXIgPSBBMihcblx0XHQkZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQsXG5cdFx0YWRqdXN0bWVudC5kZXNjZW5kZXIsXG5cdFx0JGVsbSRjb3JlJExpc3QkbWluaW11bShsaW5lcykpO1xuXHR2YXIgbmV3QmFzZWxpbmUgPSBBMihcblx0XHQkZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQsXG5cdFx0YWRqdXN0bWVudC5iYXNlbGluZSxcblx0XHQkZWxtJGNvcmUkTGlzdCRtaW5pbXVtKFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGZpbHRlcixcblx0XHRcdFx0ZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRyZXR1cm4gIV9VdGlsc19lcSh4LCBkZXNjZW5kZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRsaW5lcykpKTtcblx0dmFyIGJhc2UgPSBsaW5lSGVpZ2h0O1xuXHR2YXIgYXNjZW5kZXIgPSBBMihcblx0XHQkZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQsXG5cdFx0YWRqdXN0bWVudC5jYXBpdGFsLFxuXHRcdCRlbG0kY29yZSRMaXN0JG1heGltdW0obGluZXMpKTtcblx0dmFyIGNhcGl0YWxTaXplID0gMSAvIChhc2NlbmRlciAtIG5ld0Jhc2VsaW5lKTtcblx0dmFyIGNhcGl0YWxWZXJ0aWNhbCA9IDEgLSBhc2NlbmRlcjtcblx0dmFyIGZ1bGxTaXplID0gMSAvIChhc2NlbmRlciAtIGRlc2NlbmRlcik7XG5cdHZhciBmdWxsVmVydGljYWwgPSAxIC0gYXNjZW5kZXI7XG5cdHZhciBuZXdDYXBpdGFsTWlkZGxlID0gKChhc2NlbmRlciAtIG5ld0Jhc2VsaW5lKSAvIDIpICsgbmV3QmFzZWxpbmU7XG5cdHZhciBuZXdGdWxsTWlkZGxlID0gKChhc2NlbmRlciAtIGRlc2NlbmRlcikgLyAyKSArIGRlc2NlbmRlcjtcblx0cmV0dXJuIHtcblx0XHRjYXBpdGFsOiBBMygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRqdXN0LCBjYXBpdGFsU2l6ZSwgYXNjZW5kZXIgLSBuZXdCYXNlbGluZSwgY2FwaXRhbFZlcnRpY2FsKSxcblx0XHRmdWxsOiBBMygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRqdXN0LCBmdWxsU2l6ZSwgYXNjZW5kZXIgLSBkZXNjZW5kZXIsIGZ1bGxWZXJ0aWNhbClcblx0fTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvbnRBZGp1c3RtZW50UnVsZXMgPSBmdW5jdGlvbiAoY29udmVydGVkKSB7XG5cdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X1V0aWxzX1R1cGxlMignZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRdKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdsaW5lLWhlaWdodCcsXG5cdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUZsb2F0KGNvbnZlcnRlZC5oZWlnaHQpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J3ZlcnRpY2FsLWFsaWduJyxcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoY29udmVydGVkLnZlcnRpY2FsKSArICdlbScpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnZm9udC1zaXplJyxcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoY29udmVydGVkLnNpemUpICsgJ2VtJylcblx0XHRcdF0pKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHR5cGVmYWNlQWRqdXN0bWVudCA9IGZ1bmN0aW9uICh0eXBlZmFjZXMpIHtcblx0cmV0dXJuIEEzKFxuXHRcdCRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKGZhY2UsIGZvdW5kKSB7XG5cdFx0XHRcdGlmIChmb3VuZC4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRpZiAoZmFjZS4kID09PSAnRm9udFdpdGgnKSB7XG5cdFx0XHRcdFx0XHR2YXIgX3dpdGggPSBmYWNlLmE7XG5cdFx0XHRcdFx0XHR2YXIgX3YyID0gX3dpdGguYWRqdXN0bWVudDtcblx0XHRcdFx0XHRcdGlmIChfdjIuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmb3VuZDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBhZGp1c3RtZW50ID0gX3YyLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvbnRBZGp1c3RtZW50UnVsZXMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uICgkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICQuZnVsbDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkY29udmVydEFkanVzdG1lbnQoYWRqdXN0bWVudCkpKSxcblx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb250QWRqdXN0bWVudFJ1bGVzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoJCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAkLmNhcGl0YWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGNvbnZlcnRBZGp1c3RtZW50KGFkanVzdG1lbnQpKSkpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZvdW5kO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZm91bmQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdCRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdHR5cGVmYWNlcyk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJUb3BMZXZlbFZhbHVlcyA9IGZ1bmN0aW9uIChydWxlcykge1xuXHR2YXIgd2l0aEltcG9ydCA9IGZ1bmN0aW9uIChmb250KSB7XG5cdFx0aWYgKGZvbnQuJCA9PT0gJ0ltcG9ydEZvbnQnKSB7XG5cdFx0XHR2YXIgdXJsID0gZm9udC5iO1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KCdAaW1wb3J0IHVybChcXCcnICsgKHVybCArICdcXCcpOycpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fTtcblx0dmFyIGZvbnRJbXBvcnRzID0gZnVuY3Rpb24gKF92Mikge1xuXHRcdHZhciBuYW1lID0gX3YyLmE7XG5cdFx0dmFyIHR5cGVmYWNlcyA9IF92Mi5iO1xuXHRcdHZhciBpbXBvcnRzID0gQTIoXG5cdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHQnXFxuJyxcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGZpbHRlck1hcCwgd2l0aEltcG9ydCwgdHlwZWZhY2VzKSk7XG5cdFx0cmV0dXJuIGltcG9ydHM7XG5cdH07XG5cdHZhciBhbGxOYW1lcyA9IEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgJGVsbSRjb3JlJFR1cGxlJGZpcnN0LCBydWxlcyk7XG5cdHZhciBmb250QWRqdXN0bWVudHMgPSBmdW5jdGlvbiAoX3YxKSB7XG5cdFx0dmFyIG5hbWUgPSBfdjEuYTtcblx0XHR2YXIgdHlwZWZhY2VzID0gX3YxLmI7XG5cdFx0dmFyIF92MCA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0eXBlZmFjZUFkanVzdG1lbnQodHlwZWZhY2VzKTtcblx0XHRpZiAoX3YwLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdCcnLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlck51bGxBZGp1c3RtZW50UnVsZShuYW1lKSxcblx0XHRcdFx0XHRhbGxOYW1lcykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgYWRqdXN0bWVudCA9IF92MC5hO1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdCcnLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlckZvbnRBZGp1c3RtZW50UnVsZSwgbmFtZSwgYWRqdXN0bWVudCksXG5cdFx0XHRcdFx0YWxsTmFtZXMpKTtcblx0XHR9XG5cdH07XG5cdHJldHVybiBfVXRpbHNfYXAoXG5cdFx0QTIoXG5cdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHQnXFxuJyxcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgZm9udEltcG9ydHMsIHJ1bGVzKSksXG5cdFx0QTIoXG5cdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHQnXFxuJyxcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgZm9udEFkanVzdG1lbnRzLCBydWxlcykpKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRvcExldmVsVmFsdWUgPSBmdW5jdGlvbiAocnVsZSkge1xuXHRpZiAocnVsZS4kID09PSAnRm9udEZhbWlseScpIHtcblx0XHR2YXIgbmFtZSA9IHJ1bGUuYTtcblx0XHR2YXIgdHlwZWZhY2VzID0gcnVsZS5iO1xuXHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdF9VdGlsc19UdXBsZTIobmFtZSwgdHlwZWZhY2VzKSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0b1N0eWxlU2hlZXRTdHJpbmcgPSBGMihcblx0ZnVuY3Rpb24gKG9wdGlvbnMsIHN0eWxlc2hlZXQpIHtcblx0XHR2YXIgY29tYmluZSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHN0eWxlLCByZW5kZXJlZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHJ1bGVzOiBfVXRpbHNfYXAoXG5cdFx0XHRcdFx0XHRyZW5kZXJlZC5ydWxlcyxcblx0XHRcdFx0XHRcdEEzKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJTdHlsZVJ1bGUsIG9wdGlvbnMsIHN0eWxlLCAkZWxtJGNvcmUkTWF5YmUkTm90aGluZykpLFxuXHRcdFx0XHRcdHRvcExldmVsOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHR2YXIgX3YxID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRvcExldmVsVmFsdWUoc3R5bGUpO1xuXHRcdFx0XHRcdFx0aWYgKF92MS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlbmRlcmVkLnRvcExldmVsO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRvcExldmVsID0gX3YxLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkTGlzdCRjb25zLCB0b3BMZXZlbCwgcmVuZGVyZWQudG9wTGV2ZWwpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0oKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0dmFyIF92MCA9IEEzKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRjb21iaW5lLFxuXHRcdFx0e3J1bGVzOiBfTGlzdF9OaWwsIHRvcExldmVsOiBfTGlzdF9OaWx9LFxuXHRcdFx0c3R5bGVzaGVldCk7XG5cdFx0dmFyIHRvcExldmVsID0gX3YwLnRvcExldmVsO1xuXHRcdHZhciBydWxlcyA9IF92MC5ydWxlcztcblx0XHRyZXR1cm4gX1V0aWxzX2FwKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclRvcExldmVsVmFsdWVzKHRvcExldmVsKSxcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckY29uY2F0KHJ1bGVzKSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0b1N0eWxlU2hlZXQgPSBGMihcblx0ZnVuY3Rpb24gKG9wdGlvbnMsIHN0eWxlU2hlZXQpIHtcblx0XHR2YXIgX3YwID0gb3B0aW9ucy5tb2RlO1xuXHRcdHN3aXRjaCAoX3YwLiQpIHtcblx0XHRcdGNhc2UgJ0xheW91dCc6XG5cdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZSxcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0JGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGUsXG5cdFx0XHRcdFx0XHRcdCdzdHlsZScsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0ZXh0KFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRvU3R5bGVTaGVldFN0cmluZywgb3B0aW9ucywgc3R5bGVTaGVldCkpXG5cdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHRjYXNlICdOb1N0YXRpY1N0eWxlU2hlZXQnOlxuXHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0JGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGUsXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlLFxuXHRcdFx0XHRcdFx0XHQnc3R5bGUnLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdGV4dChcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0b1N0eWxlU2hlZXRTdHJpbmcsIG9wdGlvbnMsIHN0eWxlU2hlZXQpKVxuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlLFxuXHRcdFx0XHRcdCdlbG0tdWktcnVsZXMnLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9wZXJ0eSxcblx0XHRcdFx0XHRcdFx0J3J1bGVzJyxcblx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVuY29kZVN0eWxlcywgb3B0aW9ucywgc3R5bGVTaGVldCkpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9OaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVtYmVkS2V5ZWQgPSBGNChcblx0ZnVuY3Rpb24gKF9zdGF0aWMsIG9wdHMsIHN0eWxlcywgY2hpbGRyZW4pIHtcblx0XHR2YXIgZHluYW1pY1N0eWxlU2hlZXQgPSBBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0b1N0eWxlU2hlZXQsXG5cdFx0XHRvcHRzLFxuXHRcdFx0QTMoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVkdWNlU3R5bGVzLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRTZXQkZW1wdHksXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlckZvY3VzU3R5bGUob3B0cy5mb2N1cykpLFxuXHRcdFx0XHRzdHlsZXMpLmIpO1xuXHRcdHJldHVybiBfc3RhdGljID8gQTIoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J3N0YXRpYy1zdHlsZXNoZWV0Jyxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHN0YXRpY1Jvb3Qob3B0cykpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoJ2R5bmFtaWMtc3R5bGVzaGVldCcsIGR5bmFtaWNTdHlsZVNoZWV0KSxcblx0XHRcdFx0Y2hpbGRyZW4pKSA6IEEyKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdF9VdGlsc19UdXBsZTIoJ2R5bmFtaWMtc3R5bGVzaGVldCcsIGR5bmFtaWNTdHlsZVNoZWV0KSxcblx0XHRcdGNoaWxkcmVuKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVtYmVkV2l0aCA9IEY0KFxuXHRmdW5jdGlvbiAoX3N0YXRpYywgb3B0cywgc3R5bGVzLCBjaGlsZHJlbikge1xuXHRcdHZhciBkeW5hbWljU3R5bGVTaGVldCA9IEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRvU3R5bGVTaGVldCxcblx0XHRcdG9wdHMsXG5cdFx0XHRBMyhcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZWR1Y2VTdHlsZXMsXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFNldCRlbXB0eSxcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyRm9jdXNTdHlsZShvcHRzLmZvY3VzKSksXG5cdFx0XHRcdHN0eWxlcykuYik7XG5cdFx0cmV0dXJuIF9zdGF0aWMgPyBBMihcblx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkc3RhdGljUm9vdChvcHRzKSxcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGR5bmFtaWNTdHlsZVNoZWV0LCBjaGlsZHJlbikpIDogQTIoJGVsbSRjb3JlJExpc3QkY29ucywgZHluYW1pY1N0eWxlU2hlZXQsIGNoaWxkcmVuKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0QmV0d2VlbiA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoNDUpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodEZpbGwgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnKDM3KTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20ka2V5ZWROb2RlID0gZnVuY3Rpb24gKHRhZykge1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fa2V5ZWROb2RlKFxuXHRcdF9WaXJ0dWFsRG9tX25vU2NyaXB0KHRhZykpO1xufTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJG5vdCA9IF9CYXNpY3Nfbm90O1xudmFyICRlbG0kaHRtbCRIdG1sJHAgPSBfVmlydHVhbERvbV9ub2RlKCdwJyk7XG52YXIgJGVsbSRjb3JlJEJpdHdpc2UkYW5kID0gX0JpdHdpc2VfYW5kO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHByZXNlbnQgPSBGMihcblx0ZnVuY3Rpb24gKG15RmxhZywgX3YwKSB7XG5cdFx0dmFyIGZpZWxkT25lID0gX3YwLmE7XG5cdFx0dmFyIGZpZWxkVHdvID0gX3YwLmI7XG5cdFx0aWYgKG15RmxhZy4kID09PSAnRmxhZycpIHtcblx0XHRcdHZhciBmaXJzdCA9IG15RmxhZy5hO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19lcShmaXJzdCAmIGZpZWxkT25lLCBmaXJzdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBzZWNvbmQgPSBteUZsYWcuYTtcblx0XHRcdHJldHVybiBfVXRpbHNfZXEoc2Vjb25kICYgZmllbGRUd28sIHNlY29uZCk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGh0bWwkSHRtbCRzID0gX1ZpcnR1YWxEb21fbm9kZSgncycpO1xudmFyICRlbG0kaHRtbCRIdG1sJHUgPSBfVmlydHVhbERvbV9ub2RlKCd1Jyk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhCZXR3ZWVuID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZyg0NCk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhGaWxsID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZygzOSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZpbmFsaXplTm9kZSA9IEY2KFxuXHRmdW5jdGlvbiAoaGFzLCBub2RlLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgZW1iZWRNb2RlLCBwYXJlbnRDb250ZXh0KSB7XG5cdFx0dmFyIGNyZWF0ZU5vZGUgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChub2RlTmFtZSwgYXR0cnMpIHtcblx0XHRcdFx0aWYgKGNoaWxkcmVuLiQgPT09ICdLZXllZCcpIHtcblx0XHRcdFx0XHR2YXIga2V5ZWQgPSBjaGlsZHJlbi5hO1xuXHRcdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRrZXllZE5vZGUsXG5cdFx0XHRcdFx0XHRub2RlTmFtZSxcblx0XHRcdFx0XHRcdGF0dHJzLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGVtYmVkTW9kZS4kKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTm9TdHlsZVNoZWV0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBrZXllZDtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdPbmx5RHluYW1pYyc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgb3B0cyA9IGVtYmVkTW9kZS5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHN0eWxlcyA9IGVtYmVkTW9kZS5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRlbWJlZEtleWVkLCBmYWxzZSwgb3B0cywgc3R5bGVzLCBrZXllZCk7XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBvcHRzID0gZW1iZWRNb2RlLmE7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgc3R5bGVzID0gZW1iZWRNb2RlLmI7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTQoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVtYmVkS2V5ZWQsIHRydWUsIG9wdHMsIHN0eWxlcywga2V5ZWQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciB1bmtleWVkID0gY2hpbGRyZW4uYTtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobm9kZU5hbWUpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICRlbG0kaHRtbCRIdG1sJGRpdjtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdwJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGh0bWwkSHRtbCRwO1xuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGUobm9kZU5hbWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KCksXG5cdFx0XHRcdFx0XHRhdHRycyxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbWJlZE1vZGUuJCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ05vU3R5bGVTaGVldCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdW5rZXllZDtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdPbmx5RHluYW1pYyc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgb3B0cyA9IGVtYmVkTW9kZS5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHN0eWxlcyA9IGVtYmVkTW9kZS5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRlbWJlZFdpdGgsIGZhbHNlLCBvcHRzLCBzdHlsZXMsIHVua2V5ZWQpO1xuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgb3B0cyA9IGVtYmVkTW9kZS5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHN0eWxlcyA9IGVtYmVkTW9kZS5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRlbWJlZFdpdGgsIHRydWUsIG9wdHMsIHN0eWxlcywgdW5rZXllZCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0oKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHZhciBodG1sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0c3dpdGNoIChub2RlLiQpIHtcblx0XHRcdFx0Y2FzZSAnR2VuZXJpYyc6XG5cdFx0XHRcdFx0cmV0dXJuIEEyKGNyZWF0ZU5vZGUsICdkaXYnLCBhdHRyaWJ1dGVzKTtcblx0XHRcdFx0Y2FzZSAnTm9kZU5hbWUnOlxuXHRcdFx0XHRcdHZhciBub2RlTmFtZSA9IG5vZGUuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTIoY3JlYXRlTm9kZSwgbm9kZU5hbWUsIGF0dHJpYnV0ZXMpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHZhciBub2RlTmFtZSA9IG5vZGUuYTtcblx0XHRcdFx0XHR2YXIgaW50ZXJuYWwgPSBub2RlLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdFx0JGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGUsXG5cdFx0XHRcdFx0XHRub2RlTmFtZSxcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRjcmVhdGVOb2RlLFxuXHRcdFx0XHRcdFx0XHRcdGludGVybmFsLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9XG5cdFx0fSgpO1xuXHRcdHN3aXRjaCAocGFyZW50Q29udGV4dC4kKSB7XG5cdFx0XHRjYXNlICdBc1Jvdyc6XG5cdFx0XHRcdHJldHVybiAoQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckcHJlc2VudCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhGaWxsLCBoYXMpICYmICghQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckcHJlc2VudCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhCZXR3ZWVuLCBoYXMpKSkgPyBodG1sIDogKEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHByZXNlbnQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFsaWduUmlnaHQsIGhhcykgPyBBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR1LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcyhcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zaW5nbGUsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNvbnRhaW5lciwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuY29udGVudENlbnRlclksICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyUmlnaHRdKSkpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbaHRtbF0pKSA6IChBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRwcmVzZW50LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRjZW50ZXJYLCBoYXMpID8gQTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkcyxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250YWluZXIsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNvbnRlbnRDZW50ZXJZLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnbkNvbnRhaW5lckNlbnRlclhdKSkpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbaHRtbF0pKSA6IGh0bWwpKTtcblx0XHRcdGNhc2UgJ0FzQ29sdW1uJzpcblx0XHRcdFx0cmV0dXJuIChBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRwcmVzZW50LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRoZWlnaHRGaWxsLCBoYXMpICYmICghQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckcHJlc2VudCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0QmV0d2VlbiwgaGFzKSkpID8gaHRtbCA6IChBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRwcmVzZW50LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRjZW50ZXJZLCBoYXMpID8gQTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkcyxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250YWluZXIsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQ2VudGVyWV0pKSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtodG1sXSkpIDogKEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHByZXNlbnQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFsaWduQm90dG9tLCBoYXMpID8gQTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250YWluZXIsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ29udGFpbmVyQm90dG9tXSkpKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W2h0bWxdKSkgOiBodG1sKSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRMaXN0JGlzRW1wdHkgPSBmdW5jdGlvbiAoeHMpIHtcblx0aWYgKCF4cy5iKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJHRleHQgPSAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdGV4dDtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkdGV4dEVsZW1lbnRDbGFzc2VzID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55ICsgKCcgJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0ICsgKCcgJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aENvbnRlbnQgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0Q29udGVudCkpKSkpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRleHRFbGVtZW50Q2xhc3Nlcylcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdHIpXG5cdFx0XHRdKSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudEZpbGxDbGFzc2VzID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55ICsgKCcgJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy50ZXh0ICsgKCcgJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aEZpbGwgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbCkpKSkpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudEZpbGwgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudEZpbGxDbGFzc2VzKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHN0cilcblx0XHRcdF0pKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGNyZWF0ZUVsZW1lbnQgPSBGMyhcblx0ZnVuY3Rpb24gKGNvbnRleHQsIGNoaWxkcmVuLCByZW5kZXJlZCkge1xuXHRcdHZhciBnYXRoZXJLZXllZCA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKF92OCwgX3Y5KSB7XG5cdFx0XHRcdHZhciBrZXkgPSBfdjguYTtcblx0XHRcdFx0dmFyIGNoaWxkID0gX3Y4LmI7XG5cdFx0XHRcdHZhciBodG1scyA9IF92OS5hO1xuXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZXMgPSBfdjkuYjtcblx0XHRcdFx0c3dpdGNoIChjaGlsZC4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnVW5zdHlsZWQnOlxuXHRcdFx0XHRcdFx0dmFyIGh0bWwgPSBjaGlsZC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19lcShjb250ZXh0LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYXNQYXJhZ3JhcGgpID8gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0XHRcdFx0aHRtbChjb250ZXh0KSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbHMpLFxuXHRcdFx0XHRcdFx0XHRleGlzdGluZ1N0eWxlcykgOiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdFx0XHRodG1sKGNvbnRleHQpKSxcblx0XHRcdFx0XHRcdFx0XHRodG1scyksXG5cdFx0XHRcdFx0XHRcdGV4aXN0aW5nU3R5bGVzKTtcblx0XHRcdFx0XHRjYXNlICdTdHlsZWQnOlxuXHRcdFx0XHRcdFx0dmFyIHN0eWxlZCA9IGNoaWxkLmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX2VxKGNvbnRleHQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc1BhcmFncmFwaCkgPyBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihzdHlsZWQuaHRtbCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE5vU3R5bGVTaGVldCwgY29udGV4dCkpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxzKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkaXNFbXB0eShleGlzdGluZ1N0eWxlcykgPyBzdHlsZWQuc3R5bGVzIDogX1V0aWxzX2FwKHN0eWxlZC5zdHlsZXMsIGV4aXN0aW5nU3R5bGVzKSkgOiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMihzdHlsZWQuaHRtbCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE5vU3R5bGVTaGVldCwgY29udGV4dCkpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxzKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkaXNFbXB0eShleGlzdGluZ1N0eWxlcykgPyBzdHlsZWQuc3R5bGVzIDogX1V0aWxzX2FwKHN0eWxlZC5zdHlsZXMsIGV4aXN0aW5nU3R5bGVzKSk7XG5cdFx0XHRcdFx0Y2FzZSAnVGV4dCc6XG5cdFx0XHRcdFx0XHR2YXIgc3RyID0gY2hpbGQuYTtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHRcdFx0XHRfVXRpbHNfZXEoY29udGV4dCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFzRWwpID8gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRleHRFbGVtZW50RmlsbChzdHIpIDogJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRleHRFbGVtZW50KHN0cikpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxzKSxcblx0XHRcdFx0XHRcdFx0ZXhpc3RpbmdTdHlsZXMpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihodG1scywgZXhpc3RpbmdTdHlsZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR2YXIgZ2F0aGVyID0gRjIoXG5cdFx0XHRmdW5jdGlvbiAoY2hpbGQsIF92Nikge1xuXHRcdFx0XHR2YXIgaHRtbHMgPSBfdjYuYTtcblx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVzID0gX3Y2LmI7XG5cdFx0XHRcdHN3aXRjaCAoY2hpbGQuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1Vuc3R5bGVkJzpcblx0XHRcdFx0XHRcdHZhciBodG1sID0gY2hpbGQuYTtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfZXEoY29udGV4dCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFzUGFyYWdyYXBoKSA/IF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0aHRtbChjb250ZXh0KSxcblx0XHRcdFx0XHRcdFx0XHRodG1scyksXG5cdFx0XHRcdFx0XHRcdGV4aXN0aW5nU3R5bGVzKSA6IF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0aHRtbChjb250ZXh0KSxcblx0XHRcdFx0XHRcdFx0XHRodG1scyksXG5cdFx0XHRcdFx0XHRcdGV4aXN0aW5nU3R5bGVzKTtcblx0XHRcdFx0XHRjYXNlICdTdHlsZWQnOlxuXHRcdFx0XHRcdFx0dmFyIHN0eWxlZCA9IGNoaWxkLmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX2VxKGNvbnRleHQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc1BhcmFncmFwaCkgPyBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdEEyKHN0eWxlZC5odG1sLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkTm9TdHlsZVNoZWV0LCBjb250ZXh0KSxcblx0XHRcdFx0XHRcdFx0XHRodG1scyksXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGlzRW1wdHkoZXhpc3RpbmdTdHlsZXMpID8gc3R5bGVkLnN0eWxlcyA6IF9VdGlsc19hcChzdHlsZWQuc3R5bGVzLCBleGlzdGluZ1N0eWxlcykpIDogX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRBMihzdHlsZWQuaHRtbCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE5vU3R5bGVTaGVldCwgY29udGV4dCksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbHMpLFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRpc0VtcHR5KGV4aXN0aW5nU3R5bGVzKSA/IHN0eWxlZC5zdHlsZXMgOiBfVXRpbHNfYXAoc3R5bGVkLnN0eWxlcywgZXhpc3RpbmdTdHlsZXMpKTtcblx0XHRcdFx0XHRjYXNlICdUZXh0Jzpcblx0XHRcdFx0XHRcdHZhciBzdHIgPSBjaGlsZC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0X1V0aWxzX2VxKGNvbnRleHQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc0VsKSA/ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudEZpbGwoc3RyKSA6ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudChzdHIpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxzKSxcblx0XHRcdFx0XHRcdFx0ZXhpc3RpbmdTdHlsZXMpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihodG1scywgZXhpc3RpbmdTdHlsZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRpZiAoY2hpbGRyZW4uJCA9PT0gJ0tleWVkJykge1xuXHRcdFx0dmFyIGtleWVkQ2hpbGRyZW4gPSBjaGlsZHJlbi5hO1xuXHRcdFx0dmFyIF92MSA9IEEzKFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0Z2F0aGVyS2V5ZWQsXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoX0xpc3RfTmlsLCBfTGlzdF9OaWwpLFxuXHRcdFx0XHRrZXllZENoaWxkcmVuKTtcblx0XHRcdHZhciBrZXllZCA9IF92MS5hO1xuXHRcdFx0dmFyIHN0eWxlcyA9IF92MS5iO1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9ICRlbG0kY29yZSRMaXN0JGlzRW1wdHkoc3R5bGVzKSA/IHJlbmRlcmVkLnN0eWxlcyA6IF9VdGlsc19hcChyZW5kZXJlZC5zdHlsZXMsIHN0eWxlcyk7XG5cdFx0XHRpZiAoIW5ld1N0eWxlcy5iKSB7XG5cdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW5zdHlsZWQoXG5cdFx0XHRcdFx0QTUoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmluYWxpemVOb2RlLFxuXHRcdFx0XHRcdFx0cmVuZGVyZWQuaGFzLFxuXHRcdFx0XHRcdFx0cmVuZGVyZWQubm9kZSxcblx0XHRcdFx0XHRcdHJlbmRlcmVkLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkS2V5ZWQoXG5cdFx0XHRcdFx0XHRcdEEzKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhZGRLZXllZENoaWxkcmVuLCAnbmVhcmJ5LWVsZW1lbnQtcGxzJywga2V5ZWQsIHJlbmRlcmVkLmNoaWxkcmVuKSksXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkTm9TdHlsZVNoZWV0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgYWxsU3R5bGVzID0gbmV3U3R5bGVzO1xuXHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFN0eWxlZChcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRodG1sOiBBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZpbmFsaXplTm9kZSxcblx0XHRcdFx0XHRcdFx0cmVuZGVyZWQuaGFzLFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlZC5ub2RlLFxuXHRcdFx0XHRcdFx0XHRyZW5kZXJlZC5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkS2V5ZWQoXG5cdFx0XHRcdFx0XHRcdFx0QTMoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZEtleWVkQ2hpbGRyZW4sICduZWFyYnktZWxlbWVudC1wbHMnLCBrZXllZCwgcmVuZGVyZWQuY2hpbGRyZW4pKSksXG5cdFx0XHRcdFx0XHRzdHlsZXM6IGFsbFN0eWxlc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgdW5rZXllZENoaWxkcmVuID0gY2hpbGRyZW4uYTtcblx0XHRcdHZhciBfdjMgPSBBMyhcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdGdhdGhlcixcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihfTGlzdF9OaWwsIF9MaXN0X05pbCksXG5cdFx0XHRcdHVua2V5ZWRDaGlsZHJlbik7XG5cdFx0XHR2YXIgdW5rZXllZCA9IF92My5hO1xuXHRcdFx0dmFyIHN0eWxlcyA9IF92My5iO1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9ICRlbG0kY29yZSRMaXN0JGlzRW1wdHkoc3R5bGVzKSA/IHJlbmRlcmVkLnN0eWxlcyA6IF9VdGlsc19hcChyZW5kZXJlZC5zdHlsZXMsIHN0eWxlcyk7XG5cdFx0XHRpZiAoIW5ld1N0eWxlcy5iKSB7XG5cdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW5zdHlsZWQoXG5cdFx0XHRcdFx0QTUoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZmluYWxpemVOb2RlLFxuXHRcdFx0XHRcdFx0cmVuZGVyZWQuaGFzLFxuXHRcdFx0XHRcdFx0cmVuZGVyZWQubm9kZSxcblx0XHRcdFx0XHRcdHJlbmRlcmVkLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW5rZXllZChcblx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZENoaWxkcmVuLCB1bmtleWVkLCByZW5kZXJlZC5jaGlsZHJlbikpLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE5vU3R5bGVTaGVldCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGFsbFN0eWxlcyA9IG5ld1N0eWxlcztcblx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZWQoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aHRtbDogQTQoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmaW5hbGl6ZU5vZGUsXG5cdFx0XHRcdFx0XHRcdHJlbmRlcmVkLmhhcyxcblx0XHRcdFx0XHRcdFx0cmVuZGVyZWQubm9kZSxcblx0XHRcdFx0XHRcdFx0cmVuZGVyZWQuYXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFVua2V5ZWQoXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZENoaWxkcmVuLCB1bmtleWVkLCByZW5kZXJlZC5jaGlsZHJlbikpKSxcblx0XHRcdFx0XHRcdHN0eWxlczogYWxsU3R5bGVzXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU2luZ2xlID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnU2luZ2xlJywgYTogYSwgYjogYiwgYzogY307XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdUcmFuc2Zvcm0nLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckRmllbGQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdGaWVsZCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkQml0d2lzZSRvciA9IF9CaXR3aXNlX29yO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCA9IEYyKFxuXHRmdW5jdGlvbiAobXlGbGFnLCBfdjApIHtcblx0XHR2YXIgb25lID0gX3YwLmE7XG5cdFx0dmFyIHR3byA9IF92MC5iO1xuXHRcdGlmIChteUZsYWcuJCA9PT0gJ0ZsYWcnKSB7XG5cdFx0XHR2YXIgZmlyc3QgPSBteUZsYWcuYTtcblx0XHRcdHJldHVybiBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRGaWVsZCwgZmlyc3QgfCBvbmUsIHR3byk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBzZWNvbmQgPSBteUZsYWcuYTtcblx0XHRcdHJldHVybiBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRGaWVsZCwgb25lLCBzZWNvbmQgfCB0d28pO1xuXHRcdH1cblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENoaWxkcmVuQmVoaW5kID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQ2hpbGRyZW5CZWhpbmQnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENoaWxkcmVuQmVoaW5kQW5kSW5Gcm9udCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0NoaWxkcmVuQmVoaW5kQW5kSW5Gcm9udCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQ2hpbGRyZW5JbkZyb250ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQ2hpbGRyZW5JbkZyb250JywgYTogYX07XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRuZWFyYnlFbGVtZW50ID0gRjIoXG5cdGZ1bmN0aW9uIChsb2NhdGlvbiwgZWxlbSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0c3dpdGNoIChsb2NhdGlvbi4kKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0Fib3ZlJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFskbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5uZWFyYnksICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpbmdsZSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWJvdmVdKSk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0JlbG93Jzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFskbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5uZWFyYnksICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpbmdsZSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYmVsb3ddKSk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ09uUmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm5lYXJieSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5vblJpZ2h0XSkpO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdPbkxlZnQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm5lYXJieSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5vbkxlZnRdKSk7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0luRnJvbnQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm5lYXJieSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5pbkZyb250XSkpO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdCcgJyxcblx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLm5lYXJieSwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuc2luZ2xlLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5iZWhpbmRdKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSgpKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGVsZW0uJCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnRW1wdHknOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQoJycpO1xuXHRcdFx0XHRcdFx0Y2FzZSAnVGV4dCc6XG5cdFx0XHRcdFx0XHRcdHZhciBzdHIgPSBlbGVtLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkdGV4dEVsZW1lbnQoc3RyKTtcblx0XHRcdFx0XHRcdGNhc2UgJ1Vuc3R5bGVkJzpcblx0XHRcdFx0XHRcdFx0dmFyIGh0bWwgPSBlbGVtLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBodG1sKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc0VsKTtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHZhciBzdHlsZWQgPSBlbGVtLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihzdHlsZWQuaHRtbCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE5vU3R5bGVTaGVldCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFzRWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSgpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZE5lYXJieUVsZW1lbnQgPSBGMyhcblx0ZnVuY3Rpb24gKGxvY2F0aW9uLCBlbGVtLCBleGlzdGluZykge1xuXHRcdHZhciBuZWFyYnkgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkbmVhcmJ5RWxlbWVudCwgbG9jYXRpb24sIGVsZW0pO1xuXHRcdHN3aXRjaCAoZXhpc3RpbmcuJCkge1xuXHRcdFx0Y2FzZSAnTm9OZWFyYnlDaGlsZHJlbic6XG5cdFx0XHRcdGlmIChsb2NhdGlvbi4kID09PSAnQmVoaW5kJykge1xuXHRcdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQ2hpbGRyZW5CZWhpbmQoXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtuZWFyYnldKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDaGlsZHJlbkluRnJvbnQoXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtuZWFyYnldKSk7XG5cdFx0XHRcdH1cblx0XHRcdGNhc2UgJ0NoaWxkcmVuQmVoaW5kJzpcblx0XHRcdFx0dmFyIGV4aXN0aW5nQmVoaW5kID0gZXhpc3RpbmcuYTtcblx0XHRcdFx0aWYgKGxvY2F0aW9uLiQgPT09ICdCZWhpbmQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDaGlsZHJlbkJlaGluZChcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIG5lYXJieSwgZXhpc3RpbmdCZWhpbmQpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQ2hpbGRyZW5CZWhpbmRBbmRJbkZyb250LFxuXHRcdFx0XHRcdFx0ZXhpc3RpbmdCZWhpbmQsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtuZWFyYnldKSk7XG5cdFx0XHRcdH1cblx0XHRcdGNhc2UgJ0NoaWxkcmVuSW5Gcm9udCc6XG5cdFx0XHRcdHZhciBleGlzdGluZ0luRnJvbnQgPSBleGlzdGluZy5hO1xuXHRcdFx0XHRpZiAobG9jYXRpb24uJCA9PT0gJ0JlaGluZCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQ2hpbGRyZW5CZWhpbmRBbmRJbkZyb250LFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbbmVhcmJ5XSksXG5cdFx0XHRcdFx0XHRleGlzdGluZ0luRnJvbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQ2hpbGRyZW5JbkZyb250KFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkY29ucywgbmVhcmJ5LCBleGlzdGluZ0luRnJvbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIGV4aXN0aW5nQmVoaW5kID0gZXhpc3RpbmcuYTtcblx0XHRcdFx0dmFyIGV4aXN0aW5nSW5Gcm9udCA9IGV4aXN0aW5nLmI7XG5cdFx0XHRcdGlmIChsb2NhdGlvbi4kID09PSAnQmVoaW5kJykge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDaGlsZHJlbkJlaGluZEFuZEluRnJvbnQsXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBuZWFyYnksIGV4aXN0aW5nQmVoaW5kKSxcblx0XHRcdFx0XHRcdGV4aXN0aW5nSW5Gcm9udCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENoaWxkcmVuQmVoaW5kQW5kSW5Gcm9udCxcblx0XHRcdFx0XHRcdGV4aXN0aW5nQmVoaW5kLFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkY29ucywgbmVhcmJ5LCBleGlzdGluZ0luRnJvbnQpKTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEVtYmVkZGVkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRW1iZWRkZWQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE5vZGVOYW1lID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnTm9kZU5hbWUnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFkZE5vZGVOYW1lID0gRjIoXG5cdGZ1bmN0aW9uIChuZXdOb2RlLCBvbGQpIHtcblx0XHRzd2l0Y2ggKG9sZC4kKSB7XG5cdFx0XHRjYXNlICdHZW5lcmljJzpcblx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCROb2RlTmFtZShuZXdOb2RlKTtcblx0XHRcdGNhc2UgJ05vZGVOYW1lJzpcblx0XHRcdFx0dmFyIG5hbWUgPSBvbGQuYTtcblx0XHRcdFx0cmV0dXJuIEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRFbWJlZGRlZCwgbmFtZSwgbmV3Tm9kZSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgeCA9IG9sZC5hO1xuXHRcdFx0XHR2YXIgeSA9IG9sZC5iO1xuXHRcdFx0XHRyZXR1cm4gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEVtYmVkZGVkLCB4LCB5KTtcblx0XHR9XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhbGlnblhOYW1lID0gZnVuY3Rpb24gKGFsaWduKSB7XG5cdHN3aXRjaCAoYWxpZ24uJCkge1xuXHRcdGNhc2UgJ0xlZnQnOlxuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduZWRIb3Jpem9udGFsbHkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25MZWZ0KTtcblx0XHRjYXNlICdSaWdodCc6XG5cdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25lZEhvcml6b250YWxseSArICgnICcgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbGlnblJpZ2h0KTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduZWRIb3Jpem9udGFsbHkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYWxpZ25DZW50ZXJYKTtcblx0fVxufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWxpZ25ZTmFtZSA9IGZ1bmN0aW9uIChhbGlnbikge1xuXHRzd2l0Y2ggKGFsaWduLiQpIHtcblx0XHRjYXNlICdUb3AnOlxuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduZWRWZXJ0aWNhbGx5ICsgKCcgJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduVG9wKTtcblx0XHRjYXNlICdCb3R0b20nOlxuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduZWRWZXJ0aWNhbGx5ICsgKCcgJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQm90dG9tKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduZWRWZXJ0aWNhbGx5ICsgKCcgJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFsaWduQ2VudGVyWSk7XG5cdH1cbn07XG52YXIgJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGF0dHJpYnV0ZSA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9WaXJ0dWFsRG9tX2F0dHJpYnV0ZSxcblx0XHRcdF9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24oa2V5KSxcblx0XHRcdF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSh2YWx1ZSkpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRnVsbFRyYW5zZm9ybSA9IEY0KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuXHRcdHJldHVybiB7JDogJ0Z1bGxUcmFuc2Zvcm0nLCBhOiBhLCBiOiBiLCBjOiBjLCBkOiBkfTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE1vdmVkID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnTW92ZWQnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGNvbXBvc2VUcmFuc2Zvcm1hdGlvbiA9IEYyKFxuXHRmdW5jdGlvbiAodHJhbnNmb3JtLCBjb21wb25lbnQpIHtcblx0XHRzd2l0Y2ggKHRyYW5zZm9ybS4kKSB7XG5cdFx0XHRjYXNlICdVbnRyYW5zZm9ybWVkJzpcblx0XHRcdFx0c3dpdGNoIChjb21wb25lbnQuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ01vdmVYJzpcblx0XHRcdFx0XHRcdHZhciB4ID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE1vdmVkKFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUzKHgsIDAsIDApKTtcblx0XHRcdFx0XHRjYXNlICdNb3ZlWSc6XG5cdFx0XHRcdFx0XHR2YXIgeSA9IGNvbXBvbmVudC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRNb3ZlZChcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMygwLCB5LCAwKSk7XG5cdFx0XHRcdFx0Y2FzZSAnTW92ZVonOlxuXHRcdFx0XHRcdFx0dmFyIHogPSBjb21wb25lbnQuYTtcblx0XHRcdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkTW92ZWQoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTMoMCwgMCwgeikpO1xuXHRcdFx0XHRcdGNhc2UgJ01vdmVYWVonOlxuXHRcdFx0XHRcdFx0dmFyIHh5eiA9IGNvbXBvbmVudC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRNb3ZlZCh4eXopO1xuXHRcdFx0XHRcdGNhc2UgJ1JvdGF0ZSc6XG5cdFx0XHRcdFx0XHR2YXIgeHl6ID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHR2YXIgYW5nbGUgPSBjb21wb25lbnQuYjtcblx0XHRcdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZ1bGxUcmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTMoMCwgMCwgMCksXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTMoMSwgMSwgMSksXG5cdFx0XHRcdFx0XHRcdHh5eixcblx0XHRcdFx0XHRcdFx0YW5nbGUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgeHl6ID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRGdWxsVHJhbnNmb3JtLFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUzKDAsIDAsIDApLFxuXHRcdFx0XHRcdFx0XHR4eXosXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTMoMCwgMCwgMSksXG5cdFx0XHRcdFx0XHRcdDApO1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdNb3ZlZCc6XG5cdFx0XHRcdHZhciBtb3ZlZCA9IHRyYW5zZm9ybS5hO1xuXHRcdFx0XHR2YXIgeCA9IG1vdmVkLmE7XG5cdFx0XHRcdHZhciB5ID0gbW92ZWQuYjtcblx0XHRcdFx0dmFyIHogPSBtb3ZlZC5jO1xuXHRcdFx0XHRzd2l0Y2ggKGNvbXBvbmVudC4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTW92ZVgnOlxuXHRcdFx0XHRcdFx0dmFyIG5ld1ggPSBjb21wb25lbnQuYTtcblx0XHRcdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkTW92ZWQoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTMobmV3WCwgeSwgeikpO1xuXHRcdFx0XHRcdGNhc2UgJ01vdmVZJzpcblx0XHRcdFx0XHRcdHZhciBuZXdZID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE1vdmVkKFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUzKHgsIG5ld1ksIHopKTtcblx0XHRcdFx0XHRjYXNlICdNb3ZlWic6XG5cdFx0XHRcdFx0XHR2YXIgbmV3WiA9IGNvbXBvbmVudC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRNb3ZlZChcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMyh4LCB5LCBuZXdaKSk7XG5cdFx0XHRcdFx0Y2FzZSAnTW92ZVhZWic6XG5cdFx0XHRcdFx0XHR2YXIgeHl6ID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE1vdmVkKHh5eik7XG5cdFx0XHRcdFx0Y2FzZSAnUm90YXRlJzpcblx0XHRcdFx0XHRcdHZhciB4eXogPSBjb21wb25lbnQuYTtcblx0XHRcdFx0XHRcdHZhciBhbmdsZSA9IGNvbXBvbmVudC5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRnVsbFRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0bW92ZWQsXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19UdXBsZTMoMSwgMSwgMSksXG5cdFx0XHRcdFx0XHRcdHh5eixcblx0XHRcdFx0XHRcdFx0YW5nbGUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgc2NhbGUgPSBjb21wb25lbnQuYTtcblx0XHRcdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZ1bGxUcmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdG1vdmVkLFxuXHRcdFx0XHRcdFx0XHRzY2FsZSxcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMygwLCAwLCAxKSxcblx0XHRcdFx0XHRcdFx0MCk7XG5cdFx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtb3ZlZCA9IHRyYW5zZm9ybS5hO1xuXHRcdFx0XHR2YXIgeCA9IG1vdmVkLmE7XG5cdFx0XHRcdHZhciB5ID0gbW92ZWQuYjtcblx0XHRcdFx0dmFyIHogPSBtb3ZlZC5jO1xuXHRcdFx0XHR2YXIgc2NhbGVkID0gdHJhbnNmb3JtLmI7XG5cdFx0XHRcdHZhciBvcmlnaW4gPSB0cmFuc2Zvcm0uYztcblx0XHRcdFx0dmFyIGFuZ2xlID0gdHJhbnNmb3JtLmQ7XG5cdFx0XHRcdHN3aXRjaCAoY29tcG9uZW50LiQpIHtcblx0XHRcdFx0XHRjYXNlICdNb3ZlWCc6XG5cdFx0XHRcdFx0XHR2YXIgbmV3WCA9IGNvbXBvbmVudC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRnVsbFRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMyhuZXdYLCB5LCB6KSxcblx0XHRcdFx0XHRcdFx0c2NhbGVkLFxuXHRcdFx0XHRcdFx0XHRvcmlnaW4sXG5cdFx0XHRcdFx0XHRcdGFuZ2xlKTtcblx0XHRcdFx0XHRjYXNlICdNb3ZlWSc6XG5cdFx0XHRcdFx0XHR2YXIgbmV3WSA9IGNvbXBvbmVudC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRnVsbFRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMyh4LCBuZXdZLCB6KSxcblx0XHRcdFx0XHRcdFx0c2NhbGVkLFxuXHRcdFx0XHRcdFx0XHRvcmlnaW4sXG5cdFx0XHRcdFx0XHRcdGFuZ2xlKTtcblx0XHRcdFx0XHRjYXNlICdNb3ZlWic6XG5cdFx0XHRcdFx0XHR2YXIgbmV3WiA9IGNvbXBvbmVudC5hO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRnVsbFRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMyh4LCB5LCBuZXdaKSxcblx0XHRcdFx0XHRcdFx0c2NhbGVkLFxuXHRcdFx0XHRcdFx0XHRvcmlnaW4sXG5cdFx0XHRcdFx0XHRcdGFuZ2xlKTtcblx0XHRcdFx0XHRjYXNlICdNb3ZlWFlaJzpcblx0XHRcdFx0XHRcdHZhciBuZXdNb3ZlID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTQoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZ1bGxUcmFuc2Zvcm0sIG5ld01vdmUsIHNjYWxlZCwgb3JpZ2luLCBhbmdsZSk7XG5cdFx0XHRcdFx0Y2FzZSAnUm90YXRlJzpcblx0XHRcdFx0XHRcdHZhciBuZXdPcmlnaW4gPSBjb21wb25lbnQuYTtcblx0XHRcdFx0XHRcdHZhciBuZXdBbmdsZSA9IGNvbXBvbmVudC5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRGdWxsVHJhbnNmb3JtLCBtb3ZlZCwgc2NhbGVkLCBuZXdPcmlnaW4sIG5ld0FuZ2xlKTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dmFyIG5ld1NjYWxlID0gY29tcG9uZW50LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTQoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZ1bGxUcmFuc2Zvcm0sIG1vdmVkLCBuZXdTY2FsZSwgb3JpZ2luLCBhbmdsZSk7XG5cdFx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodCA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoNyk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0Q29udGVudCA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoMzYpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJG1lcmdlID0gRjIoXG5cdGZ1bmN0aW9uIChfdjAsIF92MSkge1xuXHRcdHZhciBvbmUgPSBfdjAuYTtcblx0XHR2YXIgdHdvID0gX3YwLmI7XG5cdFx0dmFyIHRocmVlID0gX3YxLmE7XG5cdFx0dmFyIGZvdXIgPSBfdjEuYjtcblx0XHRyZXR1cm4gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckRmllbGQsIG9uZSB8IHRocmVlLCB0d28gfCBmb3VyKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckbm9uZSA9IEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJEZpZWxkLCAwLCAwKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVySGVpZ2h0ID0gZnVuY3Rpb24gKGgpIHtcblx0c3dpdGNoIChoLiQpIHtcblx0XHRjYXNlICdQeCc6XG5cdFx0XHR2YXIgcHggPSBoLmE7XG5cdFx0XHR2YXIgdmFsID0gJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHB4KTtcblx0XHRcdHZhciBuYW1lID0gJ2hlaWdodC1weC0nICsgdmFsO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJG5vbmUsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodEV4YWN0ICsgKCcgJyArIG5hbWUpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTMoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNpbmdsZSwgbmFtZSwgJ2hlaWdodCcsIHZhbCArICdweCcpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdGNhc2UgJ0NvbnRlbnQnOlxuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0Q29udGVudCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckbm9uZSksXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmhlaWdodENvbnRlbnQsXG5cdFx0XHRcdF9MaXN0X05pbCk7XG5cdFx0Y2FzZSAnRmlsbCc6XG5cdFx0XHR2YXIgcG9ydGlvbiA9IGguYTtcblx0XHRcdHJldHVybiAocG9ydGlvbiA9PT0gMSkgPyBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodEZpbGwsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJG5vbmUpLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oZWlnaHRGaWxsLFxuXHRcdFx0XHRfTGlzdF9OaWwpIDogX1V0aWxzX1R1cGxlMyhcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRoZWlnaHRGaWxsLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRub25lKSxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0RmlsbFBvcnRpb24gKyAoJyBoZWlnaHQtZmlsbC0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvcnRpb24pKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNpbmdsZSxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICgnLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuY29sdW1uICsgKCcgPiAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdChcblx0XHRcdFx0XHRcdFx0J2hlaWdodC1maWxsLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbikpKSkpLFxuXHRcdFx0XHRcdFx0J2ZsZXgtZ3JvdycsXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbiAqIDEwMDAwMCkpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdGNhc2UgJ01pbic6XG5cdFx0XHR2YXIgbWluU2l6ZSA9IGguYTtcblx0XHRcdHZhciBsZW4gPSBoLmI7XG5cdFx0XHR2YXIgY2xzID0gJ21pbi1oZWlnaHQtJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChtaW5TaXplKTtcblx0XHRcdHZhciBzdHlsZSA9IEEzKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU2luZ2xlLFxuXHRcdFx0XHRjbHMsXG5cdFx0XHRcdCdtaW4taGVpZ2h0Jyxcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG1pblNpemUpICsgJ3B4ICFpbXBvcnRhbnQnKTtcblx0XHRcdHZhciBfdjEgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVySGVpZ2h0KGxlbik7XG5cdFx0XHR2YXIgbmV3RmxhZyA9IF92MS5hO1xuXHRcdFx0dmFyIG5ld0F0dHJzID0gX3YxLmI7XG5cdFx0XHR2YXIgbmV3U3R5bGUgPSBfdjEuYztcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodEJldHdlZW4sIG5ld0ZsYWcpLFxuXHRcdFx0XHRjbHMgKyAoJyAnICsgbmV3QXR0cnMpLFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBzdHlsZSwgbmV3U3R5bGUpKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFyIG1heFNpemUgPSBoLmE7XG5cdFx0XHR2YXIgbGVuID0gaC5iO1xuXHRcdFx0dmFyIGNscyA9ICdtYXgtaGVpZ2h0LScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobWF4U2l6ZSk7XG5cdFx0XHR2YXIgc3R5bGUgPSBBMyhcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNpbmdsZSxcblx0XHRcdFx0Y2xzLFxuXHRcdFx0XHQnbWF4LWhlaWdodCcsXG5cdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludChtYXhTaXplKSArICdweCcpO1xuXHRcdFx0dmFyIF92MiA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJIZWlnaHQobGVuKTtcblx0XHRcdHZhciBuZXdGbGFnID0gX3YyLmE7XG5cdFx0XHR2YXIgbmV3QXR0cnMgPSBfdjIuYjtcblx0XHRcdHZhciBuZXdTdHlsZSA9IF92Mi5jO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0QmV0d2VlbiwgbmV3RmxhZyksXG5cdFx0XHRcdGNscyArICgnICcgKyBuZXdBdHRycyksXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHN0eWxlLCBuZXdTdHlsZSkpO1xuXHR9XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoQ29udGVudCA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoMzgpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJXaWR0aCA9IGZ1bmN0aW9uICh3KSB7XG5cdHN3aXRjaCAody4kKSB7XG5cdFx0Y2FzZSAnUHgnOlxuXHRcdFx0dmFyIHB4ID0gdy5hO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJG5vbmUsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndpZHRoRXhhY3QgKyAoJyB3aWR0aC1weC0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHB4KSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTaW5nbGUsXG5cdFx0XHRcdFx0XHQnd2lkdGgtcHgtJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChweCksXG5cdFx0XHRcdFx0XHQnd2lkdGgnLFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHB4KSArICdweCcpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdGNhc2UgJ0NvbnRlbnQnOlxuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhDb250ZW50LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRub25lKSxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhDb250ZW50LFxuXHRcdFx0XHRfTGlzdF9OaWwpO1xuXHRcdGNhc2UgJ0ZpbGwnOlxuXHRcdFx0dmFyIHBvcnRpb24gPSB3LmE7XG5cdFx0XHRyZXR1cm4gKHBvcnRpb24gPT09IDEpID8gX1V0aWxzX1R1cGxlMyhcblx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyR3aWR0aEZpbGwsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJG5vbmUpLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aEZpbGwsXG5cdFx0XHRcdF9MaXN0X05pbCkgOiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoRmlsbCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckbm9uZSksXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndpZHRoRmlsbFBvcnRpb24gKyAoJyB3aWR0aC1maWxsLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbikpLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU2luZ2xlLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuYW55ICsgKCcuJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5yb3cgKyAoJyA+ICcgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkZG90KFxuXHRcdFx0XHRcdFx0XHQnd2lkdGgtZmlsbC0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvcnRpb24pKSkpKSxcblx0XHRcdFx0XHRcdCdmbGV4LWdyb3cnLFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHBvcnRpb24gKiAxMDAwMDApKVxuXHRcdFx0XHRcdF0pKTtcblx0XHRjYXNlICdNaW4nOlxuXHRcdFx0dmFyIG1pblNpemUgPSB3LmE7XG5cdFx0XHR2YXIgbGVuID0gdy5iO1xuXHRcdFx0dmFyIGNscyA9ICdtaW4td2lkdGgtJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChtaW5TaXplKTtcblx0XHRcdHZhciBzdHlsZSA9IEEzKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU2luZ2xlLFxuXHRcdFx0XHRjbHMsXG5cdFx0XHRcdCdtaW4td2lkdGgnLFxuXHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobWluU2l6ZSkgKyAncHgnKTtcblx0XHRcdHZhciBfdjEgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyV2lkdGgobGVuKTtcblx0XHRcdHZhciBuZXdGbGFnID0gX3YxLmE7XG5cdFx0XHR2YXIgbmV3QXR0cnMgPSBfdjEuYjtcblx0XHRcdHZhciBuZXdTdHlsZSA9IF92MS5jO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhCZXR3ZWVuLCBuZXdGbGFnKSxcblx0XHRcdFx0Y2xzICsgKCcgJyArIG5ld0F0dHJzKSxcblx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkY29ucywgc3R5bGUsIG5ld1N0eWxlKSk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBtYXhTaXplID0gdy5hO1xuXHRcdFx0dmFyIGxlbiA9IHcuYjtcblx0XHRcdHZhciBjbHMgPSAnbWF4LXdpZHRoLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobWF4U2l6ZSk7XG5cdFx0XHR2YXIgc3R5bGUgPSBBMyhcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNpbmdsZSxcblx0XHRcdFx0Y2xzLFxuXHRcdFx0XHQnbWF4LXdpZHRoJyxcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG1heFNpemUpICsgJ3B4Jyk7XG5cdFx0XHR2YXIgX3YyID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlcldpZHRoKGxlbik7XG5cdFx0XHR2YXIgbmV3RmxhZyA9IF92Mi5hO1xuXHRcdFx0dmFyIG5ld0F0dHJzID0gX3YyLmI7XG5cdFx0XHR2YXIgbmV3U3R5bGUgPSBfdjIuYztcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoQmV0d2VlbiwgbmV3RmxhZyksXG5cdFx0XHRcdGNscyArICgnICcgKyBuZXdBdHRycyksXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHN0eWxlLCBuZXdTdHlsZSkpO1xuXHR9XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGJvcmRlcldpZHRoID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZygyNyk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRnZSA9IF9VdGlsc19nZTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkc2tpcHBhYmxlID0gRjIoXG5cdGZ1bmN0aW9uIChmbGFnLCBzdHlsZSkge1xuXHRcdGlmIChfVXRpbHNfZXEoZmxhZywgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYm9yZGVyV2lkdGgpKSB7XG5cdFx0XHRpZiAoc3R5bGUuJCA9PT0gJ1NpbmdsZScpIHtcblx0XHRcdFx0dmFyIHZhbCA9IHN0eWxlLmM7XG5cdFx0XHRcdHN3aXRjaCAodmFsKSB7XG5cdFx0XHRcdFx0Y2FzZSAnMHB4Jzpcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdGNhc2UgJzFweCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRjYXNlICcycHgnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0Y2FzZSAnM3B4Jzpcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdGNhc2UgJzRweCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRjYXNlICc1cHgnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0Y2FzZSAnNnB4Jzpcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoIChzdHlsZS4kKSB7XG5cdFx0XHRcdGNhc2UgJ0ZvbnRTaXplJzpcblx0XHRcdFx0XHR2YXIgaSA9IHN0eWxlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIChpID49IDgpICYmIChpIDw9IDMyKTtcblx0XHRcdFx0Y2FzZSAnUGFkZGluZ1N0eWxlJzpcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHN0eWxlLmE7XG5cdFx0XHRcdFx0dmFyIHQgPSBzdHlsZS5iO1xuXHRcdFx0XHRcdHZhciByID0gc3R5bGUuYztcblx0XHRcdFx0XHR2YXIgYiA9IHN0eWxlLmQ7XG5cdFx0XHRcdFx0dmFyIGwgPSBzdHlsZS5lO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfZXEodCwgYikgJiYgKF9VdGlsc19lcSh0LCByKSAmJiAoX1V0aWxzX2VxKHQsIGwpICYmICgodCA+PSAwKSAmJiAodCA8PSAyNCkpKSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGggPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnKDYpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHhBbGlnbiA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoMzApO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHlBbGlnbiA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZsYWcoMjkpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRnYXRoZXJBdHRyUmVjdXJzaXZlID0gRjgoXG5cdGZ1bmN0aW9uIChjbGFzc2VzLCBub2RlLCBoYXMsIHRyYW5zZm9ybSwgc3R5bGVzLCBhdHRycywgY2hpbGRyZW4sIGVsZW1lbnRBdHRycykge1xuXHRcdGdhdGhlckF0dHJSZWN1cnNpdmU6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmICghZWxlbWVudEF0dHJzLmIpIHtcblx0XHRcdFx0dmFyIF92MSA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0cmFuc2Zvcm1DbGFzcyh0cmFuc2Zvcm0pO1xuXHRcdFx0XHRpZiAoX3YxLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcyhjbGFzc2VzKSxcblx0XHRcdFx0XHRcdFx0YXR0cnMpLFxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0aGFzOiBoYXMsXG5cdFx0XHRcdFx0XHRub2RlOiBub2RlLFxuXHRcdFx0XHRcdFx0c3R5bGVzOiBzdHlsZXNcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBfY2xhc3MgPSBfdjEuYTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRlczogQTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoY2xhc3NlcyArICgnICcgKyBfY2xhc3MpKSxcblx0XHRcdFx0XHRcdFx0YXR0cnMpLFxuXHRcdFx0XHRcdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0aGFzOiBoYXMsXG5cdFx0XHRcdFx0XHRub2RlOiBub2RlLFxuXHRcdFx0XHRcdFx0c3R5bGVzOiBBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFRyYW5zZm9ybSh0cmFuc2Zvcm0pLFxuXHRcdFx0XHRcdFx0XHRzdHlsZXMpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGF0dHJpYnV0ZSA9IGVsZW1lbnRBdHRycy5hO1xuXHRcdFx0XHR2YXIgcmVtYWluaW5nID0gZWxlbWVudEF0dHJzLmI7XG5cdFx0XHRcdHN3aXRjaCAoYXR0cmlidXRlLiQpIHtcblx0XHRcdFx0XHRjYXNlICdOb0F0dHJpYnV0ZSc6XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdGNhc2UgJ0NsYXNzJzpcblx0XHRcdFx0XHRcdHZhciBmbGFnID0gYXR0cmlidXRlLmE7XG5cdFx0XHRcdFx0XHR2YXIgZXhhY3RDbGFzc05hbWUgPSBhdHRyaWJ1dGUuYjtcblx0XHRcdFx0XHRcdGlmIChBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRwcmVzZW50LCBmbGFnLCBoYXMpKSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkdHJhbnNmb3JtID0gdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGNoaWxkcmVuID0gY2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0bm9kZSA9ICR0ZW1wJG5vZGU7XG5cdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRzdHlsZXMgPSAkdGVtcCRzdHlsZXM7XG5cdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRBdHRycyA9ICR0ZW1wJGVsZW1lbnRBdHRycztcblx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gZXhhY3RDbGFzc05hbWUgKyAoJyAnICsgY2xhc3NlcyksXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCBmbGFnLCBoYXMpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAnQXR0cic6XG5cdFx0XHRcdFx0XHR2YXIgYWN0dWFsQXR0cmlidXRlID0gYXR0cmlidXRlLmE7XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGFjdHVhbEF0dHJpYnV0ZSwgYXR0cnMpLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdGNhc2UgJ1N0eWxlQ2xhc3MnOlxuXHRcdFx0XHRcdFx0dmFyIGZsYWcgPSBhdHRyaWJ1dGUuYTtcblx0XHRcdFx0XHRcdHZhciBzdHlsZSA9IGF0dHJpYnV0ZS5iO1xuXHRcdFx0XHRcdFx0aWYgKEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHByZXNlbnQsIGZsYWcsIGhhcykpIHtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRza2lwcGFibGUsIGZsYWcsIHN0eWxlKSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGdldFN0eWxlTmFtZShzdHlsZSkgKyAoJyAnICsgY2xhc3NlcyksXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgZmxhZywgaGFzKSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRnZXRTdHlsZU5hbWUoc3R5bGUpICsgKCcgJyArIGNsYXNzZXMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsIGZsYWcsIGhhcyksXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBzdHlsZSwgc3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgJ1RyYW5zZm9ybUNvbXBvbmVudCc6XG5cdFx0XHRcdFx0XHR2YXIgZmxhZyA9IGF0dHJpYnV0ZS5hO1xuXHRcdFx0XHRcdFx0dmFyIGNvbXBvbmVudCA9IGF0dHJpYnV0ZS5iO1xuXHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCBmbGFnLCBoYXMpLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkY29tcG9zZVRyYW5zZm9ybWF0aW9uLCB0cmFuc2Zvcm0sIGNvbXBvbmVudCksXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRjYXNlICdXaWR0aCc6XG5cdFx0XHRcdFx0XHR2YXIgd2lkdGggPSBhdHRyaWJ1dGUuYTtcblx0XHRcdFx0XHRcdGlmIChBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRwcmVzZW50LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyR3aWR0aCwgaGFzKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gaGFzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHdpZHRoLiQpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdQeCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcHggPSB3aWR0aC5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhFeGFjdCArICgnIHdpZHRoLXB4LScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocHgpKSkgKyAoJyAnICsgY2xhc3NlcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoLCBoYXMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU2luZ2xlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aWR0aC1weC0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHB4KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2lkdGgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludChweCkgKyAncHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdDb250ZW50Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3NlcyArICgnICcgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy53aWR0aENvbnRlbnQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhDb250ZW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoLCBoYXMpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkdHJhbnNmb3JtID0gdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGNoaWxkcmVuID0gY2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdFx0bm9kZSA9ICR0ZW1wJG5vZGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZXMgPSAkdGVtcCRzdHlsZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnRBdHRycyA9ICR0ZW1wJGVsZW1lbnRBdHRycztcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnRmlsbCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcG9ydGlvbiA9IHdpZHRoLmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocG9ydGlvbiA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMud2lkdGhGaWxsKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGhGaWxsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckd2lkdGgsIGhhcykpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMgKyAoJyAnICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLndpZHRoRmlsbFBvcnRpb24gKyAoJyB3aWR0aC1maWxsLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbikpKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoRmlsbCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHdpZHRoLCBoYXMpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTaW5nbGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnkgKyAoJy4nICsgKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnJvdyArICgnID4gJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRkb3QoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aWR0aC1maWxsLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbikpKSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZsZXgtZ3JvdycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbiAqIDEwMDAwMCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfdjQgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyV2lkdGgod2lkdGgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGFkZFRvRmxhZ3MgPSBfdjQuYTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBuZXdDbGFzcyA9IF92NC5iO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5ld1N0eWxlcyA9IF92NC5jO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzICsgKCcgJyArIG5ld0NsYXNzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRtZXJnZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWRkVG9GbGFncyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyR3aWR0aCwgaGFzKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gX1V0aWxzX2FwKG5ld1N0eWxlcywgc3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgJ0hlaWdodCc6XG5cdFx0XHRcdFx0XHR2YXIgaGVpZ2h0ID0gYXR0cmlidXRlLmE7XG5cdFx0XHRcdFx0XHRpZiAoQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckcHJlc2VudCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0LCBoYXMpKSB7XG5cdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkdHJhbnNmb3JtID0gdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGNoaWxkcmVuID0gY2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0bm9kZSA9ICR0ZW1wJG5vZGU7XG5cdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRzdHlsZXMgPSAkdGVtcCRzdHlsZXM7XG5cdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRBdHRycyA9ICR0ZW1wJGVsZW1lbnRBdHRycztcblx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoaGVpZ2h0LiQpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdQeCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcHggPSBoZWlnaHQuYTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciB2YWwgPSAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocHgpICsgJ3B4Jztcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBuYW1lID0gJ2hlaWdodC1weC0nICsgdmFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oZWlnaHRFeGFjdCArICgnICcgKyAobmFtZSArICgnICcgKyBjbGFzc2VzKSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRoZWlnaHQsIGhhcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEzKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTaW5nbGUsIG5hbWUsICdoZWlnaHQgJywgdmFsKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdDb250ZW50Jzpcblx0XHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaGVpZ2h0Q29udGVudCArICgnICcgKyBjbGFzc2VzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodENvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0LCBoYXMpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkdHJhbnNmb3JtID0gdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGNoaWxkcmVuID0gY2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdFx0bm9kZSA9ICR0ZW1wJG5vZGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZXMgPSAkdGVtcCRzdHlsZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnRBdHRycyA9ICR0ZW1wJGVsZW1lbnRBdHRycztcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnRmlsbCc6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcG9ydGlvbiA9IGhlaWdodC5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHBvcnRpb24gPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oZWlnaHRGaWxsICsgKCcgJyArIGNsYXNzZXMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRoZWlnaHRGaWxsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckaGVpZ2h0LCBoYXMpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzICsgKCcgJyArICgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5oZWlnaHRGaWxsUG9ydGlvbiArICgnIGhlaWdodC1maWxsLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbikpKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodEZpbGwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRoZWlnaHQsIGhhcykpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNpbmdsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmFueSArICgnLicgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuY29sdW1uICsgKCcgPiAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGRvdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2hlaWdodC1maWxsLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbikpKSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZsZXgtZ3JvdycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQocG9ydGlvbiAqIDEwMDAwMCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfdjYgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVySGVpZ2h0KGhlaWdodCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYWRkVG9GbGFncyA9IF92Ni5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5ld0NsYXNzID0gX3Y2LmI7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbmV3U3R5bGVzID0gX3Y2LmM7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMgKyAoJyAnICsgbmV3Q2xhc3MpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJG1lcmdlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhZGRUb0ZsYWdzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhZGQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGhlaWdodCwgaGFzKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gX1V0aWxzX2FwKG5ld1N0eWxlcywgc3R5bGVzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgJ0Rlc2NyaWJlJzpcblx0XHRcdFx0XHRcdHZhciBkZXNjcmlwdGlvbiA9IGF0dHJpYnV0ZS5hO1xuXHRcdFx0XHRcdFx0c3dpdGNoIChkZXNjcmlwdGlvbi4kKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ01haW4nOlxuXHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRkTm9kZU5hbWUsICdtYWluJywgbm9kZSksXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ05hdmlnYXRpb24nOlxuXHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRkTm9kZU5hbWUsICduYXYnLCBub2RlKSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnQ29udGVudEluZm8nOlxuXHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRkTm9kZU5hbWUsICdmb290ZXInLCBub2RlKSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnQ29tcGxlbWVudGFyeSc6XG5cdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhZGROb2RlTmFtZSwgJ2FzaWRlJywgbm9kZSksXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0hlYWRpbmcnOlxuXHRcdFx0XHRcdFx0XHRcdHZhciBpID0gZGVzY3JpcHRpb24uYTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoaSA8PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRkTm9kZU5hbWUsICdoMScsIG5vZGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaSA8IDcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRkTm9kZU5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2gnICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYWRkTm9kZU5hbWUsICdoNicsIG5vZGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2FzZSAnUGFyYWdyYXBoJzpcblx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnQnV0dG9uJzpcblx0XHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRub2RlID0gbm9kZSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGhhcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHN0eWxlcyA9IHN0eWxlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGF0dHJpYnV0ZSwgJ3JvbGUnLCAnYnV0dG9uJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRycyksXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnTGFiZWwnOlxuXHRcdFx0XHRcdFx0XHRcdHZhciBsYWJlbCA9IGRlc2NyaXB0aW9uLmE7XG5cdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICdhcmlhLWxhYmVsJywgbGFiZWwpLFxuXHRcdFx0XHRcdFx0XHRcdFx0YXR0cnMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0xpdmVQb2xpdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHZhciAkdGVtcCRjbGFzc2VzID0gY2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gaGFzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkdHJhbnNmb3JtID0gdHJhbnNmb3JtLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLCAnYXJpYS1saXZlJywgJ3BvbGl0ZScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0YXR0cnMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGNsYXNzZXMgPSBjbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRycyksXG5cdFx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0JHRlbXAkZWxlbWVudEF0dHJzID0gcmVtYWluaW5nO1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRcdGhhcyA9ICR0ZW1wJGhhcztcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJzID0gJHRlbXAkYXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWUgZ2F0aGVyQXR0clJlY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlICdOZWFyYnknOlxuXHRcdFx0XHRcdFx0dmFyIGxvY2F0aW9uID0gYXR0cmlidXRlLmE7XG5cdFx0XHRcdFx0XHR2YXIgZWxlbSA9IGF0dHJpYnV0ZS5iO1xuXHRcdFx0XHRcdFx0dmFyIG5ld1N0eWxlcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbGVtLiQpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdFbXB0eSc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1RleHQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHN0ciA9IGVsZW0uYTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzdHlsZXM7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnVW5zdHlsZWQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGh0bWwgPSBlbGVtLmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgc3R5bGVkID0gZWxlbS5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19hcChzdHlsZXMsIHN0eWxlZC5zdHlsZXMpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRoYXMgPSBoYXMsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gbmV3U3R5bGVzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRhdHRycyA9IGF0dHJzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IEEzKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhZGROZWFyYnlFbGVtZW50LCBsb2NhdGlvbiwgZWxlbSwgY2hpbGRyZW4pLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRjbGFzc2VzID0gJHRlbXAkY2xhc3Nlcztcblx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtID0gJHRlbXAkdHJhbnNmb3JtO1xuXHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdGNoaWxkcmVuID0gJHRlbXAkY2hpbGRyZW47XG5cdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdGNhc2UgJ0FsaWduWCc6XG5cdFx0XHRcdFx0XHR2YXIgeCA9IGF0dHJpYnV0ZS5hO1xuXHRcdFx0XHRcdFx0aWYgKEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHByZXNlbnQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHhBbGlnbiwgaGFzKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gaGFzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhbGlnblhOYW1lKHgpICsgKCcgJyArIGNsYXNzZXMpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGZ1bmN0aW9uIChmbGFncykge1xuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoeC4kKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdDZW50ZXJYJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckY2VudGVyWCwgZmxhZ3MpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnUmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRhbGlnblJpZ2h0LCBmbGFncyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmxhZ3M7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KFxuXHRcdFx0XHRcdFx0XHRcdEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckeEFsaWduLCBoYXMpKSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCR0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0sXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkc3R5bGVzID0gc3R5bGVzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGF0dHJzID0gYXR0cnMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkY2hpbGRyZW4gPSBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRlbGVtZW50QXR0cnMgPSByZW1haW5pbmc7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMgPSAkdGVtcCRjbGFzc2VzO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gJHRlbXAkbm9kZTtcblx0XHRcdFx0XHRcdFx0aGFzID0gJHRlbXAkaGFzO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSAkdGVtcCR0cmFuc2Zvcm07XG5cdFx0XHRcdFx0XHRcdHN0eWxlcyA9ICR0ZW1wJHN0eWxlcztcblx0XHRcdFx0XHRcdFx0YXR0cnMgPSAkdGVtcCRhdHRycztcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAkdGVtcCRjaGlsZHJlbjtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudEF0dHJzID0gJHRlbXAkZWxlbWVudEF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZSBnYXRoZXJBdHRyUmVjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgeSA9IGF0dHJpYnV0ZS5hO1xuXHRcdFx0XHRcdFx0aWYgKEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHByZXNlbnQsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHlBbGlnbiwgaGFzKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9IGNsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbm9kZSA9IG5vZGUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkaGFzID0gaGFzLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkY2xhc3NlcyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhbGlnbllOYW1lKHkpICsgKCcgJyArIGNsYXNzZXMpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG5vZGUgPSBub2RlLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGhhcyA9IGZ1bmN0aW9uIChmbGFncykge1xuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoeS4kKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdDZW50ZXJZJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckY2VudGVyWSwgZmxhZ3MpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnQm90dG9tJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGFkZCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWxpZ25Cb3R0b20sIGZsYWdzKTtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmbGFncztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0oXG5cdFx0XHRcdFx0XHRcdFx0QTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckYWRkLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyR5QWxpZ24sIGhhcykpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHRyYW5zZm9ybSA9IHRyYW5zZm9ybSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRzdHlsZXMgPSBzdHlsZXMsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkYXR0cnMgPSBhdHRycyxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRjaGlsZHJlbiA9IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGVsZW1lbnRBdHRycyA9IHJlbWFpbmluZztcblx0XHRcdFx0XHRcdFx0Y2xhc3NlcyA9ICR0ZW1wJGNsYXNzZXM7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSAkdGVtcCRub2RlO1xuXHRcdFx0XHRcdFx0XHRoYXMgPSAkdGVtcCRoYXM7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybSA9ICR0ZW1wJHRyYW5zZm9ybTtcblx0XHRcdFx0XHRcdFx0c3R5bGVzID0gJHRlbXAkc3R5bGVzO1xuXHRcdFx0XHRcdFx0XHRhdHRycyA9ICR0ZW1wJGF0dHJzO1xuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICR0ZW1wJGNoaWxkcmVuO1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50QXR0cnMgPSAkdGVtcCRlbGVtZW50QXR0cnM7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIGdhdGhlckF0dHJSZWN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRVbnRyYW5zZm9ybWVkID0geyQ6ICdVbnRyYW5zZm9ybWVkJ307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHVudHJhbnNmb3JtZWQgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW50cmFuc2Zvcm1lZDtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZWxlbWVudCA9IEY0KFxuXHRmdW5jdGlvbiAoY29udGV4dCwgbm9kZSwgYXR0cmlidXRlcywgY2hpbGRyZW4pIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkY3JlYXRlRWxlbWVudCxcblx0XHRcdGNvbnRleHQsXG5cdFx0XHRjaGlsZHJlbixcblx0XHRcdEE4KFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZ2F0aGVyQXR0clJlY3Vyc2l2ZSxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGNvbnRleHRDbGFzc2VzKGNvbnRleHQpLFxuXHRcdFx0XHRub2RlLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRub25lLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkdW50cmFuc2Zvcm1lZCxcblx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCROb05lYXJieUNoaWxkcmVuLFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKGF0dHJpYnV0ZXMpKSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRIZWlnaHQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdIZWlnaHQnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkaGVpZ2h0ID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEhlaWdodDtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQXR0ciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0F0dHInLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGh0bWxDbGFzcyA9IGZ1bmN0aW9uIChjbHMpIHtcblx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBdHRyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoY2xzKSk7XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDb250ZW50ID0geyQ6ICdDb250ZW50J307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkc2hyaW5rID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENvbnRlbnQ7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFdpZHRoID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnV2lkdGgnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkd2lkdGggPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkV2lkdGg7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkY29sdW1uID0gRjIoXG5cdGZ1bmN0aW9uIChhdHRycywgY2hpbGRyZW4pIHtcblx0XHRyZXR1cm4gQTQoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZWxlbWVudCxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc0NvbHVtbixcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRkaXYsXG5cdFx0XHRBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGh0bWxDbGFzcygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50VG9wICsgKCcgJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLmNvbnRlbnRMZWZ0KSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkaGVpZ2h0KCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkd2lkdGgoJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkc2hyaW5rKSxcblx0XHRcdFx0XHRcdGF0dHJzKSkpLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFVua2V5ZWQoY2hpbGRyZW4pKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZvbnRGYW1pbHkgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdGb250RmFtaWx5JywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZvbnRGYW1pbHkgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnKDUpO1xudmFyICRlbG0kY29yZSRTdHJpbmckdG9Mb3dlciA9IF9TdHJpbmdfdG9Mb3dlcjtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJHdvcmRzID0gX1N0cmluZ193b3JkcztcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyRm9udENsYXNzTmFtZSA9IEYyKFxuXHRmdW5jdGlvbiAoZm9udCwgY3VycmVudCkge1xuXHRcdHJldHVybiBfVXRpbHNfYXAoXG5cdFx0XHRjdXJyZW50LFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzd2l0Y2ggKGZvbnQuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1NlcmlmJzpcblx0XHRcdFx0XHRcdHJldHVybiAnc2VyaWYnO1xuXHRcdFx0XHRcdGNhc2UgJ1NhbnNTZXJpZic6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3NhbnMtc2VyaWYnO1xuXHRcdFx0XHRcdGNhc2UgJ01vbm9zcGFjZSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ21vbm9zcGFjZSc7XG5cdFx0XHRcdFx0Y2FzZSAnVHlwZWZhY2UnOlxuXHRcdFx0XHRcdFx0dmFyIG5hbWUgPSBmb250LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0Jy0nLFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJHdvcmRzKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckdG9Mb3dlcihuYW1lKSkpO1xuXHRcdFx0XHRcdGNhc2UgJ0ltcG9ydEZvbnQnOlxuXHRcdFx0XHRcdFx0dmFyIG5hbWUgPSBmb250LmE7XG5cdFx0XHRcdFx0XHR2YXIgdXJsID0gZm9udC5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdCctJyxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyR3b3Jkcyhcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJHRvTG93ZXIobmFtZSkpKTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dmFyIG5hbWUgPSBmb250LmEubmFtZTtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdFx0XHQnLScsXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckd29yZHMoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyR0b0xvd2VyKG5hbWUpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0oKSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JEZvbnQkZmFtaWx5ID0gZnVuY3Rpb24gKGZhbWlsaWVzKSB7XG5cdHJldHVybiBBMihcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU3R5bGVDbGFzcyxcblx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmb250RmFtaWx5LFxuXHRcdEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZvbnRGYW1pbHksXG5cdFx0XHRBMygkZWxtJGNvcmUkTGlzdCRmb2xkbCwgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlckZvbnRDbGFzc05hbWUsICdmZi0nLCBmYW1pbGllcyksXG5cdFx0XHRmYW1pbGllcykpO1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRmlsbCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0ZpbGwnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkZmlsbCA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRGaWxsKDEpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRPbmx5RHluYW1pYyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ09ubHlEeW5hbWljJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdGF0aWNSb290QW5kRHluYW1pYyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1N0YXRpY1Jvb3RBbmREeW5hbWljJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBbGxvd0hvdmVyID0geyQ6ICdBbGxvd0hvdmVyJ307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJExheW91dCA9IHskOiAnTGF5b3V0J307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGZvY3VzRGVmYXVsdFN0eWxlID0ge1xuXHRiYWNrZ3JvdW5kQ29sb3I6ICRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRib3JkZXJDb2xvcjogJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdHNoYWRvdzogJGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0e1xuXHRcdFx0Ymx1cjogMCxcblx0XHRcdGNvbG9yOiBBNCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUmdiYSwgMTU1IC8gMjU1LCAyMDMgLyAyNTUsIDEsIDEpLFxuXHRcdFx0b2Zmc2V0OiBfVXRpbHNfVHVwbGUyKDAsIDApLFxuXHRcdFx0c2l6ZTogM1xuXHRcdH0pXG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRvcHRpb25zVG9SZWNvcmQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgY29tYmluZSA9IEYyKFxuXHRcdGZ1bmN0aW9uIChvcHQsIHJlY29yZCkge1xuXHRcdFx0c3dpdGNoIChvcHQuJCkge1xuXHRcdFx0XHRjYXNlICdIb3Zlck9wdGlvbic6XG5cdFx0XHRcdFx0dmFyIGhvdmVyYWJsZSA9IG9wdC5hO1xuXHRcdFx0XHRcdHZhciBfdjQgPSByZWNvcmQuaG92ZXI7XG5cdFx0XHRcdFx0aWYgKF92NC4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRyZWNvcmQsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRob3ZlcjogJGVsbSRjb3JlJE1heWJlJEp1c3QoaG92ZXJhYmxlKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlY29yZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0ZvY3VzU3R5bGVPcHRpb24nOlxuXHRcdFx0XHRcdHZhciBmb2N1c1N0eWxlID0gb3B0LmE7XG5cdFx0XHRcdFx0dmFyIF92NSA9IHJlY29yZC5mb2N1cztcblx0XHRcdFx0XHRpZiAoX3Y1LiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdHJlY29yZCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGZvY3VzOiAkZWxtJGNvcmUkTWF5YmUkSnVzdChmb2N1c1N0eWxlKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlY29yZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dmFyIHJlbmRlck1vZGUgPSBvcHQuYTtcblx0XHRcdFx0XHR2YXIgX3Y2ID0gcmVjb3JkLm1vZGU7XG5cdFx0XHRcdFx0aWYgKF92Ni4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRyZWNvcmQsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRtb2RlOiAkZWxtJGNvcmUkTWF5YmUkSnVzdChyZW5kZXJNb2RlKVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlY29yZDtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdHZhciBhbmRGaW5hbGx5ID0gZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRmb2N1czogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgX3YwID0gcmVjb3JkLmZvY3VzO1xuXHRcdFx0XHRpZiAoX3YwLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdHJldHVybiAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZm9jdXNEZWZhdWx0U3R5bGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGZvY3VzYWJsZSA9IF92MC5hO1xuXHRcdFx0XHRcdHJldHVybiBmb2N1c2FibGU7XG5cdFx0XHRcdH1cblx0XHRcdH0oKSxcblx0XHRcdGhvdmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBfdjEgPSByZWNvcmQuaG92ZXI7XG5cdFx0XHRcdGlmIChfdjEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBbGxvd0hvdmVyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBob3ZlcmFibGUgPSBfdjEuYTtcblx0XHRcdFx0XHRyZXR1cm4gaG92ZXJhYmxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KCksXG5cdFx0XHRtb2RlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciBfdjIgPSByZWNvcmQubW9kZTtcblx0XHRcdFx0aWYgKF92Mi4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJExheW91dDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgYWN0dWFsTW9kZSA9IF92Mi5hO1xuXHRcdFx0XHRcdHJldHVybiBhY3R1YWxNb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KClcblx0XHR9O1xuXHR9O1xuXHRyZXR1cm4gYW5kRmluYWxseShcblx0XHRBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0Y29tYmluZSxcblx0XHRcdHtmb2N1czogJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsIGhvdmVyOiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZywgbW9kZTogJGVsbSRjb3JlJE1heWJlJE5vdGhpbmd9LFxuXHRcdFx0b3B0aW9ucykpO1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkdG9IdG1sID0gRjIoXG5cdGZ1bmN0aW9uIChtb2RlLCBlbCkge1xuXHRcdHN3aXRjaCAoZWwuJCkge1xuXHRcdFx0Y2FzZSAnVW5zdHlsZWQnOlxuXHRcdFx0XHR2YXIgaHRtbCA9IGVsLmE7XG5cdFx0XHRcdHJldHVybiBodG1sKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc0VsKTtcblx0XHRcdGNhc2UgJ1N0eWxlZCc6XG5cdFx0XHRcdHZhciBzdHlsZXMgPSBlbC5hLnN0eWxlcztcblx0XHRcdFx0dmFyIGh0bWwgPSBlbC5hLmh0bWw7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRodG1sLFxuXHRcdFx0XHRcdG1vZGUoc3R5bGVzKSxcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYXNFbCk7XG5cdFx0XHRjYXNlICdUZXh0Jzpcblx0XHRcdFx0dmFyIHRleHQgPSBlbC5hO1xuXHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRleHRFbGVtZW50KHRleHQpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCR0ZXh0RWxlbWVudCgnJyk7XG5cdFx0fVxuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcmVuZGVyUm9vdCA9IEYzKFxuXHRmdW5jdGlvbiAob3B0aW9uTGlzdCwgYXR0cmlidXRlcywgY2hpbGQpIHtcblx0XHR2YXIgb3B0aW9ucyA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRvcHRpb25zVG9SZWNvcmQob3B0aW9uTGlzdCk7XG5cdFx0dmFyIGVtYmVkU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3YwID0gb3B0aW9ucy5tb2RlO1xuXHRcdFx0aWYgKF92MC4kID09PSAnTm9TdGF0aWNTdHlsZVNoZWV0Jykge1xuXHRcdFx0XHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJE9ubHlEeW5hbWljKG9wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdGF0aWNSb290QW5kRHluYW1pYyhvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHRvSHRtbCxcblx0XHRcdGVtYmVkU3R5bGUsXG5cdFx0XHRBNChcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVsZW1lbnQsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc0VsLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZGl2LFxuXHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW5rZXllZChcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbY2hpbGRdKSkpKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZvbnRTaXplID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRm9udFNpemUnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNhbnNTZXJpZiA9IHskOiAnU2Fuc1NlcmlmJ307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFR5cGVmYWNlID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnVHlwZWZhY2UnLCBhOiBhfTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZm9udFNpemUgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnKDQpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyb290U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBmYW1pbGllcyA9IF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVHlwZWZhY2UoJ09wZW4gU2FucycpLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFR5cGVmYWNlKCdIZWx2ZXRpY2EnKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRUeXBlZmFjZSgnVmVyZGFuYScpLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNhbnNTZXJpZlxuXHRcdF0pO1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFN0eWxlQ2xhc3MsXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRiZ0NvbG9yLFxuXHRcdFx0QTMoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDb2xvcmVkLFxuXHRcdFx0XHQnYmctJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvckNsYXNzKFxuXHRcdFx0XHRcdEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRSZ2JhLCAxLCAxLCAxLCAwKSksXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJyxcblx0XHRcdFx0QTQoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFJnYmEsIDEsIDEsIDEsIDApKSksXG5cdFx0XHRBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZUNsYXNzLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZm9udENvbG9yLFxuXHRcdFx0QTMoXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDb2xvcmVkLFxuXHRcdFx0XHQnZmMtJyArICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRmb3JtYXRDb2xvckNsYXNzKFxuXHRcdFx0XHRcdEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRSZ2JhLCAwLCAwLCAwLCAxKSksXG5cdFx0XHRcdCdjb2xvcicsXG5cdFx0XHRcdEE0KCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRSZ2JhLCAwLCAwLCAwLCAxKSkpLFxuXHRcdFx0QTIoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU3R5bGVDbGFzcyxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJGZvbnRTaXplLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZvbnRTaXplKDIwKSksXG5cdFx0XHRBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZUNsYXNzLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZm9udEZhbWlseSxcblx0XHRcdEEyKFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkRm9udEZhbWlseSxcblx0XHRcdFx0QTMoJGVsbSRjb3JlJExpc3QkZm9sZGwsICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRyZW5kZXJGb250Q2xhc3NOYW1lLCAnZm9udC0nLCBmYW1pbGllcyksXG5cdFx0XHRcdGZhbWlsaWVzKSlcblx0XHRdKTtcbn0oKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRsYXlvdXRXaXRoID0gRjMoXG5cdGZ1bmN0aW9uIChfdjAsIGF0dHJzLCBjaGlsZCkge1xuXHRcdHZhciBvcHRpb25zID0gX3YwLm9wdGlvbnM7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJHJlbmRlclJvb3QsXG5cdFx0XHRvcHRpb25zLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRodG1sQ2xhc3MoXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHQnICcsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFskbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5yb290LCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5hbnksICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRTdHlsZSRjbGFzc2VzLnNpbmdsZV0pKSksXG5cdFx0XHRcdF9VdGlsc19hcCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcm9vdFN0eWxlLCBhdHRycykpLFxuXHRcdFx0Y2hpbGQpO1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRsYXlvdXQgPSAkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRsYXlvdXRXaXRoKFxuXHR7b3B0aW9uczogX0xpc3RfTmlsfSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkRm9udCRzYW5zU2VyaWYgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU2Fuc1NlcmlmO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JEZvbnQkdHlwZWZhY2UgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVHlwZWZhY2U7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEFsaWduWCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0FsaWduWCcsIGE6IGF9O1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQ2VudGVyWCA9IHskOiAnQ2VudGVyWCd9O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGNlbnRlclggPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQWxpZ25YKCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDZW50ZXJYKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQWxpZ25ZID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnQWxpZ25ZJywgYTogYX07XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDZW50ZXJZID0geyQ6ICdDZW50ZXJZJ307XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkY2VudGVyWSA9ICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBbGlnblkoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENlbnRlclkpO1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJGVkZ2VzID0ge2JvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMH07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkZWwgPSBGMihcblx0ZnVuY3Rpb24gKGF0dHJzLCBjaGlsZCkge1xuXHRcdHJldHVybiBBNChcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRlbGVtZW50LFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFzRWwsXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZGl2LFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHdpZHRoKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkaGVpZ2h0KCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdFx0YXR0cnMpKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRVbmtleWVkKFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W2NoaWxkXSkpKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFBhZGRpbmdTdHlsZSA9IEY1KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCwgZSkge1xuXHRcdHJldHVybiB7JDogJ1BhZGRpbmdTdHlsZScsIGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGQsIGU6IGV9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRwYWRkaW5nID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZmxhZygyKTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcGFkZGluZ05hbWUgPSBGNChcblx0ZnVuY3Rpb24gKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xuXHRcdHJldHVybiAncGFkLScgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHRvcCkgKyAoJy0nICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChyaWdodCkgKyAoJy0nICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChib3R0b20pICsgKCctJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludChsZWZ0KSkpKSkpKTtcblx0fSk7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkcGFkZGluZ0VhY2ggPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciB0b3AgPSBfdjAudG9wO1xuXHR2YXIgcmlnaHQgPSBfdjAucmlnaHQ7XG5cdHZhciBib3R0b20gPSBfdjAuYm90dG9tO1xuXHR2YXIgbGVmdCA9IF92MC5sZWZ0O1xuXHRpZiAoX1V0aWxzX2VxKHRvcCwgcmlnaHQpICYmIChfVXRpbHNfZXEodG9wLCBib3R0b20pICYmIF9VdGlsc19lcSh0b3AsIGxlZnQpKSkge1xuXHRcdHZhciB0b3BGbG9hdCA9IHRvcDtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkU3R5bGVDbGFzcyxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHBhZGRpbmcsXG5cdFx0XHRBNShcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFBhZGRpbmdTdHlsZSxcblx0XHRcdFx0J3AtJyArICRlbG0kY29yZSRTdHJpbmckZnJvbUludCh0b3ApLFxuXHRcdFx0XHR0b3BGbG9hdCxcblx0XHRcdFx0dG9wRmxvYXQsXG5cdFx0XHRcdHRvcEZsb2F0LFxuXHRcdFx0XHR0b3BGbG9hdCkpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTdHlsZUNsYXNzLFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckcGFkZGluZyxcblx0XHRcdEE1KFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkUGFkZGluZ1N0eWxlLFxuXHRcdFx0XHRBNCgkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkcGFkZGluZ05hbWUsIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCksXG5cdFx0XHRcdHRvcCxcblx0XHRcdFx0cmlnaHQsXG5cdFx0XHRcdGJvdHRvbSxcblx0XHRcdFx0bGVmdCkpO1xuXHR9XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRQeCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1B4JywgYTogYX07XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHB4ID0gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFB4O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBc1JvdyA9IHskOiAnQXNSb3cnfTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYXNSb3cgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQXNSb3c7XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkcm93ID0gRjIoXG5cdGZ1bmN0aW9uIChhdHRycywgY2hpbGRyZW4pIHtcblx0XHRyZXR1cm4gQTQoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZWxlbWVudCxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRhc1Jvdyxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRkaXYsXG5cdFx0XHRBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGh0bWxDbGFzcygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50TGVmdCArICgnICcgKyAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50Q2VudGVyWSkpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHdpZHRoKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkaGVpZ2h0KCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdFx0XHRhdHRycykpKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRVbmtleWVkKGNoaWxkcmVuKSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRDbGFzcyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0NsYXNzJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRGbGFnJHNwYWNpbmcgPSAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRmbGFnKDMpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNwYWNlRXZlbmx5ID0gQTIoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJENsYXNzLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkRmxhZyRzcGFjaW5nLCAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5zcGFjZUV2ZW5seSk7XG52YXIgJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRhbHQgPSAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdhbHQnKTtcbnZhciAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHNyYyA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J3NyYycsXG5cdFx0X1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0T3JIdG1sVXJpKHVybCkpO1xufTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRpbWFnZSA9IEYyKFxuXHRmdW5jdGlvbiAoYXR0cnMsIF92MCkge1xuXHRcdHZhciBzcmMgPSBfdjAuc3JjO1xuXHRcdHZhciBkZXNjcmlwdGlvbiA9IF92MC5kZXNjcmlwdGlvbjtcblx0XHR2YXIgaW1hZ2VBdHRyaWJ1dGVzID0gQTIoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRmaWx0ZXIsXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRzd2l0Y2ggKGEuJCkge1xuXHRcdFx0XHRcdGNhc2UgJ1dpZHRoJzpcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdGNhc2UgJ0hlaWdodCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YXR0cnMpO1xuXHRcdHJldHVybiBBNChcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRlbGVtZW50LFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGFzRWwsXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkZGl2LFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRodG1sQ2xhc3MoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuaW1hZ2VDb250YWluZXIpLFxuXHRcdFx0XHRhdHRycyksXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW5rZXllZChcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEE0KFxuXHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVsZW1lbnQsXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYXNFbCxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCROb2RlTmFtZSgnaW1nJyksXG5cdFx0XHRcdFx0XHRfVXRpbHNfYXAoXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQXR0cihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3JjKHNyYykpLFxuXHRcdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEF0dHIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGFsdChkZXNjcmlwdGlvbikpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdGltYWdlQXR0cmlidXRlcyksXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkVW5rZXllZChfTGlzdF9OaWwpKVxuXHRcdFx0XHRcdF0pKSk7XG5cdH0pO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZiA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J2hyZWYnLFxuXHRcdF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh1cmwpKTtcbn07XG52YXIgJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRyZWwgPSBfVmlydHVhbERvbV9hdHRyaWJ1dGUoJ3JlbCcpO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGxpbmsgPSBGMihcblx0ZnVuY3Rpb24gKGF0dHJzLCBfdjApIHtcblx0XHR2YXIgdXJsID0gX3YwLnVybDtcblx0XHR2YXIgbGFiZWwgPSBfdjAubGFiZWw7XG5cdFx0cmV0dXJuIEE0KFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGVsZW1lbnQsXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkYXNFbCxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCROb2RlTmFtZSgnYScpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRBdHRyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZih1cmwpKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkQXR0cihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkcmVsKCdub29wZW5lciBub3JlZmVycmVyJykpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHdpZHRoKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkaGVpZ2h0KCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNocmluayksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJGh0bWxDbGFzcygkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkU3R5bGUkY2xhc3Nlcy5jb250ZW50Q2VudGVyWCArICgnICcgKyAoJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMuY29udGVudENlbnRlclkgKyAoJyAnICsgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJFN0eWxlJGNsYXNzZXMubGluaykpKSksXG5cdFx0XHRcdFx0XHRcdFx0YXR0cnMpKSkpKSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRVbmtleWVkKFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W2xhYmVsXSkpKTtcblx0fSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JE1haW4kdmlld0luc3RhbGxlZExpbmsgPSBBMihcblx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkbGluayxcblx0X0xpc3RfTmlsLFxuXHR7XG5cdFx0bGFiZWw6IEEyKFxuXHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkaW1hZ2UsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRoZWlnaHQoXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkcHgoMjApKVxuXHRcdFx0XHRdKSxcblx0XHRcdHtkZXNjcmlwdGlvbjogJ0luc3RhbGxlZCBtb2RzIGljb24nLCBzcmM6ICcuL2Fzc2V0cy90aC1saXN0LnN2Zyd9KSxcblx0XHR1cmw6ICcjaW5zdGFsbGVkJ1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRGb250JHNpemUgPSBmdW5jdGlvbiAoaSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFN0eWxlQ2xhc3MsXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckZm9udFNpemUsXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJEZvbnRTaXplKGkpKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFNwYWNpbmdTdHlsZSA9IEYzKFxuXHRmdW5jdGlvbiAoYSwgYiwgYykge1xuXHRcdHJldHVybiB7JDogJ1NwYWNpbmdTdHlsZScsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciAkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkc3BhY2luZ05hbWUgPSBGMihcblx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRyZXR1cm4gJ3NwYWNpbmctJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoeCkgKyAoJy0nICsgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHkpKSk7XG5cdH0pO1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHNwYWNpbmcgPSBmdW5jdGlvbiAoeCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFN0eWxlQ2xhc3MsXG5cdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJEZsYWckc3BhY2luZyxcblx0XHRBMyhcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRJbnRlcm5hbCRNb2RlbCRTcGFjaW5nU3R5bGUsXG5cdFx0XHRBMigkbWRncmlmZml0aCRlbG1fdWkkSW50ZXJuYWwkTW9kZWwkc3BhY2luZ05hbWUsIHgsIHgpLFxuXHRcdFx0eCxcblx0XHRcdHgpKTtcbn07XG52YXIgJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFRleHQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdUZXh0JywgYTogYX07XG59O1xudmFyICRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHRleHQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuXHRyZXR1cm4gJG1kZ3JpZmZpdGgkZWxtX3VpJEludGVybmFsJE1vZGVsJFRleHQoY29udGVudCk7XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJHZpZXdMb2dvID0gQTIoXG5cdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGxpbmssXG5cdF9MaXN0X05pbCxcblx0e1xuXHRcdGxhYmVsOiBBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHJvdyxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JEZvbnQkc2l6ZSgyOCksXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkc3BhY2luZygxMilcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRpbWFnZSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGhlaWdodChcblx0XHRcdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkcHgoMzIpKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uOiAnVGhlIE1QTSBsb2dvJywgc3JjOiAnLi9hc3NldHMvbG9nby5zdmcnfSksXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkdGV4dCgnTVBNJylcblx0XHRcdFx0XSkpLFxuXHRcdHVybDogJyMnXG5cdH0pO1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJHZpZXdIZWFkZXIgPSBBMihcblx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkZWwsXG5cdF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRCYWNrZ3JvdW5kJGNvbG9yKCRhdXRob3IkcHJvamVjdCRNYWluJGNvbG9ycy5iYWNrZ3JvdW5kU2Vjb25kYXJ5KSxcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHdpZHRoKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGZpbGwpXG5cdFx0XSksXG5cdEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGVsLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFskbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRjZW50ZXJYXSksXG5cdFx0QTIoXG5cdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRyb3csXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRoZWlnaHQoJG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkZmlsbCksXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkd2lkdGgoXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkcHgoODAwKSksXG5cdFx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkY2VudGVyWSxcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRzcGFjZUV2ZW5seSxcblx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRwYWRkaW5nRWFjaChcblx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JE1haW4kZWRnZXMsXG5cdFx0XHRcdFx0XHR7Ym90dG9tOiAxMiwgdG9wOiAxMn0pKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0WyRhdXRob3IkcHJvamVjdCRNYWluJHZpZXdMb2dvLCAkYXV0aG9yJHByb2plY3QkTWFpbiR2aWV3SW5zdGFsbGVkTGlua10pKSkpO1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJHZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGxheW91dCxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JEJhY2tncm91bmQkY29sb3IoJGF1dGhvciRwcm9qZWN0JE1haW4kY29sb3JzLmJhY2tncm91bmQpLFxuXHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRGb250JGNvbG9yKCRhdXRob3IkcHJvamVjdCRNYWluJGNvbG9ycy5mb250KSxcblx0XHRcdFx0JG1kZ3JpZmZpdGgkZWxtX3VpJEVsZW1lbnQkRm9udCRmYW1pbHkoXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkbWRncmlmZml0aCRlbG1fdWkkRWxlbWVudCRGb250JHR5cGVmYWNlKCdRdWlja3NhbmQnKSxcblx0XHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JEZvbnQkc2Fuc1NlcmlmXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSxcblx0XHRBMihcblx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGNvbHVtbixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JHdpZHRoKCRtZGdyaWZmaXRoJGVsbV91aSRFbGVtZW50JGZpbGwpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbJGF1dGhvciRwcm9qZWN0JE1haW4kdmlld0hlYWRlcl0pKSk7XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJG1haW4gPSAkZWxtJGJyb3dzZXIkQnJvd3NlciRlbGVtZW50KFxuXHR7XG5cdFx0aW5pdDogJGF1dGhvciRwcm9qZWN0JE1haW4kaW5pdCxcblx0XHRzdWJzY3JpcHRpb25zOiBmdW5jdGlvbiAoX3YwKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRub25lO1xuXHRcdH0sXG5cdFx0dXBkYXRlOiAkYXV0aG9yJHByb2plY3QkTWFpbiR1cGRhdGUsXG5cdFx0dmlldzogJGF1dGhvciRwcm9qZWN0JE1haW4kdmlld1xuXHR9KTtcbl9QbGF0Zm9ybV9leHBvcnQoeydNYWluJzp7J2luaXQnOiRhdXRob3IkcHJvamVjdCRNYWluJG1haW4oXG5cdCRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkKF9VdGlsc19UdXBsZTApKSgwKX19KTt9KHRoaXMpKTsiLCJpbXBvcnQgeyBFbG0gfSBmcm9tICcuL01haW4nO1xyXG5cclxuY29uc3QgYXBwID0gRWxtLk1haW4uaW5pdCh7XHJcbiAgICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyksXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9