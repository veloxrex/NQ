import { Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { Section1Component } from './components/section1.component';
import { Section2Component } from './components/section2.component';
import { Section3Component } from './components/section3.component';
import { HeaderComponent } from './components/header.component';
import { Element } from 'react-scroll';

const StyledContent = styled(Content)`
  height: calc(100vh - 64px);
  background: #ffffff;
  padding-top: 64px;
`;

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        {/* Header */}
        <HeaderComponent />
        <StyledContent>
          {/* Section1 */}
          <Element name="section1">
            <Section1Component />
          </Element>
          {/* Section2 */}
          <Element name="section2">
            <Section2Component />
          </Element>
          {/* Section3 */}
          <Element name="section3">
            <Section3Component />
          </Element>
        </StyledContent>
      </Layout>
    </I18nextProvider>
  );
}

export default App;
