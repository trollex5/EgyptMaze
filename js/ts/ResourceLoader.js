"use strict";
var sysData;
var ResourceLoader = /** @class */ (function () {
    function ResourceLoader() {
        this._loader = new PIXI.loaders.Loader();
        this._imgCounter = 0;
    }
    ResourceLoader.prototype.loadResources = function (imgs, troll, cbOne, cbEnd) {
        this._loader = new PIXI.loaders.Loader();
        this._allImage = imgs;
        for (var i = 0; i < this._allImage.length; i++) {
            //console.log("=-=-=-: ", allImage[i].name, allImage[i].url);
            this._loader.add(this._allImage[i].name, this._allImage[i].url);
        }
        this._loader.onLoad.add(function (e) {
            //  console.log("one file loaded", e);
            cbOne(troll);
        });
        this._loader.onError.add(function (e) {
            //  console.log("+=+==+ ", e);
        });
        this._loader.load(function (loader, resources) {
            console.log("load image---", resources);
            sysData = resources;
            /*var event = new CustomEvent('allLoadCompleate');
            dispachtElement.dispatchEvent(event);*/
        });
        this._loader.onComplete.add(function () {
            cbEnd(troll);
        });
    };
    return ResourceLoader;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9SZXNvdXJjZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxPQUFXLENBQUM7QUFDaEI7SUFPRTtRQUhRLFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFJMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLElBQWUsRUFBRSxLQUFTLEVBQUcsS0FBUyxFQUFFLEtBQVM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQzVDLDZEQUE2RDtZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBTztZQUNoQyxzQ0FBc0M7WUFDcEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFPO1lBQ2pDLDhCQUE4QjtRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBVSxFQUFFLFNBQWE7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEMsT0FBTyxHQUFHLFNBQVMsQ0FBQztZQUNwQjttREFDdUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIn0=