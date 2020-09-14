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
                [96, 141, 0], [117, 141, 0], [207, 149, 90], [211, 206, 0], [955, 650, 0],
                [303, 206, 0], [334, 145, 90], [305, 140, 0], [458, 147, 90], [525, 91, 90],
                [752, 91, 90], [757, 143, 0], [825, 143, 0], [916, 148, 90], [33, 245, 0],
                [91, 317, 0], [91, 325, 90], [158, 318, 90], [92, 405, 90], [100, 494, 0],
                [201, 475, 90], [211, 565, 0], [33, 560, 0], [271, 325, 90], [272, 404, 90],
                [276, 355, 0], [236, 382, 0], [277, 450, 0], [402, 425, 90], [381, 515, 0],
                [471, 472, 90], [481, 562, 0], [581, 562, 0], [681, 562, 0], [781, 562, 0],
                [827, 562, 0], [883, 482, 0], [820, 482, 0], [720, 482, 0], [916, 392, 90],
                [916, 324, 90], [734, 320, 90], [555, 482, 0], [567, 392, 90], [476, 392, 0],
                [476, 293, 90], [481, 327, 0], [408, 284, 0], [849, 323, 90], [791, 323, 90],
                [698, 319, 0], [762, 253, 0], [690, 253, 0], [590, 253, 0], [920, 410, 0],
                [630, 205, 90], [630, 150, 90], [598, 186, 0], [1045, 495, 0], [1045, 550, 90],
                [980, 410, 0], [1040, 140, 90], [1040, 240, 90], [1045, 500, 90], [33, 650, 0],
                [133, 650, 0], [320, 650, 0], [420, 650, 0], [520, 650, 0], [720, 650, 0],
                [785, 650, 0]
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
                [817, 554, 0], [33, 650, 0], [133, 650, 0], [320, 650, 0], [420, 650, 0],
                [720, 650, 0], [785, 650, 0], [985, 650, 0], [1045, 650, 0], [1060, 143, 90],
                [1060, 233, 90], [1060, 400, 90], [1060, 500, 90]
            ],
            [
                [130, 262, 0], [230, 262, 0], [225, 162, 90], [225, 262, 90],
                [480, 262, 0], [580, 262, 0], [575, 162, 90], [575, 262, 90],
                [780, 262, 0], [880, 262, 0], [875, 162, 90], [875, 262, 90],
                [130, 562, 0], [230, 562, 0], [225, 462, 90], [225, 562, 90],
                [480, 562, 0], [580, 562, 0], [575, 462, 90], [575, 562, 90],
                [780, 562, 0], [880, 562, 0], [875, 462, 90], [875, 562, 90]
            ]
        ];
        this._ballBoxPos = [10, 10];
        this._allInnerBg = [];
        this._gameStuffPosition = [];
        this._allGifts = [];
        this._speedBox = 2;
        this._visualRange = 90;
        this._GSInnerX = 128; // game screen inner x
        this._GSInnerY = 115; // game screen inner y
        this._rowM = 320; // row matrix
        this._colM = 558; // calumn matrix
        this._moveBoxSize = 2; // goleminata na nevidimata kutijka v PX, po koqto se dviji top4eto
        this._ballBox = 10;
        this._timeStop = false;
        this._ballMoveStarted = false;
        this._showMazePapyrus = false;
        this._showExitTile = false;
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
        this._allInnerBg.push(this._innerBg1);
        //----------------------------------------------
        //------------------innerBg2--------------------
        this._innerBg2 = PIXI.Sprite.fromImage(sysData.innerBg2.url);
        this._innerBg2.visible = false;
        this._allInnerBg.push(this._innerBg2);
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
        this._coin = new AnimationTiles("coin", 45, 45, 8);
        this._coin.startAnim();
        this._coin.sprite.name = "coin";
        this._allGifts.push(this._coin.sprite);
        //----------------------------------------------
        //-------------------compass--------------------
        this._compass = new AnimationTiles("compass", 45, 45, 10);
        this._compass.startAnim();
        this._compass.sprite.name = "compass";
        this._allGifts.push(this._compass.sprite);
        //----------------------------------------------
        //---------------------exit---------------------
        this._exit = new AnimationTiles("exit", 45, 45, 13);
        this._exit.startAnim();
        this._exit.sprite.name = "exit";
        this._allGifts.push(this._exit.sprite);
        //----------------------------------------------
        //------------------moneyCase-------------------
        this._moneyCase = new AnimationTiles("moneyCase", 45, 45, 8);
        this._moneyCase.startAnim();
        this._moneyCase.sprite.name = "moneyCase";
        this._allGifts.push(this._moneyCase.sprite);
        //----------------------------------------------
        //------------------tortoise--------------------
        this._tortoise = new AnimationTiles("tortoise", 45, 45, 10);
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
                _this._showExitTile = true;
                _this._fogC.removeChild(_this._exit.sprite);
                _this._rotateC.addChild(_this._exit.sprite);
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
        this._moneyAnim.scale.x = 1.5;
        this._moneyAnim.scale.y = 1.5;
        this._moneyAnim.animationSpeed = 0.4;
        this._cMain.addChild(this._moneyAnim);
    };
    GameView.prototype.orientation = function (value) {
        if (value) { // landscape
            this._rotateC.rotation = 0;
            this._rotateC.x = this._GSInnerX;
            this._rotateC.y = this._GSInnerY;
            this._background.visible = false;
            this._bgHeader.x = 1366 / 2;
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
            this._moneyAnim.x = 1366 / 2;
            this._moneyAnim.y = 768 - 290;
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
            this._moneyAnim.y = 1366 - 140 - 187 - 85;
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
        var coor = this._bigBall.getBounds();
        var bSize = this._moveBoxSize * this._ballBox;
        this._maskFog.clear();
        this._maskFog.beginFill(0xFFFFFF, 0.5); // landscape
        this._maskFog.drawCircle(coor.x + bSize, coor.y + bSize, this._visualRange);
        this._maskFog.endFill();
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
        var coor = this._bigBall.getBounds();
        var bSize = this._moveBoxSize * this._ballBox;
        this._maskFog.clear();
        this._maskFog.beginFill(0xFFFFFF, 0.5);
        this._maskFog.drawCircle(coor.x + bSize, coor.y + bSize, this._visualRange);
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
        this.chooseInnerBg();
        if (this._showMazePapyrus)
            this.hideMaze();
        if (this._showExitTile) {
            this._showExitTile = false;
            this._rotateC.removeChild(this._exit.sprite);
            this._fogC.addChild(this._exit.sprite);
        }
    };
    GameView.prototype.chooseInnerBg = function () {
        for (var i = 0; i < this._allInnerBg.length; i++) {
            this._allInnerBg[i].visible = false;
        }
        this._allInnerBg[Math.floor(Math.random() * this._allInnerBg.length)].visible = true;
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
        var x = (Math.floor(Math.random() * 800) + 280);
        var y = (Math.floor(Math.random() * 400) + 200);
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
                    this._rotateC.addChild(this._allGifts[i]);
                }
                setTimeout(function () {
                    for (var i = 0; i < _this._allGifts.length; i++) {
                        _this._rotateC.removeChild(_this._allGifts[i]);
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
        this._showMazePapyrus = true;
        for (var i = 0; i < this._allWalls.length; i++) {
            this._fogC.removeChild(this._allWalls[i].tile);
            this._allWalls[i].tile.alpha = 0.5;
            this._rotateC.addChild(this._allWalls[i].tile);
        }
    };
    GameView.prototype.hideMaze = function () {
        this._showMazePapyrus = false;
        for (var i = 0; i < this._allWalls.length; i++) {
            this._rotateC.removeChild(this._allWalls[i].tile);
            this._allWalls[i].tile.alpha = 1;
            this._fogC.addChild(this._allWalls[i].tile);
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
        var j = Math.floor(Math.random() * this._tilePizzleCoor.length);
        var i = 0;
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
        if (!MainController.LANDSCAPE) {
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
                    break;
            }
        }
        var coor = this._bigBall.getBounds();
        var bSize = this._moveBoxSize * this._ballBox;
        this._maskFog.clear();
        this._maskFog.beginFill(0xFFFFFF, 0.5); // landscape
        this._maskFog.drawCircle(coor.x + bSize, coor.y + bSize, this._visualRange);
        this._maskFog.endFill();
        this._bigBall.x = this._ballBoxPos[0] * this._moveBoxSize;
        this._bigBall.y = this._ballBoxPos[1] * this._moveBoxSize;
        this.checkHitGiftTiles();
        if (MainController.HAVE_SOUND && !this._ballMoveStarted) {
            this._ballMoveStarted = true;
            this._mBallSound = createjs.Sound.play("ballMove", { loop: -1 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFvTEUsa0JBQVksS0FBb0IsRUFBRSxlQUE4QjtRQUFoRSxpQkFrQkM7UUFuTU8sWUFBTyxHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxZQUFPLEdBQWlCLENBQUMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUMxRCxFQUFDLElBQUksRUFBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUMsb0NBQW9DLEVBQUM7WUFDekUsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyw4QkFBOEIsRUFBQztZQUN0RCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLDRCQUE0QixFQUFDO1lBQ25ELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsNEJBQTRCLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyx1Q0FBdUMsRUFBQztZQUNsRSxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUUsR0FBRyxFQUFDLHdDQUF3QyxFQUFDO1lBQ3BFLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBQyxzQ0FBc0MsRUFBQztZQUNyRSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLGtCQUFrQixFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUMsb0JBQW9CLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxvQ0FBb0MsRUFBQztZQUM1RCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQ3pELEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUMsbUNBQW1DLEVBQUM7WUFDM0QsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLHVCQUF1QixFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsb0JBQW9CLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFDLHdCQUF3QixFQUFDO1lBRS9DLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQyxDQUFDLENBQUM7UUE4QnhGLHVCQUFrQixHQUF1QixFQUFFLENBQUM7UUFDNUMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFDaEMsZ0JBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsb0JBQWUsR0FBTztZQUM1QjtnQkFDRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsSUFBSSxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNsRixDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDZDtZQUNEO2dCQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUNsQztZQUNEO2dCQUNFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNsRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDbEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNsRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNuRixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDbEQ7WUFDRDtnQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzdEO1NBQ0YsQ0FBQztRQUNNLGdCQUFXLEdBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUNwQyx1QkFBa0IsR0FBYyxFQUFFLENBQUM7UUFDbkMs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