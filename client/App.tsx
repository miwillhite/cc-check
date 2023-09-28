import React, { useState } from "react";

enum CardValidity {
  Unknown,
  Invalid,
  Valid,
}

const verifyCreditCardNumber = (cardNumber: string) => {
  return fetch('/verify-credit-card-number', {
    method: 'POST',
    body: JSON.stringify({ cardNumber }),
    headers: { 'Content-Type': 'application/json' },
  }).then(r => r.json());
};

const ValidationAlert = ({ cardValidity }: { cardValidity: CardValidity }) => {
  if (cardValidity == CardValidity.Unknown) return null;

  const isValid = cardValidity == CardValidity.Valid;

  return (
    <div className={`result ${isValid ? 'success' : 'failure'}`}>
      {isValid ? 'PASS' : 'FAIL'}
    </div>
  );
};

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardValidity, setCardValidity] = useState(CardValidity.Unknown);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    verifyCreditCardNumber(cardNumber)
    .then(({ cardIsValid }) => {
      setCardValidity(cardIsValid ? CardValidity.Valid : CardValidity.Invalid);
    })
    // TODO Communicate to the user
    .catch(err => console.log('Something went wrong: ', err.message));
  }

  return (
    <form id="credit-card-validator">
      <h1>Verify Credit Card Number</h1>
      <p>Type in your credit card number to verify if it is correct, or not.</p>
      <input
        type="text"
        size={20}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Check</button>
      <ValidationAlert cardValidity={cardValidity} />
    </form>
  );
};

export default App;