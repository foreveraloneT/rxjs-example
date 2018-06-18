const { Observable } = require('rxjs')
const {
  makeStore,
  increaseTime,
} = require('./store')

const store = makeStore()

const timeerStream = Observable.create(observer => {
  const timerInterval = setInterval(() => {
    store.dispatch(increaseTime())
    observer.next(store.getState().count)
  }, 1000)

  setTimeout(() => {
    observer.complete()
  }, 5000)

  return () => {
    clearInterval(timerInterval)
  }
})

timeerStream.subscribe(console.log)