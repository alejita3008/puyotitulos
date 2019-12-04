import React from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class Titulospata extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapseID: "", sum: 0
        }
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    render() {

        const { titulop } = this.props;


        return (
            <div className="title-container">

                <div className="card">
                    <div className="card-header">Titulo: {titulop.ctitulo}</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4 col-md-4 col-sm-12"> Año: {titulop.anio}</div>
                            <div className="col-4 col-md-4 col-sm-12"> Tipo de Saldo: {titulop.ctiposaldo}</div>                            
                            <div className="col-4 col-md-3 col-sm-12">  Total: {titulop.total}</div>
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
                                <div className="col-4 col-md-3 col-sm-12" style={{ textAlign: 'center' }}> Saldo</div>
                                <div className="col-4 col-md-3 col-sm-12"> Monto</div>
                                <div className="col-4 col-md-3 col-sm-12"> Descuento</div>
                            </div>
                            {titulop.detailp.map(det => (
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4 col-md-3 col-sm-12" style={{ textAlign: 'left' }}>  {det.rubro}</div>
                                        <div className="col-4 col-md-3 col-sm-12">  {det.monto}</div> 
                                        <div className="col-4 col-md-3 col-sm-12">  {det.descuento}</div>
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

export default Titulospata