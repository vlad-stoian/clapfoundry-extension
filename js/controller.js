class Controller {
  init() {
    let repository = new Repository("https://clappy.cfapps.io")
    let timeDisplay = document.getElementById('timeDisplay')
    let button = document.getElementById('clapButton')
    let view = new ClappyView(timeDisplay, button)
    let clappy = new Clappy(repository, window.location.pathname, view)
    button.addEventListener('click', clappy.clap.bind(clappy))
    clappy.poll()
  }
}

document.addEventListener('DOMContentLoaded', function(){
  new Controller().init()
})
