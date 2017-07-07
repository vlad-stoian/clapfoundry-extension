class ClappyView {
  constructor(element, button) {
    this.element = element
    this.button = button
  }

  start(seconds) {
    let firstInterval = seconds * 1000 % 1000
    let timeRemaining = Math.floor(seconds)
    let self = this;
    window.setTimeout(function(){
      self.element.innerHTML = timeRemaining
      self.runLoop(timeRemaining)
    }, firstInterval)
  }

  runLoop(seconds) {
    let self = this
    if(seconds == 0)
      self.element.innerHTML = "CLAP!"
    else
      window.setTimeout(function(){
        self.element.innerHTML = seconds - 1
        self.runLoop(seconds - 1)
      }, 1000)
  }
}
