import React, { PureComponent } from 'react'

export default class SelectedBeruf extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedBeruf: props.selectedBeruf,
            newBeruf: {
                id: '',
                berufKurz: '',
                berufLang: ''
            },
            berufErstellen: false
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.props.changeSelection('');
    }

    onChange = (e) => {
        if(this.state.selectedBeruf !== '') {
            let copy = JSON.parse(JSON.stringify(this.state.selectedBeruf));
            switch (e.target.name) {
                case 'id':
                    copy.id = e.target.value;
                    break;
                case 'berufKurz':
                    copy.berufKurz = e.target.value;
                    break;
                case 'berufLang':
                    copy.berufLang = e.target.value;
                    break;
                default:
                    console.log("nothing: " + e.target.name);
            }

            this.setState({
                selectedBeruf: copy
            });
        } else {
            let copy = JSON.parse(JSON.stringify(this.state.newBeruf));
            switch (e.target.name) {
                case 'id':
                    copy.id = e.target.value;
                    break;
                case 'berufKurz':
                    copy.berufKurz = e.target.value;
                    break;
                case 'berufLang':
                    copy.berufLang = e.target.value;
                    break;
                default:
                    console.log("nothing: " + e.target.name);
            }

            this.setState({
                newBeruf: copy
            });
        }
    }

    saveChanges = (e) => {
        this.props.changeBeruf(this.state.selectedBeruf);
        this.props.changeSelection('');
    }

    deleteBeruf = (e) => {
        this.props.deleteBeruf(this.state.selectedBeruf);
        this.props.changeSelection('');
    }

    createBeruf = (e) => {
        if(this.state.newBeruf.id !== '' && this.state.newBeruf.berufKurz !== '' && this.state.newBeruf.berufLang !== '') {
            this.props.createBeruf(this.state.newBeruf);
            this.props.changeCreateBeruf();
        } else {
            window.alert("Überprüfen Sie Ihre Eingabe");
        }
    }


  render() {
    // this.setState({selectedBeruf: this.props.selectedBeruf});
    if(this.props.selectedBeruf !== '') {
        return (
        <div style={overlayStyle}>
            <div style={popupStyle}>
                <button onClick={this.handleClose} style={closeButtonStyle}>x</button>
                <h2>Beruf bearbeiten</h2>

                    <label style={labelStyle}>Id</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedBeruf.id} type="text" name="id"/><br></br>
                    <label style={labelStyle}>BerufKurz</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedBeruf.berufKurz} type="text" name="berufKurz"/><br></br>
                    <label style={labelStyle}>BerufLang</label><br></br>
                    <input onChange={this.onChange} value={this.state.selectedBeruf.berufLang} type="text" name="berufLang"/><br></br>
                    <button onClick={this.saveChanges} style={{marginRight: '20px'}}>Speichern</button>
                    <button onClick={this.deleteBeruf}>Löschen</button>
            </div>
        </div>
        )
    } else if (this.props.createBerufBool !== true) {
        return (
            <div style={overlayStyle}>
                <div style={popupStyle}>
                    <button onClick={this.props.changeCreateBeruf} style={closeButtonStyle}>x</button>
                    <h2>Beruf erstellen</h2>

                        <label style={labelStyle}>Id</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedBeruf.id} type="text" id="id" name="id"/><br></br>
                        <label style={labelStyle}>BerufKurz</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedBeruf.berufKurz} type="text" id="berufKurz" name="berufKurz"/><br></br>
                        <label style={labelStyle}>BerufLang</label><br></br>
                        <input onChange={this.onChange} value={this.state.selectedBeruf.berufLang} type="text" id="berufLang" name="berufLang"/><br></br>
                        <button onClick={this.createBeruf}>Erstellen</button>
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