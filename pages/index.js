import Head from "next/head";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mahad's Notes</title>
        <meta
          name="keywords"
          content=" Frontend development, JavaScript, Mahad Mohamood, Coding blog, Coding tutorials, Data science,"
        />
        <meta
          name="description"
          content="Notes on various topics regarding software development"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Landing />
    </div>
  );
}
