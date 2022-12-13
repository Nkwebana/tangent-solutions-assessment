import { DefaultTheme } from 'styled-components';
import { ButtonVariant } from '../../../enums';

interface ButtonProps {
  title: string;
  disabled?: boolean | undefined;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
  variant: ButtonVariant;
  icon?: JSX.Element;
  theme: DefaultTheme;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

interface StyledButtonProps {
  disabled: boolean | undefined;
  backgroundColor: string;
  hoverColor: string;
  titleColor: string;
  hasIcon?: boolean;
}

export type { ButtonProps, StyledButtonProps };
