# React + TypeScript + Vite

This project was generated from `npm create vite@latest` using settings that get React working in Vite with TypeScript and some ESLint rules.

## Our stack

As well as the typical project generated from the template, several packages have been setup within the project to mimic our typical stack.

- React Router (v5)
- Redux Toolkit (for RTK Query). Utility types and files added from project templates.
- Vitest
- Prettier
- Sass. Module per component is used for the majority of our styling. There's some root styling/reset in `index.css` and button styles have been `unset`

## Mock Service Worker

Rather than require a BE server, all API requests are intercepted by MSW and the same handlers are used in the tests. See `/mocks/handlers.ts` if interested.

## Description

This is a simple app without authentication that displays a users mortgage status and a list of mortgage products they have available. It represents a typical feature within an app we whitelabel for a mortgage lender.

`tickets/` contains the description for your task in this test.
