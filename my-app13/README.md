Movie & TV Show Tracker
Project Overview

The Movie & TV Show Tracker is a ReactJS-based web application that allows users to search for, browse, and view details about movies and TV shows using real-time data from The Movie Database (TMDB) API.
Users can also manage a personalized Watchlist where they can add or remove movies and TV shows they want to watch later.
The app provides a modern, responsive, and user-friendly interface styled with Tailwind CSS.

Features
1. General Features

Built with ReactJS using a component-based architecture.

Fully responsive UI for desktop, tablet, and mobile devices.

Tailwind CSS used for styling and layout design.

Clean, modular, and maintainable code structure.

Uses React Hooks (useState, useEffect) for state and side-effect management.

Implemented React Router for smooth client-side navigation.

Integrated with TMDB API to fetch real-time movie and TV show data.

Persistent Watchlist using localStorage.

Includes error handling and loading indicators during API requests.

Custom Toast Notifications for user actions.

2. Core Functionalities
Homepage

Displays a visually appealing welcome section.

Shows curated lists of Trending Movies and Popular TV Shows fetched from TMDB.

Clear navigation links to other pages: Movies, TV Shows, Watchlist.

Search Functionality

Intuitive search bar allowing users to search for any movie or TV show.

Displays search results dynamically with poster, title, and release date.

Controlled form input with validation for empty search queries.

Movie and TV Show Listings

Dedicated pages for browsing popular and top-rated Movies and TV Shows.

Scrollable, grid-based layout for content browsing.

Reusable MovieCard and TvShowCard components.

Detail Pages

Detailed view for each movie or TV show with information such as:

Poster image

Title and overview

Release date and genres

User rating and cast (if available)

Includes “Add to Watchlist” and “Remove from Watchlist” buttons.

Watchlist

Allows users to save movies and TV shows to their personal watchlist.

Displays all saved items on a dedicated Watchlist Page.

Data persists in localStorage, even after refreshing the page.

Provides options to remove items from the watchlist.

3. User Feedback

Loading indicators displayed during data fetching.

Error messages for failed API requests or network issues.

Toast notifications for key actions:

Added to Watchlist

Removed from Watchlist

Invalid search query

4. UI & Design

Clean, dark-themed interface for a cinematic look.

Fixed header with navigation links and search bar.

Simple footer with copyright.

Card hover effects for better interactivity.

Accessible color contrast and readable typography.

5. Technical Stack

Frontend: ReactJS

Styling: Tailwind CSS

Routing: React Router DOM

API Integration: TMDB API

State Management: React Hooks (useState, useEffect)

Global State: React Context API

Persistence: localStorage

Custom Hooks: Reusable hooks for API fetching and watchlist management