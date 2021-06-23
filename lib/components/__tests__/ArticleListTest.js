import React from 'react';
import renderer from 'react-test-renderer';

import ArticleList from '../ArticleList';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a',
        authorId: 'au1',
      },
      b: {
        id: 'b',
        authorId: 'au2',
      },
    },
    authors: {
      au1: { firstName: 'a1', lastName: 'a11', website: 'www.dot.com' },
      au2: { firstName: 'a2', lastName: 'a21', website: 'www.dot2.com' },
    },
  };
  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    expect(tree.children.length).toBe(2);

    // jest snapshot testing
    expect(tree).toMatchSnapshot();
  });
});
