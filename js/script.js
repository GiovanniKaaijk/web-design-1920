const video = document.getElementById('video')

let audio, amplitude

function preload () {
  audio = loadSound('audio/f1_rewind.mp3')
}

function setup () {
  createCanvas(0, 0)
  amplitude = new p5.Amplitude()

  video.addEventListener('play', e => {
    audio.play(0, 1, 1, e.target.currentTime)
  })

  video.addEventListener('pause', e => {
    audio.stop()
  })
}

function draw () {
  background(0)
  let amplitudeLevel = amplitude.getLevel()

  if (document.querySelector('span.sound')) {
    document.querySelector('span.sound').style.fontSize = `${Math.pow((amplitudeLevel + 1), 2)}rem`
  }
}