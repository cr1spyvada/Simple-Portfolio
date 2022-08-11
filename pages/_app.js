import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import SplashScreen from '../components/SplashScreen';
import React from 'react';
config.autoAddCss = false;

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
