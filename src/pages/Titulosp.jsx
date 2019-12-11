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
            `http://172.18.2.3:9000/titulosp/${this.state.search}`
        );

        if (dataResponse.data) {
            this.setState({ data: dataResponse.data });
        }

    }

    render() {
        return (
            <div className="row" >
                {this.state.data.map(t => (
                    <div className="col-10 offset-1" style={{ marginTop: '20px' }}>
                        <Titulos titulo={t} />
                    </div>
                ))}

                {this.state.data ?                    
                     (<div> </div>):<div className="col-10 offset-1"
                     style={{
                         marginBlockStart: '30px', marginBlockEnd: '30px',
                         textAlign: 'center', backgroundColor: 'lightgrey'
                     }}>NO HAY TITULOS</div>}

            </div>

        );
    }
}
export default Consulta;
