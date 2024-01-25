/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FormHTMLAttributes } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { IFormFields } from "../../@types/@types.App";
import { Button } from "@mui/material";
import { BuildFieldsComponent } from "./BuildFieldsComponent";

interface IGeneralFormProps extends FormHTMLAttributes<HTMLFormElement> {
  formFields: Array<IFormFields>;
  initialFieldsValues: { [key: string]: string | number | boolean };
  validationsSchema: any;
  submitFunction?: ({ values, resetform, setDisable }: any) => Promise<void>;
}

export const GeneralForm = ({
  formFields,
  className,
  initialFieldsValues,
  validationsSchema,
  submitFunction,
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
            await submitFunction({ values, resetForm, setDisable });
          }
        }}
        initialValues={initialFieldsValues}
      >
        {({ errors }) => {
          return (
            <Form noValidate className={className}>
              <BuildFieldsComponent formFields={formFields} errors={errors} />
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
