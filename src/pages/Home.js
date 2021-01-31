import React from "react";
import "../styles/Home.scss";
import { Card } from "../components/Card";
import { DATA } from "../components/data";

export const Home = () => {
  const cards = DATA.map((item) => <Card item={item} key={item.id} />);

  return (
    <section className="project">
      <div className="project__list">{cards}</div>
    </section>
  );
};
