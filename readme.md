# To run frontend locally:

### Developement:

```sh
cd frontend
npm i
npm run dev
```

### Production:

```sh
cd frontend
npm i
npm run build
npm run preview
```

# To run backend locally:

1. You need to have mongoDB installed on your local machine
2. For development server use commands:

```sh
cd backend
cp .env.example .env # change database uri if needed
npm i
npm run dev
```

3. For production build

```sh
cd backend
cp .env.example .env # change database uri if needed
npm i
npm run build
npm run start
```

# Backend with frontend configuration:

Change `VITE_APP_BACKEND_URL=local` to `VITE_APP_BACKEND_URL=http://localhost:5555`
