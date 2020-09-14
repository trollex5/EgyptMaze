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
                [1060, 233, 90], [1060, 400, 90], [1060, 500, 90],
            ],
            [
                [130, 262, 0], [230, 262, 0], [225, 162, 90], [225, 262, 90],
                [480, 262, 0], [580, 262, 0], [575, 162, 90], [575, 262, 90],
                [780, 262, 0], [880, 262, 0], [875, 162, 90], [875, 262, 90],
                [130, 562, 0], [230, 562, 0], [225, 462, 90], [225, 562, 90],
                [480, 562, 0], [580, 562, 0], [575, 462, 90], [575, 562, 90],
                [780, 562, 0], [880, 562, 0], [875, 462, 90], [875, 562, 90],
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
        this._fogClear = false;
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
        //  console.log("createInterface ShopView");
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
                _this._fogC.removeChild(_this._exit.sprite);
                _this._innerC.addChild(_this._exit.sprite);
                _this._eyeOfRa.visible = false;
            }
        });
        this._innerC.addChild(this._eyeOfRa);
        //----------------------------------------------
        //------------------footSign--------------------
        this._footSign = PIXI.Sprite.fromImage(sysData.footSign.url);
        this._footSign.name = "footSign";
        this._footSign.anchor.set(0.5);
        this._footSign.visible = true;
        this._footSign.buttonMode = true;
        this._footSign.interactive = true;
        this._footSign.on('pointerdown', function () {
            if (!_this._btnPlay.status) {
                _this._fogClear = true;
                _this._footSign.visible = false;
            }
        });
        this._innerC.addChild(this._footSign);
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
            "eyeOfRa": this._eyeOfRa,
            "footSign": this._footSign
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
        this._footSign.visible = false;
        this._fogClear = false;
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
        var x = (Math.floor(Math.random() * 800) + 180);
        var y = (Math.floor(Math.random() * 400) + 100);
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
        if (!this._fogClear)
            this._maskFog.clear();
        this._maskFog.beginFill(0xFFFFFF, 0.5);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVZpZXcxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvR2FtZVZpZXcxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQXFMRSxrQkFBWSxLQUFvQixFQUFFLGVBQThCO1FBQWhFLGlCQWtCQztRQXBNTyxZQUFPLEdBQWtCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLFlBQU8sR0FBaUIsQ0FBQyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzFELEVBQUMsSUFBSSxFQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBQyxvQ0FBb0MsRUFBQztZQUN6RSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLDhCQUE4QixFQUFDO1lBQ3RELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsNEJBQTRCLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyw0QkFBNEIsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLHVDQUF1QyxFQUFDO1lBQ2xFLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUMsd0NBQXdDLEVBQUM7WUFDcEUsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFDLHNDQUFzQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsa0JBQWtCLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLG9DQUFvQyxFQUFDO1lBQzVELEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDekQsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxtQ0FBbUMsRUFBQztZQUMzRCxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLG9CQUFvQixFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsdUJBQXVCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUN2QyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLG9CQUFvQixFQUFDO1lBQzVDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsd0JBQXdCLEVBQUM7WUFFL0MsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzdELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUMsa0NBQWtDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDLENBQUMsQ0FBQztRQStCeEYsdUJBQWtCLEdBQXVCLEVBQUUsQ0FBQztRQUM1QyxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUNoQyxnQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1QixvQkFBZSxHQUFPO1lBQzVCO2dCQUNFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxJQUFJLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNkO1lBQ0Q7Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDaEYsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQ2xDO1lBQ0Q7Z0JBQ0UsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNsRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDbEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQ25GLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUNsRDtZQUNEO2dCQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7Z0JBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDN0Q7U0FDRixDQUFDO1FBQ00sZ0JBQVcsR0FBaUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsZ0JBQVcsR0FBc0IsRUFBRSxDQUFDO1FBQ3BDLHVCQUFrQixHQUFjLEVBQUUsQ0FBQztRQUNu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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztnQkFDeEYsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZO29CQUN0RixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO2dCQUVoSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZO29CQUM5SCxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQ3RGLENBQUMsQ0FBQyxHQUFH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QkFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO29CQUNsQyxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7d0JBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQzVMO2dCQUNELElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQztvQkFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBRVIsS0FBSyxJQUFJO2dCQUNDLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7b0JBQ2xDLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDekw7Z0JBQ0QsSUFBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDO29CQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFFUixLQUFLLE9BQU87Z0JBQ0YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztvQkFDbEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDck07Z0JBQ0QsSUFBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDO29CQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFFUixLQUFLLE1BQU07Z0JBQ0MsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztvQkFDbEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDaE07Z0JBQ0QsSUFBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsR0FBQyxDQUFDO29CQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE1BQU07U0FDVDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU8sMkJBQVEsR0FBaEIsVUFBaUIsS0FBWSxFQUFFLEtBQVU7UUFDdkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFsL0JELElBay9CQyJ9