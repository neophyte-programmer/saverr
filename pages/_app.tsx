import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initialState } from '../context/initialState'
import reducer from '../context/reducer'
import { StateProvider } from '../context/StateProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<Component {...pageProps} />
		</StateProvider>
	)
}
