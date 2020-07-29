import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { colorsPink } from '@pluralsight/ps-design-system-core'

import {
  PageHeadingLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import NavBar from '@pluralsight/ps-design-system-navbar'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import NavUser from '@pluralsight/ps-design-system-navuser'
import * as Text from '@pluralsight/ps-design-system-text'

import Frame from '../index.js'

storiesOf('Frame', module)
  .add('basic', _ => {
    function Story() {
      const [open, setOpen] = useState(false)
      const toggle = () => setOpen(!open)

      return (
        <Frame
          topnav={<MockTopNav onMobileMenuClick={toggle} />}
          sidenav={<MockSideNav />}
          sidenavOpen={open}
        >
          <MockContent />
        </Frame>
      )
    }

    return <Story />
  })
  .add('short content', _ => {
    function Story() {
      const [open, setOpen] = useState(false)
      const toggle = () => setOpen(!open)

      return (
        <Frame
          topnav={<MockTopNav onMobileMenuClick={toggle} />}
          sidenav={<MockSideNav />}
          sidenavOpen={open}
        >
          <PageWidthLayout>
            <Text.P>
              Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
              cotton candy candy canes bear claw apple pie.
            </Text.P>
          </PageWidthLayout>
        </Frame>
      )
    }

    return <Story />
  })
  .add('no sidenav', _ => (
    <Frame topnav={<MockTopNav />}>
      <MockContent />
    </Frame>
  ))

function MockContent() {
  return (
    <>
      <div style={{ background: colorsPink[6] }}>
        <PageWidthLayout>
          <PageHeadingLayout heading={<h3>Page title</h3>} />
        </PageWidthLayout>
      </div>

      <PageWidthLayout>
        <Text.P>
          Cupcake ipsum dolor sit amet. Sweet gummi bears dragée. Pie dragée
          cotton candy candy canes bear claw apple pie. Dessert apple pie
          caramels carrot cake bear claw sweet donut. Croissant chocolate bear
          claw jelly chocolate candy pie pudding caramels. Cake muffin candy
          liquorice liquorice tiramisu powder pie dragée. Danish soufflé sweet
          apple pie cupcake tart. Danish cookie oat cake tiramisu lemon drops
          pie apple pie cake cotton candy. Pudding brownie jujubes. Chocolate
          bar biscuit liquorice candy jelly-o tiramisu icing muffin sweet roll.
          Jelly candy canes chocolate dragée. Danish biscuit sugar plum cake.
          Cotton candy soufflé muffin gummi bears.
        </Text.P>

        <Text.P>
          Sweet roll sweet roll cotton candy marshmallow lemon drops caramels
          sweet roll toffee. Bear claw powder ice cream topping wafer cake
          tootsie roll. Lemon drops pudding dessert toffee fruitcake toffee.
          Icing marzipan cake pastry biscuit liquorice chupa chups sesame snaps.
          Biscuit muffin donut. Marshmallow carrot cake icing icing dragée
          jujubes lemon drops. Danish cheesecake sesame snaps. Sweet sugar plum
          fruitcake tootsie roll. Fruitcake jelly-o soufflé muffin cheesecake
          pie apple pie jelly powder. Cake dragée danish muffin dragée soufflé
          marzipan croissant danish. Soufflé chupa chups cake biscuit icing
          pastry cake danish danish. Icing cotton candy oat cake chocolate
          macaroon tiramisu sweet dragée cake. Ice cream carrot cake lemon
          drops. Jelly sweet wafer liquorice brownie sesame snaps halvah apple
          pie jelly-o.
        </Text.P>

        <Text.P>
          Tootsie roll dragée apple pie. Pie cake toffee caramels gummies chupa
          chups carrot cake chupa chups. Jelly-o fruitcake macaroon chocolate.
          Brownie lollipop sugar plum gummies marshmallow muffin bonbon carrot
          cake. Pudding powder lemon drops halvah. Icing cupcake pastry chupa
          chups danish sweet bear claw sugar plum. Chupa chups wafer donut
          lollipop. Sweet roll croissant cake chocolate cake croissant pastry
          toffee. Chocolate cake liquorice halvah pastry danish candy canes.
          Apple pie pastry topping sesame snaps cupcake liquorice icing
          chocolate bar brownie. Chocolate cake sesame snaps cake gummies
          cupcake pastry jujubes fruitcake. Muffin fruitcake soufflé macaroon
          danish. Dessert chocolate marshmallow sesame snaps donut toffee ice
          cream sugar plum dragée.
        </Text.P>

        <Text.P>
          Marzipan lollipop jelly-o soufflé macaroon tart danish tart dessert.
          Chupa chups lemon drops lemon drops jujubes dragée dessert. Wafer
          chupa chups gummi bears sugar plum gummies. Powder topping apple pie
          danish sweet roll. Pudding toffee brownie. Tootsie roll lemon drops
          sweet macaroon jelly-o oat cake muffin chocolate. Wafer chocolate
          danish cookie cookie danish. Chocolate jelly-o gingerbread fruitcake
          croissant wafer lollipop bonbon macaroon. Carrot cake candy dessert.
          Brownie gummies topping sweet roll jelly sesame snaps croissant
          marshmallow caramels. Candy canes jelly-o jelly beans chupa chups
          tiramisu cupcake cake tart. Biscuit brownie chocolate bar danish candy
          canes donut liquorice. Muffin cake jelly beans muffin powder
          gingerbread toffee. Gingerbread topping toffee chupa chups sweet roll.
        </Text.P>

        <Text.P>
          Jelly beans gingerbread dessert macaroon candy canes. Candy liquorice
          carrot cake chocolate bar pastry dessert caramels danish. Donut apple
          pie tart dragée sesame snaps chocolate tootsie roll jelly-o sugar
          plum. Chocolate cake sesame snaps jelly beans. Gummies pudding
          gummies. Jelly-o topping biscuit cookie halvah pudding gingerbread
          toffee cake. Sesame snaps topping icing jelly cake donut macaroon
          candy canes jelly beans. Tiramisu pie pie. Cake gingerbread pastry
          topping jujubes apple pie pie. Jelly beans marshmallow chocolate cake
          chocolate cake biscuit danish dessert. Halvah biscuit macaroon. Sugar
          plum pie gummi bears gummies pastry.
        </Text.P>

        <Text.P>
          Marzipan lollipop jelly-o soufflé macaroon tart danish tart dessert.
          Chupa chups lemon drops lemon drops jujubes dragée dessert. Wafer
          chupa chups gummi bears sugar plum gummies. Powder topping apple pie
          danish sweet roll. Pudding toffee brownie. Tootsie roll lemon drops
          sweet macaroon jelly-o oat cake muffin chocolate. Wafer chocolate
          danish cookie cookie danish. Chocolate jelly-o gingerbread fruitcake
          croissant wafer lollipop bonbon macaroon. Carrot cake candy dessert.
          Brownie gummies topping sweet roll jelly sesame snaps croissant
          marshmallow caramels. Candy canes jelly-o jelly beans chupa chups
          tiramisu cupcake cake tart. Biscuit brownie chocolate bar danish candy
          canes donut liquorice. Muffin cake jelly beans muffin powder
          gingerbread toffee. Gingerbread topping toffee chupa chups sweet roll.
        </Text.P>

        <Text.P>
          Jelly beans gingerbread dessert macaroon candy canes. Candy liquorice
          carrot cake chocolate bar pastry dessert caramels danish. Donut apple
          pie tart dragée sesame snaps chocolate tootsie roll jelly-o sugar
          plum. Chocolate cake sesame snaps jelly beans. Gummies pudding
          gummies. Jelly-o topping biscuit cookie halvah pudding gingerbread
          toffee cake. Sesame snaps topping icing jelly cake donut macaroon
          candy canes jelly beans. Tiramisu pie pie. Cake gingerbread pastry
          topping jujubes apple pie pie. Jelly beans marshmallow chocolate cake
          chocolate cake biscuit danish dessert. Halvah biscuit macaroon. Sugar
          plum pie gummi bears gummies pastry.
        </Text.P>
      </PageWidthLayout>
    </>
  )
}

function MockSideNav() {
  return (
    <div>
      <Text.P>side nav</Text.P>
    </div>
  )
}

function MockTopNav(props) {
  const { onMobileMenuClick } = props

  return (
    <div>
      <NavBar
        brand={<SkillsBrand />}
        onMobileMenuClick={onMobileMenuClick}
        user={<NavUser name="Jake" planName="Accenture" />}
      />
    </div>
  )
}
MockTopNav.propTypes = {
  onMobileMenuClick: PropTypes.func
}

function SkillsBrand(props) {
  function SkillsLogo() {
    return (
      <svg aria-hidden viewBox="0 0 32 32">
        <defs>
          <linearGradient
            id="skills-gradient"
            x1="45.6377"
            y1="47.4727"
            x2="-32.2436"
            y2="-35.2537"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stopColor="#F05A28" />
            <stop offset="0.93" stopColor="#EB008B" />
          </linearGradient>
        </defs>
        <path
          d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
          fill="url(#skills-gradient)"
        />
      </svg>
    )
  }

  return <NavBrand {...props} logo={<SkillsLogo />} wordmark="SKILLS" />
}
