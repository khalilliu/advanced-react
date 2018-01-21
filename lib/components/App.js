import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
//import {data} from '../testData';

import ArticleList from './ArticleList';

//const api = new DataApi(data);

class App extends React.Component{
  state={
    articles:{},
    authors:{},
  }

  async componentDidMount(){
    const rawData = await axios.get('/data');
    const api =  new DataApi(rawData);
    this.setState(()=>({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }))
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  }

  render(){
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
 }


 export default App;
