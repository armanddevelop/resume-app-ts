/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FormHTMLAttributes } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { IFormFields } from "../../@types/@types.App";
import { InputField } from "../Fields/InputField";
import { InputField as TextTareaField } from "../Fields/InputField";
import { Button } from "@mui/material";

interface IGeneralFormProps extends FormHTMLAttributes<HTMLFormElement> {
  formFields: Array<IFormFields>;
  initialFieldsValues: { [key: string]: string | number | boolean };
  validationsSchema: any;
  submitFunction?: (values: {
    [key: string]: string | number | boolean;
  }) => Promise<any>;
  setOpenAlert?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GeneralForm = ({
  formFields,
  className,
  initialFieldsValues,
  validationsSchema,
  submitFunction,
  setOpenAlert,
  setIsSuccess,
}: IGeneralFormProps): JSX.Element => {
  const validations = Yup.object({ ...validationsSchema });
  const [disableButton, setDisable] = useState<boolean>(false);
  return (
    <>
      <Formik
        validationSchema={validations}
        onSubmit={async (values, { resetForm }) => {
          if (submitFunction) {
            setDisable(true);
            const response = await submitFunction(values);
            if (response === 200) {
              setOpenAlert && setOpenAlert(true);
              setIsSuccess && setIsSuccess(true);
              setDisable(false);
              resetForm();
            } else {
              setDisable(false);
              setOpenAlert && setOpenAlert(true);
              setIsSuccess && setIsSuccess(false);
            }
          }
        }}
        initialValues={initialFieldsValues}
      >
        {({ errors, setFieldValue }) => {
          const fields = formFields.map(
            ({ field, name, value, type, label, placeholder }) => {
              if (field === "input") {
                return (
                  <InputField
                    errors={errors}
                    setFieldValue={setFieldValue}
                    attrElements={{
                      name,
                      value,
                      type,
                      label,
                      fullWidth: true,
                      margin: "normal",
                      variant: "outlined",
                    }}
                  />
                );
              } else if (field === "textarea") {
                return (
                  <TextTareaField
                    attrElements={{
                      name,
                      placeholder,
                      value,
                      rows: 8,
                      multiline: true,
                      fullWidth: true,
                    }}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                );
              }
            }
          );
          return (
            <Form noValidate className={className}>
              {fields.map((field, idx) => (
                <div key={idx}>{field}</div>
              ))}
              <Button
                variant="contained"
                type="submit"
                size="medium"
                className="send-message"
                disabled={disableButton}
              >
                Send message
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
