"use strict";
var StoneTile = /** @class */ (function () {
    function StoneTile(/*cMain:PIXI.Container,*/ imgName, width, height, degree) {
        this._degree = 0;
        this._degree = degree;
        this._tileRect = new PIXI.Rectangle(0, 0, width, height);
        this._texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(sysData[imgName].url), this._tileRect);
        this._tile = new PIXI.Sprite(this._texture);
        if (degree > 0)
            this._tile.rotation = Math.PI * 2 * 0.250;
        //cMain.addChild(this._tile);
    }
    Object.defineProperty(StoneTile.prototype, "tile", {
        get: function () {
            return this._tile;
        },
        enumerable: true,
        configurable: true
    });
    StoneTile.prototype.setX = function (val) {
        this._tile.x = val;
        if (this._degree > 0)
            this._tile.x += 10;
    };
    StoneTile.prototype.setY = function (val) {
        this._tile.y = val;
    };
    return StoneTile;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvbmVUaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvU3RvbmVUaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQU9FLG1CQUFZLHlCQUF5QixDQUFDLE9BQWMsRUFBRSxLQUFZLEVBQUUsTUFBYSxFQUFFLE1BQWE7UUFGeEYsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUd6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFHLE1BQU0sR0FBRyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzVDLDZCQUE2QjtJQUMvQixDQUFDO0lBRUQsc0JBQVcsMkJBQUk7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVNLHdCQUFJLEdBQVgsVUFBWSxHQUFVO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU0sd0JBQUksR0FBWCxVQUFZLEdBQVU7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkMifQ==