import { Space, Typography, Row, Col, Flex } from 'antd';
import styled from 'styled-components';

const StyledSectionLeft = styled(Space)`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 2%;
  background-image: url('./section2.png');
  background-size: cover;
`;

const StyledSectionRight = styled(Space)`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 5% 10% 10% 10%;
`;
const StyledTitle = styled(Typography)`
  font-size: 72px;
  font-weight: 700;
  color: #b6647d;
`;

const StyledButtonRound = styled(Typography)`
  width: 230px;
  height: 48px;
  font-size: 20px;

  background: #fadde1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: #b6647d;
`;

const StyledContent = styled(Typography)`
  font-size: 22px;
  color: #000000;
  margin-bottom: 16px;
  padding-top: 32px;
  &:nth-child(1) {
    border-top: #fadde1 2px solid;
  }

  span {
    color: #b6647d;
    font-weight: 600;
  }
`;

export const Section2Component = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={8} xl={10}>
        <StyledSectionLeft>
          <div></div>
        </StyledSectionLeft>
      </Col>
      <Col xs={24} sm={24} md={12} lg={16} xl={14}>
        <StyledSectionRight>
          <Flex vertical>
            <StyledButtonRound>Xin chào, tôi là</StyledButtonRound>
          </Flex>
          <Flex vertical>
            <StyledTitle>Quỳnh Dao</StyledTitle>
          </Flex>
          <Flex vertical>
            <StyledContent>
              Tôi tên Nguyễn Lê Như Quỳnh (gọi thân thuơng là Quỳnh Dao), là người có xuất phát diểm
              từ ngành <span>Báo chí - Truyền thông</span>, trường ĐH Khoa học Xã hội - Nhân văn.
              Bằng niềm đam mê sâu sắc với viết lách, tôi luôn đặt mình vào tâm thế phải sáng tạo và
              mang đến mọi người những nội dung ý nghĩa.
            </StyledContent>
            <StyledContent>
              Với 2 năm kinh nghiệm, tôi đã trau dồi cho mình các kỹ năng như:{' '}
              <span>
                quay dựng, chụp ảnh, viết kịch bản, sáng tạo nội dung, tổ chức sự kiện,...
              </span>
            </StyledContent>
          </Flex>
        </StyledSectionRight>
      </Col>
    </Row>
  );
};
