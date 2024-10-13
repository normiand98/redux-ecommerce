# E-commerce Platform

A comprehensive e-commerce platform supporting multiple user roles: **Admin**, **Seller**, and **Shopper**. Each role is equipped with distinct permissions and functionalities. This README provides an overview of key features, setup instructions for running the project on Gitpod, and guidance on interacting with the app based on different user roles.

## Table of Contents

- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Setup and Running the App on Gitpod](#setup-and-running-the-app-on-gitpod)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Node.js](#2-install-nodejs)
  - [3. Install npm](#3-install-npm)
  - [4. Install MongoDB](#4-install-mongodb)
  - [5. Install Project Dependencies](#5-install-project-dependencies)
  - [6. Run the Frontend](#6-run-the-frontend)
  - [7. Run the Backend](#7-run-the-backend)
  - [8. Access the Application](#8-access-the-application)
- [Interacting with the App](#interacting-with-the-app)
  - [Role-Based Capabilities](#role-based-capabilities)
  - [User Flow](#user-flow)
- [Technologies Used](#technologies-used)

## Key Features

- **Role-Based Authentication**: 
  - **Admin**: Manage users with the ability to add, edit, delete, and update user roles.
  - **Seller**: Post new products, edit product details, and manage product listings.
  - **Shopper**: Browse products, add items to the shopping cart, and complete purchases.
  
- **Product Management**: Sellers can easily manage their product inventory, including adding new products and updating existing ones.

- **Shopping Cart**: Shoppers can seamlessly add products to their cart, review their selections, and proceed to checkout.

## Prerequisites

Before running the project locally or in a cloud-based environment like Gitpod, ensure you have the following installed:

- **Node.js**
- **npm** (Node Package Manager)
- **MongoDB** (Local installation or a cloud-based MongoDB service)

## Setup and Running the App on Gitpod

Follow these steps to set up and run the project in a Gitpod workspace:

### 1. Clone the Repository

Open your Gitpod terminal and clone the repository:

```bash
git clone https://github.com/normiand98/redux-ecommerce.git
```

### 2. Install Node.js:
   - If Node.js is not pre-installed in your Gitpod environment, install it with:
     ```bash
     sudo apt install nodejs
     ```

### 3. Install npm:
   - Install npm (Node package manager) if not available:
     ```bash
     sudo apt install npm
     ```

### 4. Install MongoDB:
   - To install MongoDB in your Gitpod environment:
     ```bash
     npm install mongodb
     ```

### 5. Install Project Dependencies:
   - Navigate to the project directory and install the required dependencies:
     
```bash
     cd redux-ecommerce
     npm install
```

### 6. Run the Frontend:
   - Start the frontend development server from the project root:
     
```bash
     npm run dev
```

### 7. Run the Backend:
   - Open a new terminal in Gitpod, navigate to the backend directory, and start the backend server:
     
```bash
     cd redux-ecommerce
     cd backend
     npm start
```

### 8. Access the Application:
  - Gitpod will provide public URLs for both the frontend and backend servers.
  - Ensure both ports are set to public in the Gitpod interface.
  - Open both URLs in your browser to interact with the application.

    ## Interacting with the App
    ### Role-Based Capabilities
    - **Admin**:
    User Management: Add, edit, delete, and update user roles.
    - **Seller**:
     Product Management: Post new products, update product details, and manage listings.
    - **Shopper**:
      Shopping: Browse products, add items to the cart, review the cart, and proceed to checkout.
     - **Cart Management**:
       Remove items and view detailed product information.
    
    ### User Flow
    - **Login/Register**:
    
      Users can create a new account or log in with existing credentials.
    - **Dashboard**:
      Upon successful login, users are directed to a role-specific dashboard:
    - **Admin**: Access to user management tools.
    - **Seller**: Tools for managing products and listings.
    - **Shopper**: Access to product browsing and cart functionalities.
    - **Shopping**:
      Shoppers can view product listings, access detailed product information, and manage their shopping cart.
      
    ### Technologies Used
    - **Vite**: Fast build tool and development server for frontend applications.
    - **React**: JavaScript library for building user interfaces.
    - **Redux**: State management library for handling application state.
    - **Tailwind CSS**: Utility-first CSS framework for efficient styling.
    - **MongoDB**: NoSQL database for data storage.
    - **Node.js**: JavaScript runtime for backend operations.
    - **Express**: Web framework for Node.js, used to build the backend API.
