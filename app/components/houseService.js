import House from "../models/house.js"

let _state = {
  houses: [
    new House({ price: 1000000, title: 'Rick and Morty', img: 'https://i.pinimg.com/originals/be/df/b7/bedfb7dbe443427334f9da08d74b39f4.png', description: 'Beware of the garage and PICKLE RICK!!' }),
    new House({ price: 32000, title: 'Tree House!', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Arba_domo_en_la_parko_de_la_Ch%C3%A2teau_de_Langeais_02.jpg/1200px-Arba_domo_en_la_parko_de_la_Ch%C3%A2teau_de_Langeais_02.jpg', description: 'Time to be a kid again!' }),
    new House({ price: 85000, title: 'Houseboat', img: 'https://www.nps.gov/voya/planyourvisit/images/VOYA_web_Houseboat_SugarbushIslandWest_fullsideview.jpg?maxwidth=1200&maxheight=1200&autorotate=false.jpg', description: 'Try not to sink' })
  ]
}

let _subscribers = {
  houses: []
}


function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

export default class HouseService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Houses() {
    return _state.houses
  }
  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }
  deleteHouse(id) {
    for (let i = 0; i < _state.houses.length; i++) {
      let house = _state.houses[i];
      if (house.id == id) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }
}