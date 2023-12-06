import { AppState } from "../AppState.js"




class UpgradesService{
  buyUpgrade(upgradeId){
    const foundUpgrade = AppState.clickUpgrades.find(upgrade => upgrade.id == upgradeId)
    if(AppState.cheese >= foundUpgrade.price){
      AppState.cheese -= foundUpgrade.price
      foundUpgrade.qty += 1
      foundUpgrade.price *= 2
      AppState.emit('clickUpgrades')
    }
  }
}

export const upgradesService = new UpgradesService()