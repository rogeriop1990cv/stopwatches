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
            <section className="input-time">
              <input type="text" placeholder="Digite aqui: " />
            </section>
          <section className="menu-time">
            <p className="input-time-iniciar">Iniciar</p>
            <p className="input-time-parar">Parar</p>
            <p className="input-time-resetar">Resetar</p>
          </section>
      </section>
    )
  }
}
