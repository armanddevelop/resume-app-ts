/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps } from "@mui/material";
import { FormikErrors, useField } from "formik";
import { type InputHTMLAttributes } from "react";

type Input = InputHTMLAttributes<HTMLInputElement>;
type IAttrElement = Input & TextFieldProps;
interface IInputProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<any>>;
  errors: FormikErrors<any>;
  attrElements: IAttrElement;
}

export const InputField = ({
  errors,
  attrElements,
}: IInputProps): JSX.Element => {
  const [field] = useField(attrElements.name as string);
  const { onChange, value } = field;
  const errorMessage = errors[attrElements.name as string]
    ? (errors[attrElements.name as string] as string)
    : "";
  const isError = Object.keys(errors).includes(attrElements.name as string);

  return (
    <TextField
      {...attrElements}
      onChange={onChange}
      value={value}
      error={isError}
      helperText={errorMessage}
    />
  );
};
