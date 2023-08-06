# XWIKI Articles RESTful API using Node.js, Express.js, and Postman

This is a sample implementation of a RESTful API for managing XWIKI articles using Node.js, Express.js, and Postman. The API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on XWIKI articles.

## Getting Started

### Prerequisites

Before running the API, you'll need to have the following installed:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com/try/download/community)
- Postman (https://www.postman.com/downloads)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/xwiki-articles-api.git
   cd xwiki-articles-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the MongoDB server:

   Make sure MongoDB is running. If it's not running as a service, you can start it using:

   ```bash
   mongod
   ```

4. Start the API server:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:3000` by default. You can change the port in `app.js` if needed.

### Testing with Postman

To test the API endpoints, you can import the Postman collection provided in the repository:

1. Open Postman.

2. Click on the "Import" button.

3. Select the `xwiki-articles-api.postman_collection.json` file from the project directory.

4. The collection will be imported into Postman, and you'll see all the available API endpoints.

## API Endpoints

The following are the available endpoints of the API:

### Fetch All Articles

- **URL:** `/api/articles`
- **Method:** `GET`
- **Response:** Array of articles

### Fetch a Single Article

- **URL:** `/api/articles/:id`
- **Method:** `GET`
- **Response:** Single article object

### Create a New Article

- **URL:** `/api/articles`
- **Method:** `POST`
- **Data Params:** `{ "title": "Article Title", "content": "Article Content" }`
- **Response:** Created article object

### Update an Article

- **URL:** `/api/articles/:id`
- **Method:** `PUT`
- **Data Params:** `{ "title": "Updated Title", "content": "Updated Content" }`
- **Response:** Updated article object

### Delete an Article

- **URL:** `/api/articles/:id`
- **Method:** `DELETE`
- **Response:** Success message

## Error Handling

- If an article with a specific ID is not found, the API will respond with a 404 status code and an error message.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was inspired by various online tutorials and resources on building RESTful APIs with Node.js, Express.js, and Postman. Special thanks to all those who contributed to the open-source community.

Feel free to modify this README to suit your specific API and project requirements. Add any additional instructions or information that might be useful to users and contributors. Happy coding!