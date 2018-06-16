const { interval } = require('rxjs')
const { map, take } = require('rxjs/operators')

const timeerStream = interval(1000).pipe(
  map(val => val * 2),
  take(5),
)

timeerStream.subscribe(console.log)