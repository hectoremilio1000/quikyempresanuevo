/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DOCTORCreateFormInputValues = {
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
export declare type DOCTORCreateFormValidationValues = {
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
export declare type DOCTORCreateFormOverridesProps = {
    DOCTORCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type DOCTORCreateFormProps = React.PropsWithChildren<{
    overrides?: DOCTORCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DOCTORCreateFormInputValues) => DOCTORCreateFormInputValues;
    onSuccess?: (fields: DOCTORCreateFormInputValues) => void;
    onError?: (fields: DOCTORCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DOCTORCreateFormInputValues) => DOCTORCreateFormInputValues;
    onValidate?: DOCTORCreateFormValidationValues;
} & React.CSSProperties>;
export default function DOCTORCreateForm(props: DOCTORCreateFormProps): React.ReactElement;
