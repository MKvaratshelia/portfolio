import React from "react";
import "../styles/Home.scss";
import { Card } from "../components/Card";
import { DATA } from "../components/data";

export const Home = () => {
  return (
    <section className="project">
      {/* <h1 className="project__title">Проекты</h1> */}
      <div className="project__list">
        {DATA.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </section>
  );
};
