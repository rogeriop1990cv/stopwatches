import React from 'react';

export default class Relogio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: "00:00:00"
    }
  }
  render() {
    const { time } = this.state;
    return (
      <section className="main-time">
        <section className="times" >
          <p name="times" >{ time }</p>
        </section>
        <section>
          <input type="text" className="input-time"/>
          <p className="input-time-iniciar">Iniciar</p>
          <p className="input-time-parar">Parar</p>
          <p className="input-time-resetar">Resetar</p>
        </section>
      </section>
    )
  }
}
