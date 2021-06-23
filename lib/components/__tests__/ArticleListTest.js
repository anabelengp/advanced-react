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
    store: { lookupAuthor: jest.fn(() => ({})) },
  };
  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    expect(tree.children.length).toBe(2);

    // jest snapshot testing
    expect(tree).toMatchSnapshot();
  });
});
