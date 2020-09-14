"use strict";
var ShopView = /** @class */ (function () {
    function ShopView(cMain, dispachtElement) {
        this._innerC = new PIXI.Container();
        this._images = [{ name: 'shopBg', url: 'pics/1366x768/shop_bg.png' },
            { name: 'btnShopBackSymbol', url: 'pics/1366X768/btn_back_arrow_sign.png' },
            { name: 'scarabAnim', url: 'pics/scarab_anim.png' },
            { name: 'woodTorchAnim', url: 'pics/wood_torch_anim.png' },
            { name: 'shoesAnim', url: 'pics/shoes_anim.png' },
            { name: 'eyeOfRa', url: 'pics/eye_of_ra.gif' },
            { name: 'papyrusAnim', url: 'pics/papyrus_anim.png' }];
        this._allStuffPos = [];
        this._stuffState = { 'scarab': { 'click': 0, 'pos': [[480, 690], [480, 690]] },
            'woodTorch': { 'click': 0, 'pos': [[250, 608], [250, 608]] },
            'shoes': { 'click': 0, 'pos': [[250, 690], [250, 690]] },
            'eyeOfRa': { 'click': 0, 'pos': [[330, 690], [330, 690]] },
            'papyrus': { 'click': 0, 'pos': [[405, 690], [405, 690]] }
        };
        this._scarabC = new PIXI.Container();
        this._woodTorchC = new PIXI.Container();
        this._shoesC = new PIXI.Container();
        this._eyeOfRaC = new PIXI.Container();
        this._papyrusC = new PIXI.Container();
        this._allStuffs = [];
        this._stuffBox = new PIXI.Container();
        this._cMain = cMain;
        this._dispachtElement = dispachtElement;
        this._innerC.x = 0;
        this._innerC.y = 0;
        this._innerC.addChild(this._stuffBox);
        this._cMain.addChild(this._innerC);
    }
    ShopView.prototype.createInterface = function () {
        var _this = this;
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
        this._scarabPrice = new PIXI.Text('12', { fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff0000,
            fontWeight: 'bold',
            align: 'center' });
        this._scarabPrice.anchor.set(0.5, 0);
        this._scarabPrice.position.set(22, 25);
        this._scarab = new AnimationTiles("scarabAnim", 45, 45, 12 /*, this._scarabC*/);
        this._scarab.startAnim();
        this._scarabC.name = "scarab";
        this._scarabC.on('pointerdown', function () {
          //  _this._stuffDescription.text = 'Смалява размера на топчето\n и увеличава скорастта му,\n за определен период от време.';
            _this._stuffDescription.text = 'Decreases the size of the ball\n and increases its speed, \n for a certain amount of time.';
            _this.dispatch('scarabClicked', [_this._stuffState['scarab']['click'] += 1, parseInt(_this._scarabPrice.text)]);
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
        this._woodTorchPrice = new PIXI.Text('10', { fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff0000,
            fontWeight: 'bold',
            align: 'center' });
        this._woodTorchPrice.anchor.set(0.5, 0);
        this._woodTorchPrice.position.set(22, 25);
        this._woodTorch = new AnimationTiles("woodTorchAnim", 45, 45, 12 /*, this._woodTorchC*/);
        this._woodTorch.startAnim();
        this._woodTorchC.name = "woodTorch";
        this._woodTorchC.on('pointerdown', function () {
            //_this._stuffDescription.text = 'Увеличава радиусът на видимост\n на топчето, за определен период\n от време.';
            _this._stuffDescription.text = 'Increases the radius \nof view of the ball,\n for a certain amount of time.';
            _this.dispatch('woodTorchClicked', [_this._stuffState['woodTorch']['click'] += 1, parseInt(_this._woodTorchPrice.text)]);
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
        this._shoesPrice = new PIXI.Text('10', { fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff0000,
            fontWeight: 'bold',
            align: 'center' });
        this._shoesPrice.anchor.set(0.5, 0);
        this._shoesPrice.position.set(22, 25);
        this._shoes = new AnimationTiles("shoesAnim", 45, 45, 12 /*, this._shoesC*/);
        this._shoes.startAnim();
        this._shoesC.name = "shoes";
        this._shoesC.on('pointerdown', function () {
            //_this._stuffDescription.text = 'Увеличава скоростта на топчето \n за определен период от време.';
            _this._stuffDescription.text = 'Increases the speed of the ball,\n for a certain amount of time.';
            _this.dispatch('shoesClicked', [_this._stuffState['shoes']['click'] += 1, parseInt(_this._shoesPrice.text)]);
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
        this._eyeOfRaPrice = new PIXI.Text('20', { fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff0000,
            fontWeight: 'bold',
            align: 'center' });
        this._eyeOfRaPrice.anchor.set(0.5, 0);
        this._eyeOfRaPrice.position.set(22, 25);
        this._eyeOfRa = PIXI.Sprite.fromImage(sysData.eyeOfRa.url);
        this._eyeOfRaC.name = "eyeOfRa";
        this._eyeOfRaC.on('pointerdown', function () {
            //_this._stuffDescription.text = 'Прави видим изхода от лабиринта \n през цялото време на текущата игра.';
            _this._stuffDescription.text = 'We see the exit of the labyrinth\n all the time of the current game.';
            _this.dispatch('eyeOfRaClicked', [_this._stuffState['eyeOfRa']['click'] += 1, parseInt(_this._eyeOfRaPrice.text)]);
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
        this._papyrusPrice = new PIXI.Text('20', { fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff0000,
            fontWeight: 'bold',
            align: 'center' });
        this._papyrusPrice.anchor.set(0.5, 0);
        this._papyrusPrice.position.set(22, 25);
        this._papyrus = new AnimationTiles("papyrusAnim", 45, 45, 10 /*, this._papyrusC*/);
        this._papyrus.startAnim();
        this._papyrusC.name = "papyrus";
        this._papyrusC.on('pointerdown', function () {
            //_this._stuffDescription.text = 'Премахва част от мъглата на \n лабиринта през цялата игра.';
            _this._stuffDescription.text = 'Removes part of the mist\n of the labyrinth throughout the game.';
            _this.dispatch('papyrusClicked', [_this._stuffState['papyrus']['click'] += 1, parseInt(_this._papyrusPrice.text)]);
        });
        this._papyrusC.addChild(this._papyrus);
        this._papyrusC.addChild(this._papyrusGraphics);
        this._papyrusC.addChild(this._papyrusPrice);
        this._allStuffs.push(this._papyrusC);
        this._innerC.addChild(this._papyrusC);
        //----------------------------------------------
        //-------------stuffDescription-----------------
        this._stuffDescription = new PIXI.Text('', { fontFamily: 'Arial',
            fontSize: 18,
            fill: 0xffffff,
            fontWeight: 'bold',
            align: 'center' });
        this._stuffDescription.visible = false;
        this._innerC.addChild(this._stuffDescription);
        //----------------------------------------------
        //-------------------_money---------------------
        this._money = new PIXI.Text('0', { fontFamily: 'Arial',
            fontSize: 40,
            fill: 0xffffff,
            fontWeight: 'bold',
            align: 'center' });
        this._money.anchor.set(0.5);
        this._innerC.addChild(this._money);
        //----------------------------------------------
    };
    ShopView.prototype.orientation = function (value) {
        if (value) { // landscape
            this._background.texture = this._backgroundLandscape;
            this._frame.texture = this._frameTexture;
            this._shopBg.x = 1366 / 2;
            this._shopBg.y = 717 / 2 + 27;
            this._btnShop.x = 1072;
            this._btnShop.y = 640;
            this._stuffState['scarab']['pos'] = [[780, 395], [780, 395]];
            this._stuffState['woodTorch']['pos'] = [[550, 320], [550, 320]];
            this._stuffState['shoes']['pos'] = [[550, 395], [550, 395]];
            this._stuffState['eyeOfRa']['pos'] = [[630, 395], [630, 395]];
            this._stuffState['papyrus']['pos'] = [[705, 395], [705, 395]];
            this._allStuffPos = [[385, 507], [455, 507], [525, 507], [385, 567], [455, 567]];
            this.begin(false);
            this._money.position.set(1366 / 2, 100);
            this._stuffDescription.position.set(640, 620);
        }
        else { // portrait
            this._background.texture = this._backgroundPortrait;
            this._frame.texture = this._framePortraitTexture;
            this._shopBg.x = 768 / 2;
            this._shopBg.y = 1366 / 2;
            this._btnShop.x = 635;
            this._btnShop.y = 1070;
            this._stuffState['scarab']['pos'] = [[480, 690], [480, 690]];
            this._stuffState['woodTorch']['pos'] = [[250, 608], [250, 608]];
            this._stuffState['shoes']['pos'] = [[250, 690], [250, 690]];
            this._stuffState['eyeOfRa']['pos'] = [[330, 690], [330, 690]];
            this._stuffState['papyrus']['pos'] = [[405, 690], [405, 690]];
            this._allStuffPos = [[85, 800], [150, 800], [220, 800], [85, 865], [150, 865]];
            this.begin(false);
            this._money.position.set(768 / 2 + 10, 410);
            this._stuffDescription.position.set(350, 915);
        }
    };
    ShopView.prototype.begin = function (fullReset) {
        this._stuffDescription.text = "";
        for (var i = 0; i < this._allStuffs.length; i++) {
            var name_1 = this._allStuffs[i].name;
            if (name_1) {
                if (fullReset) {
                    this._stuffBox.removeChildren();
                    this._stuffState[name_1]['click'] = 0;
                    this._innerC.addChild(this._allStuffs[i]);
                }
                console.log("BVBVB ", name_1, this._stuffState[name_1]['click']);
                if (this._stuffState[name_1]['click'] != 2) {
                    this._allStuffs[i].x = this._stuffState[name_1]['pos'][this._stuffState[name_1]['click']][0];
                    this._allStuffs[i].y = this._stuffState[name_1]['pos'][this._stuffState[name_1]['click']][1];
                }
                this._allStuffs[i].buttonMode = true;
                this._allStuffs[i].interactive = true;
                this.setStuffBoxPos();
            }
        }
    };
    ShopView.prototype.getResouces = function () {
        return this._images;
    };
    ShopView.prototype.setMoney = function (val) {
        if (val >= 0) {
            this._money.text = val.toString();
        }
        else {
            console.log("shopView - setMoney");
            throw new Error("!!!***Invalid credit value***!!!");
        }
    };
    ShopView.prototype.showStuffDescription = function (val) {
        this._stuffDescription.visible = val;
    };
    ShopView.prototype.setStuffBoxPos = function () {
        for (var i = 0; i < this._stuffBox.children.length; i++) {
            this._stuffBox.getChildAt(i).x = this._allStuffPos[i][0];
            this._stuffBox.getChildAt(i).y = this._allStuffPos[i][1];
            //  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  :  ", this._allStuffPos[i][0], this._allStuffPos[i][1]);
        }
        this._innerC.addChild(this._stuffBox);
    };
    ShopView.prototype.setScarab = function (val) {
        this._stuffState['scarab']['click'] = val;
        if (val == 2) {
            this._stuffBox.addChild(this._scarabC);
        }
        else {
            if (val == 0) {
                this._stuffBox.removeChild(this._scarabC);
                this._innerC.addChild(this._scarabC);
            }
            this._scarabC.x = this._stuffState['scarab']['pos'][this._stuffState['scarab']['click']][0];
            this._scarabC.y = this._stuffState['scarab']['pos'][this._stuffState['scarab']['click']][1];
        }
        this.setStuffBoxPos();
    };
    ShopView.prototype.setWoodTorch = function (val) {
        this._stuffState['woodTorch']['click'] = val;
        if (val == 2) {
            this._stuffBox.addChild(this._woodTorchC);
        }
        else {
            if (val == 0) {
                this._stuffBox.removeChild(this._woodTorchC);
                this._innerC.addChild(this._woodTorchC);
            }
            this._woodTorchC.x = this._stuffState['woodTorch']['pos'][val][0];
            this._woodTorchC.y = this._stuffState['woodTorch']['pos'][val][1];
        }
        this.setStuffBoxPos();
    };
    ShopView.prototype.setShoes = function (val) {
        this._stuffState['shoes']['click'] = val;
        if (val == 2) {
            this._stuffBox.addChild(this._shoesC);
        }
        else {
            if (val == 0) {
                this._stuffBox.removeChild(this._shoesC);
                this._innerC.addChild(this._shoesC);
            }
            this._shoesC.x = this._stuffState['shoes']['pos'][this._stuffState['shoes']['click']][0];
            this._shoesC.y = this._stuffState['shoes']['pos'][this._stuffState['shoes']['click']][1];
        }
        this.setStuffBoxPos();
    };
    ShopView.prototype.setEyeOfRa = function (val) {
        this._stuffState['eyeOfRa']['click'] = val;
        if (val == 2) {
            this._stuffBox.addChild(this._eyeOfRaC);
        }
        else {
            if (val == 0) {
                this._stuffBox.removeChild(this._eyeOfRaC);
                this._innerC.addChild(this._eyeOfRaC);
            }
            this._eyeOfRaC.x = this._stuffState['eyeOfRa']['pos'][this._stuffState['eyeOfRa']['click']][0];
            this._eyeOfRaC.y = this._stuffState['eyeOfRa']['pos'][this._stuffState['eyeOfRa']['click']][1];
        }
        this.setStuffBoxPos();
    };
    ShopView.prototype.setPapyrus = function (val) {
        this._stuffState['papyrus']['click'] = val;
        if (val == 2) {
            this._stuffBox.addChild(this._papyrusC);
        }
        else {
            if (val == 0) {
                this._stuffBox.removeChild(this._papyrusC);
                this._innerC.addChild(this._papyrusC);
            }
            this._papyrusC.x = this._stuffState['papyrus']['pos'][this._stuffState['papyrus']['click']][0];
            this._papyrusC.y = this._stuffState['papyrus']['pos'][this._stuffState['papyrus']['click']][1];
        }
        this.setStuffBoxPos();
    };
    ShopView.prototype.dispatch = function (event, param) {
        var _event = new CustomEvent(event, { detail: param });
        this._dispachtElement.dispatchEvent(_event);
    };
    return ShopView;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcFZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9TaG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFxREUsa0JBQVksS0FBb0IsRUFBRSxlQUE4QjtRQWxEeEQsWUFBTyxHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxZQUFPLEdBQWlCLENBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQywyQkFBMkIsRUFBQztZQUNoRCxFQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUMsdUNBQXVDLEVBQUM7WUFDdkUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFFLEdBQUcsRUFBQyxzQkFBc0IsRUFBQztZQUMvQyxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUUsR0FBRyxFQUFDLDBCQUEwQixFQUFDO1lBQ3RELEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUMscUJBQXFCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBQyxvQkFBb0IsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUUsR0FBRyxFQUFDLHVCQUF1QixFQUFDLENBQUMsQ0FBQztRQUM1RSxpQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFVLEVBQUMsUUFBUSxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ3BELFdBQVcsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQztZQUN2RCxPQUFPLEVBQUMsRUFBQyxPQUFP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Q0FBQyxHQUFHLElBQUksR0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxD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
