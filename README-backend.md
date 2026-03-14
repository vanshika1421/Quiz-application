# Quiz Application Backend

This is the backend server for the Quiz Application that provides AI-powered explanations for quiz answers using OpenAI's GPT-3.5-turbo model.

## Features

- Secure AI explanation generation
- RESTful API with Express.js
- CORS enabled for frontend access
- Environment variable configuration
- Comprehensive error handling

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your OpenAI API key to `.env`:
     ```
     OPENAI_API_KEY=your_actual_openai_api_key_here
     PORT=5000
     ```

3. **Get OpenAI API Key:**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Add it to your `.env` file

4. **Run the server:**
   ```bash
   node server.js
   ```

The server will start on `http://localhost:5000` (or the port specified in `.env`).

## API Endpoints

### POST /api/explain
Generates an AI explanation for a quiz question.

**Request Body:**
```json
{
  "question": "What is the chemical symbol for water?",
  "options": ["H2O", "HO2", "H2O2", "OH2"],
  "correctAnswer": "H2O",
  "userAnswer": "H2O"
}
```

**Response:**
```json
{
  "explanation": "Water is composed of two hydrogen atoms and one oxygen atom, which is represented by the chemical formula H2O. This is the standard notation used in chemistry."
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Security Notes

- The OpenAI API key is stored securely in environment variables
- Never commit `.env` files to version control
- CORS is enabled to allow frontend access from `localhost`

## Dependencies

- `express`: Web framework
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management
- `openai`: Official OpenAI Node.js SDK

## Running with Frontend

1. Start the backend server as described above
2. Open `index.html` in your browser (preferably with a local server)
3. The frontend will automatically connect to `http://localhost:5000/api/explain` for AI explanations

## Troubleshooting

- **"OpenAI API key not configured"**: Make sure your `.env` file has the correct `OPENAI_API_KEY`
- **"Failed to fetch"**: Ensure the backend server is running and accessible
- **CORS errors**: The backend has CORS enabled, but make sure you're accessing from the same origin or localhost