import React from 'react';

export default class Relogio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
      milliseconds: '',
      started: false,
    }


  }
  
  iniciar = (minutos, segundos) => {
    this.setState({
      started: true,
    })
    const time = new Date(0)
      time.setHours (0);
      time.setMinutes(minutos)
      time.setSeconds(segundos)

    this.contagemRegressiva = setInterval(() => {
      time.setMilliseconds(time.getMilliseconds() -4)
      const timeString = time.toTimeString().slice(3, 8);
      this.setState({
        time: `${timeString}`,
        milliseconds: `${time.getMilliseconds()}`,
      })
      if(timeString === '00:00'){
            clearInterval(this.contagemRegressiva)
          }
    }, 1)

  }

  updatetimr = () => {
  }

  parar = () => {
    clearInterval(this.contagemRegressiva)
    console.log('parou')
  }

  resetar = () => {
    this.setState({
      started: false,
    })
  }

  render() {
    document.title = "BeeOnTime"
    const { time, started, milliseconds } = this.state;
    const timer = (
      <section className="times" >
        <p className="minSecs" >{ time }.</p>
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

    return (
      <section className="main-time">
          {started ? timer : inputter}
          <section className="menu-time">
            <p className="input-time-iniciar" onClick={ () => this.iniciar(5,0) }>Iniciar</p>
            <p className="input-time-parar" onClick={ this.parar }>Parar</p>
            <p className="input-time-resetar" onClick={ this.resetar }>Resetar</p>
          </section>
      </section>
    )
  }
}
