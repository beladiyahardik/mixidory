import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mixidory</title>
        <meta
          name='description'
          content='Welcome to the worlds creative diary.'
        />
      </Head>

      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
