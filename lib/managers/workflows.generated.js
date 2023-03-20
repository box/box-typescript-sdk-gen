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
exports.WorkflowsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class WorkflowsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getWorkflows(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/workflows"), { method: "GET", params: { ["folder_id"]: folderId, ["trigger_type"]: options.triggerType, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeWorkflows)(deserializeJSON(response.text));
        });
    }
    postWorkflowsIdStart(workflowId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return response.content;
        });
    }
}
exports.WorkflowsManager = WorkflowsManager;
//# sourceMappingURL=workflows.generated.js.map