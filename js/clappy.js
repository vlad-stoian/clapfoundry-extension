class Clappy {
  constructor(repository, teamName, view) {
    this.repository = repository
    this.teamName = teamName
    this.view = view
  }

  clap() {
    this.repository.sendClap(this.teamName)
  }

  poll() {
    this.repository.get(this.teamName, this.valueAvailable.bind(this))
  }

  valueAvailable(json) {
    let self = this
    json.then(function(foo) {
      if(foo.timer_started) {
        window.location.hash = "overlay"
      } else {
        window.setTimeout(self.poll.bind(self), 1000)
      }
    })
  }
}
