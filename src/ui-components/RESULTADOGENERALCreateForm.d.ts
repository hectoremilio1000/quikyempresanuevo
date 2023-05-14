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
export declare type RESULTADOGENERALCreateFormInputValues = {
    resultadoQuimico?: string;
};
export declare type RESULTADOGENERALCreateFormValidationValues = {
    resultadoQuimico?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RESULTADOGENERALCreateFormOverridesProps = {
    RESULTADOGENERALCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    resultadoQuimico?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RESULTADOGENERALCreateFormProps = React.PropsWithChildren<{
    overrides?: RESULTADOGENERALCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RESULTADOGENERALCreateFormInputValues) => RESULTADOGENERALCreateFormInputValues;
    onSuccess?: (fields: RESULTADOGENERALCreateFormInputValues) => void;
    onError?: (fields: RESULTADOGENERALCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RESULTADOGENERALCreateFormInputValues) => RESULTADOGENERALCreateFormInputValues;
    onValidate?: RESULTADOGENERALCreateFormValidationValues;
} & React.CSSProperties>;
export default function RESULTADOGENERALCreateForm(props: RESULTADOGENERALCreateFormProps): React.ReactElement;
