Server started: node index.js  

## API Routes

### GET /users
- Description: Retrieves all users
- Request Type: GET
- Path: /users
- Parameters: None
- Request Body: None
- Response Body:


[
    {
        "id": 1,
        "name": "Artyom",
        "email": "SemperIdem1989@gmail.com",
        "age": 34
    },
    {
        "id": 2,
        "name": "Tom",
        "email": "TomHardy@gmail.com",
        "age": 46
    }
]

- Example Request:

GET http://localhost:5000/users

- Example Response:

[
    {
        "id": 1,
        "name": "Artyom",
        "email": "SemperIdem1989@gmail.com",
        "age": 34
    },
    {
        "id": 2,
        "name": "Tom",
        "email": "TomHardy@gmail.com",
        "age": 46
    }
]


### GET /users/:id
- Description: Retrieves a user by ID
- Request Type: GET
- Path: /users/:id
- Parameters:
  - id (path parameter) - ID of the user
- Request Body: None
- Response Body:

{
    "id": 1,
    "name": "Artyom",
    "email": "SemperIdem1989@gmail.com",
    "age": 34
}

- Example Request:

GET http://localhost:5000/users/1

- Example Response:

{
    "id": 1,
    "name": "Artyom",
    "email": "SemperIdem1989@gmail.com",
    "age": 34
}


### GET /users/age/:age
- Description: Retrieves users with age greater than the specified age
- Request Type: GET
- Path: /users/age/:age
- Parameters:
  - age (path parameter) - Minimum age of the users
- Request Body: None
- Response Body:

[
    {
        "id": 2,
        "name": "Tom",
        "email": "TomHardy@gmail.com",
        "age": 46
    }
]

- Example Request:

GET http://localhost:5000/users/age/40

- Example Response:

[
    {
        "id": 2,
        "name": "Tom",
        "email": "TomHardy@gmail.com",
        "age": 46
    }
]


### GET /users/domain/:domain
- Description: Retrieves users with email domain containing the specified domain
- Request Type: GET
- Path: /users/domain/:domain
- Parameters:
  - domain (path parameter) - Domain to filter the email addresses
- Request Body: None
- Response Body:

[
    {
        "id": 1,
        "name": "Artyom",
        "email": "SemperIdem1989@gmail.com",
        "age": 34
    }
]

- Example Request:

GET http://localhost:5000/users/domain/SemperIdem1989@gmail.com

- Example Response:

[
    {
        "id": 1,
        "name": "Artyom",
        "email": "SemperIdem1989@gmail.com",
        "age": 34
    }
]


### GET /users/sorted
- Description: Retrieves sorted list of users based on name
- Request Type: GET
- Path: /users/sorted
- Parameters: None
- Request Body: None
- Response Body:

[
    {
        "id": 2,
        "name": "Tom",
        "email": "TomHardy@gmail.com",
        "age": 46
    },
    {
        "id": 1,
        "name": "Artyom",
        "email": "SemperIdem1989@gmail.com",
        "age": 34
    }
]

- Example Request:

GET http://localhost:5000/users/sorted

- Example Response:

[
    {
        "id": 2,
        "name": "Tom",
        "email": "TomHardy@gmail.com",
        "age": 46
    },
    {
        "id": 1,
        "name": "Artyom",
        "email": "SemperIdem1989@gmail.com",
        "age": 34
    }
]


### POST /users
- Description: Adds a new user
- Request Type: POST
- Path: /users
- Parameters: None
- Request Body:

{
    "id": 3,
    "name": "New name",
    "email": "NewUser@gmail.com",
    "age": 25
}

- Response Body:

{
    "id": 3,
    "name": "New name",
    "email": "NewUser@gmail.com",
    "age": 25
}

- Example Request:

POST http://localhost:5000/users

{
    "id": 3,
    "name": "New name",
    "email": "NewUser@gmail.com",
    "age": 25
}

- Example Response:

{
    "id": 3,
    "name": "New name",
    "email": "NewUser@gmail.com",
    "age": 25
}


### DELETE /users/:id
- Description: Deletes a user by ID
- Request Type: DELETE
- Path: /users/:id
- Parameters:
  - id (path parameter) - ID of the user to be deleted
- Request Body: None
- Response Body:

{
    "message": "user deleted"
}

- Example Request:

DELETE http://localhost:5000/users/2

- Example Response:

{
    "message": "user deleted"
}