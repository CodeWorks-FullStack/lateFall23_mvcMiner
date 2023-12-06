import { AppState } from "../AppState.js";
import { gameService } from "../services/GameService.js";




export class GameController{
  constructor(){
    console.log('Game controller loaded');
    this.drawCheese()
    AppState.on('cheese', this.drawCheese)
    AppState.on('clickPower', this.drawCheeseCheck)
    setInterval(this.autoMine, 1000)
  }


  mine(){
    console.log('🌕');
    gameService.mine()
    // this.drawCheese() taken care of now by observer
  }

  autoMine(){
    gameService.autoMine()
  }

  drawCheese(){
    let cheese = AppState.cheese
    document.getElementById('cheese-count').innerText = cheese.toString()
  }

  drawCheeseCheck(){
    let check = AppState.clickPower
    document.getElementById('click-power').innerText = check.toString()
  }
}