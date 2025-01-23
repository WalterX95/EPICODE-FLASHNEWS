import React from 'react';
import { Article } from '../types/Article';
import { Link } from 'react-router-dom';

interface ArticleItemProps {
    article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.image_url} alt={article.title} />
            <p>{article.summary}</p>
            <Link to={`/article/${article.id}`}>Leggi Articoli</Link>
        </div>
    );
};

export default ArticleItem;