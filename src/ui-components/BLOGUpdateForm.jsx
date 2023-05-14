/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BLOG } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BLOGUpdateForm(props) {
  const {
    id: idProp,
    bLOG: bLOGModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    titulo: "",
    subtitulo: "",
    texto1: "",
    texto2: "",
    texto3: "",
    imagen1: "",
    imagen2: "",
    imagen3: "",
    fecha: "",
    url1: "",
    url2: "",
    url3: "",
    autor: "",
    slug: "",
  };
  const [titulo, setTitulo] = React.useState(initialValues.titulo);
  const [subtitulo, setSubtitulo] = React.useState(initialValues.subtitulo);
  const [texto1, setTexto1] = React.useState(initialValues.texto1);
  const [texto2, setTexto2] = React.useState(initialValues.texto2);
  const [texto3, setTexto3] = React.useState(initialValues.texto3);
  const [imagen1, setImagen1] = React.useState(initialValues.imagen1);
  const [imagen2, setImagen2] = React.useState(initialValues.imagen2);
  const [imagen3, setImagen3] = React.useState(initialValues.imagen3);
  const [fecha, setFecha] = React.useState(initialValues.fecha);
  const [url1, setUrl1] = React.useState(initialValues.url1);
  const [url2, setUrl2] = React.useState(initialValues.url2);
  const [url3, setUrl3] = React.useState(initialValues.url3);
  const [autor, setAutor] = React.useState(initialValues.autor);
  const [slug, setSlug] = React.useState(initialValues.slug);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bLOGRecord
      ? { ...initialValues, ...bLOGRecord }
      : initialValues;
    setTitulo(cleanValues.titulo);
    setSubtitulo(cleanValues.subtitulo);
    setTexto1(cleanValues.texto1);
    setTexto2(cleanValues.texto2);
    setTexto3(cleanValues.texto3);
    setImagen1(cleanValues.imagen1);
    setImagen2(cleanValues.imagen2);
    setImagen3(cleanValues.imagen3);
    setFecha(cleanValues.fecha);
    setUrl1(cleanValues.url1);
    setUrl2(cleanValues.url2);
    setUrl3(cleanValues.url3);
    setAutor(cleanValues.autor);
    setSlug(cleanValues.slug);
    setErrors({});
  };
  const [bLOGRecord, setBLOGRecord] = React.useState(bLOGModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BLOG, idProp)
        : bLOGModelProp;
      setBLOGRecord(record);
    };
    queryData();
  }, [idProp, bLOGModelProp]);
  React.useEffect(resetStateValues, [bLOGRecord]);
  const validations = {
    titulo: [],
    subtitulo: [],
    texto1: [],
    texto2: [],
    texto3: [],
    imagen1: [],
    imagen2: [],
    imagen3: [],
    fecha: [],
    url1: [],
    url2: [],
    url3: [],
    autor: [],
    slug: [],
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
          titulo,
          subtitulo,
          texto1,
          texto2,
          texto3,
          imagen1,
          imagen2,
          imagen3,
          fecha,
          url1,
          url2,
          url3,
          autor,
          slug,
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
            BLOG.copyOf(bLOGRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BLOGUpdateForm")}
      {...rest}
    >
      <TextField
        label="Titulo"
        isRequired={false}
        isReadOnly={false}
        value={titulo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo: value,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        value={subtitulo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo: value,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        value={texto1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1: value,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        label="Texto2"
        isRequired={false}
        isReadOnly={false}
        value={texto2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2: value,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        label="Texto3"
        isRequired={false}
        isReadOnly={false}
        value={texto3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3: value,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        label="Imagen1"
        isRequired={false}
        isReadOnly={false}
        value={imagen1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1: value,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        label="Imagen2"
        isRequired={false}
        isReadOnly={false}
        value={imagen2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2: value,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        label="Imagen3"
        isRequired={false}
        isReadOnly={false}
        value={imagen3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3: value,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug,
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
        label="Fecha"
        isRequired={false}
        isReadOnly={false}
        value={fecha}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha: value,
              url1,
              url2,
              url3,
              autor,
              slug,
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
      <TextField
        label="Url1"
        isRequired={false}
        isReadOnly={false}
        value={url1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1: value,
              url2,
              url3,
              autor,
              slug,
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
        label="Url2"
        isRequired={false}
        isReadOnly={false}
        value={url2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2: value,
              url3,
              autor,
              slug,
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
        label="Url3"
        isRequired={false}
        isReadOnly={false}
        value={url3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3: value,
              autor,
              slug,
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
        value={autor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor: value,
              slug,
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
        label="Slug"
        isRequired={false}
        isReadOnly={false}
        value={slug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              subtitulo,
              texto1,
              texto2,
              texto3,
              imagen1,
              imagen2,
              imagen3,
              fecha,
              url1,
              url2,
              url3,
              autor,
              slug: value,
            };
            const result = onChange(modelFields);
            value = result?.slug ?? value;
          }
          if (errors.slug?.hasError) {
            runValidationTasks("slug", value);
          }
          setSlug(value);
        }}
        onBlur={() => runValidationTasks("slug", slug)}
        errorMessage={errors.slug?.errorMessage}
        hasError={errors.slug?.hasError}
        {...getOverrideProps(overrides, "slug")}
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
          isDisabled={!(idProp || bLOGModelProp)}
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
              !(idProp || bLOGModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
