import { ButtonVariant } from '../../enums';

export const defaultModalConfig = {
  isOpen: false,
  message: '',
  primaryAction: () => {},
  secondaryAction: () => {},
  primaryActionVariant: ButtonVariant.PrimaryAction,
  secondaryActionVariant: ButtonVariant.SecondaryAction,
  title: '',
  primaryActionTitle: '',
  secondaryActionTitle: '',
};
