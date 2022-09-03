# Forex Tracker

## Description

A simple React web application that displays the latest and historical currency exchange rate using currencylayer API.

### Tech Stack/Libraries Used

- React
- Bootstrap
- Axios

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Wireframe

![wireframe](wireframe.jpg)

From the wireframe above, I created the following component tree:

![component tree](component-tree.jpg)

## Setting up the project

To use the app on your local environment:

1. Clone this repo

```
git clone https://github.com/orlinromy/forex.git
```

2. Move into the `forex` folder

```
cd forex
```

3. Install npm packages

```
npm i
```

4. Run the app

```
npm start
```

## Development Process

1. Draw out the wireframe and determine the components
2. Create component tree
3. Read through currencylayer API and try calling the API using cURL, Postman, and fetch API
   When trying to call the API using fetch API, it returns the following
   ```
   {
       "success":false,
       "error":{
           "code":105,
           "info":"Access Restricted - Your current Subscription Plan does not support this API Function."
       }
   }
   ```
   This is because the response URL in the `XMLHttpRequest` object changes `http://` to `https://`. To solve this, set the proxy in `package.json` to `http://api.currencylayer.com`, so that the browser sends the request as `http://localhost:3000`, and the proxy sends it forward as `http://api.currencylayer.com` (Reference: (LogRocket - Why you should use a proxy server with Create React App)[https://blog.logrocket.com/why-you-should-use-proxy-server-create-react-app/])
4. Create the components based on the component tree

## Further Development

- Let the user to choose the currency they want to cover
  This can be done by setting a new state to track the currency that the user input and specify the currency when calling the API.
