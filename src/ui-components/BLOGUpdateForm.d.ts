/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BLOG } from "../models";
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
    slug?: string;
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
    slug?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BLOGUpdateFormOverridesProps = {
    BLOGUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulo?: PrimitiveOverrideProps<TextFieldProps>;
    subtitulo?: PrimitiveOverrideProps<TextFieldProps>;
    texto1?: PrimitiveOverrideProps<TextFieldProps>;
    texto2?: PrimitiveOverrideProps<TextFieldProps>;
    texto3?: PrimitiveOverrideProps<TextFieldProps>;
    imagen1?: PrimitiveOverrideProps<TextFieldProps>;
    imagen2?: PrimitiveOverrideProps<TextFieldProps>;
    imagen3?: PrimitiveOverrideProps<TextFieldProps>;
    fecha?: PrimitiveOverrideProps<TextFieldProps>;
    url1?: PrimitiveOverrideProps<TextFieldProps>;
    url2?: PrimitiveOverrideProps<TextFieldProps>;
    url3?: PrimitiveOverrideProps<TextFieldProps>;
    autor?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BLOGUpdateFormProps = React.PropsWithChildren<{
    overrides?: BLOGUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bLOG?: BLOG;
    onSubmit?: (fields: BLOGUpdateFormInputValues) => BLOGUpdateFormInputValues;
    onSuccess?: (fields: BLOGUpdateFormInputValues) => void;
    onError?: (fields: BLOGUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BLOGUpdateFormInputValues) => BLOGUpdateFormInputValues;
    onValidate?: BLOGUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BLOGUpdateForm(props: BLOGUpdateFormProps): React.ReactElement;
