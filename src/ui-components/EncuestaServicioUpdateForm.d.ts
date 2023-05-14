/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EncuestaServicio } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EncuestaServicioUpdateFormInputValues = {
    encuesta?: string;
    usuario?: string;
};
export declare type EncuestaServicioUpdateFormValidationValues = {
    encuesta?: ValidationFunction<string>;
    usuario?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EncuestaServicioUpdateFormOverridesProps = {
    EncuestaServicioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    encuesta?: PrimitiveOverrideProps<SelectFieldProps>;
    usuario?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EncuestaServicioUpdateFormProps = React.PropsWithChildren<{
    overrides?: EncuestaServicioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    encuestaServicio?: EncuestaServicio;
    onSubmit?: (fields: EncuestaServicioUpdateFormInputValues) => EncuestaServicioUpdateFormInputValues;
    onSuccess?: (fields: EncuestaServicioUpdateFormInputValues) => void;
    onError?: (fields: EncuestaServicioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EncuestaServicioUpdateFormInputValues) => EncuestaServicioUpdateFormInputValues;
    onValidate?: EncuestaServicioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EncuestaServicioUpdateForm(props: EncuestaServicioUpdateFormProps): React.ReactElement;
