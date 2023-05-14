/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PRUEBA } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PRUEBAUpdateForm(props) {
  const {
    id: idProp,
    pRUEBA: pRUEBAModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    categoria: "",
    precio: "",
    precioDescuento: "",
    descripcionCorta: "",
    tiempoEntrega: "",
    indicaciones: "",
    tipoMuestra: "",
    tipoContenedor: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [precio, setPrecio] = React.useState(initialValues.precio);
  const [precioDescuento, setPrecioDescuento] = React.useState(
    initialValues.precioDescuento
  );
  const [descripcionCorta, setDescripcionCorta] = React.useState(
    initialValues.descripcionCorta
  );
  const [tiempoEntrega, setTiempoEntrega] = React.useState(
    initialValues.tiempoEntrega
  );
  const [indicaciones, setIndicaciones] = React.useState(
    initialValues.indicaciones
  );
  const [tipoMuestra, setTipoMuestra] = React.useState(
    initialValues.tipoMuestra
  );
  const [tipoContenedor, setTipoContenedor] = React.useState(
    initialValues.tipoContenedor
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pRUEBARecord
      ? { ...initialValues, ...pRUEBARecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setCategoria(cleanValues.categoria);
    setPrecio(cleanValues.precio);
    setPrecioDescuento(cleanValues.precioDescuento);
    setDescripcionCorta(cleanValues.descripcionCorta);
    setTiempoEntrega(cleanValues.tiempoEntrega);
    setIndicaciones(cleanValues.indicaciones);
    setTipoMuestra(cleanValues.tipoMuestra);
    setTipoContenedor(cleanValues.tipoContenedor);
    setErrors({});
  };
  const [pRUEBARecord, setPRUEBARecord] = React.useState(pRUEBAModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PRUEBA, idProp)
        : pRUEBAModelProp;
      setPRUEBARecord(record);
    };
    queryData();
  }, [idProp, pRUEBAModelProp]);
  React.useEffect(resetStateValues, [pRUEBARecord]);
  const validations = {
    nombre: [],
    categoria: [],
    precio: [],
    precioDescuento: [],
    descripcionCorta: [],
    tiempoEntrega: [],
    indicaciones: [],
    tipoMuestra: [],
    tipoContenedor: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          categoria,
          precio,
          precioDescuento,
          descripcionCorta,
          tiempoEntrega,
          indicaciones,
          tipoMuestra,
          tipoContenedor,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PRUEBA.copyOf(pRUEBARecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PRUEBAUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              categoria,
              precio,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega,
              indicaciones,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              categoria: value,
              precio,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega,
              indicaciones,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.categoria ?? value;
          }
          if (errors.categoria?.hasError) {
            runValidationTasks("categoria", value);
          }
          setCategoria(value);
        }}
        onBlur={() => runValidationTasks("categoria", categoria)}
        errorMessage={errors.categoria?.errorMessage}
        hasError={errors.categoria?.hasError}
        {...getOverrideProps(overrides, "categoria")}
      ></TextField>
      <TextField
        label="Precio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={precio}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio: value,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega,
              indicaciones,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.precio ?? value;
          }
          if (errors.precio?.hasError) {
            runValidationTasks("precio", value);
          }
          setPrecio(value);
        }}
        onBlur={() => runValidationTasks("precio", precio)}
        errorMessage={errors.precio?.errorMessage}
        hasError={errors.precio?.hasError}
        {...getOverrideProps(overrides, "precio")}
      ></TextField>
      <TextField
        label="Precio descuento"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={precioDescuento}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio,
              precioDescuento: value,
              descripcionCorta,
              tiempoEntrega,
              indicaciones,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.precioDescuento ?? value;
          }
          if (errors.precioDescuento?.hasError) {
            runValidationTasks("precioDescuento", value);
          }
          setPrecioDescuento(value);
        }}
        onBlur={() => runValidationTasks("precioDescuento", precioDescuento)}
        errorMessage={errors.precioDescuento?.errorMessage}
        hasError={errors.precioDescuento?.hasError}
        {...getOverrideProps(overrides, "precioDescuento")}
      ></TextField>
      <TextField
        label="Descripcion corta"
        isRequired={false}
        isReadOnly={false}
        value={descripcionCorta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio,
              precioDescuento,
              descripcionCorta: value,
              tiempoEntrega,
              indicaciones,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.descripcionCorta ?? value;
          }
          if (errors.descripcionCorta?.hasError) {
            runValidationTasks("descripcionCorta", value);
          }
          setDescripcionCorta(value);
        }}
        onBlur={() => runValidationTasks("descripcionCorta", descripcionCorta)}
        errorMessage={errors.descripcionCorta?.errorMessage}
        hasError={errors.descripcionCorta?.hasError}
        {...getOverrideProps(overrides, "descripcionCorta")}
      ></TextField>
      <TextField
        label="Tiempo entrega"
        isRequired={false}
        isReadOnly={false}
        value={tiempoEntrega}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega: value,
              indicaciones,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.tiempoEntrega ?? value;
          }
          if (errors.tiempoEntrega?.hasError) {
            runValidationTasks("tiempoEntrega", value);
          }
          setTiempoEntrega(value);
        }}
        onBlur={() => runValidationTasks("tiempoEntrega", tiempoEntrega)}
        errorMessage={errors.tiempoEntrega?.errorMessage}
        hasError={errors.tiempoEntrega?.hasError}
        {...getOverrideProps(overrides, "tiempoEntrega")}
      ></TextField>
      <TextField
        label="Indicaciones"
        isRequired={false}
        isReadOnly={false}
        value={indicaciones}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega,
              indicaciones: value,
              tipoMuestra,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.indicaciones ?? value;
          }
          if (errors.indicaciones?.hasError) {
            runValidationTasks("indicaciones", value);
          }
          setIndicaciones(value);
        }}
        onBlur={() => runValidationTasks("indicaciones", indicaciones)}
        errorMessage={errors.indicaciones?.errorMessage}
        hasError={errors.indicaciones?.hasError}
        {...getOverrideProps(overrides, "indicaciones")}
      ></TextField>
      <TextField
        label="Tipo muestra"
        isRequired={false}
        isReadOnly={false}
        value={tipoMuestra}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega,
              indicaciones,
              tipoMuestra: value,
              tipoContenedor,
            };
            const result = onChange(modelFields);
            value = result?.tipoMuestra ?? value;
          }
          if (errors.tipoMuestra?.hasError) {
            runValidationTasks("tipoMuestra", value);
          }
          setTipoMuestra(value);
        }}
        onBlur={() => runValidationTasks("tipoMuestra", tipoMuestra)}
        errorMessage={errors.tipoMuestra?.errorMessage}
        hasError={errors.tipoMuestra?.hasError}
        {...getOverrideProps(overrides, "tipoMuestra")}
      ></TextField>
      <TextField
        label="Tipo contenedor"
        isRequired={false}
        isReadOnly={false}
        value={tipoContenedor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              categoria,
              precio,
              precioDescuento,
              descripcionCorta,
              tiempoEntrega,
              indicaciones,
              tipoMuestra,
              tipoContenedor: value,
            };
            const result = onChange(modelFields);
            value = result?.tipoContenedor ?? value;
          }
          if (errors.tipoContenedor?.hasError) {
            runValidationTasks("tipoContenedor", value);
          }
          setTipoContenedor(value);
        }}
        onBlur={() => runValidationTasks("tipoContenedor", tipoContenedor)}
        errorMessage={errors.tipoContenedor?.errorMessage}
        hasError={errors.tipoContenedor?.hasError}
        {...getOverrideProps(overrides, "tipoContenedor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pRUEBAModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pRUEBAModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
