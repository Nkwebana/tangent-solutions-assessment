import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryTwo: string;
      primaryFour: string;
      secondary: string;
      secondaryTwo: string;
      secondaryThree: string;
      secondaryFour: string;
      negativeAction: string;
      deleteAction: string;
      deleteActionTwo: string;
      secondaryAction: string;
      white: string;
      mainBackgroundColor: string;
      secondaryBackgroundColor: string;
      light: string;
      success: string;
      warning: string;
      gray: string;
    };
    fonts: {
      spartanRegular: string;
    };
  }
}
