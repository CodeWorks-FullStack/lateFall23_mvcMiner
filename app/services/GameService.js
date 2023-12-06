import { AppState } from "../AppState.js"




class GameService{
  autoMine() {
    AppState.cheese += 1
    console.log(AppState.cheese);
    const upgrades = AppState.clickUpgrades
    let cheeseCheck = 0
    upgrades.forEach(upgrade => cheeseCheck += upgrade.multiplier * upgrade.qty)
    AppState.autoPower = cheeseCheck
    AppState.cheese += cheeseCheck
  }

  mine(){
    AppState.cheese += 1
    console.log(AppState.cheese);
    const upgrades = AppState.clickUpgrades
    let cheeseCheck = 0
    upgrades.forEach(upgrade => cheeseCheck += upgrade.multiplier * upgrade.qty)
    AppState.clickPower = cheeseCheck + 1
    AppState.cheese += cheeseCheck
  }
}

export const gameService = new GameService()

