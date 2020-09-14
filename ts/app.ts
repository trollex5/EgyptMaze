/*import * as PIXI from 'pixi.js';
import * as createjs from 'soundjs';*/


function app(global:any, cb:HTMLDivElement, ismobile:boolean){
  //document.body.appendChild(dispachtElement);
  let _serverInitData:object;
  // const app = new PIXI.Application({
  // 	autoResize: true,
  //   resolution: devicePixelRatio
  // });
  // app.renderer = PIXI.autoDetectRenderer(1024, 717, {backgroundColor : 0x550000});
//  document.body.appendChild(app.renderer.view);

  let renderer = PIXI.autoDetectRenderer(1366,768/*window.innerWidth, window.innerHeight*/, {backgroundColor : 0x000000});
  //renderer.resolution = 1;
  //const renderer = new PIXI.WebGLRenderer(1366, 768, {resolution: 1 , backgroundColor : 0x550000});  // only for WebGL
  document.body.appendChild(renderer.view);


  let isLoged:boolean = false;
  let uName:string = "undefined";
  let serverParams:any = [];
  let serverUrl:string = "";
  let rawServerParams:string = location.search;
  //  console.log("&&&&&&&&--- ", rawServerParams);
  let ls:Array<string> = rawServerParams.split("?");
  let inputParamsList:Array<string> = ls[ls.length - 1].split("&");
  for(let i:number = 0; i < inputParamsList.length; i++){
      let part:Array<string> = inputParamsList[i].split('=');
      serverParams.push(part);
  }

  for(let i:number = 0; i < serverParams.length; i++){
      if(serverParams[i] && serverParams[i][0] && serverParams[i][0] == 'server_url') serverUrl = serverParams[i][1];
      if(serverParams[i] && serverParams[i][0] && serverParams[i][0] == 'user_name'){ uName = serverParams[i][1]; isLoged = true;}
  }
  let myF = document.getElementById("myForm");
  myF.setAttribute('action', serverUrl+"?isMobile="+ismobile);

  let _mainController:MainController = new MainController(cb, renderer, ismobile, isLoged, uName);



  function getServerData():object {
    let result = {

    }
    return result;
  }

  function defineApp():void {
    _serverInitData = getServerData();
  }



  document.onkeydown = function(e) {
    var event;
    if(/*keyboardActive*/true){

			 var code = e.keyCode || e.which;
		   console.log(/*screenActive,*/ 'KEYDown:',code);
		   if(/*inGameMenu*/true){
					switch(code) {
									case 13:  // enter
                        console.log("======== enter =======");
                        event = new CustomEvent('score_cast');
                        dispachtElement.dispatchEvent(event);
                  break;

									case 32:  // space
                        console.log("======== space =======");
                        event = new CustomEvent('win_cast');
                        dispachtElement.dispatchEvent(event);
									break;

                  case 37:  // arrow left
                      //  console.log("---------37");
                        _mainController.moveBall("left");
                  break;

                  case 38:  // arrow up
                      //  console.log("---------38");
                        _mainController.moveBall("up");
                  break;

                  case 39:  // arrow right
                        _mainController.moveBall("right");
                  break;

                  case 40:  // arrow down
                        _mainController.moveBall("down");
                  break;

          }
       }
    }
  }

  document.onkeyup = function(e) {
    let event;
    if(/*keyboardActive*/true){

			 let code = e.keyCode || e.which;
		   if(/*inGameMenu*/true){
					switch(code) {
									default:  // eny key
                        _mainController.stopBallMove();
          }
        }
      }
  }

  _mainController.animate();
}
