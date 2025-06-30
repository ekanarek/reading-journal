# Concept: Reading Journal

## Feature 1: Display Journal Entries

### User Story

As a user, I want to open the application to a view of all existing entries to my reading journal, so that I can browse what I've logged and written in the past.

### Details

The home page should fetch journal entries on page load and put each entry's information in a card. When clicked, the card should "flip" to display the journal entry notes.

## Feature 2: Search For Books

### User Story

As a user, I want to search for books I've read so that I can add them to my journal.

### Details

Display a search bar in the top navigation bar. When the user clicks "search", make a GET request to OpenLibrary's API to show book titles that match the search.

## Feature 3: Add A Journal Entry

### User Story

As a user, I want to create a journal entry from a book in search results so that I can log that I've read the book and add my notes.

### Details

When the "Add to Journal" button is clicked from a search result, the user is redirected to a journal entry form that automatically populates the book's title, author, and cover image. The user can add their rating, date started, date finished, and any notes they have. When the "save" button is clicked, form data is sent to the JSON server and the user is redirected to their home page.

## Feature 4: Delete A Journal Entry

### User Story

As a user, I want the ability to delete saved journal entries.

### Details

On the home page, when the "delete" button within a journal entry card is clicked, a DELETE request is sent to the server and that entry is removed.
