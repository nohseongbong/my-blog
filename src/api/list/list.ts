import { axiosInstance } from "../config";

export const getList = async () => {
  const { data } = await axiosInstance.get(`/hello`);
  return data;
};
