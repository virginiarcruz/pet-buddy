export default {
  grid: {
    container: '1128px',
    gutter: '156px'
  },
  border: {
    radius: {
      medium: '12px',
      pill: '100px'
    }
  },
  font: {
    family: "'Inter', -apple-system, sans-serif",
    regular: 400,
    medium: 500,
    bold: 600,
    size: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '22px'
    }
  },
  color: {
    mainBg: '#F6F7FA',
    black: '#000121',
    darkGray: '#707183',
    blue: '#002FD6',
    orange: '#F47500',
    middleGray: '##A1A2AF',
    white: '#FFFFFF',
    softBlue: '#E0E7FD'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
