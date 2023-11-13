// // color design tokens export
// interface ColorTokens {
//     [key: number]: string;
//   }
  
//   interface ColorPalette {
//     [key: number]: string;
//   }
  
//   interface TokensDark {
//     grey: ColorPalette;
//     primary: ColorPalette;
//     secondary: ColorPalette;
//   }
  
//   export const tokensDark: TokensDark = {
//     grey: {
//       0: "#ffffff",
//       10: "#f6f6f6",
//       50: "#f0f0f0",
//       100: "#e0e0e0",
//       200: "#c2c2c2",
//       300: "#a3a3a3",
//       400: "#858585",
//       500: "#666666",
//       600: "#525252",
//       700: "#3d3d3d",
//       800: "#292929",
//       900: "#141414",
//       1000: "#000000",
//     },
//     primary: {
//       100: "#d3d4de",
//       200: "#a6a9be",
//       300: "#7a7f9d",
//       400: "#4d547d",
//       500: "#21295c",
//       600: "#191F45",
//       700: "#141937",
//       800: "#0d1025",
//       900: "#070812",
//     },
//     secondary: {
//       50: "#f0f0f0",
//       100: "#fff6e0",
//       200: "#ffedc2",
//       300: "#ffe3a3",
//       400: "#ffda85",
//       500: "#ffd166",
//       600: "#cca752",
//       700: "#997d3d",
//       800: "#665429",
//       900: "#332a14",
//     },
//   };
  
//   // function that reverses the color palette
//   function reverseTokens(tokensDark: TokensDark): TokensDark {
//     const reversedTokens: TokensDark = {} as TokensDark;
//     Object.entries(tokensDark).forEach(([key, val]) => {
//       const reversedObj: ColorPalette = {} as ColorPalette;
//       Object.entries(val).forEach(([innerKey, innerVal]) => {
//         reversedObj[innerKey] = val[1000 - parseInt(innerKey)];
//       });
//       reversedTokens[key as keyof TokensDark] = reversedObj;
//     });
//     return reversedTokens;
//   }
  
//   export const tokensLight: TokensDark = reverseTokens(tokensDark);
  
//   // mui theme settings
//   interface ThemeSettings {
//     palette: {
//       mode: string;
//       primary: ColorPalette;
//       secondary: ColorPalette;
//       neutral: ColorPalette;
//       background: {
//         default: string;
//         alt: string;
//       };
//     };
//     typography: {
//       fontFamily: string;
//       fontSize: number;
//       h1: {
//         fontFamily: string;
//         fontSize: number;
//       };
//       h2: {
//         fontFamily: string;
//         fontSize: number;
//       };
//       h3: {
//         fontFamily: string;
//         fontSize: number;
//       };
//       h4: {
//         fontFamily: string;
//         fontSize: number;
//       };
//       h5: {
//         fontFamily: string;
//         fontSize: number;
//       };
//       h6: {
//         fontFamily: string;
//         fontSize: number;
//       };
//     };
//   }
  
//   export const themeSettings = (mode: string): ThemeSettings => {
//     return {
//       palette: {
//         mode: mode,
//         ...(mode === "dark"
//           ? {
//               // palette values for dark mode
//               primary: {
//                 ...tokensDark.primary,
//                 main: tokensDark.primary[400],
//                 light: tokensDark.primary[400],
//               },
//               secondary: {
//                 ...tokensDark.secondary,
//                 main: tokensDark.secondary[300],
//               },
//               neutral: {
//                 ...tokensDark.grey,
//                 main: tokensDark.grey[500],
//               },
//               background: {
//                 default: tokensDark.primary[600],
//                 alt: tokensDark.primary[500],
//               },
//             }
//           : {
//               // palette values for light mode
//               primary: {
//                 ...tokensLight.primary,
//                 main: tokensDark.grey[50],
//                 light: tokensDark.grey[100],
//               },
//               secondary: {
//                 ...tokensLight.secondary,
//                 main: tokensDark.secondary[600],
//                 light: tokensDark.secondary[700],
//               },
//               neutral: {
//                 ...tokensLight.grey,
//                 main: tokensDark.grey[500],
//               },
//               background: {
//                 default: tokensDark.grey[0],
//                 alt: tokensDark.grey[50],
//               },
//             }),
//       },
//       typography: {
//         fontFamily: ["Inter", "sans-serif"].join(","),
//         fontSize: 12,
//         h1: {
//           fontFamily: ["Inter", "sans-serif"].join(","),
//           fontSize: 40,
//         },
//         h2: {
//           fontFamily: ["Inter", "sans-serif"].join(","),
//           fontSize: 32,
//         },
//         h3: {
//           fontFamily: ["Inter", "sans-serif"].join(","),
//           fontSize: 24,
//         },
//         h4: {
//           fontFamily: ["Inter", "sans-serif"].join(","),
//           fontSize: 20,
//         },
//         h5: {
//           fontFamily: ["Inter", "sans-serif"].join(","),
//           fontSize: 16,
//         },
//         h6: {
//           fontFamily: ["Inter", "sans-serif"].join(","),
//           fontSize: 14,
//         },
//       },
//     };
//   };
  