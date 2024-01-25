import { useState } from "react";
import { sendEmail } from "../Api/apis";
import { FormikState } from "formik";
interface IUseContact {
  values: {
    [key: string]: string | number | boolean;
  };
  resetForm: (
    nextState?:
      | Partial<
          FormikState<{
            [key: string]: string | number | boolean;
          }>
        >
      | undefined
  ) => void;
  setDisable: React.Dispatch<React.SetStateAction<boolean>>;
}
export const useContact = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };
  const handleSubmit = async ({
    values,
    resetForm,
    setDisable,
  }: IUseContact) => {
    const response = await sendEmail(values);
    if (response === 200) {
      setOpenAlert && setOpenAlert(true);
      setIsSuccess && setIsSuccess(true);
      resetForm();
    } else {
      setOpenAlert && setOpenAlert(true);
      setIsSuccess && setIsSuccess(false);
    }
    setDisable(false);
  };
  return {
    handleSubmit,
    setOpenAlert,
    setIsSuccess,
    handleClose,
    openAlert,
    isSuccess,
  };
};
