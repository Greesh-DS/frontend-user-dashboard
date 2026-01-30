# Frontend User Dashboard

A React application to browse, search, and view details of users fetched from a public API with user details.

## Features

 - Display a list of users in responsive cards
 - Search and filter users by name, email, city, or company
 - View detailed user information
 - Handles loading and API error

## Technologies Used

- React
- HTML/CSS

### Prerequisites
- Node.js 
- npm (Node Package Manager)

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd frondend-user-dashboard
```

2. Install dependencies 

```bash
npm install
```

3. Start the server

```bash
npm start
```

4. Open the browser

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js
│   ├── UserCard.js
│   ├── UserCardContainer.js
│   ├── UserDetailsPanel.js
│   └── ErrorMessage.js
├── hooks/
│   ├── useFetchUsers.js
│   └── useFilterUsers.js
├── UserDashboard.js
├── UserDashboard.css
└── index.js
```

## How to Use

1. **Browse Users** - Users are fetched automatically from the API on load.
2. **Search** - Type in the search bar to filter by name.
3. **View Details** - Click any user card to display complete details in the panel.

## Component Overview

### UserDashboard (Main)
- Manages overall state: search, selectedUser
- Handles card click logic and smooth scrolling

### SearchBar
- Controlled input for filtering users
- Clears selected user on focus
- Supports search by multiple fields

### UserCard
- Displays filter users in responsive cards
- Handles loading and empty states

### UserDetailsPanel
- Shows complete user information
- Includes phone, company, website, username
- Close button to hide panel

### ErrorMessage
- Display API or network errors

## Custom Hooks
- **useFetchUsers** - Fetches from API, manages loading and error states
- **useFilterUsers** - Filters users based on search term

## API Endpoint

- **Base URL:** `https://jsonplaceholder.typicode.com`
- **Endpoint:** `/users`
- **Method:** GET
- **Response:** Array of user objects
