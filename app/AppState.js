import { Upgrade } from './models/Upgrade.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  cheese = 0

  clickPower = 1


  autoPower = 0

  clickUpgrades = [
    new Upgrade('Cheese Knife', 25, 1, 'knife'),
    new Upgrade('Cheese shovel', 100, 5, 'shovel'),
    new Upgrade('Cheese Hammer', 200, 10, 'hammer'),
    new Upgrade('Cheese Hand', 2500, 100, 'hand'),
  ]

  autoUpgrades = [
    new Upgrade('Mouse', 10, 1, 'mouse'),
    new Upgrade('shark', 25, 10, 'shark')
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())
console.log('💾', AppState);