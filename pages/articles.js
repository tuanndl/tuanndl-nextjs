import { CommonHelper } from '../utils';
import Link from 'next/link';

const Article = ({ title, createdAt, category, link }) => {
  return (
    <div className='Article__item' >
      <Link href="/post/[id]" as={`/post/${link}`}><p className='Article__item--title' aria-label='open article' >{title}</p></Link>
      <span className='Article__item--time'>{CommonHelper.dateString(createdAt)}</span>
      <span className='Article__item--tag'>{category && category.name}</span>
    </div>
  );
};

const Articles = ({dataArticles}) => {
  return dataArticles.map( item => {
    return <Article
      key={item._id}
      title={item.title}
      createdAt={item.createdAt}
      content={item.content}
      link={item.link}
      category={item.category}
    />
  });
};

export default Articles;