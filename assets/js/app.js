"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var scene_controller_1 = require("./controllers/scene.controller");
var animejs_1 = __importDefault(require("animejs"));
var app = new scene_controller_1.SceneController();
app.Init();
animejs_1.default({
    targets: '.siguiente',
    translateY: -250,
    delay: 2000,
    easing: 'easeInOutExpo',
    rotate: '1turn'
});
