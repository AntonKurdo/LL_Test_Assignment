import { useState, useEffect, useRef, useCallback } from "react";

import { Course, Tag } from "../../shared/models/course";
import { parseDataToCategories, sortCoursesByName } from "../../shared/helpers";
import useLoading from "../../hooks/useLoading";
import { fetchData } from "../../services/fetchData";

export const useCoarsesData = () => {
  const fetchedData = useRef<Course[]>([]);
  const allCategories = useRef<Tag[]>([]);
  const [data, setData] = useState<Course[]>([]);
  const [activeCategory, setActiveCategory] = useState("");

  const [getCourses, loading] = useLoading(_getCourses);

  useEffect(() => {
    getCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.length) {
      if (activeCategory) {
        setData(
          fetchedData.current
            .filter((c) => c.tags.includes(activeCategory))
            .sort(sortCoursesByName)
        );
      } else {
        setData(fetchedData.current.sort(sortCoursesByName));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  async function _getCourses() {
    const data = await fetchData();

    if (data) {
      fetchedData.current = data;
      allCategories.current = parseDataToCategories(data);
      setData(data.sort(sortCoursesByName));
    }
  }

  const onCategoryChanged = useCallback((c: Tag) => {
    setActiveCategory(c);
  }, []);

  return {
    allCategories: allCategories.current,
    data,
    loading,
    onCategoryChanged,
  };
};
