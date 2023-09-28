# Credit Card Number Validator

## Dependencies

* [node](https://nodejs.org/) v18+
* [yarn](https://yarnpkg.com/) v3.6+


## Getting Started
From the project root:

```bash
# Install dependencies
yarn

# Start server(s) on port 3001
yarn dev
```

Navigate to [http://localhost:3001]


## Testing

```bash
yarn build
yarn test
```

### Author's Notes (next steps)

Given more time I would look at the following:

- Error handling for bad API responses
- Not build an SPA for this…a page refresh is acceptable after form submission
- Add masking or something to make the input look nicer
- Add better messaging to the user
- Hook up sass or some better style/design system
- More tests
- Better testing setup, e.g. Typescript for jest