import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleCardList from '@/components/ArticleCardList/ArticleCardList';
import { ArticleCardListProps } from '@/types/index';
import { mockArticleData } from '@/mock';

describe('ArticleCardList', () => {
  const mockData: ArticleCardListProps = {listItems: mockArticleData}

  it('renders a list of articles', () => {
    render(<ArticleCardList listItems={mockData.listItems} />);

    // Check if the titles of the articles are in the document
    mockData.listItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
