/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPARAMETROSCREADO = /* GraphQL */ `
  query ListPARAMETROS(
    $filter: ModelPARAMETROSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPARAMETROS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombreParametro
        pruebasID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        pARAMETROSREFERENCIASId
        REFERENCIAS {
        nombreReferencia1
        id
        nombreReferencia2
      }
       UNIDAD {
        id
        nombreUnidad
      }
      }
      nextToken
      startedAt
    }
  }
`;
