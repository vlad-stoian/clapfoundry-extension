class SelectionController {
  init() {
    let button = document.getElementById('selectTeam')
    let form = document.getElementById('selectTeamForm')
    let text = document.getElementById('team')
    button.addEventListener('click', function(){
        window.location = text.value
    })

    form.addEventListener('submit', function(e){
        e.preventDefault()
        window.location = text.value
    })
  }
}

document.addEventListener('DOMContentLoaded', function(){
  new SelectionController().init()
})
