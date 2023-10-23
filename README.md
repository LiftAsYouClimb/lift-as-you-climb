# Lift As You Climb

**Empower your career journey with Lift As You Climb. A supportive community for women in tech and career enthusiasts to share encouragement, advice, and valuable resources.**

## Table of Contents

- [Key Features (MVP)](#key-features-mvp)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)

## Key Features (MVP)

### Purpose

The purpose of the "Lift As You Climb" app is to create a supportive community where Women Who Code can empower one another by providing and receiving advice, encouragement, and valuable resources to boost their career growth. The app aims to foster a positive and encouraging environment for professional development.

### Target Audiences

- Women Who Code: The primary target audience is women in the tech industry or those aspiring to join it.
- Career Enthusiasts: Anyone interested in career growth, mentorship, or offering support.
- The current WWCode technical tracks available are: Front End, Mobile, Python, Blockchain, Cloud, and Data Science.

### Core Functionality

The primary functionality is to request encouragement and offer encouragement within a supportive community.

### User Registration and Profiles

- Users can create accounts with e-mail using Passage by 1Password for secure authentication.

### Encouragement Requests

- Users can post requests for encouragement, advice, or resources related to their career goals.

### Offering Encouragement

- Users can view the requests from others and provide responses with words of encouragement, advice, or share valuable resources.
- Responses can be made anonymously or with user identification, based on the user's preference.

### Community Feed

- A feed that displays the most recent requests and responses.
- Users can comment on requests and responses to indicate support.

## Installation

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- [SQLite](https://www.sqlite.org/) (for development purposes)

### Clone the Repository

```bash
git clone https://github.com/your-username/lift-as-you-climb.git
cd lift-as-you-climb
```

### Server Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install server dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your environment variables by creating a `.env` file and populating it with your own values. Make sure to include the required Passage by 1Password credentials.

4. Run the server:

```bash
node server.mjs
```

### Client Setup

1. Navigate to the client directory:

```bash
cd src
```

2. Install client dependencies:

```bash
npm install
# or
yarn install
```

3. Start the client application:

```bash
npm start
# or
yarn start
```

## Usage

- Visit `http://localhost:3000` in your web browser to access the Lift As You Climb app.
- Create an account, fill in your profile, and start engaging with the community.
- Post encouragement requests, offer your support to others, and interact with the community feed.

## Endpoints

### API Endpoints (Server)

- **GET `/api/requests`**: Get a list of encouragement requests.
- **POST `/api/requests`**: Create a new encouragement request.
- **GET `/api/responses`**: Get a list of responses to encouragement requests.
- **POST `/api/responses`**: Create a new response to an encouragement request.

### Client Routes

- **`/`**: Home page displaying the community feed.
- **`/profile`**: User profile page for editing your profile details.
- **`/requests`**: Explore and post encouragement requests.
- **`/responses`**: View and respond to encouragement requests.

## Authentication

Lift As You Climb utilizes **Passage by 1Password** for authentication. To set up Passage for the server, configure your Passage credentials in the server's `.env` file. For the client, make sure to set up Passage in your React app to handle user authentication.

## Contributing

Lift As You Climb is an open-source project, and we welcome contributions from the community. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch to work on a feature or bug fix.
4. Implement your changes and commit them to your branch.
5. Push your changes to your fork on GitHub.
6. Create a pull request from your branch to the main repository's `main` branch.
7. We will review your contribution and merge it if it aligns with the project's goals.

Happy coding and contributing!
````
git 
