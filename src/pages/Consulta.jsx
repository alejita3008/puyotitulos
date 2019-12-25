import React from "react";
import axios from "axios";
import Search from "../component/Search";
import ListaPredios from '../component/ListaPredios'
//import ReCAPTCHA from "react-google-recaptcha";
import ListaPatentes from "../component/ListaPatentes";

class Consulta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tipo: 1,
      num: 1,
      search: "",
      lavel: "Cedula o Ruc"
    };
    this.handleKey = this.handleKey.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    const search = localStorage.getItem('search');
    let tipo = localStorage.getItem('tipo');
    console.log(tipo);
    if(tipo == undefined){
      tipo=1;
    }
    if (search !== "") {
      this.setState({ search, tipo });
      
      setTimeout(() => {
        this.handleSearch(search);
      }, 500);

    }
    else{
      this.setState({tipo:1})
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
      this.setState({ data: [] })
      lavel = "Cedula o Ruc";
      this.setState({ tipo, lavel });
    } else if (tipo === 2) {
      this.setState({ data: [] })
      lavel = "Cedula o Ruc";
      this.setState({ tipo, lavel });
    } else {
      lavel = "Cedula o Ruc";
      this.setState({ search: "", data: [], tipo:1, lavel })
      
    }

    
  };

  handleSearch = async (search) => {
    console.log(search);
    localStorage.setItem('search', search);
    localStorage.setItem('tipo', this.state.tipo);
    let dataResponse = [];

    const data = {
      propietarioID: search,
      recapcha: this.state.recaptcha
    };
    if (this.state.tipo == 1) {
      dataResponse = await axios.post(
        `http://172.18.1.162:9000/predios`, data
      );

    } else {
      //this.props.history.push(`/titulos?${search}`);
      dataResponse = await axios.post(
        `http://172.18.1.162:9000/patentes`, data
      );
    }
    this.setState({ data: dataResponse.data });

  }

  handleKey = (e) => {
    let displayVal = "" + this.state.search;

    if (e.target.id === "1") {
      e = 1
      displayVal += e
    } else if (e.target.id === "2") {
      e = 2
      displayVal += e
    } else if (e.target.id === "3") {
      e = 3
      displayVal += e
    } else if (e.target.id === "4") {
      e = 4
      displayVal += e
    } else if (e.target.id === "5") {
      e = 5
      displayVal += e
    } else if (e.target.id === "6") {
      e = 6
      displayVal += e
    } else if (e.target.id === "7") {
      e = 7
      displayVal += e
    } else if (e.target.id === "8") {
      e = 8
      displayVal += e
    } else if (e.target.id === "9") {
      e = 9
      displayVal += e
    } else if (e.target.id === "0") {
      e = 0
      displayVal += e      
    } else if (e.target.id === "R") {
      displayVal=this.state.search.slice(0, -1)      
    }  
    this.setState({ search: displayVal });
  }

  /*handleRecaptcha=(e)=>{
    console.log(e)
   this.setState({recaptcha:e})
  }*/
  render() {
    return (
      <div className="row">
        <div className="col-10 col-md-10 col-sm-12">
          <Search
            lavel={this.state.lavel}
            tipo={this.state.tipo}
            htndleTipo={this.htndleTipo}
            search={this.state.search}
            valueSearch={this.valueSearch}
            handleSearch={this.handleSearch}
          />
          {/*
          <div className="offset-4" style={{ marginBlockStart: '30px', marginBlockEnd: '30px',
                 textAlign: 'center'  }}>
          <ReCAPTCHA sitekey="6LdMccUUAAAAAJRTSfBk1aMG5ffmKo9WKMi5qU16" hl="es_ES"  onChange={this.handleRecaptcha} />
          </div>*/}
        </div>

        <div className="col-9 col-md-9 col-sm-3 offset-1">
          {this.state.tipo == 1 ? (<ListaPredios data={this.state.data} />) : (<ListaPatentes data={this.state.data} />)}

        </div>
        
        <div className="col-2 col-md-2 col-sm-3">
          <div className="btn-group" role="group" aria-label="First">
            <button type="button" className={`btn-lg btn-warning `} id="1" onClick={this.handleKey}>
              1
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="2" onClick={this.handleKey}>
              2
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="3" onClick={this.handleKey}>
              3
          </button>
          </div>
          <div className="btn-group" role="group" aria-label="First">
            <button type="button" className={`btn-lg btn-warning `} id="4" onClick={this.handleKey}>
              4
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="5" onClick={this.handleKey}>
              5
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="6" onClick={this.handleKey}>
              6
          </button>
          </div>
          <div className="btn-group" role="group" aria-label="First">
            <button type="button" className={`btn-lg btn-warning `} id="7" onClick={this.handleKey}>
              7
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="8" onClick={this.handleKey}>
              8
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="9" onClick={this.handleKey}>
              9
          </button>
          </div>
          <div className="btn-group" role="group" aria-label="First">

            <button type="button" className={`btn-lg btn-warning `} id="0" onClick={this.handleKey}>
              0
          </button>
            <button type="button" className={`btn-lg btn-warning `} id="R" onClick={this.handleKey}>
              Borrar
          </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Consulta;
