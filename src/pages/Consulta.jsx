import React from "react";
import axios from "axios";
import Search from "../component/Search";
import ListaPredios from '../component/ListaPredios'
import ReCAPTCHA from "react-google-recaptcha";
import ListaPatentes from "../component/ListaPatentes";

class Consulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tipo: 1,
      search: "",
      lavel: "Impuestos"
    };
  }
  
  componentDidMount() {
    const search = localStorage.getItem('search');
    console.log(search);
    if (search != "") {
      this.setState({ search });
      this.handleSearch(search);
    }
  }
  valueSearch = e => {
    let { search } = this.state;
    search = e.target.value;
    this.setState({ search });
  };

  htndleTipo = tipo => {
    let lavel = "";
    if (tipo === 1) {
      lavel = " Impuestos";
    } else if (tipo === 2) {
      lavel = "Patentes";
    }

    this.setState({ tipo, lavel });
  };
  handleSearch = async (search) => {
    localStorage.setItem('search', search);
    let dataResponse = [];

    const data ={
      propietarioID: search,
      recapcha: this.state.recaptcha
    };
    if (this.state.tipo == 1) {
      /*const data ={
        propietarioID: search,
        recapcha: this.state.recaptcha
      };*/
      dataResponse = await axios.post(
        `http://localhost:9000/predios`,data
      );

    } else {
      //this.props.history.push(`/titulos?${search}`);
     
      dataResponse = await axios.post(
        `http://localhost:9000/patentes`,data
      );
    }
    this.setState({ data: dataResponse.data });

  }

  handleRecaptcha=(e)=>{
    console.log(e)
   this.setState({recaptcha:e})
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-12 col-sm-12">
          <Search
            lavel={this.state.lavel}
            tipo={this.state.tipo}
            htndleTipo={this.htndleTipo}
            search={this.state.search}
            valueSearch={this.valueSearch}
            handleSearch={this.handleSearch}
          />
          <div className="offset-4" style={{ marginBlockStart: '30px', marginBlockEnd: '30px',
                 textAlign: 'center'  }}>
          <ReCAPTCHA sitekey="6LdMccUUAAAAAJRTSfBk1aMG5ffmKo9WKMi5qU16" hl="es_ES"  onChange={this.handleRecaptcha} />
          </div>
        </div>

        <div className="col-11 col-md-11 col-sm-3 offset-1">
{this.state.tipo==1 ?(<ListaPredios data={this.state.data} />):(<ListaPatentes data={this.state.data} />)}
          
        </div>
      </div>
    );
  }
}
export default Consulta;
