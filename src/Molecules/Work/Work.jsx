import React, { Component, useEffect, useCallback, useState } from "react";
import "./Work.scss";

function Work() {
  const [stopAct, setStopAct] = useState(false);
  const dostuff = useCallback(() => {
    // define variables
    var items = document.querySelectorAll(".timeline li");
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
          if (i === 11) {
            setStopAct(true);
          }
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc());
    window.addEventListener("resize", callbackFunc());
    window.addEventListener("scroll", callbackFunc());
  }, []);

  if (!stopAct) {
    setInterval(() => {
      dostuff();
    }, 1000);
  }

  return (
    <div>
      <section className="timeline">
        <ul>
          <li>
            <div>
              <time>Accenture - 10/2019 - 08/2020</time>{" "}
              <p>
                Learned to work with kubernetes and GCP, and the core principles
                of react for front end developping. Worked with C# programming
                as well as applying new found MVC skills.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>Blocks Technology - 01/2017 - 04/2017</time>{" "}
              <p>
                rainee at Blocks Technology - in this internship, I had the
                opportunity to work in a small sized company, where the
                ibjective was firstly to connect a raspberry PI to a 3D printer
                and be able to control it there, here I had the opportunity to
                work with linux environment, this spiked my interest in IOT
                area. I have also developed a graphical interface using html and
                CSS for the touch panel of the printers.
              </p>
              
            </div>
          </li>
          <li>
            <div>
              <time>EDP Inovação - 11/2020 - 08/2021</time>
              <p>
                Worked mainly with Deep Learning and computer Vision, using
                python as the programming language. The project that was handed
                to me consisted in developing an android app that should be able
                to detect the Wattage that is read by the electric counters in
                real time, and classify the mode in which the electric counter
                is set. This area is one of those I’m most eager to learn more
                about.
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>Indra - 09/2021 - 04/2022</time>
              <p>
                Working mainly on front end react web applications, before I
                started working my work at indra, I attended a bootcamp
                regarding javascript and the main react core principles, im
                getting more and more proficient at js and developing enterprise
                level apps with react. I’m really enjoying my journey on
                learning this new concepts, truly a never ending process, full
                of growth. In summary the main technologies were: ReactJs,
                Redux, Context API, TypeScript, React Unit Testing Library.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Work;
