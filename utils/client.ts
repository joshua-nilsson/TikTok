import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-07-20',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
