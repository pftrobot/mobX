import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { StyleSheetManager } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<StyleSheetManager disableVendorPrefixes>
			<Component {...pageProps} />
		</StyleSheetManager>
	)
}
