export const schema = {
    "models": {
        "UNIDAD": {
            "name": "UNIDAD",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "unidad": {
                    "name": "unidad",
                    "isArray": false,
                    "type": {
                        "enum": "Unidadenums"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "paramsID": {
                    "name": "paramsID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UNIDADS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPARAMS",
                        "fields": [
                            "paramsID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "BLOG": {
            "name": "BLOG",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "titulo": {
                    "name": "titulo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "subtitulo": {
                    "name": "subtitulo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "imagen1": {
                    "name": "imagen1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "url1": {
                    "name": "url1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "texto1": {
                    "name": "texto1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "imagen2": {
                    "name": "imagen2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "url2": {
                    "name": "url2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "texto2": {
                    "name": "texto2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "imagen3": {
                    "name": "imagen3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "url3": {
                    "name": "url3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "texto3": {
                    "name": "texto3",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fecha": {
                    "name": "fecha",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autor": {
                    "name": "autor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "BLOGS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "REFERENS": {
            "name": "REFERENS",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "paramsID": {
                    "name": "paramsID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "referencia1": {
                    "name": "referencia1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "referencia2": {
                    "name": "referencia2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "REFERENS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPARAMS",
                        "fields": [
                            "paramsID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PARAMS": {
            "name": "PARAMS",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "REFERENS": {
                    "name": "REFERENS",
                    "isArray": true,
                    "type": {
                        "model": "REFERENS"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "paramsID"
                    }
                },
                "pruebachecarID": {
                    "name": "pruebachecarID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "param": {
                    "name": "param",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "UNIDAD": {
                    "name": "UNIDAD",
                    "isArray": true,
                    "type": {
                        "model": "UNIDAD"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "paramsID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PARAMS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPRUEBACHECAR",
                        "fields": [
                            "pruebachecarID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ORDEN": {
            "name": "ORDEN",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "Statusorden"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fechaOrden": {
                    "name": "fechaOrden",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "HoraOrden": {
                    "name": "HoraOrden",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pacienteID": {
                    "name": "pacienteID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "imagen": {
                    "name": "imagen",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "estudiosURL": {
                    "name": "estudiosURL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "doctorID": {
                    "name": "doctorID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "resultado": {
                    "name": "resultado",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pruebachecarID": {
                    "name": "pruebachecarID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "metodoPago": {
                    "name": "metodoPago",
                    "isArray": false,
                    "type": {
                        "enum": "Metodopago"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "horaResultado": {
                    "name": "horaResultado",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fechaResultado": {
                    "name": "fechaResultado",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ORDENS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPACIENTE",
                        "fields": [
                            "pacienteID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDOCTOR",
                        "fields": [
                            "doctorID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPRUEBACHECAR",
                        "fields": [
                            "pruebachecarID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "DOCTOR": {
            "name": "DOCTOR",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombres": {
                    "name": "nombres",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "apellidoPaterno": {
                    "name": "apellidoPaterno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "apellidoMaterno": {
                    "name": "apellidoMaterno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "especialidad": {
                    "name": "especialidad",
                    "isArray": false,
                    "type": {
                        "enum": "Especialidad"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "calle": {
                    "name": "calle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "numeroExterior": {
                    "name": "numeroExterior",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "numeroInterior": {
                    "name": "numeroInterior",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "colonia": {
                    "name": "colonia",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cp": {
                    "name": "cp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "municipio": {
                    "name": "municipio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ciudad": {
                    "name": "ciudad",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "estado": {
                    "name": "estado",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pais": {
                    "name": "pais",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "whatsapp": {
                    "name": "whatsapp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ORDENS": {
                    "name": "ORDENS",
                    "isArray": true,
                    "type": {
                        "model": "ORDEN"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "doctorID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "DOCTORS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PACIENTE": {
            "name": "PACIENTE",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombres": {
                    "name": "nombres",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "apellidoPaterno": {
                    "name": "apellidoPaterno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "apellidoMaterno": {
                    "name": "apellidoMaterno",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "sexo": {
                    "name": "sexo",
                    "isArray": false,
                    "type": {
                        "enum": "Sexo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "fechaNacimiento": {
                    "name": "fechaNacimiento",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "edad": {
                    "name": "edad",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "calle": {
                    "name": "calle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "numExterior": {
                    "name": "numExterior",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "numInterior": {
                    "name": "numInterior",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "colonia": {
                    "name": "colonia",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cp": {
                    "name": "cp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "municipio": {
                    "name": "municipio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ciudad": {
                    "name": "ciudad",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "estado": {
                    "name": "estado",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pais": {
                    "name": "pais",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Email": {
                    "name": "Email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "whatsapp": {
                    "name": "whatsapp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ORDENS": {
                    "name": "ORDENS",
                    "isArray": true,
                    "type": {
                        "model": "ORDEN"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "pacienteID"
                    }
                },
                "peso": {
                    "name": "peso",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "altura": {
                    "name": "altura",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "indiceMasaCorporal": {
                    "name": "indiceMasaCorporal",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "presionArterial": {
                    "name": "presionArterial",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "saturacion": {
                    "name": "saturacion",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "diagnostico": {
                    "name": "diagnostico",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tratamiento": {
                    "name": "tratamiento",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PACIENTES",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PRUEBACHECAR": {
            "name": "PRUEBACHECAR",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nombre": {
                    "name": "nombre",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "categoria": {
                    "name": "categoria",
                    "isArray": false,
                    "type": {
                        "enum": "Categoria"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "precio": {
                    "name": "precio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "precioDescuento": {
                    "name": "precioDescuento",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "descripcionLarga": {
                    "name": "descripcionLarga",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "descripcionCorta": {
                    "name": "descripcionCorta",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tiempoEntrega": {
                    "name": "tiempoEntrega",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "indicaciones": {
                    "name": "indicaciones",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tipoMuestra": {
                    "name": "tipoMuestra",
                    "isArray": false,
                    "type": {
                        "enum": "Muestra"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tipoContenedor": {
                    "name": "tipoContenedor",
                    "isArray": false,
                    "type": {
                        "enum": "Contenedor"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ORDENS": {
                    "name": "ORDENS",
                    "isArray": true,
                    "type": {
                        "model": "ORDEN"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "pruebachecarID"
                    }
                },
                "PARAMS": {
                    "name": "PARAMS",
                    "isArray": true,
                    "type": {
                        "model": "PARAMS"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "pruebachecarID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PRUEBACHECARS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Unidadenums": {
            "name": "Unidadenums",
            "values": [
                "ML",
                "MGDL",
                "PORCENTAJE",
                "C",
                "NINGUNO"
            ]
        },
        "Metodopago": {
            "name": "Metodopago",
            "values": [
                "EFECTIVO",
                "TARJETA",
                "TRANSFERENCIA"
            ]
        },
        "Sexo": {
            "name": "Sexo",
            "values": [
                "MASCULINO",
                "FEMENINO"
            ]
        },
        "Statusorden": {
            "name": "Statusorden",
            "values": [
                "NUEVO",
                "COMPLETADO",
                "CANCELADO"
            ]
        },
        "Especialidad": {
            "name": "Especialidad",
            "values": [
                "MEDICOGENERAL",
                "HEMATOLOGIA",
                "MEDICINAINTERNA",
                "CARDIOLOGIA",
                "CIRUGIA",
                "UROLOGIA",
                "GINECOLOGIA",
                "PEDIATRIA",
                "OTRO",
                "NOAPLICA"
            ]
        },
        "Contenedor": {
            "name": "Contenedor",
            "values": [
                "LILA",
                "AZUL",
                "DORADO",
                "ROJO",
                "FRASCOESTERIL",
                "STUART",
                "FRASCOHEMOCULTIVO",
                "NA"
            ]
        },
        "Muestra": {
            "name": "Muestra",
            "values": [
                "HECES",
                "SUERO",
                "SANGRETOTAL",
                "ORINA",
                "EXUDADOFARINGEO",
                "EXUDADONASOFARINGEO",
                "EXUDADOURETRAL",
                "BIOPSIASORGANOSESPECIALES"
            ]
        },
        "Categoria": {
            "name": "Categoria",
            "values": [
                "HEMATOLOGIA",
                "QUIMICASANGUINEA",
                "COAGULACION",
                "SEROLOGIA",
                "UROANALISIS",
                "MICROBIOLOGIA",
                "PRUEBARAPIDA"
            ]
        }
    },
    "nonModels": {},
    "version": "33deda676395146833e8f4a375011f5b"
};