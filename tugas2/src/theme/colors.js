const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
    pich: (opacity = 0.5) => `rgba(255, 99, 71, ${opacity})`,
    pich1: (opacity = 0.8) => `rgba(255, 99, 71, ${opacity})`,
    pich2: (opacity = 0.3) => `rgba(255, 90, 45, ${opacity})`,
}
export default colors