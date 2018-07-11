// convert hh:mm:ss to seconds
exports.convertToSeconds = (time) => {
  if (time) {
    let a = time.split(':')
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
  } else {
    return 0
  }
}

// prettify seconds (e.g. 180 to 3m)
exports.prettifySec = (time) => {
  const res = new Date(time * 1000).toISOString().substr(11, 12)
  const arr = res.split(':')
  const hh = arr[0] === '00' ? '' : `${Number(arr[0])}h `
  const mm = arr[1] === '00' ? '' : `${Number(arr[1])}m `
  let ss = `${arr[2].split('.')[0]}s`
  return `${hh}${mm}${ss}`
}

// time since
exports.timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000)
  var interval = Math.floor(seconds / 31536000)

  // if (interval > 1) {
  //   return interval + ' years'
  // }
  // interval = Math.floor(seconds / 2592000)
  // if (interval > 1) {
  //   return interval + ' months'
  // }
  interval = Math.floor(seconds / 86400)
  // if interval is negative, it's a future dated post
  if (interval < 0) {
    return '0 secs ago'
  }

  if (interval >= 1) {
    if (interval <= 3) {
      if (interval === 1) {
        return interval + ' day ago'
      } else {
        return interval + ' days ago'
      }
    } else {
      return date.toDateString().slice(4, 15)
    }
  }
  interval = Math.floor(seconds / 3600)
  if (interval >= 1) {
    return interval + ' hours ago'
  }
  interval = Math.floor(seconds / 60)
  if (interval >= 1) {
    return interval + ' mins ago'
  }
  if (seconds) {
    return Math.floor(seconds) + ' secs ago'
  } else {
    return '0 secs ago'
  }
}

exports.pickRandom = (array) => array[Math.floor(Math.random() * array.length)]

exports.validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

exports.scrolltobottom = () => {
  let ele = document.getElementById('botui')
  document.body.scrollTop = ele.clientHeight - 420
}

// variables for Botui
exports.delayTime = 1500
exports.buttonDelayTime = 500
