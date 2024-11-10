import algoliasearch from 'algoliasearch/lite';

// Replace with your Algolia credentials
export const searchClient = algoliasearch(
  'YOUR_APP_ID',
  'YOUR_SEARCH_API_KEY'
);