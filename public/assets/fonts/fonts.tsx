import localFont from "next/font/local";

const productSansBold = localFont({
  src: "./productsans-bold.ttf",
  display: "swap",
  weight: "700",
  style: "normal",
  variable: "--font-product-sans-bold",
});

const productSansLight = localFont({
  src: "./product-sans-light.ttf",
  display: "swap",
  weight: "300",
  style: "normal",
  variable: "--font-product-sans-light",
});

const productSansMedium = localFont({
  src: "./product-sans-medium.ttf",
  display: "swap",
  weight: "500",
  style: "normal",
  variable: "--font-product-sans-medium",
});

const productSansRegular = localFont({
  src: "./product-sans-regular.ttf",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-product-sans-regular",
});

const productSansThin = localFont({
  src: "./product-sans-thin.ttf",
  display: "swap",
  weight: "100",
  style: "normal",
  variable: "--font-product-sans-thin",
});

const pretendard = localFont({
  src: "./pretendard-variable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export {
  productSansBold,
  productSansLight,
  productSansMedium,
  productSansRegular,
  productSansThin,
  pretendard,
};
