import React from "react";
import { Link } from 'react-router-dom';

class ListaPatentes extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-10 col-md-10 col-sm-3 offset-0">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-3">Patente</th>
                                <th scope="col-3">Actividad</th>
                                <th scope="col-3">Dirección</th>                      
                                <th></th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d => (
                                <tr>
                                    <td>{d.cpatente}</td>
                                    <td>{d.actividad}</td>
                                    <td>{d.direccion}</td>
                                    <td><Link to={`titulospat?${d.cpropietario}`}>
                                        <button renderAs="button" className={"btn btn-secondary btn-success"}>
                                            <span>Pagado</span>
                                        </button>
                                    </Link></td>
                                    <td><Link to={`titulospata?${d.cpropietario}`}>
                                        <button renderAs="button" className={"btn btn-secondary btn-danger"}>
                                            <span>Adeudado</span>
                                        </button>
                                    </Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col=6"></div>
            </div>

        )
    }
}

export default ListaPatentes