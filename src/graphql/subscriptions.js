/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRESULTADOGENERAL = /* GraphQL */ `
  subscription OnCreateRESULTADOGENERAL(
    $filter: ModelSubscriptionRESULTADOGENERALFilterInput
  ) {
    onCreateRESULTADOGENERAL(filter: $filter) {
      id
      resultadoQuimico
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRESULTADOGENERAL = /* GraphQL */ `
  subscription OnUpdateRESULTADOGENERAL(
    $filter: ModelSubscriptionRESULTADOGENERALFilterInput
  ) {
    onUpdateRESULTADOGENERAL(filter: $filter) {
      id
      resultadoQuimico
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRESULTADOGENERAL = /* GraphQL */ `
  subscription OnDeleteRESULTADOGENERAL(
    $filter: ModelSubscriptionRESULTADOGENERALFilterInput
  ) {
    onDeleteRESULTADOGENERAL(filter: $filter) {
      id
      resultadoQuimico
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRESULTADOORDEN = /* GraphQL */ `
  subscription OnCreateRESULTADOORDEN(
    $filter: ModelSubscriptionRESULTADOORDENFilterInput
  ) {
    onCreateRESULTADOORDEN(filter: $filter) {
      id
      parametro
      resultado
      ordenpruebaID
      interpretacionAutomatica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRESULTADOORDEN = /* GraphQL */ `
  subscription OnUpdateRESULTADOORDEN(
    $filter: ModelSubscriptionRESULTADOORDENFilterInput
  ) {
    onUpdateRESULTADOORDEN(filter: $filter) {
      id
      parametro
      resultado
      ordenpruebaID
      interpretacionAutomatica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRESULTADOORDEN = /* GraphQL */ `
  subscription OnDeleteRESULTADOORDEN(
    $filter: ModelSubscriptionRESULTADOORDENFilterInput
  ) {
    onDeleteRESULTADOORDEN(filter: $filter) {
      id
      parametro
      resultado
      ordenpruebaID
      interpretacionAutomatica
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEncuestaServicio = /* GraphQL */ `
  subscription OnCreateEncuestaServicio(
    $filter: ModelSubscriptionEncuestaServicioFilterInput
  ) {
    onCreateEncuestaServicio(filter: $filter) {
      id
      encuesta
      usuario
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEncuestaServicio = /* GraphQL */ `
  subscription OnUpdateEncuestaServicio(
    $filter: ModelSubscriptionEncuestaServicioFilterInput
  ) {
    onUpdateEncuestaServicio(filter: $filter) {
      id
      encuesta
      usuario
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEncuestaServicio = /* GraphQL */ `
  subscription OnDeleteEncuestaServicio(
    $filter: ModelSubscriptionEncuestaServicioFilterInput
  ) {
    onDeleteEncuestaServicio(filter: $filter) {
      id
      encuesta
      usuario
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateORDENPRUEBA = /* GraphQL */ `
  subscription OnCreateORDENPRUEBA(
    $filter: ModelSubscriptionORDENPRUEBAFilterInput
  ) {
    onCreateORDENPRUEBA(filter: $filter) {
      id
      ordenID
      PRUEBA {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pRUEBAORDENPRUEBAId
      }
      RESULTADOORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      oRDENPRUEBAPRUEBAId
    }
  }
`;
export const onUpdateORDENPRUEBA = /* GraphQL */ `
  subscription OnUpdateORDENPRUEBA(
    $filter: ModelSubscriptionORDENPRUEBAFilterInput
  ) {
    onUpdateORDENPRUEBA(filter: $filter) {
      id
      ordenID
      PRUEBA {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pRUEBAORDENPRUEBAId
      }
      RESULTADOORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      oRDENPRUEBAPRUEBAId
    }
  }
`;
export const onDeleteORDENPRUEBA = /* GraphQL */ `
  subscription OnDeleteORDENPRUEBA(
    $filter: ModelSubscriptionORDENPRUEBAFilterInput
  ) {
    onDeleteORDENPRUEBA(filter: $filter) {
      id
      ordenID
      PRUEBA {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pRUEBAORDENPRUEBAId
      }
      RESULTADOORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      oRDENPRUEBAPRUEBAId
    }
  }
`;
export const onCreateORDEN = /* GraphQL */ `
  subscription OnCreateORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onCreateORDEN(filter: $filter) {
      id
      estatus
      fechaOrden
      horaOrden
      formatoPago
      envioPaciente
      totalPruebas
      sucursalMuestra
      tratamiento
      capturaOrden
      ORDENPRUEBAS {
        nextToken
        startedAt
      }
      diabetico
      hipertenso
      DOCTOR {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        especialidad
        calle
        numeroExterior
        numeroInterior
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      padecimientos
      medicamentos
      diagnostico
      envioDoctor
      altura
      peso
      indiceMasaCorporal
      temperatura
      costoTotal
      saturacion
      frecuenciaCardiaca
      pacienteID
      RESULTADOGENERAL {
        id
        resultadoQuimico
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fechaTomaMuestr
      horaTomaMuestra
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      oRDENDOCTORId
      oRDENRESULTADOGENERALId
    }
  }
`;
export const onUpdateORDEN = /* GraphQL */ `
  subscription OnUpdateORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onUpdateORDEN(filter: $filter) {
      id
      estatus
      fechaOrden
      horaOrden
      formatoPago
      envioPaciente
      totalPruebas
      sucursalMuestra
      tratamiento
      capturaOrden
      ORDENPRUEBAS {
        nextToken
        startedAt
      }
      diabetico
      hipertenso
      DOCTOR {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        especialidad
        calle
        numeroExterior
        numeroInterior
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      padecimientos
      medicamentos
      diagnostico
      envioDoctor
      altura
      peso
      indiceMasaCorporal
      temperatura
      costoTotal
      saturacion
      frecuenciaCardiaca
      pacienteID
      RESULTADOGENERAL {
        id
        resultadoQuimico
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fechaTomaMuestr
      horaTomaMuestra
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      oRDENDOCTORId
      oRDENRESULTADOGENERALId
    }
  }
`;
export const onDeleteORDEN = /* GraphQL */ `
  subscription OnDeleteORDEN($filter: ModelSubscriptionORDENFilterInput) {
    onDeleteORDEN(filter: $filter) {
      id
      estatus
      fechaOrden
      horaOrden
      formatoPago
      envioPaciente
      totalPruebas
      sucursalMuestra
      tratamiento
      capturaOrden
      ORDENPRUEBAS {
        nextToken
        startedAt
      }
      diabetico
      hipertenso
      DOCTOR {
        id
        nombres
        apellidoPaterno
        apellidoMaterno
        especialidad
        calle
        numeroExterior
        numeroInterior
        colonia
        cp
        municipio
        estado
        pais
        email
        whatsapp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      padecimientos
      medicamentos
      diagnostico
      envioDoctor
      altura
      peso
      indiceMasaCorporal
      temperatura
      costoTotal
      saturacion
      frecuenciaCardiaca
      pacienteID
      RESULTADOGENERAL {
        id
        resultadoQuimico
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fechaTomaMuestr
      horaTomaMuestra
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      oRDENDOCTORId
      oRDENRESULTADOGENERALId
    }
  }
`;
export const onCreatePARAMETROS = /* GraphQL */ `
  subscription OnCreatePARAMETROS(
    $filter: ModelSubscriptionPARAMETROSFilterInput
  ) {
    onCreatePARAMETROS(filter: $filter) {
      id
      nombreParametro
      unidad
      referencia1
      referencia2
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePARAMETROS = /* GraphQL */ `
  subscription OnUpdatePARAMETROS(
    $filter: ModelSubscriptionPARAMETROSFilterInput
  ) {
    onUpdatePARAMETROS(filter: $filter) {
      id
      nombreParametro
      unidad
      referencia1
      referencia2
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePARAMETROS = /* GraphQL */ `
  subscription OnDeletePARAMETROS(
    $filter: ModelSubscriptionPARAMETROSFilterInput
  ) {
    onDeletePARAMETROS(filter: $filter) {
      id
      nombreParametro
      unidad
      referencia1
      referencia2
      pruebaID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePRUEBA = /* GraphQL */ `
  subscription OnCreatePRUEBA($filter: ModelSubscriptionPRUEBAFilterInput) {
    onCreatePRUEBA(filter: $filter) {
      id
      nombre
      categoria
      precio
      precioDescuento
      descripcionCorta
      tiempoEntrega
      indicaciones
      tipoMuestra
      tipoContenedor
      PARAMETROS {
        nextToken
        startedAt
      }
      ORDENPRUEBA {
        id
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        oRDENPRUEBAPRUEBAId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pRUEBAORDENPRUEBAId
    }
  }
`;
export const onUpdatePRUEBA = /* GraphQL */ `
  subscription OnUpdatePRUEBA($filter: ModelSubscriptionPRUEBAFilterInput) {
    onUpdatePRUEBA(filter: $filter) {
      id
      nombre
      categoria
      precio
      precioDescuento
      descripcionCorta
      tiempoEntrega
      indicaciones
      tipoMuestra
      tipoContenedor
      PARAMETROS {
        nextToken
        startedAt
      }
      ORDENPRUEBA {
        id
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        oRDENPRUEBAPRUEBAId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pRUEBAORDENPRUEBAId
    }
  }
`;
export const onDeletePRUEBA = /* GraphQL */ `
  subscription OnDeletePRUEBA($filter: ModelSubscriptionPRUEBAFilterInput) {
    onDeletePRUEBA(filter: $filter) {
      id
      nombre
      categoria
      precio
      precioDescuento
      descripcionCorta
      tiempoEntrega
      indicaciones
      tipoMuestra
      tipoContenedor
      PARAMETROS {
        nextToken
        startedAt
      }
      ORDENPRUEBA {
        id
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        oRDENPRUEBAPRUEBAId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pRUEBAORDENPRUEBAId
    }
  }
`;
export const onCreateDOCTOR = /* GraphQL */ `
  subscription OnCreateDOCTOR($filter: ModelSubscriptionDOCTORFilterInput) {
    onCreateDOCTOR(filter: $filter) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      especialidad
      calle
      numeroExterior
      numeroInterior
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDOCTOR = /* GraphQL */ `
  subscription OnUpdateDOCTOR($filter: ModelSubscriptionDOCTORFilterInput) {
    onUpdateDOCTOR(filter: $filter) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      especialidad
      calle
      numeroExterior
      numeroInterior
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDOCTOR = /* GraphQL */ `
  subscription OnDeleteDOCTOR($filter: ModelSubscriptionDOCTORFilterInput) {
    onDeleteDOCTOR(filter: $filter) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      especialidad
      calle
      numeroExterior
      numeroInterior
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePACIENTE = /* GraphQL */ `
  subscription OnCreatePACIENTE($filter: ModelSubscriptionPACIENTEFilterInput) {
    onCreatePACIENTE(filter: $filter) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      sexo
      fechaNacimiento
      edad
      direccion
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      ORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePACIENTE = /* GraphQL */ `
  subscription OnUpdatePACIENTE($filter: ModelSubscriptionPACIENTEFilterInput) {
    onUpdatePACIENTE(filter: $filter) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      sexo
      fechaNacimiento
      edad
      direccion
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      ORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePACIENTE = /* GraphQL */ `
  subscription OnDeletePACIENTE($filter: ModelSubscriptionPACIENTEFilterInput) {
    onDeletePACIENTE(filter: $filter) {
      id
      nombres
      apellidoPaterno
      apellidoMaterno
      sexo
      fechaNacimiento
      edad
      direccion
      colonia
      cp
      municipio
      estado
      pais
      email
      whatsapp
      ORDENS {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBLOG = /* GraphQL */ `
  subscription OnCreateBLOG($filter: ModelSubscriptionBLOGFilterInput) {
    onCreateBLOG(filter: $filter) {
      id
      titulo
      subtitulo
      texto1
      texto2
      texto3
      imagen1
      imagen2
      imagen3
      fecha
      url1
      url2
      url3
      autor
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBLOG = /* GraphQL */ `
  subscription OnUpdateBLOG($filter: ModelSubscriptionBLOGFilterInput) {
    onUpdateBLOG(filter: $filter) {
      id
      titulo
      subtitulo
      texto1
      texto2
      texto3
      imagen1
      imagen2
      imagen3
      fecha
      url1
      url2
      url3
      autor
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBLOG = /* GraphQL */ `
  subscription OnDeleteBLOG($filter: ModelSubscriptionBLOGFilterInput) {
    onDeleteBLOG(filter: $filter) {
      id
      titulo
      subtitulo
      texto1
      texto2
      texto3
      imagen1
      imagen2
      imagen3
      fecha
      url1
      url2
      url3
      autor
      slug
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
