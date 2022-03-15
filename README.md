# OpenForge Advanced Monorepo

This is an example repository that contains an Angular and Vue project. In addition, each project contains a shared Stencil component.

It was generated using a combination of [Nx](https://nx.dev), Ionic [Thanks to Eric Jeker's Post on Ionic + Nrwl](https://medium.com/@eric.jeker/how-to-integrate-ionic-in-nrwl-nx-3493fcb7e85e), [StyleLint](https://stylelint.io/), and [ESLint](https://eslint.org/).

# Instructions

1. Clone the repository using 'Use template' (and don't forget to give us a Star / Follow on Github, please!)
2. npm install
3. npx nx run startup-glossary-angular:serve AND/OR npx nx run startup-glossary-vue:serve

You should now load your app(s)!

Note: You can re-name the NX project scope ... to do this search + replace 'company-name' with your company name. This is the NX project scope that allows you to import libraries using @company-name.

## Generating a Project - Additional Step

After any project is created by NX, we MUST add StyleLint

nx g nx-stylelint:configuration --project <projectName>

## Generate an application

The normal NX command to generate an app is `nx g @nrwl/react:app my-app` ; however, there are some special steps to generate an Ionic App. These are defined well in [Eric Jeker's post here](https://medium.com/@eric.jeker/how-to-integrate-ionic-in-nrwl-nx-3493fcb7e85e)

When using Nx, you can create multiple applications and libraries in the same workspace.

# NX Original Instructions

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@openforge-ionic-monorepo-example/mylib`.

## Development server

Run `npx nx run example-app:serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
