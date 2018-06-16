const { Observable } = require('rxjs')

const timeerStream = Observable.create(observer => {
  let count = 0
  const timerInterval = setInterval(() => {
    observer.next(count++)
  }, 1000)

  return () => {
    clearInterval(timerInterval)
  }
})

timeerStream.subscribe(console.log)