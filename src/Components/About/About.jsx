import React from "react";
import "./About.css";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <div className="about-section-grid-1">
        <article className="about-content grid-col-span-2 grid-row-span-2">
          <div className="about-flex">
            <div className="">
              <h3>About Rockabuy</h3>
              <p>
                RockaBuy was founded by Himanshu Singh and others with the vision of
                enabling a future where millions of people can send their
                customized rockets to different regions of the Moon and be a
                part of the Space Community.
                <br />
                <br /> RockaBuy is working on today on developing partially and
                fully reusable launch vehicles that are safe, low cost and serve
                the needs of all civil, commercial and defense customers.
              </p>
            </div>
          </div>
        </article>

        <article className="about-content" style={{ padding: "0" }}>
          <div className="about-flex">
            <div className="">
              <img src="src\assets\rocket.jpg" alt="" />
            </div>
          </div>
        </article>

        <article className="about-content">
          <div className="about-flex">
            <div className="">
              <h3>RockaBuy Leadership</h3>
              <p style={{ fontSize: "1rem" }}>
                RockaBuy is led by Administrator Himanshu Singh, who founded it with Shiven , Akansha and Shalini on
                Dec 9, 2021.
                <br /> All of us are college students
              </p>
            </div>
          </div>
        </article>

        <article
          className="about-content grid-col-span-2"
          style={{ padding: "0" }}
        >
          <div className="about-flex">
            <div className="">
              <img src="src\assets\rockets.jpg" alt="" />{" "}
            </div>
          </div>
        </article>
      </div>

      <div className="about-section-grid-2">
        <article
          className="about-content grid-col-span-2"
          style={{ padding: "0" }}
        >
          <div className="about-flex">
            <div className="">
              <img src="src\assets\map.jpg" alt="" />
            </div>
          </div>
        </article>

        <article className="about-content">
          <div className="about-flex">
            <div className="">
              <h3>RockaBuy Centers and Facilities</h3>
              <p style={{ fontSize: "1rem" }}>
                Map of Centers and Facilites <br />
                <br />
                Visit RockaBuy
              </p>
            </div>
          </div>
        </article>

        <article className="about-content">
          <div className="about-flex">
            <div className="">
              <h4>Latest RockaBuy News Releases</h4>
              <p>
                The latest news updates from RockaBuy's Office of
                Communications.
                <br />
                <br />
                RockaBuy News
              </p>
            </div>
          </div>
        </article>

        <article className="about-content" style={{ padding: "0" }}>
          <div className="about-flex">
            <div className="">
              <img src="src\assets\moon.jpg" alt="" />
            </div>
          </div>
        </article>

        <article className="about-content">
          <div className="about-flex">
            <div className="">
              <h4>RockaBuy and Small Businesses</h4>
              <p>
                RockaBuy is committed to providing all categories of small
                businesses an opportunity to participate.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}

export default About;
