import React from "react";
import axios from "axios";
import Titulospat from "../component/Titulospat";

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
            `http://localhost:9000/titulospata?${this.state.search}`
        );
        let sum = 0;
        if (dataResponse.data) {
            dataResponse.data.map(p => {
                sum += p.total;
            })

            this.setState({ data: dataResponse.data, sum: sum.toFixed(2) });
        }       
    }

    render() {
        return (
            <div className="row" >
                {this.state.data.map(t => (
                    <div className="col-10 offset-1" style={{ marginTop: '20px' }}>
                        <Titulospat titulop={t} />
                    </div>
                ))}
                <div className="col-10 offset-1"
                    style={{
                        marginBlockStart: '30px', marginBlockEnd: '30px',
                        textAlign: 'center', backgroundColor: 'lightgrey'
                    }}>TOTAL: {this.state.sum ? this.state.sum : 0}</div>
            </div>
        );
    }
}
export default Consulta;
