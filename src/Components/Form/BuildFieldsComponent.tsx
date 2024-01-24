import { FormikErrors } from "formik";
import { IFormFields } from "../../@types/@types.App";
import { InputField } from "../Fields/InputField";
import { InputField as TextTareaField } from "../Fields/InputField";

interface IBuildFieldsComponentProps {
  formFields: IFormFields[];
  errors: FormikErrors<{
    [key: string]: string | number | boolean;
  }>;
}

export const BuildFieldsComponent = ({
  formFields,
  errors,
}: IBuildFieldsComponentProps) => {
  return (
    <>
      {formFields.map(({ field, name, value, type, label, placeholder }) => {
        switch (field) {
          case "input":
            return (
              <div key={name}>
                <InputField
                  errors={errors}
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
              </div>
            );
          case "textarea":
            return (
              <div key={name}>
                <TextTareaField
                  attrElements={{
                    name,
                    placeholder,
                    value,
                    rows: 8,
                    multiline: true,
                    fullWidth: true,
                  }}
                  errors={errors}
                />
              </div>
            );
          default:
            break;
        }
      })}
    </>
  );
};
