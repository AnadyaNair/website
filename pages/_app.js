import "../styles/globals.css";
import localFont from "@next/font/local";
const myFont = localFont({ src: "CircularStd-Medium.otf" });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
