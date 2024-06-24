import axios, {AxiosRequestConfig} from "axios";
import {ProductItem, ProductResponse} from "../types";

const getAxiosConfig = (): AxiosRequestConfig => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const getDrinks = async (): Promise<ProductResponse[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_PRODUCTS_API_URL}/product-catalog/product-list`,
    getAxiosConfig()
  );

  console.log(response.headers);
  return response.data;
};
