import '@css/index.scss';
import { Fira_Mono } from 'next/font/google'

const firaMono = Fira_Mono({ weight: ['400', '500', '700'], subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
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

export default MyApp
