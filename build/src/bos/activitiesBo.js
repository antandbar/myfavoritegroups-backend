'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitiessBo = void 0;
const Activity_1 = __importDefault(require("../models/Activity"));
class ActivitiessBo {
    getActivities() {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield Activity_1.default.findAll();
            return topics;
        });
    }
    postActivities(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = yield Activity_1.default.create(data);
            return activity;
        });
    }
}
exports.activitiessBo = new ActivitiessBo();
