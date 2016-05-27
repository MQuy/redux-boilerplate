# Redux Boilerplate

### Getting Started

```bash
$ git clone https://github.com/MQuy/redux-boilerplater
$ cd redux-boilerplater
$ npm install
$ node client.js        # launch client
$ node server.js        # launch fake server
```

### Command

| `<script>` | Description |
| ------------------ | ----------- |
| `node app.js` | Serves your app at `localhost:3005`. HMR will be enabled in development. |
| `node server.js` | Serves your endpoint at `localhost:3000`. |
| `npm run clean` | Clean the old assets. |
| `npm run build` | Compile the application to disk. |

### Application Structure

```
.
├── bin                      # Build/Start scripts
├── src                      # Application source code
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Reusable Presentational Components
│   ├── layouts              # Components that dictate major page structure
│   ├── modules              # Modules that provide tool for app
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── routes               # Main route definitions and async split points
│       ├── index.js         # Bootstrap main application routes with store
│       └── Home             # Fractal route
│           ├── index.js     # Route definitions and async split points
│           ├── Components   # Component that is used in this route
│           └── routes **    # Fractal sub-routes (** optional)
├── webpack                  # Webpack configuration
```
