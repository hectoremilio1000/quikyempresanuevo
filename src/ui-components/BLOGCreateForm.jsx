/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { BLOG } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function BLOGCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    titulo: undefined,
    subtitulo: undefined,
    texto1: undefined,
    imagen1: undefined,
    url1: undefined,
    texto2: undefined,
    imagen2: undefined,
    url2: undefined,
    texto3: undefined,
    imagen3: undefined,
    url3: undefined,
    autor: undefined,
    fecha: undefined,
  };
  const [titulo, setTitulo] = React.useState(initialValues.titulo);
  const [subtitulo, setSubtitulo] = React.useState(initialValues.subtitulo);
  const [texto1, setTexto1] = React.useState(initialValues.texto1);
  const [imagen1, setImagen1] = React.useState(initialValues.imagen1);
  const [url1, setUrl1] = React.useState(initialValues.url1);
  const [texto2, setTexto2] = React.useState(initialValues.texto2);
  const [imagen2, setImagen2] = React.useState(initialValues.imagen2);
  const [url2, setUrl2] = React.useState(initialValues.url2);
  const [texto3, setTexto3] = React.useState(initialValues.texto3);
  const [imagen3, setImagen3] = React.useState(initialValues.imagen3);
  const [url3, setUrl3] = React.useState(initialValues.url3);
  const [autor, setAutor] = React.useState(initialValues.autor);
  const [fecha, setFecha] = React.useState(initialValues.fecha);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitulo(initialValues.titulo);
    setSubtitulo(initialValues.subtitulo);
    setTexto1(initialValues.texto1);
    setImagen1(initialValues.imagen1);
    setUrl1(initialValues.url1);
    setTexto2(initialValues.texto2);
    setImagen2(initialValues.imagen2);
    setUrl2(initialValues.url2);
    setTexto3(initialValues.texto3);
    setImagen3(initialValues.imagen3);
    setUrl3(initialValues.url3);
    setAutor(initialValues.autor);
    setFecha(initialValues.fecha);
    setErrors({});
  };
  const validations = {
    titulo: [],
    subtitulo: [],
    texto1: [],
    imagen1: [],
    url1: [],
    texto2: [],
    imagen2: [],
    url2: [],
    texto3: [],
    imagen3: [],
    url3: [],
    autor: [],
    fecha: [],
  };
  const runValidationTasks = async (fieldName, value) => {
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
          titulo,
          subtitulo,
          texto1,
          imagen1,
          url1,
          texto2,
          imagen2,
          url2,
          texto3,
          imagen3,
          url3,
          autor,
          fecha,
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
          await DataStore.save(new BLOG(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BLOGCreateForm")}
    >
      <TextField
        label="Titulo"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo: value,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.titulo ?? value;
          }
          if (errors.titulo?.hasError) {
            runValidationTasks("titulo", value);
          }
          setTitulo(value);
        }}
        onBlur={() => runValidationTasks("titulo", titulo)}
        errorMessage={errors.titulo?.errorMessage}
        hasError={errors.titulo?.hasError}
        {...getOverrideProps(overrides, "titulo")}
      ></TextField>
      <TextField
        label="Subtitulo"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo: value,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.subtitulo ?? value;
          }
          if (errors.subtitulo?.hasError) {
            runValidationTasks("subtitulo", value);
          }
          setSubtitulo(value);
        }}
        onBlur={() => runValidationTasks("subtitulo", subtitulo)}
        errorMessage={errors.subtitulo?.errorMessage}
        hasError={errors.subtitulo?.hasError}
        {...getOverrideProps(overrides, "subtitulo")}
      ></TextField>
      <TextField
        label="Texto1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1: value,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.texto1 ?? value;
          }
          if (errors.texto1?.hasError) {
            runValidationTasks("texto1", value);
          }
          setTexto1(value);
        }}
        onBlur={() => runValidationTasks("texto1", texto1)}
        errorMessage={errors.texto1?.errorMessage}
        hasError={errors.texto1?.hasError}
        {...getOverrideProps(overrides, "texto1")}
      ></TextField>
      <TextField
        label="Imagen1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1: value,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.imagen1 ?? value;
          }
          if (errors.imagen1?.hasError) {
            runValidationTasks("imagen1", value);
          }
          setImagen1(value);
        }}
        onBlur={() => runValidationTasks("imagen1", imagen1)}
        errorMessage={errors.imagen1?.errorMessage}
        hasError={errors.imagen1?.hasError}
        {...getOverrideProps(overrides, "imagen1")}
      ></TextField>
      <TextField
        label="Url1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1: value,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.url1 ?? value;
          }
          if (errors.url1?.hasError) {
            runValidationTasks("url1", value);
          }
          setUrl1(value);
        }}
        onBlur={() => runValidationTasks("url1", url1)}
        errorMessage={errors.url1?.errorMessage}
        hasError={errors.url1?.hasError}
        {...getOverrideProps(overrides, "url1")}
      ></TextField>
      <TextField
        label="Texto2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2: value,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.texto2 ?? value;
          }
          if (errors.texto2?.hasError) {
            runValidationTasks("texto2", value);
          }
          setTexto2(value);
        }}
        onBlur={() => runValidationTasks("texto2", texto2)}
        errorMessage={errors.texto2?.errorMessage}
        hasError={errors.texto2?.hasError}
        {...getOverrideProps(overrides, "texto2")}
      ></TextField>
      <TextField
        label="Imagen2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2: value,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.imagen2 ?? value;
          }
          if (errors.imagen2?.hasError) {
            runValidationTasks("imagen2", value);
          }
          setImagen2(value);
        }}
        onBlur={() => runValidationTasks("imagen2", imagen2)}
        errorMessage={errors.imagen2?.errorMessage}
        hasError={errors.imagen2?.hasError}
        {...getOverrideProps(overrides, "imagen2")}
      ></TextField>
      <TextField
        label="Url2"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2: value,
              texto3,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.url2 ?? value;
          }
          if (errors.url2?.hasError) {
            runValidationTasks("url2", value);
          }
          setUrl2(value);
        }}
        onBlur={() => runValidationTasks("url2", url2)}
        errorMessage={errors.url2?.errorMessage}
        hasError={errors.url2?.hasError}
        {...getOverrideProps(overrides, "url2")}
      ></TextField>
      <TextField
        label="Texto3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3: value,
              imagen3,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.texto3 ?? value;
          }
          if (errors.texto3?.hasError) {
            runValidationTasks("texto3", value);
          }
          setTexto3(value);
        }}
        onBlur={() => runValidationTasks("texto3", texto3)}
        errorMessage={errors.texto3?.errorMessage}
        hasError={errors.texto3?.hasError}
        {...getOverrideProps(overrides, "texto3")}
      ></TextField>
      <TextField
        label="Imagen3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3: value,
              url3,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.imagen3 ?? value;
          }
          if (errors.imagen3?.hasError) {
            runValidationTasks("imagen3", value);
          }
          setImagen3(value);
        }}
        onBlur={() => runValidationTasks("imagen3", imagen3)}
        errorMessage={errors.imagen3?.errorMessage}
        hasError={errors.imagen3?.hasError}
        {...getOverrideProps(overrides, "imagen3")}
      ></TextField>
      <TextField
        label="Url3"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3: value,
              autor,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.url3 ?? value;
          }
          if (errors.url3?.hasError) {
            runValidationTasks("url3", value);
          }
          setUrl3(value);
        }}
        onBlur={() => runValidationTasks("url3", url3)}
        errorMessage={errors.url3?.errorMessage}
        hasError={errors.url3?.hasError}
        {...getOverrideProps(overrides, "url3")}
      ></TextField>
      <TextField
        label="Autor"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor: value,
              fecha,
            };
            const result = onChange(modelFields);
            value = result?.autor ?? value;
          }
          if (errors.autor?.hasError) {
            runValidationTasks("autor", value);
          }
          setAutor(value);
        }}
        onBlur={() => runValidationTasks("autor", autor)}
        errorMessage={errors.autor?.errorMessage}
        hasError={errors.autor?.hasError}
        {...getOverrideProps(overrides, "autor")}
      ></TextField>
      <TextField
        label="Fecha"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              imagen1,
              url1,
              texto2,
              imagen2,
              url2,
              texto3,
              imagen3,
              url3,
              autor,
              fecha: value,
            };
            const result = onChange(modelFields);
            value = result?.fecha ?? value;
          }
          if (errors.fecha?.hasError) {
            runValidationTasks("fecha", value);
          }
          setFecha(value);
        }}
        onBlur={() => runValidationTasks("fecha", fecha)}
        errorMessage={errors.fecha?.errorMessage}
        hasError={errors.fecha?.hasError}
        {...getOverrideProps(overrides, "fecha")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
