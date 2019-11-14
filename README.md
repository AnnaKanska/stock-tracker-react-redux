# Stock Tracker

This application allows the user to search for a specific stock and information such as price, key stats, charts, latest news, company overview and top peers will be displayed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**What things you need to install the software and how to install them:**

- Follow the instructions and download the latest version of **node** and **npm** from:

  https://nodejs.org/en/download

Check you have downloading them by running the following commands:

```
node -v
npm -v
```

- Download and install the latest version of **Git** by following the instructions from:

  https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing

A step by step series of examples that tell you how to install and run the application.

Clone the repository from GitHub by opening Git Bash and running:

```
git clone https://github.com/danielabbasi/stock-tracker-react-redux.git
```

Change into the correct directory of the project:

```
cd stock-tracker
```

Install all the project prerequisites and dependancies:

```
npm install
```

Get the server up and running:

```
npm run dev
```

Start the client application:

```
npm start
```

The application should now be up and running. Navigate to <localhost:3000> and search for a stock such as 'AAPL'. You should see the website be populated with the price, key stats, chart, latest news, company overview and top peers relating to the Apple stock.

## Running the tests

To run the automated tests of this application, use the following command followed by pressing 'a':

```
npm test
```

## Built With

- [React](https://reactjs.org/) - The web library used
- [Redux](https://redux.js.org/basics/usage-with-react) - Predictable state container for JavaScript applications
- [Node.js](https://nodejs.org/en/about/) - Open source server environment
- [Express](https://expressjs.com/) - Web framework for Node.js
- [socket-io](https://socket.io/) - library for realtime web applications
- [TypeScript](https://www.typescriptlang.org/) - Strict syntactical superset of JavaScript

## Authors

- **Daniel Abbasi** - [GitHub](https://github.com/danielabbasi/)

* **Anna Kanska** - [GitHub](https://github.com/AnnaKanska)
