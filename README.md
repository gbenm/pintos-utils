# Pintos Utils Docs

> This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### How contribute to this website
look into `docs/` folder and search for the docs you
want to edit, for example `docs/pintos-docker` is the
documentation for "Pintos Ballenizado".

if you want to add a new **pintos util** you must
create a new folder into `docs/` and create a new file `_info.json`
inside of it:
```json
{
  "order": 1,
  "title": "New Pintos Util",
  "description": "..."
}
```
- `order` defines the position in the main page, pages with lower order numbers are shown first


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
