import React from "react";
import "../styles/About.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image"></div>
        <div className="about__text">
          <h2 className="about__title">Об авторе</h2>
          <p className="about__description">
            Здравствуйте, Меня зовут Кварацхелия Михаил, я начинающий frontend
            разработчик. Отучился на курсе фронтенд-разработчик в
            Яндекс.Практикуме. Изучил HTML, CSS, JavaScript, Webpack, а так же
            работу с GitHub
          </p>
          <p className="about__description">
            Во время обучения овладел навыками адаптивной, кроссбраузерной
            вёрстки, самостоятельному поиску нужной информации в поисковых
            системах, асинхронным запросам к серверу и тд. Было выполненно
            несколько самостоятельных проектов, каждый проект проходил ревью у
            специалистов Яндекс.Практикума. Код выполненных в рамках учебы в
            Практикуме и не только проектов, можно посмотреть в моём аккаунте на
            GitHub.
          </p>
          <p className="about__description">
            В данный момент нахожусь в поиске работы, хочу найти работу по новой
            и интересной для меня специальности.
          </p>
        </div>
      </div>
    </section>
  );
};
