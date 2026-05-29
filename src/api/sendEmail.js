import axios from "axios";
import { getApiUrl } from "./parametersApi";

const sendEmail = async ({ name, email, message }) => {
  const response = await axios.post(`${getApiUrl()}/api/contact`, {
    name,
    email,
    message,
  });

  if (!response.data?.success) {
    const err = new Error(
      response.data?.message || "No se pudo enviar el mensaje",
    );
    err.response = response;
    throw err;
  }

  return response.data;
};

export { sendEmail };
