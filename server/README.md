# Server

Here user can create articles and other content

# API

| action        | request_method | request_url          |
| ------------- |:--------------:| --------------------:|
| articles list | GET            | ${host}/articles     |
| one article   | GET            | ${host}/articles/:id |
| authors list  | GET            | ${host}/authors      |
| tags list     | GET            | ${host}/tags         |

## CLI Commands

```bash
# install dependencies
npm install
# serve with auto reload at http://localhost:1337
npm run develop
# build for production with minification
npm run build
# serve without auto reload at http://localhost:1337
npm run start
# list of the strapi CLI commands
npm run strapi
```
