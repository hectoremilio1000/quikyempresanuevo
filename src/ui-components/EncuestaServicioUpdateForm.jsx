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
import { EncuestaServicio } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EncuestaServicioUpdateForm(props) {
  const {
    id: idProp,
    encuestaServicio: encuestaServicioModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    encuesta: "",
    usuario: "",
  };
  const [encuesta, setEncuesta] = React.useState(initialValues.encuesta);
  const [usuario, setUsuario] = React.useState(initialValues.usuario);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = encuestaServicioRecord
      ? { ...initialValues, ...encuestaServicioRecord }
      : initialValues;
    setEncuesta(cleanValues.encuesta);
    setUsuario(cleanValues.usuario);
    setErrors({});
  };
  const [encuestaServicioRecord, setEncuestaServicioRecord] = React.useState(
    encuestaServicioModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(EncuestaServicio, idProp)
        : encuestaServicioModelProp;
      setEncuestaServicioRecord(record);
    };
    queryData();
  }, [idProp, encuestaServicioModelProp]);
  React.useEffect(resetStateValues, [encuestaServicioRecord]);
  const validations = {
    encuesta: [],
    usuario: [],
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
          encuesta,
          usuario,
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
            EncuestaServicio.copyOf(encuestaServicioRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EncuestaServicioUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Encuesta"
        placeholder="Please select an option"
        isDisabled={false}
        value={encuesta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encuesta: value,
              usuario,
            };
            const result = onChange(modelFields);
            value = result?.encuesta ?? value;
          }
          if (errors.encuesta?.hasError) {
            runValidationTasks("encuesta", value);
          }
          setEncuesta(value);
        }}
        onBlur={() => runValidationTasks("encuesta", encuesta)}
        errorMessage={errors.encuesta?.errorMessage}
        hasError={errors.encuesta?.hasError}
        {...getOverrideProps(overrides, "encuesta")}
      >
        <option
          children="Excelente"
          value="EXCELENTE"
          {...getOverrideProps(overrides, "encuestaoption0")}
        ></option>
        <option
          children="Regular"
          value="REGULAR"
          {...getOverrideProps(overrides, "encuestaoption1")}
        ></option>
        <option
          children="Malo"
          value="MALO"
          {...getOverrideProps(overrides, "encuestaoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Usuario"
        isRequired={false}
        isReadOnly={false}
        value={usuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              encuesta,
              usuario: value,
            };
            const result = onChange(modelFields);
            value = result?.usuario ?? value;
          }
          if (errors.usuario?.hasError) {
            runValidationTasks("usuario", value);
          }
          setUsuario(value);
        }}
        onBlur={() => runValidationTasks("usuario", usuario)}
        errorMessage={errors.usuario?.errorMessage}
        hasError={errors.usuario?.hasError}
        {...getOverrideProps(overrides, "usuario")}
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
          isDisabled={!(idProp || encuestaServicioModelProp)}
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
              !(idProp || encuestaServicioModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
