declare interface InitiatePaymentType {
  client: {
    email: string;
  };
  purchase: {
    currency: string;
    products: {
      name: string;
      price: number;
    }[];
  };
  brand_id: string;
  message: string;
  success_redirect: string;
  failure_redirect: string;
}
