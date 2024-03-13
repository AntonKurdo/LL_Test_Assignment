import { Sidebar } from "../../components/sidebar";
import { CourseCard } from "../../components/course-card";
import { Spinner } from "../../components/spinner";
import { useCoarsesData } from "./useCoursesData";

import "./styles.scss";

function App() {
  const { allCategories, data, loading, onCategoryChanged } = useCoarsesData();

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar
        onCategoryChanged={onCategoryChanged}
        categories={allCategories}
      />
      <div className="coursesWrapper">
        {data.map((c) => {
          return <CourseCard key={c.id} course={c} />;
        })}
      </div>
    </div>
  );
}

export default App;
