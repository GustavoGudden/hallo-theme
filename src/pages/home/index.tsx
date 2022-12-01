import React from "react";
import * as C from "./style";

export const Home = () => {
  return (
    <>
      <C.Header>
        <C.LogoGroup>
          <img src="https://i.ibb.co/rZgkRnn/Group-62.png" alt="logo" />
          <h1>kreed</h1>
        </C.LogoGroup>

        <C.NavGroup>
          <nav>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">How it works</a>
            <a href="">Contact</a>
          </nav>
          <button>login</button>
        </C.NavGroup>
      </C.Header>
      <C.Main>
        <C.ContentContainer>
          <h1>
            GHOST IN THE <br /> SHELL
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            blanditiis magnam nisi qui nesciunt? Deserunt id cumque, officiis
            saepe possimus quo totam assumenda? Quis sequi dolore commodi iur
          </p>
          <button>
            Whatch Now
            <img
              src="https://i.ibb.co/k9QsLgx/Group-460.png"
              alt="play circle"
            />
          </button>
        </C.ContentContainer>
        <C.ImageContainer>
          <img src="https://i.ibb.co/vmdXXJj/Group-37.png" alt="Group-37" />
        </C.ImageContainer>
      </C.Main>
      <C.Footer>
        <img src="https://i.ibb.co/9TWVWTZ/Scroll.png" alt="Scroll icon" />
      </C.Footer>
    </>
  );
};
