The server directory contains Node.js server code with Express.js.

Express is a minimalist web application framework for Node.js that simplifies the process of building web applications and APIs by providing a set of powerful and flexible features.

The `app` object represents our web server and provides a set of methods and properties to configure routes, handle HTTP requests, and define middleware

The proxy configuration tells the React development server to proxy requests with the `/api` prefix to our Node.js server running on port 4000.

To start both React and Node:

- In separate terminals, navigate to React app's root directory (`lift-as-you-climb`) and Node.js server directory (`lift-as-you-climb/server`)
- In the React app directory, start the development server: `npm start`
- In the Node.js server directory, start the server: `node server.js`

The React development server typically runs on port 3000, and our Node.js server runs on port 4000, as configured in the code.
