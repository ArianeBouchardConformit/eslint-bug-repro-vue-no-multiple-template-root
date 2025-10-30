# eslint-bug-repro-vue-no-multiple-template-root

Minimal Vue 2 application to reproduce an eslint-plugin-vue bug.

## Tech Stack
- Vue 2.7.16
- Vue Router 3.6.5
- ESLint 8.57.1
- eslint-plugin-vue 10.5.1

## Project Structure
- `src/App.vue` - Base application component
- `src/components/RouterLinkCfm.vue` - Single component for bug reproduction
- `.eslintrc.cjs` - Empty ESLint configuration

## Setup
```bash
npm install
```

## Development
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Lint
```bash
npm run lint
```