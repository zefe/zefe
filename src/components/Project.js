import React from "react"
import {
  StyledProjectCards,
  FullProject,
  Description,
  Description2,
  Image,
  Icons,
} from "../styles/components"

// Projects images
import Instagram from "../components/instagram"
import Airbnb from "../components/airbnb"
import Youtube from "../components/youtube"
import Eda from "../components/eda"
//import Graphql from "./graphql"
import Kamaja from "./kamaja"
import Energia from "./energia"

// Icons stack
import html from "../images/stack/a_html5.png"
import css from "../images/stack/a_css3.png"
import js from "../images/stack/a_js.png"
import react from "../images/stack/a_react.png"
import github from "../images/stack/a_github.png"
import graphql from "../images/stack/a_graphql.png"
import apollo from "../images/stack/a_apollo.png"
import mongo from "../images/stack/a_mongo.png"
import wp from "../images/stack/wp.png"
import woo from "../images/stack/woo.png"
import stripe from "../images/stack/stripe.png"
import Video from "./video"

const Project = ({ data }) => {
  console.log("New projects ....")
  console.log(data)
  return (
    <>
      <StyledProjectCards>
        <h2>Projects </h2>
        <section>
          <article>
            <a href="https://zefevideo.netlify.app/home.html">
              <Video />
            </a>
            <h3>Video App</h3>
            <p>Frontend CSS and HTML</p>
            <Icons>
              <img src={html} alt="html5" />
              <img src={css} alt="css" />
              <img src={github} alt="github" />
            </Icons>
          </article>
          <article>
            <a href="https://zefe.github.io/academy-gram/">
              <Instagram />
            </a>
            <h3>Instagram</h3>
            <p>Instagram reply with CSS and HTML</p>
            <Icons>
              <img src={html} alt="html5" />
              <img src={css} alt="css" />
              <img src={github} alt="github" />
            </Icons>
          </article>
          <article>
            <a href="https://zefe.github.io/airbnb/">
              <Airbnb />
            </a>
            <h3>Airbnb</h3>
            <p>Airbnb reply with CSS and HTML</p>
            <Icons>
              <img src={html} alt="html5" />
              <img src={css} alt="css" />
              <img src={github} alt="github" />
            </Icons>
          </article>
          <article>
            <a href="https://zefe.github.io/youtube/">
              <Youtube />
            </a>
            <h3>Youtube</h3>
            <p>Yuotube reply with CSS, HTML with Js</p>
            <Icons>
              <img src={html} alt="html5" />
              <img src={css} alt="css" />
              <img src={js} alt="javascript" />
              <img src={github} alt="github" />
            </Icons>
          </article>
        </section>
      </StyledProjectCards>
      <FullProject>
        <section>
          <article className="change-direction">
            <Image>
              <a href="https://eda-webapp.firebaseapp.com/">
                <Eda />
              </a>
              <Icons>
                <img src={graphql} alt="html5" />
                <img src={apollo} alt="css" />
                <img src={react} alt="github" />
                <img src={js} alt="javascript" />
                <img src={mongo} alt="mongodb" />
              </Icons>
            </Image>
            <Description2>
              <h3>EDA is FullStack Project</h3>
              <p>
                I developed this project during the FullStack JS course with
                Mongo + Express + React + Node. It is a collaborative work
                platform for data science teams.
              </p>
              <p>
                This project is fully functional and is running in production,
                you can test it by creating an account and logging in.
                <br /> The project prototype designed by me with figma.
                <a href="https://projects.invisionapp.com/share/HCSF3MB8DKR#/screens">
                  {" "}
                  Click to see
                </a>
              </p>
            </Description2>
          </article>
        </section>
      </FullProject>
      <FullProject>
        <section>
          <article>
            <Description>
              <h3>Joyeria Kamaja</h3>
              <p>
                Develop this online store with Wordpress, Woocommerce and use
                Stripe for payment management. If you like custom jewelry, you
                can visit them and have a look, they really have good products.
              </p>
            </Description>
            <Image>
              <a href="https://joyeriakamaja.com/">
                <Kamaja />
              </a>
              <Icons>
                <img src={wp} alt="wordpress" />
                <img src={woo} alt="woocommerce" />
                <img src={stripe} alt="stripe" />
              </Icons>
            </Image>
          </article>
        </section>
      </FullProject>
      <FullProject>
        <section>
          <article className="change-direction">
            <Image>
              <a href="https://www.solucionesenergia.com/">
                <Energia />
              </a>
              <Icons>
                <img src={html} alt="html5" />
                <img src={css} alt="css" />
                <img src={js} alt="javascript" />
              </Icons>
            </Image>
            <Description2>
              <h3>Energy Solutions</h3>
              <p>
                This project is fully functional and is running in production, I
                developed it for a company that offers energy solutions.
              </p>
            </Description2>
          </article>
        </section>
      </FullProject>
    </>
  )
}

export default Project
