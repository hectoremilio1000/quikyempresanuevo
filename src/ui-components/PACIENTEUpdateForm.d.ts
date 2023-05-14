/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PACIENTE } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PACIENTEUpdateFormInputValues = {
    nombres?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    sexo?: string;
    fechaNacimiento?: string;
    edad?: string;
    direccion?: string;
    colonia?: string;
    cp?: string;
    municipio?: string;
    estado?: string;
    pais?: string;
    email?: string;
    whatsapp?: string;
};
export declare type PACIENTEUpdateFormValidationValues = {
    nombres?: ValidationFunction<string>;
    apellidoPaterno?: ValidationFunction<string>;
    apellidoMaterno?: ValidationFunction<string>;
    sexo?: ValidationFunction<string>;
    fechaNacimiento?: ValidationFunction<string>;
    edad?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
    colonia?: ValidationFunction<string>;
    cp?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    whatsapp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PACIENTEUpdateFormOverridesProps = {
    PACIENTEUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombres?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoPaterno?: PrimitiveOverrideProps<TextFieldProps>;
    apellidoMaterno?: PrimitiveOverrideProps<TextFieldProps>;
    sexo?: PrimitiveOverrideProps<SelectFieldProps>;
    fechaNacimiento?: PrimitiveOverrideProps<TextFieldProps>;
    edad?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
    colonia?: PrimitiveOverrideProps<TextFieldProps>;
    cp?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    whatsapp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PACIENTEUpdateFormProps = React.PropsWithChildren<{
    overrides?: PACIENTEUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pACIENTE?: PACIENTE;
    onSubmit?: (fields: PACIENTEUpdateFormInputValues) => PACIENTEUpdateFormInputValues;
    onSuccess?: (fields: PACIENTEUpdateFormInputValues) => void;
    onError?: (fields: PACIENTEUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PACIENTEUpdateFormInputValues) => PACIENTEUpdateFormInputValues;
    onValidate?: PACIENTEUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PACIENTEUpdateForm(props: PACIENTEUpdateFormProps): React.ReactElement;
