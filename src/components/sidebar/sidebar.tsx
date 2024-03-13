import { FC, useState } from "react";

import { Tag } from "../../shared/models/course";
import { Button } from "../button";

import "./styles.scss";

type Props = {
  categories: Array<Tag>;
  onCategoryChanged: (category: string) => void;
};

export const Sidebar: FC<Props> = ({ categories, onCategoryChanged }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container">
      <Button
        isActive={activeIndex === 0}
        title={"Все темы"}
        onPress={() => {
          setActiveIndex(0);
          onCategoryChanged("");
        }}
      />
      {categories.map((c, index) => {
        return (
          <Button
            key={index}
            isActive={activeIndex === index + 1}
            title={c}
            onPress={() => {
              setActiveIndex(index + 1);
              onCategoryChanged(c);
            }}
          />
        );
      })}
    </div>
  );
};
