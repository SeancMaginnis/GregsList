import JobService from "./jobService.js";

let _js = new JobService()


function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('available-jobs').innerHTML = template
}

function logJobs() {
  console.log("jobs UPDATED!!!")
}


export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
    _js.addSubscriber('jobs', logJobs)
    draw()
  }

  addJob(event) {
    event.preventDefault();
    let form = event.target
    let newJob = {
      title: form.title.value,
      hourly: form.hourly.value,
      description: form.description.value,
      img: form.img.value
    }

    _js.addJob(newJob)
    //Clears the form
    form.reset()

  }
  deleteJob(id) {
    _js.deleteJob(id)
  }

}