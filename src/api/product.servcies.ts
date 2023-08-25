import { instance } from ".";
import { Idata } from "../interface/product";

export const getALlData = () => {
  const uri = "/data";
  return instance.get(uri);
};

export const getIdData = (id: number) => {
  const uri = "/data/" + id;
  return instance.get(uri);
};

export const postData = (data: Omit<Idata, "id">) => {
  const uri = "/data";
  return instance.post(uri, data);
};

export const DeleteData = (id: number) => {
  const uri = "/data/" + id;
  return instance.delete(uri);
};

export const updateData = (id: number, data: Idata) => {
  const uri = "/data/" + id;
  return instance.put(uri, data);
};
