"use strict";
/*import * as PIXI from 'pixi.js';
import * as createjs from 'soundjs';*/
function app(global, cb, ismobile) {
    //document.body.appendChild(dispachtElement);
    var _serverInitData;
    // const app = new PIXI.Application({
    // 	autoResize: true,
    //   resolution: devicePixelRatio
    // });
    // app.renderer = PIXI.autoDetectRenderer(1024, 717, {backgroundColor : 0x550000});
    //  document.body.appendChild(app.renderer.view);
    var renderer = PIXI.autoDetectRenderer(1366, 768 /*window.innerWidth, window.innerHeight*/, { backgroundColor: 0x000000 });
    //renderer.resolution = 1;
    //const renderer = new PIXI.WebGLRenderer(1366, 768, {resolution: 1 , backgroundColor : 0x550000});  // only for WebGL
    document.body.appendChild(renderer.view);
    var isLoged = false;
    var uName = "undefined";
    var serverParams = [];
    var serverUrl = "";
    var rawServerParams = location.search;
    //  console.log("&&&&&&&&--- ", rawServerParams);
    var ls = rawServerParams.split("?");
    var inputParamsList = ls[ls.length - 1].split("&");
    for (var i = 0; i < inputParamsList.length; i++) {
        var part = inputParamsList[i].split('=');
        serverParams.push(part);
    }
    for (var i = 0; i < serverParams.length; i++) {
        if (serverParams[i] && serverParams[i][0] && serverParams[i][0] == 'server_url')
            serverUrl = serverParams[i][1];
        if (serverParams[i] && serverParams[i][0] && serverParams[i][0] == 'user_name') {
            uName = serverParams[i][1];
            isLoged = true;
        }
    }
    var myF = document.getElementById("myForm");
    myF.setAttribute('action', serverUrl + "?isMobile=" + ismobile);
    var _mainController = new MainController(cb, renderer, ismobile, isLoged, uName);
    function getServerData() {
        var result = {};
        return result;
    }
    function defineApp() {
        _serverInitData = getServerData();
    }
    document.onkeydown = function (e) {
        var event;
        if ( /*keyboardActive*/true) {
            var code = e.keyCode || e.which;
            console.log(/*screenActive,*/ 'KEYDown:', code);
            if ( /*inGameMenu*/true) {
                switch (code) {
                    case 13: // enter
                        console.log("======== enter =======");
                        event = new CustomEvent('score_cast');
                        dispachtElement.dispatchEvent(event);
                        break;
                    case 32: // space
                        console.log("======== space =======");
                        event = new CustomEvent('win_cast');
                        dispachtElement.dispatchEvent(event);
                        break;
                    case 37: // arrow left
                        //  console.log("---------37");
                        _mainController.moveBall("left");
                        break;
                    case 38: // arrow up
                        //  console.log("---------38");
                        _mainController.moveBall("up");
                        break;
                    case 39: // arrow right
                        _mainController.moveBall("right");
                        break;
                    case 40: // arrow down
                        _mainController.moveBall("down");
                        break;
                }
            }
        }
    };
    document.onkeyup = function (e) {
        var event;
        if ( /*keyboardActive*/true) {
            var code = e.keyCode || e.which;
            if ( /*inGameMenu*/true) {
                switch (code) {
                    default: // eny key
                        _mainController.stopBallMove();
                }
            }
        }
    };
    _mainController.animate();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtzQ0FDc0M7QUFHdEMsU0FBUyxHQUFHLENBQUMsTUFBVSxFQUFFLEVBQWlCLEVBQUUsUUFBZ0I7SUFDMUQsNkNBQTZDO0lBQzdDLElBQUksZUFBc0IsQ0FBQztJQUMzQixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxNQUFNO0lBQ04sbUZBQW1GO0lBQ3JGLGlEQUFpRDtJQUUvQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQSx5Q0FBeUMsRUFBRSxFQUFDLGVBQWUsRUFBRyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ3hILDBCQUEwQjtJQUMxQixzSEFBc0g7SUFDdEgsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3pDLElBQUksT0FBTyxHQUFXLEtBQUssQ0FBQztJQUM1QixJQUFJLEtBQUssR0FBVSxXQUFXLENBQUM7SUFDL0IsSUFBSSxZQUFZLEdBQU8sRUFBRSxDQUFDO0lBQzFCLElBQUksU0FBUyxHQUFVLEVBQUUsQ0FBQztJQUMxQixJQUFJLGVBQWUsR0FBVSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdDLGlEQUFpRDtJQUNqRCxJQUFJLEVBQUUsR0FBaUIsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxJQUFJLGVBQWUsR0FBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQ2xELElBQUksSUFBSSxHQUFpQixlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7SUFFRCxLQUFJLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztRQUMvQyxJQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVk7WUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFDO1lBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FBQztLQUMvSDtJQUNELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxHQUFDLFlBQVksR0FBQyxRQUFRLENBQUMsQ0FBQztJQUU1RCxJQUFJLGVBQWUsR0FBa0IsSUFBSSxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBSWhHLFNBQVMsYUFBYTtRQUNwQixJQUFJLE1BQU0sR0FBRyxFQUVaLENBQUE7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUyxTQUFTO1FBQ2hCLGVBQWUsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBSUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFTLENBQUM7UUFDN0IsSUFBSSxLQUFLLENBQUM7UUFDVixLQUFHLGtCQUFrQixJQUFJLEVBQUM7WUFFMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLEtBQUcsY0FBYyxJQUFJLEVBQUM7Z0JBQ3RCLFFBQU8sSUFBSSxFQUFFO29CQUNULEtBQUssRUFBRSxFQUFHLFFBQVE7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3dCQUN0QyxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ3RDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzNDLE1BQU07b0JBRWYsS0FBSyxFQUFFLEVBQUcsUUFBUTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQ3RDLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDcEMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEQsTUFBTTtvQkFFRyxLQUFLLEVBQUUsRUFBRyxhQUFhO3dCQUNuQiwrQkFBK0I7d0JBQzdCLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3ZDLE1BQU07b0JBRU4sS0FBSyxFQUFFLEVBQUcsV0FBVzt3QkFDakIsK0JBQStCO3dCQUM3QixlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQyxNQUFNO29CQUVOLEtBQUssRUFBRSxFQUFHLGNBQWM7d0JBQ2xCLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLE1BQU07b0JBRU4sS0FBSyxFQUFFLEVBQUcsYUFBYTt3QkFDakIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdkMsTUFBTTtpQkFFYjthQUNIO1NBQ0g7SUFDSCxDQUFDLENBQUE7SUFFRCxRQUFRLENBQUMsT0FBTyxHQUFHLFVBQVMsQ0FBQztRQUMzQixJQUFJLEtBQUssQ0FBQztRQUNWLEtBQUcsa0JBQWtCLElBQUksRUFBQztZQUUxQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDL0IsS0FBRyxjQUFjLElBQUksRUFBQztnQkFDdEIsUUFBTyxJQUFJLEVBQUU7b0JBQ1QsU0FBVSxVQUFVO3dCQUNMLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDNUM7YUFDRjtTQUNGO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVCLENBQUMifQ==