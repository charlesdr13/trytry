export const BREAKPOINTS = {
  mobile: '428px',
  tablet: '900px',
  desktop: '1024px',
  IP11: '415px'
}

export const QUERIES = {
  mobileAndUp: `(max-width: ${BREAKPOINTS.mobile})`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet})`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktop})`,
  IP11AndDown: `(max-width: ${BREAKPOINTS.IP11})`
} 