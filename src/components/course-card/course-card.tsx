import { FC } from "react";

import { Course } from "../../shared/models/course";

import "./styles.scss";

type Props = {
  course: Course;
};

export const CourseCard: FC<Props> = ({ course }) => {
  return (
    <div className="wrapper">
      <div className="img_wrapper" style={{ backgroundColor: course.bgColor }}>
        <img className="img" alt={course.name} src={course.image} />
      </div>
      <div className="label_wrapper">
        <label>{course.name}</label>
      </div>
    </div>
  );
};
