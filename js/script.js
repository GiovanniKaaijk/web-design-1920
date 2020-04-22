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
let slidetoggle = true
let bigslideToggle = true
let bigslideLeftToggle = true
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
    document.body.style.setProperty('--fontSize', `${Math.pow((amplitudeLevel + 1.2), 3.5)}rem`);
  }
  if(document.querySelector('span.tilt-3')) {
      let spanParent = document.querySelector('span.tilt-3').parentNode.parentNode.parentNode
      spanParent.style.transform = 'rotate(2deg)'
      let captions = document.querySelector('.captions')
      if(slidetoggle === true) {
          slidetoggle = false
        captions.classList.add('slide')
        setTimeout(() => {
            captions.classList.remove('slide')
            spanParent.style.transform = 'rotate(0deg)'
            slidetoggle = true
        }, 2000);
      }
      
  }
  if(document.querySelector('span.bigslide.left')) {
    if(bigslideLeftToggle === true) {
        let spanParent = document.querySelector('span.bigslide').parentNode.parentNode.parentNode
        spanParent.style.transform = 'rotate(-2deg)'
        let captions = document.querySelector('.captions')
        bigslideLeftToggle = false
      captions.classList.add('bigslide-left')
      setTimeout(() => {
          captions.classList.remove('bigslide-left')
          spanParent.style.transform = 'rotate(0deg)'
          bigslideLeftToggle = true
      }, 1700);
    }
    
}
  if(document.querySelector('span.bigslide')) {
    if(bigslideToggle === true) {
        console.log('test')
        let spanParent = document.querySelector('span.bigslide').parentNode.parentNode.parentNode
        spanParent.style.transform = 'rotate(2deg)'
        let captions = document.querySelector('.captions')
        bigslideToggle = false
      captions.classList.add('bigslide')
      setTimeout(() => {
          captions.classList.remove('bigslide')
          spanParent.style.transform = 'rotate(0deg)'
          bigslideToggle = true
      }, 2000);
    }
    
}
}