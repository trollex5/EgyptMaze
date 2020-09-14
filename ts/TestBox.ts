class TestBox {
  
  constructor(main, color, x, y, w, h){
    let col = color==1?0x00FF00:0xff0000;
    let fog = new PIXI.Graphics();
    fog.beginFill(col, 0.3);
    fog.drawRect(x, y, w, h);
    fog.endFill();
    main.addChild(fog);
  }
}
