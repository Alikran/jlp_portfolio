//connect sanity client with react application
import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId:'1htj9ux1',
  dataset:'production',
  useCdn:false,
  token:'skXDKKqq0GeXqzcmP0DKXN3ZIiKvrWAEWCBmySTmFX4laSvPXAqvZlj7oG3JfBgCRLDbMiDbV2hekKaMdVMT4ikyf5GORrEYIVMIegXcK5sX1x2yfT0ZFrjk1rkv9xE4sbRxL6zf320VvcdDld51iZRlMFBnYGyMvwTaPYoHk0tX41rWpNqD',
  apiVersion:'2021-10-21'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);