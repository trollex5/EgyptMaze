var sysData:any;
class ResourceLoader {

  private _allImage:Array<any>;
  private _imgCounter:number;
  private _loader = new PIXI.loaders.Loader();


  constructor(){
    this._imgCounter = 0;
  }

  public loadResources(imgs:Array<any>, troll:any,  cbOne:any, cbEnd:any):void {
    this._loader = new PIXI.loaders.Loader();
    this._allImage = imgs;

    for(let i = 0; i < this._allImage.length; i++){
      //console.log("=-=-=-: ", allImage[i].name, allImage[i].url);
      this._loader.add(this._allImage[i].name, this._allImage[i].url);
    }

    this._loader.onLoad.add((e:Event) => {
    //  console.log("one file loaded", e);
      cbOne(troll);
    });

    this._loader.onError.add((e:Event) => {
    //  console.log("+=+==+ ", e);
    });

    this._loader.load((loader:any, resources:any) => {
      console.log("load image---", resources);
      sysData = resources;
      /*var event = new CustomEvent('allLoadCompleate');
      dispachtElement.dispatchEvent(event);*/
    });

    this._loader.onComplete.add(() => {
      cbEnd(troll);
    });
  }

}
