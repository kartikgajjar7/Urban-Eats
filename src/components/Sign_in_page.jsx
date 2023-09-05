import { Link } from "react-router-dom";
const Sign_in_page = ({ head, body, path }) => {
  return (
    <div className="effor">
      <a href="http://www.thedresscounter.com" target="_blank">
        <header class="top-header"></header>

        <div>
          <div class="starsec"></div>
          <div class="starthird"></div>
          <div class="starfourth"></div>
          <div class="starfifth"></div>
        </div>

        <div class="lamp__wrap">
          <div class="lamp">
            <div class="cable"></div>
            <div class="cover"></div>
            <div class="in-cover">
              <div class="bulb"></div>
            </div>
            <div class="light"></div>
          </div>
        </div>

        <section class="error">
          <div class="error__content">
            <div class="error__message message">
              <h1 class="message__title">{head}</h1>
              <p class="message__text">{body}</p>
            </div>
            <div class="error__nav e-nav">
              {path ? <Link to="/" class="e-nav__link"></Link> : ""}
            </div>
          </div>
        </section>
      </a>
    </div>
  );
};
export default Sign_in_page;
