## Starter with Tailwind CSS and Custom font

Plugins

- Typography for max prose blog content
- Forms
- Aspect ratio for images

## Resources

https://omkarkulkarni.vercel.app/snippets/reusable-button-component
https://omkarkulkarni.vercel.app/snippets/absolute-imports

## Text component

Mewtru
https://www.youtube.com/watch?v=b1NEj8HG1yU

## Absolute alias path to import components
in tsconfig.json on 
"compilerOptions": {
  "paths": {
			"@ui/*": ["./src/components/ui/*"]
		}
}

## Storybook

https://storybook.js.org/addons/storybook-addon-next

Update yous tsconfig file for alias paths
```
		"baseUrl": ".",
		"paths": {
			"@/components/*": ["components/*"]
		}
```

https://egghead.io/lessons/next-js-add-controls-to-next-js-page-props-with-story-args

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
