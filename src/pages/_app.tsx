import '@css/index.scss';
import type { AppProps } from 'next/app'
import { Fira_Mono } from 'next/font/google'

const firaMono = Fira_Mono({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable react/no-unknown-property */}
      <style jsx global>{`
				html {
				font-family: ${firaMono.style.fontFamily};
				}
			`}</style>
      <Component {...pageProps} />
    </>
  )
}
