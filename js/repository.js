class Repository {
  constructor(url) {
    this.url = url
  }

  sendClap(teamName) {
    fetch(this.url+"/"+teamName, {method: 'POST'})
  }

  get(teamName, callback) {
    fetch(this.url+"/"+teamName).then(function(response) {
      return callback(response.json())
    })
  }
}
