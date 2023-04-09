import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";
import Sidebar from "../header/Sidebar";

export default function Layoutallproducts({children,title}) {

  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
      <Header />
      <div className="flex max-w-6xl mx-auto space-x-6">
      <Sidebar />
        <main className="w-full h-auto">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
