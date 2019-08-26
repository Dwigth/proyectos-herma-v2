"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var animejs_1 = __importDefault(require("animejs"));
var SceneController = /** @class */ (function () {
    function SceneController() {
        this.appContainer = document.querySelector('#app');
        this.clickCount = 0;
    }
    SceneController.prototype.Init = function () {
        this.setInitialScene();
        animejs_1.default({
            targets: '.siguiente',
            translateY: -250,
            delay: 2000,
            easing: 'easeInOutExpo',
            rotate: '1turn'
        });
    };
    SceneController.prototype.setInitialScene = function () {
        var _this = this;
        //Crear video
        var videoElem = document.createElement('video');
        videoElem.src = './assets/videos/Proyectos_herma_promo.mp4';
        videoElem.classList.add('promo-video');
        videoElem.muted = true;
        videoElem.play();
        videoElem.loop = true;
        //Nombre de compañia
        var companiaElem = document.createElement('span');
        companiaElem.classList.add('company-name');
        companiaElem.textContent = 'PROYECTOS HERMA';
        this.appContainer.append(videoElem, companiaElem);
        this.appContainer.style.backgroundClip = 'url("./videos/Promocional_Proyectos_herma.mp4")';
        var elem = document.getElementById('next');
        elem.addEventListener('click', function () {
            console.log('hello');
            animejs_1.default({
                targets: '.siguiente',
                translateY: 250,
                easing: 'easeInOutExpo',
                rotate: '1turn'
            });
        });
        elem.addEventListener('click', function () {
            //llevarlo a la siguiente escena
            _this.appContainer.classList.add('slide-left');
            setTimeout(function () {
                location.assign('https://proyectosherma.com.mx/contacto.html');
            }, 2000);
        });
    };
    return SceneController;
}());
exports.SceneController = SceneController;
