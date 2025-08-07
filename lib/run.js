"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = run;
function run(main) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof Buffer === 'undefined') {
            throw new Error('Programs require Buffer to run');
        }
        if (typeof Promise === 'undefined') {
            throw new Error('Programs require Promise to run');
        }
        try {
            const input = typeof process !== 'undefined' ? yield read(process.stdin) : '';
            let result = yield main.apply(null, parse(input || '[]'));
            console.log(result);
        }
        catch (e) {
            console.error(`Error running program`, e);
        }
    });
}
function parse(text) {
    try {
        return JSON.parse(text);
    }
    catch (e) {
        throw new Error(`Invalid JSON: ${text}`);
    }
}
function read(stream) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, stream_1, stream_1_1;
        var _b, e_1, _c, _d;
        const chunks = [];
        if (stream.isTTY) {
            return '';
        }
        try {
            for (_a = true, stream_1 = __asyncValues(stream); stream_1_1 = yield stream_1.next(), _b = stream_1_1.done, !_b; _a = true) {
                _d = stream_1_1.value;
                _a = false;
                const chunk = _d;
                chunks.push(chunk);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = stream_1.return)) yield _c.call(stream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Buffer.concat(chunks).toString('utf8');
    });
}
//# sourceMappingURL=run.js.map