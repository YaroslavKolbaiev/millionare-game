# Who wants to be a millionare

[VISIT_DEMO_LINK](https://millionare-game-zeta.vercel.app/)

## For local development without Docker

1. Open a terminal inside the current project.
2. Run bellow command:

```bash
npm run dev
```

3. Open your browser and go to http://localhost:5173/

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
