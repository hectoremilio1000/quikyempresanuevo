/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createORDEN = /* GraphQL */ `
  mutation CreateORDEN(
    $input: CreateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    createORDEN(input: $input, condition: $condition) {
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
export const updateORDEN = /* GraphQL */ `
  mutation UpdateORDEN(
    $input: UpdateORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    updateORDEN(input: $input, condition: $condition) {
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
export const deleteORDEN = /* GraphQL */ `
  mutation DeleteORDEN(
    $input: DeleteORDENInput!
    $condition: ModelORDENConditionInput
  ) {
    deleteORDEN(input: $input, condition: $condition) {
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
export const createDATOSPACIENTE = /* GraphQL */ `
  mutation CreateDATOSPACIENTE(
    $input: CreateDATOSPACIENTEInput!
    $condition: ModelDATOSPACIENTEConditionInput
  ) {
    createDATOSPACIENTE(input: $input, condition: $condition) {
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
export const updateDATOSPACIENTE = /* GraphQL */ `
  mutation UpdateDATOSPACIENTE(
    $input: UpdateDATOSPACIENTEInput!
    $condition: ModelDATOSPACIENTEConditionInput
  ) {
    updateDATOSPACIENTE(input: $input, condition: $condition) {
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
export const deleteDATOSPACIENTE = /* GraphQL */ `
  mutation DeleteDATOSPACIENTE(
    $input: DeleteDATOSPACIENTEInput!
    $condition: ModelDATOSPACIENTEConditionInput
  ) {
    deleteDATOSPACIENTE(input: $input, condition: $condition) {
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
export const createREFERENCIAS = /* GraphQL */ `
  mutation CreateREFERENCIAS(
    $input: CreateREFERENCIASInput!
    $condition: ModelREFERENCIASConditionInput
  ) {
    createREFERENCIAS(input: $input, condition: $condition) {
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
export const updateREFERENCIAS = /* GraphQL */ `
  mutation UpdateREFERENCIAS(
    $input: UpdateREFERENCIASInput!
    $condition: ModelREFERENCIASConditionInput
  ) {
    updateREFERENCIAS(input: $input, condition: $condition) {
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
export const deleteREFERENCIAS = /* GraphQL */ `
  mutation DeleteREFERENCIAS(
    $input: DeleteREFERENCIASInput!
    $condition: ModelREFERENCIASConditionInput
  ) {
    deleteREFERENCIAS(input: $input, condition: $condition) {
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
export const createPARAMETROS = /* GraphQL */ `
  mutation CreatePARAMETROS(
    $input: CreatePARAMETROSInput!
    $condition: ModelPARAMETROSConditionInput
  ) {
    createPARAMETROS(input: $input, condition: $condition) {
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
export const updatePARAMETROS = /* GraphQL */ `
  mutation UpdatePARAMETROS(
    $input: UpdatePARAMETROSInput!
    $condition: ModelPARAMETROSConditionInput
  ) {
    updatePARAMETROS(input: $input, condition: $condition) {
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
export const deletePARAMETROS = /* GraphQL */ `
  mutation DeletePARAMETROS(
    $input: DeletePARAMETROSInput!
    $condition: ModelPARAMETROSConditionInput
  ) {
    deletePARAMETROS(input: $input, condition: $condition) {
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
export const createPRUEBACHECAR = /* GraphQL */ `
  mutation CreatePRUEBACHECAR(
    $input: CreatePRUEBACHECARInput!
    $condition: ModelPRUEBACHECARConditionInput
  ) {
    createPRUEBACHECAR(input: $input, condition: $condition) {
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
export const updatePRUEBACHECAR = /* GraphQL */ `
  mutation UpdatePRUEBACHECAR(
    $input: UpdatePRUEBACHECARInput!
    $condition: ModelPRUEBACHECARConditionInput
  ) {
    updatePRUEBACHECAR(input: $input, condition: $condition) {
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
export const deletePRUEBACHECAR = /* GraphQL */ `
  mutation DeletePRUEBACHECAR(
    $input: DeletePRUEBACHECARInput!
    $condition: ModelPRUEBACHECARConditionInput
  ) {
    deletePRUEBACHECAR(input: $input, condition: $condition) {
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
export const createPaciente = /* GraphQL */ `
  mutation CreatePaciente(
    $input: CreatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    createPaciente(input: $input, condition: $condition) {
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
export const updatePaciente = /* GraphQL */ `
  mutation UpdatePaciente(
    $input: UpdatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    updatePaciente(input: $input, condition: $condition) {
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
export const deletePaciente = /* GraphQL */ `
  mutation DeletePaciente(
    $input: DeletePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    deletePaciente(input: $input, condition: $condition) {
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
