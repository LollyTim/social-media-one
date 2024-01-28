import React from "react";
import styled from "styled-components";
import { Connect, connect } from "react-redux";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="images/unlink.png" alt="" />
        </a>
        <div>
          <Join>Join us</Join>
          <Signin>Sign in</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your extra professional comminity</h1>
          <img src="/images/login-hero.svg" alt="loginImage" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="googleLogo" />
            <p>Sign with google</p>
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a > img {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
    border-radius: 4px;
  }
`;

const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  transition-duration: 167ms;
  text-decoration: none;
  color: #0a66c2;
  border-radius: 24px;
  margin-right: 12px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.div`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  max-width: 1120px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; */
    width: 700px;
    height: 700px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 480px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  gap: 20px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  cursor: pointer;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 2px),
    inset 0 0 0 2px rgb(0 0 0 /0%), inset 0 0 0 1px rgb(0 0 0/ 0%);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapDispatchToProps, mapStateToProps)(Login);
// export default Login
