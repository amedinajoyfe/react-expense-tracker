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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementsService = void 0;
const common_1 = require("@nestjs/common");
const movements_repository_1 = require("./movements.repository");
const movements_entity_1 = require("./movements.entity");
let MovementsService = class MovementsService {
    constructor(movementsRepository) {
        this.movementsRepository = movementsRepository;
    }
    getMovementsByUserId(userid) {
        return this.movementsRepository.getMovementsByUserId(userid);
    }
    getAllMovements() {
        return this.movementsRepository.getAllMovements();
    }
    getMovementById(id) {
        return this.movementsRepository.getMovementById(id);
    }
    async addNewMovement(newMovement) {
        let movementToAdd = new movements_entity_1.Movement(newMovement.userid, newMovement.expense, newMovement.category, newMovement.amount);
        return this.movementsRepository.addNewMovement(movementToAdd);
    }
};
exports.MovementsService = MovementsService;
exports.MovementsService = MovementsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movements_repository_1.MovementsRepository])
], MovementsService);
//# sourceMappingURL=movements.service.js.map