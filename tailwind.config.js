/** @type {import('tailwindcss').Config} */

export const content = [
  ".src/**/*.{js,jsx,ts,tsx,css,scss,html}",
  "./src/*.{js, jsx}",
  "./src/**/**/*.{js,jsx,ts,tsx,css,scss,html}",
];
export const theme = {
  extend: {
    colors: {
      "regal-blue": "#243c5a",
      "theme-color-blue": "#2A9FC2"
    },
    flexBasis: {
      "outerRight": "570px",
    },
    height: {
      "content": "440px",
      "post-it": "35px",
      "login-button": "45px",
      
    },
    width: {
      "dotRight": "555px",
      "content-left": "212px",
      "content-right": "540px",
      "post-it": "70px",
      "login-button": "400px",
    },
    borderRadius: {
      "post-it": "0px 10px 10px 0px",
      "login-button": "5px",
      "login-input-top": "8px 8px 0px 0px",
      "login-input-bottom": "0px 0px 8px 8px",
    },
    borderWidth: {
      "3": "3px",
    },
    margin: {
      "content-left": "0 3px 8px 4px",
      "content-right": "0 0 8px 4px",
      "post-it": "29px 7px 0 -1px",
    }, 
    padding: {
      "outerLeft": "16px 0 0px 0",
      "content-left": "20px 5px 5px 5px",
      "content-right": "20px",
      "dot-left": "4px 0 4px 4px",
      "dot-right": "4px 4px 4px 0"
    }
  },
};
export const plugins = [];
