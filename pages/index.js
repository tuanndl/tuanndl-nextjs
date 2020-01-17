import { useEffect } from 'react';
import Sidebar from './sidebar';
import Articles from './articles';
import Fonts from '../fonts';
import fetch from 'isomorphic-unfetch';

import '../asset/sass/app.scss';

const Index = ({ dataArticles }) => {

  useEffect(() => {
    Fonts();
  });

  return(
    <div>
      <Sidebar />
      <div className='container__main' >
        <Articles
          dataArticles={dataArticles}
        />
      </div>
    </div>
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