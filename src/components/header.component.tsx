import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

const StyledHeader = styled(Header)`
  background: #fadde1;
  height: 64px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const StyledMenu = styled(Menu)`
  background: #fadde1;
  display: flex;
  justify-content: center;

  .ant-menu-item {
    color: #b6647d;
    transition: all 0.3s ease-in-out;
    &::after {
      border: none !important;
    }
    &:hover {
      color: #ffffff !important;
      font-weight: 700;
      &::after {
        border: none;
      }
    }
  }

  .ant-menu-item-selected {
    color: #c97a8c !important;
    font-weight: 700;
    scale: 1.05;
    &::after {
      border: none !important;
    }
  }
`;

const items = [
  {
    key: 1,
    label: 'Trang chủ',
  },
  {
    key: 2,
    label: 'Về bản thân',
  },
  {
    key: 3,
    label: 'Kinh nghiệm làm việc',
  },
];

export const HeaderComponent: React.FC = () => {
  return (
    <StyledHeader>
      <StyledMenu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </StyledHeader>
  );
};
