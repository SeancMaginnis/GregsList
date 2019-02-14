import Job from "../models/jobs.js"

let _state = {
  jobs: [
    new Job({ price: 42000, title: 'Web Developer', img: 'http://www.webskittersacademy.in/wp-content/uploads/2015/08/web-developer.png', description: 'The Web wants YOU!!!' }),
    new Job({ price: 32000, title: 'In Need of Teachers!', img: 'http://worldartsme.com/images/english-teacher-clipart-1.jpg', description: 'Come join a vital team that isn\'t appreciated' }),
    new Job({ price: 1000000, title: 'Juggler Wanted', img: 'https://i.ytimg.com/vi/dM59UVTQ9A4/maxresdefault.jpg', description: 'Sometimes it pays to juggle' })
  ]
}


let _subscribers = {
  jobs: []
}


function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

//PUBLIC
export default class JobService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Jobs() {
    return _state.jobs
  }
  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _state.jobs.push(newJob)
    setState('jobs', _state.jobs)
  }
  deleteJob(id) {
    for (let i = 0; i < _state.jobs.length; i++) {
      let job = _state.jobs[i];
      if (job.id == id) {
        _state.jobs.splice(i, 1)
        break;
      }
    }
    setState('jobs', _state.jobs)
  }
}