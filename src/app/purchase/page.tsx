/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { initiatePayment } from "@/services/payment";
import React from "react";
import { toast } from "sonner";

const page = () => {
  const paymentData: InitiatePaymentType = {
    client: {
      email: "test@gmail.com",
    },
    purchase: {
      currency: "NGN",
      products: [
        {
          name: "Quizer test",
          price: 500,
        },
      ],
    },
    brand_id: process.env.NEXT_PUBLIC_BRAND_ID as string,
    message: "Quizer test payment",
    success_redirect: "localhost:3000/",
    failure_redirect: "localhost:3000/fail",
  };

  const startPayment = async () => {
    const loader = toast.loading("Initiating payment");
    try {
      const response = await initiatePayment(paymentData);
      console.log(response);
    } catch (error: any) {
      if (typeof error.message === "string") {
        toast.error(error.message);
      }
      toast.error("Error: something went wrong");
    } finally {
      toast.dismiss(loader);
    }
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex min-h-screen items-center justify-center">
        <section className="rounded-lg bg-white p-10">
          <div>
            <p>Checkout initialization</p>
            <Button onClick={startPayment}> Pay now </Button>
          </div>
          <p>Example loaded </p>
          <p>Payment link</p>
        </section>
      </div>
    </div>
  );
};

export default page;
