class AnimationTiles extends PIXI.Sprite {

  private _cMain:PIXI.Container;
  private _sprite:PIXI.Sprite;
  private _texture:PIXI.Texture;
  private _tileRect:PIXI.Rectangle;
  private _randomStart:number;
  private _width:number;
  private _height:number;
  private _tiles:number;
  private _x:number = 0;
  private _y:number = 0;
  private _startTimer:any;
  private _animTimer:any;

  constructor(imgName:string, width:number, height:number, tiles:number, cMain?:PIXI.Container) {
    super();
    this._width = width;
    this._height = height;
    this._tiles = tiles;
    this._tileRect = new PIXI.Rectangle(0, 0, width, height);
    this._texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(sysData[imgName].url), this._tileRect);
    this._sprite = new PIXI.Sprite(this._texture);
    this._sprite.anchor.set(0.5);
    this._randomStart = Math.floor((Math.random()*6000) + 3000);
    if(cMain != undefined) {
      this._cMain = cMain;
      this._cMain.addChild(this._sprite);
    }
  }


  public get sprite():PIXI.Sprite {
    return this._sprite;
  }

  public set x(value:number) {
    if(value > 0) this._sprite.x = value;
  }

  public get x():number {
    return this._sprite.x;
  }

  public startAnim() {
    this._startTimer = setInterval(()=>{
      this.animation();
    }, this._randomStart);
  }

  public stopTimer() {
    clearInterval(this._startTimer);
  }

  private animation() {
    clearInterval(this._animTimer);
    this._animTimer = setInterval(()=>{
      this._tileRect.x += this._width;
      if(this._tileRect.x > this._width*(this._tiles-1)){
        this._tileRect.x = 0;
        clearInterval(this._animTimer);
      }
      this._sprite.texture.frame = this._tileRect;
    }, 40);
  }


}
