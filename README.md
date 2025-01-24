# ApptLink Project

## Overview

ApptLink is a web application designed to manage products and users efficiently. The project is built using TypeScript and React, with state management handled by Redux.

## Features

- **Product Management**: Add, edit, and delete products.
- **User Management**: Add, edit, and delete users.
- **Responsive Design**: The application is fully responsive and works on various devices.

## Project Structure

The project is organized into several key components and features:

### Components

- **ButtonComponent**: A reusable button component.
- **InputComponent**: A reusable input component.
- **SelectComponent**: A reusable select component with options.
- **CardUsuario**: A responsive card component to display user information.

### Features

- **Dashboard**: Contains forms and logic for managing products and users.
- **Forms**: Includes forms for adding and editing products and users.
- **Provider**: Context provider for managing global state in the dashboard.

### Interfaces

- **ProductoRequest**: Defines the structure for product-related data.
- **UsuarioRequest**: Defines the structure for user-related data.

## Installation

To install the project dependencies, run:

```sh
npm install
```

## Usage

To start the development server, run:

```sh
npm start
```

## Key Files

- **src/Features/Dashboard/forms/Producto.tsx**: Contains the form logic for adding and editing products.
- **src/Components/Cards/CardUsuario.tsx**: Contains the responsive card component for displaying user information.
- **src/Interfaces/ProductoRequest.ts**: Defines the product data structure.
- **src/Interfaces/UsuarioRequest.ts**: Defines the user data structure.

## Validation

The project includes validation for form inputs to ensure data integrity. For example, the `precio` field in the product form only allows valid decimal numbers without commas.

## Styling

The project uses CSS Flexbox and media queries to ensure responsive design. The `user-card` class is used to style the user information card.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.