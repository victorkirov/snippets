const list = []

export default {
  log: (msg) => {
    const time = process.hrtime()

    if (list.length === 0) {
      list.push([msg, 0, time])
    } else {
      const lastItem = list[list.length - 1]

      const diff = process.hrtime(lastItem[2])
      list.push([msg, (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3), time])
    }
  },
  print: () => {
    let item = list.shift()

    while (item) {
      const [msg, duration] = item

      console.log(duration)
      console.log(msg)

      item = list.shift()
    }
  }
}
