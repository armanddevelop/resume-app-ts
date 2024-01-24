import { useState } from "react";

export const useAlertMessage = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };
  return { setOpenAlert, setIsSuccess, handleClose, openAlert, isSuccess };
};
