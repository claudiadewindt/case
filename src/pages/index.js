import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import Cards from "../components/cards/Cards";
import ClientList from "../components/client-list/ClientList";
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          lang="en"
        ></meta>
        <link rel="icon" type="image/svg" href="/favicon.svg"></link>
        <title>DEPT®</title>
      </Head>
      <Header />
      <Hero />
      <Banner />
      <Cards />
      <ClientList />
      <Form />
      <Footer />
    </div>
  );
}
