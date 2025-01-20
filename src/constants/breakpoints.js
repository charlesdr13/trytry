export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '601px',
  desktop: '1025px',
  largeDesktop: '1281px'
}

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobile})`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet})`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktop})`,
  largeDesktopAndUp: `(min-width: ${BREAKPOINTS.largeDesktop})`
} 