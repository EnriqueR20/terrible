"use strict";
/* Acceso para las capertas*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restauranteRouter = exports.usuarioRouter = void 0;
var usuario_1 = require("./usuario");
Object.defineProperty(exports, "usuarioRouter", { enumerable: true, get: function () { return __importDefault(usuario_1).default; } });
var restaurante_1 = require("./restaurante");
Object.defineProperty(exports, "restauranteRouter", { enumerable: true, get: function () { return __importDefault(restaurante_1).default; } });
/* una ves terminado el CRUD poner igual a lo de arriba */
