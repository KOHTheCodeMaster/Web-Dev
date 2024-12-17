import UIHandler from "./handler/UIHandler.js";
import GameLogicHandler from "./handler/GameLogicHandler.js";
import MainController from "./controller/MainController.js";

main();

function main() {

    document.addEventListener('DOMContentLoaded', () => {
        const uiHandler = new UIHandler();
        const gameLogicHandler = new GameLogicHandler();
        new MainController(gameLogicHandler, uiHandler);
    });

}
