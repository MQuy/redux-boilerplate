# Redux Boilerplate

### Getting Started

```bash
$ git clone https://github.com/MQuy/redux-boilerplate
$ cd redux-boilerplater
$ npm install
$ npm run client        # launch client
$ npm run server        # launch fake server
```

### Command

| `<script>` | Description |
| ------------------ | ----------- |
| `npm run client` | Serves your app at `localhost:3005`. HMR will be enabled in development. |
| `npm run server` | Serves your endpoint at `localhost:3000`. |
| `npm run clean` | Clean the old assets. |
| `npm run build` | Compile the application to disk. |
| `npm run pack` | Using electron to build cross platform app. |
| `npm run test` | Run test. |

### Application Structure

```
.
├── cli                      # Build/Start scripts
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
├── publish                  # Files after compile, ready for production
├── tests                    # Test files
```
