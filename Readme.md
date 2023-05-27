# To-Do App

This is a To-Do application built using Create React App, SCSS, Ant Design, useContext, and Jest. The application allows users to manage their tasks and keep track of their to-do list. It is integrated with a Spring Boot API for data storage and retrieval.

## Getting Started

1. Clone the repository:

```bash
   git clone https://github.com/VhugoJc/To-Do-Frontend.git
```
2. Navigate to the project directory:

```bash
cd To-Do-Frontend
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run start
```
This will start the application on http://localhost:8080.

## Features
- **Task Management**: Add, edit, and delete tasks.
- **Task Filtering**: Filter tasks based on their status (completed or pending).
- **Drag and Drop**: Reorder tasks using drag and drop functionality.
- **Context API**: Utilize React's Context API to manage state and share data between components.
- **Ant Design**: Use Ant Design library for UI components and styling.
- **SCSS**: Customize and style the application using SCSS.
- **API Integration**: Communicate with the Spring Boot API to fetch and save task data.
- **Testing with Jest**: Includes unit tests using Jest for testing API funtions.

## Project Structure
The project structure follows the standard Create React App convention:

- `src`: Contains the application source code.
- `components`: Contains reusable React components.
- `context`: Contains the context provider and related files for managing state.
- `pages`: Contains the main application pages.
- `scss`: Contains SCSS files for styling the application.
- `api`: Contains utility functions calling endpoints.
- `hooks`: Contains custom hooks based on context.
- `shared`: Contains code sections with components.
- `config`: Contains a variable with backend variable.

## Testing
The application includes unit tests using Jest for frontend components and API functions. To run the tests, use the following command:
```bash
npm run test
```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

## License
This project is licensed under the MIT License.
```csharp
Feel free to customize this README file based on the specifics of your ToDo app.
```

