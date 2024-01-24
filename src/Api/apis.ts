import emailjs from "@emailjs/browser";
interface IValuesForm {
  [key: string]: string | boolean | number;
}

export const sendEmail = async (valuesForm: IValuesForm) => {
  try {
    const SERVICE_ID = "service_cb5scab";
    const TEMPLATE_ID = "template_8wz6ug5";
    const PUBLIC_KEY = "hvgS5Pxc7euj2eb7h";
    const templateParams = {
      to_name: "armando salamanca",
      from_name: valuesForm.nameContact,
      message: `Este es el email del contacto: ${valuesForm.email} este es el mensaje del contacto: ${valuesForm.message}`,
    };
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    const { status } = response;
    return status;
  } catch (error) {
    console.error("[sendEmailError]: ", error);
    return "Something go wrong while sending the message, ty again later";
  }
};
