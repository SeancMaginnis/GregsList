let id = 1

export default class Jobs {
  constructor(data) {
    this.id = id
    this.price = data.price
    this.title = data.title
    this.img = data.img
    this.description = data.description || 'No Description Provided'
    id++
  }

  getTemplate() {
    return `
        <div class="card col-4" style="background-color: rgba(42, 167, 83, 0.459)">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description} -- ${this.price}</p>
                <button class="btn btn-outline-primary" onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
            </div>
        </div>`
  }
}