import React, { PureComponent } from 'react'

export default class SelectedEinsatzstelle extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedEinsatzstelle: props.selectedEinsatzstelle,
            newEinsatzstelle: {
                id: '',
                einsatzstelleKurz: '',
                einsatzstelleLang: ''
            },
            einsatzstelleErstellen: false
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.props.changeSelection('');
    }

    onChange = (e) => {
        if(this.state.selectedEinsatzstelle !== '') {
            let copy = JSON.parse(JSON.stringify(this.state.selectedEinsatzstelle));
            switch (e.target.name) {
                case 'id':
                    copy.id = e.target.value;
                    break;
                case 'einsatzstelleKurz':
                    copy.einsatzstelleKurz = e.target.value;
                    break;
                case 'einsatzstelleLang':
                    copy.einsatzstelleLang = e.target.value;
                    break;
                default:
                    console.log("nothing: " + e.target.name);
            }

            this.setState({
                selectedEinsatzstelle: copy
            });
        } else {
            let copy = JSON.parse(JSON.stringify(this.state.newEinsatzstelle));
            switch (e.target.name) {
                case 'id':
                    copy.id = e.target.value;
                    break;
                case 'einsatzstelleKurz':
                    copy.einsatzstelleKurz = e.target.value;
                    break;
                case 'einsatzstelleLang':
                    copy.einsatzstelleLang = e.target.value;
                    break;
                default:
                    console.log("nothing: " + e.target.name);
            }

            this.setState({
                newEinsatzstelle: copy
            });
        }
    }

    saveChanges = (e) => {
        this.props.changeEinsatzstelle(this.state.selectedEinsatzstelle);
        this.props.changeSelection('');
    }

    deleteEinsatzstelle = (e) => {
        this.props.deleteEinsatzstelle(this.state.selectedEinsatzstelle);
        this.props.changeSelection('');
    }

    createEinsatzstelle = (e) => {
        if(this.state.newEinsatzstelle.id !== '' && this.state.newEinsatzstelle.einsatzstelleKurz !== '' && this.state.newEinsatzstelle.einsatzstelleLang !== '') {
            this.props.createEinsatzstelle(this.state.newEinsatzstelle);
            this.props.changeCreateEinsatzstelle();
        } else {
            window.alert("Überprüfen Sie Ihre Eingabe");
        }
    }


  render() {
    // this.setState({selectedEinsatzstelle: this.props.selectedEinsatzstelle});
    if(this.props.selectedEinsatzstelle !== '') {
        return (
        <div style={overlayStyle}>
            <div style={popupStyle}>
                <button onClick={this.handleClose} style={closeButtonStyle}>x</button>
                <h2>Einsatzstelle bearbeiten</h2>
                <label style={labelStyle}>Id</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.id} type="text" id="id" name="id"/><br></br>
                <label style={labelStyle}>Kurz Bezeichnung</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.kurzBezeichnung} type="text" id="kurzBezeichnung" name="kurzBezeichnung"/><br></br>
                <label style={labelStyle}>Lang Bezeichnung</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.langBezeichnung} type="text" id="langBezeichnung" name="langBezeichnung"/><br></br>
                <label style={labelStyle}>Stellen Beschreibung</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.stellenBeschreibung} type="text" id="stellenBeschreibung" name="stellenBeschreibung"/><br></br>
                <label style={labelStyle}>Bemerkung</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.bemerkung} type="text" id="bemerkung" name="bemerkung"/><br></br>
                <label style={labelStyle}>Beruf</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.beruf.id} type="text" id="beruf" name="beruf"/><br></br>
                <label style={labelStyle}>Lehrjahr</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.lehrjahr} type="text" id="lehrjahr" name="lehrjahr"/><br></br>
                <label style={labelStyle}>Ausbildner</label><br></br>
                <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.ausbildner.id} type="text" id="ausbildner" name="ausbildner"/><br></br>
                <br/>
                <button onClick={this.saveChanges} style={{marginRight: '20px'}}>Speichern</button>
                <button onClick={this.deleteEinsatzstelle}>Löschen</button>
            </div>
        </div>
        )
    } else if (this.props.createEinsatzstelleBool !== true) {
        return (
            <div style={overlayStyle}>
                <div style={popupStyle}>
                    <button onClick={this.props.changeCreateEinsatzstelle} style={closeButtonStyle}>x</button>
                    <h2>Einsatzstelle erstellen</h2>
                        <label style={labelStyle}>Id</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.id} type="text" id="id" name="id"/><br></br>
                        <label style={labelStyle}>Kurz Bezeichnung</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.kurzBezeichnung} type="text" id="kurzBezeichnung" name="kurzBezeichnung"/><br></br>
                        <label style={labelStyle}>Lang Bezeichnung</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.langBezeichnung} type="text" id="langBezeichnung" name="langBezeichnung"/><br></br>
                        <label style={labelStyle}>Stellen Beschreibung</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.stellenBeschreibung} type="text" id="stellenBeschreibung" name="stellenBeschreibung"/><br></br>
                        <label style={labelStyle}>Bemerkung</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.bemerkung} type="text" id="bemerkung" name="bemerkung"/><br></br>
                        <label style={labelStyle}>Beruf</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.beruf} type="text" id="beruf" name="beruf"/><br></br>
                        <label style={labelStyle}>Lehrjahr</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.lehrjahr} type="text" id="lehrjahr" name="lehrjahr"/><br></br>
                        <label style={labelStyle}>Ausbildner</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedEinsatzstelle.ausbildner} type="text" id="ausbildner" name="ausbildner"/><br></br>
                        <br/><button onClick={this.createEinsatzstelle}>Erstellen</button>
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