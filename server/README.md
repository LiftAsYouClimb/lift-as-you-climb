# Lift As You Climb Server

The server directory hosts the Node.js server code powered by Express.js, a minimalist web application framework for Node.js. This framework simplifies the process of building web applications and APIs by offering a range of powerful and flexible features.

## Description

The heart of our application resides in the `app` object. This object represents our web server and provides a comprehensive suite of methods and properties. It facilitates the configuration of routes, handling of HTTP requests, and definition of middleware.

### Proxy Configuration

Our React development server is configured to proxy requests prefixed with `/api` to our Node.js server, which runs on port 4000.

## Getting Started

To run both React and Node:

1. In separate terminal windows, navigate to the root directory of the React app (`lift-as-you-climb`) and the directory of the Node.js server (`lift-as-you-climb/server`).
2. Start the development server for the React app:

   ```bash
   npm start
   ```

3. Start the Node.js server:

   ```bash
   node server.mjs
   ```

The React development server typically runs on port 3000, while our Node.js server operates on port 4000, as configured in the code.

## Troubleshooting

### Passage App ID Requirement

If you encounter the error message:

```
PassageError: A Passage appID is required. Please include {appID: YOUR_APP_ID}.
```

It's likely that you need to set the environment variable in the command line using:

```bash
export PASSAGE_APP_ID=YOUR_APP_ID
```

Replace `YOUR_APP_ID` with your specific Passage App ID.
