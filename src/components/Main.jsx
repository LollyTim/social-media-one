import React from "react";
import styled from "styled-components";
import { BiLike, BiSolidLike } from "react-icons/bi";
// import { PiHandsClapping } from "react-icons/pi";
import { FaShare, FaRegComment } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="images/user.svg" alt="" />
          <button>Staet a Post</button>
        </div>
        <div>
          <button>
            <img src="images/photo-icon.png" alt="addphoto" />
            <span>photo</span>
          </button>
          <button>
            <img src="images/video-icon.png" alt="video" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.png" alt="event" />
            <span>Event</span>
          </button>
          <button>
            <img src="images/article-icon.png" alt="Article" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="images/user.svg" alt="user" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <BsThreeDots width={50} />
            </button>
          </SharedActor>
          <Discription>discription</Discription>
          <SharedImg>
            <a>
              <img src="/images/user.svg" alt="shared" />
            </a>
          </SharedImg>
          <SocialCount>
            <li>
              <button>
                <BiSolidLike color="#0a66c2" />
                <FaHandsClapping color="#0a66c2" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCount>
          <SocialActions>
            <button>
              <BiLike color="#0a66c2" />
              <span>Like</span>
            </button>
            <button>
              <FaShare color="#0a66c2" />
              <span>Comment</span>
            </button>
            <button>
              <FaRegComment color="#0a66c2" />
              <span>share</span>
            </button>
            <button>
              <LuSend color="#0a66c2" />
              <span>send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
      img {
        width: 32px;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 8px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 12px;
        }
        span {
          color: #70d5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: hidden;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child() {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Discription = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  font-size: 14px;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
  }
`;

const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  gap: 1px;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      background: transparent;
      border: none;
      gap: 2px;
      img {
        width: 15px;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  justify-content: space-between;
  border: none;
  button {
    background: transparent;
    gap: 5px;
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    border-radius: 8px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
