/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BLOG } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BLOGUpdateFormInputValues = {
    titulo?: string;
    subtitulo?: string;
    texto1?: string;
    texto2?: string;
    texto3?: string;
    imagen1?: string;
    imagen2?: string;
    imagen3?: string;
    fecha?: string;
    url1?: string;
    url2?: string;
    url3?: string;
    autor?: string;
};
export declare type BLOGUpdateFormValidationValues = {
    titulo?: ValidationFunction<string>;
    subtitulo?: ValidationFunction<string>;
    texto1?: ValidationFunction<string>;
    texto2?: ValidationFunction<string>;
    texto3?: ValidationFunction<string>;
    imagen1?: ValidationFunction<string>;
    imagen2?: ValidationFunction<string>;
    imagen3?: ValidationFunction<string>;
    fecha?: ValidationFunction<string>;
    url1?: ValidationFunction<string>;
    url2?: ValidationFunction<string>;
    url3?: ValidationFunction<string>;
    autor?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BLOGUpdateFormOverridesProps = {
    BLOGUpdateFormGrid?: FormProps<GridProps>;
    titulo?: FormProps<TextFieldProps>;
    subtitulo?: FormProps<TextFieldProps>;
    texto1?: FormProps<TextFieldProps>;
    texto2?: FormProps<TextFieldProps>;
    texto3?: FormProps<TextFieldProps>;
    imagen1?: FormProps<TextFieldProps>;
    imagen2?: FormProps<TextFieldProps>;
    imagen3?: FormProps<TextFieldProps>;
    fecha?: FormProps<TextFieldProps>;
    url1?: FormProps<TextFieldProps>;
    url2?: FormProps<TextFieldProps>;
    url3?: FormProps<TextFieldProps>;
    autor?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BLOGUpdateFormProps = React.PropsWithChildren<{
    overrides?: BLOGUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bLOG?: BLOG;
    onSubmit?: (fields: BLOGUpdateFormInputValues) => BLOGUpdateFormInputValues;
    onSuccess?: (fields: BLOGUpdateFormInputValues) => void;
    onError?: (fields: BLOGUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BLOGUpdateFormInputValues) => BLOGUpdateFormInputValues;
    onValidate?: BLOGUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BLOGUpdateForm(props: BLOGUpdateFormProps): React.ReactElement;
