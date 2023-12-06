import { generateId } from "../utils/GenerateId.js"




export class Upgrade{
  name
  price
  qty
  multiplier
  icon
  constructor(name, price, multiplier, icon){
    this.id = generateId()
    this.name = name
    this.price = price
    this.qty = 0
    this.multiplier = multiplier
    this.icon = icon
  }

  get UpgradeButton(){
    return `
<div class="col-6 p-1">
  <button class="btn btn-primary w-100" title="increase cheese production by ${this.multiplier}" onclick="app.UpgradesController.buyUpgrade('${this.id}')">
    <i class="mdi mdi-${this.icon}"></i>${this.name} : ${this.price} [${this.qty}]
  </button>
</div>`
  }
}