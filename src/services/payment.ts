import axios, { AxiosError } from "axios";

export const initiatePayment = async (data: InitiatePaymentType) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_QOREPAY_BASE_URL + "/purchases",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        },
      },
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data || "Something went wrong");
    }
  }
};
