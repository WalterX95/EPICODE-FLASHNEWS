import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../types/Article';

const ArticleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
            const data = await response.json();
            setArticle(data);
            setLoading(false);
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (!article) {
        return <div>Articolo non trovato</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.image_url} alt={article.title} />
            <p>{article.summary}</p>
            <p>Pubblicato il : {new Date(article.published_at).toLocaleDateString()}</p>
            <p>Font: {article.source}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Leggi tutto l'articolo</a>
        </div>
    );
};

export default ArticleDetail;