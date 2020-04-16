const video = document.getElementById('video')

let audio, amplitude
let toggle = true

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
  let fadeElement = document.querySelector('.fade')
  if(fadeElement) {
    if(toggle) {
      toggle = false

      setTimeout(() => {
        fadeElement.classList.add('hide')
      }, 1000)
      setTimeout(() => {
        toggle = true
      }, 1000)
    }
  }
  if (document.querySelector('span.sound')) {
    document.body.style.setProperty('--fontSize', `${Math.pow((amplitudeLevel + 1.2), 3)}rem`);
  }
}