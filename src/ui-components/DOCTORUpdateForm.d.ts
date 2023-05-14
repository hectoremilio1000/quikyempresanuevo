/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DOCTOR } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DOCTORUpdateFormInputValues = {
    nombres?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    especialidad?: string;
    calle?: string;
    numeroExterior?: string;
    numeroInterior?: string;
    colonia?: string;
    cp?: string;
    municipio?: string;
    estado?: string;
    pais?: string;
    email?: string;
    whatsapp?: string;
};
export declare type DOCTORUpdateFormValidationValues = {
    nombres?: ValidationFunction<string>;
    apellidoPaterno?: ValidationFunction<string>;
    apellidoMaterno?: ValidationFunction<string>;
    especialidad?: ValidationFunction<string>;
    calle?: ValidationFunction<string>;
    numeroExterior?: ValidationFunction<string>;
    numeroInterior?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    cp?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    whatsapp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DOCTORUpdateFormOverridesProps = {
    DOCTORUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombres?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoPaterno?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoMaterno?: PrimitiveOverrideProps<TextFieldProps>;
    especialidad?: PrimitiveOverrideProps<TextFieldProps>;
    calle?: PrimitiveOverrideProps<TextFieldProps>;
    numeroExterior?: PrimitiveOverrideProps<TextFieldProps>;
    numeroInterior?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    cp?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    whatsapp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DOCTORUpdateFormProps = React.PropsWithChildren<{
    overrides?: DOCTORUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dOCTOR?: DOCTOR;
    onSubmit?: (fields: DOCTORUpdateFormInputValues) => DOCTORUpdateFormInputValues;
    onSuccess?: (fields: DOCTORUpdateFormInputValues) => void;
    onError?: (fields: DOCTORUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DOCTORUpdateFormInputValues) => DOCTORUpdateFormInputValues;
    onValidate?: DOCTORUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DOCTORUpdateForm(props: DOCTORUpdateFormProps): React.ReactElement;
