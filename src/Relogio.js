import React from 'react';

export default class Relogio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: "00:00"
    }


  }
  
  iniciar = (valorInput) => {
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

  }

  render() {
    document.title = "BeeOnTime"
    const { time } = this.state;
    return (
      <section className="main-time">
          <section className="times" >
            <p name="times" >{ time }</p>
          </section>
            <section className="input-time">
              <input type="text" placeholder="Digite aqui: " value="00:00" onClick="this.setSelectionRange" />
            </section>
          <section className="menu-time">
            <p className="input-time-iniciar" onClick={ this.iniciar }>Iniciar</p>
            <p className="input-time-parar" onClick={ this.parar }>Parar</p>
            <p className="input-time-resetar">Resetar</p>
          </section>
      </section>
    )
  }
}
