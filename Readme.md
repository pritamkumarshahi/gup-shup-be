# GupShup - Backend

## Overview

GupShup is a real-time chat application that allows users to communicate instantly. This repository contains the Backend code built with NodeJS Express.

## Table Of Content

- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License]("contributing")


## Features

- RESTful API for user authentication and messaging.
- Real-time communication using Socket.IO.
- Secure password hashing using bcrypt.
- JWT-based authentication for protected routes.
- Integration with a database for storing user data and chat messages.
- Modular architecture for easy scalability.


## Technologies Used

- **Node.js:** JavaScript runtime for building the backend.
- **Express.js:** Fast, minimalist web framework for Node.js.
- **Socket.IO:** For handling real-time communication.
- **MongoDB:** NoSQL database for storing user and message data.
- **Mongoose:** ODM for MongoDB, making database interactions easier.
- **JWT (JSON Web Token):** For secure authentication and authorization.
- **bcrypt:** For hashing passwords and securing user data.
- **Cors:** To enable cross-origin resource sharing for API requests.

## Architecture
The backend follows a modular architecture, separating concerns into various modules like:

- **Authentication**: Handles user signup, login, and JWT issuance.
- **Messaging**: Manages real-time communication and chat messages.
- **Database**: MongoDB is used as the database, managed by Mongoose.


## Getting Started
### Prerequisites
Before running the application, make sure you have the following installed:

Node.js (v14+)
npm or yarn (optional)
MongoDB (local or cloud instance)

## Installation
To use the GupShup, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/pritamkumarshahi/gup-shup-be.git
cd gup-shup-be
npm install
npm start
npm run build
npm run eject
```

## Running the Application

1. Run MongoDB (if running locally):
    - Make sure MongoDB is running on your machine or use a cloud service like MongoDB Atlas.
      Start the backend server:
2. Start the backend server:
    ```bash
      npm start
    ```
    or in development mode:

    ```bash
      npm run dev
    ```
    The server will start on http://localhost:5001 by default.

## Environment Variables
Create a .env file in the root directory and add the following environment variables:

```bash
# Server
PORT=5001

# MongoDB
MONGO_URI=<Your MongoDB URI>

# JWT
JWT_SECRET=<Your JWT Secret>

# Socket.IO
SOCKET_PORT=<Socket.IO Port>

# CORS Configuration
CORS_ORIGIN=<Frontend URL>
```
Make sure to configure the correct values based on your environment (development or production).

## API Endpoints
Here are some of the key API routes for the GupShup backend:

### Authentication
- **POST** `/api/auth/register:` Register a new user.
- **POST** `/api/auth/login:` Login an existing user and issue a JWT.

### Messaging
- **GET** `/api/messages/:chatId:` Get all messages in a specific chat.
- **POST** `/api/messages:` Send a new message to a chat.

### Users
- **GET** `/api/users/:userId:` Get user profile information.
- **GET** >/api/users: Get all users (for search, friends list, etc.).

For real-time messaging, the backend communicates with the frontend via Socket.IO.


