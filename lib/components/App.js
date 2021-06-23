import React from 'react';

import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from '../components/ArticleList';

var api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authors: api.getAuthors(),
      articles: api.getArticles(),
    };
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
