import { ButtonVariant } from '../../../enums';

interface ModalProps {}

interface ModalConfig {
  isOpen?: boolean;
  title: string;
  message: string;
  primaryAction: () => void;
  secondaryAction: () => void;
  primaryActionVariant: ButtonVariant;
  secondaryActionVariant: ButtonVariant;
  primaryActionTitle: string;
  secondaryActionTitle: string;
}

interface StyledModalProps {
  isOpen: boolean;
}

export type { ModalProps, StyledModalProps, ModalConfig };
