export const rpnGames = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@rubyplaynetwork/either/dist/either.js
  var require_either = __commonJS({
    "node_modules/@rubyplaynetwork/either/dist/either.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Either = void 0;
      var Either2 = class _Either {
        static fromRight(r) {
          const e = new _Either();
          e.right = r;
          e.isRight = true;
          return e;
        }
        static fromLeft(l) {
          const e = new _Either();
          e.left = l;
          e.isRight = false;
          return e;
        }
        match(matchLeft, matchRight) {
          return this.isRight ? matchRight(this.right) : matchLeft(this.left);
        }
        // Turns the either into another either, with the internal types changed
        map(mapLeft, mapRight) {
          return this.isRight ? _Either.fromRight(mapRight(this.right)) : _Either.fromLeft(mapLeft(this.left));
        }
        // Turns the either into another either, with the left-type changed
        mapLeft(mapLeft) {
          return this.isRight ? _Either.fromRight(this.right) : _Either.fromLeft(mapLeft(this.left));
        }
        // Turns the either into another either, with the right-type changed
        mapRight(mapRight) {
          return this.isRight ? _Either.fromRight(mapRight(this.right)) : _Either.fromLeft(this.left);
        }
      };
      exports.Either = Either2;
    }
  });

  // node_modules/@rubyplaynetwork/either/dist/index.js
  var require_dist = __commonJS({
    "node_modules/@rubyplaynetwork/either/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Either = void 0;
      var either_1 = require_either();
      Object.defineProperty(exports, "Either", { enumerable: true, get: function() {
        return either_1.Either;
      } });
    }
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer3;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer3.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this))
            return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer3.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this))
            return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function Buffer3(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer3.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer3.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b)
          return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer3.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer3, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer3.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer3.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer3.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer3.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer3.alloc(+length);
      }
      Buffer3.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer3.prototype;
      };
      Buffer3.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array))
          a = Buffer3.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array))
          b = Buffer3.from(b, b.offset, b.byteLength);
        if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b)
          return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer3.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer3.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer3.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer3.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer3.isBuffer(buf))
                buf = Buffer3.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer3.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer3.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0)
          return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding)
          encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer3.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer3.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer3.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer3.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
      Buffer3.prototype.equals = function equals(b) {
        if (!Buffer3.isBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer3.compare(this, b) === 0;
      };
      Buffer3.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max)
          str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
      }
      Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer3.from(target, target.offset, target.byteLength);
        }
        if (!Buffer3.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0)
          return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0)
          byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir)
            return -1;
          else
            byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir)
            byteOffset = 0;
          else
            return -1;
        }
        if (typeof val === "string") {
          val = Buffer3.from(val, encoding);
        }
        if (Buffer3.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1)
                foundIndex = i;
              if (i - foundIndex + 1 === valLength)
                return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1)
                i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found)
              return i;
          }
        }
        return -1;
      }
      Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed))
            return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer3.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining)
          length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer3.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0)
          start = 0;
        if (!end || end < 0 || end > len)
          end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer3.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0)
            start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start)
          end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer3.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0)
          throw new RangeError("offset is not uint");
        if (offset + ext > length)
          throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 24);
        const hi = this[++offset] + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + last * __pow(2, 24);
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + this[++offset];
        const lo = this[++offset] * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * __pow(2, 8) + this[offset + 6] * __pow(2, 16) + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * __pow(2, 8) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 24));
      });
      Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * __pow(2, 24) + this[++offset] * __pow(2, 16) + this[++offset] * __pow(2, 8) + last);
      });
      Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer3.isBuffer(buf))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min)
          throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
      }
      Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
        if (offset < 0)
          throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer3.isBuffer(target))
          throw new TypeError("argument should be a Buffer");
        if (!start)
          start = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start)
          end = start;
        if (end === start)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length)
          throw new RangeError("Index out of range");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer3.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > __pow(2, 32)) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > __pow(BigInt(2), BigInt(32)) || input < -__pow(BigInt(2), BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2)
          return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
              break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
              break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
              break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0)
            break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length)
            break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues(rnds8);
  }

  // node_modules/uuid/dist/esm-browser/regex.js
  var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  // node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default = validate;

  // node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).substr(1));
  }
  var i;
  function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var stringify_default = stringify;

  // node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default = v4;

  // src/games-sdk/util.ts
  function timeoutPromise(p_time) {
    return __async(this, null, function* () {
      yield new Promise((resolve) => {
        setTimeout(resolve, p_time);
      });
    });
  }
  function loadJsonPromise(fileName) {
    return new Promise((resolve, reject) => {
      let localAdd = location.protocol + "//" + location.host + location.pathname;
      localAdd = localAdd.substring(0, localAdd.lastIndexOf("/"));
      const hash = v4_default().substring(0, 12);
      const fullFileName = `${localAdd}/${fileName}?version=${hash}`;
      console.debug(`[RPN Games SDK] Loading JSON file: ${fullFileName}`);
      const request = new XMLHttpRequest();
      request.onload = () => {
        if (request.status >= 400) {
          console.warn(`[RPN Games SDK] Failed to load JSON file: ${fullFileName}, err: ${request.statusText}`);
          reject(request.statusText);
        } else {
          console.debug(`[RPN Games SDK] JSON file: ${fullFileName} loaded successfully`);
          resolve(request.responseText);
        }
      };
      request.onerror = () => {
        console.warn(`[RPN Games SDK] Failed to load JSON file: ${fullFileName}, err: ${request.statusText}`);
        reject(request.statusText);
      };
      request.open("GET", fullFileName, true);
      request.send();
    });
  }
  function formatBalanceString(currency, balance) {
    if (currency === "POINTS" /* POINTS */) {
      return formatCommaSeperatedNumber(balance.toFixed(0));
    }
    return formatCommaSeperatedNumber((balance / 100).toFixed(2));
  }
  function formatCommaSeperatedNumber(p_score) {
    if (typeof p_score === "number") {
      p_score = p_score.toString();
    }
    return p_score.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // src/games-sdk/config.ts
  var Deployment = /* @__PURE__ */ ((Deployment2) => {
    Deployment2["BAMA_BINGO"] = "bamabingo";
    Deployment2["GOLDSLIPS"] = "goldslips";
    Deployment2["LABS"] = "labs";
    Deployment2["RUBY_SWEEPS"] = "rubysweepsmvp";
    return Deployment2;
  })(Deployment || {});
  var Environment = /* @__PURE__ */ ((Environment3) => {
    Environment3["LOCAL"] = "local";
    Environment3["DIRECT"] = "direct";
    Environment3["DEV"] = "dev";
    Environment3["TEST"] = "test";
    Environment3["STAGING"] = "staging";
    Environment3["PRODUCTION"] = "production";
    return Environment3;
  })(Environment || {});
  var Config = class _Config {
    constructor() {
      this._sdkVersion = "1.3.1196";
      this._gameData = {
        versionString: "0.0.1",
        name: "Test SDK Game",
        analyticsId: "G-6VQQTL6LZG"
      };
      this._environment = "local" /* LOCAL */;
      this._deployment = "rubysweepsmvp" /* RUBY_SWEEPS */;
      this._forceBigWin = false;
      this._showTestJackpots = false;
    }
    static get instance() {
      if (!_Config._instance) {
        _Config._instance = new _Config();
      }
      return _Config._instance;
    }
    init() {
      return __async(this, null, function* () {
        const queryParams = new URLSearchParams(location.search.substring(1));
        this._forceBigWin = queryParams.has("b") && queryParams.get("b") === "1";
        this._showTestJackpots = queryParams.has("j") && queryParams.get("j") === "1";
        this.setDeploymentFromQueryParams(queryParams);
        const rawGameData = yield loadJsonPromise(`./deploy-config.json`).catch((_err) => {
          return "{}";
        });
        let parsedData;
        try {
          parsedData = JSON.parse(rawGameData);
          if ("deployments" in parsedData && this._deployment in parsedData.deployments) {
            parsedData = __spreadValues(__spreadValues({}, parsedData), parsedData.deployments[this._deployment]);
          }
        } catch (e) {
          console.warn("[RPN Games SDK] Unable to parse game deploy config: ", rawGameData);
          parsedData = {};
        }
        if (!(parsedData == null ? void 0 : parsedData.analyticsId) || (parsedData == null ? void 0 : parsedData.analyticsId.includes("GA_MEASUREMENT_ID"))) {
          parsedData.analyticsId = this._gameData.analyticsId;
        }
        this._gameData = __spreadValues(__spreadValues({}, this._gameData), parsedData);
        this.setEnvironmentFromQueryParamsOrLocation(queryParams);
        this.setPlatform();
      });
    }
    setDeploymentFromQueryParams(queryParams) {
      const deployment = queryParams.get("deployment") || "";
      if (deployment) {
        if (Object.values(Deployment).includes(deployment)) {
          this._deployment = deployment;
        } else {
          console.warn("[RPN Games SDK] Unable to parse URL param deployment: ", deployment);
          this._deployment = "rubysweepsmvp" /* RUBY_SWEEPS */;
        }
      } else {
        const location2 = queryParams.get("location") || "";
        if (location2) {
          if (Object.values(Deployment).includes(location2)) {
            this._deployment = location2;
          } else {
            console.warn("[RPN Games SDK] Unable to parse URL param location: ", location2);
            this._deployment = "rubysweepsmvp" /* RUBY_SWEEPS */;
          }
        }
      }
    }
    setEnvironmentFromQueryParamsOrLocation(queryParams) {
      var _a, _b, _c;
      const environment = (_c = (_b = (_a = queryParams.get("environment")) != null ? _a : queryParams.get("env")) != null ? _b : this._gameData.environment) != null ? _c : "";
      if (environment) {
        if (Object.values(Environment).includes(environment)) {
          this._environment = environment;
        } else if (environment === "labs") {
          this._environment = "direct" /* DIRECT */;
          this._platform = "labs" /* LABS */;
        } else {
          console.warn("[RPN Games SDK] Unable to parse URL param environment: ", environment);
          this._environment = "local" /* LOCAL */;
        }
      } else {
        const location2 = window.location.hostname;
        if (this.isLocalIpAddress(location2)) {
          this._environment = "local" /* LOCAL */;
        } else if (location2.includes(".dev.")) {
          this._environment = "dev" /* DEV */;
        } else if (location2.includes(".test.")) {
          this._environment = "test" /* TEST */;
        } else if (location2.includes(".uat.") || location2.includes(".staging.")) {
          this._environment = "staging" /* STAGING */;
        } else {
          this._environment = "production" /* PRODUCTION */;
        }
      }
    }
    isLocalIpAddress(location2) {
      return location2.includes("localhost") || location2.includes("127.0.0.1") || location2.length > 8 && location2.substring(0, 8) === "192.168." || location2.length > 3 && location2.substring(0, 3) === "10.";
    }
    setPlatform() {
      if (!this._platform) {
        switch (this._deployment) {
          case "bamabingo" /* BAMA_BINGO */:
            this._platform = "mobingo" /* MOBINGO */;
            return;
          case "goldslips" /* GOLDSLIPS */:
            this._platform = "sgp" /* SGP */;
            return;
          case "labs" /* LABS */:
            this._platform = "labs" /* LABS */;
            return;
          case "rubysweepsmvp" /* RUBY_SWEEPS */:
          default:
            this._platform = "sgp" /* SGP */;
            return;
        }
      }
    }
    /**
     * Everything that has been parsed from your deploy-config.json file
     * This will include: versionString, name, analyticsId
     * As well as anything else you've added to the file
     */
    get rawConfigData() {
      return this._gameData;
    }
    get gameVersion() {
      return this._gameData.versionString;
    }
    get gameName() {
      return this._gameData.name;
    }
    get analyticsId() {
      return this._gameData.analyticsId;
    }
    /**
     * What level of production is this game currently being hosted in: local/dev/test/staging/production
     */
    get environment() {
      return this._environment;
    }
    /**
     * Which app technology (if any) is this game currently being accessed from
     */
    get platform() {
      return this._platform;
    }
    /**
     * Which location/skin should this game use for displaying currencies
     */
    get deployment() {
      return this._deployment;
    }
    get notInApp() {
      return this._environment === "direct" /* DIRECT */ || this._environment === "local" /* LOCAL */;
    }
    get sdkVersion() {
      return this._sdkVersion;
    }
    get forceBigWin() {
      return this._forceBigWin;
    }
    get showTestJackpots() {
      return this._showTestJackpots;
    }
  };

  // src/games-sdk/accounts/balanceManager.ts
  var BalanceManager = class _BalanceManager {
    static get instance() {
      if (!_BalanceManager._instance) {
        _BalanceManager._instance = new _BalanceManager();
      }
      return _BalanceManager._instance;
    }
    get accounts() {
      return this._accounts;
    }
    get accountsArray() {
      return [...this._accounts.values()];
    }
    get credits() {
      return this._credits;
    }
    get sweepsBalance() {
      var _a, _b;
      return (_b = (_a = this._accounts.get("SWEEP_TICKETS" /* SWEEP_TICKETS */)) == null ? void 0 : _a.balance) != null ? _b : 0;
    }
    get pointsBalance() {
      var _a, _b;
      return (_b = (_a = this._accounts.get("POINTS" /* POINTS */)) == null ? void 0 : _a.balance) != null ? _b : 0;
    }
    init() {
      var _a, _b;
      const queryParams = new URLSearchParams(location.search.substr(1));
      this._accounts = /* @__PURE__ */ new Map();
      const accountsString = (_a = queryParams.get("accounts")) != null ? _a : "";
      this.parseAccounts(accountsString);
      console.log(
        `[RPN Games SDK] User account balances:
SWEEP_TICKETS: ${this.sweepsBalance}
POINTS: ${this.pointsBalance}`
      );
      this._credits = [];
      const creditsString = (_b = queryParams.get("credits")) != null ? _b : "";
      this.parseCredits(creditsString);
    }
    /////////////////////////////
    // Accounts
    /////////////////////////////
    parseAccounts(accountsString) {
      try {
        let accounts = JSON.parse(accountsString);
        for (let i = 0; i < accounts.length; i++) {
          this._accounts.set(accounts[i].currency, accounts[i]);
        }
        if (!this._accounts.get("POINTS" /* POINTS */) || Config.instance.platform !== "mobingo" /* MOBINGO */ && !this._accounts.get("SWEEP_TICKETS" /* SWEEP_TICKETS */)) {
          throw new Error(
            `
                    Accounts param is mis-configured, sweeps platform must include both SWEEP_TICKETS and POINTS accounts, mobingo platform must include a POINTS account`
          );
        }
        console.log("[RPN Games SDK] Successfully parsed user accounts from URLSearchParams:");
      } catch (e) {
        console.warn(
          `[RPN Games SDK] Failed to parse users accounts from URLSearchParams:
error: ${e.message}
URL accounts param: ${accountsString}`
        );
        console.debug(`[RPN Games SDK] generating default user accounts for testing`);
        this._accounts.set(
          "SWEEP_TICKETS" /* SWEEP_TICKETS */,
          {
            userId: "Test123",
            balance: 9860,
            currency: "SWEEP_TICKETS" /* SWEEP_TICKETS */
          }
        );
        this._accounts.set(
          "POINTS" /* POINTS */,
          {
            userId: "Test123",
            balance: 9001,
            currency: "POINTS" /* POINTS */
          }
        );
      }
    }
    updateAccounts(accounts) {
      for (let i = 0; i < accounts.length; i++) {
        this._accounts.set(accounts[i].currency, accounts[i]);
      }
    }
    debitAccount(currency, amount) {
      this._accounts.get(currency).balance -= amount;
    }
    creditAccount(currency, amount) {
      this._accounts.get(currency).balance += amount;
    }
    checkBalanceForBet(currency, amount) {
      var _a, _b;
      const bal = (_b = (_a = this.accounts.get(currency)) == null ? void 0 : _a.balance) != null ? _b : 0;
      const newBal = bal - amount;
      return newBal + Number.EPSILON >= 0;
    }
    /////////////////////////////
    // Credits
    // v1 where a credit is a specific amount that must be used in 1 bet on 1 paytable
    // They can not be combined into bigger amounts or used on multiple different paytable tables
    /////////////////////////////
    parseCredits(creditsString) {
      try {
        if (creditsString) {
          let credits = JSON.parse(creditsString);
          for (let i = 0; i < credits.length; i++) {
            this.addCredit(credits[i].creditId, credits[i].currency, credits[i].creditsValue, credits[i].paytableNames);
          }
          console.log("[RPN Games SDK] Successfully parsed user credits from URLSearchParams");
        } else {
          console.debug("[RPN Games SDK] defaulting to 0 credits");
        }
      } catch (e) {
        console.warn(
          `[RPN Games SDK] Failed to parse users credits from URLSearchParams:
error: ${e.message}
URL credits param: ${creditsString}`
        );
        console.debug("[RPN Games SDK] defaulting to 0 credits");
      }
    }
    checkCreditForBet(currency, amount, paytable) {
      const creditsForTable = this.getCreditsForTable(currency, paytable);
      return creditsForTable.some((c) => c.creditsValue === amount);
    }
    getCreditsForTable(currency, paytable) {
      const credits = this._credits.filter((c) => c.currency === currency && c.paytableNames.includes(paytable));
      return credits;
    }
    addCredit(id, currency, amount, paytables) {
      this._credits.push({
        paytableNames: paytables,
        creditsValue: amount,
        currency,
        creditId: id
      });
    }
    removeCredit(currency, amount, paytable) {
      const matchingCredit = this.getCreditsForTable(currency, paytable).find((c) => c.creditsValue === amount);
      if (matchingCredit) {
        return this.removeCreditById(matchingCredit.creditId);
      } else {
        console.warn(`[RPN Games SDK] failed to remove credit of: ${amount}, in currency: ${currency}, for paytable: ${paytable}, as user does not have one`);
      }
    }
    removeCreditById(id) {
      const matchingCreditIndex = this._credits.findIndex((c) => c.creditId === id);
      if (matchingCreditIndex < 0) {
        console.warn(`[RPN Games SDK] failed to remove credit with id: ${id}, id was not found`);
      } else {
        return this._credits.splice(matchingCreditIndex, 1)[0];
      }
    }
    removeMultipleCreditsById(ids) {
      const removed = [];
      for (const id of ids) {
        const matchingCredit = this.removeCreditById(id);
        if (matchingCredit) {
          removed.push(matchingCredit);
        }
      }
      return removed;
    }
    resetAllCreditsForTable(currency, paytable, credits = []) {
      this._credits = this._credits.filter((c) => {
        return !(c.currency === currency && c.paytableNames.includes(paytable));
      });
      for (const c of credits) {
        this.addCredit(c.creditId, c.currency, c.creditsValue, c.paytableNames);
      }
    }
  };

  // src/games-sdk/analytics.ts
  var AnalyticsManager = class _AnalyticsManager {
    static get instance() {
      if (!this._instance) {
        this._instance = new _AnalyticsManager();
      }
      return this._instance;
    }
    /**
     * Called by the API to load and initialise the gtag functionality,
     * set the user's ID for the session,
     * and set basic game/version information
     */
    init(userId) {
      const gaLoadScript = document.createElement("script");
      gaLoadScript.type = "text/javascript";
      gaLoadScript.src = `https://www.googletagmanager.com/gtag/js?id=${Config.instance.analyticsId}`;
      document.head.append(gaLoadScript);
      const gaInitScript = document.createElement("script");
      gaInitScript.type = "text/javascript";
      gaInitScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', '${Config.instance.analyticsId}', {
            'user_id': '${userId}'
        });
        `;
      document.head.append(gaInitScript);
      gtag("set", {
        sdkVersion: Config.instance.sdkVersion,
        gameVersion: Config.instance.gameVersion,
        gameName: Config.instance.gameName,
        deployment: Config.instance.deployment,
        environment: Config.instance.environment
      });
    }
    /**
     * Used for tracking a custom analytics event
     * e.g. button_toggled: { name: "sound", newValue: "off" }, game_completed: { score: 1700, time_seconds: 84, level: 6 }
     *
     * Note that makeBet and makeCreditBet are automatically tracked by the API
     *
     * @param eventName Name of the event to be measured e.g. "button_toggled" / "game_completed"
     * @param properties List of key/value pairs describing the details of the event e.g. { score: 1700, time_seconds: 84, level: 6 }
     */
    sendEvent(eventName, properties) {
      gtag("event", eventName, __spreadValues({
        game_timestamp: Date.now()
      }, properties));
    }
    /**
     * Used to set details that apply to the same user across every event
     * e.g. isVip: true, playerLevel: 17, favouriteMiniGame: "SuperFunMiniGame"
     *
     * Note that user_id is automatically set on initialisation
     *
     * @param propName Name of the property to set for this user ("isVip" / "playerLevel" / "favouriteMiniGame")
     * @param propValue Value of the property to set for this user (true / 17 / "SuperFunMiniGame")
     */
    setUserProperty(propName, propValue) {
      const obj = JSON.parse(`{ "${propName}": ${propValue} }`);
      gtag("set", "user_properties", obj);
    }
  };

  // src/games-sdk/paytables/getPaytableResult.ts
  function getPaytableResult(table, betAmount, currency, forceBigWin = false) {
    return __async(this, null, function* () {
      const result = yield PaytableComms.sendPaytableRequest(table, betAmount, currency, forceBigWin).catch((reason) => reason);
      if (!result || typeof result === "string") {
        const err = `Paytable result is error or undefined: ${result}`;
        console.warn(`[RPN Games SDK] ${err}`);
        return err;
      }
      return result;
    });
  }
  function getRtpForPaytables(currency, paytableNames) {
    return __async(this, null, function* () {
      const rtpPromises = paytableNames.map((table) => {
        return PaytableComms.sendRtpRequest(currency, table);
      });
      const result = yield Promise.all(rtpPromises).catch((reason) => reason);
      if (typeof result === "string") {
        const err = `Error getting RTP for paytables: ${result}`;
        console.warn(`[RPN Games SDK] ${err}`);
        return {
          error: err,
          code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
        };
      }
      return {
        response: result
      };
    });
  }
  var _PaytableComms = class _PaytableComms {
    static addCreditIdToCredits(paytableResult) {
      var _a;
      (_a = paytableResult.credits) == null ? void 0 : _a.forEach((credit) => {
        if (credit.creditId)
          return;
        credit.creditId = Math.floor(Math.random() * 2147483647).toString();
      });
    }
  };
  _PaytableComms.endpoint = "https://paytable.test.sweeps.wildrubygames.com/";
  _PaytableComms.sendPaytableRequest = (paytableName, amountBet, currency, forceBigWin) => new Promise((resolve, reject) => {
    const effectiveBetAmount = amountBet;
    const paytableQuery = `testBetResult?paytableName=${paytableName}&betAmount=${amountBet}&effectiveBetAmount=${effectiveBetAmount}&currency=${currency}&forceBigWin=${forceBigWin}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${_PaytableComms.endpoint}${paytableQuery}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", () => {
      if (xhr.status < 400) {
        const response = JSON.parse(xhr.response);
        _PaytableComms.addCreditIdToCredits(response.result);
        resolve(response.result);
      } else {
        reject(xhr.response);
      }
    });
    xhr.addEventListener("error", () => {
      reject(xhr.response);
    });
    xhr.send();
  });
  _PaytableComms.sendRtpRequest = (currency, paytableName) => new Promise((resolve, reject) => {
    const paytableQuery = `rtp/${currency}?paytableName=${paytableName}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${_PaytableComms.endpoint}${paytableQuery}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", () => {
      if (xhr.status < 400) {
        const response = JSON.parse(xhr.response);
        resolve({
          rtp: response.rtp,
          paytable: paytableName
        });
      } else {
        reject(xhr.response);
      }
    });
    xhr.addEventListener("error", () => {
      reject(xhr.response);
    });
    xhr.send();
  });
  var PaytableComms = _PaytableComms;

  // src/games-sdk/events.ts
  var EventManager = class {
    static listen(key, callback, once = false) {
      const listener = (event) => {
        callback(event.detail);
      };
      document.addEventListener(key, listener, { once });
      return listener;
    }
    static nextEvent(key, idPrefix) {
      return __async(this, null, function* () {
        return new Promise((resolve) => {
          const listener = (event) => {
            const detail = event.detail;
            const messageId = detail.id;
            if (startsWithUUID(messageId)) {
              if (idPrefix) {
                if (!messageId)
                  return;
                if (!messageId.startsWith(idPrefix))
                  return;
              }
            }
            document.removeEventListener(key, listener, { capture: true });
            event.stopImmediatePropagation();
            resolve(detail);
          };
          document.addEventListener(key, listener, { capture: true });
        });
      });
    }
    static dispatch(key, detail) {
      const event = new CustomEvent(key, { detail });
      document.dispatchEvent(event);
    }
    static removeListener(key, listener) {
      document.removeEventListener(key, listener);
    }
  };
  function startsWithUUID(messageId) {
    if (!messageId)
      return false;
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
    return uuidRegex.test(messageId);
  }

  // src/games-sdk/localStorage.ts
  function localStorageSet(key, value) {
    return __async(this, null, function* () {
      console.debug(`[RPN Games SDK] Setting value: ${value} for key: ${key} into local storage`);
      localStorage.setItem(key, value);
      return Promise.resolve();
    });
  }
  function localStorageGet(key) {
    console.debug(`[RPN Games SDK] Getting value for key: ${key} from local storage`);
    return new Promise((resolve) => {
      resolve({
        key,
        value: localStorage.getItem(key)
      });
    });
  }

  // src/games-sdk/platform-apis/iPlatformApi.ts
  var IPlatformApi = class {
    constructor() {
      this.validCurrencies = [
        "POINTS" /* POINTS */,
        "SWEEP_TICKETS" /* SWEEP_TICKETS */
      ];
    }
    onBetSuccess(response) {
      var _a;
      BalanceManager.instance.updateAccounts(response.accounts);
      (_a = response.paytableResult.credits) == null ? void 0 : _a.forEach((c) => {
        BalanceManager.instance.addCredit(c.creditId, c.currency, c.creditsValue, c.paytableNames);
      });
    }
    localStorageGet(key) {
      return __async(this, null, function* () {
        return (yield localStorageGet(key)).value;
      });
    }
    localStorageSet(key, value) {
      localStorageSet(key, value);
    }
    onGamePaused(callback) {
      EventManager.listen(
        "onGamePausedNotification" /* onGamePausedNotification */,
        (data) => {
          callback(data == null ? void 0 : data.reason);
        }
      );
    }
    onGameResumed(callback) {
      EventManager.listen("onGameResumedNotification" /* onGameResumedNotification */, callback);
    }
    onJackpotsUpdated(callback) {
      EventManager.listen(
        "onJackpotUpdateNotification" /* onJackpotUpdateNotification */,
        (data) => {
          var _a;
          const jackpots = (_a = data == null ? void 0 : data.jackpots) != null ? _a : [];
          callback(jackpots);
        }
      );
    }
    onBalancesUpdated(callback) {
      EventManager.listen(
        "onBalanceUpdateNotification" /* onBalanceUpdateNotification */,
        (data) => {
          var _a;
          callback((_a = data == null ? void 0 : data.accounts) != null ? _a : []);
        }
      );
    }
    // MoBingo Only
    skillCheckRequest(_betResult, _skillResult) {
      return __async(this, null, function* () {
        console.warn("[RPN Games SDK] Error: skillCheckRequest is not required nor supported on the current platform");
        const response = {
          accounts: BalanceManager.instance.accountsArray
        };
        yield timeoutPromise(50);
        return response;
      });
    }
  };

  // src/games-sdk/stateful-game/testResponder.ts
  var import_either = __toESM(require_dist());
  var import_buffer = __toESM(require_buffer());
  window.Buffer = import_buffer.Buffer;
  var _TestResponder = class _TestResponder {
    static sendGetInfoResponse(gameCode) {
      return __async(this, null, function* () {
        const resultOrErr = yield _TestResponder.sendRequest("POST", "info", {
          gameCode
        });
        return resultOrErr;
      });
    }
    static sendStartGameResponse(gameCode, currency, betAmount, config) {
      return __async(this, null, function* () {
        const resultOrErr = yield _TestResponder.sendRequest("POST", "start", {
          gameCode,
          betAmount,
          currency,
          config
        });
        return resultOrErr;
      });
    }
    static sendActionResponse(gameCode, gameId, action) {
      return __async(this, null, function* () {
        const resultOrErr = yield _TestResponder.sendRequest("POST", "action", {
          gameCode,
          gameId,
          action
        });
        return resultOrErr;
      });
    }
    static sendRequest(type, endpoint, body) {
      return __async(this, null, function* () {
        return new Promise((resolve) => {
          const xhr = new XMLHttpRequest();
          xhr.open(type, `${_TestResponder.baseUrl}${endpoint}`);
          xhr.setRequestHeader("Content-Type", "application/json");
          const jwt1 = {
            uid: _TestResponder.userId,
            email: "special@test.com",
            email_verified: true,
            phone_number: "555444333"
          };
          const token = import_buffer.Buffer.from(JSON.stringify(jwt1)).toString("base64");
          const authHeader = `Bearer ${token}`;
          xhr.setRequestHeader("Authorization", authHeader);
          xhr.addEventListener("load", () => {
            if (xhr.status < 400) {
              let result = JSON.parse(xhr.response);
              resolve(import_either.Either.fromRight(result));
            } else {
              resolve(import_either.Either.fromLeft(xhr.response));
            }
          });
          xhr.addEventListener("error", () => {
            resolve(import_either.Either.fromLeft(xhr.response));
          });
          xhr.send(JSON.stringify(body));
        });
      });
    }
  };
  _TestResponder.baseUrl = "https://api.dev.sweeps.wildrubygames.com/games/statefulGames/";
  _TestResponder.userId = "VfJuXuwWAxT51W8IMnE4shHClQs2";
  var TestResponder = _TestResponder;

  // src/games-sdk/platform-apis/sgpDirect.ts
  var SgpDirectApi = class _SgpDirectApi extends IPlatformApi {
    static get instance() {
      if (!this._instance) {
        this._instance = new _SgpDirectApi();
        AnalyticsManager.instance.setUserProperty("used_platform_direct", true);
      }
      return this._instance;
    }
    notifyGameEnded(_betResult) {
      return __async(this, null, function* () {
        const response = {
          accounts: BalanceManager.instance.accountsArray
        };
        yield timeoutPromise(500);
        return response;
      });
    }
    closeGame() {
      console.log(`[RPN Games SDK] Can not close game in ${Config.instance.environment} environment`);
    }
    getBetResponse(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a;
        const result = yield getPaytableResult(betOptions.paytableName, betAmount, currency, (_a = betOptions.forceBigWin) != null ? _a : false);
        if (typeof result === "string") {
          return {
            error: result,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        }
        const response = {
          betId: v4_default(),
          paytableResult: result,
          accounts: BalanceManager.instance.accountsArray
        };
        const index = response.accounts.findIndex((acc) => acc.currency === currency);
        response.accounts[index].balance += result.amountWon;
        this.onBetSuccess(response);
        return response;
      });
    }
    makeBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        const response = yield this.getBetResponse(currency, betAmount, betOptions);
        if ("error" in response) {
          BalanceManager.instance.creditAccount(currency, betAmount);
        }
        return response;
      });
    }
    makeCreditBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a, _b, _c;
        const response = yield this.getBetResponse(currency, betAmount, betOptions);
        if ("error" in response) {
          const credit = (_a = betOptions.creditsUsed) == null ? void 0 : _a[0];
          const paytableNames = (_b = credit == null ? void 0 : credit.paytableNames) != null ? _b : [betOptions.paytableName];
          BalanceManager.instance.addCredit((_c = credit == null ? void 0 : credit.creditId) != null ? _c : "unknown", currency, betAmount, paytableNames);
        }
        return response;
      });
    }
    makeMultiCreditBet(currency, credits, betOptions) {
      return __async(this, null, function* () {
        const totalBetAmount = credits.reduce((total, current) => total + current.creditsValue, 0);
        const response = yield this.getBetResponse(currency, totalBetAmount, betOptions);
        if ("error" in response) {
          credits.forEach((cred) => {
            BalanceManager.instance.addCredit(cred.creditId, currency, cred.creditsValue, cred.paytableNames);
          });
        }
        return response;
      });
    }
    statefulGameGetInfo(gameCode) {
      return __async(this, null, function* () {
        const response = yield TestResponder.sendGetInfoResponse(gameCode);
        if (response.isRight)
          return response.right;
        console.warn(`[RPN Games SDK] statefulGameGetInfo error ${response.left}`);
        return {
          error: `statefulGameGetInfo error ${response.left}`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    statefulGameStart(gameCode, currency, betAmount, config) {
      return __async(this, null, function* () {
        const response = yield TestResponder.sendStartGameResponse(gameCode, currency, betAmount, config);
        if (response.isRight)
          return response.right;
        console.warn(`[RPN Games SDK] statefulGameStart error ${response.left}`);
        return {
          error: `statefulGameStart error ${response.left}`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    statefulGameAction(gameCode, gameId, action) {
      return __async(this, null, function* () {
        const response = yield TestResponder.sendActionResponse(gameCode, gameId, action);
        if (response.isRight)
          return response.right;
        console.warn(`[RPN Games SDK] statefulGameAction error ${response.left}`);
        return {
          error: `statefulGameAction error ${response.left}`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    requestUpdatedBalances() {
      return __async(this, null, function* () {
        const response = {
          accounts: BalanceManager.instance.accountsArray
        };
        yield timeoutPromise(500);
        return response;
      });
    }
    getCreditsForPaytable(currency, paytable) {
      return __async(this, null, function* () {
        return BalanceManager.instance.getCreditsForTable(currency, paytable);
      });
    }
    getRtpForPaytables(currency, paytables) {
      return __async(this, null, function* () {
        return getRtpForPaytables(currency, paytables);
      });
    }
  };

  // src/games-sdk/platform-apis/labs.ts
  var LabsApi = class _LabsApi extends SgpDirectApi {
    constructor() {
      super(...arguments);
      this.validCurrencies = ["POINTS" /* POINTS */];
    }
    static get instance() {
      if (!this._instance) {
        this._instance = new _LabsApi();
        AnalyticsManager.instance.setUserProperty("used_platform_labs", true);
      }
      return this._instance;
    }
    closeGame() {
      window.history.back();
      return;
    }
  };

  // src/games-sdk/messaging/index.ts
  var ControlType = /* @__PURE__ */ ((ControlType2) => {
    ControlType2[ControlType2["REQUEST"] = 0] = "REQUEST";
    ControlType2[ControlType2["RESPONSE"] = 1] = "RESPONSE";
    ControlType2[ControlType2["NOTIFICATION"] = 2] = "NOTIFICATION";
    return ControlType2;
  })(ControlType || {});
  var CommandType = /* @__PURE__ */ ((CommandType2) => {
    CommandType2["MAKE_BET"] = "MAKE_BET";
    CommandType2["JACKPOT_UPDATE"] = "JACKPOT_UPDATE";
    CommandType2["GAME_ENDED"] = "SPIN_ENDED";
    CommandType2["CLOSE_GAME"] = "CLOSE_GAME";
    CommandType2["SKILL_CHECK_RESULT"] = "SKILL_CHECK_RESULT";
    CommandType2["MAKE_CREDIT_BET"] = "MAKE_CREDIT_BET";
    CommandType2["MAKE_MULTI_CREDIT_BET"] = "MAKE_MULTI_CREDIT_BET";
    CommandType2["STATEFUL_GAME_INFO"] = "STATEFUL_GAME_INFO";
    CommandType2["STATEFUL_GAME_START_GAME"] = "STATEFUL_GAME_START_GAME";
    CommandType2["STATEFUL_GAME_ACTION"] = "STATEFUL_GAME_ACTION";
    CommandType2["PAUSE_GAME"] = "PAUSE_GAME";
    CommandType2["RESUME_GAME"] = "RESUME_GAME";
    CommandType2["BALANCE_UPDATE"] = "BALANCE_UPDATE";
    CommandType2["CREDIT_BALANCE"] = "CREDIT_BALANCE";
    CommandType2["GET_PAYTABLE_DETAILS"] = "GET_PAYTABLE_DETAILS";
    CommandType2["LOCAL_STORAGE_GET"] = "LOCAL_STORAGE_GET";
    CommandType2["LOCAL_STORAGE_SET"] = "LOCAL_STORAGE_SET";
    return CommandType2;
  })(CommandType || {});
  var Message = class {
    constructor(p_control, p_command, p_data) {
      this.id = "blank";
      this.controlType = p_control;
      this.commandType = p_command;
      this.data = p_data;
      this.id = v4_default();
    }
  };

  // src/games-sdk/messaging/onMessageReceived.ts
  var onMessageReceived = (message) => __async(void 0, null, function* () {
    if (message.controlType === 1 /* RESPONSE */) {
      switch (message.commandType) {
        case "CREDIT_BALANCE" /* CREDIT_BALANCE */:
          EventManager.dispatch("onCreditBalanceResponse" /* onCreditBalanceResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "BALANCE_UPDATE" /* BALANCE_UPDATE */: {
          EventManager.dispatch("onBalanceUpdateNotification" /* onBalanceUpdateNotification */, __spreadValues({ id: message.id }, message.data));
          break;
        }
        case "MAKE_BET" /* MAKE_BET */:
          EventManager.dispatch("onMakeBetResponse" /* onMakeBetResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "MAKE_CREDIT_BET" /* MAKE_CREDIT_BET */:
          EventManager.dispatch("onMakeCreditBetResponse" /* onMakeCreditBetResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "MAKE_MULTI_CREDIT_BET" /* MAKE_MULTI_CREDIT_BET */:
          EventManager.dispatch("onMakeMultiCreditBetResponse" /* onMakeMultiCreditBetResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "STATEFUL_GAME_INFO" /* STATEFUL_GAME_INFO */:
          EventManager.dispatch("onStatefulGameInfoResponse" /* onStatefulGameInfoResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "STATEFUL_GAME_START_GAME" /* STATEFUL_GAME_START_GAME */:
          EventManager.dispatch("onStatefulGameStartResponse" /* onStatefulGameStartResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "STATEFUL_GAME_ACTION" /* STATEFUL_GAME_ACTION */:
          EventManager.dispatch("onStatefulGameActionResponse" /* onStatefulGameActionResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "SPIN_ENDED" /* GAME_ENDED */:
          EventManager.dispatch("onGameEndedResponse" /* onGameEndedResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "SKILL_CHECK_RESULT" /* SKILL_CHECK_RESULT */:
          EventManager.dispatch("onSkillCheckResultResponse" /* onSkillCheckResultResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "LOCAL_STORAGE_GET" /* LOCAL_STORAGE_GET */:
          EventManager.dispatch("onStorageResponse" /* onStorageResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        case "GET_PAYTABLE_DETAILS" /* GET_PAYTABLE_DETAILS */:
          EventManager.dispatch("onPaytableRtpResponse" /* onPaytableRtpResponse */, __spreadValues({ id: message.id }, message.data));
          break;
        default:
          console.warn(`[RPN Games SDK] No RESPONSE handling implemented for command ${CommandType[message.commandType]}`);
      }
    } else if (message.controlType === 0 /* REQUEST */) {
      console.warn(`[RPN Games SDK] No REQUEST handling implemented for command ${CommandType[message.commandType]}`);
    } else if (message.controlType === 2 /* NOTIFICATION */) {
      switch (message.commandType) {
        case "JACKPOT_UPDATE" /* JACKPOT_UPDATE */:
          EventManager.dispatch("onJackpotUpdateNotification" /* onJackpotUpdateNotification */, message.data);
          break;
        case "BALANCE_UPDATE" /* BALANCE_UPDATE */:
          EventManager.dispatch("onBalanceUpdateNotification" /* onBalanceUpdateNotification */, message.data);
          break;
        case "PAUSE_GAME" /* PAUSE_GAME */:
          console.debug(`[RPN Games SDK] PAUSE_GAME notification received`);
          EventManager.dispatch("onGamePausedNotification" /* onGamePausedNotification */, message.data);
          break;
        case "RESUME_GAME" /* RESUME_GAME */:
          console.debug(`[RPN Games SDK] RESUME_GAME notification received`);
          EventManager.dispatch("onGameResumedNotification" /* onGameResumedNotification */, message.data);
          break;
        default:
          console.warn(`[RPN Games SDK] No NOTIFICATION handling implemented for command ${CommandType[message.commandType]}`);
      }
    } else {
      console.warn(`[RPN Games SDK] Unable to handle unknown control type ${message.controlType}`);
    }
  });

  // src/games-sdk/messaging/appComms.ts
  var AppComms = class _AppComms {
    static get instance() {
      if (!this._instance) {
        this._instance = new _AppComms();
      }
      return this._instance;
    }
    constructor() {
      this._sentMessages = [];
      window.addEventListener("message", this.onMessageReceived.bind(this));
    }
    onMessageReceived(p_event) {
      return __async(this, null, function* () {
        console.log("onMessageReceived", p_event);
        let message;
        try {
          message = JSON.parse(p_event.data);
          if (typeof message.data === "string") {
            message.data = JSON.parse(message.data);
          }
        } catch (e) {
          console.warn(`[RPN Games SDK] Unable to parse message: ${JSON.stringify(p_event.data)}`);
          return;
        }
        if (this._sentMessages.includes(message.id)) {
          this._sentMessages.splice(this._sentMessages.indexOf(message.id), 1);
          return;
        }
        console.debug(
          `[RPN Games SDK] ${ControlType[message.controlType]} message received:
${CommandType[message.commandType]}: ${JSON.stringify(message.data)}`
        );
        onMessageReceived(message);
      });
    }
    sendMessage(p_message, ignoreSent = false) {
      if (!ignoreSent) {
        this._sentMessages.push(p_message.id);
      }
      window.parent.postMessage(JSON.stringify(p_message), "*");
      console.debug("[RPN Games SDK] Message sent to app:");
      console.debug(p_message);
    }
  };

  // src/games-sdk/platform-apis/sgp.ts
  var SgpApi = class _SgpApi extends IPlatformApi {
    static get instance() {
      if (!this._instance) {
        this._instance = new _SgpApi();
        AnalyticsManager.instance.setUserProperty("used_platform_sgp", true);
      }
      return this._instance;
    }
    notifyGameEnded(betResult) {
      return __async(this, null, function* () {
        const gameEndData = {
          result: betResult,
          gameVersion: Config.instance.gameVersion
        };
        const gameEndMsg = new Message(0 /* REQUEST */, "SPIN_ENDED" /* GAME_ENDED */, gameEndData);
        const responsePromise = EventManager.nextEvent("onGameEndedResponse" /* onGameEndedResponse */, gameEndMsg.id);
        AppComms.instance.sendMessage(gameEndMsg);
        const response = yield responsePromise;
        BalanceManager.instance.updateAccounts(response.accounts);
        return response;
      });
    }
    closeGame() {
      const closeGameMsg = new Message(0 /* REQUEST */, "CLOSE_GAME" /* CLOSE_GAME */, {});
      AppComms.instance.sendMessage(closeGameMsg);
    }
    makeBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a, _b;
        const requestData = __spreadValues({
          gameVersion: Config.instance.gameVersion,
          gameName: Config.instance.gameName,
          currency,
          betAmount
        }, betOptions);
        const msg = new Message(0 /* REQUEST */, "MAKE_BET" /* MAKE_BET */, requestData);
        const responsePromise = EventManager.nextEvent("onMakeBetResponse" /* onMakeBetResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          BalanceManager.instance.creditAccount(currency, betAmount);
          return {
            error: (_b = (_a = response.error) == null ? void 0 : _a.message) != null ? _b : `${response.error}`,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        }
        this.onBetSuccess(response);
        return response;
      });
    }
    makeCreditBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a, _b, _c, _d, _e;
        const requestData = __spreadValues({
          gameVersion: Config.instance.gameVersion,
          gameName: Config.instance.gameName,
          currency,
          betAmount
        }, betOptions);
        const msg = new Message(0 /* REQUEST */, "MAKE_CREDIT_BET" /* MAKE_CREDIT_BET */, requestData);
        const responsePromise = EventManager.nextEvent("onMakeCreditBetResponse" /* onMakeCreditBetResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          const credit = (_a = betOptions.creditsUsed) == null ? void 0 : _a[0];
          const paytableNames = (_b = credit == null ? void 0 : credit.paytableNames) != null ? _b : [betOptions.paytableName];
          BalanceManager.instance.addCredit((_c = credit == null ? void 0 : credit.creditId) != null ? _c : "unknown", currency, betAmount, paytableNames);
          return {
            error: (_e = (_d = response.error) == null ? void 0 : _d.message) != null ? _e : `${response.error}`,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        }
        this.onBetSuccess(response);
        return response;
      });
    }
    makeMultiCreditBet(currency, credits, betOptions) {
      return __async(this, null, function* () {
        var _a, _b;
        const requestData = __spreadValues({
          gameVersion: Config.instance.gameVersion,
          gameName: Config.instance.gameName,
          currency,
          credits: credits.map((c) => ({ id: c.creditId }))
        }, betOptions);
        const msg = new Message(0 /* REQUEST */, "MAKE_MULTI_CREDIT_BET" /* MAKE_MULTI_CREDIT_BET */, requestData);
        const responsePromise = EventManager.nextEvent("onMakeMultiCreditBetResponse" /* onMakeMultiCreditBetResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          credits.forEach((cred) => {
            BalanceManager.instance.addCredit(cred.creditId, currency, cred.creditsValue, cred.paytableNames);
          });
          return {
            error: (_b = (_a = response.error) == null ? void 0 : _a.message) != null ? _b : `${response.error}`,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        }
        this.onBetSuccess(response);
        return response;
      });
    }
    statefulGameGetInfo(gameCode) {
      return __async(this, null, function* () {
        var _a, _b;
        const requestData = {
          gameCode
        };
        const msg = new Message(0 /* REQUEST */, "STATEFUL_GAME_INFO" /* STATEFUL_GAME_INFO */, requestData);
        const responsePromise = EventManager.nextEvent("onStatefulGameInfoResponse" /* onStatefulGameInfoResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          return {
            error: (_b = (_a = response.error) == null ? void 0 : _a.message) != null ? _b : `${response.error}`,
            code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
          };
        }
        response.pendingGames.forEach((pendingGame) => this.setStatefulGameCurrency(pendingGame.gameId, pendingGame.currency));
        return response;
      });
    }
    statefulGameStart(gameCode, currency, betAmount, config) {
      return __async(this, null, function* () {
        var _a, _b;
        const requestData = {
          gameCode,
          config,
          betAmount,
          currency,
          gameVersion: Config.instance.gameVersion,
          numLines: 1,
          gameType: "STATEFUL_GAME"
        };
        const msg = new Message(0 /* REQUEST */, "STATEFUL_GAME_START_GAME" /* STATEFUL_GAME_START_GAME */, requestData);
        const responsePromise = EventManager.nextEvent("onStatefulGameStartResponse" /* onStatefulGameStartResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          const errorMessage = (_b = (_a = response.error) == null ? void 0 : _a.message) != null ? _b : `${response.error}`;
          return {
            error: errorMessage,
            code: errorMessage.includes("alance") ? "NOT_ENOUGH_BALANCE" /* NOT_ENOUGH_BALANCE */ : "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
          };
        }
        this.setStatefulGameCurrency(response.gameId, currency);
        return response;
      });
    }
    statefulGameAction(gameCode, gameId, action) {
      return __async(this, null, function* () {
        var _a, _b;
        const requestData = {
          gameCode,
          currency: this.getStatefulGameCurrency(gameId),
          gameId,
          action
        };
        const msg = new Message(0 /* REQUEST */, "STATEFUL_GAME_ACTION" /* STATEFUL_GAME_ACTION */, requestData);
        const responsePromise = EventManager.nextEvent("onStatefulGameActionResponse" /* onStatefulGameActionResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          return {
            error: (_b = (_a = response.error) == null ? void 0 : _a.message) != null ? _b : `${response.error}`,
            code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
          };
        }
        return response;
      });
    }
    setStatefulGameCurrency(gameId, currency) {
      if (!this._statefulGameCurrencyByGameIds)
        this._statefulGameCurrencyByGameIds = /* @__PURE__ */ new Map();
      this._statefulGameCurrencyByGameIds.set(gameId, currency);
    }
    getStatefulGameCurrency(gameId) {
      var _a;
      const currency = (_a = this._statefulGameCurrencyByGameIds) == null ? void 0 : _a.get(gameId);
      if (!currency)
        return "POINTS" /* POINTS */;
      return currency;
    }
    requestUpdatedBalances() {
      return __async(this, null, function* () {
        const reqBalMsg = new Message(0 /* REQUEST */, "BALANCE_UPDATE" /* BALANCE_UPDATE */, {});
        const responsePromise = EventManager.nextEvent("onBalanceUpdateNotification" /* onBalanceUpdateNotification */, reqBalMsg.id);
        AppComms.instance.sendMessage(reqBalMsg);
        let accounts = yield responsePromise.catch((err) => err);
        if (!accounts || accounts.message || accounts.error) {
          console.warn(`[RPN Games SDK] Error getting updated balances: ${(accounts == null ? void 0 : accounts.error) || (accounts == null ? void 0 : accounts.message) || accounts}`);
          accounts = [];
        }
        BalanceManager.instance.updateAccounts(accounts);
        return {
          accounts
        };
      });
    }
    getCreditsForPaytable(currency, paytable) {
      return __async(this, null, function* () {
        const msgData = {
          paytableName: paytable
        };
        const reqBalMsg = new Message(0 /* REQUEST */, "CREDIT_BALANCE" /* CREDIT_BALANCE */, msgData);
        const responsePromise = EventManager.nextEvent("onCreditBalanceResponse" /* onCreditBalanceResponse */, reqBalMsg.id);
        AppComms.instance.sendMessage(reqBalMsg);
        const response = yield responsePromise;
        if (!response || response.message || response.error) {
          console.warn((response == null ? void 0 : response.error) || (response == null ? void 0 : response.message) || response);
          return [];
        }
        const allCredits = Array.isArray(response) ? response : response.result;
        const credits = allCredits.filter((val) => {
          return val.currency === currency;
        });
        return credits;
      });
    }
    getRtpForPaytables(currency, paytables) {
      return __async(this, null, function* () {
        var _a;
        const msgData = {
          paytables,
          currency
        };
        const reqRtpMsg = new Message(0 /* REQUEST */, "GET_PAYTABLE_DETAILS" /* GET_PAYTABLE_DETAILS */, msgData);
        const responsePromise = EventManager.nextEvent("onPaytableRtpResponse" /* onPaytableRtpResponse */, reqRtpMsg.id);
        AppComms.instance.sendMessage(reqRtpMsg);
        const response = yield responsePromise;
        if (!response || response.message || response.error) {
          const err = (response == null ? void 0 : response.error) || (response == null ? void 0 : response.message) || response;
          console.warn(`[RPN Games SDK] Error getting RTP for paytables: [${paytables.join(", ")}] - ${err}`);
          return {
            error: err,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        }
        return {
          response: (_a = response.rtps) != null ? _a : []
        };
      });
    }
    localStorageGet(key) {
      return __async(this, null, function* () {
        const getStorageMsg = new Message(0 /* REQUEST */, "LOCAL_STORAGE_GET" /* LOCAL_STORAGE_GET */, { key });
        const valPromise = EventManager.nextEvent("onStorageResponse" /* onStorageResponse */, getStorageMsg.id);
        AppComms.instance.sendMessage(getStorageMsg);
        const val = (yield valPromise).value;
        return val;
      });
    }
    localStorageSet(key, value) {
      const setStorageMsg = new Message(0 /* REQUEST */, "LOCAL_STORAGE_SET" /* LOCAL_STORAGE_SET */, { key, value });
      AppComms.instance.sendMessage(setStorageMsg);
    }
  };

  // src/games-sdk/platform-apis/scion.ts
  var ScionApi = class extends SgpApi {
    // TODO anything specific that Scion needs
  };

  // src/games-sdk/platform-apis/mobingo.ts
  var MobingoApi = class _MobingoApi extends SgpApi {
    constructor() {
      super(...arguments);
      this.validCurrencies = ["POINTS" /* POINTS */];
    }
    static get instance() {
      if (!this._instance) {
        this._instance = new _MobingoApi();
        AnalyticsManager.instance.setUserProperty("used_platform_mobingo", true);
      }
      return this._instance;
    }
    notifyGameEnded(betResult) {
      return __async(this, null, function* () {
        const gameEndData = {
          result: betResult,
          gameVersion: Config.instance.gameVersion
        };
        const gameEndMsg = new Message(0 /* REQUEST */, "SPIN_ENDED" /* GAME_ENDED */, gameEndData);
        const responsePromise = EventManager.nextEvent("onGameEndedResponse" /* onGameEndedResponse */, gameEndMsg.id);
        AppComms.instance.sendMessage(gameEndMsg);
        const response = yield responsePromise;
        BalanceManager.instance.updateAccounts(response.accounts);
        return response;
      });
    }
    closeGame() {
      const closeGameMsg = new Message(0 /* REQUEST */, "CLOSE_GAME" /* CLOSE_GAME */, {});
      AppComms.instance.sendMessage(closeGameMsg);
    }
    onBetSuccess(response) {
      BalanceManager.instance.updateAccounts(response.accounts);
    }
    makeBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a, _b;
        const requestData = __spreadValues({
          gameVersion: Config.instance.gameVersion,
          gameName: Config.instance.gameName,
          betAmount
        }, betOptions);
        const msg = new Message(0 /* REQUEST */, "MAKE_BET" /* MAKE_BET */, requestData);
        const responsePromise = EventManager.nextEvent("onMakeBetResponse" /* onMakeBetResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          BalanceManager.instance.creditAccount(currency, betAmount);
          return {
            error: (_b = (_a = response.error) == null ? void 0 : _a.message) != null ? _b : `${response.error}`,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        } else if (response.paytableResult.credits) {
          response.paytableResult.credits = response.paytableResult.credits.map((c, i) => ({
            creditId: response.betId + i,
            currency: "POINTS" /* POINTS */,
            creditsValue: c.creditsValue,
            paytableNames: [c.paytableName]
          }));
        }
        this.onBetSuccess(response);
        return response;
      });
    }
    skillCheckRequest(betResult, outcome) {
      return __async(this, null, function* () {
        var _a;
        const skillResultData = {
          betId: betResult.betId,
          skillCheckSuccessful: outcome === 2 /* SUCCESS */,
          didTimeout: outcome === 1 /* TIMEOUT */,
          gameVersion: Config.instance.gameVersion
        };
        const skillResultMsg = new Message(0 /* REQUEST */, "SKILL_CHECK_RESULT" /* SKILL_CHECK_RESULT */, skillResultData);
        const responsePromise = EventManager.nextEvent("onSkillCheckResultResponse" /* onSkillCheckResultResponse */, skillResultMsg.id);
        AppComms.instance.sendMessage(skillResultMsg);
        if (outcome === 2 /* SUCCESS */) {
          (_a = betResult.paytableResult.credits) == null ? void 0 : _a.forEach((c) => {
            BalanceManager.instance.addCredit(c.creditId, c.currency, c.creditsValue, c.paytableNames);
          });
        }
        const response = yield responsePromise;
        BalanceManager.instance.updateAccounts(response.accounts);
        return response;
      });
    }
    makeCreditBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a, _b, _c, _d, _e;
        const requestData = __spreadValues({
          gameVersion: Config.instance.gameVersion,
          gameName: Config.instance.gameName,
          betAmount
        }, betOptions);
        const msg = new Message(0 /* REQUEST */, "MAKE_CREDIT_BET" /* MAKE_CREDIT_BET */, requestData);
        const responsePromise = EventManager.nextEvent("onMakeCreditBetResponse" /* onMakeCreditBetResponse */, msg.id);
        AppComms.instance.sendMessage(msg);
        const response = yield responsePromise;
        if ("error" in response) {
          const credit = (_a = betOptions.creditsUsed) == null ? void 0 : _a[0];
          const paytableNames = (_b = credit == null ? void 0 : credit.paytableNames) != null ? _b : [betOptions.paytableName];
          BalanceManager.instance.addCredit((_c = credit == null ? void 0 : credit.creditId) != null ? _c : "unknown", currency, betAmount, paytableNames);
          return {
            error: (_e = (_d = response.error) == null ? void 0 : _d.message) != null ? _e : `${response.error}`,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        } else if (response.paytableResult.credits) {
          response.paytableResult.credits = response.paytableResult.credits.map((c, i) => {
            const formatted = {
              creditId: response.betId + i,
              currency: "POINTS" /* POINTS */,
              creditsValue: c.creditsValue,
              paytableNames: [c.paytableName]
            };
            BalanceManager.instance.addCredit(formatted.creditId, formatted.currency, formatted.creditsValue, formatted.paytableNames);
            return formatted;
          });
        }
        return response;
      });
    }
    makeMultiCreditBet(_currency, _credits, _betOptions) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] makeMultiCreditBet not available on ${Config.instance.platform} platform`);
        return {
          error: `makeMultiCreditBet not available on ${Config.instance.platform} platform`,
          code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
        };
      });
    }
    statefulGameGetInfo(gameCode) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] statefulGame not available on ${Config.instance.platform} platform`);
        return {
          error: `statefulGame not available on ${Config.instance.platform} platform`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    statefulGameStart(gameCode, currency, betAmount, config) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] statefulGame not available on ${Config.instance.platform} platform`);
        return {
          error: `statefulGame not available on ${Config.instance.platform} platform`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    statefulGameAction(gameCode, gameId, action) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] statefulGame not available on ${Config.instance.platform} platform`);
        return {
          error: `statefulGame not available on ${Config.instance.platform} platform`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    requestUpdatedBalances() {
      return __async(this, null, function* () {
        const reqBalMsg = new Message(0 /* REQUEST */, "BALANCE_UPDATE" /* BALANCE_UPDATE */, {});
        const responsePromise = EventManager.nextEvent("onBalanceUpdateNotification" /* onBalanceUpdateNotification */, reqBalMsg.id);
        AppComms.instance.sendMessage(reqBalMsg);
        let accounts = yield responsePromise.catch((err) => err);
        if (!accounts || accounts.message || accounts.error) {
          console.warn(`[RPN Games SDK] Error getting updated balances: ${(accounts == null ? void 0 : accounts.error) || (accounts == null ? void 0 : accounts.message) || accounts}`);
          accounts = [];
        }
        BalanceManager.instance.updateAccounts(accounts);
        return {
          accounts
        };
      });
    }
    getCreditsForPaytable(_currency, paytable) {
      return __async(this, null, function* () {
        const msgData = {
          paytableName: paytable
        };
        const reqBalMsg = new Message(0 /* REQUEST */, "CREDIT_BALANCE" /* CREDIT_BALANCE */, msgData);
        const responsePromise = EventManager.nextEvent("onCreditBalanceResponse" /* onCreditBalanceResponse */, reqBalMsg.id);
        AppComms.instance.sendMessage(reqBalMsg);
        const response = yield responsePromise;
        if (!response || response.message || response.error) {
          console.warn((response == null ? void 0 : response.error) || (response == null ? void 0 : response.message) || response);
          return [];
        }
        const allCredits = Array.isArray(response) ? response : response.result;
        return allCredits.map((c, i) => {
          var _a, _b;
          return {
            creditId: (_b = (_a = c.creditId) != null ? _a : c.betId + i) != null ? _b : "Unknown_" + i,
            currency: "POINTS" /* POINTS */,
            creditsValue: c.creditsValue,
            paytableNames: [c.paytableName]
          };
        });
      });
    }
    localStorageGet(key) {
      return __async(this, null, function* () {
        const getStorageMsg = new Message(0 /* REQUEST */, "LOCAL_STORAGE_GET" /* LOCAL_STORAGE_GET */, { key });
        const valPromise = EventManager.nextEvent("onStorageResponse" /* onStorageResponse */, getStorageMsg.id);
        AppComms.instance.sendMessage(getStorageMsg);
        const val = (yield valPromise).value;
        return val;
      });
    }
    localStorageSet(key, value) {
      const setStorageMsg = new Message(0 /* REQUEST */, "LOCAL_STORAGE_SET" /* LOCAL_STORAGE_SET */, { key, value });
      AppComms.instance.sendMessage(setStorageMsg);
    }
  };

  // src/games-sdk/platform-apis/mobingoDirect.ts
  var MobingoDirectApi = class _MobingoDirectApi extends IPlatformApi {
    constructor() {
      super(...arguments);
      this.validCurrencies = ["POINTS" /* POINTS */];
    }
    static get instance() {
      if (!this._instance) {
        this._instance = new _MobingoDirectApi();
        AnalyticsManager.instance.setUserProperty("used_platform_direct", true);
      }
      return this._instance;
    }
    notifyGameEnded(_betResult) {
      return __async(this, null, function* () {
        const response = {
          accounts: BalanceManager.instance.accountsArray
        };
        yield timeoutPromise(500);
        return response;
      });
    }
    skillCheckRequest(betResult, outcome) {
      return __async(this, null, function* () {
        var _a;
        if (outcome === 2 /* SUCCESS */) {
          BalanceManager.instance.creditAccount("POINTS" /* POINTS */, betResult.paytableResult.amountWon);
          (_a = betResult.paytableResult.credits) == null ? void 0 : _a.forEach((c) => {
            BalanceManager.instance.addCredit(c.creditId, c.currency, c.creditsValue, c.paytableNames);
          });
        }
        const response = {
          accounts: BalanceManager.instance.accountsArray
        };
        yield timeoutPromise(50);
        return response;
      });
    }
    closeGame() {
      console.log(`[RPN Games SDK] Can not close game in ${Config.instance.environment} environment`);
    }
    onBetSuccess(response) {
      BalanceManager.instance.updateAccounts(response.accounts);
    }
    getBetResponse(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a;
        const result = yield getPaytableResult(betOptions.paytableName, betAmount, currency, (_a = betOptions.forceBigWin) != null ? _a : false);
        if (typeof result === "string") {
          return {
            error: result,
            code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
          };
        }
        const response = {
          betId: v4_default(),
          paytableResult: result,
          accounts: BalanceManager.instance.accountsArray
        };
        this.onBetSuccess(response);
        return response;
      });
    }
    makeBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        const response = yield this.getBetResponse(currency, betAmount, betOptions);
        if ("error" in response) {
          BalanceManager.instance.creditAccount(currency, betAmount);
        }
        return response;
      });
    }
    makeCreditBet(currency, betAmount, betOptions) {
      return __async(this, null, function* () {
        var _a, _b, _c, _d;
        const response = yield this.getBetResponse(currency, betAmount, betOptions);
        if ("error" in response) {
          const credit = (_a = betOptions.creditsUsed) == null ? void 0 : _a[0];
          const paytableNames = (_b = credit == null ? void 0 : credit.paytableNames) != null ? _b : [betOptions.paytableName];
          BalanceManager.instance.addCredit((_c = credit == null ? void 0 : credit.creditId) != null ? _c : "unknown", currency, betAmount, paytableNames);
        } else {
          (_d = response.paytableResult.credits) == null ? void 0 : _d.forEach((c) => {
            BalanceManager.instance.addCredit(c.creditId, c.currency, c.creditsValue, c.paytableNames);
          });
        }
        return response;
      });
    }
    makeMultiCreditBet(_currency, _credits, _betOptions) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] makeMultiCreditBet not available on ${Config.instance.platform} platform`);
        return {
          error: `makeMultiCreditBet not available on ${Config.instance.platform} platform`,
          code: "PAYTABLE_SERVICE_ERROR" /* PAYTABLE_SERVICE_ERROR */
        };
      });
    }
    statefulGameGetInfo(gameCode) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] statefulGame not available on ${Config.instance.platform} platform`);
        return {
          error: `statefulGame not available on ${Config.instance.platform} platform`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    statefulGameStart(gameCode, currency, betAmount, config) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] statefulGame not available on ${Config.instance.platform} platform`);
        return {
          error: `statefulGame not available on ${Config.instance.platform} platform`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    statefulGameAction(gameCode, gameId, action) {
      return __async(this, null, function* () {
        console.warn(`[RPN Games SDK] statefulGame not available on ${Config.instance.platform} platform`);
        return {
          error: `statefulGame not available on ${Config.instance.platform} platform`,
          code: "STATEFUL_GAME_ERROR" /* STATEFUL_GAME_ERROR */
        };
      });
    }
    requestUpdatedBalances() {
      return __async(this, null, function* () {
        const response = {
          accounts: BalanceManager.instance.accountsArray
        };
        yield timeoutPromise(500);
        return response;
      });
    }
    getCreditsForPaytable(currency, paytable) {
      return __async(this, null, function* () {
        return BalanceManager.instance.getCreditsForTable(currency, paytable);
      });
    }
    getRtpForPaytables(currency, paytables) {
      return __async(this, null, function* () {
        return getRtpForPaytables(currency, paytables);
      });
    }
  };

  // src/games-sdk/deployment-utils/iDeploymentUtil.ts
  var IDeploymentUtil = class {
    constructor() {
      this.baseIconUrl = "https://ruby-play-network.s3.us-east-1.amazonaws.com/app-icons";
      this.validSweepBetAmounts = [
        10,
        25,
        50,
        75,
        100,
        150,
        200,
        250,
        300,
        350,
        400,
        450,
        500,
        600,
        700,
        800,
        900,
        1e3,
        1500,
        2500,
        3e3,
        4e3,
        5e3,
        7500,
        1e4
      ];
    }
    getIconImageKey(currency, isSmall) {
      const currencyPrefix = currency === "POINTS" /* POINTS */ ? "points-" : "sweeps-";
      const sizeSuffix = isSmall ? "-small" : "";
      return `${currencyPrefix}${Config.instance.deployment}${sizeSuffix}`;
    }
    isValidBetAmountForCurrency(_currency, betAmount) {
      return {
        response: this.validSweepBetAmounts.includes(betAmount)
      };
    }
    getIconUrlForCurrency(currency, useSmallVersion) {
      const iconKey = this.getIconImageKey(currency, useSmallVersion);
      return {
        response: `${this.baseIconUrl}/${iconKey}.png`
      };
    }
    getIconFileNameForCurrency(currency, useSmallVersion) {
      return {
        response: this.getIconImageKey(currency, useSmallVersion)
      };
    }
    getFormattedBalanceForCurrency(currency, balance) {
      return {
        response: formatBalanceString(currency, balance)
      };
    }
  };

  // src/games-sdk/deployment-utils/rubySweepsMvp.ts
  var RubySweepsDeploymentUtil = class _RubySweepsDeploymentUtil extends IDeploymentUtil {
    static get instance() {
      if (!this._instance) {
        this._instance = new _RubySweepsDeploymentUtil();
        AnalyticsManager.instance.setUserProperty("used_deployment_rubysweeps", true);
      }
      return this._instance;
    }
    getDisplayNameForCurrency(currency) {
      return {
        response: currency === "POINTS" /* POINTS */ ? "Gold Coins" : "Emeralds"
      };
    }
  };

  // src/games-sdk/deployment-utils/bamaBingo.ts
  var BamaBingoDeploymentUtil = class _BamaBingoDeploymentUtil extends IDeploymentUtil {
    constructor() {
      super(...arguments);
      this.validSweepBetAmounts = [];
      this.validPointBetAmounts = [
        25,
        50,
        100,
        150,
        200,
        250,
        300,
        350,
        400,
        450,
        500,
        600,
        700,
        800,
        900,
        1e3
      ];
    }
    static get instance() {
      if (!this._instance) {
        this._instance = new _BamaBingoDeploymentUtil();
        AnalyticsManager.instance.setUserProperty("used_deployment_bamabingo", true);
      }
      return this._instance;
    }
    isValidBetAmountForCurrency(currency, betAmount) {
      if (currency === "SWEEP_TICKETS" /* SWEEP_TICKETS */) {
        return {
          response: false
        };
      }
      return {
        response: this.validPointBetAmounts.includes(betAmount)
      };
    }
    getDisplayNameForCurrency(_currency) {
      return {
        response: "Points"
      };
    }
    getIconImageKey(_currency, isSmall) {
      const sizeSuffix = isSmall ? "-small" : "";
      return `points-bamabingo${sizeSuffix}`;
    }
  };

  // src/games-sdk/deployment-utils/goldslips.ts
  var GoldslipsDeploymentUtil = class _GoldslipsDeploymentUtil extends IDeploymentUtil {
    static get instance() {
      if (!this._instance) {
        this._instance = new _GoldslipsDeploymentUtil();
        AnalyticsManager.instance.setUserProperty("used_deployment_goldslips", true);
      }
      return this._instance;
    }
    getDisplayNameForCurrency(currency) {
      return {
        response: currency === "POINTS" /* POINTS */ ? "Fun Coins" : "Gold Slips"
      };
    }
  };

  // src/games-sdk/api.ts
  var Api = class {
    constructor() {
      this._isInitialised = false;
      this._currentJackpots = [];
      this._gameIsPaused = false;
    }
    init() {
      return __async(this, null, function* () {
        console.log("[RPN Games SDK] initialising Api");
        yield Config.instance.init();
        BalanceManager.instance.init();
        AnalyticsManager.instance.init(this.accountsArray[0].userId);
        this._platformApi = this.getPlatformApi();
        this._deploymentUtil = this.getDeploymentUtil();
        if (Config.instance.showTestJackpots) {
          this._currentJackpots = [
            {
              backgroundColor: "#770099",
              currency: "SWEEP_TICKETS" /* SWEEP_TICKETS */,
              displayName: "MINI",
              isVisible: true,
              jackpotType: "MINI",
              prizeTotal: 980
            },
            {
              backgroundColor: "#EE5500",
              currency: "SWEEP_TICKETS" /* SWEEP_TICKETS */,
              displayName: "MINOR",
              isVisible: true,
              jackpotType: "MINOR",
              prizeTotal: 2514
            },
            {
              backgroundColor: "#EE5500",
              currency: "SWEEP_TICKETS" /* SWEEP_TICKETS */,
              displayName: "MAJOR Big Name",
              isVisible: true,
              jackpotType: "MAJOR",
              prizeTotal: 12465
            },
            {
              backgroundColor: "#00AA00",
              currency: "SWEEP_TICKETS" /* SWEEP_TICKETS */,
              displayName: "MEGA",
              isVisible: true,
              jackpotType: "MEGA",
              prizeTotal: 94299
            }
          ];
        }
        this._isInitialised = true;
        console.log("[RPN Games SDK] Api initialisation complete");
        if (this._onInitialisedCallback) {
          this._onInitialisedCallback();
        }
        this._platformApi.onGamePaused(() => {
          this._gameIsPaused = true;
        });
        this._platformApi.onGameResumed(() => {
          this._gameIsPaused = false;
        });
        this._platformApi.onJackpotsUpdated((jackpots) => {
          this._currentJackpots = jackpots;
        });
      });
    }
    getPlatformApi() {
      console.log(`[RPN Games SDK] getPlatformApi() - platform: ${Config.instance.platform}, environment: ${Config.instance.environment}`);
      switch (Config.instance.platform) {
        case "labs" /* LABS */:
          return LabsApi.instance;
        case "mobingo" /* MOBINGO */:
          return Config.instance.notInApp ? MobingoDirectApi.instance : MobingoApi.instance;
        case "scion" /* SCION */:
          return ScionApi.instance;
        case "sgp" /* SGP */:
        default:
          return Config.instance.notInApp ? SgpDirectApi.instance : SgpApi.instance;
      }
    }
    getDeploymentUtil() {
      console.log(`[RPN Games SDK] getDeploymentUtil() - deployment: ${Config.instance.deployment}`);
      switch (Config.instance.deployment) {
        case "bamabingo" /* BAMA_BINGO */:
          return BamaBingoDeploymentUtil.instance;
        case "goldslips" /* GOLDSLIPS */:
          return GoldslipsDeploymentUtil.instance;
        case "rubysweepsmvp" /* RUBY_SWEEPS */:
        default:
          return RubySweepsDeploymentUtil.instance;
      }
    }
    checkValidCurrency(currency) {
      if (!this.validCurrencies.includes(currency)) {
        const response = {
          error: `Invalid value given for currency: ${currency}, valid currencies are: [${this.validCurrencies.join(", ")}]`,
          code: "INVALID_CURRENCY" /* INVALID_CURRENCY */
        };
        console.warn(`[RPN Games SDK] Error: ${response.error}`);
        return response;
      }
      return void 0;
    }
    apiResponseAsBool(value) {
      if ("error" in value) {
        return false;
      }
      return value.response;
    }
    onBetResponse(response, currency, _betAmount, _betOptions = {}) {
      var _a;
      AnalyticsManager.instance.sendEvent("earn_virtual_currency", {
        value: response.paytableResult.amountWon,
        virtual_currency_name: currency
      });
      if ((_a = response.paytableResult.credits) == null ? void 0 : _a.length) {
        AnalyticsManager.instance.sendEvent("earn_virtual_currency", {
          value: response.paytableResult.credits.reduce((total, credit) => total + credit.creditsValue, 0),
          virtual_currency_name: response.paytableResult.credits[0].paytableNames.join("_OR_") + currency
        });
      }
    }
    /**
     * Set a callback for when the Api has completed its initialisation and is ready to be used
     *
     * NB: If the Api has already finished initialising, the callback will be called immediately
     */
    onInitialised(callback) {
      console.debug(`[RPN Games SDK] onInitialised: adding callback for Api initialisation complete`);
      if (this._isInitialised) {
        callback();
      } else {
        this._onInitialisedCallback = callback;
      }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //          Public Getters
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Returns true if this SDK has finished intialising, else false
     */
    get isInitialised() {
      return this._isInitialised;
    }
    /**
     * Returns a string representing the semantic version number of the current SDK
     */
    get sdkVersion() {
      return Config.instance.sdkVersion;
    }
    /**
     * Everything that has been parsed from your deploy-config.json file
     *
     * This will include: versionString, name, analyticsId
     * As well as anything else you've added to the file
     */
    get configData() {
      return Config.instance.rawConfigData;
    }
    /**
     * Returns the current production tier the game is running on, e.g. dev/test/staging/production
     * Set by the game's host container environment variables
     *
     * This can be manually overridden for testing by:
     *  - Passing in a URL parameter 'environment=whatever'
     *  - Adding an 'environment' key in your deploy-config.json
     */
    get currentEnvironment() {
      return Config.instance.environment;
    }
    /**
     * Returns the current platform as defined by the Config object
     *
     * The platform refers to the technology and APIs used in the current hosting environment:
     * 'sgp' is the default platform and powers all of our current apps
     * 'scion' is our next generation app, still in development,
     * 'labs' is our user testing base for prototyping and feedback
     * 'mobingo' is our points only physical bingo tie-in platform
     *
     * This is derived from the {@link currentDeployment}:
     * 'rubysweepsmvp' and 'goldslips' are both sgp platforms
     * 'labs' is its own unique platform
     * 'bamabingo' is currently our only mobingo platform
     */
    get currentPlatform() {
      return Config.instance.platform;
    }
    /**
     * Returns the current deployment as defined by the Config object
     *
     * The deployment refers to the branding and terminology used in the current hosting environment:
     * 'rubysweepsmvp' is the default platform, our sweepstake app
     * 'goldslips' is another sweepstakes app with a different skin and game library
     * 'labs' is our user testing base for prototyping and feedback
     * 'bamabingo' is our online hybrid bingo app, not currently supported by this SDK
     *
     * This can be set by passing in a URL parameter 'deployment=whatever'
     */
    get currentDeployment() {
      return Config.instance.deployment;
    }
    /**
     * Getter for the AnalyticsManager
     *
     * Currently implemented using GA4 and exposes 2 main functions:
     * - sendEvent(eventName: string, properties: Object) - Used for sending a custom analytics event
     * - setUserProperty(propName: string, propValue: string | number | boolean) - Used to set details that apply to the same user over every event
     *
     * NB: Betting events and user_id are already handled by this API
     */
    get analytics() {
      return AnalyticsManager.instance;
    }
    /**
     * The current user's ID string, as used on our servers
     */
    get userId() {
      return this.accountsArray[0].userId;
    }
    /**
     * The current game's version string, as read from the deploy-config.json file
     */
    get gameVersionString() {
      return Config.instance.gameVersion;
    }
    /**
     * Returns true f b=1 has been passed in as a URL parameter
     *
     * This tells the paytable service to return a big win (only on direct or local environments)
     */
    get forceBigWin() {
      return Config.instance.forceBigWin;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //          Balance Manager
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Provides access to the underlying BalanceManager for testing purposes
     *
     * This is used by the RPN Games SDK to keep track of player accounts/credits locally
     * and is updated with each bet made and response received.
     *
     * Messing around with this may potentially break testing functionality
     */
    get balanceManager() {
      return BalanceManager.instance;
    }
    /**
     * Returns the last known value of the player's accounts, in a Map format
     */
    get accountsMap() {
      return this.balanceManager.accounts;
    }
    /**
     * Returns the last known value of the player's accounts, in an array format
     */
    get accountsArray() {
      return this.balanceManager.accountsArray;
    }
    /**
     * Returns the last known value of the player's balance in a given currency
     */
    getBalanceForCurrency(currency) {
      var _a, _b;
      return (_b = (_a = this.balanceManager.accounts.get(currency)) == null ? void 0 : _a.balance) != null ? _b : 0;
    }
    /**
     * Returns the last known values of any credits the player has
     */
    get localCredits() {
      return this.balanceManager.credits;
    }
    /**
     * Returns the last known values of any credits that the player has for a specific paytable and currency
     */
    getLocalCreditsForPaytable(currency, paytable) {
      return this.balanceManager.getCreditsForTable(currency, paytable);
    }
    /**
     * Requests the server to return any credits that the player has for a specific paytable and currency
     */
    getCreditsForPaytable(currency, paytable) {
      return __async(this, null, function* () {
        console.debug(`[RPN Games SDK] getCreditsForPaytable: Requesting player credits for table ${paytable} in currency: ${currency}`);
        const credits = yield this._platformApi.getCreditsForPaytable(currency, paytable);
        this.balanceManager.resetAllCreditsForTable(currency, paytable, credits);
        return credits;
      });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //          Platform APIs
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Get a list of valid currencies to use for the current platform
     *
     * e.g. on Sweeps platforms, the currencies SWEEP_TICKETS and POINTS are available
     * e.g. on Labs or MoBingo platforms, only POINTS are available
     *
     * @returns The array of currencies that can be used on the current platform
     */
    get validCurrencies() {
      return this._platformApi.validCurrencies;
    }
    /**
     * Let the app know that the gameplay has finished and the player is ready to play again
     * Used to help with metrics around session times and the best time to show any app dialogues
     *
     * @returns the player's latest account balances in case anything changed during the game
     */
    notifyGameEnded(betResult) {
      return __async(this, null, function* () {
        console.debug("[RPN Games SDK] notifyGameEnded: Message app communicating that the game has ended");
        return this._platformApi.notifyGameEnded(betResult);
      });
    }
    /**
     * Let the app know that the player wants to close this game and return to the lobby
     * Does nothing in a non-app deployment
     */
    closeGame() {
      console.debug("[RPN Games SDK] closeGame: Message app requesting this iFrame be closed");
      return this._platformApi.closeGame();
    }
    /**
     * Request a bet to be made with the params given
     *
     * Currently the only type of bet supported is a paytable bet
     * paytableName is therefore required in the betOptions
     *
     * @param currency The currency that the bet should be made in
     * @param betAmount The amount of the given currency to bet with, in whole cents
     * NB: This *must* be one of: [25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000]
     * Check {@link isValidBetAmountForCurrency} if you are unsure about a given betAmount/currency combination
     *
     * @param betOptions Any extra data that the bet requires including a paytableName
     *
     * @returns Either an error {@link ApiErrorResponse} or success {@link BetSuccessResponse} with updated accounts
     */
    makeBet(_0, _1) {
      return __async(this, arguments, function* (currency, betAmount, betOptions = {}) {
        console.debug(`[RPN Games SDK] makeBet: Requesting a bet of ${betAmount}, in currency: ${currency}, with options: ${JSON.stringify(betOptions)}`);
        const validBetAmount = this.apiResponseAsBool(this.isValidBetAmountForCurrency(currency, betAmount));
        if (!validBetAmount) {
          const error = `Invalid betAmount: ${betAmount}, for currency: ${currency}`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return { error, code: "INVALID_BET_AMOUNT" /* INVALID_BET_AMOUNT */ };
        }
        if (!betOptions.paytableName) {
          const error = `Function makeBet requires a paytableName as part of the betOptions`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return { error, code: "INVALID_BET_OPTIONS" /* INVALID_BET_OPTIONS */ };
        }
        const hasEnoughBal = BalanceManager.instance.checkBalanceForBet(currency, betAmount);
        if (!hasEnoughBal) {
          const error = `Failed to make bet of: ${betAmount}, in currency: ${currency}, as user does not have enough balance`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return { error, code: "NOT_ENOUGH_BALANCE" /* NOT_ENOUGH_BALANCE */ };
        }
        BalanceManager.instance.debitAccount(currency, betAmount);
        AnalyticsManager.instance.sendEvent("spend_virtual_currency", {
          value: betAmount,
          virtual_currency_name: currency,
          item_name: betOptions.paytableName
        });
        const response = yield this._platformApi.makeBet(currency, betAmount, betOptions);
        if (!("error" in response)) {
          this.onBetResponse(response, currency, betAmount, betOptions);
        }
        return response;
      });
    }
    /**
     * Request a credit bet to be made with the params given
     *
     * A credit is a specific token attached to a player's account that can be used on a given paytable
     * A player must have already received/won the relevant credit in order for them to bet with them
     *
     * Currently the only type of bet supported is a paytable bet, paytableName is therefore required in the betOptions
     *
     * @param currency The currency that the bet should be made in
     * @param betAmount The amount of the given currency to bet with, in whole cents
     * NB: This *must* be one of: [25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000]
     * Check {@link isValidBetAmountForCurrency} if you are unsure about a given betAmount/currency combination
     *
     * @param betOptions Any extra data that the bet requires including a paytableName
     *
     * @returns Either an error {@link ApiErrorResponse} or success {@link BetSuccessResponse} with updated accounts
     */
    makeCreditBet(_0, _1) {
      return __async(this, arguments, function* (currency, betAmount, betOptions = {}) {
        console.debug(`[RPN Games SDK] makeCreditBet: Requesting a credit bet of ${betAmount}, in currency: ${currency}, with options: ${JSON.stringify(betOptions)}`);
        const validBetAmount = this.apiResponseAsBool(this.isValidBetAmountForCurrency(currency, betAmount));
        if (!validBetAmount) {
          const error = `Invalid betAmount: ${betAmount}, for currency: ${currency}`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return { error, code: "INVALID_BET_AMOUNT" /* INVALID_BET_AMOUNT */ };
        }
        if (!betOptions.paytableName) {
          const error = `Function makeCreditBet requires a paytableName as part of the betOptions`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return {
            error,
            code: "INVALID_BET_OPTIONS" /* INVALID_BET_OPTIONS */
          };
        }
        const hasCreditForBet = BalanceManager.instance.checkCreditForBet(currency, betAmount, betOptions.paytableName);
        let creditUsed;
        if (!hasCreditForBet) {
          const warning = `Locally, player does not have a credit to make credit bet of: ${betAmount}, in currency: ${currency}`;
          console.warn(`[RPN Games SDK] Warning: ${warning}`);
        } else {
          creditUsed = BalanceManager.instance.removeCredit(currency, betAmount, betOptions.paytableName);
          betOptions.creditsUsed = [creditUsed];
        }
        AnalyticsManager.instance.sendEvent("spend_virtual_currency", {
          value: betAmount,
          virtual_currency_name: betOptions.paytableName + currency,
          item_name: betOptions.paytableName
        });
        const response = yield this._platformApi.makeCreditBet(currency, betAmount, betOptions);
        if (!("error" in response)) {
          this.onBetResponse(response, currency, betAmount, betOptions);
        }
        return response;
      });
    }
    /**
     * Request a bet made up of multiple credits to be made with the params given
     *
     * On game start, you should call rpnGamesSdk.getCreditsForPaytable() for any relevant currencies and paytable names
     * This ensures the local credit balance is correct and in sync with the database
     *
     * A credit is a specific token attached to a player's account that can be used on a given paytable
     * A player must have already received/won the relevant credits in order for them to bet with them
     *
     * Each entry in the betAmounts array will be matched to a credit that the player has and combined into one total amount to bet with
     * NB: The total amount of the bets must be equal to a valid sweeps bet amount (see {@link validSweepBetAmounts})
     * Otherwise, ITEMS WILL BE REMOVED from the betAmounts given until the total is valid
     *
     * Currently the only type of bet supported is a paytable bet, paytableName is therefore required in the betOptions
     *
     * @param currency The currency that the bet should be made in
     * @param betAmounts An array of credit bet amounts of the given currency to bet with, each amount specifying a different credit. Total must be a {@link validSweepBetAmounts}
     * @param betOptions Any extra data that the bet requires including a paytableName
     *
     * @returns Either an error {@link ApiErrorResponse} or success {@link BetSuccessResponse} with updated accounts
     */
    makeMultiCreditBet(_0, _1) {
      return __async(this, arguments, function* (currency, betAmounts, betOptions = {}) {
        console.debug(`[RPN Games SDK] makeMultiCreditBet: Requesting a multi credit bet using credits of [${betAmounts.join(", ")}], in currency: ${currency}, with options: ${JSON.stringify(betOptions)}`);
        if (!betOptions.paytableName) {
          const error = `Function makeMultiCreditBet requires a paytableName as part of the betOptions`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return {
            error,
            code: "INVALID_BET_OPTIONS" /* INVALID_BET_OPTIONS */
          };
        }
        let totalBetAmount = betAmounts.reduce((total, current) => total + current, 0);
        const validBetAmount = this.apiResponseAsBool(this.isValidBetAmountForCurrency(currency, totalBetAmount));
        if (!validBetAmount) {
          const error = `Invalid total of betAmounts: ${totalBetAmount}, will attempt to remove items from betAmounts until valid total found`;
          console.warn(`[RPN Games SDK] Warning: ${error}`);
          betAmounts = betAmounts.sort((a, b) => b - a);
          while (betAmounts.length > 1 && !this._deploymentUtil.validSweepBetAmounts.includes(totalBetAmount)) {
            const smallest = betAmounts.pop();
            totalBetAmount -= smallest;
          }
        }
        const creditsToUse = [];
        for (let i = 0; i < betAmounts.length; i++) {
          const hasCreditForBet = BalanceManager.instance.checkCreditForBet(currency, betAmounts[i], betOptions.paytableName);
          if (!hasCreditForBet) {
            const error = `Locally, player does not have a credit to make credit bet of: ${betAmounts[i]}, in currency: ${currency}`;
            console.warn(`[RPN Games SDK] Error: ${error}`);
            console.warn(`[RPN Games SDK] Call getCreditsForPaytable(${currency}, ${betOptions.paytableName}) to ensure the local credit balance is correct`);
            return {
              error,
              code: "NOT_ENOUGH_CREDITS" /* NOT_ENOUGH_CREDITS */
            };
          } else {
            const credit = BalanceManager.instance.removeCredit(currency, betAmounts[i], betOptions.paytableName);
            creditsToUse.push(credit);
          }
        }
        AnalyticsManager.instance.sendEvent("spend_virtual_currency", {
          value: totalBetAmount,
          virtual_currency_name: betOptions.paytableName + currency,
          item_name: betOptions.paytableName
        });
        const response = yield this._platformApi.makeMultiCreditBet(currency, creditsToUse, betOptions);
        if (!("error" in response)) {
          this.onBetResponse(response, currency, totalBetAmount, betOptions);
        }
        return response;
      });
    }
    /**
     * Loads game specific information and a list of pending games from the server.
     *
     * Game specific information may include paytable information and other settings that are shared by the client side game and the server.
     * Pending games refer to the game sessions that a player has started but not yet finished, for example by closing the browser before the game ends.
     *
     * @param gameCode The game code that uniquely identifies a game
     *
     * @returns Either an error {@link ApiErrorResponse} or success {@link StatefulGameGetInfoSuccessResponse} with game specific information and a list of pending games
     */
    statefulGameGetInfo(gameCode) {
      return __async(this, null, function* () {
        return this._platformApi.statefulGameGetInfo(gameCode);
      });
    }
    /**
     * Request a bet and start a stateful game.
     *
     * @param gameCode The game code that uniquely identifies a game
     * @param currency The currency that the bet should be made in
     * @param betAmount The amount of the given currency to bet with, in whole cents
     * NB: This *must* be one of: [25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000]
     * Check {@link isValidBetAmountForCurrency} if you are unsure about a given betAmount/currency combination
     *
     * @param config Any game specific information you want to pass to the server. Will be serialized to a string via JSON.stringify() when passing to the server
     *
     * @returns Either an error {@link ApiErrorResponse} or success {@link StatefulGameStartSuccessResponse} with updated accounts
     */
    statefulGameStart(gameCode, currency, betAmount, config) {
      return __async(this, null, function* () {
        console.debug(`[RPN Games SDK] statefulGameStart: Starting a stateful game of ${gameCode} with a bet of ${betAmount}, in currency: ${currency}, with config: ${JSON.stringify(config)}`);
        const validBetAmount = this.apiResponseAsBool(this.isValidBetAmountForCurrency(currency, betAmount));
        if (!validBetAmount) {
          const error = `Invalid betAmount: ${betAmount}, for currency: ${currency}`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return { error, code: "INVALID_BET_AMOUNT" /* INVALID_BET_AMOUNT */ };
        }
        const hasEnoughBal = BalanceManager.instance.checkBalanceForBet(currency, betAmount);
        if (!hasEnoughBal) {
          const error = `Failed to make bet of: ${betAmount}, in currency: ${currency}, as user does not have enough balance`;
          console.warn(`[RPN Games SDK] Error: ${error}`);
          return { error, code: "NOT_ENOUGH_BALANCE" /* NOT_ENOUGH_BALANCE */ };
        }
        BalanceManager.instance.debitAccount(currency, betAmount);
        AnalyticsManager.instance.sendEvent("spend_virtual_currency", {
          value: betAmount,
          virtual_currency_name: currency,
          item_name: "STATEFUL_GAME"
        });
        const response = yield this._platformApi.statefulGameStart(gameCode, currency, betAmount, config);
        if ("error" in response) {
          BalanceManager.instance.creditAccount(currency, betAmount);
        }
        return response;
      });
    }
    /**
     * Make an action to a stateful game.
     *
     * @param gameCode The game code that uniquely identifies a game
     * @param gameId The gameId obtained by the call to {@link statefulGameStart}
     * @param action Any game specific action you want to pass to the server. Will be serialized to a string via JSON.stringify() when passing to the server
     *
     * @returns Either an error {@link ApiErrorResponse} or success {@link StatefulGameActionSuccessResponse} with updated accounts
     */
    statefulGameAction(gameCode, gameId, action) {
      return __async(this, null, function* () {
        const response = yield this._platformApi.statefulGameAction(gameCode, gameId, action);
        if ("error" in response)
          return response;
        if (response.accounts)
          BalanceManager.instance.updateAccounts(response.accounts);
        return response;
      });
    }
    /**
     * Send the player's skill check result to the server
     *
     * If the skill check has been passed (SkillResult.SUCCESS) the player's accounts will be credited with any win
     * Otherwise no win amount will be added
     *
     * NB: this flow is only used on the Mobingo platform, calling it on any other platform will log an error
     */
    skillCheckRequest(betResult, outcome) {
      return __async(this, null, function* () {
        console.debug(`[RPN Games SDK] skillCheckRequest: Send the player's SkillResult to the server`);
        yield this._platformApi.skillCheckRequest(betResult, outcome);
        return {
          accounts: BalanceManager.instance.accountsArray
        };
      });
    }
    /**
     * Request the player's accounts, fresh from the server
     *
     * this.accountsMap, this.accountsArray, and this.getBalanceForCurrency() return local values based on the most recent server interactions
     * If no bets have been made recently, these balances could potentially be out of date
     *
     * NB: when the accounts are returned, this will fire the onBalancesUpdated callback
     */
    requestUpdatedBalances() {
      return __async(this, null, function* () {
        console.debug("[RPN Games SDK] requestUpdatedBalances: Requesting up-to-date balances from the server");
        yield this._platformApi.requestUpdatedBalances();
        return {
          accounts: BalanceManager.instance.accountsArray
        };
      });
    }
    /**
     * Request a value previously set into localStorage for the given key
     *
     * If deployed, this will be the localStorage of the host app and may already have values set by other games
     * For example, music_muted and sfx_muted are settings commonly shared between games
     *
     * Will return a string value (numbers/objects will need to be parsed appropriately) or null if no value has been set
     */
    localStorageGet(key) {
      return __async(this, null, function* () {
        console.debug(`[RPN Games SDK] localStorageGet: getting localStorage value for key: ${key}`);
        return this._platformApi.localStorageGet(key);
      });
    }
    /**
     * Set a string value into localStorage using a given key
     *
     * If deployed, this will be the localStorage of the host app and may already have values set by other games
     * For example, music_muted and sfx_muted are settings commonly shared between games
     *
     * Numerical and object values must be stringified
     *
     * Does not return a value
     */
    localStorageSet(key, value) {
      console.debug(`[RPN Games SDK] localStorageSet: saving value: '${value}' for key: '${key}'`);
      return this._platformApi.localStorageSet(key, value);
    }
    /**
     * Given a currency, and a list of paytables, returns the RTPs for said paytables from the server
     *
     * @param currency The currency to check the RTP of
     * @param paytableNames An array of paytable names
     *
     * @returns Either an error {@link ApiErrorResponse} or an ApiResponse with an array of {@link PaytableRtpResponse} objects
     */
    getRtpForPaytables(currency, paytableNames) {
      return __async(this, null, function* () {
        var _a;
        console.debug(`[RPN Games SDK] getRtpForPaytables: [${paytableNames.join(", ")}] in currency: ${currency}`);
        return (_a = this.checkValidCurrency(currency)) != null ? _a : this._platformApi.getRtpForPaytables(currency, paytableNames);
      });
    }
    /**
     * Set a callback for if/when the app requests your game to pause the gameplay
     *
     * A reason may be (but is not guaranteed to be) provided
     * e.g. a jackpot being won, or an important message being displayed
     *
     * Not pausing gameplay at this time could cause players to miss game results/events
     * and not be able to respond to requests for input
     *
     * See {@link onGameResumed} for the corresponding callback
     */
    onGamePaused(callback) {
      console.debug(`[RPN Games SDK] onGamePaused: adding callback for game paused events`);
      this._platformApi.onGamePaused(callback);
      if (this._gameIsPaused) {
        callback();
      }
    }
    /**
     * Set a callback for when the app no longer requires the gameplay to be paused
     *
     * Follows an {@link onGamePaused} event
     */
    onGameResumed(callback) {
      console.debug(`[RPN Games SDK] onGameResumed: adding callback for game resumed events`);
      this._platformApi.onGameResumed(callback);
    }
    /**
     * Set a callback for when any current jackpot amounts have been updated (very frequent)
     * Games can choose to display these up-to-date values in game to encourage gameplay
     *
     * Some jackpots are game specific, i.e. only bets from specific games will contribute towards them
     * If your game contributes to a specific jackpot it would be strongly recommended to show the value of it
     */
    onJackpotsUpdated(callback) {
      console.debug(`[RPN Games SDK] onJackpotsUpdated: adding callback for jackpot update events`);
      this._platformApi.onJackpotsUpdated(callback);
      if (this._currentJackpots.length) {
        callback(this._currentJackpots);
      }
    }
    /**
     * Set a callback for when the player's account balances have been updated from the server
     * This happens after every bet / credit bet / game end / app balance notification
     *
     * It can also be triggered manually by calling {@link requestUpdatedBalances}
     *
     * NB: Although internally you will want your game to have the most up-to-date balances available
     * Remember not to update the UI display for the player until after the game or you will give away the ending
     */
    onBalancesUpdated(callback) {
      console.debug(`[RPN Games SDK] onBalancesUpdated: adding callback for balance update events`);
      this._platformApi.onBalancesUpdated(callback);
      callback(BalanceManager.instance.accountsArray);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //          Deployment Utils
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Array of valid amounts for bets made using SWEEP_TICKETS
     */
    get validSweepBetAmounts() {
      return this._deploymentUtil.validSweepBetAmounts;
    }
    /**
     * Check if the given bet is a valid amount for the given currency
     *
     * @param currency The currency that the bet should be made in
     * @param betAmount The amount of the given currency to bet with, in whole cents
     * @returns true if the betAmmount is valid for the given currency, else false
     */
    isValidBetAmountForCurrency(currency, betAmount) {
      var _a;
      return (_a = this.checkValidCurrency(currency)) != null ? _a : this._deploymentUtil.isValidBetAmountForCurrency(currency, betAmount);
    }
    /**
     * Get the display name to use for the given currency depending on the current hosting environment
     *
     * e.g. SWEEP_TICKETS are known as 'Emeralds' on Ruby Sweeps, and 'Gold Slips' on Goldslips Social Casino
     * e.g. POINTS are known as 'Gold Coins' on Ruby Sweeps, and 'Fun Coins' on Goldslips Social Casino
     *
     * @param currency The currency to get the display name for
     * @returns Response containing the string that should be used to refer to the given currency in the current deployment
     */
    getDisplayNameForCurrency(currency) {
      var _a;
      return (_a = this.checkValidCurrency(currency)) != null ? _a : this._deploymentUtil.getDisplayNameForCurrency(currency);
    }
    /**
     * Get the URL for the icon to use for the given currency depending on the current hosting environment
     * Default size is 128x128, can optionally use a small version which is 32x32
     *
     * @param currency The currency to get the icon URL for
     * @param useSmallVersion true if you want to use a very small (32x32) version, default is false
     * @returns The URL for the correct icon image to indicate the given currency
     */
    getIconUrlForCurrency(currency, useSmallVersion = false) {
      var _a;
      return (_a = this.checkValidCurrency(currency)) != null ? _a : this._deploymentUtil.getIconUrlForCurrency(currency, useSmallVersion);
    }
    /**
     * Get the icon file name for the local icon asset to use for the given currency depending on the current hosting environment
     * Default size is 128x128, can optionally use a small version which is 32x32
     *
     * @param currency The currency to get the icon file name for
     * @param useSmallVersion true if you want to use a very small (32x32) version, default is false
     * @returns The file name for the correct icon image to indicate the given currency
     */
    getIconFileNameForCurrency(currency, useSmallVersion = false) {
      var _a;
      return (_a = this.checkValidCurrency(currency)) != null ? _a : this._deploymentUtil.getIconFileNameForCurrency(currency, useSmallVersion);
    }
    /**
     * Formats a given balance amount based on the currency
     *
     * POINTS are formatted with 0 decimal places and given a comma every 3 numbers
     * e.g. 9001 => 9,001 and 1000000 => 1,000,000
     *
     * SWEEP_TICKETS are formatted with 2 decimal places and given a comma every 3 whole numbers
     * e.g. 9001 => 90.01 and 1000000 => 10,000.00
     *
     * @param currency The currency to format the given balance for
     * @param balance The raw number value to be formatted
     * @returns A string representation of the balance, formatted correctly for the given currency
     */
    getFormattedBalanceForCurrency(currency, balance) {
      var _a;
      return (_a = this.checkValidCurrency(currency)) != null ? _a : this._deploymentUtil.getFormattedBalanceForCurrency(currency, balance);
    }
  };

  // src/games-sdk/index.ts
  window.rpnGames = new Api();
  window.rpnGames.init();
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/