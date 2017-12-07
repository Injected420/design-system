import core from '@pluralsight/ps-design-system-core'
import {
  PageHeadingLayout,
  AsideLayout,
  EqualColumnLayout
} from '@pluralsight/ps-design-system-layout/react'
import Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const BlueBox = props => (
  <div className="bluebox">
    {props.children}
    <style jsx>{`
      .bluebox {
        display: flex;
        height: ${core.layout.spacingLarge};
        background: #8fc4e9;
      }
    `}</style>
  </div>
)

const PageHeadingLayoutOutput = _ => (
  <div className="page">
    <Theme>
      <PageHeadingLayout heading={<h3>Page title</h3>}>
        <div className="body" />
      </PageHeadingLayout>
    </Theme>
    <div className="marginBg" />
    <div className="margin marginHorz marginTop" />
    <div className="margin marginVert marginRight" />
    <div className="margin marginHorz marginBottom" />
    <div className="margin marginVert marginLeft" />
    <style jsx>{`
      .page {
        position: relative;
        background: ${core.colors.gray06};
        color: ${core.colors.white};
      }
      .body {
        height: 134px;
        background: #137bc2;
        opacity: 0.4;
      }
      .marginBg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: ${core.layout.spacingLarge} solid rgba(232, 10, 137, 0.3);
      }
      .margin {
        position: absolute;
        border-style: dashed;
        border-color: #ff00ce;
        border-width: 0;
      }
      .marginHorz {
        height: ${core.layout.spacingLarge};
        width: 100%;
      }
      .marginVert {
        height: 100%;
        width: ${core.layout.spacingLarge};
      }
      .marginTop {
        top: 0;
        left: 0;
        border-bottom-width: 1px;
      }
      .marginRight {
        top: 0;
        right: 0;
        border-left-width: 1px;
      }
      .marginBottom {
        bottom: 0;
        left: 0;
        border-top-width: 1px;
      }
      .marginLeft {
        top: 0;
        left: 0;
        border-right-width: 1px;
      }
    `}</style>
  </div>
)

const AsideLayoutOutput = _ => (
  <div className="examples">
    <div className="example">
      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <BlueBox />
          </AsideLayout.Aside>
        }
        main={
          <AsideLayout.Main>
            <BlueBox />
          </AsideLayout.Main>
        }
      />
    </div>
    <div className="example">
      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <BlueBox />
          </AsideLayout.Aside>
        }
        asidePosition={AsideLayout.asidePositions.last}
        main={
          <AsideLayout.Main>
            <BlueBox />
          </AsideLayout.Main>
        }
      />
    </div>
    <style jsx>{`
      .examples {
        padding-bottom: ${core.layout.spacingSmall};
      }
      .example {
        margin-bottom: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>
)

const EqualColumnLayoutOutput = _ => (
  <div className="examples">
    <div className="example">
      <EqualColumnLayout count={EqualColumnLayout.counts.six}>
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
      </EqualColumnLayout>
    </div>
    <div className="example">
      <EqualColumnLayout>
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
      </EqualColumnLayout>
    </div>
    <style jsx>{`
      .examples {
        padding-bottom: ${core.layout.spacingSmall};
      }
      .example {
        margin-bottom: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Layout">
      <PageHeading packageName="layout" beta>
        Layout
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-layout
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import * as Layout from '@pluralsight/ps-design-system-layout/react'
      </Code>

      <SectionHeading>Page Heading Layout</SectionHeading>
      <P>
        Start your layout with this default template to achieve standard outer
        spacing and title style.
      </P>
      <PageHeadingLayoutOutput />
      <Code language="javascript">{`<PageHeadingLayout heading={<h1>Page title</h1>}>
  Your page contents here
</PageHeadingLayout> `}</Code>
      <PropTypes
        title="Layout.PageHeadingLayout PropTypes"
        props={[
          PropTypes.row([
            'heading',
            'React.element',
            true,
            null,
            <span>Heading element to display as page title</span>
          ])
        ]}
      />

      <SectionHeading>Aside Layout</SectionHeading>
      <P>Use this layout for any 1/3, 2/3-proportioned layouts.</P>
      <AsideLayoutOutput />
      <Code language="javascript">{`<AsideLayout
  aside={<AsideLayout.Aside></AsideLayout.Aside>}
  main={<AsideLayout.Main></AsideLayout.Main>}  />

<AsideLayout
  aside={<AsideLayout.Aside></AsideLayout.Aside>}
  asidePosition={AsideLayout.asidePositions.last}
  main={<AsideLayout.Main></AsideLayout.Main>}  />`}</Code>
      <PropTypes
        title="Layout.AsideLayout PropTypes"
        props={[
          PropTypes.row([
            'aside',
            'React.element',
            true,
            null,
            <span>Content for aside</span>
          ]),
          PropTypes.row([
            'asidePosition',
            PropTypes.union(AsideLayout.asidePositions),
            false,
            <code>first</code>,
            <span>
              Aside position (from <code>AsideLayout.asidePositions</code>)
            </span>
          ]),
          PropTypes.row([
            'main',
            'React.element',
            true,
            null,
            <span>Main content</span>
          ])
        ]}
      />

      <SectionHeading>Equal Column Layout</SectionHeading>
      <P>
        This layout will provide a set number of columns for an arbitrary number
        of items. If more items than columns are provided, they will flow into
        rows.
      </P>
      <EqualColumnLayoutOutput />
      <Code language="javascript">{`<EqualColumnLayout count={EqualColumnLayout.counts.size}>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</EqualColumnLayout>

<EqualColumnLayout count={EqualColumnLayout.counts.size}>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</EqualColumnLayout>`}</Code>
      <PropTypes
        title="Layout.EqualColumnLayout PropTypes"
        props={[
          PropTypes.row([
            'count',
            PropTypes.union(EqualColumnLayout.counts),
            false,
            <code>four</code>,
            <span>Number of columns in a row at full width</span>
          ])
        ]}
      />
    </Content>
  </Chrome>
))
