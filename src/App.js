import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(true);

  const onThemeSwitchClicked = (e) => {
    setUseDarkTheme((isDark) => !isDark);
  };

  return (
    <div className={"app" + (useDarkTheme ? " theme-dark" : "")}>
      <div className="app-content">
        <section className="switch">
          <ThemeSwitcher
            initialCheckStatus={useDarkTheme}
            onClickHandler={onThemeSwitchClicked}
          />
        </section>
        <section className="headline">
          <p>
            <a href="mailto:wenhe.qi@outlook.com">Wenhe Qi</a> is currently an
            MSCS student at{" "}
            <a className="usc" href="https://www.usc.edu/">
              USC
            </a>
            .
          </p>
          <p>
            Previously, a software engineer at{" "}
            <a className="htc" href="https://www.htc.com/">
              hTc
            </a>
            .
          </p>
        </section>
        <section className="links">
          <a href="mailto:wenhe.qi@outlook.com" className="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <defs>
                <linearGradient
                  id="email-mark-grad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="5%" stop-color="#d54b3d" />
                  <stop offset="80%" stop-color="#ab3c31" />
                </linearGradient>
              </defs>
              <path
                className="email-mark"
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/wenheqi/" className="linkedin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                className="linkedin-mark"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
          </a>
          <a href="https://github.com/wenheqi" className="github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="24"
              height="24"
            >
              <defs>
                <linearGradient
                  id="gh-mark-grad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="5%" stop-color="#a838bb" />
                  <stop offset="80%" stop-color="#51287c" />
                </linearGradient>
              </defs>
              <path
                className="gh-mark"
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <a href="https://codepen.io/wenheqi" className="codepen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            >
              <path
                className="codepen-mark"
                d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"
              />
            </svg>
          </a>
          <a
            href="https://stackoverflow.com/users/6648533/wenhe-qi"
            className="stackoverflow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              width="24"
              height="24"
            >
              <path
                className="so-mark-0"
                d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"
              />
              <path
                className="so-mark-1"
                d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"
              />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
