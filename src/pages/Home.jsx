import React from "react";
import axios from "axios";
import Search from "../component/Search";
import ReCAPTCHA from "react-google-recaptcha";


function onChange(value) {
  console.log("Captcha value:", value);
}



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tipo: 1,
      search: "",
      lavel: "Cédula o RUC"
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
      lavel = " Cédula o RUC";
    } else if (tipo === 2) {
      lavel = "Clave catastral";
    }

    this.setState({ tipo, lavel });
  };
  handleSearch = async (search) => {

    localStorage.setItem('search', search);

    let dataResponse = [];
    if (this.state.tipo == 1) {
      dataResponse = await axios.get(
        `http://172.18.1.162:9000/predios/${search}`
      );

    } else {
      this.props.history.push(`/titulos?${search}`);
    }
    console.log(dataResponse.data);
    this.setState({ data: dataResponse.data });

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
        </div>

        <div className="col-12 col-md-12 col-sm-3 offset-1">
          
        </div>
      </div>
    );
  }
}
export default Home;
