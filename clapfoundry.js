function loadMumboJumbo() {
  console.log(chrome.runtime.id)
  var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
      var iframe = document.createElement('iframe');
      // Must be declared at web_accessible_resources in manifest.json
      iframe.src = chrome.runtime.getURL('frame.html');

      // Some styles for a fancy sidebar
      iframe.style.cssText =  'width:100%;height:100%';
      console.log(iframe)
      $('#overlay-content').append(iframe)
  }
}

function init() {
  let repository = new Repository("https://clappy.cfapps.io")
  let clappy = new Clappy(repository, "kubo")
  clappy.poll()
}

function insertClapFoundryIntoTracker() {
  if (document.getElementsByClassName('panel').length > 0) {

    $('.panels ul.items').append('<li class="item clapfoundry" id="foo"><a class="panel_toggle" href="#overlay" id="open-overlay"><span class="panel_name">Clap!</span></a></li>')
    $('body').append('<div id="overlay"><a href="#" class="close">&times;</a><div style="width:100%;height:100%;" id="overlay-content"></div> </div></div><div id="mask" onclick="document.location="#";"></div> ')

    loadMumboJumbo()
    return
  }

  setTimeout ( "insertClapFoundryIntoTracker()", 2000 );
}

setTimeout ( "insertClapFoundryIntoTracker()", 2000 );
init()
