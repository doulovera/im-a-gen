import React from "react";
import { FooterS, DivContainer } from "./styles";

export default function Footer() {
  return (
    <FooterS>
      <DivContainer>
        <div>
          <h3>Tools</h3>
          <ul>
            <li>
              Images generated with{" "}
              <a href="https://picsum.photos/">Lorem Picsum</a>
            </li>
            <li>
              Inspired by <a href="https://getwaves.io/">getwaves.io</a>
            </li>
            <li>
              Icons from <a href="https://svgbox.net/">SVGBOX</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact me</h3>
          <ul>
            <li>
              My <a href="https://doulovera.vercel.app/">personal portfolio</a>
            </li>
            <li>
              <a href="https://github.com/doulovera/im-a-gen">Source code</a>
            </li>
            <li>
              My Twitter is{" "}
              <a href="https://twitter.com/doulovera">@doulovera</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Copyright ©2021</h3>
        </div>
      </DivContainer>
    </FooterS>
  );
}
