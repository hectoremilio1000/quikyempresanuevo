/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PACIENTECreateFormInputValues = {
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
export declare type PACIENTECreateFormValidationValues = {
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
export declare type PACIENTECreateFormOverridesProps = {
    PACIENTECreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PACIENTECreateFormProps = React.PropsWithChildren<{
    overrides?: PACIENTECreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PACIENTECreateFormInputValues) => PACIENTECreateFormInputValues;
    onSuccess?: (fields: PACIENTECreateFormInputValues) => void;
    onError?: (fields: PACIENTECreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PACIENTECreateFormInputValues) => PACIENTECreateFormInputValues;
    onValidate?: PACIENTECreateFormValidationValues;
} & React.CSSProperties>;
export default function PACIENTECreateForm(props: PACIENTECreateFormProps): React.ReactElement;
