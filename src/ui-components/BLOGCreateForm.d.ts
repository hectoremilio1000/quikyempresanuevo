/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BLOGCreateFormInputValues = {
    titulo?: string;
    subtitulo?: string;
    texto1?: string;
    imagen1?: string;
    url1?: string;
    texto2?: string;
    imagen2?: string;
    url2?: string;
    texto3?: string;
    imagen3?: string;
    url3?: string;
    autor?: string;
    fecha?: string;
};
export declare type BLOGCreateFormValidationValues = {
    titulo?: ValidationFunction<string>;
    subtitulo?: ValidationFunction<string>;
    texto1?: ValidationFunction<string>;
    imagen1?: ValidationFunction<string>;
    url1?: ValidationFunction<string>;
    texto2?: ValidationFunction<string>;
    imagen2?: ValidationFunction<string>;
    url2?: ValidationFunction<string>;
    texto3?: ValidationFunction<string>;
    imagen3?: ValidationFunction<string>;
    url3?: ValidationFunction<string>;
    autor?: ValidationFunction<string>;
    fecha?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BLOGCreateFormOverridesProps = {
    BLOGCreateFormGrid?: FormProps<GridProps>;
    titulo?: FormProps<TextFieldProps>;
    subtitulo?: FormProps<TextFieldProps>;
    texto1?: FormProps<TextFieldProps>;
    imagen1?: FormProps<TextFieldProps>;
    url1?: FormProps<TextFieldProps>;
    texto2?: FormProps<TextFieldProps>;
    imagen2?: FormProps<TextFieldProps>;
    url2?: FormProps<TextFieldProps>;
    texto3?: FormProps<TextFieldProps>;
    imagen3?: FormProps<TextFieldProps>;
    url3?: FormProps<TextFieldProps>;
    autor?: FormProps<TextFieldProps>;
    fecha?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BLOGCreateFormProps = React.PropsWithChildren<{
    overrides?: BLOGCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BLOGCreateFormInputValues) => BLOGCreateFormInputValues;
    onSuccess?: (fields: BLOGCreateFormInputValues) => void;
    onError?: (fields: BLOGCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BLOGCreateFormInputValues) => BLOGCreateFormInputValues;
    onValidate?: BLOGCreateFormValidationValues;
} & React.CSSProperties>;
export default function BLOGCreateForm(props: BLOGCreateFormProps): React.ReactElement;
