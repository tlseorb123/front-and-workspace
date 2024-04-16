import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getAnimals = async () => {
  return await instance.get("animal");
};

// 1개 보여주기 - getAnimal
export const getAnimal = async (no) => {
  return await instance.get("animal/" + no);
};

// 수정하기 - updateAnimal
export const updateAnimal = async (data) => {
  return await instance.put("animal", data);
};

export const addAnimal = async (data) => {
  return await instance.post("animal", data);
};

export const delAnimal = async (no) => {
  return await instance.delete("animal/" + no);
};
