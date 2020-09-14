"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimationTiles = /** @class */ (function (_super) {
    __extends(AnimationTiles, _super);
    function AnimationTiles(imgName, width, height, tiles, cMain) {
        var _this = _super.call(this) || this;
        _this._x = 0;
        _this._y = 0;
        _this._width = width;
        _this._height = height;
        _this._tiles = tiles;
        _this._tileRect = new PIXI.Rectangle(0, 0, width, height);
        _this._texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(sysData[imgName].url), _this._tileRect);
        _this._sprite = new PIXI.Sprite(_this._texture);
        _this._sprite.anchor.set(0.5);
        _this._randomStart = Math.floor((Math.random() * 6000) + 3000);
        if (cMain != undefined) {
            _this._cMain = cMain;
            _this._cMain.addChild(_this._sprite);
        }
        return _this;
    }
    Object.defineProperty(AnimationTiles.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationTiles.prototype, "x", {
        get: function () {
            return this._sprite.x;
        },
        set: function (value) {
            if (value > 0)
                this._sprite.x = value;
        },
        enumerable: true,
        configurable: true
    });
    AnimationTiles.prototype.startAnim = function () {
        var _this = this;
        this._startTimer = setInterval(function () {
            _this.animation();
        }, this._randomStart);
    };
    AnimationTiles.prototype.stopTimer = function () {
        clearInterval(this._startTimer);
    };
    AnimationTiles.prototype.animation = function () {
        var _this = this;
        clearInterval(this._animTimer);
        this._animTimer = setInterval(function () {
            _this._tileRect.x += _this._width;
            if (_this._tileRect.x > _this._width * (_this._tiles - 1)) {
                _this._tileRect.x = 0;
                clearInterval(_this._animTimer);
            }
            _this._sprite.texture.frame = _this._tileRect;
        }, 40);
    };
    return AnimationTiles;
}(PIXI.Sprite));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWF0aW9uVGlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9BbmltYXRpb25UaWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0lBQTZCLGtDQUFXO0lBZXRDLHdCQUFZLE9BQWMsRUFBRSxLQUFZLEVBQUUsTUFBYSxFQUFFLEtBQVksRUFBRSxLQUFxQjtRQUE1RixZQUNFLGlCQUFPLFNBYVI7UUFuQk8sUUFBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFFBQUUsR0FBVSxDQUFDLENBQUM7UUFNcEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFHLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDckIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDOztJQUNILENBQUM7SUFHRCxzQkFBVyxrQ0FBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZCQUFDO2FBSVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7YUFORCxVQUFhLEtBQVk7WUFDdkIsSUFBRyxLQUFLLEdBQUcsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFNTSxrQ0FBUyxHQUFoQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDN0IsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFTLEdBQWhCO1FBQ0UsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sa0NBQVMsR0FBakI7UUFBQSxpQkFVQztRQVRDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7WUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLGFBQWEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDaEM7WUFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBR0gscUJBQUM7QUFBRCxDQUFDLEFBbkVELENBQTZCLElBQUksQ0FBQyxNQUFNLEdBbUV2QyJ9