export const required = (value: string | number) =>
  value || value === 0 ? null : 'This field is required';

export const passwordValidation = (value: string) =>
  value && value.length < 8 ? 'Must be 8 characters or more' : null;

export const passwordConfirmation =
  (passwordFieldName: string) => (value: string, values: any) =>
    value !== values.get(passwordFieldName) ? "Passwords don't match" : null;

export const emailValidation = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email not valid'
    : '';

export const maxValue = (max: number) => (value: any) =>
  (value || parseFloat(value) === 0) && value > max
    ? `Must be less than ${max + 1}`
    : null;

export const minValue = (min: number) => (value: any) =>
  (value || parseFloat(value) === 0) && value < min
    ? `Must be at least ${min}`
    : null;

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : null;

export const minLength = (min: number) => (value: string) =>
  value && value.length < min ? `Need ${min} characters or more` : null;

export const maxSelections = (max: number) => (value: string) =>
  value && value.length > max ? `Must not exceed ${max} options` : null;

export const minSelections = (min: number) => (value: string) =>
  value && value.length < min ? `Must select ${min} options or more` : null;

export const number = (value: any) =>
  value && isNaN(Number(value)) ? 'Must be a number' : null;

export const isEmpty = (value: string) =>
  value === undefined || value === null || value === '';

export const validSouthAfricanID = (value: string) => {
  const idError = "The ID number you've entered seems to be incorrect";
  if (!isEmpty(value)) {
    const id = value.replace(/[^\d]/g, '');
    if (id.length !== 13) {
      return idError;
    }
    const sixToTen = id.substr(6, 4);
    if (sixToTen === '0000') {
      return idError;
    }
    const zeroToSix = id.substr(0, 7);
    if (zeroToSix === '0000000' || zeroToSix === '6666666') {
      return idError;
    }
    const a = id.split('');
    let x = 0;
    let y = 0;
    let s = '';
    const control = a.pop();

    while (a.length > 0) {
      x += parseInt(a.shift(), 10);
      if (a.length > 0) {
        s = s.concat(a.shift());
      }
    }

    const aa = String(parseInt(s, 10) << 1).split('');

    while (aa.length > 0) {
      y += parseInt(aa.pop(), 10);
    }

    if (String((10 - ((x + y) % 10)) % 10) !== control) {
      return idError;
    }
  }
  return null;
};

export const phoneNumber = (value: string) => {
  if (!isEmpty(value)) {
    const phoneNo = '^(([0-9](\\d{9})|\\+(\\d{11})))$';
    if (!value.match(phoneNo)) {
      return 'Invalid phone number';
    }
  }
  return null;
};

export const match = (
  fieldValue: string,
  matchValue: string,
  field: string
) => {
  if (fieldValue !== matchValue) {
    return `Does not match ${field} field`;
  }

  return null;
};

export const isPhoneOrEmail = (value: string) => {
  if (!isEmpty(value)) {
    if (
      !/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/.test(
        value
      )
    ) {
      return 'invalid phone number or email entered';
    }
  }
  return null;
};

export const validCreditCardNumber = (value: string) =>
  // Accept only digits, dashes or spaces
  valid.number(value).isValid ? null : 'Invalid card number';

export const validCardExpiry = (expiry: string) =>
  valid.expirationDate(expiry).isValid ? null : 'Invalid expiry date';

export const validCVV = (cvv: string) =>
  valid.cvv(cvv, 3).isValid ? null : 'Invalid CVV';
