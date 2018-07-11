import Vue from 'vue'
import { timeSince } from '~/utils/helpers'

Vue.filter('preserveLineBreaks', function (val) {
  if (val) {
    return val.replace(/\n/g, '<br>')
  }
})

Vue.filter('prettyDate', function (dt) {
  if (dt) {
    let date = new Date(dt)
    // if Invalid Date, it's YYYYMMDD
    if (isNaN(date.getMonth())) {
      const year = dt.substring(0, 4)
      const month = dt.substring(4, 6)
      const day = dt.substring(6, 8)
      return timeSince(new Date(year, month - 1, day))
    } else {
      return timeSince(new Date(date))
    }
  }
})
