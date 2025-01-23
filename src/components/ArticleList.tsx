import React, { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import ArticleItem from './ArticleItem';
import { Spinner } from 'react-bootstrap';

const ArticleList: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    const fetchArticles = async () => {
        try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
        if(response.ok) {
             const data = await response.json();
             setArticles(data.results);
             setLoading(false);
         } 
        else {
            console.log(Error);
        }
        }
        catch(error) {
            throw new Error("Errore dati");
        }
      
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    if (loading) {
        return <Spinner variant='border'></Spinner>;
    }

    return (
        <div>
            <h1>Spaceflight News</h1>
            <div>
                {articles.map(article => (
                    <ArticleItem key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

export default ArticleList;