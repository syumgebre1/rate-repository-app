import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 1,
        pageInfo: {
          hasNextPage: true,
          endCursor: 'WyJ6ZWl0Lm5leHQuanMiLDE1ODk1NDM5OTc1NTdd',
          startCursor: 'WyJ6ZWl0Lm5leHQuanMiLDE1ODk1NDM5OTc1NTdd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1589,
              stargazersCount: 21553,
              ratingAverage: 88,
              reviewCount: 4,
              ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNzk3Mjld',
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);

      expect(screen.getByText('jaredpalmer/formik')).toBeDefined();
      expect(screen.getByText('Build forms in React, without the tears')).toBeDefined();
      expect(screen.getByText('TypeScript')).toBeDefined();
      expect(screen.getByText('21.6k')).toBeDefined();
      expect(screen.getByText('1.6k')).toBeDefined();
      expect(screen.getByText('4')).toBeDefined();
      expect(screen.getByText('88')).toBeDefined();
    });
  });
});
