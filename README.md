# Next.js Theme Nova

This theme is built using Next.js and TailwindCSS. All the social media information is stored in `/constants/config.ts`. You will need to add the social media links in this file and it will automatically show on the website.

## Getting Started

To use this theme, follow these steps:

- Clone the repository to your local machine.
- Install the dependencies by running npm install in your terminal.
- Run the development server using the command npm run dev.

This will start a local development server at `http://localhost:3000`. You can open this URL in your browser to see the website.

## Configuring Social Media

All the social media information is stored in `/constants/config.ts`. Here, you can add your social media links as shown in the example below:

```typescript
export const config = {
  social: {
    twitter: "https://twitter.com/your-twitter-handle",
    instagram: "https://www.instagram.com/your-instagram-handle",
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
  },
};
```

Once you have added your social media links, they will automatically show on the website.

Configuring file also contains description, title, and author information. You can change these values to suit your needs.

## Customizing the Theme

This theme is built using TailwindCSS, which makes it easy to customize the theme's styles. You can customize the theme by editing the CSS files in the `/styles` directory.

## Deploying the Theme

To deploy this theme to production, you can build the project using the command npm run build and then deploy the generated files to your hosting provider.

## Conclusion

This theme is easy to use and customize. If you have any questions or issues, please open a new issue on the GitHub repository. Happy coding!
