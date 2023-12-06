import { AppState } from "../AppState.js";
import { upgradesService } from "../services/UpgradesService.js";




export class UpgradesController{
  constructor(){
    console.log('Upgrade controller loaded');
    this.drawClickUpgrades()
    AppState.on('clickUpgrades', this.drawClickUpgrades)
  }

  drawClickUpgrades(){
    const upgrades = AppState.clickUpgrades
    let content = ''
    upgrades.forEach(upgrade => content += upgrade.UpgradeButton)
    document.getElementById('shop-buttons').innerHTML = content
  }

  drawAuto(){
    // draw the auto
  }

  buyUpgrade(upgradeId){
    console.log('💳', upgradeId);
    upgradesService.buyUpgrade(upgradeId)

  }

}