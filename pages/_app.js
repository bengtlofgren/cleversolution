import '../styles/globals.css'

const passport = require('./passport');
const express = require('express');
const app = express();


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

app.use(passport.initialize());
app.use(passport.session());
