/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RESULTADOGENERAL } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RESULTADOGENERALUpdateForm(props) {
  const {
    id: idProp,
    rESULTADOGENERAL: rESULTADOGENERALModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    resultadoQuimico: "",
  };
  const [resultadoQuimico, setResultadoQuimico] = React.useState(
    initialValues.resultadoQuimico
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rESULTADOGENERALRecord
      ? { ...initialValues, ...rESULTADOGENERALRecord }
      : initialValues;
    setResultadoQuimico(cleanValues.resultadoQuimico);
    setErrors({});
  };
  const [rESULTADOGENERALRecord, setRESULTADOGENERALRecord] = React.useState(
    rESULTADOGENERALModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(RESULTADOGENERAL, idProp)
        : rESULTADOGENERALModelProp;
      setRESULTADOGENERALRecord(record);
    };
    queryData();
  }, [idProp, rESULTADOGENERALModelProp]);
  React.useEffect(resetStateValues, [rESULTADOGENERALRecord]);
  const validations = {
    resultadoQuimico: [],
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
          resultadoQuimico,
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
            RESULTADOGENERAL.copyOf(rESULTADOGENERALRecord, (updated) => {
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
      {...getOverrideProps(overrides, "RESULTADOGENERALUpdateForm")}
      {...rest}
    >
      <TextField
        label="Resultado quimico"
        isRequired={false}
        isReadOnly={false}
        value={resultadoQuimico}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              resultadoQuimico: value,
            };
            const result = onChange(modelFields);
            value = result?.resultadoQuimico ?? value;
          }
          if (errors.resultadoQuimico?.hasError) {
            runValidationTasks("resultadoQuimico", value);
          }
          setResultadoQuimico(value);
        }}
        onBlur={() => runValidationTasks("resultadoQuimico", resultadoQuimico)}
        errorMessage={errors.resultadoQuimico?.errorMessage}
        hasError={errors.resultadoQuimico?.hasError}
        {...getOverrideProps(overrides, "resultadoQuimico")}
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
          isDisabled={!(idProp || rESULTADOGENERALModelProp)}
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
              !(idProp || rESULTADOGENERALModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
