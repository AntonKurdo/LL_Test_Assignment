import { useCallback, useState } from "react";

import { Sidebar } from "../../components/sidebar";
import { CourseCard } from "../../components/course-card";
import { Spinner } from "../../components/spinner";
import { useCoarsesData } from "./useCoursesData";

import "./styles.scss";

function App() {
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, data, loading] = useCoarsesData(activeCategory);

  const onCategoryChanged = useCallback((c: string) => {
    setActiveCategory(c);
  }, []);

  return (
    <div className="app">
      {!loading && (
        <Sidebar
          onCategoryChanged={onCategoryChanged}
          categories={categories}
        />
      )}
      {loading ? (
        <div className="spinnerWrapper">
          <Spinner />
        </div>
      ) : (
        <div className="coursesWrapper">
          {data.map((c) => {
            return <CourseCard key={c.id} course={c} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
