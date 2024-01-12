import { Space, Typography, Row, Col, Flex } from 'antd';
import styled from 'styled-components';

const StyledSectionLeft = styled(Space)`
  height: calc(100vh - 64px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledSectionRight = styled(Space)`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  background-image: url('./section1.png');
  background-size: cover;
`;

const StyledTitle = styled(Typography)`
  font-size: 108px;
  font-weight: 700;
  color: #b6647d;
  line-height: 90px;
`;

const StyledSubTitle = styled(Typography)`
  font-size: 56px;
  font-weight: 700;
  color: #b6647d;
  border-bottom: #fadde1 2px solid;
`;

const StyledContent = styled(Typography)`
  margin-top: 48px;
  font-size: 24px;
  display: flex;
  align-items: center;
  @keyframes updown {
    0%,
    100% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  a {
    color: #b6647d;
    font-weight: 700;
    margin-left: 4px;
  }
  img {
    margin-left: 4px;
    margin-right: 4px;
    animation: updown 4s linear infinite;
  }
`;

export const Section1Component = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={16} xl={14}>
        <StyledSectionLeft>
          <Flex vertical gap={1}>
            <StyledTitle>Portfolio</StyledTitle>
            <StyledSubTitle>Content Creator</StyledSubTitle>
          </Flex>
          <Flex vertical gap={1}>
            <StyledContent>
              <img src="/arrow.svg" width={32} height={32} />
              Tôi có cả tá điều hay ho cho bạn <a>tại đây</a>
              <img src="/arrow.svg" width={32} height={32} />
            </StyledContent>
          </Flex>
        </StyledSectionLeft>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={10}>
        <StyledSectionRight>
          <div></div>
        </StyledSectionRight>
      </Col>
    </Row>
  );
};
