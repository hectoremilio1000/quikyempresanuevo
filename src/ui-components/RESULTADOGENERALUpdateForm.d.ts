/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RESULTADOGENERAL } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RESULTADOGENERALUpdateFormInputValues = {
    resultadoQuimico?: string;
};
export declare type RESULTADOGENERALUpdateFormValidationValues = {
    resultadoQuimico?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RESULTADOGENERALUpdateFormOverridesProps = {
    RESULTADOGENERALUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    resultadoQuimico?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RESULTADOGENERALUpdateFormProps = React.PropsWithChildren<{
    overrides?: RESULTADOGENERALUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rESULTADOGENERAL?: RESULTADOGENERAL;
    onSubmit?: (fields: RESULTADOGENERALUpdateFormInputValues) => RESULTADOGENERALUpdateFormInputValues;
    onSuccess?: (fields: RESULTADOGENERALUpdateFormInputValues) => void;
    onError?: (fields: RESULTADOGENERALUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RESULTADOGENERALUpdateFormInputValues) => RESULTADOGENERALUpdateFormInputValues;
    onValidate?: RESULTADOGENERALUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RESULTADOGENERALUpdateForm(props: RESULTADOGENERALUpdateFormProps): React.ReactElement;
