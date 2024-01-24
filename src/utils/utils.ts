/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFormFields } from "../@types/@types.App";
import * as Yup from "yup";

interface ISetInitialValues {
  [key: string]: string | number | boolean;
}
interface IValidations {
  [key: string]: any;
}
export const setInitialValues = (formData: IFormFields[]) => {
  const initialFields = formData.reduce((acc, { name: nameField, value }) => {
    acc[nameField as keyof ISetInitialValues] = value;
    return acc;
  }, {} as ISetInitialValues);
  return initialFields;
};

export const setValidations = (formData: IFormFields[]) => {
  const validations = formData.reduce((acc, value) => {
    if (value.validations) {
      let yupString = Yup.string();
      for (const key of value.validations) {
        switch (key.type) {
          case "minLength":
            yupString = yupString.min(key.value as number, key.errorMessage);
            break;
          case "maxLength":
            yupString = yupString.max(key.value as number, key.errorMessage);
            break;
          case "email":
            yupString = yupString
              .email(key.errorMessageField)
              .required(key.errorMessage);
            break;
          case "string":
            yupString = yupString.required(key.errorMessage);
            break;
          default:
            break;
        }
      }
      acc[value.name] = yupString;
    }
    return acc;
  }, {} as IValidations);
  return validations;
};
