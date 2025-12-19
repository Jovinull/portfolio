/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',

  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
};
