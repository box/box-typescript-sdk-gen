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
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.userId = void 0;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const shieldListContentCountryV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListContentCountryV2025R0.generated.js");
const shieldListContentDomainV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListContentDomainV2025R0.generated.js");
const shieldListContentEmailV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListContentEmailV2025R0.generated.js");
const shieldListContentIpV2025R0_generated_js_1 = require("../schemas/v2025R0/shieldListContentIpV2025R0.generated.js");
exports.userId = (0, utils_js_2.getEnvVar)('USER_ID');
exports.client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)(exports.userId);
test('testCreateGetUpdateDeleteShieldList', function testCreateGetUpdateDeleteShieldList() {
    return __awaiter(this, void 0, void 0, function* () {
        const shieldListCountryName = ''.concat((0, utils_js_1.getUuid)(), 'shieldListCountry');
        const shieldListCountry = yield exports.client.shieldLists.createShieldListV2025R0({
            name: shieldListCountryName,
            description: 'A list of things that are shielded',
            content: new shieldListContentCountryV2025R0_generated_js_1.ShieldListContentCountryV2025R0({
                type: 'country',
                countryCodes: ['US', 'PL'],
            }),
        });
        const shieldListContentDomainName = ''.concat((0, utils_js_1.getUuid)(), 'shieldListContentDomain');
        const shieldListContentDomain = yield exports.client.shieldLists.createShieldListV2025R0({
            name: shieldListContentDomainName,
            description: 'A list of things that are shielded',
            content: new shieldListContentDomainV2025R0_generated_js_1.ShieldListContentDomainV2025R0({
                type: 'domain',
                domains: ['box.com', 'example.com'],
            }),
        });
        const shieldListContentEmailName = ''.concat((0, utils_js_1.getUuid)(), 'shieldListContentEmail');
        const shieldListContentEmail = yield exports.client.shieldLists.createShieldListV2025R0({
            name: shieldListContentEmailName,
            description: 'A list of things that are shielded',
            content: new shieldListContentEmailV2025R0_generated_js_1.ShieldListContentEmailV2025R0({
                type: 'email',
                emailAddresses: ['test@box.com', 'test@example.com'],
            }),
        });
        const shieldListContentIpName = ''.concat((0, utils_js_1.getUuid)(), 'shieldListContentIp');
        const shieldListContentIp = yield exports.client.shieldLists.createShieldListV2025R0({
            name: shieldListContentIpName,
            description: 'A list of things that are shielded',
            content: new shieldListContentIpV2025R0_generated_js_1.ShieldListContentIpV2025R0({
                type: 'ip',
                ipAddresses: ['127.0.0.1', '80.12.12.12/24'],
            }),
        });
        const shieldLists = yield exports.client.shieldLists.getShieldListsV2025R0();
        if (!(shieldLists.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const getShieldListCountry = yield exports.client.shieldLists.getShieldListByIdV2025R0(shieldListCountry.id);
        if (!(getShieldListCountry.name == shieldListCountryName)) {
            throw new Error('Assertion failed');
        }
        if (!(getShieldListCountry.description == 'A list of things that are shielded')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.shieldLists.updateShieldListByIdV2025R0(shieldListCountry.id, {
            name: shieldListCountryName,
            description: 'Updated description',
            content: new shieldListContentCountryV2025R0_generated_js_1.ShieldListContentCountryV2025R0({
                type: 'country',
                countryCodes: ['US'],
            }),
        });
        const getShieldListCountryUpdated = yield exports.client.shieldLists.getShieldListByIdV2025R0(shieldListCountry.id);
        if (!(getShieldListCountryUpdated.description == 'Updated description')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.shieldLists.deleteShieldListByIdV2025R0(shieldListCountry.id);
        yield exports.client.shieldLists.deleteShieldListByIdV2025R0(shieldListContentDomain.id);
        yield exports.client.shieldLists.deleteShieldListByIdV2025R0(shieldListContentEmail.id);
        yield exports.client.shieldLists.deleteShieldListByIdV2025R0(shieldListContentIp.id);
    });
});
//# sourceMappingURL=shieldLists.generated.test.js.map