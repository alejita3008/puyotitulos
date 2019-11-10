import React from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class Titulos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: ""
        }
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    render() {

        const { titulo } = this.props;


        return (
            <div className="title-container">

                <div className="card">
                    <div className="card-header">Titulo: {titulo.ctitulo}</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-6"> Año: {titulo.anio}</div>
                            <div className="col-12 col-md-6"> Tipo de Saldo: {titulo.ctiposaldo}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">Total: {titulo.total}</div>
                            <div className="col-12 col-md-6">Fecha de cobro: {titulo.fecha.substr(0,10)}</div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <MDBBtn
                            color="primary"
                            onClick={this.toggleCollapse("basicCollapse")}
                            style={{ marginBottom: "1rem" }}
                        >
                            Ver detalle
                    </MDBBtn>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            {titulo.detail.map(det => (
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-6"> Saldo: {det.csaldo}</div>
                                        <div className="col-12 col-md-6"> Monto: {det.monto}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">Descuento: {det.descuento}</div>
                                        <div className="col-12 col-md-6">Total: {det.total}</div>
                                    </div>
                                </div>
                            ))}
                        </MDBCollapse>

                    </div>
                </div>
            </div>
        )
    }
}

export default Titulos