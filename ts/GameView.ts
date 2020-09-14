class GameView {

  private _cMain:PIXI.Container;
  private _innerC:PIXI.Container = new PIXI.Container();
  private _images:Array<object> = [{name:'bg_header', url:'pics/1366x768/game_header_bg.png'},
                                   {name:'backgroundgamePortrait', url:'pics/1366x768/bg_game_portrait.png'},
                                   {name:'gameFrame', url:'pics/1366x768/game_frame.png'},
                                   {name:'innerBg1', url:'pics/1366x768/innerBg1.png'},
                                   {name:'innerBg2', url:'pics/1366x768/innerBg2.png'},
                                   {name:'stuffBarLeft', url:'pics/1366x768/stuff_bar_left_game.png'},
                                   {name:'stuffBarRight', url:'pics/1366x768/stuff_bar_right_game.png'},
                                   {name:'stuffBarPortreat', url:'pics/1366x768/stuff_bar_portrait.png'},
                                   {name:'bigBall', url:'pics/BigBall.png'},
                                   {name:'stoneLine', url:'pics/stoneLine.png'},
                                   {name:'moneySign', url:'pics/1366x768/dollar_sign_game.png'},
                                   {name:'timeSign', url:'pics/1366x768/time_sign_game.png'},
                                   {name:'levelSign', url:'pics/1366x768/level_sign_game.png'},
                                   {name:'coin', url:'pics/coin_anim.png'},
                                   {name:'compass', url:'pics/compass_anim.png'},
                                   {name:'exit', url:'pics/exit_anim.png'},
                                   {name:'moneyCase', url:'pics/case_anim.png'},
                                   {name:'tortoise', url:'pics/tortoies_anim.png'},

                                   {name:'moneyAnim000', url:'pics/moneyAnim/bigWinAnim000.png'},
                                   {name:'moneyAnim001', url:'pics/moneyAnim/bigWinAnim001.png'},
                                   {name:'moneyAnim002', url:'pics/moneyAnim/bigWinAnim002.png'},
                                   {name:'moneyAnim003', url:'pics/moneyAnim/bigWinAnim003.png'},
                                   {name:'moneyAnim004', url:'pics/moneyAnim/bigWinAnim004.png'},
                                   {name:'moneyAnim005', url:'pics/moneyAnim/bigWinAnim005.png'},
                                   {name:'moneyAnim006', url:'pics/moneyAnim/bigWinAnim006.png'},
                                   {name:'moneyAnim007', url:'pics/moneyAnim/bigWinAnim007.png'},
                                   {name:'moneyAnim008', url:'pics/moneyAnim/bigWinAnim008.png'},
                                   {name:'moneyAnim009', url:'pics/moneyAnim/bigWinAnim009.png'},
                                   {name:'moneyAnim010', url:'pics/moneyAnim/bigWinAnim010.png'},
                                   {name:'moneyAnim011', url:'pics/moneyAnim/bigWinAnim011.png'},
                                   {name:'moneyAnim012', url:'pics/moneyAnim/bigWinAnim012.png'},
                                   {name:'moneyAnim013', url:'pics/moneyAnim/bigWinAnim013.png'},
                                   {name:'moneyAnim014', url:'pics/moneyAnim/bigWinAnim014.png'},
                                   {name:'moneyAnim015', url:'pics/moneyAnim/bigWinAnim015.png'},
                                   {name:'moneyAnim016', url:'pics/moneyAnim/bigWinAnim016.png'},
                                   {name:'moneyAnim017', url:'pics/moneyAnim/bigWinAnim017.png'},
                                   {name:'moneyAnim018', url:'pics/moneyAnim/bigWinAnim018.png'},
                                   {name:'moneyAnim019', url:'pics/moneyAnim/bigWinAnim019.png'},
                                   {name:'moneyAnim020', url:'pics/moneyAnim/bigWinAnim020.png'},
                                   {name:'moneyAnim021', url:'pics/moneyAnim/bigWinAnim021.png'},
                                   {name:'moneyAnim022', url:'pics/moneyAnim/bigWinAnim022.png'},
                                   {name:'moneyAnim023', url:'pics/moneyAnim/bigWinAnim023.png'},
                                   {name:'moneyAnim024', url:'pics/moneyAnim/bigWinAnim024.png'},
                                   {name:'moneyAnim025', url:'pics/moneyAnim/bigWinAnim025.png'},
                                   {name:'moneyAnim026', url:'pics/moneyAnim/bigWinAnim026.png'},
                                   {name:'moneyAnim027', url:'pics/moneyAnim/bigWinAnim027.png'},
                                   {name:'moneyAnim028', url:'pics/moneyAnim/bigWinAnim028.png'},
                                   {name:'moneyAnim029', url:'pics/moneyAnim/bigWinAnim029.png'},
                                   {name:'moneyAnim030', url:'pics/moneyAnim/bigWinAnim030.png'},
                                   {name:'moneyAnim031', url:'pics/moneyAnim/bigWinAnim031.png'},
                                   {name:'moneyAnim032', url:'pics/moneyAnim/bigWinAnim032.png'},
                                   {name:'moneyAnim033', url:'pics/moneyAnim/bigWinAnim033.png'},
                                   {name:'moneyAnim034', url:'pics/moneyAnim/bigWinAnim034.png'}];
  private _click:string;
  private _bgHeader:PIXI.Sprite;
  private _background:PIXI.Sprite;
  private _backgroundPortrait:PIXI.Texture;
  private _gameframe:PIXI.Sprite;
  private _innerBg1:PIXI.Sprite;
  private _innerBg2:PIXI.Sprite;
  private _stuffBarLeft:PIXI.Sprite;
  private _stuffBarRight:PIXI.Sprite;
  private _stuffBarPortreat:PIXI.Sprite;
  private _bigBall:PIXI.Sprite;
  private _btnPlay:Button;
  private _moneySign:PIXI.Sprite;
  private _money:PIXI.Text;
  private _levelSign:PIXI.Sprite;
  private _level:PIXI.Text;
  private _timeSign:PIXI.Sprite;
  private _time:PIXI.Text;
  private _coin:AnimationTiles;
  private _compass:AnimationTiles;
  private _exit:AnimationTiles;
  private _moneyCase:AnimationTiles;
  private _papyrus:AnimationTiles;
  private _scarab:AnimationTiles;
  private _shoes:AnimationTiles;
  private _tortoise:AnimationTiles;
  private _woodTorch:AnimationTiles;
  private _eyeOfRa:PIXI.Sprite;
  private _moneyAnim:PIXI.extras.AnimatedSprite;
  private _moneyAnimTextures:Array<PIXI.Texture> = [];
  private _allWalls:Array<StoneTile> = [];
  private _moveMatrix:Array<any> = [];
  private _tilePizzleCoor:any = [
    [
      [96, 141, 0],   [117, 141, 0],   [207, 149, 90],  [211, 206, 0],   [955, 650, 0],
      [303, 206, 0],  [334, 145, 90],  [305, 140, 0],   [458, 147, 90],  [525, 91, 90],
      [752, 91, 90],  [757, 143, 0],   [825, 143, 0],   [916, 148, 90],  [33, 245, 0],
      [91, 317, 0],   [91, 325, 90],   [158, 318, 90],  [92, 405, 90],   [100, 494, 0],
      [201, 475, 90], [211, 565, 0],   [33, 560, 0],    [271, 325, 90],  [272, 404, 90],
      [276, 355, 0],  [236, 382, 0],   [277, 450, 0],   [402, 425, 90],  [381, 515, 0],
      [471, 472, 90], [481, 562, 0],   [581, 562, 0],   [681, 562, 0],   [781, 562, 0],
      [827, 562, 0],  [883, 482, 0],   [820, 482, 0],   [720, 482, 0],   [916, 392, 90],
      [916, 324, 90], [734, 320, 90],  [555, 482, 0],   [567, 392, 90],  [476, 392, 0],
      [476, 293, 90], [481, 327, 0],   [408, 284, 0],   [849, 323, 90],  [791, 323, 90],
      [698, 319, 0],  [762, 253, 0],   [690, 253, 0],   [590, 253, 0],   [920,  410, 0],
      [630, 205, 90], [630, 150, 90],  [598, 186, 0],   [1045,  495, 0], [1045, 550, 90],
      [980,  410, 0], [1040, 140, 90], [1040, 240, 90], [1045, 500, 90], [33, 650, 0],
      [133, 650, 0],  [320, 650, 0],   [420, 650, 0],   [520, 650, 0],   [720, 650, 0],
      [785, 650, 0]
    ],
    [
      [135, 140, 0],  [234, 140, 0],  [1045, 140, 0],   [432, 140, 0],   [531, 140, 0],
      [630, 140, 0],  [730, 140, 0],  [827, 140, 0],   [135, 141, 90],  [275, 141, 90],
      [135, 211, 90], [275, 231, 0],  [373, 231, 0],   [472, 231, 0],   [572, 231, 0],
      [672, 209, 90], [754, 253, 0],  [916, 207, 90],  [135, 310, 90],  [237, 318, 0],
      [370, 293, 90], [370, 325, 90], [476, 293, 90],  [672, 286, 90],  [754, 320, 90],
      [916, 305, 90], [136, 400, 0],  [181, 400, 0],   [272, 404, 90],  [476, 392, 0],
      [672, 370, 90], [916, 404, 90], [38, 562, 0],    [112, 471, 0],   [133, 470, 90],
      [211, 562, 0],  [272, 404, 90], [272, 470, 90],  [309, 562, 0],   [381, 483, 0],
      [408, 562, 0],  [427, 465, 90], [506, 562, 0],   [574, 482, 0],   [672, 469, 90],
      [672, 562, 0],  [731, 562, 0],  [827, 562, 0],   [758, 482, 0],   [820, 482, 0],
      [915, 472, 90], [38,  640, 0],  [138,  640, 0],  [238,  640, 0],  [338,  640, 0],
      [510,  640, 0], [610,  640, 0], [710,  640, 0],  [810,  640, 0],  [910,  640, 0],
      [990,  640, 0], [990,  562, 0], [1045,  495, 0], [920,  430, 0],  [980,  430, 0],
      [1040, 140, 90],  [1040, 240, 90]
    ],
    [
      [92, 262, 90],   [160, 92, 90],   [160, 332, 90],  [240, 149, 90],  [381, 211, 90],
      [238, 275, 90],  [307, 211, 90],  [307, 275, 90],  [3000, 210, 90], [381, 272, 90],
      [455, 310, 90],  [455, 212, 90],  [546, 212, 90],  [546, 310, 90],  [546, 400, 90],
      [615, 208, 90],  [615, 266, 90],  [615, 429, 90],  [615, 528, 90],  [695, 269, 90],
      [763, 269, 90],  [830, 269, 90],  [918, 268, 90],  [240, 142, 0],   [267, 142, 0],
      [363, 142, 0],   [460, 142, 0],   [456, 207, 0],   [593, 142, 0],   [689, 142, 0],
      [889, 142, 0],   [615, 200, 0],   [773, 200, 0],   [828, 200, 0],   [695, 263, 0],
      [827, 263, 0],   [39, 425, 0],    [139, 425, 0],   [239, 425, 0],   [298, 425, 0],
      [684, 422, 0],   [890, 422, 0],   [39, 493, 0],    [262, 493, 0],   [362, 492, 0],
      [456, 492, 0],   [621, 488, 0],   [791, 487, 0],   [890, 487, 0],   [110, 559, 0],
      [210, 559, 0],   [309, 559, 0],   [459, 559, 0],   [620, 554, 0],   [718, 554, 0],
      [817, 554, 0],   [33, 650, 0],    [133, 650, 0],   [320, 650, 0],   [420, 650, 0],
      [720, 650, 0],   [785, 650, 0],   [985, 650, 0],   [1045, 650, 0],  [1060, 143, 90],
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
  private _ballBoxPos:Array<number> = [10, 10];
  private _allInnerBg:Array<PIXI.Sprite> = [];
  private _gameStuffPosition:Array<any> = [];
  private _allGifts:Array<PIXI.Sprite> = [];
  private _gameTime:number;
  private _speedBox:number = 2;
  private _visualRange:number = 90;
  private _GSInnerX:number = 128;  // game screen inner x
  private _GSInnerY:number = 115;  // game screen inner y
  private _rowM:number = 320;  // row matrix
  private _colM:number = 558;  // calumn matrix
  private _moveBoxSize:number = 2;  // goleminata na nevidimata kutijka v PX, po koqto se dviji top4eto
  private _ballBox:number = 10;
  private _timeStop:boolean = false;
  private _ballMoveStarted:boolean = false;
  private _showMazePapyrus:boolean = false;
  private _showExitTile:boolean = false;
  private _mBallSound:any;
  private _allStuff:object;
  private _fogC:PIXI.Container = new PIXI.Container();
  private _fog:PIXI.Graphics;
  private _maskFog:PIXI.Graphics;
  private _ballTimer:any;
  private _moneyTimer:any;
  private _gameTimer:any;
  private _dispachtElement:HTMLDivElement;
  private _clientTouchData:object = {};

  private _rotateC:PIXI.Container = new PIXI.Container();


  constructor(cMain:PIXI.Container, dispachtElement:HTMLDivElement) {
    this._cMain = cMain;
    this._dispachtElement = dispachtElement;
    this._innerC.x = 0;
    this._innerC.y = 0;
    this._innerC.name = "innerC";
    this._cMain.addChild(this._innerC);
    this._cMain.addChild(this._rotateC);

    if(MainController.IS_MOBILE){
      this._innerC.interactive = true;
      this._innerC.on('pointerdown', (e:Event)=>{this.touchMoveBall(e);});
      this._innerC.on('pointerup', ()=>{this.touchEnd();});
      this._clientTouchData = {'clickX':0,
                               'clickY':0,
                               'ballX':0,
                               'ballY':0};
    }
  }

  public createInterface():void {
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
    this._stuffBarRight.x = 1366-113;
    this._stuffBarRight.y = 100;
    this._innerC.addChild(this._stuffBarRight);
    //----------------------------------------------
    //--------------stuffBarPortreat----------------
    this._stuffBarPortreat = PIXI.Sprite.fromImage(sysData.stuffBarPortreat.url);
    this._stuffBarPortreat.x = 0;
    this._stuffBarPortreat.y = 1366-122;
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
    this._money = new PIXI.Text('10',
                            {fontFamily : 'Arial',
                             fontSize: 36,
                             fill : 0xffffff,
                             fontWeight:'bold',
                             align : 'center'});
    this._money.anchor.set(0.5, 0);
    this._innerC.addChild(this._money);
    //----------------------------------------------
    //------------------levelSign-------------------
    this._levelSign = PIXI.Sprite.fromImage(sysData.levelSign.url);
    this._innerC.addChild(this._levelSign);
    //----------------------------------------------
    //-------------------level----------------------
    this._level = new PIXI.Text('1',
                            {fontFamily : 'Arial',
                             fontSize: 36,
                             fill : 0xffffff,
                             fontWeight:'bold',
                             align : 'center'});
    this._level.anchor.set(0.5, 0);
    this._innerC.addChild(this._level);
    //----------------------------------------------
    //-------------------timeSign-------------------
    this._timeSign = PIXI.Sprite.fromImage(sysData.timeSign.url);
    this._innerC.addChild(this._timeSign);
    //----------------------------------------------
    //-------------------time-----------------------
    this._time = new PIXI.Text('60',
                            {fontFamily : 'Arial',
                             fontSize: 36,
                             fill : '0xffffff',
                             fontWeight:'bold',
                             align : 'center'});
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
    this._papyrus.sprite.on('pointerdown', ()=>{
      //this.dispatch("papyrusClicked");
      if(!this._btnPlay.status){
        this.showMaze();
        this._papyrus.sprite.visible = false;
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
    this._scarab.sprite.on('pointerdown', ()=>{
      //this.dispatch("scarabClicked");
      if(!this._btnPlay.status){
        this.scarabWasClicked();
        this._scarab.sprite.visible = false;
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
    this._shoes.sprite.on('pointerdown', ()=>{
      //this.dispatch("shoesClicked");
      if(!this._btnPlay.status){
        this.shoesWasClicked();
        this._shoes.sprite.visible = false;
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
    this._woodTorch.sprite.on('pointerdown', ()=>{
      //this.dispatch("woodTorchClicked");
      if(!this._btnPlay.status){
        this.woodTorchWasClicked();
        this._woodTorch.sprite.visible = false;
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
    this._eyeOfRa.on('pointerdown', ()=>{
      //this.dispatch("eyeOfRaClicked");
      if(!this._btnPlay.status){
        this._showExitTile = true;
        this._fogC.removeChild(this._exit.sprite);
        this._rotateC.addChild(this._exit.sprite);
        this._eyeOfRa.visible = false;
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
    this._innerC.addChild(this._gameframe);  // _cMain
    //----------------------------------------------
    this._allStuff = {"papyrus":this._papyrus.sprite,
                      "scarab":this._scarab.sprite,
                      "shoes":this._shoes.sprite,
                      "woodTorch":this._woodTorch.sprite,
                      "eyeOfRa":this._eyeOfRa
                     };
    this.makeLevelPazzle();
    for(let i:number = 0; i < 35; i++){
      let name = (i < 10)?'moneyAnim00'+i : 'moneyAnim0'+i;
      let texture:PIXI.Texture = PIXI.Texture.from(sysData[name].url);
      this._moneyAnimTextures.push(texture);
    }
    this._moneyAnim = new PIXI.extras.AnimatedSprite(this._moneyAnimTextures);
    this._moneyAnim.visible = false;
    this._moneyAnim.anchor.set(0.5);
    this._moneyAnim.scale.x = 1.5;
    this._moneyAnim.scale.y = 1.5;
    this._moneyAnim.animationSpeed = 0.4;
    this._cMain.addChild(this._moneyAnim);
  }

  public orientation(value:boolean) {
    if(value) {  // landscape
      this._rotateC.rotation = 0;
      this._rotateC.x = this._GSInnerX;
      this._rotateC.y = this._GSInnerY;
      this._background.visible = false;
      this._bgHeader.x = 1366/2;
      this._gameframe.x = 1366/2;
      this._gameframe.y = 768/2 + 50;
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
      this._moneyAnim.x = 1366/2;
      this._moneyAnim.y = 768-290;
      for(let i:number = 0; i < this._allGifts.length; i++) {
        this._allGifts[i].rotation = 0;
      }
      this._gameStuffPosition = [[55, 170, 0], [55, 240, 0], [55, 310, 0], [55, 385, 0], [55, 450, 0], [55, 530, 0]];
      let j:number = 0;
      for (let i in this._allStuff) {
        this._allStuff[i].scale.x = 1;
        this._allStuff[i].scale.y = 1;
        this._allStuff[i].x = this._gameStuffPosition[j][0];
        this._allStuff[i].y = this._gameStuffPosition[j][1];
        j++;
      }
    } else {  // portrait
      this._rotateC.rotation = Math.PI * 2 * 0.250;
      this._rotateC.x = 535 + 57 + 110;
      this._rotateC.y = 117;
      this._background.visible = true;
      this._bgHeader.x = 768/2;
      this._stuffBarLeft.visible = false;
      this._stuffBarRight.visible = false;
      this._stuffBarPortreat.visible = true;
      this._gameframe.x = 768/2;
      this._gameframe.y = 1366/2 - 10;
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
      this._moneyAnim.x = 768/2;
      this._moneyAnim.y = 1366-140-187-85;
      for(let i:number = 0; i < this._allGifts.length; i++) {
        this._allGifts[i].rotation = -(Math.PI * 2 * 0.250);
      }
      this._gameStuffPosition = [[35, 1280, 0], [75, 1280, 0], [115, 1280, 0], [35, 1330, 0], [75, 1330, 0], [115, 1330, 0]];
      let j:number = 0;
      for (let i in this._allStuff) {
        this._allStuff[i].scale.x = 0.7;
        this._allStuff[i].scale.y = 0.7;
        this._allStuff[i].x = this._gameStuffPosition[j][0];
        this._allStuff[i].y = this._gameStuffPosition[j][1];
        j++;
      }
    }

    let coor = this._bigBall.getBounds();
    let bSize = this._moveBoxSize * this._ballBox;
    this._maskFog.clear();
    this._maskFog.beginFill(0xFFFFFF, 0.5);    // landscape
    this._maskFog.drawCircle(coor.x + bSize, coor.y + bSize, this._visualRange);
    this._maskFog.endFill();
  }

  public restoreInit():void {
    this._papyrus.sprite.visible = false;
    this._scarab.sprite.visible = false;
    this._shoes.sprite.visible = false;
    this._woodTorch.sprite.visible = false;
    this._eyeOfRa.visible = false;
    this._bigBall.scale.x = 1;
    this._bigBall.scale.y = 1;
    this._ballBoxPos[0] = 10;
    this._ballBoxPos[1] = 10;
    this._bigBall.x = this._ballBoxPos[0]*this._moveBoxSize;
    this._bigBall.y = this._ballBoxPos[1]*this._moveBoxSize;
    let coor = this._bigBall.getBounds();
    let bSize = this._moveBoxSize * this._ballBox;
    this._maskFog.clear();
    this._maskFog.beginFill(0xFFFFFF, 0.5);
    this._maskFog.drawCircle(coor.x + bSize, coor.y + bSize, this._visualRange);
    this._maskFog.endFill();
    this._speedBox = 2;
    this._ballBox = 10;
    this._time.style.fill = "#ffffff";

    for(let i:number = 0; i < this._gameStuffPosition.length; i++){
      this._gameStuffPosition[i][2] = 0;
    }

    for(let i:number = 0; i < this._allGifts.length; i++){
      if(this._allGifts[i].parent.name === "innerC"){
        this._innerC.removeChild(this._allGifts[i]);
        this._fogC.addChild(this._allGifts[i]);
        this._allGifts[i].visible = true;
      }
      this._allGifts[i].visible = true;
    }
    this.shuffleGiftPosition();
    this.chooseInnerBg();
    if(this._showMazePapyrus) this.hideMaze();
    if(this._showExitTile){
      this._showExitTile = false;
      this._rotateC.removeChild(this._exit.sprite);
      this._fogC.addChild(this._exit.sprite);
    }
  }

  private chooseInnerBg() {
    for(let i:number = 0; i < this._allInnerBg.length; i++) {
      this._allInnerBg[i].visible = false;
    }
    this._allInnerBg[Math.floor(Math.random() * this._allInnerBg.length)].visible = true;
  }

  public startGameTime():void {
    this._timeStop = false;
    this._gameTimer = setInterval(()=>{
      this.setTime(--this._gameTime);
      if(this._gameTime === 0){
        this.stopGameTime();
        clearInterval(this._ballTimer);
        this.dispatch("timeOver");
      }
      if(this._gameTime < 6) {
        if(MainController.HAVE_SOUND)  createjs.Sound.play('timeIsUpSound');
        this._time.style.fill = "#d6172d";
      }
    }, 1000);
  }

  private stopGameTime():void {
    clearInterval(this._gameTimer);
    this._timeStop = true;
  }

  public startStuff(stuffs:Array<string>):void {
    for(let i:number = 0; i < stuffs.length; i++){
      let pos:Array<number> = this.getStuffPos();
      this._allStuff[stuffs[i]].x = pos[0];
      this._allStuff[stuffs[i]].y = pos[1];
      this._allStuff[stuffs[i]].visible = true;
    }
  }

  private shuffleGiftPosition():void {
    //setInterval(()=>{
      let saveX:number = 0, saveY:number = 0;
      for (let i:number = 0; i < this._allGifts.length; i++) {
        let newPos:Array<number> = this.calcPos();
        if(newPos[0] == saveX && newPos[1] == saveY) {
          i--;
        } else {
          saveX = newPos[0];
          saveY = newPos[1];
          this._allGifts[i].x = saveX;
          this._allGifts[i].y = saveY;
        }
      }
    //}, 3000);
  }

  private calcPos():Array<number> {
    let x:number = (Math.floor(Math.random() * 800) + 280);
    let y:number = (Math.floor(Math.random() * 400) + 200);
    //console.log("init coordinteX, init coordinteY", x, y);
    return [x, y];
  };

  private checkHitGiftTiles():void {
    let ballRec:any = this._bigBall.getBounds();

    for(let i:number = 0; i < this._allGifts.length; i++){
      let giftRec:any = this._allGifts[i].getBounds();
      if(ballRec.y < (giftRec.y+giftRec.height) && (ballRec.y+ballRec.height) > giftRec.y){
        if(ballRec.x > giftRec.x && ballRec.x < (giftRec.x+giftRec.width) ||
          ballRec.x < giftRec.x && (ballRec.x+ballRec.width) > giftRec.x){

          console.log("======HIT======", this._allGifts[i].name);
          this._allGifts[i].visible = false;
          this._allGifts[i].x = 0;
          this._allGifts[i].y = 0;
           if(MainController.HAVE_SOUND) createjs.Sound.play('getStuff');
          this.getStuff(this._allGifts[i].name);
        }
      }
    }
  }

  private getStuff(name:string | null):void {
    switch(name){
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
            setTimeout(()=>{
              this._speedBox = 2;
            }, 6000);
      break;

      case 'compass':
            for(let i:number = 0; i < this._allGifts.length; i++){
              this._fogC.removeChild(this._allGifts[i]);
              this._rotateC.addChild(this._allGifts[i]);
            }
            setTimeout(()=>{
              for(let i:number = 0; i < this._allGifts.length; i++){
                this._rotateC.removeChild(this._allGifts[i]);
                this._fogC.addChild(this._allGifts[i]);
              }
            }, 1500);
      break;
    }
  }

  public startMoneyCaseAnim(value:number):void {
    this._moneyAnim.play();
    this._moneyAnim.visible = true;
    let delay:number = value;
    this.stopGameTime();
    this._moneyTimer = setInterval(()=>{
      let m:number = parseInt(this._money.text);
      this._money.text = (m+=1).toString();
      if(--value === 0){
        clearInterval(this._moneyTimer);
        this._moneyAnim.visible = false;
        this._moneyAnim.stop();
        this.startGameTime();
      }
    }, 40);
  }

  private getStuffPos():Array<number> {
    for(let i:number = 0; i < this._gameStuffPosition.length; i++){
      if(this._gameStuffPosition[i][2] === 0){
        this._gameStuffPosition[i][2] = 1;
        return [ this._gameStuffPosition[i][0], this._gameStuffPosition[i][1] ];
      }
    }
    throw new Error("!!!***Insufficient size of array _gameStuffPosition***!!!");
  }

  public setMoney(value:number):void {
    if(value < 0){
      console.log("setMoney - GameView");
      throw new Error("!!!***Invalid value of Money***!!!");
    } else{
      this._money.text = value.toString();
    }
  }

  public setLevel(value:number):void {
    if(value < 1){
      console.log("setLevel - GameView");
      throw new Error("!!!***Invalid value of Level***!!!");
    } else{
      this._level.text = value.toString();
    }
  }

  public setTime(value:number):void {
    if(value >= 0){
      this._gameTime = value;
      this._time.text = this._gameTime.toString();
    } else{
      console.log("setTime - GameView");
      throw new Error("!!!***Invalid value of Time***!!!");
    }
  }

  private showMaze():void {
    this._showMazePapyrus = true;
    for(let i = 0; i < this._allWalls.length; i++){
      this._fogC.removeChild(this._allWalls[i].tile);
      this._allWalls[i].tile.alpha = 0.5;
      this._rotateC.addChild(this._allWalls[i].tile);
    }
  }

  private hideMaze():void {
    this._showMazePapyrus = false;
    for(let i = 0; i < this._allWalls.length; i++){
      this._rotateC.removeChild(this._allWalls[i].tile);
      this._allWalls[i].tile.alpha = 1;
      this._fogC.addChild(this._allWalls[i].tile);
    }
  }

  private scarabWasClicked():void {
    this._bigBall.scale.x = 0.5;
    this._bigBall.scale.y = 0.5;
    this._speedBox = 3;
    this._ballBox = 5;
    setTimeout(()=>{
      this._bigBall.scale.x = 1;
      this._bigBall.scale.y = 1;
      this._speedBox = 2;
      this._ballBox = 10;
    }, 15000);
  }

  private shoesWasClicked():void {
    this._speedBox = 3;
    setTimeout(()=>{
      this._speedBox = 2;
    }, 10000);
  }

  private woodTorchWasClicked():void {
    this._visualRange = 120;
    this._maskFog.beginFill(0xFFFFFF, 0.5);
    this._maskFog.drawCircle(this._ballBoxPos[0]*this._moveBoxSize + this._GSInnerX, this._ballBoxPos[1]*this._moveBoxSize + this._GSInnerY, this._visualRange);
    this._maskFog.endFill();
    setTimeout(()=>{
      this._visualRange = 90;
    }, 12000);
  }

  private checkColision(x:number, y:number, j:number):number {
    let orientationX:number, orientationY:number;
    for(let i:number = 0; i < this._tilePizzleCoor[j].length; i++){
      if(this._tilePizzleCoor[j][i][2] == 0){
        orientationX = 100;
        orientationY = 10;
      } else{
        orientationX = 10;
        orientationY = 100;
      }

      if((x > this._tilePizzleCoor[j][i][0] && x < this._tilePizzleCoor[j][i][0] + orientationX &&
         y >= this._tilePizzleCoor[j][i][1] && y <= this._tilePizzleCoor[j][i][1] + orientationY) ||
         (x > this._tilePizzleCoor[j][i][0] && x < this._tilePizzleCoor[j][i][0] + orientationX &&
         y + this._moveBoxSize >= this._tilePizzleCoor[j][i][1] && y + this._moveBoxSize <= this._tilePizzleCoor[j][i][1] + orientationY) ||

         (x + this._moveBoxSize > this._tilePizzleCoor[j][i][0] && x + this._moveBoxSize < this._tilePizzleCoor[j][i][0] + orientationX &&
         y > this._tilePizzleCoor[j][i][1] && y < this._tilePizzleCoor[j][i][1] + orientationY) ||
         (x + this._moveBoxSize > this._tilePizzleCoor[j][i][0] && x + this._moveBoxSize < this._tilePizzleCoor[j][i][0] + orientationX &&
         y + this._moveBoxSize > this._tilePizzleCoor[j][i][1] && y + this._moveBoxSize < this._tilePizzleCoor[j][i][1] + orientationY)
       ){
        return 0;
      }
    }
    return 1;
  }

  private makeLevelPazzle():void { // landscape
    let j:number = Math.floor(Math.random() * this._tilePizzleCoor.length);
    let i:number = 0;
    for(i = 0; i < this._tilePizzleCoor[j].length; i++){
      let tile = new StoneTile('stoneLine', 100, 10, (this._tilePizzleCoor[j][i][2] === 90?90:0));
      this._allWalls.push(tile);
      this._fogC.addChild(tile.tile);
    }
    this.setStoneWallPosition(33, 88, j);

    let chC:number;  // check colision
    for(i = 0; i < this._rowM; i++){   //  landscape
      let arr = [];
      this._moveMatrix.push(arr);
      for(let k = 0; k < this._colM; k++){
         chC = this.checkColision((k *this._moveBoxSize) +34/*34*/, (i *this._moveBoxSize) +88/*87*/, j);
        //if(k > 200) let bb = new TestBox(this._fogC, chC, (k *this._moveBoxSize), (i *this._moveBoxSize), 2, 2);
        this._moveMatrix[i].push(chC);
      }
    }
  }

  private setStoneWallPosition(ofsetX:number, ofsetY:number, j:number):void {
    for(let i:number = 0; i < this._allWalls.length; i++) {
      this._allWalls[i].setX(this._tilePizzleCoor[j][i][0] - ofsetX);
      this._allWalls[i].setY(this._tilePizzleCoor[j][i][1] - ofsetY);
    }
  }

  public playDisable(value:boolean):void {
    if(value) this._btnPlay.disable();
    else this._btnPlay.enable();
  }

  private touchMoveBall(e:Event):void {
    this._ballTimer = setInterval(()=>{
      if(!this._timeStop && (this._gameTime > 0)) {
        let ballRec:PIXI.Rectangle = this._bigBall.getBounds();
        this._clientTouchData['clickX'] = parseInt(e.data.global.x);
        this._clientTouchData['clickY'] = parseInt(e.data.global.y);
        this._clientTouchData['ballX'] = parseInt(ballRec.x);
        this._clientTouchData['ballY'] = parseInt(ballRec.y);
        this.touchStart();
      }
    }, 40);
  }

  private touchStart():void {
    if(this._clientTouchData['ballX'] < this._clientTouchData['clickX']){  // right
      if((this._clientTouchData['clickX'] - this._clientTouchData['ballX']) > 10) this.moveBall('right');
      if((this._clientTouchData['ballY'] - this._clientTouchData['clickY']) > 10 || (this._clientTouchData['ballY'] - this._clientTouchData['clickY']) < -10){
        if(this._clientTouchData['ballY'] > this._clientTouchData['clickY']) this.moveBall('up');
        else this.moveBall('down');
      }
    } else{  // left
      if((this._clientTouchData['ballX'] - this._clientTouchData['clickX']) > 10) this.moveBall('left');
      if((this._clientTouchData['ballY'] - this._clientTouchData['clickY']) > 10 || (this._clientTouchData['ballY'] - this._clientTouchData['clickY']) < -10){
        if(this._clientTouchData['ballY'] > this._clientTouchData['clickY']) this.moveBall('up');
        else this.moveBall('down');
      }
    }
  }

  private touchEnd():void {
    clearInterval(this._ballTimer);
    //console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKK", MainController.HAVE_SOUND, this._ballMoveStarted);
    if(MainController.HAVE_SOUND && this._ballMoveStarted){
      this._ballMoveStarted = false;
      this._mBallSound.stop("ballMove");
    }
  }

  public stopBallSound():void {
    if(MainController.HAVE_SOUND && this._ballMoveStarted){
      this._ballMoveStarted = false;
      this._mBallSound.stop("ballMove");
    }
  }

  public moveBall(key:string):void {
    if(!MainController.LANDSCAPE) {
      if(key == "left") key = "down";
      else if(key == "right") key = "up";
      else if(key == "down") key = "right";
      else key = "left";
    }

    if(this.hitTestObject(key) && !this._timeStop && (this._gameTime > 0)){
      switch(key){
          case 'left':
                this._ballBoxPos[0] = this._ballBoxPos[0]-=this._speedBox;
          break;

          case 'right':
                this._ballBoxPos[0] = this._ballBoxPos[0]+=this._speedBox;
          break;

          case 'up':
                this._ballBoxPos[1] = this._ballBoxPos[1]-=this._speedBox;
          break;

          case 'down':
                this._ballBoxPos[1] = this._ballBoxPos[1]+=this._speedBox;
          break;
        }
      }

      let coor = this._bigBall.getBounds();
      let bSize = this._moveBoxSize * this._ballBox;
      this._maskFog.clear();
      this._maskFog.beginFill(0xFFFFFF, 0.5);    // landscape
      this._maskFog.drawCircle(coor.x + bSize, coor.y + bSize, this._visualRange);
      this._maskFog.endFill();

      this._bigBall.x = this._ballBoxPos[0]*this._moveBoxSize;
      this._bigBall.y = this._ballBoxPos[1]*this._moveBoxSize;
      this.checkHitGiftTiles();
      if(MainController.HAVE_SOUND && !this._ballMoveStarted){
        this._ballMoveStarted = true;
        this._mBallSound = createjs.Sound.play("ballMove", {loop:-1});
      }
  }

  private hitTestObject(pos):number {
    let answer:number = 0;
    let j:number = 0, i:number = 0;
    switch (pos) {
      case 'left':
                for(i = 0; i < this._ballBox*2; i++){
                  if((this._ballBoxPos[0] - this._ballBox - this._speedBox)>0 && this._moveMatrix[(this._ballBoxPos[1] - this._ballBox)+ 1*i][this._ballBoxPos[0] - this._ballBox - this._speedBox] > 0) j++;
                }
                if(j === this._ballBox*2) answer = 1;
        break;

      case 'up':
                for(i = 0; i < this._ballBox*2; i++){
                  if((this._ballBoxPos[1] - this._ballBox-this._speedBox)>0 && this._moveMatrix[(this._ballBoxPos[1] - this._ballBox)-this._speedBox][this._ballBoxPos[0] - this._ballBox + 1*i] > 0) j++;
                }
                if(j === this._ballBox*2) answer = 1;
        break;

      case 'right':
                for(i = 0; i < this._ballBox*2; i++){
                  if((this._ballBoxPos[0] + this._ballBox + this._speedBox)<this._colM && this._moveMatrix[(this._ballBoxPos[1] - this._ballBox)+ 1*i][this._ballBoxPos[0] + this._ballBox + this._speedBox] > 0) j++;
                }
                if(j === this._ballBox*2) answer = 1;
        break;

      case 'down':
                  for(i = 0; i < this._ballBox*2; i++){
                    if((this._ballBoxPos[1]+this._ballBox+this._speedBox)<this._rowM && this._moveMatrix[(this._ballBoxPos[1] + this._ballBox)+this._speedBox][this._ballBoxPos[0] - this._ballBox + 1*i] > 0) j++;
                  }
                  if(j === this._ballBox*2) answer = 1;
        break;
    }
    return answer;
  }

  public getResouces():Array<object> {
    return this._images;
  }

  private dispatch(event:string, param?:any) {
    let _event = new CustomEvent(event, {detail:param});
    this._dispachtElement.dispatchEvent(_event);
  }
}
