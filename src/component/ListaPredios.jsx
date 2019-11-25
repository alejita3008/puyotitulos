import React from "react";
import { Link } from 'react-router-dom';

class ListaPredios extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-10 col-md-10 col-sm-3 offset-0">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-3">Catastro</th>
                                <th scope="col-3">Parroquia</th>
                                <th scope="col-3">Dirección</th>
                                <th scope="col-3">Clase</th>                                
                                <th></th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d => (
                                <tr>
                                    <td>{d.ccatastro}</td>
                                    <td>{d.parroquia}</td>
                                    <td>{d.direccion}</td>
                                    <td>{d.clase}</td>
                                    <td><Link to={`titulosp?${d.ccatastro}`}>
                                        <button renderAs="button" className={"btn btn-secondary btn-success"}>
                                            <span>Pagado</span>
                                        </button>
                                    </Link></td>
                                    <td><Link to={`titulos?${d.ccatastro}`}>
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

export default ListaPredios