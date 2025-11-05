export function add(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0);
}

export function subtract(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  return numbers.slice(1).reduce((res, n) => res - n, numbers[0]);
}

export function multiply(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return numbers.reduce((prod, n) => prod * n, 1);
}

export function divide(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return NaN;
  if (numbers.length === 1) return numbers[0];
  // If any divisor is zero, return NaN to indicate invalid operation
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) return NaN;
  }
  return numbers.slice(1).reduce((res, n) => res / n, numbers[0]);
}

