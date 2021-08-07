const time = new Date(0)
time.setHours(0)
time.setSeconds(10)


// const contagemRegressiva = setInterval(() => {
//   time.setMilliseconds(-1000)
//   console.log(time.toLocaleTimeString())

//   if(time.toLocaleTimeString().replace(/:/gi, '') === '000000'){
//     clearInterval(contagemRegressiva)
//   }

// }, 1000)

// setTimeout(() => {
//   clearInterval(contagemRegressiva)
// }, 5000)
