const server = require('http').createServer()
const io = require('socket.io')(server);
const cors = require('cors')

const PraiseGenerator = require('./generator')

new PraiseGenerator({ io, hardThreshold: process.env.THRESHOLD === 'hard' })

server.listen(4000, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server listening on 4000`)
})
