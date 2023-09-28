const { validateCardNumber } = require('../dist/validate-card-number');

// From https://www.paypalobjects.com/en_GB/vhelp/paypalmanager_help/credit_card_numbers.htm
const CARDS = {
  'American Express': '378282246310005',
  'American Express2': '371449635398431',
  'American Express Corporate': '378734493671000',
  'Australian BankCard': '5610591081018250',
  'Diners Club': '30569309025904',
  'Diners Club2': '38520000023237',
  'Discover': '6011111111111117',
  'Discover2': '6011000990139424',
  'JCB': '3530111333300000',
  'JCB2': '3566002020360505',
  'MasterCard': '5555555555554444',
  'MasterCard2': '5105105105105100',
  'Visa': '4111111111111111',
  'Visa2': '4012888888881881',
  'Visa3': '4222222222222',
  'Dankort': '76009244561',
  'Dankort': '5019717010103742',
  'Switch/Solo (Paymentech)': '6331101999990016',
};

describe('validateCardNumber', () => {
  Object.entries(CARDS).forEach(([provider, number]) => {
    test(provider, () => {
      expect(validateCardNumber(number)).toBeTruthy();
    });
  });
});