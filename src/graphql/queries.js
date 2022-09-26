/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBLOG = /* GraphQL */ `
  query GetBLOG($id: ID!) {
    getBLOG(id: $id) {
      id
      titulo
      subtitulo
      texto1
      imagen1
      url1
      texto2
      imagen2
      url2
      texto3
      imagen3
      url3
      autor
      fecha
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
        imagen1
        url1
        texto2
        imagen2
        url2
        texto3
        imagen3
        url3
        autor
        fecha
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
        imagen1
        url1
        texto2
        imagen2
        url2
        texto3
        imagen3
        url3
        autor
        fecha
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
