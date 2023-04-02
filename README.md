## Getting Started

Firstly, you should have installed nodeJS
Follow the next instructions to run the project:

### Prerequisites

* install NPM package
  ```sh
  npm install install
  ```
* add the ````config.env```` in the folder ````src/apps```` at the same level that ````apps.ts````.
* add the MongoURI in `````config.env`````
    ```
    MONGO_URI=mongodb+srv://{{user}}:{{passsword}}@{{cluster}}/?retryWrites=true&w=majority
    ```
  
## Run Tests

For run the test you should need to execute the next bash:
* Run test
    ```
    npm test
    ```

## Start

To start the project you should run the next command:
* Run test
    ```
    npm dev
    ```
  
The server port for default is "3000" so you can access to the endpoints in the website:
    ````
    localhost:3000/
    ````

You can find the API documentation in ````localhost:3000:api-docs````
