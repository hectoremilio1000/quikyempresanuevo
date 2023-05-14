/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PACIENTE } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PACIENTECreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    sexo: "",
    fechaNacimiento: "",
    edad: "",
    direccion: "",
    colonia: "",
    cp: "",
    municipio: "",
    estado: "",
    pais: "",
    email: "",
    whatsapp: "",
  };
  const [nombres, setNombres] = React.useState(initialValues.nombres);
  const [apellidoPaterno, setApellidoPaterno] = React.useState(
    initialValues.apellidoPaterno
  );
  const [apellidoMaterno, setApellidoMaterno] = React.useState(
    initialValues.apellidoMaterno
  );
  const [sexo, setSexo] = React.useState(initialValues.sexo);
  const [fechaNacimiento, setFechaNacimiento] = React.useState(
    initialValues.fechaNacimiento
  );
  const [edad, setEdad] = React.useState(initialValues.edad);
  const [direccion, setDireccion] = React.useState(initialValues.direccion);
  const [colonia, setColonia] = React.useState(initialValues.colonia);
  const [cp, setCp] = React.useState(initialValues.cp);
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [email, setEmail] = React.useState(initialValues.email);
  const [whatsapp, setWhatsapp] = React.useState(initialValues.whatsapp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombres(initialValues.nombres);
    setApellidoPaterno(initialValues.apellidoPaterno);
    setApellidoMaterno(initialValues.apellidoMaterno);
    setSexo(initialValues.sexo);
    setFechaNacimiento(initialValues.fechaNacimiento);
    setEdad(initialValues.edad);
    setDireccion(initialValues.direccion);
    setColonia(initialValues.colonia);
    setCp(initialValues.cp);
    setMunicipio(initialValues.municipio);
    setEstado(initialValues.estado);
    setPais(initialValues.pais);
    setEmail(initialValues.email);
    setWhatsapp(initialValues.whatsapp);
    setErrors({});
  };
  const validations = {
    nombres: [],
    apellidoPaterno: [],
    apellidoMaterno: [],
    sexo: [],
    fechaNacimiento: [],
    edad: [],
    direccion: [],
    colonia: [],
    cp: [],
    municipio: [],
    estado: [],
    pais: [],
    email: [],
    whatsapp: [],
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
          nombres,
          apellidoPaterno,
          apellidoMaterno,
          sexo,
          fechaNacimiento,
          edad,
          direccion,
          colonia,
          cp,
          municipio,
          estado,
          pais,
          email,
          whatsapp,
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
          await DataStore.save(new PACIENTE(modelFields));
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
      {...getOverrideProps(overrides, "PACIENTECreateForm")}
      {...rest}
    >
      <TextField
        label="Nombres"
        isRequired={false}
        isReadOnly={false}
        value={nombres}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres: value,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.nombres ?? value;
          }
          if (errors.nombres?.hasError) {
            runValidationTasks("nombres", value);
          }
          setNombres(value);
        }}
        onBlur={() => runValidationTasks("nombres", nombres)}
        errorMessage={errors.nombres?.errorMessage}
        hasError={errors.nombres?.hasError}
        {...getOverrideProps(overrides, "nombres")}
      ></TextField>
      <TextField
        label="Apellido paterno"
        isRequired={false}
        isReadOnly={false}
        value={apellidoPaterno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno: value,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.apellidoPaterno ?? value;
          }
          if (errors.apellidoPaterno?.hasError) {
            runValidationTasks("apellidoPaterno", value);
          }
          setApellidoPaterno(value);
        }}
        onBlur={() => runValidationTasks("apellidoPaterno", apellidoPaterno)}
        errorMessage={errors.apellidoPaterno?.errorMessage}
        hasError={errors.apellidoPaterno?.hasError}
        {...getOverrideProps(overrides, "apellidoPaterno")}
      ></TextField>
      <TextField
        label="Apellido materno"
        isRequired={false}
        isReadOnly={false}
        value={apellidoMaterno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno: value,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.apellidoMaterno ?? value;
          }
          if (errors.apellidoMaterno?.hasError) {
            runValidationTasks("apellidoMaterno", value);
          }
          setApellidoMaterno(value);
        }}
        onBlur={() => runValidationTasks("apellidoMaterno", apellidoMaterno)}
        errorMessage={errors.apellidoMaterno?.errorMessage}
        hasError={errors.apellidoMaterno?.hasError}
        {...getOverrideProps(overrides, "apellidoMaterno")}
      ></TextField>
      <SelectField
        label="Sexo"
        placeholder="Please select an option"
        isDisabled={false}
        value={sexo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo: value,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.sexo ?? value;
          }
          if (errors.sexo?.hasError) {
            runValidationTasks("sexo", value);
          }
          setSexo(value);
        }}
        onBlur={() => runValidationTasks("sexo", sexo)}
        errorMessage={errors.sexo?.errorMessage}
        hasError={errors.sexo?.hasError}
        {...getOverrideProps(overrides, "sexo")}
      >
        <option
          children="Masculino"
          value="MASCULINO"
          {...getOverrideProps(overrides, "sexooption0")}
        ></option>
        <option
          children="Femenino"
          value="FEMENINO"
          {...getOverrideProps(overrides, "sexooption1")}
        ></option>
      </SelectField>
      <TextField
        label="Fecha nacimiento"
        isRequired={false}
        isReadOnly={false}
        value={fechaNacimiento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento: value,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.fechaNacimiento ?? value;
          }
          if (errors.fechaNacimiento?.hasError) {
            runValidationTasks("fechaNacimiento", value);
          }
          setFechaNacimiento(value);
        }}
        onBlur={() => runValidationTasks("fechaNacimiento", fechaNacimiento)}
        errorMessage={errors.fechaNacimiento?.errorMessage}
        hasError={errors.fechaNacimiento?.hasError}
        {...getOverrideProps(overrides, "fechaNacimiento")}
      ></TextField>
      <TextField
        label="Edad"
        isRequired={false}
        isReadOnly={false}
        value={edad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad: value,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.edad ?? value;
          }
          if (errors.edad?.hasError) {
            runValidationTasks("edad", value);
          }
          setEdad(value);
        }}
        onBlur={() => runValidationTasks("edad", edad)}
        errorMessage={errors.edad?.errorMessage}
        hasError={errors.edad?.hasError}
        {...getOverrideProps(overrides, "edad")}
      ></TextField>
      <TextField
        label="Direccion"
        isRequired={false}
        isReadOnly={false}
        value={direccion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion: value,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.direccion ?? value;
          }
          if (errors.direccion?.hasError) {
            runValidationTasks("direccion", value);
          }
          setDireccion(value);
        }}
        onBlur={() => runValidationTasks("direccion", direccion)}
        errorMessage={errors.direccion?.errorMessage}
        hasError={errors.direccion?.hasError}
        {...getOverrideProps(overrides, "direccion")}
      ></TextField>
      <TextField
        label="Colonia"
        isRequired={false}
        isReadOnly={false}
        value={colonia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia: value,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.colonia ?? value;
          }
          if (errors.colonia?.hasError) {
            runValidationTasks("colonia", value);
          }
          setColonia(value);
        }}
        onBlur={() => runValidationTasks("colonia", colonia)}
        errorMessage={errors.colonia?.errorMessage}
        hasError={errors.colonia?.hasError}
        {...getOverrideProps(overrides, "colonia")}
      ></TextField>
      <TextField
        label="Cp"
        isRequired={false}
        isReadOnly={false}
        value={cp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp: value,
              municipio,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.cp ?? value;
          }
          if (errors.cp?.hasError) {
            runValidationTasks("cp", value);
          }
          setCp(value);
        }}
        onBlur={() => runValidationTasks("cp", cp)}
        errorMessage={errors.cp?.errorMessage}
        hasError={errors.cp?.hasError}
        {...getOverrideProps(overrides, "cp")}
      ></TextField>
      <TextField
        label="Municipio"
        isRequired={false}
        isReadOnly={false}
        value={municipio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio: value,
              estado,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.municipio ?? value;
          }
          if (errors.municipio?.hasError) {
            runValidationTasks("municipio", value);
          }
          setMunicipio(value);
        }}
        onBlur={() => runValidationTasks("municipio", municipio)}
        errorMessage={errors.municipio?.errorMessage}
        hasError={errors.municipio?.hasError}
        {...getOverrideProps(overrides, "municipio")}
      ></TextField>
      <TextField
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado: value,
              pais,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      ></TextField>
      <TextField
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={pais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais: value,
              email,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.pais ?? value;
          }
          if (errors.pais?.hasError) {
            runValidationTasks("pais", value);
          }
          setPais(value);
        }}
        onBlur={() => runValidationTasks("pais", pais)}
        errorMessage={errors.pais?.errorMessage}
        hasError={errors.pais?.hasError}
        {...getOverrideProps(overrides, "pais")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email: value,
              whatsapp,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Whatsapp"
        isRequired={false}
        isReadOnly={false}
        value={whatsapp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombres,
              apellidoPaterno,
              apellidoMaterno,
              sexo,
              fechaNacimiento,
              edad,
              direccion,
              colonia,
              cp,
              municipio,
              estado,
              pais,
              email,
              whatsapp: value,
            };
            const result = onChange(modelFields);
            value = result?.whatsapp ?? value;
          }
          if (errors.whatsapp?.hasError) {
            runValidationTasks("whatsapp", value);
          }
          setWhatsapp(value);
        }}
        onBlur={() => runValidationTasks("whatsapp", whatsapp)}
        errorMessage={errors.whatsapp?.errorMessage}
        hasError={errors.whatsapp?.hasError}
        {...getOverrideProps(overrides, "whatsapp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
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
