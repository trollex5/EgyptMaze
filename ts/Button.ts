class Button {

  private _imgName:string;
  private _btnName:string;
  private _symbol:string;
  private _tiles:number;
  private _width:number;
  private _height:number;
  private _cMain:PIXI.Container;
  private _imgRect:PIXI.Rectangle;
  private _imgSprite:PIXI.Sprite;
  private _imgTexture:PIXI.Texture;
  private _symbolRect:PIXI.Rectangle;
  private _symbolSprite:PIXI.Sprite;
  private _status:boolean = true;
  private _animTimer:any;

  constructor(cMain:PIXI.Container, btnName:string, imgName:string, symbol:string, tiles:number, width:number, height:number) {
    this._cMain = cMain;
    this._btnName = btnName;
    this._imgName = imgName;
    this._symbol = symbol;
    this._tiles = tiles;
    this._width = width;
    this._height = height;

    this._imgRect = new PIXI.Rectangle(0, 0, this._width, this._height);
    this._imgTexture = new PIXI.Texture(PIXI.BaseTexture.fromImage(sysData[this._imgName].url), this._imgRect);
    this._imgSprite = new PIXI.Sprite(this._imgTexture);
    this._imgSprite.texture.frame = this._imgRect;
    this._imgSprite.anchor.set(0.5);
    this._imgSprite.interactive = true;
    this._imgSprite.buttonMode = true;
    this._imgSprite.name = this._imgName;
    this._imgSprite.on('pointerdown', ()=>{
      this.clickBtn();
    });
    this._cMain.addChild(this._imgSprite);

    if(this._symbol != 'none'){
      this._symbolRect = new PIXI.Rectangle(0, 0, this._width, this._height);
      this._symbolSprite = PIXI.Sprite.fromImage(sysData[this._symbol].url);
      this._symbolSprite.texture.frame = this._symbolRect;
      this._symbolSprite.anchor.set(0.5);
      this._symbolSprite.interactive = false;
      this._symbolSprite.name = this._symbol;
      this._imgSprite.addChild(this._symbolSprite);
    }
  }

  public set x(val:number) {
    this._imgSprite.x = val;
  }

  public set y(val:number) {
    this._imgSprite.y = val;
  }

  private clickBtn():void {
    if(this._imgSprite.buttonMode){
      this._imgSprite.buttonMode = false;
      let that = this;
      this._animTimer = setInterval(function(){
        that._imgRect.x += that._width;
        if(that._imgRect.x > that._width*(that._tiles-1)){
          that._imgRect.x = 0;
          clearInterval(that._animTimer);
          that._imgSprite.buttonMode = true;
        //  console.log("FFFFFFFFFFFFFFF ", 'button'+that._btnName+'clicked');
          let event = new CustomEvent('button'+that._btnName+'clicked');
          dispachtElement.dispatchEvent(event);
        }
        that._imgSprite.texture.frame = that._imgRect;
      }, 40);
    }
  }

  public disable():void {
    this._imgRect.x = (this._tiles-1) * this._width;
    this._imgSprite.texture.frame = this._imgRect;
    this._imgSprite.buttonMode = false;
    this._imgSprite.interactive = false;
    this._status = false;
  }

  public enable():void {
    this._imgRect.x = 0;
    this._imgSprite.texture.frame = this._imgRect;
    this._imgSprite.buttonMode = true;
    this._imgSprite.interactive = true;
    this._status = true;
  }

  public get status():boolean {
    return this._status;
  }
}
