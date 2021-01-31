import React from "react";
import "../styles/Card.scss";
import github from "../images/github-logo.svg";
// import image from "../images/image_08.png";

export const Card = ({ item }) => {
  const { url, imgUrl, title, description, githubUrl } = item;

  return (
    <div className="card">
      <div className="card__image-block">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            // style={{ objectPosition: `0 ${percent}%` }}
            src={imgUrl}
            className="card__image"
            alt="изображение страницы"
            // onMouseOver={scrollDown}
          ></img>
        </a>
      </div>
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>

        <div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card__github"
          >
            <img
              src={github}
              alt="логотип github"
              className="card__github-logo"
            />
            <span className="card__github-link">перейти на GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

//разобраться с сылкой
