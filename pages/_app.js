import '../styles/globals.css'

const passport = require('./passport');
app.use(passport.initialize());
app.use(passport.session());

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
