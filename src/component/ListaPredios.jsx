import React from "react";
import { Link } from 'react-router-dom';

class ListaPredios extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div className="row">
                <div className="col-6 offset-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Catastro</th>
                                <th scope="col">Parroquia</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Total Deuda</th>
                                <th>Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d => (
                                <tr>
                                    <td>{d.ccatastro}</td>
                                    <td>{d.parroquia}</td>
                                    <td>{d.direccion}</td>
                                    <td>{d.total}</td>
                                    <td><Link to={`titulos?${d.ccatastro}`}>Ver</Link> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default ListaPredios