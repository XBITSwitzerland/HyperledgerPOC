import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './components/pages/home/Home';
import Lernende from './components/pages/lernende/Lernende';
import Berufe from './components/pages/beruf/Berufe';
import Einsatzstellen from './components/pages/einsatzstelle/Einsatzstellen';
import Lehrgange from './components/pages/lehrgange/Lehrgange';
import Login from './components/login/Login';

class App extends Component {
  state = {
    lehrlinge: [
      {
        id: 1,
        vorname: 'Dany',
        nachname: 'Van der Meij',
        geburtstag: 'xx.xx.xxxx',
        lehrbeginn: 'xx.xx.xxxx',
        lehrende: 'xx.xx.xxxx',
        lehrgang: {
          id: "xxx",
          name: "xxx",
          beruf: {
            id: "1",
            berufKurz: "INF",
            berufLang: "Informatiker"
          },
          einsatzstellen: [{
            id: "1",
            langBezeichnung: "xxx",
            kurzBezeichnung: "xxx",
            stellenBeschreibung: "xxx",
            bemerkung: "xxx",
            beruf: {
              id: "1",
              berufKurz: "INF",
              berufLang: "Informatiker"
            },
            lehrjahr: "xxx",
            ausbildner: {
              id: "1",
              vorname: "Tobias",
              nachname: "Peter",
              geburtstag: "25.06.1959"
            }
          },
          {
            id: "2",
            langBezeichnung: "xxx",
            kurzBezeichnung: "xxx",
            stellenBeschreibung: "xxx",
            bemerkung: "xxx",
            beruf: {
              id: "1",
              berufKurz: "INF",
              berufLang: "Informatiker"
            },
            lehrjahr: "xxx",
            ausbildner: {
              id: "1",
              vorname: "Tobias",
              nachname: "Peter",
              geburtstag: "25.06.1959"
            }}]
          }
      },
      {
        id: 2,
        vorname: 'Ivo',
        nachname: 'Rickenbach',
        geburtstag: 'xx.xx.xxxx',
        lehrbeginn: 'xx.xx.xxxx',
        lehrende: 'xx.xx.xxxx',
        lehrgang: {
          id: "1",
          name: "xxx",
          beruf: {
            id: "1",
            berufKurz: "INF",
            berufLang: "Informatiker"
          },
          einsatzstellen: [{
            id: "1",
            langBezeichnung: "xxx",
            kurzBezeichnung: "xxx",
            stellenBeschreibung: "xxx",
            bemerkung: "xxx",
            beruf: {
              id: "1",
              berufKurz: "INF",
              berufLang: "Informatiker"
            },
            lehrjahr: "xxx",
            ausbildner: {
              id: "1",
              vorname: "Tobias",
              nachname: "Peter",
              geburtstag: "25.06.1959"
            }
          },
          {
            id: "2",
            langBezeichnung: "xxx",
            kurzBezeichnung: "xxx",
            stellenBeschreibung: "xxx",
            bemerkung: "xxx",
            beruf: {
              id: "1",
              berufKurz: "INF",
              berufLang: "Informatiker"
            },
            lehrjahr: "xxx",
            ausbildner: {
              id: "1",
              vorname: "Tobias",
              nachname: "Peter",
              geburtstag: "25.06.1959"
            }
          }]
        }
      }
    ],
    ausbildner: [
      {
        id: "1",
        vorname: "Tobias",
        nachname: "Peter",
        geburtstag: "25.06.1959"
      }
    ],
    berufe: [
      {
        id: "1",
        berufKurz: "INF",
        berufLang: "Informatiker"
      },
      {
        id: "2",
        berufKurz: "KV",
        berufLang: "Kaufmann"
      }
    ],
    einsatzstellen: [
        {
          id: "1",
          langBezeichnung: "xxx",
          kurzBezeichnung: "xxx",
          stellenBeschreibung: "xxx",
          bemerkung: "xxx",
          beruf: {
            id: "1",
            berufKurz: "INF",
            berufLang: "Informatiker"
          },
          lehrjahr: "xxx",
          ausbildner: {
            id: "1",
            vorname: "Tobias",
            nachname: "Peter",
            geburtstag: "25.06.1959"
          }
        },
        {
          id: "2",
          langBezeichnung: "xxx",
          kurzBezeichnung: "xxx",
          stellenBeschreibung: "xxx",
          bemerkung: "xxx",
          beruf: {
            id: "1",
            berufKurz: "INF",
            berufLang: "Informatiker"
          },
          lehrjahr: "xxx",
          ausbildner: {
            id: "1",
            vorname: "Tobias",
            nachname: "Peter",
            geburtstag: "25.06.1959"
          }
        }
    ],
    lehrgange: [
      {
        id: "1",
        name: "xxx",
        beruf: {
          id: "1",
          berufKurz: "INF",
          berufLang: "Informatiker"
        },
        einsatzstellen: [{
          id: "xxx",
          langBezeichnung: "xxx",
          kurzBezeichnung: "xxx",
          stellenBeschreibung: "xxx",
          bemerkung: "xxx",
          beruf: {
            id: "1",
            berufKurz: "INF",
            berufLang: "Informatiker"
          },
          lehrjahr: "xxx",
          ausbildner: {
            id: "1",
            vorname: "Tobias",
            nachname: "Peter",
            geburtstag: "25.06.1959"
          }
        },
        {
          id: "xxx",
          langBezeichnung: "xxx",
          kurzBezeichnung: "xxx",
          stellenBeschreibung: "xxx",
          bemerkung: "xxx",
          beruf: {
            id: "1",
            berufKurz: "INF",
            berufLang: "Informatiker"
          },
          lehrjahr: "xxx",
          ausbildner: {
            id: "1",
            vorname: "Tobias",
            nachname: "Peter",
            geburtstag: "25.06.1959"
          }
        }]
      }
    ]
  }

  /* Funktionen Lehrling */
  changeLehrling = (lehrling) => {
    this.setState({ lehrlinge: this.state.lehrlinge.map(l => {
      if(l.id === lehrling.id) {
        l = lehrling;
      }
      return l;
    })})
  }

  deleteLehrling = (lehrling) => {
    var array = [...this.state.lehrlinge];
    var index = array.indexOf(lehrling);
    array.splice(index, 1);
    this.setState({lehrlinge: array});
  }

  /* Funktionen Beruf */
  changeBeruf = (beruf) => {
    console.log(JSON.stringify(beruf));
    this.setState({ berufe: this.state.berufe.map(l => {
      if(l.id === beruf.id) {
        l = beruf;
      }
      return l;
    })})
  }

  deleteBeruf = (beruf) => {
    var array = [...this.state.berufe];
    var index = array.indexOf(beruf);
    array.splice(index, 1);
    this.setState({berufe: array});
  }

  createBeruf = (beruf) => {
    var newArray = this.state.berufe.slice();
    newArray.push(beruf);
    this.setState({berufe: newArray});
  }

  render() {
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/lernende" render={props => (
          <React.Fragment>
            <Lernende deleteLehrling={this.deleteLehrling} changeLehrling={this.changeLehrling} lehrlinge={this.state.lehrlinge} />
          </React.Fragment>
        )} />
        <Route exact path="/berufe" render={props => (
          <React.Fragment>
            <Berufe createBeruf={this.createBeruf} deleteBeruf={this.deleteBeruf} changeBeruf={this.changeBeruf} berufe={this.state.berufe} />
          </React.Fragment>
        )} />
        <Route exact path="/einsatzstellen" render={props => (
          <React.Fragment>
            <Einsatzstellen createEinsatzstelle={this.createEinsatzstelle} deleteEinsatzstelle={this.deleteEinsatzstelle} changeEinsatzstelle={this.changeEinsatzstelle} einsatzstellen={this.state.einsatzstellen} />
          </React.Fragment>
        )} />
        <Route exact path="/lehrgang" render={props => (
          <React.Fragment>
            <Lehrgange createLehrgang={this.createLehrgang} deleteLehrgang={this.deleteLehrgang} changeLehrgang={this.changeLehrgang} lehrgange={this.state.lehrgange} />
          </React.Fragment>
        )} />
        <Route path="/login" exact component={Login} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
