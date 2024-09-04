import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss';
  
  
  export default defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        }
      })
    ],
    preflights: [
      {
        getCSS: () => `
          *,body {
            box-sizing: border-box;
          }
          input {
            border: none;
            background-image: none;
            background-color: transparent;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
          }
  
          ::-webkit-scrollbar {
            /*Scroll bar overall style*/
            width: 4px;
            /*Height and width respectively correspond to the size of horizontal and vertical scroll bars*/
            height: 8px;
            background: none;
          }
          ::-webkit-scrollbar-thumb {
            /*Small square in scroll bar*/
            border-radius: 10px;
            background: #ddd;
          }
          ::-webkit-scrollbar-track {
            /*Track inside scroll bar*/
            background: none;
            margin: 0;
          }
        `
      }
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
  });
  