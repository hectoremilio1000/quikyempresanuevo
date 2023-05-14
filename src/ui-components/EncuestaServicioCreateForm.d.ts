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
export declare type EncuestaServicioCreateFormInputValues = {
    encuesta?: string;
    usuario?: string;
};
export declare type EncuestaServicioCreateFormValidationValues = {
    encuesta?: ValidationFunction<string>;
    usuario?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EncuestaServicioCreateFormOverridesProps = {
    EncuestaServicioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    encuesta?: PrimitiveOverrideProps<SelectFieldProps>;
    usuario?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EncuestaServicioCreateFormProps = React.PropsWithChildren<{
    overrides?: EncuestaServicioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EncuestaServicioCreateFormInputValues) => EncuestaServicioCreateFormInputValues;
    onSuccess?: (fields: EncuestaServicioCreateFormInputValues) => void;
    onError?: (fields: EncuestaServicioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EncuestaServicioCreateFormInputValues) => EncuestaServicioCreateFormInputValues;
    onValidate?: EncuestaServicioCreateFormValidationValues;
} & React.CSSProperties>;
export default function EncuestaServicioCreateForm(props: EncuestaServicioCreateFormProps): React.ReactElement;
