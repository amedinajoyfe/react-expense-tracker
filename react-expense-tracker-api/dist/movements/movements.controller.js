"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementsController = void 0;
const common_1 = require("@nestjs/common");
const movements_service_1 = require("./movements.service");
const create_movement_dto_1 = require("./create.movement.dto");
let MovementsController = class MovementsController {
    constructor(movementsService) {
        this.movementsService = movementsService;
    }
    findAll() {
        return this.movementsService.getAllMovements();
    }
    getMovementsByUserId(userid) {
        return this.movementsService.getMovementsByUserId(userid);
    }
    getMovementById(id) {
        return this.movementsService.getMovementsByUserId(id);
    }
    addNewMovement(newMovement) {
        return this.movementsService.addNewMovement(newMovement);
    }
};
exports.MovementsController = MovementsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":userid"),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "getMovementsByUserId", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "getMovementById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movement_dto_1.CreateMovementDto]),
    __metadata("design:returntype", void 0)
], MovementsController.prototype, "addNewMovement", null);
exports.MovementsController = MovementsController = __decorate([
    (0, common_1.Controller)('movements'),
    __metadata("design:paramtypes", [movements_service_1.MovementsService])
], MovementsController);
//# sourceMappingURL=movements.controller.js.map