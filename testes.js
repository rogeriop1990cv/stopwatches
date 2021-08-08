const time = new Date(0)
time.setMinutes(0)
time.setSeconds(10)

const contagemRegressiva = setInterval(() => {
  time.setMilliseconds(time.getMilliseconds() -1)
  // console.log(time.getMilliseconds());
  const timeString = time.toTimeString().slice(3, 8);
  console.log(`${timeString}:${time.getMilliseconds()}`);

  if(timeString === '00:00'){
    clearInterval(contagemRegressiva)
  }

}, 1)
