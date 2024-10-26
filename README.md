# Todo App

Welcome to the Todo App project! This application allows users to register, manage tasks, and track their progress efficiently. It features user authentication, task management capabilities, and a responsive design optimized for both mobile and desktop devices.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Registration and Authentication**: Sign up and log in using Clerk.
- **Task Management**:
  - Add new tasks
  - Delete existing tasks
  - Mark tasks as important
  - Mark tasks as completed
  - Search for tasks
- **Statistics Tracking**: View task statistics displayed with PieChart.js.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Pagination**: Navigate through pages of tasks for better visibility.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Supabase
- **Authentication**: Clerk
- **Data Fetching**: TanStack Query
- **Charting**: PieChart.js
- **Deployment**: Vercel

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd todo-app
    ```

3. **Install Dependencies**:
    Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required dependencies:
    ```bash
    npm install
    ```

4. **Set Up Environment Variables**:
    Create a `.env` file in the root directory of the project and add the necessary environment variables for Supabase and Clerk:
    ```
    REACT_APP_SUPABASE_URL=your_supabase_url
    REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
    REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
    ```

5. **Run the Development Server**:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- **User Registration**: Click on "Sign Up" to create a new account using Clerk.
- **User Login**: Use your credentials to log in.
- **Managing Tasks**: Add, delete, mark as important, and mark as completed from the task list.
- **Search Tasks**: Use the search bar to filter tasks by name.
- **Viewing Statistics**: Access the statistics page to view your task completion metrics displayed in a pie chart.

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**:
    ```bash
    git checkout -b feature/YourFeature
    ```

3. **Commit Your Changes**:
    ```bash
    git commit -m "Add new feature"
    ```

4. **Push to the Branch**:
    ```bash
    git push origin feature/YourFeature
    ```

5. **Create a Pull Request**: Submit a pull request to the main branch of the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact:

- **Author**: Levani Mesxia
- **GitHub**: [LevaniMesxia23](https://github.com/LevaniMesxia23)
- **Email**: levanimesxia10@gmail.com
