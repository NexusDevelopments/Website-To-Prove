import { localProducts } from '../data/products';

const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const token = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const endpoint = domain
  ? `https://${domain}/api/2024-10/graphql.json`
  : null;

const productsQuery = `
  query Products {
    products(first: 24) {
      edges {
        node {
          id
          handle
          title
          description
          featuredImage {
            url
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

export async function getProducts() {
  if (!endpoint || !token) {
    return localProducts;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    body: JSON.stringify({ query: productsQuery })
  });

  if (!response.ok) {
    return localProducts;
  }

  const json = await response.json();
  const edges = json?.data?.products?.edges ?? [];
  if (!edges.length) {
    return localProducts;
  }

  return edges.map(({ node }) => ({
    id: node.handle || node.id,
    title: node.title,
    subtitle: 'Shopify Product',
    description: node.description || 'Product description coming soon.',
    price: Number(node?.priceRange?.minVariantPrice?.amount || 0),
    image: node?.featuredImage?.url || localProducts[0].image,
    video: localProducts[0].video,
    badge: 'Live'
  }));
}

export function getCheckoutUrl() {
  if (!domain) {
    return '/contact';
  }
  return `https://${domain}/cart`;
}
