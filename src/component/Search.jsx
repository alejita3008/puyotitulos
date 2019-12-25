import React from "react";
export class  Search extends React.Component{
  impuesto = null; 

  handlefocus=(t)=>{
    console.log(t);
    this.props.htndleTipo(t);
    if (t==1){
      this.impuesto.focus();
    }
    
  }

  render (){
    const
    {
      htndleTipo,
      tipo,
      lavel,
      handleSearch,
      search,
      valueSearch
    } =this.props;
    return (
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-4 offset-4">
          <div className="input-group mb-">
            <input
              type="text"
              className="form-control"
              placeholder={lavel}
              value={search}
              onChange={e => valueSearch(e)}
              aria-describedby="basic-addon2"            
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => handleSearch(search)}
              >
                Buscar
            </button>
            </div>
          </div>
        </div>
        <div className="col-4 offset-4">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={`btn btn-secondary  ${tipo == 1 ? "btn-success" : ""}`}
              onClick={() => this.handlefocus(1)} ref={(c) => {
                this.impuesto = c;
                }}
            >
              Impuestos
          </button>
            <button
              type="button"
              className={`btn btn-secondary  ${tipo == 2 ? "btn-success" : ""}`}
              onClick={() => this.handlefocus(2)}
            >
              Patentes
          </button>
            <button
              type="button"
              className={`btn btn-secondary  ${tipo == 3 ? "btn-success" : ""}`}
              onClick={() => this.handlefocus(3)} 
            >
              Limpiar
          </button>
  
          </div>
        </div>
      </div>
    );
  }
} 

export default Search;
