"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneController = /** @class */ (function () {
    function SceneController() {
        this.appContainer = document.querySelector('#app');
        this.clickCount = 0;
    }
    SceneController.prototype.Init = function () {
        this.setInitialScene();
    };
    SceneController.prototype.setInitialScene = function () {
        //Crear video
        var videoElem = document.createElement('video');
        videoElem.src = './assets/videos/Promocional_Proyectos_herma.mp4';
        videoElem.classList.add('promo-video');
        videoElem.play();
        videoElem.loop = true;
        //Nombre de compañia
        var companiaElem = document.createElement('span');
        companiaElem.classList.add('company-name');
        companiaElem.textContent = 'PROYECTOS HERMA';
        this.appContainer.append(videoElem, companiaElem);
        this.appContainer.style.backgroundClip = 'url("./videos/Promocional_Proyectos_herma.mp4")';
        videoElem.addEventListener('click', function () {
            //llevarlo a la siguiente escena
            // this.appContainer.classList.add('slide-left');
        });
    };
    return SceneController;
}());
exports.SceneController = SceneController;
