"use strict";
var Button = /** @class */ (function () {
    function Button(cMain, btnName, imgName, symbol, tiles, width, height) {
        var _this = this;
        this._status = true;
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
        this._imgSprite.on('pointerdown', function () {
            _this.clickBtn();
        });
        this._cMain.addChild(this._imgSprite);
        if (this._symbol != 'none') {
            this._symbolRect = new PIXI.Rectangle(0, 0, this._width, this._height);
            this._symbolSprite = PIXI.Sprite.fromImage(sysData[this._symbol].url);
            this._symbolSprite.texture.frame = this._symbolRect;
            this._symbolSprite.anchor.set(0.5);
            this._symbolSprite.interactive = false;
            this._symbolSprite.name = this._symbol;
            this._imgSprite.addChild(this._symbolSprite);
        }
    }
    Object.defineProperty(Button.prototype, "x", {
        set: function (val) {
            this._imgSprite.x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "y", {
        set: function (val) {
            this._imgSprite.y = val;
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.clickBtn = function () {
        if (this._imgSprite.buttonMode) {
            this._imgSprite.buttonMode = false;
            var that_1 = this;
            this._animTimer = setInterval(function () {
                that_1._imgRect.x += that_1._width;
                if (that_1._imgRect.x > that_1._width * (that_1._tiles - 1)) {
                    that_1._imgRect.x = 0;
                    clearInterval(that_1._animTimer);
                    that_1._imgSprite.buttonMode = true;
                    //  console.log("FFFFFFFFFFFFFFF ", 'button'+that._btnName+'clicked');
                    var event_1 = new CustomEvent('button' + that_1._btnName + 'clicked');
                    dispachtElement.dispatchEvent(event_1);
                }
                that_1._imgSprite.texture.frame = that_1._imgRect;
            }, 40);
        }
    };
    Button.prototype.disable = function () {
        this._imgRect.x = (this._tiles - 1) * this._width;
        this._imgSprite.texture.frame = this._imgRect;
        this._imgSprite.buttonMode = false;
        this._imgSprite.interactive = false;
        this._status = false;
    };
    Button.prototype.enable = function () {
        this._imgRect.x = 0;
        this._imgSprite.texture.frame = this._imgRect;
        this._imgSprite.buttonMode = true;
        this._imgSprite.interactive = true;
        this._status = true;
    };
    Object.defineProperty(Button.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQWlCRSxnQkFBWSxLQUFvQixFQUFFLE9BQWMsRUFBRSxPQUFjLEVBQUUsTUFBYSxFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsTUFBYTtRQUExSCxpQkErQkM7UUFsQ08sWUFBTyxHQUFXLElBQUksQ0FBQztRQUk3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sRUFBQztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELHNCQUFXLHFCQUFDO2FBQVosVUFBYSxHQUFVO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHFCQUFDO2FBQVosVUFBYSxHQUFVO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVPLHlCQUFRLEdBQWhCO1FBQ0UsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO2dCQUM1QixNQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMvQixJQUFHLE1BQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxNQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFDO29CQUMvQyxNQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLGFBQWEsQ0FBQyxNQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQy9CLE1BQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDcEMsc0VBQXNFO29CQUNwRSxJQUFJLE9BQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLEdBQUMsTUFBSSxDQUFDLFFBQVEsR0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUQsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFLLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsTUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDO0lBRU0sd0JBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLHVCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQVcsMEJBQU07YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQWhHRCxJQWdHQyJ9