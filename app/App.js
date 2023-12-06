// import { router } from './router-config.js';
import { GameController } from "./controllers/GameController.js"
import { UpgradesController } from "./controllers/UpgradesController.js"

class App {

  GameController = new GameController()
  UpgradesController = new UpgradesController()

}


const app = new App()
// @ts-ignore
window.app = app
