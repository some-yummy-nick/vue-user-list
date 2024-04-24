import data from "@/data/api.json";
import { User } from "@/types/item";

export const preparedData: User[] = data.results.map((item) => {
  return {
    id: item.id.value,
    avatar: item.picture.medium,
    name: item.name.first,
    second: item.name.last,
    title: item.name.title,
    gender: item.gender,
    country: item.nat,
    date: item.dob.date,
    email: item.email,
    phone: item.phone,
  };
});
