/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PRUEBA } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PRUEBAUpdateFormInputValues = {
    nombre?: string;
    categoria?: string;
    precio?: number;
    precioDescuento?: number;
    descripcionCorta?: string;
    tiempoEntrega?: string;
    indicaciones?: string;
    tipoMuestra?: string;
    tipoContenedor?: string;
};
export declare type PRUEBAUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
    precio?: ValidationFunction<number>;
    precioDescuento?: ValidationFunction<number>;
    descripcionCorta?: ValidationFunction<string>;
    tiempoEntrega?: ValidationFunction<string>;
    indicaciones?: ValidationFunction<string>;
    tipoMuestra?: ValidationFunction<string>;
    tipoContenedor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PRUEBAUpdateFormOverridesProps = {
    PRUEBAUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    precio?: PrimitiveOverrideProps<TextFieldProps>;
    precioDescuento?: PrimitiveOverrideProps<TextFieldProps>;
    descripcionCorta?: PrimitiveOverrideProps<TextFieldProps>;
    tiempoEntrega?: PrimitiveOverrideProps<TextFieldProps>;
    indicaciones?: PrimitiveOverrideProps<TextFieldProps>;
    tipoMuestra?: PrimitiveOverrideProps<TextFieldProps>;
    tipoContenedor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PRUEBAUpdateFormProps = React.PropsWithChildren<{
    overrides?: PRUEBAUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pRUEBA?: PRUEBA;
    onSubmit?: (fields: PRUEBAUpdateFormInputValues) => PRUEBAUpdateFormInputValues;
    onSuccess?: (fields: PRUEBAUpdateFormInputValues) => void;
    onError?: (fields: PRUEBAUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PRUEBAUpdateFormInputValues) => PRUEBAUpdateFormInputValues;
    onValidate?: PRUEBAUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PRUEBAUpdateForm(props: PRUEBAUpdateFormProps): React.ReactElement;
