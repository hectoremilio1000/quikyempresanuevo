/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRESULTADOGENERAL = /* GraphQL */ `
  query GetRESULTADOGENERAL($id: ID!) {
    getRESULTADOGENERAL(id: $id) {
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
export const listRESULTADOGENERALS = /* GraphQL */ `
  query ListRESULTADOGENERALS(
    $filter: ModelRESULTADOGENERALFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRESULTADOGENERALS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        resultadoQuimico
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRESULTADOGENERALS = /* GraphQL */ `
  query SyncRESULTADOGENERALS(
    $filter: ModelRESULTADOGENERALFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRESULTADOGENERALS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        resultadoQuimico
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRESULTADOORDEN = /* GraphQL */ `
  query GetRESULTADOORDEN($id: ID!) {
    getRESULTADOORDEN(id: $id) {
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
export const listRESULTADOORDENS = /* GraphQL */ `
  query ListRESULTADOORDENS(
    $filter: ModelRESULTADOORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRESULTADOORDENS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRESULTADOORDENS = /* GraphQL */ `
  query SyncRESULTADOORDENS(
    $filter: ModelRESULTADOORDENFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRESULTADOORDENS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const rESULTADOORDENSByOrdenpruebaID = /* GraphQL */ `
  query RESULTADOORDENSByOrdenpruebaID(
    $ordenpruebaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRESULTADOORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rESULTADOORDENSByOrdenpruebaID(
      ordenpruebaID: $ordenpruebaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEncuestaServicio = /* GraphQL */ `
  query GetEncuestaServicio($id: ID!) {
    getEncuestaServicio(id: $id) {
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
export const listEncuestaServicios = /* GraphQL */ `
  query ListEncuestaServicios(
    $filter: ModelEncuestaServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEncuestaServicios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        encuesta
        usuario
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEncuestaServicios = /* GraphQL */ `
  query SyncEncuestaServicios(
    $filter: ModelEncuestaServicioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEncuestaServicios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        encuesta
        usuario
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getORDENPRUEBA = /* GraphQL */ `
  query GetORDENPRUEBA($id: ID!) {
    getORDENPRUEBA(id: $id) {
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
export const listORDENPRUEBAS = /* GraphQL */ `
  query ListORDENPRUEBAS(
    $filter: ModelORDENPRUEBAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORDENPRUEBAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        oRDENPRUEBAPRUEBAId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncORDENPRUEBAS = /* GraphQL */ `
  query SyncORDENPRUEBAS(
    $filter: ModelORDENPRUEBAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncORDENPRUEBAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        oRDENPRUEBAPRUEBAId
      }
      nextToken
      startedAt
    }
  }
`;
export const oRDENPRUEBASByOrdenID = /* GraphQL */ `
  query ORDENPRUEBASByOrdenID(
    $ordenID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENPRUEBAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENPRUEBASByOrdenID(
      ordenID: $ordenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ordenID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        oRDENPRUEBAPRUEBAId
      }
      nextToken
      startedAt
    }
  }
`;
export const getORDEN = /* GraphQL */ `
  query GetORDEN($id: ID!) {
    getORDEN(id: $id) {
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
export const listORDENS = /* GraphQL */ `
  query ListORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORDENS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        diabetico
        hipertenso
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
      nextToken
      startedAt
    }
  }
`;
export const syncORDENS = /* GraphQL */ `
  query SyncORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncORDENS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        diabetico
        hipertenso
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
      nextToken
      startedAt
    }
  }
`;
export const oRDENSByPacienteID = /* GraphQL */ `
  query ORDENSByPacienteID(
    $pacienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    oRDENSByPacienteID(
      pacienteID: $pacienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        diabetico
        hipertenso
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
      nextToken
      startedAt
    }
  }
`;
export const getPARAMETROS = /* GraphQL */ `
  query GetPARAMETROS($id: ID!) {
    getPARAMETROS(id: $id) {
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
export const listPARAMETROS = /* GraphQL */ `
  query ListPARAMETROS(
    $filter: ModelPARAMETROSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPARAMETROS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPARAMETROS = /* GraphQL */ `
  query SyncPARAMETROS(
    $filter: ModelPARAMETROSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPARAMETROS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const pARAMETROSByPruebaID = /* GraphQL */ `
  query PARAMETROSByPruebaID(
    $pruebaID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPARAMETROSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pARAMETROSByPruebaID(
      pruebaID: $pruebaID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPRUEBA = /* GraphQL */ `
  query GetPRUEBA($id: ID!) {
    getPRUEBA(id: $id) {
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
export const listPRUEBAS = /* GraphQL */ `
  query ListPRUEBAS(
    $filter: ModelPRUEBAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPRUEBAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPRUEBAS = /* GraphQL */ `
  query SyncPRUEBAS(
    $filter: ModelPRUEBAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPRUEBAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDOCTOR = /* GraphQL */ `
  query GetDOCTOR($id: ID!) {
    getDOCTOR(id: $id) {
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
export const listDOCTORS = /* GraphQL */ `
  query ListDOCTORS(
    $filter: ModelDOCTORFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDOCTORS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDOCTORS = /* GraphQL */ `
  query SyncDOCTORS(
    $filter: ModelDOCTORFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDOCTORS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPACIENTE = /* GraphQL */ `
  query GetPACIENTE($id: ID!) {
    getPACIENTE(id: $id) {
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
export const listPACIENTES = /* GraphQL */ `
  query ListPACIENTES(
    $filter: ModelPACIENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPACIENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPACIENTES = /* GraphQL */ `
  query SyncPACIENTES(
    $filter: ModelPACIENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPACIENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBLOG = /* GraphQL */ `
  query GetBLOG($id: ID!) {
    getBLOG(id: $id) {
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
export const listBLOGS = /* GraphQL */ `
  query ListBLOGS(
    $filter: ModelBLOGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBLOGS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBLOGS = /* GraphQL */ `
  query SyncBLOGS(
    $filter: ModelBLOGFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBLOGS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
