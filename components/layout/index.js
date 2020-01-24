import { useEffect } from 'react';
import Fonts from '../../fonts';
import Sidebar from '../../pages/sidebar';

import '../../asset/sass/app.scss';

const Index = ({ dataArticles, children }) => {

  useEffect(() => {
    Fonts();
  }, []);

  return(
    <div>
      <Sidebar />

      <div className='container__main' >
        {children}
      </div>
    </div>
  );
};

export default Index;