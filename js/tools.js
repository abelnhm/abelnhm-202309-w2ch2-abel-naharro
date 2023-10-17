export const strictEquals = () => {
  console.log('A', '|', 'B', '|', 'RESULT', '|', '');
  console.log('_', '|', '_', '|', '______', '');
  console.log('1', '|', '1', '|', Object.is(1, 1));
  console.log(NaN, '|', NaN, '|', Object.is(NaN, NaN), '// Rule Exception');
  console.log(0, '|', -0, '|', Object.is(0, -0), '// Rule Exception');
  console.log(-0, '|', 0, '|', Object.is(-0, 0), '// Rule Exception');
  console.log(1, '|', '1', '|', Object.is(1, '1'), '');
  console.log(true, '|', false, '|', Object.is(true, false), '');
  console.log(false, '|', false, '|', Object.is(false, false), '');
  console.log('water', '|', 'oil', '|', Object.is('water', 'oil'), '');
};
