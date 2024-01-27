import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feeds</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Rocommendation>
          View all recommendations
          <img src="images/right-icon.svg" alt="rightside" />
        </Rocommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://ststic.exp1.licdn.com.scds/common/u/images/promo/ads/li_evergreen_job_ad_300x250_v1.jpg"
          alt="bannerIng"
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  /* margin-bottom: 70px; */
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: i6px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: i5px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 16px;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
  button {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.6);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0, 6);
    padding: 16px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    display: inline-flex;
    max-height: 32px;
    border-radius: 15px;
    box-sizing: border-box;
    max-width: 480px;
    text-align: center;
    outline: none;
  }
`;

const Avatar = styled.div`
  background-image: url("https://ststic-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Rocommendation = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default RightSide;
