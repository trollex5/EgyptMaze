class ShopView {

  private _cMain:PIXI.Container;
  private _innerC:PIXI.Container = new PIXI.Container();
  private _images:Array<object> = [{name:'shopBg', url:'pics/1366x768/shop_bg.png'},
                                   {name:'btnShopBackSymbol', url:'pics/1366X768/btn_back_arrow_sign.png'},
                                   {name:'scarabAnim', url:'pics/scarab_anim.png'},
                                   {name:'woodTorchAnim', url:'pics/wood_torch_anim.png'},
                                   {name:'shoesAnim', url:'pics/shoes_anim.png'},
                                   {name:'eyeOfRa', url:'pics/eye_of_ra.gif'},
                                   {name:'papyrusAnim', url:'pics/papyrus_anim.png'}];
  private _allStuffPos:Array<any> = [];
  private _stuffState:object = {'scarab':{'click':0, 'pos':[[480, 690], [480, 690]]},
                                'woodTorch':{'click':0, 'pos':[[250, 608], [250, 608]]},
                                'shoes':{'click':0, 'pos':[[250, 690], [250, 690]]},
                                'eyeOfRa':{'click':0, 'pos':[[330, 690], [330, 690]]},
                                'papyrus':{'click':0, 'pos':[[405, 690], [405, 690]]}
  };
  private _frame:PIXI.Sprite;
  private _backgroundLandscape:PIXI.Texture;
  private _backgroundPortrait:PIXI.Texture;
  private _frameTexture:PIXI.Texture;
  private _framePortraitTexture:PIXI.Texture;
  private _background:PIXI.Sprite;

  private _shopBg:PIXI.Sprite;
  private _btnShop:Button;
  private _scarabGraphics:PIXI.Graphics;
  private _scarab:AnimationTiles;
  private _scarabC:PIXI.Container = new PIXI.Container();
  private _scarabPrice:PIXI.Text;
  private _woodTorchGraphics:PIXI.Graphics;
  private _woodTorch:AnimationTiles;
  private _woodTorchC:PIXI.Container = new PIXI.Container();
  private _woodTorchPrice:PIXI.Text;
  private _shoesGraphics:PIXI.Graphics;
  private _shoes:AnimationTiles;
  private _shoesC:PIXI.Container = new PIXI.Container();
  private _shoesPrice:PIXI.Text;
  private _eyeOfRaGraphics:PIXI.Graphics;
  private _eyeOfRa:PIXI.Sprite;
  private _eyeOfRaC:PIXI.Container = new PIXI.Container();
  private _eyeOfRaPrice:PIXI.Text;
  private _papyrusGraphics:PIXI.Graphics;
  private _papyrus:AnimationTiles;
  private _papyrusC:PIXI.Container = new PIXI.Container();
  private _allStuffs:Array<PIXI.Container> = [];
  private _stuffBox:PIXI.Container = new PIXI.Container();
  private _papyrusPrice:PIXI.Text;
  private _stuffDescription:PIXI.Text;
  private _money:PIXI.Text;
  private _dispachtElement:HTMLDivElement;

  constructor(cMain:PIXI.Container, dispachtElement:HTMLDivElement) {
    this._cMain = cMain;
    this._dispachtElement = dispachtElement;
    this._innerC.x = 0;
    this._innerC.y = 0;
    this._innerC.addChild(this._stuffBox);
    this._cMain.addChild(this._innerC);
  }

  public createInterface():void {
    console.log("createInterface ShopView");
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
    //-------------------shopBg---------------------
    this._shopBg = PIXI.Sprite.fromImage(sysData.shopBg.url);
    this._shopBg.anchor.set(0.5);
    this._innerC.addChild(this._shopBg);
    //----------------------------------------------
    //------------------btnShopBack-----------------
    this._btnShop = new Button(this._innerC, 'btnShopBack', sysData.btnShopBlue.name, sysData.btnShopBackSymbol.name, 7, 100, 100);
    //----------------------------------------------
    //--------------------scarab--------------------
    this._scarabGraphics = new PIXI.Graphics();
    this._scarabGraphics.beginFill(0xFFFFFF, 0.50);
    this._scarabGraphics.drawRect(0, 30, 47, 20);
    this._scarabGraphics.endFill();

    this._scarabPrice = new PIXI.Text('12',
                            {fontFamily : 'Arial',
                             fontSize: 24,
                             fill : 0xff0000,
                             fontWeight:'bold',
                             align : 'center'});
    this._scarabPrice.anchor.set(0.5, 0);
    this._scarabPrice.position.set(22, 25);

    this._scarab = new AnimationTiles("scarabAnim", 45, 45, 12/*, this._scarabC*/);
    this._scarab.startAnim();
    this._scarabC.name = "scarab";
    this._scarabC.on('pointerdown', ()=>{
      this._stuffDescription.text = 'Смалява размера на топчето\n и увеличава скорастта му,\n за определен период от време.';
      this.dispatch('scarabClicked', [this._stuffState['scarab']['click']+=1, parseInt(this._scarabPrice.text)]);
    });
    this._scarabC.addChild(this._scarab);
    this._scarabC.addChild(this._scarabGraphics);
    this._scarabC.addChild(this._scarabPrice);
    this._allStuffs.push(this._scarabC);
    this._innerC.addChild(this._scarabC);
    //----------------------------------------------
    //-----------------woodTorch--------------------
    this._woodTorchGraphics = new PIXI.Graphics();
    this._woodTorchGraphics.beginFill(0xFFFFFF, 0.50);
    this._woodTorchGraphics.drawRect(0, 30, 47, 20);
    this._woodTorchGraphics.endFill();

    this._woodTorchPrice = new PIXI.Text('10',
                            {fontFamily : 'Arial',
                             fontSize: 24,
                             fill : 0xff0000,
                             fontWeight:'bold',
                             align : 'center'});
    this._woodTorchPrice.anchor.set(0.5, 0);
    this._woodTorchPrice.position.set(22, 25);

    this._woodTorch = new AnimationTiles("woodTorchAnim", 45, 45, 12/*, this._woodTorchC*/);
    this._woodTorch.startAnim();
    this._woodTorchC.name = "woodTorch";
    this._woodTorchC.on('pointerdown', ()=>{
      this._stuffDescription.text = 'Увеличава радиусът на видимост\n на топчето, за определен период\n от време.';
      this.dispatch('woodTorchClicked', [this._stuffState['woodTorch']['click']+=1, parseInt(this._woodTorchPrice.text)]);
    });
    this._woodTorchC.addChild(this._woodTorch);
    this._woodTorchC.addChild(this._woodTorchGraphics);
    this._woodTorchC.addChild(this._woodTorchPrice);
    this._allStuffs.push(this._woodTorchC);
    this._innerC.addChild(this._woodTorchC);
    //----------------------------------------------
    //-------------------shoes----------------------
    this._shoesGraphics = new PIXI.Graphics();
    this._shoesGraphics.beginFill(0xFFFFFF, 0.50);
    this._shoesGraphics.drawRect(0, 30, 47, 20);
    this._shoesGraphics.endFill();

    this._shoesPrice = new PIXI.Text('10',
                            {fontFamily : 'Arial',
                             fontSize: 24,
                             fill : 0xff0000,
                             fontWeight:'bold',
                             align : 'center'});
    this._shoesPrice.anchor.set(0.5, 0);
    this._shoesPrice.position.set(22, 25);

    this._shoes = new AnimationTiles("shoesAnim", 45, 45, 12/*, this._shoesC*/);
    this._shoes.startAnim();
    this._shoesC.name = "shoes";
    this._shoesC.on('pointerdown', ()=>{
      this._stuffDescription.text = 'Увеличава скоростта на топчето \n за определен период от време.';
      this.dispatch('shoesClicked', [this._stuffState['shoes']['click']+=1, parseInt(this._shoesPrice.text)]);
    });
    this._shoesC.addChild(this._shoes);
    this._shoesC.addChild(this._shoesGraphics);
    this._shoesC.addChild(this._shoesPrice);
    this._allStuffs.push(this._shoesC);
    this._innerC.addChild(this._shoesC);
    //----------------------------------------------
    //-------------------eyeOfRa--------------------
    this._eyeOfRaGraphics = new PIXI.Graphics();
    this._eyeOfRaGraphics.beginFill(0xFFFFFF, 0.50);
    this._eyeOfRaGraphics.drawRect(0, 30, 47, 20);
    this._eyeOfRaGraphics.endFill();

    this._eyeOfRaPrice = new PIXI.Text('20',
                            {fontFamily : 'Arial',
                             fontSize: 24,
                             fill : 0xff0000,
                             fontWeight:'bold',
                             align : 'center'});
    this._eyeOfRaPrice.anchor.set(0.5, 0);
    this._eyeOfRaPrice.position.set(22, 25);

    this._eyeOfRa = PIXI.Sprite.fromImage(sysData.eyeOfRa.url);
    this._eyeOfRaC.name = "eyeOfRa";
    this._eyeOfRaC.on('pointerdown', ()=>{
      this._stuffDescription.text = 'Прави видим изхода от лабиринта \n през цялото време на текущата игра.';
      this.dispatch('eyeOfRaClicked', [this._stuffState['eyeOfRa']['click']+=1, parseInt(this._eyeOfRaPrice.text)]);
    });
    this._eyeOfRaC.addChild(this._eyeOfRa);
    this._eyeOfRaC.addChild(this._eyeOfRaGraphics);
    this._eyeOfRaC.addChild(this._eyeOfRaPrice);
    this._allStuffs.push(this._eyeOfRaC);
    this._innerC.addChild(this._eyeOfRaC);
    //----------------------------------------------
    //-------------------papyrus--------------------
    this._papyrusGraphics = new PIXI.Graphics();
    this._papyrusGraphics.beginFill(0xFFFFFF, 0.50);
    this._papyrusGraphics.drawRect(0, 30, 47, 20);
    this._papyrusGraphics.endFill();

    this._papyrusPrice = new PIXI.Text('20',
                            {fontFamily : 'Arial',
                             fontSize: 24,
                             fill : 0xff0000,
                             fontWeight:'bold',
                             align : 'center'});
    this._papyrusPrice.anchor.set(0.5, 0);
    this._papyrusPrice.position.set(22, 25);

    this._papyrus = new AnimationTiles("papyrusAnim", 45, 45, 10/*, this._papyrusC*/);
    this._papyrus.startAnim();
    this._papyrusC.name = "papyrus";
    this._papyrusC.on('pointerdown', ()=>{
      this._stuffDescription.text = 'Премахва част от мъглата на \n лабиринта през цялата игра.';
      this.dispatch('papyrusClicked', [this._stuffState['papyrus']['click']+=1, parseInt(this._papyrusPrice.text)]);
    });
    this._papyrusC.addChild(this._papyrus);
    this._papyrusC.addChild(this._papyrusGraphics);
    this._papyrusC.addChild(this._papyrusPrice);
    this._allStuffs.push(this._papyrusC);
    this._innerC.addChild(this._papyrusC);
    //----------------------------------------------
    //-------------stuffDescription-----------------
    this._stuffDescription = new PIXI.Text('',
                            {fontFamily : 'Arial',
                             fontSize: 18,
                             fill : 0xffffff,
                             fontWeight:'bold',
                             align : 'center'});
    this._stuffDescription.visible = false;
    this._innerC.addChild(this._stuffDescription);
    //----------------------------------------------
    //-------------------_money---------------------
    this._money = new PIXI.Text('0',
                            {fontFamily : 'Arial',
                             fontSize: 40,
                             fill : 0xffffff,
                             fontWeight:'bold',
                             align : 'center'});
    this._money.anchor.set(0.5);
    this._innerC.addChild(this._money);
    //----------------------------------------------
  }

  public orientation(value:boolean) {
    if(value) {  // landscape
      this._background.texture = this._backgroundLandscape;
      this._frame.texture = this._frameTexture;
      this._shopBg.x = 1366/2;
      this._shopBg.y = 717/2 + 27;
      this._btnShop.x = 1072;
      this._btnShop.y = 640;
      this._stuffState['scarab']['pos'] = [[780, 395], [780, 395]];
      this._stuffState['woodTorch']['pos'] = [[550, 320], [550, 320]];
      this._stuffState['shoes']['pos'] = [[550, 395], [550, 395]];
      this._stuffState['eyeOfRa']['pos'] = [[630, 395], [630, 395]];
      this._stuffState['papyrus']['pos'] = [[705, 395], [705, 395]];
      this._allStuffPos = [[385, 507], [455, 507], [525, 507], [385, 567], [455, 567]];
      this.begin(false);
      this._money.position.set(1366/2, 100);
      this._stuffDescription.position.set(640, 620);
    } else {  // portrait
      this._background.texture = this._backgroundPortrait;
      this._frame.texture = this._framePortraitTexture;
      this._shopBg.x = 768/2;
      this._shopBg.y = 1366/2;
      this._btnShop.x = 635;
      this._btnShop.y = 1070;
      this._stuffState['scarab']['pos'] = [[480, 690], [480, 690]];
      this._stuffState['woodTorch']['pos'] = [[250, 608], [250, 608]];
      this._stuffState['shoes']['pos'] = [[250, 690], [250, 690]];
      this._stuffState['eyeOfRa']['pos'] = [[330, 690], [330, 690]];
      this._stuffState['papyrus']['pos'] = [[405, 690], [405, 690]];
      this._allStuffPos = [[85, 800], [150, 800], [220, 800], [85, 865], [150, 865]];
      this.begin(false);
      this._money.position.set(768/2 + 10, 410);
      this._stuffDescription.position.set(350, 915);
    }
  }

  public begin(fullReset:boolean):void {
    this._stuffDescription.text = "";
    for(let i:number = 0; i < this._allStuffs.length; i++) {
      let name:string|null = this._allStuffs[i].name;
      if(name){
        if(fullReset) {
          this._stuffBox.removeChildren();
          this._stuffState[name]['click'] = 0;
          this._innerC.addChild(this._allStuffs[i]);
        }
        console.log("BVBVB ", name, this._stuffState[name]['click']);
        if(this._stuffState[name]['click'] != 2){
          this._allStuffs[i].x = this._stuffState[name]['pos'][this._stuffState[name]['click']][0];
          this._allStuffs[i].y = this._stuffState[name]['pos'][this._stuffState[name]['click']][1];
        }
        this._allStuffs[i].buttonMode = true;
        this._allStuffs[i].interactive = true;
        this.setStuffBoxPos();
      }
    }
  }

  public getResouces():Array<object> {
    return this._images;
  }

  public setMoney(val:number):void {
    if(val >= 0){
      this._money.text = val.toString();
    } else{
      console.log("shopView - setMoney");
      throw new Error("!!!***Invalid credit value***!!!");
    }
  }

  public showStuffDescription(val:boolean):void {
    this._stuffDescription.visible = val;
  }

  private setStuffBoxPos():void {
    for(let i:number = 0; i < this._stuffBox.children.length; i++) {
      this._stuffBox.getChildAt(i).x = this._allStuffPos[i][0];
      this._stuffBox.getChildAt(i).y = this._allStuffPos[i][1];
    //  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  :  ", this._allStuffPos[i][0], this._allStuffPos[i][1]);
    }
    this._innerC.addChild(this._stuffBox);
  }

  public setScarab(val:number):void {
    this._stuffState['scarab']['click'] = val;
    if(val == 2) {
      this._stuffBox.addChild(this._scarabC);
    } else {
      if(val == 0) {
        this._stuffBox.removeChild(this._scarabC);
        this._innerC.addChild(this._scarabC);
      }
      this._scarabC.x = this._stuffState['scarab']['pos'][this._stuffState['scarab']['click']][0];
      this._scarabC.y = this._stuffState['scarab']['pos'][this._stuffState['scarab']['click']][1];
    }
    this.setStuffBoxPos();
  }

  public setWoodTorch(val:number):void {
    this._stuffState['woodTorch']['click'] = val;
    if(val == 2) {
      this._stuffBox.addChild(this._woodTorchC);
    } else {
      if(val == 0) {
        this._stuffBox.removeChild(this._woodTorchC);
        this._innerC.addChild(this._woodTorchC);
      }
      this._woodTorchC.x = this._stuffState['woodTorch']['pos'][val][0];
      this._woodTorchC.y = this._stuffState['woodTorch']['pos'][val][1];
    }
    this.setStuffBoxPos();
  }

  public setShoes(val:number):void {
    this._stuffState['shoes']['click'] = val;
    if(val == 2) {
      this._stuffBox.addChild(this._shoesC);
    } else {
      if(val == 0) {
        this._stuffBox.removeChild(this._shoesC);
        this._innerC.addChild(this._shoesC);
      }
      this._shoesC.x = this._stuffState['shoes']['pos'][this._stuffState['shoes']['click']][0];
      this._shoesC.y = this._stuffState['shoes']['pos'][this._stuffState['shoes']['click']][1];
    }
    this.setStuffBoxPos();
  }

  public setEyeOfRa(val:number):void {
    this._stuffState['eyeOfRa']['click'] = val;
    if(val == 2) {
      this._stuffBox.addChild(this._eyeOfRaC);
    } else {
      if(val == 0) {
        this._stuffBox.removeChild(this._eyeOfRaC);
        this._innerC.addChild(this._eyeOfRaC);
      }
      this._eyeOfRaC.x = this._stuffState['eyeOfRa']['pos'][this._stuffState['eyeOfRa']['click']][0];
      this._eyeOfRaC.y = this._stuffState['eyeOfRa']['pos'][this._stuffState['eyeOfRa']['click']][1];
    }
    this.setStuffBoxPos();
  }

  public setPapyrus(val:number):void {
    this._stuffState['papyrus']['click'] = val;
    if(val == 2) {
      this._stuffBox.addChild(this._papyrusC);
    } else {
      if(val == 0) {
        this._stuffBox.removeChild(this._papyrusC);
        this._innerC.addChild(this._papyrusC);
      }
      this._papyrusC.x = this._stuffState['papyrus']['pos'][this._stuffState['papyrus']['click']][0];
      this._papyrusC.y = this._stuffState['papyrus']['pos'][this._stuffState['papyrus']['click']][1];
    }
    this.setStuffBoxPos();
  }

  private dispatch(event:string, param:any) {
    let _event = new CustomEvent(event, {detail:param});
    this._dispachtElement.dispatchEvent(_event);
  }
}
