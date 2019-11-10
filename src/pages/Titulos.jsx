import React from "react";
import axios from "axios";
import Titulos from "../component/Titulos";
class Consulta extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            search: props.location.search.substr(1,props.location.search.lenght),
            data:[]
        }
    }
    componentDidMount () {
       this.handleSearch();
    }

    
  handleSearch = async () => {
     const dataResponse = await axios.get(
        `http://localhost:9000/titulos/${this.state.search}`
      );
    this.setState({ data: dataResponse.data });

  }

    render() {
        return (
            <div className="row">
                {this.state.data.map(t =>( 
                <div className="col-12 col-sm-6 col-lg-4">
                    <Titulos titulo = {t}/>
                </div>
                ))}
            </div>
        );
    }
}
export default Consulta;
