const nationalIdValidation = (code: string) => {
  code = p2e(code);

  if (code.length < 8 || parseInt(code, 10) == 0) {
    return false;
  }
  code = ('0000' + code).substr(code.length + 4 - 10);

  if (parseInt(code.substr(3, 6), 10) == 0) {
    return false;
  }

  const c = parseInt(code.substr(9, 1), 10);

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(code.substr(i, 1), 10) * (10 - i);
  }

  sum = sum % 11;
  return (sum < 2 && c == sum) || (sum >= 2 && c == (11 - sum));
};

// @ts-ignore
const p2e = (s: string) => s.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));

export default nationalIdValidation