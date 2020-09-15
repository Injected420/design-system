import React from 'react'
import { compose, css } from 'glamor'
import PropTypes from 'prop-types'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import stylesheet from '../css/index.js'

const styles = ({ themeName }) => {
  const label = 'psds-dropdown__sub-label'

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${label}.psds-theme--${themeName}`])
  )
}

export const SubLabel = ({ subLabel }) => {
  const themeName = useTheme()
  return subLabel ? <div {...styles({ themeName })}>{subLabel}</div> : null
}

SubLabel.displayName = 'Dropdown.SubLabel'
SubLabel.propTypes = {
  subLabel: PropTypes.node
}
