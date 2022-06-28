import React from 'react'

function ListaEstudios() {
  return (
    <div className="mb-4">
      <h1 className="pt-3 text-center fs-5">
        Hola, parece que todavía no tienes estudios cargados, por favor escríbenos para aclararlo.
      </h1>
      <div className="d-flex justify-content-center pb-3">
      <a href="https://wa.me/+5219511028474">
        <button className="btn btn-success rounded mt-3">¡Solicitar ayuda!</button>
      </a>
    </div>
      </div>
  )
}

export default ListaEstudios