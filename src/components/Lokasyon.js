import React from 'react';
import ReactDOM from 'react-dom';

class Lokasyon extends React.Component {
    render() {
        return(
        <div>
            <h1>Enlemi : {this.props.enlem}</h1>
            <h1>Boylami : {this.props.boylam}</h1>
        </div>
        );
    }
}

class Hesapla extends React.Component {
    render() {
        return (
            <div>
                <Lokasyon enlem="35" boylam="17" />
            </div>
        )
    }
}


export {Lokasyon , Hesapla};
ReactDOM.render(<Hesapla />, document.getElementById("root"));