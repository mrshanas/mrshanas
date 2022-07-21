//@ts-nocheck
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ContactForm } from "../components";

const Contact: NextPage = ({ envVars }: any) => {
  return (
    <>
      <Head>
        <title>Contact mrshanas</title>
      </Head>
      <ContactForm envVars={envVars} />
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const envVars = {
    serviceId: process.env.EMAIL_JS_SERVICE_ID,
    templateId: process.env.EMAIL_JS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
  };


  return {
    props: {
      envVars,
    },
  };
};
