/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateORDEN = /* GraphQL */ `
  subscription OnCreateORDEN {
    onCreateORDEN {
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
export const onUpdateORDEN = /* GraphQL */ `
  subscription OnUpdateORDEN {
    onUpdateORDEN {
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
export const onDeleteORDEN = /* GraphQL */ `
  subscription OnDeleteORDEN {
    onDeleteORDEN {
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
export const onCreateDOCTOR = /* GraphQL */ `
  subscription OnCreateDOCTOR {
    onCreateDOCTOR {
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
export const onUpdateDOCTOR = /* GraphQL */ `
  subscription OnUpdateDOCTOR {
    onUpdateDOCTOR {
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
export const onDeleteDOCTOR = /* GraphQL */ `
  subscription OnDeleteDOCTOR {
    onDeleteDOCTOR {
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
export const onCreateDATOSPACIENTE = /* GraphQL */ `
  subscription OnCreateDATOSPACIENTE {
    onCreateDATOSPACIENTE {
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
export const onUpdateDATOSPACIENTE = /* GraphQL */ `
  subscription OnUpdateDATOSPACIENTE {
    onUpdateDATOSPACIENTE {
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
export const onDeleteDATOSPACIENTE = /* GraphQL */ `
  subscription OnDeleteDATOSPACIENTE {
    onDeleteDATOSPACIENTE {
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
export const onCreatePACIENTE = /* GraphQL */ `
  subscription OnCreatePACIENTE {
    onCreatePACIENTE {
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
export const onUpdatePACIENTE = /* GraphQL */ `
  subscription OnUpdatePACIENTE {
    onUpdatePACIENTE {
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
export const onDeletePACIENTE = /* GraphQL */ `
  subscription OnDeletePACIENTE {
    onDeletePACIENTE {
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
export const onCreateREFERENCIAS = /* GraphQL */ `
  subscription OnCreateREFERENCIAS {
    onCreateREFERENCIAS {
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
export const onUpdateREFERENCIAS = /* GraphQL */ `
  subscription OnUpdateREFERENCIAS {
    onUpdateREFERENCIAS {
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
export const onDeleteREFERENCIAS = /* GraphQL */ `
  subscription OnDeleteREFERENCIAS {
    onDeleteREFERENCIAS {
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
export const onCreatePARAMETROS = /* GraphQL */ `
  subscription OnCreatePARAMETROS {
    onCreatePARAMETROS {
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
export const onUpdatePARAMETROS = /* GraphQL */ `
  subscription OnUpdatePARAMETROS {
    onUpdatePARAMETROS {
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
export const onDeletePARAMETROS = /* GraphQL */ `
  subscription OnDeletePARAMETROS {
    onDeletePARAMETROS {
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
export const onCreatePRUEBACHECAR = /* GraphQL */ `
  subscription OnCreatePRUEBACHECAR {
    onCreatePRUEBACHECAR {
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
export const onUpdatePRUEBACHECAR = /* GraphQL */ `
  subscription OnUpdatePRUEBACHECAR {
    onUpdatePRUEBACHECAR {
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
export const onDeletePRUEBACHECAR = /* GraphQL */ `
  subscription OnDeletePRUEBACHECAR {
    onDeletePRUEBACHECAR {
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
export const onCreatePaciente = /* GraphQL */ `
  subscription OnCreatePaciente {
    onCreatePaciente {
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
export const onUpdatePaciente = /* GraphQL */ `
  subscription OnUpdatePaciente {
    onUpdatePaciente {
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
export const onDeletePaciente = /* GraphQL */ `
  subscription OnDeletePaciente {
    onDeletePaciente {
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
