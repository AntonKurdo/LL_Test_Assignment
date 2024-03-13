import { Course, Tag } from "./models/course";

export const parseDataToCategories = (data: Course[]): Tag[] => {
  const mappedTags = data.map((el) => el.tags).flat(1);

  return Array.from(new Set(mappedTags)).sort();
};

export const sortCoursesByName = (a: Course, b: Course) =>
  a.name > b.name ? 1 : -1;
