"use strict";
var SoundChoose = /** @class */ (function () {
    function SoundChoose(cMain, dispachtElement) {
        this._images = [{ name: 'frame', url: 'pics/1366x768/frame.png' },
            { name: 'framePortrait', url: 'pics/1366x768/frame_portrait.png' },
            { name: 'sndOn', url: 'pics/1366x768/sound_on.png' },
            { name: 'sndOff', url: 'pics/1366x768/sound_off.png' },
            { name: 'preloaderBar', url: 'pics/preloader_bar.png' },
            { name: 'fullScreenButton', url: 'pics/full_screen_button.gif' },
            { name: 'progressBar', url: 'pics/progress_bar.png' }];
        this._cMain = cMain;
        this._dispachtElement = dispachtElement;
        this._preloadBox = new PIXI.Container();
        //  this._preloadBox.anchor.set(0.5);
        this._visualBox = new PIXI.Container();
        this._visualBox.x = 1366 / 2;
        this._visualBox.y = 768 / 2;
    }
    SoundChoose.prototype.createInterface = function () {
        var _this = this;
        if (!this.checkForUnloadedBg()) {
            this._bglandscape = PIXI.Texture.fromImage(sysData.frame.url);
            this._bgPortrait = PIXI.Texture.fromImage(sysData.framePortrait.url);
            this._imgBg = new PIXI.Sprite(this._bglandscape);
            this._cMain.addChild(this._imgBg);
        }
        this._txt = new PIXI.Text('Play with sound?', { fontFamily: 'Arial',
            fontSize: 32,
            fill: 0xffffff,
            align: 'center' });
        this._txt.anchor.set(0.5, 0);
        //this._txt.position.set(1024/2, 350);
        this._visualBox.addChild(this._txt);
        this._btnOn = PIXI.Sprite.fromImage(sysData.sndOn.url);
        this._btnOn.interactive = true;
        this._btnOn.buttonMode = true;
        this._btnOn.anchor.set(0.5, 0);
        this._btnOn.on('pointerdown', function () {
            var event = new CustomEvent('gameWithSound');
            _this.simulateFullScreen();
            setTimeout(function () {
                _this._dispachtElement.dispatchEvent(event);
            }, 10);
            _this._cMain.removeChild(_this._visualBox);
            _this._cMain.addChild(_this._preloadBox);
        });
        this._btnOn.x -= this._btnOn.width;
        this._btnOn.y = 50;
        this._visualBox.addChild(this._btnOn);
        this._btnOff = PIXI.Sprite.fromImage(sysData.sndOff.url);
        this._btnOff.interactive = true;
        this._btnOff.buttonMode = true;
        this._btnOff.anchor.set(0.5, 0);
        this._btnOff.on('pointerdown', function () {
            var event = new CustomEvent('gameWithoutSound');
            _this.simulateFullScreen();
            setTimeout(function () {
                _this._dispachtElement.dispatchEvent(event);
            }, 10);
            _this._cMain.removeChild(_this._visualBox);
            _this._cMain.addChild(_this._preloadBox);
        });
        this._btnOff.x += this._btnOff.width;
        this._btnOff.y = 50;
        //this._btnOff.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
        this._visualBox.addChild(this._btnOff);
        this._prloaderBar = PIXI.Sprite.fromImage(sysData.preloaderBar.url);
        this._prloaderBar.x = -this._prloaderBar.width / 2;
        this._progressBar = PIXI.Sprite.fromImage(sysData.progressBar.url);
        this._progressBar.x = -this._progressBar.width / 2;
        this._progressBar.width = 0;
        this._preloadBox.addChild(this._prloaderBar);
        this._preloadBox.addChild(this._progressBar);
        this._loadPercent = new PIXI.Text('0%', { fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
            align: 'center' });
        this._loadPercent.anchor.set(0.5);
        this._loadPercent.y = -35;
        this._preloadBox.addChild(this._loadPercent);
        this._cMain.addChild(this._visualBox);
    };
    SoundChoose.prototype.orientation = function (value) {
        console.log("******************** ", value);
        if (value) { // landscape
            this._imgBg.texture = this._bglandscape;
            this._visualBox.x = 1366 / 2;
            this._visualBox.y = 768 / 2;
            this._preloadBox.x = 1366 / 2;
            this._preloadBox.y = 768 / 2;
        }
        else { // portrait
            console.log("PORTRAIT");
            this._imgBg.texture = this._bgPortrait;
            this._visualBox.x = 768 / 2;
            this._visualBox.y = 1366 / 2;
            this._preloadBox.x = 768 / 2;
            this._preloadBox.y = 1366 / 2;
            //this._btnOn.rotation = Math.PI * 2 * 0.250;
        }
    };
    SoundChoose.prototype.simulateFullScreen = function () {
        var elem = document.documentElement;
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) ||
            (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) ||
            (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
            (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (elem.requestFullScreen) {
                elem.requestFullScreen();
            }
            else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            }
            else if (elem.webkitRequestFullScreen) {
                elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };
    SoundChoose.prototype.dafaultBackground = function () {
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
    };
    SoundChoose.prototype.roteateElement = function (container, degree) {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        // for(let i = 0; i < container.children.length; i++) {
        //   if(container.children[i] && container.children[i].rotation) {
        //     container.children[i].rotation = degree;
        //   }
        // }
        this._btnOn.rotation = 0;
        container.y = 0;
        container.x = 0;
    };
    SoundChoose.prototype.getResouces = function () {
        return this._images;
    };
    SoundChoose.prototype.setProgressBar = function (value) {
        if (this._loadPercent) {
            if (value > 0 && value < 101) {
                this._loadPercent.text = value.toString();
                this._progressBar.width = Math.round((value / 100) * this._prloaderBar.width);
            }
            else
                throw new Error("invalid value load percent!");
        }
    };
    SoundChoose.prototype.checkForUnloadedBg = function () {
        for (var i in sysData) {
            if (sysData[i].name = "frame" && sysData[i].error !== null) {
                this.dafaultBackground();
                return true;
            }
        }
        return false;
    };
    return SoundChoose;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU291bmRDaG9vc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9Tb3VuZENob29zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUF3QkUscUJBQVksS0FBb0IsRUFBRSxlQUE4QjtRQXBCeEQsWUFBTyxHQUFpQixDQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMseUJBQXlCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFFLEdBQUcsRUFBQyxrQ0FBa0MsRUFBQztZQUM5RCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLDRCQUE0QixFQUFDO1lBQ2hELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUMsNkJBQTZCLEVBQUM7WUFDbEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBQyx3QkFBd0IsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUMsNkJBQTZCLEVBQUM7WUFDNUQsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBQyx1QkFBdUIsRUFBQyxDQUFDLENBQUM7UUFlbEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLHFDQUFxQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0scUNBQWUsR0FBdEI7UUFBQSxpQkFxRUM7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