"use strict";
var Parter = /** @class */ (function () {
    function Parter(cMain) {
        this._innerC = new PIXI.Container();
        this._images = [{ name: 'frame', url: 'pics/1366x768/frame.png' },
            { name: 'framePortrait', url: 'pics/1366x768/frame_portrait.png' },
            { name: 'backgroundLandscape', url: 'pics/1366x768/piramid_bg.png' },
            { name: 'backgroundPortrait', url: 'pics/1366x768/piramid_bg_portrait.png' },
            { name: 'payTable', url: 'pics/1366x768/pay_bg_gold.png' },
            { name: 'btn1', url: 'pics/1366x768/btn_1.png' },
            { name: 'btn10', url: 'pics/1366x768/btn_10.png' },
            { name: 'btnPlayGreen', url: 'pics/1366x768/btn_play_green.png' },
            { name: 'btnShopBlue', url: 'pics/1366x768/btn_shop_blue.png' },
            { name: 'btnPlaySymbol', url: 'pics/1366x768/btn_play_sign.png' },
            { name: 'btnShopSymbol', url: 'pics/1366x768/btn_shop_sign.png' },
            { name: 'clockTime', url: 'pics/1366x768/sand_clock_sign.png' },
            { name: 'cash', url: 'pics/1366x768/dollar_sign.png' }];
        this._cMain = cMain;
        this._innerC.x = 0;
        this._innerC.y = 0;
        this._cMain.addChild(this._innerC);
    }
    Parter.prototype.createInterface = function () {
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
        this._timeTxt = new PIXI.Text('100', { fontFamily: 'Arial',
            fontSize: 50,
            fill: 0xff0000,
            fontWeight: 'bold',
            align: 'center' });
        this._timeTxt.anchor.set(0.5, 0);
        this._innerC.addChild(this._timeTxt);
        //----------------------------------------------
        //------------------moneyTxt--------------------
        this._moneyTxt = new PIXI.Text('0', { fontFamily: 'Arial',
            fontSize: 50,
            fill: 0x01601c,
            fontWeight: 'bold',
            align: 'center' });
        this._moneyTxt.anchor.set(0.5, 0);
        this._innerC.addChild(this._moneyTxt);
        //----------------------------------------------
    };
    Parter.prototype.orientation = function (value) {
        console.log("******************** ", value);
        if (value) { // landscape
            this._background.texture = this._backgroundLandscape;
            this._frame.texture = this._frameTexture;
            this._payTable.x = 1366 / 2;
            this._payTable.y = 717 / 2 + 50;
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
        }
        else { // portrait
            this._background.texture = this._backgroundPortrait;
            this._frame.texture = this._framePortraitTexture;
            this._payTable.x = 768 / 2;
            this._payTable.y = 1366 / 2;
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
    };
    Parter.prototype.getResouces = function () {
        return this._images;
    };
    Parter.prototype.rotateClock = function () {
        var _this = this;
        var index = 0;
        this._rotateTimer = setInterval(function () {
            index++;
            _this._clockTime.rotation = index * 0.45;
            if (index === 7) {
                clearInterval(_this._rotateTimer);
            }
        }, 20);
    };
    Parter.prototype.rotateMoney = function () {
        var _this = this;
        var index = 0;
        this._rotateTimer = setInterval(function () {
            index++;
            _this._cash.rotation = index * 0.45;
            if (index === 7) {
                clearInterval(_this._rotateTimer);
            }
        }, 20);
    };
    Parter.prototype.setTime = function (val) {
        if (val >= 0) {
            this._timeTxt.text = val.toString();
            if (val == 0) {
                this._btn1Time.disable();
                this._btn10Time.disable();
            }
            else if (val > 0 && val < 10) {
                this._btn1Time.enable();
                this._btn10Time.disable();
            }
            this.checkButtonState();
        }
        else {
            console.log("time value : ", val);
            throw new Error("!!!***Invalid time value***!!!");
        }
    };
    Parter.prototype.setMoney = function (val) {
        if (val >= 0) {
            this._moneyTxt.text = val.toString();
            if (val == 0) {
                this._btn1Money.disable();
                this._btn10Money.disable();
            }
            else if (val > 0 && val < 10) {
                this._btn1Money.enable();
                this._btn10Money.disable();
            }
            this.checkButtonState();
        }
        else {
            console.log("money value : ", val);
            throw new Error("!!!***Invalid money value***!!!");
        }
    };
    Parter.prototype.checkButtonState = function () {
        var t = parseInt(this._timeTxt.text);
        var m = parseInt(this._moneyTxt.text);
        this._btn1Money.enable();
        this._btn10Money.enable();
        this._btn1Time.enable();
        this._btn10Time.enable();
        this._btnPlay.enable();
        if (t == 0) {
            this._btn1Money.disable();
            this._btn10Money.disable();
            this._btnPlay.disable();
        }
        if (t < 10) {
            this._btn10Money.disable();
        }
        if (m == 0) {
            this._btn1Time.disable();
            this._btn10Time.disable();
        }
        if (m < 10) {
            this._btn10Time.disable();
        }
    };
    return Parter;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvUGFydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQW9DRSxnQkFBWSxLQUFvQjtRQWpDeEIsWUFBTyxHQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxZQUFPLEdBQWlCLENBQUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBQyx5QkFBeUIsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUUsR0FBRyxFQUFDLGtDQUFrQyxFQUFDO1lBQzlELEVBQUMsSUFBSSxFQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBQyw4QkFBOEIsRUFBQztZQUNoRSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUMsdUNBQXVDLEVBQUM7WUFDeEUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQywrQkFBK0IsRUFBQztZQUN0RCxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLHlCQUF5QixFQUFDO1lBQzVDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsMEJBQTBCLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUUsR0FBRyxFQUFDLGlDQUFpQyxFQUFDO1lBQzNELEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUMsaUNBQWlDLEVBQUM7WUFDN0QsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFFLEdBQUcsRUFBQyxpQ0FBaUMsRUFBQztZQUM3RCxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLG1DQUFtQyxFQUFDO1lBQzNELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsK0JBQStCLEVBQUMsQ0FBQyxDQUFDO1FBcUJu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