class SoundChoose {

  private _cMain:PIXI.Container;
  private _imgBg:PIXI.Sprite;
  private _images:Array<object> = [{name:'frame', url:'pics/1366x768/frame.png'},
                                   {name:'framePortrait', url:'pics/1366x768/frame_portrait.png'},
                                   {name:'sndOn', url:'pics/1366x768/sound_on.png'},
                                   {name:'sndOff', url:'pics/1366x768/sound_off.png'},
                                   {name:'preloaderBar', url:'pics/preloader_bar.png'},
                                   {name:'fullScreenButton', url:'pics/full_screen_button.gif'},
                                   {name:'progressBar', url:'pics/progress_bar.png'}];
  private _bgGraphics:PIXI.Graphics;
  private _btnOn:PIXI.Sprite;
  private _btnOff:PIXI.Sprite;
  private _visualBox:PIXI.Container;
  private _txt:PIXI.Text;
  private _preloadBox:PIXI.Container;
  private _progressBar:PIXI.Sprite;
  private _prloaderBar:PIXI.Sprite;
  private _loadPercent:PIXI.Text;
  private _dispachtElement:HTMLDivElement;
  private _bglandscape:PIXI.Texture;
  private _bgPortrait:PIXI.Texture;

  constructor(cMain:PIXI.Container, dispachtElement:HTMLDivElement){
    this._cMain = cMain;
    this._dispachtElement = dispachtElement;
    this._preloadBox = new PIXI.Container();
  //  this._preloadBox.anchor.set(0.5);
    this._visualBox = new PIXI.Container();
    this._visualBox.x = 1366/2;
    this._visualBox.y = 768/2;
  }

  public createInterface():void {
    if(!this.checkForUnloadedBg()){
      this._bglandscape = PIXI.Texture.fromImage(sysData.frame.url);
      this._bgPortrait = PIXI.Texture.fromImage(sysData.framePortrait.url);
      this._imgBg = new PIXI.Sprite(this._bglandscape);
      this._cMain.addChild(this._imgBg);

    }

    this._txt = new PIXI.Text('Play with sound?',
                            {fontFamily : 'Arial',
                             fontSize: 32,
                             fill : 0xffffff,
                             align : 'center'});
    this._txt.anchor.set(0.5, 0);
    //this._txt.position.set(1024/2, 350);
    this._visualBox.addChild(this._txt);

    this._btnOn = PIXI.Sprite.fromImage(sysData.sndOn.url);
    this._btnOn.interactive = true;
    this._btnOn.buttonMode = true;
    this._btnOn.anchor.set(0.5, 0);
    this._btnOn.on('pointerdown', ()=>{
      let event = new CustomEvent('gameWithSound');
      this.simulateFullScreen();
      setTimeout(()=>{
        this._dispachtElement.dispatchEvent(event);
      }, 10);
      this._cMain.removeChild(this._visualBox);
      this._cMain.addChild(this._preloadBox);
    });
    this._btnOn.x -= this._btnOn.width;
    this._btnOn.y = 50;
    this._visualBox.addChild(this._btnOn);
    this._btnOff = PIXI.Sprite.fromImage(sysData.sndOff.url);
    this._btnOff.interactive = true;
    this._btnOff.buttonMode = true;
    this._btnOff.anchor.set(0.5, 0);
    this._btnOff.on('pointerdown', ()=>{
      let event = new CustomEvent('gameWithoutSound');
      this.simulateFullScreen();
      setTimeout(()=>{
        this._dispachtElement.dispatchEvent(event);
      }, 10);
      this._cMain.removeChild(this._visualBox);
      this._cMain.addChild(this._preloadBox);
    });
    this._btnOff.x += this._btnOff.width;
    this._btnOff.y = 50;
    //this._btnOff.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
    this._visualBox.addChild(this._btnOff);

    this._prloaderBar = PIXI.Sprite.fromImage(sysData.preloaderBar.url);
    this._prloaderBar.x = -this._prloaderBar.width/2;
    this._progressBar = PIXI.Sprite.fromImage(sysData.progressBar.url);
    this._progressBar.x = -this._progressBar.width/2;
    this._progressBar.width = 0;
    this._preloadBox.addChild(this._prloaderBar);
    this._preloadBox.addChild(this._progressBar);
    this._loadPercent = new PIXI.Text('0%',
                                      {fontFamily : 'Arial',
                                       fontSize: 24,
                                       fill : 0xffffff,
                                       align : 'center'});
    this._loadPercent.anchor.set(0.5);
    this._loadPercent.y = -35;
    this._preloadBox.addChild(this._loadPercent);

    this._cMain.addChild(this._visualBox);
  }

  public orientation(value:boolean) {
    console.log("******************** ", value);
    if(value) {  // landscape
      this._imgBg.texture = this._bglandscape;
      this._visualBox.x = 1366/2;
      this._visualBox.y = 768/2;
      this._preloadBox.x = 1366/2;
      this._preloadBox.y = 768/2;
    } else {  // portrait
      console.log("PORTRAIT");
      this._imgBg.texture = this._bgPortrait;
      this._visualBox.x = 768/2;
      this._visualBox.y = 1366/2;
      this._preloadBox.x = 768/2;
      this._preloadBox.y = 1366/2;
      //this._btnOn.rotation = Math.PI * 2 * 0.250;
    }
  }

  public simulateFullScreen():void {
     var elem = document.documentElement;
     if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
         (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
         (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
         (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {

             if (elem.requestFullScreen) {
                 elem.requestFullScreen();
             } else if (elem.mozRequestFullScreen) {
                 elem.mozRequestFullScreen();
             } else if (elem.webkitRequestFullScreen) {
                 elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
             } else if (elem.msRequestFullscreen) {
                 elem.msRequestFullscreen();
             }
         } else {
             if (document.cancelFullScreen) {
                 document.cancelFullScreen();
             } else if (document.exitFullscreen){
                 document.exitFullscreen();
             } else if (document.mozCancelFullScreen) {
                 document.mozCancelFullScreen();
             } else if (document.webkitCancelFullScreen) {
                 document.webkitCancelFullScreen();
             } else if (document.msExitFullscreen) {
                 document.msExitFullscreen();
             }
         }
  }

  private dafaultBackground():void {
    this._bgGraphics = new PIXI.Graphics();
    this._bgGraphics.position.x = 0;
    this._bgGraphics.position.y = 0;
    this._bgGraphics.lineStyle(0);
    this._bgGraphics.beginFill(0xffffff, 1);

    this._bgGraphics.moveTo(0, 0);
  	this._bgGraphics.lineTo(1024, 0);
  	this._bgGraphics.lineTo(1024, 717);
  	this._bgGraphics.lineTo(0, 717);
  	this._bgGraphics.lineTo(0, 0);

    this._cMain.addChild(this._bgGraphics);
  }

  private roteateElement(container:PIXI.Container, degree:number):void {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    // for(let i = 0; i < container.children.length; i++) {
    //   if(container.children[i] && container.children[i].rotation) {
    //     container.children[i].rotation = degree;
    //   }
    // }
    this._btnOn.rotation = 0;
    container.y = 0;
    container.x = 0;
  }

  public getResouces():Array<object> {
    return this._images;
  }

  public setProgressBar(value:number) {
    if(this._loadPercent){
      if(value > 0 && value < 101){
        this._loadPercent.text = value.toString();
        this._progressBar.width = Math.round((value/100)*this._prloaderBar.width);
      } else throw new Error("invalid value load percent!");
    }
  }

  private checkForUnloadedBg():boolean {
    for (let i in sysData) {
      if(sysData[i].name = "frame" && sysData[i].error !== null){
        this.dafaultBackground();
        return true;
      }
    }
    return false;
  }

}
