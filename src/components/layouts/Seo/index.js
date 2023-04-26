import Head from 'next/head';
import PropTypes from 'prop-types';

const Seo = ({children, metaDescription, title}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    {children}
  </>
);

Seo.propTypes = {
  children: PropTypes.element,
  metaDescription: PropTypes.string,
  title: PropTypes.string,
};

export default Seo;
