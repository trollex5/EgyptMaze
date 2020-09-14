class Parter {

  private _cMain:PIXI.Container;
  private _innerC:PIXI.Container = new PIXI.Container();
  private _images:Array<object> = [{name:'frame', url:'pics/1366x768/frame.png'},
                                   {name:'framePortrait', url:'pics/1366x768/frame_portrait.png'},
                                   {name:'backgroundLandscape', url:'pics/1366x768/piramid_bg.png'},
                                   {name:'backgroundPortrait', url:'pics/1366x768/piramid_bg_portrait.png'},
                                   {name:'payTable', url:'pics/1366x768/pay_bg_gold.png'},
                                   {name:'btn1', url:'pics/1366x768/btn_1.png'},
                                   {name:'btn10', url:'pics/1366x768/btn_10.png'},
                                   {name:'btnPlayGreen', url:'pics/1366x768/btn_play_green.png'},
                                   {name:'btnShopBlue', url:'pics/1366x768/btn_shop_blue.png'},
                                   {name:'btnPlaySymbol', url:'pics/1366x768/btn_play_sign.png'},
                                   {name:'btnShopSymbol', url:'pics/1366x768/btn_shop_sign.png'},
                                   {name:'clockTime', url:'pics/1366x768/sand_clock_sign.png'},
                                   {name:'cash', url:'pics/1366x768/dollar_sign.png'}];
  private _frame:PIXI.Sprite;
  private _backgroundLandscape:PIXI.Texture;
  private _backgroundPortrait:PIXI.Texture;
  private _frameTexture:PIXI.Texture;
  private _framePortraitTexture:PIXI.Texture;
  private _background:PIXI.Sprite;
  private _payTable:PIXI.Sprite;
  private _btn1Time:Button;
  private _btn10Time:Button;
  private _btn1Money:Button;
  private _btn10Money:Button;
  private _btnShop:Button;
  private _btnPlay:Button;
  private _clockTime:PIXI.Sprite;
  private _cash:PIXI.Sprite;
  private _timeTxt:PIXI.Text;
  private _moneyTxt:PIXI.Text;
  private _rotateTimer:any;

  constructor(cMain:PIXI.Container) {
    this._cMain = cMain;
    this._innerC.x = 0;
    this._innerC.y = 0;
    this._cMain.addChild(this._innerC);
  }

  public createInterface():void {
    console.log("createInterface Parter");
    //-----------------background-------------------
    this._frameTexture = PIXI.Texture.fromImage(sysData.frame.url);
    this._framePortraitTexture = PIXI.Texture.fromImage(sysData.framePortrait.url);
    this._frame = new PIXI.Sprite(this._frameTexture);
    this._frame.x = 0;
    this._frame.y = 0;

    this._backgroundLandscape = PIXI.Texture.fromImage(sysData.backgroundLandscape.url);
    this._backgroundPortrait = PIXI.Texture.fromImage(sysData.backgroundPortrait.url);
    this._background = new PIXI.Sprite(this._backgroundLandscape);
    this._background.x = 60;
    this._background.y = 60;
    

    this._innerC.addChild(this._frame);
    this._innerC.addChild(this._background);
    //----------------------------------------------
    //------------------payTable--------------------
    this._payTable = PIXI.Sprite.fromImage(sysData.payTable.url);
    this._payTable.anchor.set(0.5);
    this._innerC.addChild(this._payTable);
    //----------------------------------------------
    //-------------------btn1Time-------------------
    this._btn1Time = new Button(this._innerC, 'btn1Time', sysData.btn1.name, "none", 5, 96, 96);
    //----------------------------------------------
    //------------------btn10Time-------------------
    this._btn10Time = new Button(this._innerC, 'btn10Time', sysData.btn10.name, "none", 5, 96, 96);
    //----------------------------------------------
    //-------------------btn1Money------------------
    this._btn1Money = new Button(this._innerC, 'btn1Money', sysData.btn1.name, "none", 5, 96, 96);
    //----------------------------------------------
    //------------------btn10Money------------------
    this._btn10Money = new Button(this._innerC, 'btn10Money', sysData.btn10.name, "none", 5, 96, 96);
    //----------------------------------------------
    //------------------btnShopBlue----------------
    this._btnShop = new Button(this._innerC, 'btnShop', sysData.btnShopBlue.name, sysData.btnShopSymbol.name, 7, 100, 100);
    //----------------------------------------------
    //--------------------btnPlayGreen-------------------
    this._btnPlay = new Button(this._innerC, 'btnPlay', sysData.btnPlayGreen.name, sysData.btnPlaySymbol.name, 7, 100, 100);
    //----------------------------------------------
    //-------------------clockTime------------------
    this._clockTime = PIXI.Sprite.fromImage(sysData.clockTime.url);
    this._clockTime.anchor.set(0.5);
    this._innerC.addChild(this._clockTime);
    //----------------------------------------------
    //--------------------cash----------------------
    this._cash = PIXI.Sprite.fromImage(sysData.cash.url);
    this._cash.anchor.set(0.5);
    this._innerC.addChild(this._cash);
    //----------------------------------------------
    //------------------timetxt---------------------
    this._timeTxt = new PIXI.Text('100',
                            {fontFamily : 'Arial',
                             fontSize: 50,
                             fill : 0xff0000,
                             fontWeight:'bold',
                             align : 'center'});
    this._timeTxt.anchor.set(0.5, 0);
    this._innerC.addChild(this._timeTxt);
    //----------------------------------------------
    //------------------moneyTxt--------------------
    this._moneyTxt = new PIXI.Text('0',
                            {fontFamily : 'Arial',
                             fontSize: 50,
                             fill : 0x01601c,
                             fontWeight:'bold',
                             align : 'center'});
    this._moneyTxt.anchor.set(0.5, 0);
    this._innerC.addChild(this._moneyTxt);
    //----------------------------------------------
  }

  public orientation(value:boolean) {
    console.log("******************** ", value);
    if(value) {  // landscape
      this._background.texture = this._backgroundLandscape;
      this._frame.texture = this._frameTexture;
      this._payTable.x = 1366/2;
      this._payTable.y = 717/2 + 50;
      this._btn1Time.x = 483;
      this._btn1Time.y = 455 + 65;
      this._btn10Time.x = 593;
      this._btn10Time.y = 455 + 65;
      this._btn1Money.x = 770;
      this._btn1Money.y = 455 + 65;
      this._btn10Money.x = 880;
      this._btn10Money.y = 455 + 65;
      this._btnShop.x = 1060;
      this._btnShop.y = 453;
      this._btnPlay.x = 1060;
      this._btnPlay.y = 565;
      this._clockTime.x = 540;
      this._clockTime.y = 280 + 30;
      this._cash.x = 830;
      this._cash.y = 280 + 30;
      this._timeTxt.position.set(535, 405);
      this._moneyTxt.position.set(830, 405);
    } else {  // portrait
      this._background.texture = this._backgroundPortrait;
      this._frame.texture = this._framePortraitTexture;
      this._payTable.x = 768/2;
      this._payTable.y = 1366/2;
      this._btn1Time.x = 191;
      this._btn1Time.y = 800;
      this._btn10Time.x = 301;
      this._btn10Time.y = 800;
      this._btn1Money.x = 470;
      this._btn1Money.y = 800;
      this._btn10Money.x = 580;
      this._btn10Money.y = 800;
      this._btnShop.x = 525;
      this._btnShop.y = 950;
      this._btnPlay.x = 640;
      this._btnPlay.y = 950;
      this._clockTime.x = 247;
      this._clockTime.y = 583;
      this._cash.x = 532;
      this._cash.y = 583;
      this._timeTxt.position.set(240, 680);
      this._moneyTxt.position.set(530, 680);
    }
  }

  public getResouces():Array<object> {
    return this._images;
  }

  public rotateClock():void {
    let index = 0;
    this._rotateTimer = setInterval(()=>{
      index++;
      this._clockTime.rotation = index * 0.45;
      if(index === 7){
        clearInterval(this._rotateTimer);
      }
    }, 20);
  }

  public rotateMoney():void {
    let index = 0;
    this._rotateTimer = setInterval(()=>{
      index++;
      this._cash.rotation = index * 0.45;
      if(index === 7){
        clearInterval(this._rotateTimer);
      }
    }, 20);
  }

  public setTime(val:number):void {
    if(val >= 0){
      this._timeTxt.text = val.toString();
      if(val == 0){
        this._btn1Time.disable();
        this._btn10Time.disable();
      } else if(val > 0 && val < 10){
        this._btn1Time.enable();
        this._btn10Time.disable();
      }
      this.checkButtonState();
    } else {
      console.log("time value : ", val);
      throw new Error("!!!***Invalid time value***!!!");
    }
  }

  public setMoney(val:number):void {
    if(val >= 0){
      this._moneyTxt.text = val.toString();
      if(val == 0){
        this._btn1Money.disable();
        this._btn10Money.disable();
      } else if(val > 0 && val < 10){
        this._btn1Money.enable();
        this._btn10Money.disable();
      }
      this.checkButtonState();
    } else {
      console.log("money value : ", val);
      throw new Error("!!!***Invalid money value***!!!");
    }
  }

  private checkButtonState():void {
    let t:number = parseInt(this._timeTxt.text);
    var m:number = parseInt(this._moneyTxt.text);

    this._btn1Money.enable();
    this._btn10Money.enable();
    this._btn1Time.enable();
    this._btn10Time.enable();
    this._btnPlay.enable();
    if(t == 0){
      this._btn1Money.disable();
      this._btn10Money.disable();
      this._btnPlay.disable();
    }
    if(t < 10){
      this._btn10Money.disable();
    }
    if(m == 0){
      this._btn1Time.disable();
      this._btn10Time.disable();
    }
    if(m < 10){
      this._btn10Time.disable();
    }
  }
}
