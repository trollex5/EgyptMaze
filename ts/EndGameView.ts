class EndGameView {

  private _cMain:PIXI.Container = new PIXI.Container();
  private _innerC:PIXI.Container = new PIXI.Container();
  private _bg:PIXI.Graphics;
  private _btnPlay:Button;
  private _mess:PIXI.Text;

  constructor(cMain:PIXI.Container) {
    this._cMain = cMain;
    this._cMain.addChild(this._innerC);
  }

  public createInterface():void {
    this._bg = new PIXI.Graphics();
    this._bg.beginFill(0x000000, 1);
    this._bg.drawRect(0, 0, 1024, 717);
    this._bg.endFill();
    this._innerC.addChild(this._bg);
    //------------------btnPlay---------------------
    this._btnPlay = new Button(this._innerC, 'btnPlay', sysData.btnPlayGreen.name, sysData.btnPlaySymbol.name, 7, 100, 100);
    //----------------------------------------------
    //------------------message---------------------
    this._mess = new PIXI.Text('Play other games?',
                            {fontFamily : 'Arial',
                             fontSize: 36,
                             fill : 0xffffff,
                             fontWeight:'bold',
                             align : 'center'});
    this._mess.anchor.set(0.5, 0.5);
    this._innerC.addChild(this._mess);
    //----------------------------------------------
  }

  public orientation(value:boolean):void {
    if(value) {
      this._btnPlay.x = 1366/2;
      this._btnPlay.y = (768/2) +80;
      this._mess.position.set(1366/2, 768/2);
    } else {
      this._btnPlay.x = 768/2;
      this._btnPlay.y = (1366/2) +80;
      this._mess.position.set(768/2, 1366/2);
    }
  }
}
