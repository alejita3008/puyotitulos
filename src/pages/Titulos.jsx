import React from "react";
import axios from "axios";
import Titulos from "../component/Titulos";
class Consulta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: props.location.search.substr(1, props.location.search.lenght),
            data: []
        }
    }
    componentDidMount() {
        this.handleSearch();

    }


    handleSearch = async () => {
        const dataResponse = await axios.get(
            `http://localhost:9000/titulos/${this.state.search}`
        ).then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());
        let sum = 0;
        dataResponse.data.map(p => {
            sum += p.total;
        })

        this.setState({ data: dataResponse.data, sum: sum.toFixed(2) });

    }

    render() {
        return (
            <div className="row" >
                {this.state.data.map(t => (
                    <div className="col-10 offset-1" style={{ marginTop: '20px' }}>
                        <Titulos titulo={t} />
                    </div>
                ))}
                <div className="col-10 offset-1" 
                style={{ marginBlockStart: '30px', marginBlockEnd: '30px',
                 textAlign: 'center', backgroundColor:'lightgrey', 
                 border:'groove' }}>TOTAL: {this.state.sum ? this.state.sum:0}</div>
            </div>
        );
    }
}
export default Consulta;
