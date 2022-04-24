export const validMobileNumber = (mobileNumber: string) => {
  const pattern = /^(0|0098|\+98|98)?9(0[1-5]|[1 3]\d|2[0-2]|9[0-4])\d{7}$/g;
  const isValid = pattern.test(mobileNumber);
  const mobile = isValid ? mobileNumber.slice(-10) : null;

  return {
    isValid: isValid,
    mobile: mobile
  };
};