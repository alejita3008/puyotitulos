import React from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class Titulos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collapseID: "",sum:0
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
                            <div className="col-12 col-md-3 col-sm-12"> Año: {titulo.anio}</div>
                            <div className="col-12 col-md-3 col-sm-12"> Tipo de Saldo: {titulo.ctiposaldo}</div>                            
                            <div className="col-12 col-md-3 col-sm-12">Total: {titulo.total}</div>                            
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'right' }}>
                        <MDBBtn
                            color="primary"
                            onClick={this.toggleCollapse("basicCollapse")}
                            style={{ marginBottom: "1rem" }}
                        >
                            Detalle
                    </MDBBtn>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <div className="row">
                                <div className="col-12 col-md-3 col-sm-12" style={{ textAlign: 'center' }}> Saldo</div>
                                <div className="col-12 col-md-3 col-sm-12"> Monto</div>
                                <div className="col-12 col-md-3 col-sm-12"> Descuento</div>
                                <div className="col-12 col-md-3 col-sm-12"> Total</div>
                            </div>
                            {titulo.detail.map(det => (
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-3 col-sm-12" style={{ textAlign: 'left' }}>  {det.csaldo}</div>
                                        <div className="col-12 col-md-3 col-sm-12">  {det.monto}</div>
                                        <div className="col-12 col-md-3 col-sm-12"> {det.descuento}</div>
                                        <div className="col-12 col-md-3 col-sm-12"> {det.total}</div>
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