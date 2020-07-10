# Structure

> **workflow** - is a common term for user story / business workflow

- **utils** - basic reusable constants, functions and services without knowledge of a workflow
  > testing by screenshots
- **blocks** - basic reusable view components (ui-kit) without knowledge of a workflow
  > testing by unit tests
  
  > _tip: use storybook_
- **features** - main features that serving a workflow by combining utils or / and blocks
  > testing by integrational
  
  > _tip: separate a workflow of a UI feature to **model.ext**_
- **pages** - features bindings (entry points and main layouts) to web view
  > testing by e2e
  
  > _tip: without `next.js` may be part of widgets_

**Utils**, **blocks** and **features** follows a file-structure pattern:

- **index.ext** - reexports
- **entityN.ext** - main entity code
- ?**entityN** - optional folder with additional components
  - **index.ext** - reexports
  - **entityNM.ext** - main subentity code
  - ?**entityNM** - another folder... and so on like a **fractal**

**Pages** follows [next.js guide](https://nextjs.org/docs/basic-features/pages)
