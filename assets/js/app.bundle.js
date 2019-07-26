(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scene_controller_1 = require("./controllers/scene.controller");
var app = new scene_controller_1.SceneController();
app.Init();

},{"./controllers/scene.controller":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
