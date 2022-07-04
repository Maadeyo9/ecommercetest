import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//Making the sanity client so we can export and use it anywhere in the project. Notice the use of a token as an env file.

export const client = sanityClient({
    projectId: '2p2sl01d',
    dataset: 'production',
    apiVersion: '2022-06-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);