"use strict";
var GameView = /** @class */ (function () {
    function GameView(cMain, dispachtElement) {
        var _this = this;
        this._innerC = new PIXI.Container();
        this._images = [{ name: 'bg_header', url: 'pics/1366x768/game_header_bg.png' },
            { name: 'backgroundgamePortrait', url: 'pics/1366x768/bg_game_portrait.png' },
            { name: 'gameFrame', url: 'pics/1366x768/game_frame.png' },
            { name: 'innerBg1', url: 'pics/1366x768/innerBg1.png' },
            { name: 'innerBg2', url: 'pics/1366x768/innerBg2.png' },
            { name: 'stuffBarLeft', url: 'pics/1366x768/stuff_bar_left_game.png' },
            { name: 'stuffBarRight', url: 'pics/1366x768/stuff_bar_right_game.png' },
            { name: 'stuffBarPortreat', url: 'pics/1366x768/stuff_bar_portrait.png' },
            { name: 'bigBall', url: 'pics/BigBall.png' },
            { name: 'stoneLine', url: 'pics/stoneLine.png' },
            { name: 'moneySign', url: 'pics/1366x768/dollar_sign_game.png' },
            { name: 'timeSign', url: 'pics/1366x768/time_sign_game.png' },
            { name: 'levelSign', url: 'pics/1366x768/level_sign_game.png' },
            { name: 'coin', url: 'pics/coin_anim.png' },
            { name: 'compass', url: 'pics/compass_anim.png' },
            { name: 'exit', url: 'pics/exit_anim.png' },
            { name: 'moneyCase', url: 'pics/case_anim.png' },
            { name: 'tortoise', url: 'pics/tortoies_anim.png' },
            { name: 'moneyAnim000', url: 'pics/moneyAnim/bigWinAnim000.png' },
            { name: 'moneyAnim001', url: 'pics/moneyAnim/bigWinAnim001.png' },
            { name: 'moneyAnim002', url: 'pics/moneyAnim/bigWinAnim002.png' },
            { name: 'moneyAnim003', url: 'pics/moneyAnim/bigWinAnim003.png' },
            { name: 'moneyAnim004', url: 'pics/moneyAnim/bigWinAnim004.png' },
            { name: 'moneyAnim005', url: 'pics/moneyAnim/bigWinAnim005.png' },
            { name: 'moneyAnim006', url: 'pics/moneyAnim/bigWinAnim006.png' },
            { name: 'moneyAnim007', url: 'pics/moneyAnim/bigWinAnim007.png' },
            { name: 'moneyAnim008', url: 'pics/moneyAnim/bigWinAnim008.png' },
            { name: 'moneyAnim009', url: 'pics/moneyAnim/bigWinAnim009.png' },
            { name: 'moneyAnim010', url: 'pics/moneyAnim/bigWinAnim010.png' },
            { name: 'moneyAnim011', url: 'pics/moneyAnim/bigWinAnim011.png' },
            { name: 'moneyAnim012', url: 'pics/moneyAnim/bigWinAnim012.png' },
            { name: 'moneyAnim013', url: 'pics/moneyAnim/bigWinAnim013.png' },
            { name: 'moneyAnim014', url: 'pics/moneyAnim/bigWinAnim014.png' },
            { name: 'moneyAnim015', url: 'pics/moneyAnim/bigWinAnim015.png' },
            { name: 'moneyAnim016', url: 'pics/moneyAnim/bigWinAnim016.png' },
            { name: 'moneyAnim017', url: 'pics/moneyAnim/bigWinAnim017.png' },
            { name: 'moneyAnim018', url: 'pics/moneyAnim/bigWinAnim018.png' },
            { name: 'moneyAnim019', url: 'pics/moneyAnim/bigWinAnim019.png' },
            { name: 'moneyAnim020', url: 'pics/moneyAnim/bigWinAnim020.png' },
            { name: 'moneyAnim021', url: 'pics/moneyAnim/bigWinAnim021.png' },
            { name: 'moneyAnim022', url: 'pics/moneyAnim/bigWinAnim022.png' },
            { name: 'moneyAnim023', url: 'pics/moneyAnim/bigWinAnim023.png' },
            { name: 'moneyAnim024', url: 'pics/moneyAnim/bigWinAnim024.png' },
            { name: 'moneyAnim025', url: 'pics/moneyAnim/bigWinAnim025.png' },
            { name: 'moneyAnim026', url: 'pics/moneyAnim/bigWinAnim026.png' },
            { name: 'moneyAnim027', url: 'pics/moneyAnim/bigWinAnim027.png' },
            { name: 'moneyAnim028', url: 'pics/moneyAnim/bigWinAnim028.png' },
            { name: 'moneyAnim029', url: 'pics/moneyAnim/bigWinAnim029.png' },
            { name: 'moneyAnim030', url: 'pics/moneyAnim/bigWinAnim030.png' },
            { name: 'moneyAnim031', url: 'pics/moneyAnim/bigWinAnim031.png' },
            { name: 'moneyAnim032', url: 'pics/moneyAnim/bigWinAnim032.png' },
            { name: 'moneyAnim033', url: 'pics/moneyAnim/bigWinAnim033.png' },
            { name: 'moneyAnim034', url: 'pics/moneyAnim/bigWinAnim034.png' }];
        this._moneyAnimTextures = [];
        this._allWalls = [];
        this._moveMatrix = [];
        this._tilePizzleCoor = [
            [
                [96, 141, 0], [117, 141, 0], [135, 91, 90], [207, 149, 90], [211, 206, 0],
                [303, 206, 0], [334, 145, 90], [305, 140, 0], [458, 147, 90], [525, 91, 90],
                [752, 91, 90], [757, 143, 0], [825, 143, 0], [916, 148, 90], [38, 245, 0],
                [91, 317, 0], [91, 325, 90], [158, 318, 90], [92, 405, 90], [100, 494, 0],
                [201, 475, 90], [211, 565, 0], [38, 560, 0], [271, 325, 90], [272, 404, 90],
                [276, 355, 0], [236, 382, 0], [277, 450, 0], [402, 425, 90], [381, 515, 0],
                [471, 472, 90], [481, 562, 0], [581, 562, 0], [681, 562, 0], [781, 562, 0],
                [827, 562, 0], [883, 482, 0], [820, 482, 0], [720, 482, 0], [916, 392, 90],
                [916, 324, 90], [734, 320, 90], [555, 482, 0], [567, 392, 90], [476, 392, 0],
                [476, 293, 90], [481, 327, 0], [408, 284, 0], [849, 323, 90], [791, 323, 90],
                [698, 319, 0], [693, 260, 90], [762, 253, 0], [690, 253, 0], [590, 253, 0],
                [630, 205, 90], [630, 150, 90], [598, 186, 0]
            ],
            [
                [135, 140, 0], [234, 140, 0], [1045, 140, 0], [432, 140, 0], [531, 140, 0],
                [630, 140, 0], [730, 140, 0], [827, 140, 0], [135, 141, 90], [275, 141, 90],
                [135, 211, 90], [275, 231, 0], [373, 231, 0], [472, 231, 0], [572, 231, 0],
                [672, 209, 90], [754, 253, 0], [916, 207, 90], [135, 310, 90], [237, 318, 0],
                [370, 293, 90], [370, 325, 90], [476, 293, 90], [672, 286, 90], [754, 320, 90],
                [916, 305, 90], [136, 400, 0], [181, 400, 0], [272, 404, 90], [476, 392, 0],
                [672, 370, 90], [916, 404, 90], [38, 562, 0], [112, 471, 0], [133, 470, 90],
                [211, 562, 0], [272, 404, 90], [272, 470, 90], [309, 562, 0], [381, 483, 0],
                [408, 562, 0], [427, 465, 90], [506, 562, 0], [574, 482, 0], [672, 469, 90],
                [672, 562, 0], [731, 562, 0], [827, 562, 0], [758, 482, 0], [820, 482, 0],
                [915, 472, 90], [38, 640, 0], [138, 640, 0], [238, 640, 0], [338, 640, 0],
                [510, 640, 0], [610, 640, 0], [710, 640, 0], [810, 640, 0], [910, 640, 0],
                [990, 640, 0], [990, 562, 0], [1045, 495, 0], [920, 430, 0], [980, 430, 0],
                [1040, 140, 90], [1040, 240, 90]
            ],
            [
                [92, 262, 90], [160, 92, 90], [160, 332, 90], [240, 149, 90], [381, 211, 90],
                [238, 275, 90], [307, 211, 90], [307, 275, 90], [3000, 210, 90], [381, 272, 90],
                [455, 310, 90], [455, 212, 90], [546, 212, 90], [546, 310, 90], [546, 400, 90],
                [615, 208, 90], [615, 266, 90], [615, 429, 90], [615, 528, 90], [695, 269, 90],
                [763, 269, 90], [830, 269, 90], [918, 268, 90], [240, 142, 0], [267, 142, 0],
                [363, 142, 0], [460, 142, 0], [456, 207, 0], [593, 142, 0], [689, 142, 0],
                [889, 142, 0], [615, 200, 0], [773, 200, 0], [828, 200, 0], [695, 263, 0],
                [827, 263, 0], [39, 425, 0], [139, 425, 0], [239, 425, 0], [298, 425, 0],
                [684, 422, 0], [890, 422, 0], [39, 493, 0], [262, 493, 0], [362, 492, 0],
                [456, 492, 0], [621, 488, 0], [791, 487, 0], [890, 487, 0], [110, 559, 0],
                [210, 559, 0], [309, 559, 0], [459, 559, 0], [620, 554, 0], [718, 554, 0],
                [817, 554, 0]
            ]
        ];
        this._ballBoxPos = [10, 10];
        //private _gameStuffPosition:Array<any> = [[80, 660, 0], [120, 660, 0], [160, 660, 0], [200, 660, 0], [240, 660, 0], [280, 660, 0]];
        this._gameStuffPosition = [ /*[80, 660, 0], [120, 660, 0], [160, 660, 0], [200, 660, 0], [240, 660, 0], [280, 660, 0]*/];
        this._allGifts = [];
        this._speedBox = 2;
        this._visualRange = 90;
        this._GSInnerX = 128; // game screen inner x  landscape
        this._GSInnerY = 115; // game screen inner y  landscape
        this._rowM = 320; // row matrix  landscape
        this._colM = 558; // calumn matrix  landscape
        this._moveBoxSize = 2; // goleminata na nevidimata kutijka v PX, po koqto se dviji top4eto
        this._ballBox = 10;
        this._timeStop = false;
        this._ballMoveStarted = false;
        this._fogC = new PIXI.Container();
        this._clientTouchData = {};
        this._rotateC = new PIXI.Container();
        this._cMain = cMain;
        this._dispachtElement = dispachtElement;
        this._innerC.x = 0;
        this._innerC.y = 0;
        this._innerC.name = "innerC";
        this._cMain.addChild(this._innerC);
        this._cMain.addChild(this._rotateC);
        if (MainController.IS_MOBILE) {
            this._innerC.interactive = true;
            this._innerC.on('pointerdown', function (e) { _this.touchMoveBall(e); });
            this._innerC.on('pointerup', function () { _this.touchEnd(); });
            this._clientTouchData = { 'clickX': 0,
                'clickY': 0,
                'ballX': 0,
                'ballY': 0 };
        }
    }
    GameView.prototype.createInterface = function () {
        var _this = this;
        console.log("createInterface ShopView");
        //---------------------background---------------
        this._bgHeader = PIXI.Sprite.fromImage(sysData.bg_header.url);
        this._bgHeader.anchor.set(0.5, 0);
        this._bgHeader.y = 0;
        this._backgroundPortrait = PIXI.Texture.fromImage(sysData.backgroundgamePortrait.url);
        this._background = new PIXI.Sprite(this._backgroundPortrait);
        this._background.x = 0;
        this._background.y = 100;
        this._gameframe = PIXI.Sprite.fromImage(sysData.gameFrame.url);
        this._gameframe.anchor.set(0.5);
        this._innerC.addChild(this._bgHeader);
        this._innerC.addChild(this._background);
        //----------------------------------------------
        //------------------innerBg1--------------------
        this._innerBg1 = PIXI.Sprite.fromImage(sysData.innerBg1.url);
        //this._innerBg1.anchor.set(0.5);
        //----------------------------------------------
        //------------------innerBg2--------------------
        this._innerBg2 = PIXI.Sprite.fromImage(sysData.innerBg2.url);
        //this._innerBg2.anchor.set(0.5);
        this._innerBg2.visible = false;
        //----------------------------------------------
        //--------------stuffBarLandscape---------------
        this._stuffBarLeft = PIXI.Sprite.fromImage(sysData.stuffBarLeft.url);
        this._stuffBarLeft.x = 0;
        this._stuffBarLeft.y = 100;
        this._innerC.addChild(this._stuffBarLeft);
        this._stuffBarRight = PIXI.Sprite.fromImage(sysData.stuffBarRight.url);
        this._stuffBarRight.x = 1366 - 113;
        this._stuffBarRight.y = 100;
        this._innerC.addChild(this._stuffBarRight);
        //----------------------------------------------
        //--------------stuffBarPortreat----------------
        this._stuffBarPortreat = PIXI.Sprite.fromImage(sysData.stuffBarPortreat.url);
        this._stuffBarPortreat.x = 0;
        this._stuffBarPortreat.y = 1366 - 122;
        this._innerC.addChild(this._stuffBarPortreat);
        //----------------------------------------------
        //------------------btnPlay---------------------
        this._btnPlay = new Button(this._innerC, 'btnPlay', sysData.btnPlayGreen.name, sysData.btnPlaySymbol.name, 7, 100, 100);
        //----------------------------------------------
        //------------------moneySign--------------------
        this._moneySign = PIXI.Sprite.fromImage(sysData.moneySign.url);
        this._innerC.addChild(this._moneySign);
        //----------------------------------------------
        //-------------------money----------------------
        this._money = new PIXI.Text('10', { fontFamily: 'Arial',
            fontSize: 36,
            fill: 0xffffff,
            fontWeight: 'bold',
            align: 'center' });
        this._money.anchor.set(0.5, 0);
        this._innerC.addChild(this._money);
        //----------------------------------------------
        //------------------levelSign-------------------
        this._levelSign = PIXI.Sprite.fromImage(sysData.levelSign.url);
        this._innerC.addChild(this._levelSign);
        //----------------------------------------------
        //-------------------level----------------------
        this._level = new PIXI.Text('1', { fontFamily: 'Arial',
            fontSize: 36,
            fill: 0xffffff,
            fontWeight: 'bold',
            align: 'center' });
        this._level.anchor.set(0.5, 0);
        this._innerC.addChild(this._level);
        //----------------------------------------------
        //-------------------timeSign-------------------
        this._timeSign = PIXI.Sprite.fromImage(sysData.timeSign.url);
        this._innerC.addChild(this._timeSign);
        //----------------------------------------------
        //-------------------time-----------------------
        this._time = new PIXI.Text('60', { fontFamily: 'Arial',
            fontSize: 36,
            fill: '0xffffff',
            fontWeight: 'bold',
            align: 'center' });
        this._time.anchor.set(0.5, 0);
        this._innerC.addChild(this._time);
        //----------------------------------------------
        //---------------------coin---------------------
        this._coin = new AnimationTiles("coin", 45, 45, 8, this._fogC);
        this._coin.startAnim();
        this._coin.sprite.name = "coin";
        this._allGifts.push(this._coin.sprite);
        //----------------------------------------------
        //-------------------compass--------------------
        this._compass = new AnimationTiles("compass", 45, 45, 10, this._fogC);
        this._compass.startAnim();
        this._compass.sprite.name = "compass";
        this._allGifts.push(this._compass.sprite);
        //----------------------------------------------
        //---------------------exit---------------------
        this._exit = new AnimationTiles("exit", 45, 45, 13, this._fogC);
        this._exit.startAnim();
        this._exit.sprite.name = "exit";
        this._allGifts.push(this._exit.sprite);
        //----------------------------------------------
        //------------------moneyCase-------------------
        this._moneyCase = new AnimationTiles("moneyCase", 45, 45, 8, this._fogC);
        this._moneyCase.startAnim();
        this._moneyCase.sprite.name = "moneyCase";
        this._allGifts.push(this._moneyCase.sprite);
        //----------------------------------------------
        //------------------tortoise--------------------
        this._tortoise = new AnimationTiles("tortoise", 45, 45, 10, this._fogC);
        this._tortoise.startAnim();
        this._tortoise.sprite.name = "tortoise";
        this._allGifts.push(this._tortoise.sprite);
        //----------------------------------------------
        //-------------------papyrus--------------------
        this._papyrus = new AnimationTiles("papyrusAnim", 45, 45, 10, this._innerC);
        this._papyrus.startAnim();
        this._papyrus.sprite.name = "papyrus";
        this._papyrus.sprite.anchor.set(0.5);
        this._papyrus.sprite.visible = true;
        this._papyrus.sprite.buttonMode = true;
        this._papyrus.sprite.interactive = true;
        this._papyrus.sprite.on('pointerdown', function () {
            //this.dispatch("papyrusClicked");
            if (!_this._btnPlay.status) {
                _this.showMaze();
                _this._papyrus.sprite.visible = false;
            }
        });
        //----------------------------------------------
        //-------------------scarab---------------------
        this._scarab = new AnimationTiles("scarabAnim", 45, 45, 12, this._innerC);
        this._scarab.startAnim();
        this._scarab.sprite.name = "scarab";
        this._scarab.sprite.anchor.set(0.5);
        this._scarab.sprite.visible = true;
        this._scarab.sprite.buttonMode = true;
        this._scarab.sprite.interactive = true;
        this._scarab.sprite.on('pointerdown', function () {
            //this.dispatch("scarabClicked");
            if (!_this._btnPlay.status) {
                _this.scarabWasClicked();
                _this._scarab.sprite.visible = false;
            }
        });
        //----------------------------------------------
        //--------------------shoes---------------------
        this._shoes = new AnimationTiles("shoesAnim", 45, 45, 12, this._innerC);
        this._shoes.startAnim();
        this._shoes.sprite.name = "shoes";
        this._shoes.sprite.anchor.set(0.5);
        this._shoes.sprite.visible = false;
        this._shoes.sprite.buttonMode = true;
        this._shoes.sprite.interactive = true;
        this._shoes.sprite.on('pointerdown', function () {
            //this.dispatch("shoesClicked");
            if (!_this._btnPlay.status) {
                _this.shoesWasClicked();
                _this._shoes.sprite.visible = false;
            }
        });
        //----------------------------------------------
        //------------------woodTorch-------------------
        this._woodTorch = new AnimationTiles("woodTorchAnim", 45, 45, 12, this._innerC);
        this._woodTorch.startAnim();
        this._woodTorch.sprite.name = "woodTorch";
        this._woodTorch.sprite.anchor.set(0.5);
        this._woodTorch.sprite.visible = true;
        this._woodTorch.sprite.buttonMode = true;
        this._woodTorch.sprite.interactive = true;
        this._woodTorch.sprite.on('pointerdown', function () {
            //this.dispatch("woodTorchClicked");
            if (!_this._btnPlay.status) {
                _this.woodTorchWasClicked();
                _this._woodTorch.sprite.visible = false;
            }
        });
        //----------------------------------------------
        //-------------------eyeOfRa--------------------
        this._eyeOfRa = PIXI.Sprite.fromImage(sysData.eyeOfRa.url);
        this._eyeOfRa.name = "eyeOfRa";
        this._eyeOfRa.anchor.set(0.5);
        this._eyeOfRa.visible = true;
        this._eyeOfRa.buttonMode = true;
        this._eyeOfRa.interactive = true;
        this._eyeOfRa.on('pointerdown', function () {
            //this.dispatch("eyeOfRaClicked");
            if (!_this._btnPlay.status) {
                _this._fogC.removeChild(_this._exit.sprite);
                _this._innerC.addChild(_this._exit.sprite);
                _this._eyeOfRa.visible = false;
            }
        });
        this._innerC.addChild(this._eyeOfRa);
        //----------------------------------------------
        //-------------------bigball--------------------
        this._bigBall = PIXI.Sprite.fromImage(sysData.bigBall.url);
        this._bigBall.anchor.set(0.5);
        //----------------------------------------------
        //------------------fogMask---------------------
        this._maskFog = new PIXI.Graphics();
        //----------------------------------------------
        //--------------------fog-----------------------
        this._fog = new PIXI.Graphics();
        this._fog.beginFill(0x000000, 1);
        this._fog.drawRect(0, 0, 1112, 638);
        this._fog.endFill();
        this._fogC.name = "fogC";
        this._fogC.x = 0;
        this._fogC.y = 0;
        this._fogC.addChild(this._innerBg1);
        this._fogC.addChild(this._innerBg2);
        this._fogC.addChild(this._bigBall);
        this._fogC.addChild(this._compass.sprite);
        this._fogC.addChild(this._coin.sprite);
        this._fogC.addChild(this._exit.sprite);
        this._fogC.addChild(this._moneyCase.sprite);
        this._fogC.addChild(this._tortoise.sprite);
        this._fogC.mask = this._maskFog;
        this._rotateC.addChild(this._fog);
        this._rotateC.addChild(this._fogC);
        // this._innerC.addChild(this._fog);
        // this._innerC.addChild(this._fogC);
        this._innerC.addChild(this._gameframe); // _cMain
        //----------------------------------------------
        this._allStuff = { "papyrus": this._papyrus.sprite,
            "scarab": this._scarab.sprite,
            "shoes": this._shoes.sprite,
            "woodTorch": this._woodTorch.sprite,
            "eyeOfRa": this._eyeOfRa
        };
        this.makeLevelPazzle();
        for (var i = 0; i < 35; i++) {
            var name_1 = (i < 10) ? 'moneyAnim00' + i : 'moneyAnim0' + i;
            var texture = PIXI.Texture.from(sysData[name_1].url);
            this._moneyAnimTextures.push(texture);
        }
        this._moneyAnim = new PIXI.extras.AnimatedSprite(this._moneyAnimTextures);
        this._moneyAnim.visible = false;
        this._moneyAnim.anchor.set(0.5);
        this._moneyAnim.animationSpeed = 0.4;
        this._cMain.addChild(this._moneyAnim);
    };
    GameView.prototype.orientation = function (value) {
        if (value) { // landscape
            this._GSInnerX = 128;
            this._GSInnerY = 115;
            this._rotateC.rotation = 0;
            this._rotateC.x = this._GSInnerX;
            this._rotateC.y = this._GSInnerY;
            this._background.visible = false;
            this._bgHeader.x = 1366 / 2;
            this._maskFog.clear();
            this._maskFog.beginFill(0x000000, 0.5);
            this._maskFog.drawCircle(this._ballBoxPos[0] * this._moveBoxSize + this._rotateC.x, this._ballBoxPos[1] * this._moveBoxSize + this._rotateC.y, this._visualRange);
            this._maskFog.endFill();
            this._gameframe.x = 1366 / 2;
            this._gameframe.y = 768 / 2 + 50;
            this._gameframe.rotation = 0;
            this._stuffBarLeft.visible = true;
            this._stuffBarRight.visible = true;
            this._stuffBarPortreat.visible = false;
            this._btnPlay.x = 1310;
            this._btnPlay.y = 712;
            this._timeSign.x = 1277;
            this._timeSign.y = 130;
            this._levelSign.x = 1277;
            this._levelSign.y = 313;
            this._moneySign.x = 1277;
            this._moneySign.y = 490;
            this._time.position.set(1310, 225);
            this._level.position.set(1310, 405);
            this._money.position.set(1310, 585);
            this._moneyAnim.x = 1024 / 2;
            this._moneyAnim.y = 768 - 204;
            for (var i = 0; i < this._allGifts.length; i++) {
                this._allGifts[i].rotation = 0;
            }
            this._gameStuffPosition = [[55, 170, 0], [55, 240, 0], [55, 310, 0], [55, 385, 0], [55, 450, 0], [55, 530, 0]];
            var j = 0;
            for (var i in this._allStuff) {
                this._allStuff[i].scale.x = 1;
                this._allStuff[i].scale.y = 1;
                this._allStuff[i].x = this._gameStuffPosition[j][0];
                this._allStuff[i].y = this._gameStuffPosition[j][1];
                j++;
            }
        }
        else { // portrait
            /*this._GSInnerX = 57;
            this._GSInnerY = 117;*/
            this._rotateC.rotation = Math.PI * 2 * 0.250;
            this._rotateC.x = 535 + 57 + 110;
            this._rotateC.y = 117;
            this._background.visible = true;
            this._bgHeader.x = 768 / 2;
            this._stuffBarLeft.visible = false;
            this._stuffBarRight.visible = false;
            this._stuffBarPortreat.visible = true;
            this._gameframe.x = 768 / 2;
            this._gameframe.y = 1366 / 2 - 10;
            this._gameframe.rotation = Math.PI * 2 * 0.250;
            this._maskFog.clear();
            this._maskFog.beginFill(0x000000, 0.5);
            this._maskFog.drawCircle(this._ballBoxPos[0] * this._moveBoxSize + this._rotateC.x, this._ballBoxPos[1] * this._moveBoxSize + this._rotateC.y, this._visualRange);
            this._maskFog.endFill();
            this._btnPlay.x = 717;
            this._btnPlay.y = 1310;
            this._timeSign.x = 508;
            this._timeSign.y = 1272;
            this._levelSign.x = 340;
            this._levelSign.y = 1272;
            this._moneySign.x = 160;
            this._moneySign.y = 1272;
            this._time.position.set(618, 1288);
            this._level.position.set(450, 1288);
            this._money.position.set(270, 1288);
            this._moneyAnim.x = 768 / 2;
            this._moneyAnim.y = 1366 - 140 - 187;
            for (var i = 0; i < this._allGifts.length; i++) {
                this._allGifts[i].rotation = -(Math.PI * 2 * 0.250);
            }
            this._gameStuffPosition = [[35, 1280, 0], [75, 1280, 0], [115, 1280, 0], [35, 1330, 0], [75, 1330, 0], [115, 1330, 0]];
            var j = 0;
            for (var i in this._allStuff) {
                this._allStuff[i].scale.x = 0.7;
                this._allStuff[i].scale.y = 0.7;
                this._allStuff[i].x = this._gameStuffPosition[j][0];
                this._allStuff[i].y = this._gameStuffPosition[j][1];
                j++;
            }
        }
    };
    GameView.prototype.restoreInit = function () {
        this._papyrus.sprite.visible = false;
        this._scarab.sprite.visible = false;
        this._shoes.sprite.visible = false;
        this._woodTorch.sprite.visible = false;
        this._eyeOfRa.visible = false;
        this._bigBall.scale.x = 1;
        this._bigBall.scale.y = 1;
        this._ballBoxPos[0] = 10;
        this._ballBoxPos[1] = 10;
        this._bigBall.x = this._ballBoxPos[0] * this._moveBoxSize;
        this._bigBall.y = this._ballBoxPos[1] * this._moveBoxSize;
        this._maskFog.clear();
        this._maskFog.beginFill(0xFFFFFF, 0.5);
        this._maskFog.drawCircle(this._ballBoxPos[0] * this._moveBoxSize + this._rotateC.x, this._ballBoxPos[1] * this._moveBoxSize + this._rotateC.y, this._visualRange);
        this._maskFog.endFill();
        this._speedBox = 2;
        this._ballBox = 10;
        this._time.style.fill = "#ffffff";
        for (var i = 0; i < this._gameStuffPosition.length; i++) {
            this._gameStuffPosition[i][2] = 0;
        }
        for (var i = 0; i < this._allGifts.length; i++) {
            if (this._allGifts[i].parent.name === "innerC") {
                this._innerC.removeChild(this._allGifts[i]);
                this._fogC.addChild(this._allGifts[i]);
                this._allGifts[i].visible = true;
            }
            this._allGifts[i].visible = true;
        }
        this.shuffleGiftPosition();
    };
    GameView.prototype.startGameTime = function () {
        var _this = this;
        this._timeStop = false;
        this._gameTimer = setInterval(function () {
            _this.setTime(--_this._gameTime);
            if (_this._gameTime === 0) {
                _this.stopGameTime();
                clearInterval(_this._ballTimer);
                _this.dispatch("timeOver");
            }
            if (_this._gameTime < 6) {
                if (MainController.HAVE_SOUND)
                    createjs.Sound.play('timeIsUpSound');
                _this._time.style.fill = "#d6172d";
            }
        }, 1000);
    };
    GameView.prototype.stopGameTime = function () {
        clearInterval(this._gameTimer);
        this._timeStop = true;
    };
    GameView.prototype.startStuff = function (stuffs) {
        for (var i = 0; i < stuffs.length; i++) {
            var pos = this.getStuffPos();
            this._allStuff[stuffs[i]].x = pos[0];
            this._allStuff[stuffs[i]].y = pos[1];
            this._allStuff[stuffs[i]].visible = true;
        }
    };
    GameView.prototype.shuffleGiftPosition = function () {
        //setInterval(()=>{
        var saveX = 0, saveY = 0;
        for (var i = 0; i < this._allGifts.length; i++) {
            var newPos = this.calcPos();
            if (newPos[0] == saveX && newPos[1] == saveY) {
                i--;
            }
            else {
                saveX = newPos[0];
                saveY = newPos[1];
                this._allGifts[i].x = saveX;
                this._allGifts[i].y = saveY;
            }
        }
        //}, 3000);
    };
    GameView.prototype.calcPos = function () {
        var x = (Math.floor(Math.random() * 600) + 280);
        var y = (Math.floor(Math.random() * 360) + 200);
        //console.log("init coordinteX, init coordinteY", x, y);
        return [x, y];
    };
    ;
    GameView.prototype.checkHitGiftTiles = function () {
        var ballRec = this._bigBall.getBounds();
        for (var i = 0; i < this._allGifts.length; i++) {
            var giftRec = this._allGifts[i].getBounds();
            if (ballRec.y < (giftRec.y + giftRec.height) && (ballRec.y + ballRec.height) > giftRec.y) {
                if (ballRec.x > giftRec.x && ballRec.x < (giftRec.x + giftRec.width) ||
                    ballRec.x < giftRec.x && (ballRec.x + ballRec.width) > giftRec.x) {
                    console.log("======HIT======", this._allGifts[i].name);
                    this._allGifts[i].visible = false;
                    this._allGifts[i].x = 0;
                    this._allGifts[i].y = 0;
                    if (MainController.HAVE_SOUND)
                        createjs.Sound.play('getStuff');
                    this.getStuff(this._allGifts[i].name);
                }
            }
        }
    };
    GameView.prototype.getStuff = function (name) {
        var _this = this;
        switch (name) {
            case 'coin':
                this.dispatch("hitCoin");
                break;
            case 'moneyCase':
                this.dispatch("hitMoneyCase");
                break;
            case 'exit':
                this.stopGameTime();
                this.touchEnd();
                clearInterval(this._ballTimer);
                this.dispatch("hitExit", [this._gameTime]);
                break;
            case 'tortoise':
                this._speedBox = 1;
                setTimeout(function () {
                    _this._speedBox = 2;
                }, 6000);
                break;
            case 'compass':
                for (var i = 0; i < this._allGifts.length; i++) {
                    this._fogC.removeChild(this._allGifts[i]);
                    this._innerC.addChild(this._allGifts[i]);
                }
                setTimeout(function () {
                    for (var i = 0; i < _this._allGifts.length; i++) {
                        _this._innerC.removeChild(_this._allGifts[i]);
                        _this._fogC.addChild(_this._allGifts[i]);
                    }
                }, 1500);
                break;
        }
    };
    GameView.prototype.startMoneyCaseAnim = function (value) {
        var _this = this;
        this._moneyAnim.play();
        this._moneyAnim.visible = true;
        var delay = value;
        this.stopGameTime();
        this._moneyTimer = setInterval(function () {
            var m = parseInt(_this._money.text);
            _this._money.text = (m += 1).toString();
            if (--value === 0) {
                clearInterval(_this._moneyTimer);
                _this._moneyAnim.visible = false;
                _this._moneyAnim.stop();
                _this.startGameTime();
            }
        }, 40);
    };
    GameView.prototype.getStuffPos = function () {
        for (var i = 0; i < this._gameStuffPosition.length; i++) {
            if (this._gameStuffPosition[i][2] === 0) {
                this._gameStuffPosition[i][2] = 1;
                return [this._gameStuffPosition[i][0], this._gameStuffPosition[i][1]];
            }
        }
        throw new Error("!!!***Insufficient size of array _gameStuffPosition***!!!");
    };
    GameView.prototype.setMoney = function (value) {
        if (value < 0) {
            console.log("setMoney - GameView");
            throw new Error("!!!***Invalid value of Money***!!!");
        }
        else {
            this._money.text = value.toString();
        }
    };
    GameView.prototype.setLevel = function (value) {
        if (value < 1) {
            console.log("setLevel - GameView");
            throw new Error("!!!***Invalid value of Level***!!!");
        }
        else {
            this._level.text = value.toString();
        }
    };
    GameView.prototype.setTime = function (value) {
        if (value >= 0) {
            this._gameTime = value;
            this._time.text = this._gameTime.toString();
        }
        else {
            console.log("setTime - GameView");
            throw new Error("!!!***Invalid value of Time***!!!");
        }
    };
    GameView.prototype.showMaze = function () {
        for (var i = 0; i < this._allWalls.length; i++) {
            this._fogC.removeChild(this._allWalls[i].tile);
            this._allWalls[i].tile.alpha = 0.5;
            this._innerC.addChild(this._allWalls[i].tile);
        }
    };
    GameView.prototype.scarabWasClicked = function () {
        var _this = this;
        this._bigBall.scale.x = 0.5;
        this._bigBall.scale.y = 0.5;
        this._speedBox = 3;
        this._ballBox = 5;
        setTimeout(function () {
            _this._bigBall.scale.x = 1;
            _this._bigBall.scale.y = 1;
            _this._speedBox = 2;
            _this._ballBox = 10;
        }, 15000);
    };
    GameView.prototype.shoesWasClicked = function () {
        var _this = this;
        this._speedBox = 3;
        setTimeout(function () {
            _this._speedBox = 2;
        }, 10000);
    };
    GameView.prototype.woodTorchWasClicked = function () {
        var _this = this;
        this._visualRange = 120;
        this._maskFog.beginFill(0xFFFFFF, 0.5);
        this._maskFog.drawCircle(this._ballBoxPos[0] * this._moveBoxSize + this._GSInnerX, this._ballBoxPos[1] * this._moveBoxSize + this._GSInnerY, this._visualRange);
        this._maskFog.endFill();
        setTimeout(function () {
            _this._visualRange = 90;
        }, 12000);
    };
    GameView.prototype.checkColision = function (x, y, j) {
        var orientationX, orientationY;
        for (var i = 0; i < this._tilePizzleCoor[j].length; i++) {
            if (this._tilePizzleCoor[j][i][2] == 0) {
                orientationX = 100;
                orientationY = 10;
            }
            else {
                orientationX = 10;
                orientationY = 100;
            }
            if ((x > this._tilePizzleCoor[j][i][0] && x < this._tilePizzleCoor[j][i][0] + orientationX &&
                y >= this._tilePizzleCoor[j][i][1] && y <= this._tilePizzleCoor[j][i][1] + orientationY) ||
                (x > this._tilePizzleCoor[j][i][0] && x < this._tilePizzleCoor[j][i][0] + orientationX &&
                    y + this._moveBoxSize >= this._tilePizzleCoor[j][i][1] && y + this._moveBoxSize <= this._tilePizzleCoor[j][i][1] + orientationY) ||
                (x + this._moveBoxSize > this._tilePizzleCoor[j][i][0] && x + this._moveBoxSize < this._tilePizzleCoor[j][i][0] + orientationX &&
                    y > this._tilePizzleCoor[j][i][1] && y < this._tilePizzleCoor[j][i][1] + orientationY) ||
                (x + this._moveBoxSize > this._tilePizzleCoor[j][i][0] && x + this._moveBoxSize < this._tilePizzleCoor[j][i][0] + orientationX &&
                    y + this._moveBoxSize > this._tilePizzleCoor[j][i][1] && y + this._moveBoxSize < this._tilePizzleCoor[j][i][1] + orientationY)) {
                return 0;
            }
        }
        return 1;
    };
    GameView.prototype.makeLevelPazzle = function () {
        var j = 1; //Math.floor(Math.random() * this._tilePizzleCoor.length);
        var i = 0;
        // for(i = 0; i < this._tilePizzleCoor[j].length; i++){
        //   let tile = new StoneTile('stoneLine', 100, 10, (this._tilePizzleCoor[j][i][2] === 90?90:0));
        //   tile.setX(this._tilePizzleCoor[j][i][0] -35/*92*/);
        //   tile.setY(this._tilePizzleCoor[j][i][1] -94/*25*/);
        //   this._allWalls.push(tile);
        //   this._fogC.addChild(tile.tile);
        // }
        for (i = 0; i < this._tilePizzleCoor[j].length; i++) {
            var tile = new StoneTile('stoneLine', 100, 10, (this._tilePizzleCoor[j][i][2] === 90 ? 90 : 0));
            this._allWalls.push(tile);
            this._fogC.addChild(tile.tile);
        }
        this.setStoneWallPosition(33, 88, j);
        var chC; // check colision
        for (i = 0; i < this._rowM; i++) { //  landscape
            var arr = [];
            this._moveMatrix.push(arr);
            for (var k = 0; k < this._colM; k++) {
                chC = this.checkColision((k * this._moveBoxSize) + 34 /*34*/, (i * this._moveBoxSize) + 88 /*87*/, j);
                //if(k > 200) let bb = new TestBox(this._fogC, chC, (k *this._moveBoxSize), (i *this._moveBoxSize), 2, 2);
                this._moveMatrix[i].push(chC);
            }
        }
    };
    GameView.prototype.setStoneWallPosition = function (ofsetX, ofsetY, j) {
        for (var i = 0; i < this._allWalls.length; i++) {
            this._allWalls[i].setX(this._tilePizzleCoor[j][i][0] - ofsetX);
            this._allWalls[i].setY(this._tilePizzleCoor[j][i][1] - ofsetY);
        }
    };
    GameView.prototype.playDisable = function (value) {
        if (value)
            this._btnPlay.disable();
        else
            this._btnPlay.enable();
    };
    GameView.prototype.touchMoveBall = function (e) {
        var _this = this;
        this._ballTimer = setInterval(function () {
            if (!_this._timeStop && (_this._gameTime > 0)) {
                var ballRec = _this._bigBall.getBounds();
                _this._clientTouchData['clickX'] = parseInt(e.data.global.x);
                _this._clientTouchData['clickY'] = parseInt(e.data.global.y);
                _this._clientTouchData['ballX'] = parseInt(ballRec.x);
                _this._clientTouchData['ballY'] = parseInt(ballRec.y);
                _this.touchStart();
            }
        }, 40);
    };
    GameView.prototype.touchStart = function () {
        if (this._clientTouchData['ballX'] < this._clientTouchData['clickX']) { // right
            if ((this._clientTouchData['clickX'] - this._clientTouchData['ballX']) > 10)
                this.moveBall('right');
            if ((this._clientTouchData['ballY'] - this._clientTouchData['clickY']) > 10 || (this._clientTouchData['ballY'] - this._clientTouchData['clickY']) < -10) {
                if (this._clientTouchData['ballY'] > this._clientTouchData['clickY'])
                    this.moveBall('up');
                else
                    this.moveBall('down');
            }
        }
        else { // left
            if ((this._clientTouchData['ballX'] - this._clientTouchData['clickX']) > 10)
                this.moveBall('left');
            if ((this._clientTouchData['ballY'] - this._clientTouchData['clickY']) > 10 || (this._clientTouchData['ballY'] - this._clientTouchData['clickY']) < -10) {
                if (this._clientTouchData['ballY'] > this._clientTouchData['clickY'])
                    this.moveBall('up');
                else
                    this.moveBall('down');
            }
        }
    };
    GameView.prototype.touchEnd = function () {
        clearInterval(this._ballTimer);
        //console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKK", MainController.HAVE_SOUND, this._ballMoveStarted);
        if (MainController.HAVE_SOUND && this._ballMoveStarted) {
            this._ballMoveStarted = false;
            this._mBallSound.stop("ballMove");
        }
    };
    GameView.prototype.stopBallSound = function () {
        if (MainController.HAVE_SOUND && this._ballMoveStarted) {
            this._ballMoveStarted = false;
            this._mBallSound.stop("ballMove");
        }
    };
    GameView.prototype.moveBall = function (key) {
        //console.log("MMMMMMMMMM ", MainController.LANDSCAPE);
        if (MainController.LANDSCAPE) {
            if (key == "left")
                key = "down";
            else if (key == "right")
                key = "up";
            else if (key == "down")
                key = "right";
            else
                key = "left";
        }
        if (this.hitTestObject(key) && !this._timeStop && (this._gameTime > 0)) {
            switch (key) {
                case 'left':
                    this._ballBoxPos[0] = this._ballBoxPos[0] -= this._speedBox;
                    break;
                case 'right':
                    this._ballBoxPos[0] = this._ballBoxPos[0] += this._speedBox;
                    break;
                case 'up':
                    this._ballBoxPos[1] = this._ballBoxPos[1] -= this._speedBox;
                    break;
                case 'down':
                    this._ballBoxPos[1] = this._ballBoxPos[1] += this._speedBox;
                    //  console.log("%$%$ ", this._ballBoxPos[1], this._moveMatrix[this._ballBoxPos[0]-this._ballBox][this._ballBoxPos[1]+this._ballBox+this._speedBox]);
                    break;
            }
            // this._maskFog.clear();
            // this._maskFog.beginFill(0xFFFFFF, 0.5);    // landscape
            // this._maskFog.drawCircle(this._ballBoxPos[0]*this._moveBoxSize + this._GSInnerX, this._ballBoxPos[1]*this._moveBoxSize + this._GSInnerY, this._visualRange);
            // this._maskFog.endFill();
            this._maskFog.clear();
            this._maskFog.beginFill(0xFFFFFF, 0.5); // landscape
            this._maskFog.drawCircle(this._ballBoxPos[0] * this._moveBoxSize + this._rotateC.x, this._ballBoxPos[1] * this._moveBoxSize + this._rotateC.y, this._visualRange);
            this._maskFog.endFill();
            console.log("XXXXXXXXXXX ", this._ballBoxPos[0] * this._moveBoxSize, this._rotateC.x, this._ballBoxPos[1] * this._moveBoxSize, this._rotateC.y);
            this._bigBall.x = this._ballBoxPos[0] * this._moveBoxSize;
            this._bigBall.y = this._ballBoxPos[1] * this._moveBoxSize;
            this.checkHitGiftTiles();
            if (MainController.HAVE_SOUND && !this._ballMoveStarted) {
                this._ballMoveStarted = true;
                this._mBallSound = createjs.Sound.play("ballMove", { loop: -1 });
            }
        }
    };
    GameView.prototype.hitTestObject = function (pos) {
        var answer = 0;
        var j = 0, i = 0;
        switch (pos) {
            case 'left':
                for (i = 0; i < this._ballBox * 2; i++) {
                    if ((this._ballBoxPos[0] - this._ballBox - this._speedBox) > 0 && this._moveMatrix[(this._ballBoxPos[1] - this._ballBox) + 1 * i][this._ballBoxPos[0] - this._ballBox - this._speedBox] > 0)
                        j++;
                }
                if (j === this._ballBox * 2)
                    answer = 1;
                break;
            case 'up':
                for (i = 0; i < this._ballBox * 2; i++) {
                    if ((this._ballBoxPos[1] - this._ballBox - this._speedBox) > 0 && this._moveMatrix[(this._ballBoxPos[1] - this._ballBox) - this._speedBox][this._ballBoxPos[0] - this._ballBox + 1 * i] > 0)
                        j++;
                }
                if (j === this._ballBox * 2)
                    answer = 1;
                break;
            case 'right':
                for (i = 0; i < this._ballBox * 2; i++) {
                    if ((this._ballBoxPos[0] + this._ballBox + this._speedBox) < this._colM && this._moveMatrix[(this._ballBoxPos[1] - this._ballBox) + 1 * i][this._ballBoxPos[0] + this._ballBox + this._speedBox] > 0)
                        j++;
                }
                if (j === this._ballBox * 2)
                    answer = 1;
                break;
            case 'down':
                for (i = 0; i < this._ballBox * 2; i++) {
                    if ((this._ballBoxPos[1] + this._ballBox + this._speedBox) < this._rowM && this._moveMatrix[(this._ballBoxPos[1] + this._ballBox) + this._speedBox][this._ballBoxPos[0] - this._ballBox + 1 * i] > 0)
                        j++;
                }
                if (j === this._ballBox * 2)
                    answer = 1;
                break;
        }
        return answer;
    };
    GameView.prototype.getResouces = function () {
        return this._images;
    };
    GameView.prototype.dispatch = function (event, param) {
        var _event = new CustomEvent(event, { detail: param });
        this._dispachtElement.dispatchEvent(_event);
    };
    return GameView;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVZpZXcgLSBDb3B5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvR2FtZVZpZXcgLSBDb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQXNLRSxrQkFBWSxLQUFvQixFQUFFLGVBQThCO1FBQWhFLGlCQWtCQztRQXJMTyxZQUFPLEdBQWtCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLFlBQU8sR0FBaUIsQ0FBQyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzFELEVBQUMsSUFBSSxFQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBQyxvQ0FBb0MsRUFBQztZQUN6RSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLDhCQUE4QixFQUFDO1lBQ3RELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsNEJBQTRCLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyw0QkFBNEIsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLHVDQUF1QyxFQUFDO1lBQ2xFLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUMsd0NBQXdDLEVBQUM7WUFDcEUsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFDLHNDQUFzQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsa0JBQWtCLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLG9DQUFvQyxFQUFDO1lBQzVELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDekQsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxtQ0FBbUMsRUFBQztZQUMzRCxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLG9CQUFvQixFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsdUJBQXVCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLG9CQUFvQixFQUFDO1lBQzVDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsd0JBQXdCLEVBQUM7WUFFL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDLENBQUMsQ0FBQztRQThCeEYsdUJBQWtCLEdBQXVCLEVBQUUsQ0FBQztRQUM1QyxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUNoQyxnQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1QixvQkFBZSxHQUFPO1lBQzVCO2dCQUNFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDN0UsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDOUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDOUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM5RSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDN0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQzlDO1lBRUQ7Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQ2xDO1lBRUQ7Z0JBQ0UsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNsRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDbEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FB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