const { Observable } = require('rxjs')

const wordStream = Observable.create(observer => {
  observer.next('Hello,')
  observer.next('my name is')
  observer.next('T')
  observer.next('and')
  observer.next('I am FOREVER ALONE')
  observer.next('.')

  observer.complete()
})

wordStream.subscribe({
  next: (value) => { console.log(`msg: ${value}`) },
  complete: () => { console.log('Complete: He is so sad.') },
})
