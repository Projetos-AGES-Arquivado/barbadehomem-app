import IMask from 'imask';

export const phoneParser = v => {
  !(v instanceof String) || isNaN(v);

  const masked = IMask.createMask({
    mask: '(00) 00000-0000',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};

export const birthdayParser = v => {
  !(v instanceof String) || isNaN(v);

  const masked = IMask.createMask({
    mask: '00/00/0000',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};
