//import * as createjs from 'soundjs';

class MainController {
  private _renderer:PIXI.WebGLRenderer | PIXI.CanvasRenderer;
  private _cMain:PIXI.Container = new PIXI.Container();
  private _sChooseContainer:PIXI.Container = new PIXI.Container();
  private _parterContainer:PIXI.Container = new PIXI.Container();
  private _showViewContainer:PIXI.Container = new PIXI.Container();
  private _gameViewContainer:PIXI.Container = new PIXI.Container();
  private _endGameViewContainer:PIXI.Container = new PIXI.Container();
  private _rLoader:ResourceLoader = new ResourceLoader();
  private _sChoose:SoundChoose;
  private _parter:Parter;
  private _shopView:ShopView;
  private _gameView:GameView;
  private _endGameView:EndGameView;
  private _queu:Array<any> = [];
  private _purchased:Array<string> = [];
  private _currentState:string = "SOUND_CHOOSE";
  private _nextState:string = "";
  private _viewCounter:number = 0;
  private _numView:number = 1;
  private _gameLevel:number = 1;
  private _loadImgCounter:number = 0;
  private _allImageLoaded:number = 0;
  private _progress:number = 0;
  private _time:number = 100;
  private _money:number = 0;
  private _allowTransition:boolean = true;
  private _sChooseAllow:boolean = true;
  private _parterAllow:boolean = false;
  private _shopViewAllow:boolean = false;
  private _gameViewAllow:boolean = false;
  private _endGameViewAllow:boolean = false;
  private _playGame:boolean = false;
  private _subgameEnd:boolean = false;  // when the player went to the next level
  private _isLoged:boolean = true;
  static IS_MOBILE:boolean = false;
  static HAVE_SOUND:boolean = false;
  private _IOS:boolean;
  private _allSounds:object = {
      0:{name:"btnClick", path:"sounds/buttonClick.mp3"},
      1:{name:"btnBuyClick", path:"sounds/buyButtons.mp3"},
      3:{name:"timeIsUpSound", path:"sounds/time_is_up.mp3"},
      4:{name:"getStuff", path:"sounds/get_stuff.mp3"},
      6:{name:"shopLoop", path:"sounds/shop_loop.mp3"},
      7:{name:"gameLoop", path:"sounds/game_loop.mp3"},
      9:{name:"ballMove", path:"sounds/ball_move.mp3"}
  };
  private _dispachtElement:HTMLDivElement;
  private _fsBtn:PIXI.Sprite;
  private _shopLoopSound:any;
  private _gameLoopSound:any;
  private _uName:string = "undefined";
  private _recScreen:HTMLElement | null;
  public static LANDSCAPE:boolean = false;


  constructor(dispachtElement:HTMLDivElement, renderer:PIXI.WebGLRenderer | PIXI.CanvasRenderer, isMobile:boolean, isLoged:boolean, uName:string){
    MainController.IS_MOBILE = isMobile;
    this._isLoged = isLoged;
    this._uName = uName;
    this._dispachtElement = dispachtElement;
    this._dispachtElement.addEventListener('SoundChooseLoadCompleate', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('gameWithSound', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('gameWithoutSound', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('allViewImagesloaded', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtn1Timeclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtn10Timeclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtn1Moneyclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtn10Moneyclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtnPlayclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtnShopclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtnGreanStateclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('buttonbtnShopBackclicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('scarabClicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('woodTorchClicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('shoesClicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('eyeOfRaClicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('papyrusClicked', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('hitCoin', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('hitMoneyCase', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('timeOver', (_e:Event)=>{this.dispatchCommand(_e);});
    this._dispachtElement.addEventListener('hitExit', (_e:Event)=>{this.dispatchCommand(_e);});

    this._IOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    this._renderer = renderer;
    window.addEventListener('orientationchange', ()=>{this.orientationDivace(true)});

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
    this._fsBtn.on('pointerup', ()=>{
      this._sChoose.simulateFullScreen();
    });
    //----------------------------------------------
    this._recScreen = document.getElementById("recordContainer");
    if(this._recScreen === null) throw new Error("!!!*** recScreen is not initialized ***!!!");


    this._cMain.addChild(this._sChooseContainer);
    this._cMain.addChild(this._parterContainer);
    this._cMain.addChild(this._showViewContainer);
    this._cMain.addChild(this._gameViewContainer);
    this._cMain.addChild(this._endGameViewContainer);
    this._cMain.addChild(this._fsBtn);
  }

  private orientationDivace(fromEvent:boolean):void {
    if(fromEvent) MainController.LANDSCAPE = !(window.innerWidth > window.innerHeight);
    else MainController.LANDSCAPE = (window.innerWidth > window.innerHeight);
    console.log("!!!!!!!!!!!!!!!!!!!!!! ", fromEvent);

    console.log("Main orientation divace landscape : ", MainController.LANDSCAPE, window.innerWidth, window.innerHeight);
    let sw:number = MainController.LANDSCAPE? 1366 : 768;
    let sh:number = MainController.LANDSCAPE? 768 : 1366;
    this._renderer.resize(sw, sh);
    if(this._sChoose){
      this._sChoose.orientation(MainController.LANDSCAPE);
    }
    if(this._parter){
      this._parter.orientation(MainController.LANDSCAPE);
    }
    if(this._shopView){
      this._shopView.orientation(MainController.LANDSCAPE);
    }
    if(this._gameView){
      this._gameView.orientation(MainController.LANDSCAPE);
    }
    if(this._endGameView){
      this._endGameView.orientation(MainController.LANDSCAPE);
    }
  }

  private loadImages(res:Array<object>, cbCompleate:Function):void {
    if(res.length <= 0) console.log("!!!***********Empty resource object***********!!!");
    const _res:Array<object> = res;
    this._allImageLoaded += _res.length;
  //  console.log("$#$#$# ",_res);
    this._rLoader.loadResources(_res, this, this.oneResourceLoaded, cbCompleate);
  }

  public oneResourceLoaded(that:any, _e:HTMLImageElement):void {
    that._loadImgCounter++;
  //  console.log("**** ", that._loadImgCounter);
    that._progress = Math.round((that._loadImgCounter / that._allImageLoaded) *100);
    if(that._loadImgCounter > 0 && that._loadImgCounter < that._allImageLoaded+1 && that._progress < 101){
      that._sChoose.setProgressBar(that._progress);
    } else {
      console.log("that._loadImgCounter > 0 && that._loadImgCounter < that._allImageLoaded+1 && that._progress < 101 :", that._loadImgCounter, that._allImageLoaded+1, that._progress);
    //  throw new Error("incorrect load percent!");
    }
  }

  public soundChooseLoadCompleate(that:any):void {
    //console.log("@@@@@ ", that._loadImgCounter);
    if((that._allImageLoaded === that._loadImgCounter)){
      let event = new CustomEvent('SoundChooseLoadCompleate');
      setTimeout(()=>{
        that._dispachtElement.dispatchEvent(event);
      }, 10);
    }
  }

  public loadCompleate(that:any):void {
    if((that._allImageLoaded === that._loadImgCounter)){
      let event = new CustomEvent('allViewImagesloaded');
      setTimeout(()=>{
        that._dispachtElement.dispatchEvent(event);
      }, 10);
    }
  }

  private loadOtherImages():void {
    let allOtherImages:Array<object> = [];
    let temporary:Array<object>;
    //-----------------------parter------------------------
    this._parter = new Parter(this._parterContainer);
    temporary = this._parter.getResouces();
    temporary.forEach((obj)=>{allOtherImages.push(obj);});
  //  console.log("TTTTTTTTTT ", temporary);
    //-----------------------------------------------------
    //----------------------shopView-----------------------
    this._shopView = new ShopView(this._showViewContainer, this._dispachtElement);
    temporary = this._shopView.getResouces();
    temporary.forEach((obj)=>{allOtherImages.push(obj);});
    //-----------------------------------------------------
    //----------------------gameView-----------------------
    this._gameView = new GameView(this._gameViewContainer, this._dispachtElement);
    temporary = this._gameView.getResouces();
    temporary.forEach((obj)=>{allOtherImages.push(obj);});
    //-----------------------------------------------------
    //--------------------endGameView----------------------
    this._endGameView = new EndGameView(this._endGameViewContainer);
    //-----------------------------------------------------
    this.loadImages(allOtherImages, this.loadCompleate);
  }

  private makeAllSoundsJs():void {
    if (!createjs.Sound.initializeDefaultPlugins()) {
      return;
    }

    createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));
    for (var obj in this._allSounds) {
      createjs.Sound.registerSound(this._allSounds[obj].path, this._allSounds[obj].name);
    }
  }

  private soundLoaded(event) {
    console.log("++++++++++", event);
  }

  public moveBall(key:string):void {
    if(this._playGame){
      this._gameView.moveBall(key);
    }
  }

  public stopBallMove():void {
    if(MainController.HAVE_SOUND){
      this._gameView.stopBallSound();
    }
  }

  private dispatchCommand(_e:Event):void {
    let self = this;
    setTimeout(function () {
    //  console.log('zzzzzzzzzzzz', _e.type, _e.detail);
       self.doit(_e.type, _e.detail);
    }, 10);
  }

  private doit(_command:string, _paramArray:Array<any>) {
    let trunk:ItrunkData;
    //  console.log("controller commandS: ", _command, _paramArray);
    if(_command != "" || _command != undefined){
      trunk = {command:_command, param:_paramArray};
      this._queu.push(trunk);
    }
    console.log("____ ", this._allowTransition , this._queu.length, this._currentState);
    if(this._allowTransition && this._queu.length > 0){
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
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnClick');
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
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnClick');
                            this._shopView.setMoney(this._money);
                            this._shopView.begin(this._subgameEnd);
                            setTimeout(()=>{
                              if(MainController.HAVE_SOUND) {
                                this._shopLoopSound = createjs.Sound.play("shopLoop", {loop:-1});
                                this._shopLoopSound.volume = 0.2;
                              }
                              this._shopViewAllow = true;
                              this._parterAllow = false;
                            }, 300);
                            this._nextState = 'SHOP';
                      break;

                      case 'buttonbtn1Timeclicked':
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnBuyClick');
                            if(this._money > 0){
                              this._parter.rotateClock();
                              this._parter.setTime(this._time += 1);
                              this._parter.setMoney(this._money -= 1);
                            }
                            this._nextState = 'PARTER';
                      break;

                      case 'buttonbtn10Timeclicked':
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnBuyClick');
                            if(this._money > 9){
                              this._parter.rotateClock();
                              this._parter.setTime(this._time += 10);
                              this._parter.setMoney(this._money -= 10);
                            }
                            this._nextState = 'PARTER';
                      break;

                      case 'buttonbtn1Moneyclicked':
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnBuyClick');
                            if(this._time > 0){
                              this._parter.rotateMoney();
                              this._parter.setMoney(this._money += 1);
                              this._parter.setTime(this._time -= 1);
                            }
                            this._nextState = 'PARTER';
                      break;

                      case 'buttonbtn10Moneyclicked':
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnBuyClick');
                            if(this._time > 9){
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
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnClick');
                            this._subgameEnd = false;
                            this._parter.setMoney(this._money);
                            setTimeout(()=>{
                              if(MainController.HAVE_SOUND) this._shopLoopSound.stop("shop_loop");
                              this._shopViewAllow = false;
                              this._parterAllow = true;
                            }, 300);
                            this._nextState = 'PARTER';
                      break;

                      case 'scarabClicked':
                            if(this._queu[0].param[0] === 1){
                              this._shopView.setScarab(1);
                              this._shopView.showStuffDescription(true);
                            } else if(this._queu[0].param[0] === 2){
                              if((this._money - this._queu[0].param[1]) >= 0){
                                this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                this._shopView.setScarab(2);
                                this._shopView.showStuffDescription(true);
                                this._purchased.push("scarab");
                              } else {
                                this._shopView.setScarab(0);
                                this._shopView.showStuffDescription(false);
                              }
                            } else if(this._queu[0].param[0] === 3) {
                              this._shopView.setScarab(0);
                              this._shopView.showStuffDescription(false);
                              this._shopView.setMoney(this._money += this._queu[0].param[1]);
                              let sliceIndex:number = this._purchased.indexOf("scarab");
                              this._purchased.splice(sliceIndex, 1);
                            }
                      break;

                      case 'woodTorchClicked':
                            if(this._queu[0].param[0] === 1){
                              this._shopView.setWoodTorch(1);
                              this._shopView.showStuffDescription(true);
                            } else if(this._queu[0].param[0] === 2){
                              if((this._money - this._queu[0].param[1]) >= 0){
                                this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                this._shopView.setWoodTorch(2);
                                this._shopView.showStuffDescription(true);
                                this._purchased.push("woodTorch");
                              } else {
                                this._shopView.setWoodTorch(0);
                                this._shopView.showStuffDescription(false);
                              }
                            } else if(this._queu[0].param[0] === 3) {
                              this._shopView.setWoodTorch(0);
                              this._shopView.showStuffDescription(false);
                              this._shopView.setMoney(this._money += this._queu[0].param[1]);
                              let sliceIndex:number = this._purchased.indexOf("woodTorch");
                              this._purchased.splice(sliceIndex, 1);
                            }
                      break;

                      case 'shoesClicked':
                            if(this._queu[0].param[0] === 1){
                              this._shopView.setShoes(1);
                              this._shopView.showStuffDescription(true);
                            } else if(this._queu[0].param[0] === 2){
                              if((this._money - this._queu[0].param[1]) >= 0){
                                this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                this._shopView.setShoes(2);
                                this._shopView.showStuffDescription(true);
                                this._purchased.push("shoes");
                              } else {
                                this._shopView.setShoes(0);
                                this._shopView.showStuffDescription(false);
                              }
                            } else if(this._queu[0].param[0] === 3) {
                              this._shopView.setShoes(0);
                              this._shopView.showStuffDescription(false);
                              this._shopView.setMoney(this._money += this._queu[0].param[1]);
                              let sliceIndex:number = this._purchased.indexOf("shoes");
                              this._purchased.splice(sliceIndex, 1);
                            }
                      break;

                      case 'eyeOfRaClicked':
                            if(this._queu[0].param[0] === 1){
                              this._shopView.setEyeOfRa(1);
                              this._shopView.showStuffDescription(true);
                            } else if(this._queu[0].param[0] === 2){
                              if((this._money - this._queu[0].param[1]) >= 0){
                                this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                this._shopView.setEyeOfRa(2);
                                this._shopView.showStuffDescription(true);
                                this._purchased.push("eyeOfRa");
                              } else {
                                this._shopView.setEyeOfRa(0);
                                this._shopView.showStuffDescription(false);
                              }
                            } else if(this._queu[0].param[0] === 3) {
                              this._shopView.setEyeOfRa(0);
                              this._shopView.showStuffDescription(false);
                              this._shopView.setMoney(this._money += this._queu[0].param[1]);
                              let sliceIndex:number = this._purchased.indexOf("eyeOfRa");
                              this._purchased.splice(sliceIndex, 1);
                            }
                      break;

                      case 'papyrusClicked':
                            if(this._queu[0].param[0] === 1){
                              this._shopView.setPapyrus(1);
                              this._shopView.showStuffDescription(true);
                            } else if(this._queu[0].param[0] === 2){
                              if((this._money - this._queu[0].param[1]) >= 0){
                                this._shopView.setMoney(this._money -= this._queu[0].param[1]);
                                this._shopView.setPapyrus(2);
                                this._shopView.showStuffDescription(true);
                                this._purchased.push("papyrus");
                              } else {
                                this._shopView.setPapyrus(0);
                                this._shopView.showStuffDescription(false);
                              }
                            } else if(this._queu[0].param[0] === 3) {
                              this._shopView.setPapyrus(0);
                              this._shopView.showStuffDescription(false);
                              this._shopView.setMoney(this._money += this._queu[0].param[1]);
                              let sliceIndex:number = this._purchased.indexOf("papyrus");
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
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnClick');
                            this._gameView.playDisable(true);
                            setTimeout(()=>{
                              if(MainController.HAVE_SOUND) this._gameLoopSound = createjs.Sound.play("gameLoop", {loop:-1});
                              this._playGame = true;
                              this._gameView.startGameTime();
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
                            this._gameView.setMoney(this._money+=10);
                            this._nextState = 'PLAY_GAME';
                      break;

                      case 'hitMoneyCase':
                            let win:number = Math.floor((Math.random()*45) + 15);
                            this._money+=win;
                            this._gameView.startMoneyCaseAnim(win);
                            this._nextState = 'PLAY_GAME';
                      break;

                      case 'timeOver':
                            this._time = 0;
                            this._purchased = [];
                            if(MainController.HAVE_SOUND) this._gameLoopSound.stop("gameLoop");
                            setTimeout(()=>{
                              if(this._isLoged){
                                console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
                                document.getElementById("textinput").value = this._uName;
                                document.getElementById("textinputScore").value = this._gameLevel;
                                this._recScreen.style.display = 'block';
                              } else {
                                this._gameViewAllow = false;
                                this._endGameViewAllow = true;
                              }
                            }, 3000);
                            this._nextState = 'GAME_OVER';
                      break;

                      case 'hitExit':
                            this._subgameEnd = true;
                            if(MainController.HAVE_SOUND) this._gameLoopSound.stop("gameLoop");
                            this._purchased = [];
                            this._time = this._queu[0].param[0];
                            this._gameLevel++;
                            this._parter.setMoney(this._money);
                            this._parter.setTime(this._time);
                            setTimeout(()=>{
                              this._gameViewAllow = false;
                              this._parterAllow = true;
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
                            if(MainController.HAVE_SOUND) createjs.Sound.play('btnClick');
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
      if(this._queu.length > 0)
        this.doit("", []);
    }
  }

  public animate():void {
    this._sChooseContainer.visible = this._sChooseAllow;
    this._parterContainer.visible = this._parterAllow;
    this._showViewContainer.visible = this._shopViewAllow;
    this._gameViewContainer.visible = this._gameViewAllow;
    this._endGameViewContainer.visible = this._endGameViewAllow;

    if ((window.fullscreen) || (window.innerHeight == screen.height)){
      this._fsBtn.visible = false;
    } else{
      if(!this._IOS)
        this._fsBtn.visible = true;
    }

    this._renderer.render(this._cMain);

    requestAnimationFrame(() => this.animate());
  }

}
