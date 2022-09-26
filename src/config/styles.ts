interface ColorTypes {
  primary: string
  primaryLight: string
  primaryDark: string
  primaryTransparent: string
  secondary: string
  secondaryDark: string
  white: string
}

interface BreakpointValueTypes {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

type GetBreakpointValueTypes = keyof typeof BREAKPOINTS

export const COLORS: ColorTypes = {
  // https://coolors.co/3d348b-7678ed-f7b801-f18701-f35b04
  primary: '#3D348B',
  primaryLight: '#7678ED',
  primaryDark: '#241F51',
  primaryTransparent: '#241F51d0',
  secondary: '#F7B801',
  secondaryDark: '#F18701',
  white: '#fff',
}

export enum BREAKPOINTS {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export const BREAKPOINT_VALUES: BreakpointValueTypes = {
  // min-width - https://ant.design/components/grid/
  xs: 0,
  sm: 577,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

export const getBreakpointInPixel = (breakpoint: GetBreakpointValueTypes) => {
  return `${BREAKPOINT_VALUES[breakpoint]}px`
}

export const isMobile = !!((window?.innerWidth ?? 1000) <= BREAKPOINT_VALUES.lg)
