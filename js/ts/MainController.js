"use strict";
//import * as createjs from 'soundjs';
var MainController = /** @class */ (function () {
    function MainController(dispachtElement, renderer, isMobile, isLoged, uName) {
        var _this = this;
        this._cMain = new PIXI.Container();
        this._sChooseContainer = new PIXI.Container();
        this._parterContainer = new PIXI.Container();
        this._showViewContainer = new PIXI.Container();
        this._gameViewContainer = new PIXI.Container();
        this._endGameViewContainer = new PIXI.Container();
        this._rLoader = new ResourceLoader();
        this._queu = [];
        this._purchased = [];
        this._currentState = "SOUND_CHOOSE";
        this._nextState = "";
        this._viewCounter = 0;
        this._numView = 1;
        this._gameLevel = 1;
        this._loadImgCounter = 0;
        this._allImageLoaded = 0;
        this._progress = 0;
        this._time = 100;
        this._money = 0;
        this._allowTransition = true;
        this._sChooseAllow = true;
        this._parterAllow = false;
        this._shopViewAllow = false;
        this._gameViewAllow = false;
        this._endGameViewAllow = false;
        this._playGame = false;
        this._subgameEnd = false; // when the player went to the next level
        this._isLoged = true;
        this._allSounds = {
            0: { name: "btnClick", path: "sounds/buttonClick.mp3" },
            1: { name: "btnBuyClick", path: "sounds/buyButtons.mp3" },
            3: { name: "timeIsUpSound", path: "sounds/time_is_up.mp3" },
            4: { name: "getStuff", path: "sounds/get_stuff.mp3" },
            6: { name: "shopLoop", path: "sounds/shop_loop.mp3" },
            7: { name: "gameLoop", path: "sounds/game_loop.mp3" },
            9: { name: "ballMove", path: "sounds/ball_move.mp3" }
        };
        this._uName = "undefined";
        MainController.IS_MOBILE = isMobile;
        this._isLoged = isLoged;
        this._uName = uName;
        this._dispachtElement = dispachtElement;
        this._dispachtElement.addEventListener('SoundChooseLoadCompleate', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('gameWithSound', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('gameWithoutSound', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('allViewImagesloaded', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtn1Timeclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtn10Timeclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtn1Moneyclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtn10Moneyclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtnPlayclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtnShopclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtnGreanStateclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('buttonbtnShopBackclicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('scarabClicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('woodTorchClicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('shoesClicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('eyeOfRaClicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('papyrusClicked', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('hitCoin', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('hitMoneyCase', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('timeOver', function (_e) { _this.dispatchCommand(_e); });
        this._dispachtElement.addEventListener('hitExit', function (_e) { _this.dispatchCommand(_e); });
        this._IOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        this._renderer = renderer;
        window.addEventListener('orientationchange', function () { _this.orientationDivace(true); });
        //---------------------sound choose--------------------
        this._sChoose = new SoundChoose(this._sChooseContainer, this._dispachtElement);
        this.loadImages(this._sChoose.getResouces(), this.soundChooseLoadCompleate);
        //-----------------------------------------------------
        //-----------------fsButton---------------------
        this._fsBtn = PIXI.Sprite.fromImage('pics/full_screen_button.gif');
        this._fsBtn.x = 950;
        this._fsBtn.y = 5;
        this._fsBtn.scale.x = 0.7;
        this._fsBtn.scale.y = 0.7;
        this._fsBtn.buttonMode = true;
        this._fsBtn.interactive = true;
        this._fsBtn.on('pointerup', function () {
            _this._sChoose.simulateFullScreen();
        });
        //----------------------------------------------
        this._recScreen = document.getElementById("recordContainer");
        if (this._recScreen === null)
            throw new Error("!!!*** recScreen is not initialized ***!!!");
        this._cMain.addChild(this._sChooseContainer);
        this._cMain.addChild(this._parterContainer);
        this._cMain.addChild(this._showViewContainer);
        this._cMain.addChild(this._gameViewContainer);
        this._cMain.addChild(this._endGameViewContainer);
        this._cMain.addChild(this._fsBtn);
    }
    MainController.prototype.orientationDivace = function (fromEvent) {
        if (fromEvent)
            MainController.LANDSCAPE = !(window.innerWidth > window.innerHeight);
        else
            MainController.LANDSCAPE = (window.innerWidth > window.innerHeight);
        console.log("!!!!!!!!!!!!!!!!!!!!!! ", fromEvent);
        console.log("Main orientation divace landscape : ", MainController.LANDSCAPE, window.innerWidth, window.innerHeight);
        var sw = MainController.LANDSCAPE ? 1366 : 768;
        var sh = MainController.LANDSCAPE ? 768 : 1366;
        this._renderer.resize(sw, sh);
        if (this._sChoose) {
            this._sChoose.orientation(MainController.LANDSCAPE);
        }
        if (this._parter) {
            this._parter.orientation(MainController.LANDSCAPE);
        }
        if (this._shopView) {
            this._shopView.orientation(MainController.LANDSCAPE);
        }
        if (this._gameView) {
            this._gameView.orientation(MainController.LANDSCAPE);
        }
        if (this._endGameView) {
            this._endGameView.orientation(MainController.LANDSCAPE);
        }
    };
    MainController.prototype.loadImages = function (res, cbCompleate) {
        if (res.length <= 0)
            console.log("!!!***********Empty resource object***********!!!");
        var _res = res;
        this._allImageLoaded += _res.length;
        //  console.log("$#$#$# ",_res);
        this._rLoader.loadResources(_res, this, this.oneResourceLoaded, cbCompleate);
    };
    MainController.prototype.oneResourceLoaded = function (that, _e) {
        that._loadImgCounter++;
        //  console.log("**** ", that._loadImgCounter);
        that._progress = Math.round((that._loadImgCounter / that._allImageLoaded) * 100);
        if (that._loadImgCounter > 0 && that._loadImgCounter < that._allImageLoaded + 1 && that._progress < 101) {
            that._sChoose.setProgressBar(that._progress);
        }
        else {
            console.log("that._loadImgCounter > 0 && that._loadImgCounter < that._allImageLoaded+1 && that._progress < 101 :", that._loadImgCounter, that._allImageLoaded + 1, that._progress);
            //  throw new Error("incorrect load percent!");
        }
    };
    MainController.prototype.soundChooseLoadCompleate = function (that) {
        //console.log("@@@@@ ", that._loadImgCounter);
        if ((that._allImageLoaded === that._loadImgCounter)) {
            var event_1 = new CustomEvent('SoundChooseLoadCompleate');
            setTimeout(function () {
                that._dispachtElement.dispatchEvent(event_1);
            }, 10);
        }
    };
    MainController.prototype.loadCompleate = function (that) {
        if ((that._allImageLoaded === that._loadImgCounter)) {
            var event_2 = new CustomEvent('allViewImagesloaded');
            setTimeout(function () {
                that._dispachtElement.dispatchEvent(event_2);
            }, 10);
        }
    };
    MainController.prototype.loadOtherImages = function () {
        var allOtherImages = [];
        var temporary;
        //-----------------------parter------------------------
        this._parter = new Parter(this._parterContainer);
        temporary = this._parter.getResouces();
        temporary.forEach(function (obj) { allOtherImages.push(obj); });
        //  console.log("TTTTTTTTTT ", temporary);
        //-----------------------------------------------------
        //----------------------shopView-----------------------
        this._shopView = new ShopView(this._showViewContainer, this._dispachtElement);
        temporary = this._shopView.getResouces();
        temporary.forEach(function (obj) { allOtherImages.push(obj); });
        //-----------------------------------------------------
        //----------------------gameView-----------------------
        this._gameView = new GameView(this._gameViewContainer, this._dispachtElement);
        temporary = this._gameView.getResouces();
        temporary.forEach(function (obj) { allOtherImages.push(obj); });
        //-----------------------------------------------------
        //--------------------endGameView----------------------
        this._endGameView = new EndGameView(this._endGameViewContainer);
        //-----------------------------------------------------
        this.loadImages(allOtherImages, this.loadCompleate);
    };
    MainController.prototype.makeAllSoundsJs = function () {
        if (!createjs.Sound.initializeDefaultPlugins()) {
            return;
        }
        createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));
        for (var obj in this._allSounds) {
            createjs.Sound.registerSound(this._allSounds[obj].path, this._allSounds[obj].name);
        }
    };
    MainController.prototype.soundLoaded = function (event) {
        console.log("++++++++++", event);
    };
    MainController.prototype.moveBall = function (key) {
        if (this._playGame) {
            this._gameView.moveBall(key);
        }
    };
    MainController.prototype.stopBallMove = function () {
        if (MainController.HAVE_SOUND) {
            this._gameView.stopBallSound();
        }
    };
    MainController.prototype.dispatchCommand = function (_e) {
        var self = this;
        setTimeout(function () {
            //  console.log('zzzzzzzzzzzz', _e.type, _e.detail);
            self.doit(_e.type, _e.detail);
        }, 10);
    };
    MainController.prototype.doit = function (_command, _paramArray) {
        var _this = this;
        var trunk;
        //  console.log("controller commandS: ", _command, _paramArray);
        if (_command != "" || _command != undefined) {
            trunk = { command: _command, param: _paramArray };
            this._queu.push(trunk);
        }
        console.log("____ ", this._allowTransition, this._queu.length, this._currentState);
        if (this._allowTransition && this._queu.length > 0) {
            this._allowTransition = false;
            switch (this._currentState) {
                case 'SOUND_CHOOSE':
                    console.log('STATE-SOUND_CHOOSE', this._queu[0].command);
                    switch (this._queu[0].command) {
                        case 'SoundChooseLoadCompleate':
                            this._sChoose.createInterface();
                            this.orientationDivace(false);
                            this._nextState = 'SOUND_CHOOSE';
                            break;
                        case 'gameWithSound':
                            MainController.HAVE_SOUND = true;
                            this.makeAllSoundsJs();
                            this.loadOtherImages();
                            this._nextState = 'SOUND_CHOOSE';
                            break;
                        case 'gameWithoutSound':
                            MainController.HAVE_SOUND = false;
                            this.loadOtherImages();
                            this._nextState = 'SOUND_CHOOSE';
                            break;
                        case 'allViewImagesloaded':
                            // if(++this._viewCounter === this._numView){
                            //   this._sChoose.createInterface();
                            // }
                            this._sChooseAllow = false;
                            this._parter.createInterface();
                            this._shopView.createInterface();
                            this._gameView.createInterface();
                            this._endGameView.createInterface();
                            this.orientationDivace(false);
                            this._parterAllow = true;
                            this._nextState = 'PARTER';
                            break;
                    }
                    this._currentState = this._nextState;
                    break;
                case 'PARTER':
                    console.log('STATE-PARTER', this._queu[0].command);
                    switch (this._queu[0].command) {
                        case 'buttonbtnPlayclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnClick');
                            this._gameView.setMoney(this._money);
                            this._gameView.setTime(this._time);
                            this._gameView.setLevel(this._gameLevel);
                            this._gameView.restoreInit();
                            this._gameView.startStuff(this._purchased);
                            this._gameViewAllow = true;
                            this._parterAllow = false;
                            this._endGameViewAllow = false;
                            this._gameView.playDisable(false);
                            this._nextState = 'GAME_READY';
                            break;
                        case 'buttonbtnShopclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnClick');
                            this._shopView.setMoney(this._money);
                            this._shopView.begin(this._subgameEnd);
                            setTimeout(function () {
                                if (MainController.HAVE_SOUND) {
                                    _this._shopLoopSound = createjs.Sound.play("shopLoop", { loop: -1 });
                                    _this._shopLoopSound.volume = 0.2;
                                }
                                _this._shopViewAllow = true;
                                _this._parterAllow = false;
                            }, 300);
                            this._nextState = 'SHOP';
                            break;
                        case 'buttonbtn1Timeclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnBuyClick');
                            if (this._money > 0) {
                                this._parter.rotateClock();
                                this._parter.setTime(this._time += 1);
                                this._parter.setMoney(this._money -= 1);
                            }
                            this._nextState = 'PARTER';
                            break;
                        case 'buttonbtn10Timeclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnBuyClick');
                            if (this._money > 9) {
                                this._parter.rotateClock();
                                this._parter.setTime(this._time += 10);
                                this._parter.setMoney(this._money -= 10);
                            }
                            this._nextState = 'PARTER';
                            break;
                        case 'buttonbtn1Moneyclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnBuyClick');
                            if (this._time > 0) {
                                this._parter.rotateMoney();
                                this._parter.setMoney(this._money += 1);
                                this._parter.setTime(this._time -= 1);
                            }
                            this._nextState = 'PARTER';
                            break;
                        case 'buttonbtn10Moneyclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnBuyClick');
                            if (this._time > 9) {
                                this._parter.rotateMoney();
                                this._parter.setMoney(this._money += 10);
                                this._parter.setTime(this._time -= 10);
                            }
                            this._nextState = 'PARTER';
                            break;
                    }
                    this._currentState = this._nextState;
                    break;
                case 'SHOP':
                    console.log('STATE-SHOP', this._queu[0].command);
                    switch (this._queu[0].command) {
                        case 'buttonbtnShopBackclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnClick');
                            this._subgameEnd = false;
                            this._parter.setMoney(this._money);
                            setTimeout(function () {
                                if (MainController.HAVE_SOUND)
                                    _this._shopLoopSound.stop("shop_loop");
                                _this._shopViewAllow = false;
                                _this._parterAllow = true;
                            }, 300);
                            this._nextState = 'PARTER';
                            break;
                        case 'scarabClicked':
                            if (this._queu[0].param[0] === 1) {
                                this._shopView.setScarab(1);
                                this._shopView.showStuffDescription(true);
                            }
                            else if (this._queu[0].param[0] === 2) {
                                if ((this._money - this._queu[0].param[1]) >= 0) {
                                    this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                    this._shopView.setScarab(2);
                                    this._shopView.showStuffDescription(true);
                                    this._purchased.push("scarab");
                                }
                                else {
                                    this._shopView.setScarab(0);
                                    this._shopView.showStuffDescription(false);
                                }
                            }
                            else if (this._queu[0].param[0] === 3) {
                                this._shopView.setScarab(0);
                                this._shopView.showStuffDescription(false);
                                this._shopView.setMoney(this._money += this._queu[0].param[1]);
                                var sliceIndex = this._purchased.indexOf("scarab");
                                this._purchased.splice(sliceIndex, 1);
                            }
                            break;
                        case 'woodTorchClicked':
                            if (this._queu[0].param[0] === 1) {
                                this._shopView.setWoodTorch(1);
                                this._shopView.showStuffDescription(true);
                            }
                            else if (this._queu[0].param[0] === 2) {
                                if ((this._money - this._queu[0].param[1]) >= 0) {
                                    this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                    this._shopView.setWoodTorch(2);
                                    this._shopView.showStuffDescription(true);
                                    this._purchased.push("woodTorch");
                                }
                                else {
                                    this._shopView.setWoodTorch(0);
                                    this._shopView.showStuffDescription(false);
                                }
                            }
                            else if (this._queu[0].param[0] === 3) {
                                this._shopView.setWoodTorch(0);
                                this._shopView.showStuffDescription(false);
                                this._shopView.setMoney(this._money += this._queu[0].param[1]);
                                var sliceIndex = this._purchased.indexOf("woodTorch");
                                this._purchased.splice(sliceIndex, 1);
                            }
                            break;
                        case 'shoesClicked':
                            if (this._queu[0].param[0] === 1) {
                                this._shopView.setShoes(1);
                                this._shopView.showStuffDescription(true);
                            }
                            else if (this._queu[0].param[0] === 2) {
                                if ((this._money - this._queu[0].param[1]) >= 0) {
                                    this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                    this._shopView.setShoes(2);
                                    this._shopView.showStuffDescription(true);
                                    this._purchased.push("shoes");
                                }
                                else {
                                    this._shopView.setShoes(0);
                                    this._shopView.showStuffDescription(false);
                                }
                            }
                            else if (this._queu[0].param[0] === 3) {
                                this._shopView.setShoes(0);
                                this._shopView.showStuffDescription(false);
                                this._shopView.setMoney(this._money += this._queu[0].param[1]);
                                var sliceIndex = this._purchased.indexOf("shoes");
                                this._purchased.splice(sliceIndex, 1);
                            }
                            break;
                        case 'eyeOfRaClicked':
                            if (this._queu[0].param[0] === 1) {
                                this._shopView.setEyeOfRa(1);
                                this._shopView.showStuffDescription(true);
                            }
                            else if (this._queu[0].param[0] === 2) {
                                if ((this._money - this._queu[0].param[1]) >= 0) {
                                    this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                    this._shopView.setEyeOfRa(2);
                                    this._shopView.showStuffDescription(true);
                                    this._purchased.push("eyeOfRa");
                                }
                                else {
                                    this._shopView.setEyeOfRa(0);
                                    this._shopView.showStuffDescription(false);
                                }
                            }
                            else if (this._queu[0].param[0] === 3) {
                                this._shopView.setEyeOfRa(0);
                                this._shopView.showStuffDescription(false);
                                this._shopView.setMoney(this._money += this._queu[0].param[1]);
                                var sliceIndex = this._purchased.indexOf("eyeOfRa");
                                this._purchased.splice(sliceIndex, 1);
                            }
                            break;
                        case 'papyrusClicked':
                            if (this._queu[0].param[0] === 1) {
                                this._shopView.setPapyrus(1);
                                this._shopView.showStuffDescription(true);
                            }
                            else if (this._queu[0].param[0] === 2) {
                                if ((this._money - this._queu[0].param[1]) >= 0) {
                                    this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                    this._shopView.setPapyrus(2);
                                    this._shopView.showStuffDescription(true);
                                    this._purchased.push("papyrus");
                                }
                                else {
                                    this._shopView.setPapyrus(0);
                                    this._shopView.showStuffDescription(false);
                                }
                            }
                            else if (this._queu[0].param[0] === 3) {
                                this._shopView.setPapyrus(0);
                                this._shopView.showStuffDescription(false);
                                this._shopView.setMoney(this._money += this._queu[0].param[1]);
                                var sliceIndex = this._purchased.indexOf("papyrus");
                                this._purchased.splice(sliceIndex, 1);
                            }
                            break;
                    }
                    this._currentState = this._nextState;
                    break;
                case 'GAME_READY':
                    console.log('STATE-GAME_READY', this._queu[0].command);
                    switch (this._queu[0].command) {
                        case 'buttonbtnPlayclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnClick');
                            this._gameView.playDisable(true);
                            setTimeout(function () {
                                if (MainController.HAVE_SOUND)
                                    _this._gameLoopSound = createjs.Sound.play("gameLoop", { loop: -1 });
                                _this._playGame = true;
                                _this._gameView.startGameTime();
                            }, 300);
                            this._nextState = 'PLAY_GAME';
                            break;
                    }
                    this._currentState = this._nextState;
                    break;
                case 'PLAY_GAME':
                    console.log('STATE-PLAY_GAME', this._queu[0].command);
                    switch (this._queu[0].command) {
                        case 'papyrusClicked':
                            //  this._gameView.showMaze();
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'scarabClicked':
                            //  this._gameView.scarabWasClicked();
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'shoesClicked':
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'woodTorchClicked':
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'eyeOfRaClicked':
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'hitCoin':
                            this._gameView.setMoney(this._money += 10);
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'hitMoneyCase':
                            var win = Math.floor((Math.random() * 45) + 15);
                            this._money += win;
                            this._gameView.startMoneyCaseAnim(win);
                            this._nextState = 'PLAY_GAME';
                            break;
                        case 'timeOver':
                            this._time = 0;
                            this._purchased = [];
                            if (MainController.HAVE_SOUND)
                                this._gameLoopSound.stop("gameLoop");
                            setTimeout(function () {
                                if (_this._isLoged) {
                                    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                                    document.getElementById("textinput").value = _this._uName;
                                    document.getElementById("textinputScore").value = _this._gameLevel;
                                    _this._recScreen.style.display = 'block';
                                }
                                else {
                                    _this._gameViewAllow = false;
                                    _this._endGameViewAllow = true;
                                }
                            }, 3000);
                            this._nextState = 'GAME_OVER';
                            break;
                        case 'hitExit':
                            this._subgameEnd = true;
                            if (MainController.HAVE_SOUND)
                                this._gameLoopSound.stop("gameLoop");
                            this._purchased = [];
                            this._time = this._queu[0].param[0];
                            this._gameLevel++;
                            this._parter.setMoney(this._money);
                            this._parter.setTime(this._time);
                            setTimeout(function () {
                                _this._gameViewAllow = false;
                                _this._parterAllow = true;
                            }, 3000);
                            this._nextState = 'PARTER';
                            break;
                    }
                    this._currentState = this._nextState;
                    break;
                case 'GAME_OVER':
                    console.log('STATE-GAME_OVER', this._queu[0].command);
                    switch (this._queu[0].command) {
                        case 'buttonbtnPlayclicked':
                            if (MainController.HAVE_SOUND)
                                createjs.Sound.play('btnClick');
                            window.location.href = "http://tgg-bg.com";
                            this._nextState = 'PLAY_GAME';
                            break;
                    }
                    this._currentState = this._nextState;
                    break;
                default: console.log('!!! STARTE-MACHINE controler - defoult case !!!');
            }
            this._queu.shift();
            this._allowTransition = true;
            if (this._queu.length > 0)
                this.doit("", []);
        }
    };
    MainController.prototype.animate = function () {
        var _this = this;
        this._sChooseContainer.visible = this._sChooseAllow;
        this._parterContainer.visible = this._parterAllow;
        this._showViewContainer.visible = this._shopViewAllow;
        this._gameViewContainer.visible = this._gameViewAllow;
        this._endGameViewContainer.visible = this._endGameViewAllow;
        if ((window.fullscreen) || (window.innerHeight == screen.height)) {
            this._fsBtn.visible = false;
        }
        else {
            if (!this._IOS)
                this._fsBtn.visible = true;
        }
        this._renderer.render(this._cMain);
        requestAnimationFrame(function () { return _this.animate(); });
    };
    MainController.IS_MOBILE = false;
    MainController.HAVE_SOUND = false;
    MainController.LANDSCAPE = false;
    return MainController;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9NYWluQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBRXRDO0lBd0RFLHdCQUFZLGVBQThCLEVBQUUsUUFBaUQsRUFBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxLQUFZO1FBQTlJLGlCQXlEQztRQS9HTyxXQUFNLEdBQWtCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLHNCQUFpQixHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4RCxxQkFBZ0IsR0FBa0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkQsdUJBQWtCLEdBQWtCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pELHVCQUFrQixHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6RCwwQkFBcUIsR0FBa0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUQsYUFBUSxHQUFrQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBTS9DLFVBQUssR0FBYyxFQUFFLENBQUM7UUFDdEIsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBVSxjQUFjLENBQUM7UUFDdEMsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFVLENBQUMsQ0FBQztRQUN4QixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0Isb0JBQWUsR0FBVSxDQUFDLENBQUM7UUFDM0IsY0FBUyxHQUFVLENBQUMsQ0FBQztRQUNyQixVQUFLLEdBQVUsR0FBRyxDQUFDO1FBQ25CLFdBQU0sR0FBVSxDQUFDLENBQUM7UUFDbEIscUJBQWdCLEdBQVcsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdB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