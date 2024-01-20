/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps } from "@mui/material";
import { FormikErrors, FormikTouched, useField } from "formik";
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
  touched?: FormikTouched<any>;
}

export const InputField = ({
  errors,
  touched,
  attrElements,
}: IInputProps): JSX.Element => {
  console.log("esto vale attrElements.name ", attrElements.name);
  console.log(errors);
  const [field] = useField(attrElements.name as string);
  const { onChange, value } = field;
  const errorMessage = errors[attrElements.name as string]
    ? (errors[attrElements.name as string] as string)
    : "";
  const isError = errors[attrElements.name as string];
  console.log("esto vale is error ", isError);
  return (
    <TextField
      {...attrElements}
      onChange={onChange}
      value={value}
      error={Boolean(isError)}
      helperText={errorMessage}
    />
  );
};
