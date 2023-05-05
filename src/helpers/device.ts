export enum DEVICE_TYPE {
  MOBILE = "mobile",
  TABLET = "tablet",
  WEB = "web",
}

export const screenSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 600,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const screenSizeCSS = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "600px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${screenSizeCSS.mobileS})`,
  mobileM: `(max-width: ${screenSizeCSS.mobileM})`,
  mobileL: `(max-width: ${screenSizeCSS.mobileL})`,
  mobileXL: `(max-width: ${screenSizeCSS.mobileXL})`,
  tablet: `(max-width: ${screenSizeCSS.tablet})`,
  laptop: `(max-width: ${screenSizeCSS.laptop})`,
  laptopL: `(max-width: ${screenSizeCSS.laptopL})`,
  desktop: `(max-width: ${screenSizeCSS.desktop})`,
  desktopL: `(max-width: ${screenSizeCSS.desktop})`,
};

export const getDeviceType = (width: number): DEVICE_TYPE => {
  if (width <= screenSize.mobileXL) {
    return DEVICE_TYPE.MOBILE;
  }
  if (width <= screenSize.tablet) {
    return DEVICE_TYPE.TABLET;
  }
  return DEVICE_TYPE.WEB;
};
