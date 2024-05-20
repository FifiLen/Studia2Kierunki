import { UserPreferencesProvider } from '../components/UserPreferencesContext';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserPreferencesProvider>
      <Component {...pageProps} />
    </UserPreferencesProvider>
  );
}

export default MyApp;
