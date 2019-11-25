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
        `http://localhost:9000/titulosp/${this.state.search}`
      );
      let sum=0;
      dataResponse.data.map(p=>{
        sum+=p.total;
    })
    
    this.setState({ data: dataResponse.data,sum:sum.toFixed(2) });

  }

    render() {
        return (
            <div className="row" >
                {this.state.data.map(t =>( 
                <div className="col-10 offset-1" style={{marginTop: '20px'}}>
                    <Titulos titulo = {t}/>
                </div>
                ))}
    <div className="col-12 offset-3" style={{marginBlockStart: '20px', marginBlockEnd: '20px'}}>TOTAL: {this.state.sum}</div>
            </div>
        );
    }
}
export default Consulta;