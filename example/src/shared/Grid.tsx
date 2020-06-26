import {
  Grid as CssGrid,
  Cell as CssCell,
  IGridProps,
  ICellProps
} from 'styled-css-grid'
import {
  typography,
  space,
  color,
  position,
  layout,
  flexbox,
  TypographyProps,
  SpaceProps,
  ColorProps,
  PositionProps,
  LayoutProps,
  FlexboxProps
} from 'styled-system'
import styled from 'styled-components'

export type StyledSystemProps = TypographyProps &
  SpaceProps &
  ColorProps &
  PositionProps &
  LayoutProps

export const Grid = styled(CssGrid)<StyledSystemProps & IGridProps>`
    ${space}
    ${typography}
    ${color}
    ${position}
    ${layout}
`

export const Cell = styled(CssCell)<StyledSystemProps & ICellProps>`
    ${space}
    ${typography}
    ${color}
    ${position}
`

export const Box = styled.div<StyledSystemProps & FlexboxProps>`
    ${space}
    ${typography}
    ${color}
    ${position}
    ${layout}
    ${flexbox}
`
