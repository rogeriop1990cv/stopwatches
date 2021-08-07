import React from 'react';

export default class Relogio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: '00',
      seconds: '00',
      milliseconds: '000',
      started: false,
      parado: true,
    }
  }

  timerLogica = (minutos, segundos, milesegundos = 1000) => {
    const time = new Date(0)
      time.setHours (0);
      time.setMinutes(minutos)
      time.setSeconds(segundos)
      time.setMilliseconds(milesegundos)

    this.contagemRegressiva = setInterval(() => {
      time.setMilliseconds(time.getMilliseconds() -4)
      const min = time.toTimeString().slice(3, 5);
      const sec = time.toTimeString().slice(6, 8);
      const timeString = `${min}:${sec}`
      this.setState({
        minutes: min,
        seconds: sec,
        milliseconds: `${time.getMilliseconds()}`,
      })
      if(timeString === '00:00'){
            clearInterval(this.contagemRegressiva)
            this.setState({
              time: `00:00`,
              milliseconds: `000`,
              parado: true,
            })
          }
    }, 1)
  }
  
  iniciar = (minutos, segundos) => {
    const { minutes, seconds, milliseconds } = this.state;

    this.setState({
      started: true,
      parado: false,
    })

    if ( minutes === '00' && seconds === '00' && milliseconds === '000' ) {
      this.timerLogica(minutos, segundos)
    } else {
      this.timerLogica(minutes, seconds, milliseconds)
    }

  }

  updatetimr = () => {
  }

  parar = () => {
    clearInterval(this.contagemRegressiva)
    this.setState({
      parado: true,
    })
  }

  resetar = () => {
    clearInterval(this.contagemRegressiva)
    this.setState({
      minutes: '00',
      seconds: '00',
      milliseconds: '000',
      started: false,
      parado: true,
    })
  }

  render() {
    document.title = "BeeOnTime"
    const { minutes, seconds, started, milliseconds, parado } = this.state;
    const timer = (
      <section className="times" >
        <p className="minSecs" >{ `${minutes}:${seconds}` }.</p>
        <p className="milliseconds">{ milliseconds }</p>
      </section>
    )
    const inputter = (
      <section className="input-time">
        <input type="text" placeholder="Minutos" value="00" onClick="" />
        <p>:</p>
        <input type="text" placeholder="Segundos" value="00" onClick="" />
      </section>
    )

    const parar = (
      <p className="input-time-parar" onClick={ this.parar }>Parar</p>
    )

    const iniciar = (
    <p 
      className="input-time-iniciar"
      onClick={ () => this.iniciar(0,5) }>Iniciar
    </p>
    )

    return (
      <section className="main-time">
          {started ? timer : inputter}
          <section className="menu-time">
            {parado ? iniciar : parar }
            <p className="input-time-resetar" onClick={ this.resetar }>Resetar</p>
          </section>
      </section>
    )
  }
}
