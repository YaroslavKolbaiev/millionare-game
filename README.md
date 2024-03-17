# Who wants to be a millionare

[VISIT_DEMO_LINK](https://nextjs.org/docs)

## For local development without Docker

The current project is built using Vite. Vite requires Node.js version 18+ 20+
Make sure to use correct Node.js version before starting local development.

## For local development with Docker

1. Make sure Docker is installed on your machine and running.
2. Open a terminal inside the current project.
3. Build Docker image by running bellow command:

```bash
docker build -t your-image-name .
```

4. Start the container from created image by running bellow command:

```bash
docker run -p 5173:5173 your-image-name
```

5. Open your browser and go to http://localhost:5173/
