const faker = require('faker')

module.exports = class Generator {
  constructor (opts = {}) {
    this.list = []

    opts.io.on('connection', socket => {
      this.socket = socket
    })

    const thresh = opts.hardThreshold ? 'hard' : 'begin'

    setInterval(() => {
      this.generatePraise(random(threshold[thresh].random.low, threshold[thresh].random.high))
    }, threshold[thresh].time)

    this.broadcast = this.broadcast.bind(this)
    this.generatePraise = this.generatePraise.bind(this)
  }

  generatePraise (num) {
    let newEvents = []

    for (let k = num; k > 0; k--) {
      newEvents.push({
        id: faker.random.uuid(),
        author: {
          name: faker.name.findName(),
          avatar: faker.image.avatar()
        },
        target: {
          name: faker.name.findName(),
          avatar: faker.image.avatar()
        },
        body: faker.lorem.paragraph(random(1, 5)),
        createdAt: faker.date.past()
      })
    }

    this.broadcast(newEvents)
  }

  broadcast (list = []) {
    if (!this.socket) return

    console.log(`Praise given! ${list.length} new events`)

    this.socket.emit('praise-given', { praise: list })
    
    this.list = []
  }
}

const threshold = {
  begin: {
    random: {
      low: 1,
      high: 1
    },
    time: 1000
  },
  hard: {
    random: {
      low: 1,
      high: 2
    },
    time: 200
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}