import '../styles/globals.css';
import SplashScreen from '../components/sections/SplashScreen';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

export default MyApp;
