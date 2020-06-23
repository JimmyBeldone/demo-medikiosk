const fullScreen = () => {
  // Kind of painful, but this is how it works for now
  console.log("TCL: fullScreen -> document", document)
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen()
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen()
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen()
  }
}

const lock = orientation => {
  fullScreen()
  console.log("TCL: screen", screen)
  screen.orientation.lock(orientation)
}

export default lock
