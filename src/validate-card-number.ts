const sum = (a: number, b: number) => a + b;

export const validateCardNumber = (cardNumber: string): boolean => {
  const [check, ...digits] = 
    cardNumber
      .split('')
      .reverse()
      .map(s => parseInt(s, 10));

  // 1. From the rightmost digit, move left and double the 
  //    value of every second digit; if doubled number is 
  //    greater than 9 (e.g., 7 × 2 = 14), then subtract 9
  //    from the product.
  // 2. Sum of all the digits in the newly calculated number.
  // 3. If the sum from step 2 modulo 10 is equal to 0
  //    then the number is valid according to the Luhn formula.   
  //    Otherwise, the number is not valid.
  //
  // Source: https://www.creditcardvalidator.org/articles/luhn-algorithm
  const digitSum = digits.map((digit, idx) => {
    const product = idx % 2 === 0 ? digit * 2 : digit;
    return product > 9 ? product - 9 : product;
  }).reduce(sum, 0);
  
  return (digitSum + check) % 10 === 0;
};