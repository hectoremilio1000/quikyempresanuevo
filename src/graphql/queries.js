/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPruebas = /* GraphQL */ `
  query GetPruebas($id: ID!) {
    getPruebas(id: $id) {
      id
      nombre
      imagen
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPruebas = /* GraphQL */ `
  query ListPruebas(
    $filter: ModelPruebasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPruebas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        imagen
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
export const syncPruebas = /* GraphQL */ `
  query SyncPruebas(
    $filter: ModelPruebasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPruebas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        imagen
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
      text
      foto
      categoria
      fecha
      creadoPor
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
        text
        foto
        categoria
        fecha
        creadoPor
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
        text
        foto
        categoria
        fecha
        creadoPor
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
export const getEnfermeras = /* GraphQL */ `
  query GetEnfermeras($id: ID!) {
    getEnfermeras(id: $id) {
      id
      nombre
      email
      whats
      direccion
      numexterior
      numinterior
      codigopostal
      colonia
      municipio
      ciudad
      estado
      edad
      cedula
      antiguedad
      especialidad
      curso
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEnfermeras = /* GraphQL */ `
  query ListEnfermeras(
    $filter: ModelEnfermerasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnfermeras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        email
        whats
        direccion
        numexterior
        numinterior
        codigopostal
        colonia
        municipio
        ciudad
        estado
        edad
        cedula
        antiguedad
        especialidad
        curso
        sub
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
export const syncEnfermeras = /* GraphQL */ `
  query SyncEnfermeras(
    $filter: ModelEnfermerasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnfermeras(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        email
        whats
        direccion
        numexterior
        numinterior
        codigopostal
        colonia
        municipio
        ciudad
        estado
        edad
        cedula
        antiguedad
        especialidad
        curso
        sub
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      nombre
      email
      whatsapp
      role
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        email
        whatsapp
        role
        sub
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nombre
        email
        whatsapp
        role
        sub
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
