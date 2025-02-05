# Public API

This is a simple public API that returns the following information in JSON format:

- Registered email address
- Current datetime as an ISO 8601 formatted timestamp
- GitHub URL of the project

## Setup Instructions

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/zee-ham-su/public-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd public-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Project Locally

1. Start the server:

    ```bash
    node index.js
    ```

2. The API will be accessible at `http://localhost:3000`.

### API Documentation

#### Endpoint URL

- `GET /`

#### Request

- Method: `GET`
- URL: `http://<your-url>`

#### Response

    ```json
    {
        "email": "hsufiian@yahoo.com",
        "current_datetime": "2025-01-30T09:30:00Z",
        "github_url": "https://github.com/zee-ham-su"
    }
    ```

## Backlink

For Node.js developers: [HNG Tech - Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

