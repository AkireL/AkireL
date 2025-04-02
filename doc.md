# Deploy to github page

1. Added in `package.json`

```json

{
...,
  "homepage": "https://akirel.github.io/AkireL",
}
```

2. Added "base" value to `vite.config.js`

```js
export default defineConfig({
  base: '/AkireL/',
  ...,
}
```

3. Create action in the project.

```bash
/.github/workflows/deploy.yml
```

4. Added this content to action.

```yml
name: Deploy app

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Download Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Build & Deploy
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

> **Important:** Ensure that the branch is correctly set to `gh-pages` in the GitHub Pages settings. Incorrect branch selection may prevent the deployment from working as expected.

5. Create commit and push.

6. Go to github's repository and click on `"settings>pages"`

- **source ->** `Deploy from branch`
- **branch ->** select `"gh-pages"` and `"root"` then `"save"`
