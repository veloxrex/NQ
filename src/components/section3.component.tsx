import { PhoneFilled } from '@ant-design/icons';
import { Space, Row, Col, Flex, Typography, Timeline } from 'antd';
import styled from 'styled-components';

const StyledSectionLeft = styled(Space)`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 5% 10% 10% 10%;
  gap: 40px;
`;

const StyledSectionRight = styled(Space)`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 5% 10% 10% 10%;
`;

const StyledDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #b6647d;
`;

const StyledSmallDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #b6647d;
`;

const StyledBigDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #b6647d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled(Typography)`
  color: #b6647d !important;
  font-size: 24px;
  font-weight: 700;
`;

const StyledTimeLine = styled(Timeline)`
  .ant-timeline-item-head {
    background: transparent !important;
  }
`;
export const Section3Component = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <StyledSectionLeft>
          <Flex vertical gap={24}>
            <StyledTitle>Thông tin cá nhân</StyledTitle>
            <Typography>
              <Flex align="center" gap={8}>
                <StyledBigDot>
                  <img src="./cake.svg" width={12} height={12} />
                </StyledBigDot>
                <span style={{ fontSize: '16px' }}>02/10/2002</span>
              </Flex>
            </Typography>
            <Typography>
              <Flex align="center" gap={8}>
                <StyledBigDot>
                  <img src="./letter.png" width={16} height={16} />
                </StyledBigDot>
                <span style={{ fontSize: '16px' }}>nhuquynh21002@gmail.com</span>
              </Flex>
            </Typography>
            <Typography>
              <Flex align="center" gap={8}>
                <StyledBigDot>
                  <PhoneFilled style={{ color: 'white' }} />
                </StyledBigDot>
                <span style={{ fontSize: '16px' }}>0854529154</span>
              </Flex>
            </Typography>
          </Flex>
          <Flex vertical gap={24}>
            <StyledTitle>Học vấn</StyledTitle>
            <StyledTimeLine
              items={[
                {
                  dot: <StyledDot />,
                  children: (
                    <Flex vertical gap={8}>
                      <Typography
                        style={{
                          fontWeight: 700,
                          color: '#b6647d',
                          fontSize: '16px',
                        }}
                      >
                        2017 - 2020
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 700,
                          color: '#000000',
                          fontSize: '16px',
                        }}
                      >
                        THPT Nguyễn Hữu Huân
                      </Typography>
                      <Typography>2 giải Bạc Olympic Văn, 1 giải Ba HSG Văn TP.HCM</Typography>
                    </Flex>
                  ),
                },
                {
                  dot: <StyledDot />,
                  children: (
                    <Flex vertical gap={8}>
                      <Typography
                        style={{
                          fontWeight: 700,
                          color: '#b6647d',
                          fontSize: '16px',
                        }}
                      >
                        2020 - Hiện tại
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 700,
                          color: '#000000',
                          fontSize: '16px',
                        }}
                      >
                        Trường ĐH Khoa học Xã hội - Nhân văn
                      </Typography>
                      <Typography>Ngành Báo Chí - Truyền thông</Typography>
                    </Flex>
                  ),
                },
                {
                  dot: <></>,
                  children: null,
                },
              ]}
            />
          </Flex>
        </StyledSectionLeft>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <StyledSectionRight>
          <Flex vertical gap={24}>
            <StyledTitle>Kỹ năng</StyledTitle>
            <Typography>
              <Flex align="center" gap={8}>
                <StyledSmallDot />
                <span style={{ fontSize: '16px', lineHeight: '24px', marginBottom: '8px' }}>
                  Quay dựng sản phẩm truyền thông/báo chí
                  <br />
                  như: short video, behind the scene, voxpop,...
                </span>
              </Flex>
              <Flex align="center" gap={8}>
                <StyledSmallDot />
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    marginBottom: '8px',
                    marginTop: '8px',
                  }}
                >
                  Chụp và hậu kỳ ảnh bằng Lightroom
                </span>
              </Flex>
              <Flex align="center" gap={8}>
                <StyledSmallDot />
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    marginBottom: '8px',
                    marginTop: '8px',
                  }}
                >
                  Thiết kế cơ bản pót social bằng Canva
                </span>
              </Flex>
              <Flex align="center" gap={8}>
                <StyledSmallDot />
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    marginBottom: '8px',
                    marginTop: '8px',
                  }}
                >
                  Sáng tạo nội dung trên các nền tảng Facebook, Instagram, Tiktok
                </span>
              </Flex>
              <Flex align="center" gap={8}>
                <StyledSmallDot />
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    marginBottom: '8px',
                    marginTop: '8px',
                  }}
                >
                  Lên kế hoạch truyền thông các chương trình
                </span>
              </Flex>
            </Typography>
          </Flex>

          <Flex vertical gap={24} style={{ marginTop: '16px' }}>
            <StyledTitle>Công cụ</StyledTitle>
            <img src="./skill.png" width={600} height={100} />
          </Flex>
        </StyledSectionRight>
      </Col>
    </Row>
  );
};
