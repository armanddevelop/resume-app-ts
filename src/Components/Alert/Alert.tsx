import { Alert, Box, Snackbar } from "@mui/material";

interface IAlertMessage {
  openAlert: boolean;
  isSuccess: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export const AlertMessage = ({
  openAlert,
  isSuccess,
  handleClose,
}: IAlertMessage): JSX.Element => {
  const position = {
    vertical: "top",
    horizontal: "center",
  };
  return (
    <Box>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key={position.vertical + position.horizontal}
      >
        <Alert
          severity={isSuccess ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {isSuccess ? "Success send Email" : "Opps!! try again later :("}
        </Alert>
      </Snackbar>
    </Box>
  );
};
