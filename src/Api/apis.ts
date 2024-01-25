import emailjs from "@emailjs/browser";

interface IValuesForm {
  [key: string]: string | boolean | number;
}

export const sendEmail = async (valuesForm: IValuesForm) => {
  try {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
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
