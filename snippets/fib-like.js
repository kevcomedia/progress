// Default values generate plain-old Fibonacci numbers.
// We can probably generalize, letting it accept an arbitrary number of initial terms.
function* fibLike(a0 = 0, a1 = 1) {
  if (a0 < 0 || a1 < 0) {
    throw new Error('Args must be integers greater than or equal to 0');
  }
  if (!Number.isInteger(a0) || !Number.isInteger(a1)) {
    throw new Error('Args must be integers greater than or equal to 0');
  }

  yield a0;
  yield a1;

  let minus1 = a1;
  let minus2 = a0;
  for (let i = 2; true; i++) {
    yield minus1 + minus2;
    [minus1, minus2] = [minus1 + minus2, minus1];
  }
}

console.log('Generate the first 10 Fibonacci numbers');
{
  const limit = 10;
  let i = 0;
  for (const f of fibLike()) {
    console.log(f);
    if (++i == limit) break;
  }
}

console.log(
  'Generate the first 10 "Fibonacci-like" numbers that start with 2 and 5'
);
{
  const limit = 10;
  let i = 0;
  for (const f of fibLike(2, 5)) {
    console.log(f);
    if (++i == limit) break;
  }
}
