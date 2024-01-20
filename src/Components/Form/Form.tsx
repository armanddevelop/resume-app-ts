import { type FormHTMLAttributes } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { IFormFields } from "../../@types/@types.App";
import { InputField } from "../Fields/InputField";
import { TextTareaField } from "../Fields/TextTareaField";
import { Button } from "@mui/material";

interface IGeneralFormProps extends FormHTMLAttributes<HTMLFormElement> {
  formFields: Array<IFormFields>;
}

export const GeneralForm = ({
  formFields,
  className,
}: IGeneralFormProps): JSX.Element => {
  const validationSchema = yup.object({
    nameContact: yup
      .string()
      .min(3, "The name must be minimun 3 characters")
      .required("Enter a valid name"),
    subject: yup.string().required("The subject is required"),
    email: yup.string().email("Enter a valid Email").required("Email required"),
    message: yup.string().required("Message is required"),
  });
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("estos son los values ", values)}
        initialValues={{
          nameContact: "",
          subject: "",
          email: "",
          message: "",
        }}
      >
        {({ errors, setFieldValue, touched }) => {
          const fields = formFields.map(
            ({ field, name, value, type, label, placeholder }) => {
              if (field === "input") {
                return (
                  <InputField
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                    attrElements={{
                      name,
                      value,
                      type,
                      label,
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
              <Button variant="contained" type="submit">
                Send message
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
