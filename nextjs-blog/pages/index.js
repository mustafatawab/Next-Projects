import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <b>Introduction</b>
        <p>
          Hi, I am Mustafa Tawab. I am a professional web developer. I use latest techonologies to build scalable web apps for clients. 
          {/* <a href="https://nextjs.org/learn">our Next.js tutorial</a> */}
        </p>
      </section>
    </Layout>
  );
}