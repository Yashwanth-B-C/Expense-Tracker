# Expense Tracker Application

This is a full-stack web application designed to help users manage and track their personal expenses. It includes features for user authentication, expense logging, and more, all built on a robust Node.js backend.

## Features

  * **User Authentication:** Secure signup and login for all users.
  * **Expense Management:** Log, categorize, and manage personal expenses.
  * **Payments:** Integrates with payment routes to handle financial transactions.
  * **Leaderboard:** Includes a leaderboard feature, which could be used for gamification or tracking.
  * **Password Management:** Functionality for handling password-related actions.
  * **Robust Backend:** Built with Node.js and Express to provide a fast and reliable server.

## Technologies Used

  * **Backend:**

      * Node.js
      * Express.js
      * `dotenv` for environment variables
      * `cors` for cross-origin resource sharing
      * `morgan` for request logging

  * **Frontend:**

      * HTML, CSS, JavaScript (served from the `public` directory)

## Getting Started

### Prerequisites

You'll need the following installed:

  * Node.js
  * NPM (comes with Node.js)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Yashwanth-B-C/Expense-Tracker.git
    cd Expense-Tracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Variables:**

      * Create a `.env` file in the root directory.
      * Add your environment variables, such as the port number, and any database credentials (if applicable).

    <!-- end list -->

    ```env
    PORT=3000
    ```

### Running the Application

1.  **Start the server:**
    ```bash
    node server.js
    ```
    or
    ```bash
    npm start
    ```
2.  **Access the application:**
      * Open your web browser and navigate to `http://localhost:3000/signup-page.html` to begin using the application.

## Project Structure

  * `server.js`: The main server file.
  * `public/`: Contains all client-side files (HTML, CSS, JS).
  * `server/routes/`: Directory for all API route files (`auth`, `expenses`, `leaderboard`, `password`, `payment`).
  * `node_modules/`: All project dependencies.

## Contributing

Contributions are welcome\! Please feel free to open an issue or submit a pull request.
