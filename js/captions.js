(() => {
    const video = document.querySelector('video')
    const caption = video.querySelector('track[kind=subtitles]')
  
    const captionsDisplay = document.querySelector('.captions')
  
    let cues = []
    let languages = []

    fetch(caption.src)
    .then(res => res.text())
    .then(res => {
        doCaptions(res, cues, languages)
    })
  
    video.addEventListener('timeupdate', () => {
      const ct = video.currentTime
  
      const activeCues = cues.filter(function (cue) {
        return cue.startTime <= ct && cue.endTime >= ct
      })
  
      WebVTT.processCues(window, activeCues, captionsDisplay)
    })
  })()
  
  function doCaptions (caption, cues, languages) {
    const parser = new WebVTT.Parser(window, WebVTT.StringDecoder())
  
    parser.oncue = cue => {
      cues.push(cue)
    }
    parser.onregion = region => {
      languages.push(region)
    }
    parser.onparsingerror = err => {
      console.log(err)
    }
  
    parser.parse(caption)
    parser.flush()
  }