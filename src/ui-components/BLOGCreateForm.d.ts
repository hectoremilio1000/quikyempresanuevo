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
export declare type BLOGCreateFormInputValues = {
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
export declare type BLOGCreateFormValidationValues = {
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
export declare type BLOGCreateFormOverridesProps = {
    BLOGCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type BLOGCreateFormProps = React.PropsWithChildren<{
    overrides?: BLOGCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BLOGCreateFormInputValues) => BLOGCreateFormInputValues;
    onSuccess?: (fields: BLOGCreateFormInputValues) => void;
    onError?: (fields: BLOGCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BLOGCreateFormInputValues) => BLOGCreateFormInputValues;
    onValidate?: BLOGCreateFormValidationValues;
} & React.CSSProperties>;
export default function BLOGCreateForm(props: BLOGCreateFormProps): React.ReactElement;
