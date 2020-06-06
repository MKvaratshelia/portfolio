import React from "react";
import "../styles/Card.scss";
import github from "../images/github-logo.svg";
// import image from "../images/image_08.png";

export const Card = ({ item, index }) => {
  // const [percent, setPercent] = useState(0);

  // const scrollDown = () => {
  //   const scrollImageDown = setInterval(() => {
  //     if (percent > 99) {
  //       clearInterval(scrollImageDown);
  //     }
  //     setPercent(percent + 1);
  //   }, 50);
  // };

  return (
    <div className="card" key={index}>
      <div className="card__image-block">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <img
            // style={{ objectPosition: `0 ${percent}%` }}
            src={item.imgUrl}
            className="card__image"
            alt="изображение страницы"
            // onMouseOver={scrollDown}
          ></img>
        </a>
      </div>
      <div className="card__content">
        <h1 className="card__title">{item.title}</h1>
        <p className="card__description">{item.description}</p>

        <div>
          <a
            href={item.githubUrl}
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
