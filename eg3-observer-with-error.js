const { Observable } = require('rxjs')

const wordStream = Observable.create(observer => {
  observer.next('Hello,')
  observer.next('my name is')
  observer.next('T')
  observer.next('and')
  observer.next('I am FOREVER ALONE')
  observer.error('@#$#&^&*&^^7&&')
  observer.next('.')

  observer.complete()
})

wordStream.subscribe({
  next: (value) => { console.log(`msg: ${value}`) },
  complete: () => { console.log('Complete: He is so sad.') },
  error: (error) => { console.log(`Error: ${error}`) }
})