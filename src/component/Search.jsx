import React from "react";
const Search = ({
  htndleTipo,
  tipo,
  lavel,
  handleSearch,
  search,
  valueSearch
}) => (
  <div className="row">
    <div className="col-4 offset-4">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-secondary  ${
            tipo === 1 ? "btn-success" : ""
          }`}
          onClick={() => htndleTipo(1)}
        >
          Cédula o RUC
        </button>
        <button
          type="button"
          className={`btn btn-secondary  ${tipo === 2 ? "btn-success" : ""}`}
          onClick={() => htndleTipo(2)}
        >
          Clave catastral
        </button>
        
      </div>
    </div>
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
  </div>
);

export default Search;
