# My Reading Journal

A single-page application built for keeping track of your reading. View your existing journal entries on the homepage, search for books, save books for later, and write new journal entries using OpenLibrary API data or by adding your own details.

## Setup Instructions

1. Clone the repository:

```
git clone git@github.com:ekanarek/reading-journal.git
```

2. Install dependencies with NPM:

```
npm install
```

3. Start the server:

```
json-server --watch db.json --port 3001
```

4. Start the application:

```
npm start
```

4. The page will run at `localhost:3000`.

## Dependencies

- React Router
- JSON Server
- Utilizes OpenLibrary's public API for book data
