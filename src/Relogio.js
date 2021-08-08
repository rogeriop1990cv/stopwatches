import React from 'react';
import logo from './beedevlogo.png'
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
    time.setHours(0);
    time.setMinutes(minutos)
    time.setSeconds(segundos)
    time.setMilliseconds(milesegundos)

    this.contagemRegressiva = setInterval(() => {
      time.setMilliseconds(time.getMilliseconds() - 4)
      const min = time.toTimeString().slice(3, 5);
      const sec = time.toTimeString().slice(6, 8);
      const timeString = `${min}:${sec}`
      this.setState({
        minutes: min,
        seconds: sec,
        milliseconds: `${time.getMilliseconds()}`,
      })
      if (timeString === '00:00') {
        clearInterval(this.contagemRegressiva)
        this.setState({
          time: `00:00`,
          milliseconds: `000`,
          parado: true,
        })
      }
    }, 1)
  }

  iniciar = () => {
    const { minutes, seconds, milliseconds } = this.state;
    if(minutes+seconds === '0000' ){
      return
    }
    
    this.setState({
      started: true,
      parado: false,
    })
    this.timerLogica(minutes, seconds, milliseconds)
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

  onChangeInput = (event) => {
    let { value, name } = event.target;
    // so aceita numeros.
    value = value.replace(/[a-zA-Z]/g, '00')
    this.setState({ [name]: value })
  }

  onBlueInput = (e) => {
    let { value, name } = e.target;
    if (value.length === 1) { value = `0${value}` }
    if (value.length === 0) { value = `00` }
    this.setState({ [name]: value })
  }

  onFocusSelect = (e) => {
    e.target.select()
  }

  render() {
    document.title = "BeeOnTime"
    const { minutes, seconds, started, milliseconds, parado } = this.state;
    const timer = (
      <section className="times" >
        <p className="minSecs" >{`${minutes}:${seconds}`}.</p>
        <p className="milliseconds">{milliseconds}</p>
      </section>
    )
    const inputter = (
      <section className="input-time">
        <input
        name="minutes"
          type="text"
          maxLength="2"
          value={minutes}
          placeholder="Minutos"
          onChange={this.onChangeInput}
          onFocus={this.onFocusSelect}
          onBlur={this.onBlueInput} />
        <p>:</p>
        <input
        name="seconds"
          maxLength="2"
          type="text"
          placeholder="Segundos"
          value={seconds}
          onChange={this.onChangeInput}
          onFocus={this.onFocusSelect}
          onBlur={this.onBlueInput}
        />
      </section>
    )
    const parar = (
      <p className="input-time-parar" onClick={this.parar}>Parar</p>
    )
    const iniciar = (
      <p
        className="input-time-iniciar"
        onClick={() => this.iniciar()}>Iniciar
      </p>
    )

    return (
        <>
          <section className="logo">
            <img src={ logo } alt="teste" srcset="" />
          </section>
                <section className="main-time">
          {started ? timer : inputter}
          <section className="menu-time">
            {parado ? iniciar : parar}
            <p className="input-time-resetar" onClick={this.resetar}>Resetar</p>
          </section>
                </section>
        </>
    )
  }
}
