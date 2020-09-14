class StoneTile {

  public _tile:PIXI.Sprite;
  private _texture:PIXI.Texture;
  private _tileRect:PIXI.Rectangle;
  private _degree:number = 0;

  constructor(/*cMain:PIXI.Container,*/ imgName:string, width:number, height:number, degree:number){
    this._degree = degree;
    this._tileRect = new PIXI.Rectangle(0, 0, width, height);
    this._texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(sysData[imgName].url), this._tileRect);
    this._tile = new PIXI.Sprite(this._texture);
    if(degree > 0)
      this._tile.rotation = Math.PI * 2 * 0.250;
    //cMain.addChild(this._tile);
  }

  public get tile():PIXI.Sprite {
    return this._tile;
  }

  public setX(val:number) {
    this._tile.x = val;
    if(this._degree > 0)this._tile.x += 10;
  }

  public setY(val:number) {
    this._tile.y = val;
  }
}
