module.exports = {
  '**/package.json': 'npx sort-package-json',
  '**/*.{ts,tsx}': 'eslint --fix',
  '*': 'prettier --ignore-unknown --write',
  '.eslint*': 'eslint . --cache',
}
