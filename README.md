# User REST API

This is a REST API for managing user data, built using **Node.js** with **Express.js**. It supports CRUD (Create, Read, Update, Delete) operations for user management.

## Features

- **GET**: Fetch user data
- **POST**: Add new users
- **PUT**: Update user information
- **DELETE**: Remove users

## Tech Stack

- **Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Password Hashing**: Bcrypt

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anand-shete/rest-api.git
   cd rest-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGO_URL=mongodb://localhost:27017/rest-api
   ```

4. Start the server:
   ```bash
   npm run start
   ```

## API Endpoints

### **Base URL**

```
http://localhost:3000/api
```

### **Endpoints**

#### 1. **Get All Users**

- **GET** `/`

#### 2. **Get User by ID**

- **GET** `/:id`

#### 3. **Create a New User**

- **POST** `/createUser`

#### 4. **Update User**

- **PUT** `/:id`

#### 5. **Delete User**

- **DELETE** `/:id`

## Contribution

Feel free to fork this repository and contribute via pull requests. Any suggestions or bug reports are welcome!
