import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    colors: {
      background: string,
      nero: string,
      charcoal: string,
      dimGray: string,
      gainsBoro: string
      blueBolt: string,
    }
    breakpoints: {
      values: {
        mobile: number,
        tablet: number,
        laptop: number,
        desktop: number,
        tv: number,
      },
    },
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    colors: {
      background: string,
      nero: string,
      charcoal: string,
      dimGray: string,
      gainsBoro: string
      blueBolt: string,
    }
    breakpoints?: {
      values?: {
        mobile?: number,
        tablet?: number,
        laptop?: number,
        desktop?: number,
        tv?: number,
      },
    },
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
    tv: true;
  }
}