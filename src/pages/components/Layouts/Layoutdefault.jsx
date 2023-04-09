import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";

export default function Layoutdefault({children,title}) {

  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
      <Header />
        <main>{children}</main>
      <Footer />
    </div>
  )
}
