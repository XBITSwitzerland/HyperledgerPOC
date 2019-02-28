import React, { PureComponent } from 'react'

export default class SelectedLehrling extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedLehrling: props.selectedLehrling
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.props.changeSelection('');
    }

    onChange = (e) => {
        let copy = JSON.parse(JSON.stringify(this.state.selectedLehrling));
        switch (e.target.name) {
            case 'vorname':
                copy.vorname = e.target.value;
                break;
            case 'nachname':
                copy.nachname = e.target.value;
                break;
            case 'geburtstag':
                copy.geburtstag = e.target.value;
                break;
            case 'telefon':
                copy.lehrbeginn = e.target.value;
                break;
            case 'mail':
                copy.lehrende = e.target.value;
                break;
            case 'lehrbeginn':
                copy.lehrgang = e.target.value;
                break;
            default:
                console.log("nothing");
        }

        this.setState({
            selectedLehrling: copy
        })
    }

    saveChanges = (e) => {
        this.props.changeLehrling(this.state.selectedLehrling);
        this.props.changeSelection('');
    }

    deleteLehrling = (e) => {
        this.props.deleteLehrling(this.state.selectedLehrling);
        this.props.changeSelection('');
    }


  render() {
    // this.setState({selectedLehrling: this.props.selectedLehrling});
    if(this.props.selectedLehrling !== '') {
        return (
        <div style={overlayStyle}>
            <div style={popupStyle}>
                <button onClick={this.handleClose} style={closeButtonStyle}>x</button>
                <h2>Lehrling bearbeiten</h2>

                    <label style={labelStyle}>Vorname</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrling.vorname} type="text" name="vorname"/><br></br>
                    <label style={labelStyle}>Nachname</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrling.nachname} type="text" name="nachname"/><br></br>
                    <label style={labelStyle}>Geburtsdatum</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrling.geburtstag} type="text" name="geburtstag"/><br></br>
                    <label style={labelStyle}>Lehrbeginn</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrling.lehrbeginn} type="text" name="telefon"/><br></br>
                    <label style={labelStyle}>Lehrende</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrling.lehrende} type="text" name="mail"/><br></br>
                    <label style={labelStyle}>Lehrgang</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedLehrling.lehrgang} type="text" name="lehrgang"/><br></br>
                    <button onClick={this.saveChanges} style={{marginRight: '20px'}}>Speichern</button>
                    <button onClick={this.deleteLehrling}>Löschen</button>
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