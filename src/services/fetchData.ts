import { URL } from "../shared/constants";
import { Course } from "../shared/models/course";

export const fetchData = async (): Promise<Course[] | undefined> => {
  try {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
  } catch (error) {
    throw error;
  }
};
