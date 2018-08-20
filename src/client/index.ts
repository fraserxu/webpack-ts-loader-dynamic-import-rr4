console.log('client bundle')

import(/* webpackChunkName: "b" */ './b').then(b => {
  b.say('test')
})
;async () => {
  const a = await import('../shared/a')
  a.say('test 2')
}
