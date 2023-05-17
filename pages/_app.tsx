import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FiltersProvider } from '../src/context/FiltersProvider'

function MyApp({ Component, pageProps }: AppProps) {
	return <FiltersProvider>
		<Component {...pageProps} />
	</FiltersProvider>

}

export default MyApp
