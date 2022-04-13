import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>SSerdarSS </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nobis possimus, voluptate quos ratione saepe eius exercitationem accusamus assumenda, voluptates, autem rerum deleniti! Suscipit sunt porro numquam reprehenderit dignissimos magnam.
        </h4>
        <h2>
          <a href="serdarsorgun@icloud.com">Send email</a> :
          serdarsorgun@icloud.com
          
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;