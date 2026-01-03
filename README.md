# carlosdamasio.github.io

Personal portfolio website: [carlosdamasio.com](https://carlosdamasio.com)

---

## Architecture

Built with GitHub Pages (free, public repository)

![arch-diagram](https://carlosdamasio-github-io.s3.us-west-2.amazonaws.com/images/carlosdamasio_arch.svg)

## Tech Stack

| Layer               | Technology                    |
| ------------------- | ----------------------------- |
| **Framework**       | React 18.2 + React Router 6   |
| **UI Library**      | Primer React 35.27            |
| **CSS**             | Bootstrap 5.3 + CSS Variables |
| **Hosting**         | GitHub Pages                  |
| **Domain**          | Route53                       |
| **CDN**             | AWS S3 (images)               |
| **Package Manager** | Yarn 4.3                      |

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn run build

# Deploy to GitHub Pages
yarn run deploy
```

Visit http://localhost:3000 to see the website.
