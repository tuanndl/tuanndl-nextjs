import fetch from 'isomorphic-unfetch';
import Articles from './articles';
import Layout from '../components/layout';

const Index = ({ dataArticles }) => {
  return(
    <Layout>
      <Articles
        dataArticles={dataArticles}
      />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://gateway.tuanndl.com/api/v1/article?limit=20&page=1');
  const data = await res.json();
  return {
    dataArticles: data.result.data
  };
};

export default Index;