import React from 'react';

export default class Relogio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: "00:00",
      started: false,
    }


  }
  
  iniciar = (valorInput) => {
    this.setState({
      started: true,
    })
    // const time = new Date(0)
    // const 
    // time.setHours(0)
    // time.setSeconds(10);
  }

  updatetimr = () => {
  }

  parar = () => {
    clearInterval(this.createClock)
    console.log('parou')
  }

  resetar = () => {
    this.setState({
      started: false,
    })
  }

  render() {
    const { time, started } = this.state;
    const timer = (
      <section className="times" >
        <p name="times" >{ time }</p>
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
            <p className="input-time-iniciar" onClick={ this.iniciar }>Iniciar</p>
            <p className="input-time-parar" onClick={ this.parar }>Parar</p>
            <p className="input-time-resetar" onClick={ this.resetar }>Resetar</p>
          </section>
      </section>
    )
  }
}
