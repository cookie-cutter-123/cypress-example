# cypress-example

The purpose of this project is to test and show the basic functionalities of Cypress.

## Getting started

Install dependencies specified in the package.json file:

```shell
npm install
```

Launch Cypress Test Runner:

```shell
npm run cypress:open:it
```
```shell
npm run cypress:open:pta
```

Launch Cypress in a headless mode:

```shell
npm run cypress:run:it
```
```shell
npm run cypress:run:pta
```

## ESLint and Prettier

Run ESLint with the Prettier plugin (`npx eslint . --ext .js,.jsx,.ts,.tsx`):

```shell
npm run lint:check
```

Apply ESLint (`npx eslint . --ext .js,.jsx,.ts,.tsx --fix`):

```shell
npm run lint:fix
```

## Cypress commands

Custom commands can be added in `cypress/support/commands.ts` and documented in `cypress/support/index.d.ts`.

## GitHub Secrets
All secrets are stored in the `.github/secret.json.gpg` file.  
In order to modify any secret, you need a master password (SECRETS_PASSPHRASE variable on GitHub) to decipher the file.  
Ask one of the code owners for it.

Decrypt the secret file
```bash
gpg --output secrets/secret.json --decrypt secrets/secret.json.gpg
```
Encrypt the secret file
```bash
gpg --symmetric secrets/secret.json
```
Only commit encrypted gpg file!
