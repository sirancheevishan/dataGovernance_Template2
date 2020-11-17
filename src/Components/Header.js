import React, { Component } from "react";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg bg-color bg-img" id="Header">
      <div className="container">
        <div>
          <a className="navbar-brand" href="#Home">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAeCAYAAAD0HpphAAAEr0lEQVRoge1aMWzTQBR9qaKOTtUZiTAwscTZmEgl2ByplRBiADUdWAkdQAiJNgGJAYaGHalFTMDQSPXG0DKxxd0YOjRIrJTUC1IZii76V/38nt1zkpKk8pOi2Od/d9//3/3/vu3M8fEx4vDt2U91dRrAGwD3AGQAfADwGMDR9VeXYvunOF9kLUd/DeAhO1fHfwA8Tf0zWkxZzn7f0PbgohhhkmHrwFnLthT/GbYOTDGmyN4KHkVq9sVtWGkdN0aScVIkxxQxzLcAfgE4oOPpPsYa1jgpEiA7RIaZMtURIBvDMJMafuBxcsVyDcBqxOUOgCaA+mFrq60bM5lMQjUvFqaGyDDPm6nOAKgACHLFcmGI4040bAv5UaFO814m52lHrgGYkzo5rleg650w8Hcd11PH3Nm7YeB3RB8u0+0Xd6+28o7r5QHk9XkY+DvUXqKmdhj4bVNf0xiG/t0xxtqBh62tmj7OFcs/WHgt5YrlvA6l5LhNbjDH9ZRh35OzNZTTtSGU7Loai8/puJ4asx4G/oZoz9P8FYP82zDwJdWu8HTguJ5r0FHpshCxqDa5bo7rKZklateoT1IduCPOu4agFRlwwxAKwnknIAMF0nls3HXH9SpMvkDylQj5Ncf11s/Qf9ugY4napW77Bt1mhPO6mAgHqt0mnNE5bG1ph0rDtcnZHUSjQgYBydXpx8MhJ1PrTB4kJ+eocKcbMEN95EIsOK43z87XxFwd6mMMt2MdQnPFctSrkg26Pi9W9UYY+CrM6JW8LXKghjRQQ4UxCmkypM6LMVR4raF3J2sdqlo3A5Z0WGY7WkOdN2k8vgjUQpnTIZZ2ec8imcRHaY3D1tYyHUvn6HbQTddhRpO1KuP/dlxvm5yniE5NO8kwR0PM8Z5di2THPKcS8TGRH9m/LvLjsrg+MSwUug7kNaCEJANRYZQY6hyFK220kt59REwWTAzTdg4L2PTrkaEo0SNg68ADQ0130Kfi1uAs1AYqBAkDS9JwAqLlLrFL5cQbAHRIzhNhuCL7Gea4fI4m4KFeM+Ee2IbQD4a2dwOrNzgkIVijPMJp/yko5uq4Xk39VE4JA78ZBv4y0XQNbaymnEMfUC7jOUnqkwi61mNY1U6j+zrFqm134BP6lEI/LlMOfT6IssOAYqK5YnmXhUFlzHkKgXFPa/KiRlO77yuARSbT3WUUbjm5qRCx2TVQ/aicmwQqx+rXO+oe9k3kSsN2Bx4Rw5qlX5XaxgFLIlfwJyXGfEmEgue3EjmUhyhOGBaE/IzJeYYd1A9kOQM216n7OXMHjvtHS7RDXAovvJ5q0K46VfwS5milVw01nnLGSegk8qDlF4Wjd4boPD7XqqhXd2ix7nP5zM1WNarWyqgXsWe9rGWIHee8IN9GqPyW1JiUX/JnPQftV34QUJ5tG9hvF9kEDPMOgBUAVwHsAXgB4JPo89+ZquGzyH52QieiLhuW/CCInWfKkmHeBvARwDV6y36Nzu8wmXFlqhcaWUuGGVWPrbBdOJZM9aIjyxhmNeZer1q024yTYsjIWhKMPQqbpvb0q7MRwrYOjCpQX068BSYctg78DOAugO8A/tL/XSIyKUYFAP8A8nKyhSNUjkwAAAAASUVORK5CYII="
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#Homepage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Specialities">
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
