import localFont from "next/font/local";

const productSansBold = localFont({
  src: "./ProductSans-Bold.ttf",
  display: "swap",
  weight: "700",
  style: "normal",
  variable: "--font-product-sans-bold",
});

const productSansLight = localFont({
  src: "./ProductSans-Light.ttf",
  display: "swap",
  weight: "300",
  style: "normal",
  variable: "--font-product-sans-light",
});

const productSansMedium = localFont({
  src: "./ProductSans-Medium.ttf",
  display: "swap",
  weight: "500",
  style: "normal",
  variable: "--font-product-sans-medium",
});

const productSansRegular = localFont({
  src: "./ProductSans-Regular.ttf",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-product-sans-regular",
});

const productSansThin = localFont({
  src: "./ProductSans-Thin.ttf",
  display: "swap",
  weight: "100",
  style: "normal",
  variable: "--font-product-sans-thin",
});

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
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
