export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '900px',
  desktop: '1024px'
}

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.mobile})`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet})`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktop})`
} 