/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRESULTADOGENERAL = /* GraphQL */ `
  mutation CreateRESULTADOGENERAL(
    $input: CreateRESULTADOGENERALInput!
    $condition: ModelRESULTADOGENERALConditionInput
  ) {
    createRESULTADOGENERAL(input: $input, condition: $condition) {
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
export const updateRESULTADOGENERAL = /* GraphQL */ `
  mutation UpdateRESULTADOGENERAL(
    $input: UpdateRESULTADOGENERALInput!
    $condition: ModelRESULTADOGENERALConditionInput
  ) {
    updateRESULTADOGENERAL(input: $input, condition: $condition) {
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
export const deleteRESULTADOGENERAL = /* GraphQL */ `
  mutation DeleteRESULTADOGENERAL(
    $input: DeleteRESULTADOGENERALInput!
    $condition: ModelRESULTADOGENERALConditionInput
  ) {
    deleteRESULTADOGENERAL(input: $input, condition: $condition) {
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
export const createRESULTADOORDEN = /* GraphQL */ `
  mutation CreateRESULTADOORDEN(
    $input: CreateRESULTADOORDENInput!
    $condition: ModelRESULTADOORDENConditionInput
  ) {
    createRESULTADOORDEN(input: $input, condition: $condition) {
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
export const updateRESULTADOORDEN = /* GraphQL */ `
  mutation UpdateRESULTADOORDEN(
    $input: UpdateRESULTADOORDENInput!
    $condition: ModelRESULTADOORDENConditionInput
  ) {
    updateRESULTADOORDEN(input: $input, condition: $condition) {
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
export const deleteRESULTADOORDEN = /* GraphQL */ `
  mutation DeleteRESULTADOORDEN(
    $input: DeleteRESULTADOORDENInput!
    $condition: ModelRESULTADOORDENConditionInput
  ) {
    deleteRESULTADOORDEN(input: $input, condition: $condition) {
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
export const createEncuestaServicio = /* GraphQL */ `
  mutation CreateEncuestaServicio(
    $input: CreateEncuestaServicioInput!
    $condition: ModelEncuestaServicioConditionInput
  ) {
    createEncuestaServicio(input: $input, condition: $condition) {
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
export const updateEncuestaServicio = /* GraphQL */ `
  mutation UpdateEncuestaServicio(
    $input: UpdateEncuestaServicioInput!
    $condition: ModelEncuestaServicioConditionInput
  ) {
    updateEncuestaServicio(input: $input, condition: $condition) {
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
export const deleteEncuestaServicio = /* GraphQL */ `
  mutation DeleteEncuestaServicio(
    $input: DeleteEncuestaServicioInput!
    $condition: ModelEncuestaServicioConditionInput
  ) {
    deleteEncuestaServicio(input: $input, condition: $condition) {
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
export const createORDENPRUEBA = /* GraphQL */ `
  mutation CreateORDENPRUEBA(
    $input: CreateORDENPRUEBAInput!
    $condition: ModelORDENPRUEBAConditionInput
  ) {
    createORDENPRUEBA(input: $input, condition: $condition) {
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
export const updateORDENPRUEBA = /* GraphQL */ `
  mutation UpdateORDENPRUEBA(
    $input: UpdateORDENPRUEBAInput!
    $condition: ModelORDENPRUEBAConditionInput
  ) {
    updateORDENPRUEBA(input: $input, condition: $condition) {
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
export const deleteORDENPRUEBA = /* GraphQL */ `
  mutation DeleteORDENPRUEBA(
    $input: DeleteORDENPRUEBAInput!
    $condition: ModelORDENPRUEBAConditionInput
  ) {
    deleteORDENPRUEBA(input: $input, condition: $condition) {
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
export const createORDEN = /* GraphQL */ `
  mutation CreateORDEN(
    $input: CreateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    createORDEN(input: $input, condition: $condition) {
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
export const updateORDEN = /* GraphQL */ `
  mutation UpdateORDEN(
    $input: UpdateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    updateORDEN(input: $input, condition: $condition) {
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
export const deleteORDEN = /* GraphQL */ `
  mutation DeleteORDEN(
    $input: DeleteORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    deleteORDEN(input: $input, condition: $condition) {
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
export const createPARAMETROS = /* GraphQL */ `
  mutation CreatePARAMETROS(
    $input: CreatePARAMETROSInput!
    $condition: ModelPARAMETROSConditionInput
  ) {
    createPARAMETROS(input: $input, condition: $condition) {
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
export const updatePARAMETROS = /* GraphQL */ `
  mutation UpdatePARAMETROS(
    $input: UpdatePARAMETROSInput!
    $condition: ModelPARAMETROSConditionInput
  ) {
    updatePARAMETROS(input: $input, condition: $condition) {
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
export const deletePARAMETROS = /* GraphQL */ `
  mutation DeletePARAMETROS(
    $input: DeletePARAMETROSInput!
    $condition: ModelPARAMETROSConditionInput
  ) {
    deletePARAMETROS(input: $input, condition: $condition) {
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
export const createPRUEBA = /* GraphQL */ `
  mutation CreatePRUEBA(
    $input: CreatePRUEBAInput!
    $condition: ModelPRUEBAConditionInput
  ) {
    createPRUEBA(input: $input, condition: $condition) {
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
export const updatePRUEBA = /* GraphQL */ `
  mutation UpdatePRUEBA(
    $input: UpdatePRUEBAInput!
    $condition: ModelPRUEBAConditionInput
  ) {
    updatePRUEBA(input: $input, condition: $condition) {
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
export const deletePRUEBA = /* GraphQL */ `
  mutation DeletePRUEBA(
    $input: DeletePRUEBAInput!
    $condition: ModelPRUEBAConditionInput
  ) {
    deletePRUEBA(input: $input, condition: $condition) {
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
export const createDOCTOR = /* GraphQL */ `
  mutation CreateDOCTOR(
    $input: CreateDOCTORInput!
    $condition: ModelDOCTORConditionInput
  ) {
    createDOCTOR(input: $input, condition: $condition) {
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
export const updateDOCTOR = /* GraphQL */ `
  mutation UpdateDOCTOR(
    $input: UpdateDOCTORInput!
    $condition: ModelDOCTORConditionInput
  ) {
    updateDOCTOR(input: $input, condition: $condition) {
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
export const deleteDOCTOR = /* GraphQL */ `
  mutation DeleteDOCTOR(
    $input: DeleteDOCTORInput!
    $condition: ModelDOCTORConditionInput
  ) {
    deleteDOCTOR(input: $input, condition: $condition) {
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
export const createPACIENTE = /* GraphQL */ `
  mutation CreatePACIENTE(
    $input: CreatePACIENTEInput!
    $condition: ModelPACIENTEConditionInput
  ) {
    createPACIENTE(input: $input, condition: $condition) {
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
export const updatePACIENTE = /* GraphQL */ `
  mutation UpdatePACIENTE(
    $input: UpdatePACIENTEInput!
    $condition: ModelPACIENTEConditionInput
  ) {
    updatePACIENTE(input: $input, condition: $condition) {
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
export const deletePACIENTE = /* GraphQL */ `
  mutation DeletePACIENTE(
    $input: DeletePACIENTEInput!
    $condition: ModelPACIENTEConditionInput
  ) {
    deletePACIENTE(input: $input, condition: $condition) {
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
export const createBLOG = /* GraphQL */ `
  mutation CreateBLOG(
    $input: CreateBLOGInput!
    $condition: ModelBLOGConditionInput
  ) {
    createBLOG(input: $input, condition: $condition) {
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
export const updateBLOG = /* GraphQL */ `
  mutation UpdateBLOG(
    $input: UpdateBLOGInput!
    $condition: ModelBLOGConditionInput
  ) {
    updateBLOG(input: $input, condition: $condition) {
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
export const deleteBLOG = /* GraphQL */ `
  mutation DeleteBLOG(
    $input: DeleteBLOGInput!
    $condition: ModelBLOGConditionInput
  ) {
    deleteBLOG(input: $input, condition: $condition) {
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
