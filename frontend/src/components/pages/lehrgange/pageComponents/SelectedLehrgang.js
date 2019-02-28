import React, { PureComponent } from 'react'

export default class SelectedLehrgang extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedLehrgang: props.selectedLehrgang,
            newLehrgang: {
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
              },
            lehrgangErstellen: false
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.props.changeSelection('');
    }

    onChange = (e) => {
        if(this.state.selectedLehrgang !== '') {
            let copy = JSON.parse(JSON.stringify(this.state.selectedLehrgang));
            switch (e.target.name) {
                case 'id':
                    copy.id = e.target.value;
                    break;
                case 'lehrgangKurz':
                    copy.lehrgangKurz = e.target.value;
                    break;
                case 'lehrgangLang':
                    copy.lehrgangLang = e.target.value;
                    break;
                default:
                    console.log("nothing: " + e.target.name);
            }

            this.setState({
                selectedLehrgang: copy
            });
        } else {
            let copy = JSON.parse(JSON.stringify(this.state.newLehrgang));
            switch (e.target.name) {
                case 'id':
                    copy.id = e.target.value;
                    break;
                case 'lehrgangKurz':
                    copy.lehrgangKurz = e.target.value;
                    break;
                case 'lehrgangLang':
                    copy.lehrgangLang = e.target.value;
                    break;
                default:
                    console.log("nothing: " + e.target.name);
            }

            this.setState({
                newLehrgang: copy
            });
        }
    }

    saveChanges = (e) => {
        this.props.changeLehrgang(this.state.selectedLehrgang);
        this.props.changeSelection('');
    }

    deleteLehrgang = (e) => {
        this.props.deleteLehrgang(this.state.selectedLehrgang);
        this.props.changeSelection('');
    }

    createLehrgang = (e) => {
        if(this.state.newLehrgang.id !== '' && this.state.newLehrgang.lehrgangKurz !== '' && this.state.newLehrgang.lehrgangLang !== '') {
            this.props.createLehrgang(this.state.newLehrgang);
            this.props.changeCreateLehrgang();
        } else {
            window.alert("Überprüfen Sie Ihre Eingabe");
        }
    }


  render() {
    // this.setState({selectedLehrgang: this.props.selectedLehrgang});
    if(this.props.selectedLehrgang !== '') {
        return (
        <div style={overlayStyle}>
            <div style={popupStyle}>
                <button onClick={this.handleClose} style={closeButtonStyle}>x</button>
                <h2>Lehrgang bearbeiten</h2>
                <label style={labelStyle}>Id</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.id} type="text" name="id"/><br></br>
                <label style={labelStyle}>Name</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.name} type="text" name="name"/><br></br>
                <label style={labelStyle}>Beruf</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.beruf} type="text" name="beruf"/><br></br>
                <label style={labelStyle}>Einsatzstelle 1</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle1} type="text" name="einsatzstelle1"/><br></br>
                <label style={labelStyle}>Einsatzstelle 2</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle2} type="text" name="einsatzstelle2"/><br></br>
                <label style={labelStyle}>Einsatzstelle 3</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle3} type="text"name="einsatzstelle3"/><br></br>
                <label style={labelStyle}>Einsatzstelle 4</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle4} type="text" name="einsatzstelle4"/><br></br>
                <button onClick={this.saveChanges} style={{marginRight: '20px'}}>Speichern</button>
                <button onClick={this.deleteLehrgang}>Löschen</button>
            </div>
        </div>
        )
    } else if (this.props.createLehrgangBool !== true) {
        return (
            <div style={overlayStyle}>
                <div style={popupStyle}>
                    <button onClick={this.props.changeCreateLehrgang} style={closeButtonStyle}>x</button>
                    <h2>Lehrgang erstellen</h2>
                    <label style={labelStyle}>Id</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.id} type="text" name="id"/><br></br>
                    <label style={labelStyle}>Name</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.name} type="text" name="name"/><br></br>
                    <label style={labelStyle}>Beruf</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.beruf} type="text" name="beruf"/><br></br>
                    <label style={labelStyle}>Einsatzstelle 1</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle1} type="text" name="einsatzstelle1"/><br></br>
                    <label style={labelStyle}>Einsatzstelle 2</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle2} type="text" name="einsatzstelle2"/><br></br>
                    <label style={labelStyle}>Einsatzstelle 3</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle3} type="text"name="einsatzstelle3"/><br></br>
                    <label style={labelStyle}>Einsatzstelle 4</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrgang.einsatzstelle4} type="text" name="einsatzstelle4"/><br></br>
                    <button onClick={this.createLehrgang}>Erstellen</button>
                </div>
            </div>
        )
    } else {
        return ""
    }
  }
}

const labelStyle = {
    marginTop: '10px',
    marginBottom: '0'
}

const overlayStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '1000',
    width: '100%',
    height: '100%',
    top: '0px'
}

const closeButtonStyle = {
    float: 'right',
    backgroundColor: 'Transparent',
    border: 'none',
    cursor: 'pointer'
}

const popupStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '100px'
}