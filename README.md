# Webpack, React, TypeScript, Styled Components, Storybook boilerplate

- javascript boilerplate with prettier, eslint, webpack, babael

### Start

```
1. package install
yarn

2. run dev server
yarn dev

3. build
yarn build

4. run storybook
yarn storybook
```

## ๐ description

Webpack์ ์ด์ฉํด์ React + Typescript + Styled Components, ๊ทธ๋ฆฌ๊ณ  Storybook ์ธํํ๋ ๋ฐฉ๋ฒ์ ์ ๋ฆฌํ ๊ธ์๋๋ค.

์์ ์ธ๊ธํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค์ด ๊ถ๊ธํ์๋ค๋ฉด ์๋ ๋งํฌ๋ฅผ ์ฐธ๊ณ ํด๋ณด์๋ฉด ์ข์๊ฑฐ ๊ฐ์ต๋๋ค!

- [Webpack](https://webpack.js.org/)
- [React](https://ko.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESlint](https://eslint.org/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)

<details>
<summary> <b> ๐ React + TypeScript ๊ธฐ๋ณธ ์ค์  </b>  </summary>
<div markdown="1">

### 1. ๋๋ ํ ๋ฆฌ ์์ฑ

- ๋๋ ํ ๋ฆฌ ์์ฑ

```shell
mkdir react-ts-webpack
```

- ๋๋ ํ ๋ฆฌ ์ง์

```shell
cd react-ts-webpack
```

- yarn init

```shell
yarn init -y
```

### 2. React ์ค์น

```shell
yarn add react react-dom
```

### 3. TypeScript, Definitely Typed ์ค์น

```shell
yarn add -D typescript @types/react @types/react-dom
```

### 4. TypeScript config ์์ฑ

- tsc init

```shell
npx tsc --init
```

- tsconfig.json ํ์ผ ์์ 

```
{
  "compilerOptions": {
    ...
  
    "jsx": "react-jsx", /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */

    ...
  }
}
```

- ์ฐธ๊ณ ์๋ฃ
  - [Introducing the New JSX Transform / React ๊ณต์๋ฌธ์](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

### 5. Webpack ์ค์น

```shell
yarn add -D webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin
```

### 6. Webpack config ์์ฑ ๋ฐ script ์ถ๊ฐ

- webpack.config.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
    ],
  };
};
```

- package.json

```json
"scripts": {
  "prod": "NODE_ENV=production webpack serve",
  "dev": "NODE_ENV=development webpack serve",
  "build": "NODE_ENV=production webpack",
}
```

</div>
</details>
<br>

<details>
<summary> <b> ๐ ESlint, Prettier ์ค์  </b>  </summary>
<div markdown="1">

### 1. ESlint, Prettier + Plugin ์ค์น

- ESlint, Prettier ์ค์น

```shell
yarn add -D prettier eslint
```

- ESlint config, plugin ์ค์น

```shell
yarn add -D eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### 2. ESlint, Prettier config ํ์ผ ์์ฑ

- .prettierrc.js
  - [Prettier options](https://prettier.io/docs/en/options.html#docsNav)

```js
module.exports = {
  /* ์ํ๋ ์ต์์ ์ ์ผ์๋ฉด ๋ฉ๋๋ค. */
};
```

- .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["*.js"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks", "import", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
```

</div>
</details>
<br>

<details>
<summary> <b> ๐จ Styled Components + Storybook ์ค์  </b>  </summary>
<div markdown="1">

### 1. Styled Components ์ค์น

- styled components ์ค์น

```shell
yarn add styled-components
```

- Definitely Typed ์ค์น

```shell
yarn add -D @types/styled-components
```

### 2. Storybook init

```shell
npx sb init
```

</div>
</details>
<br>

<details>
<summary> <b> ๐โโ๏ธ ๊ธฐ๋ณธ ํ์ผ ์์ฑ </b>  </summary>
<div markdown="1">

### ํ์ผ ์์ฑ

- public/index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react typescript boilerplate</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- src/Button/Button.styles.ts

```ts
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default { Button };
```

- src/Button/Button.tsx

```tsx
import { ButtonHTMLAttributes } from "react";
import Styled from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => (
  <Styled.Button>{text}</Styled.Button>
);

export default Button;
```

- src/Button/Button.stories.tsx

```tsx
import React from "react";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Button Test",
};
```

- src/App.tsx

```tsx
import Button from "./Button/Button";

const App = (): JSX.Element => <Button text="App" />;

export default App;
```

- src/index.tsx

```tsx
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
```

</div>
</details>
<br>
