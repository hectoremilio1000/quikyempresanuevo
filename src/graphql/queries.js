/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getORDEN = /* GraphQL */ `
  query GetORDEN($id: ID!) {
    getORDEN(id: $id) {
      id
      status
      fechaOrden
      HoraOrden
      total
      pacienteID
      imagen
      estudiosURL
      doctorID
      resultado
      PRUEBACHECARS {
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
export const listORDENS = /* GraphQL */ `
  query ListORDENS(
    $filter: ModelORDENFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listORDENS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        fechaOrden
        HoraOrden
        total
        pacienteID
        imagen
        estudiosURL
        doctorID
        resultado
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
        status
        fechaOrden
        HoraOrden
        total
        pacienteID
        imagen
        estudiosURL
        doctorID
        resultado
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
      ciudad
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
        ciudad
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
        ciudad
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
export const getDATOSPACIENTE = /* GraphQL */ `
  query GetDATOSPACIENTE($id: ID!) {
    getDATOSPACIENTE(id: $id) {
      id
      peso
      altura
      indiceMasaCorporal
      presionArterial
      saturacion
      diagnostico
      tratamiento
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDATOSPACIENTES = /* GraphQL */ `
  query ListDATOSPACIENTES(
    $filter: ModelDATOSPACIENTEFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDATOSPACIENTES(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        peso
        altura
        indiceMasaCorporal
        presionArterial
        saturacion
        diagnostico
        tratamiento
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
export const syncDATOSPACIENTES = /* GraphQL */ `
  query SyncDATOSPACIENTES(
    $filter: ModelDATOSPACIENTEFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDATOSPACIENTES(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        peso
        altura
        indiceMasaCorporal
        presionArterial
        saturacion
        diagnostico
        tratamiento
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
      calle
      numExterior
      numInterior
      colonia
      cp
      municipio
      ciudad
      estado
      pais
      Email
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
        calle
        numExterior
        numInterior
        colonia
        cp
        municipio
        ciudad
        estado
        pais
        Email
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
        calle
        numExterior
        numInterior
        colonia
        cp
        municipio
        ciudad
        estado
        pais
        Email
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
export const getREFERENCIAS = /* GraphQL */ `
  query GetREFERENCIAS($id: ID!) {
    getREFERENCIAS(id: $id) {
      id
      referencia
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listREFERENCIAS = /* GraphQL */ `
  query ListREFERENCIAS(
    $filter: ModelREFERENCIASFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listREFERENCIAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        referencia
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
export const syncREFERENCIAS = /* GraphQL */ `
  query SyncREFERENCIAS(
    $filter: ModelREFERENCIASFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncREFERENCIAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        referencia
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
export const getPARAMETROS = /* GraphQL */ `
  query GetPARAMETROS($id: ID!) {
    getPARAMETROS(id: $id) {
      id
      nombre
      pruebachecarID
      REFERENCIAS {
        id
        referencia
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pARAMETROSREFERENCIASId
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
        nombre
        pruebachecarID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pARAMETROSREFERENCIASId
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
        nombre
        pruebachecarID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pARAMETROSREFERENCIASId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPRUEBACHECAR = /* GraphQL */ `
  query GetPRUEBACHECAR($id: ID!) {
    getPRUEBACHECAR(id: $id) {
      id
      nombre
      categoria
      precio
      precioDescuento
      descripcionLarga
      descripcionCorta
      tiempoEntrega
      indicaciones
      tipoMuestra
      tipoContenedor
      unidad
      PARAMETROS {
        nextToken
        startedAt
      }
      ordenID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPRUEBACHECARS = /* GraphQL */ `
  query ListPRUEBACHECARS(
    $filter: ModelPRUEBACHECARFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPRUEBACHECARS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        categoria
        precio
        precioDescuento
        descripcionLarga
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        unidad
        ordenID
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
export const syncPRUEBACHECARS = /* GraphQL */ `
  query SyncPRUEBACHECARS(
    $filter: ModelPRUEBACHECARFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPRUEBACHECARS(
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
        descripcionLarga
        descripcionCorta
        tiempoEntrega
        indicaciones
        tipoMuestra
        tipoContenedor
        unidad
        ordenID
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
export const getPaciente = /* GraphQL */ `
  query GetPaciente($id: ID!) {
    getPaciente(id: $id) {
      id
      nombre
      apellidoPaterno
      apellidoMaterno
      email
      whatsapp
      role
      image
      url
      key
      fechaOrden
      estudios
      image2
      estudios3
      estudios2
      url2
      key2
      image3
      url3
      key3
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPacientes = /* GraphQL */ `
  query ListPacientes(
    $filter: ModelPacienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        apellidoPaterno
        apellidoMaterno
        email
        whatsapp
        role
        image
        url
        key
        fechaOrden
        estudios
        image2
        estudios3
        estudios2
        url2
        key2
        image3
        url3
        key3
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
export const syncPacientes = /* GraphQL */ `
  query SyncPacientes(
    $filter: ModelPacienteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPacientes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        apellidoPaterno
        apellidoMaterno
        email
        whatsapp
        role
        image
        url
        key
        fechaOrden
        estudios
        image2
        estudios3
        estudios2
        url2
        key2
        image3
        url3
        key3
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
