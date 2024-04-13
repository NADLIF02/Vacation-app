const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config(); // Ensure dotenv is configured right at the top

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Logging the MongoDB URI to debug potential issues
console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.error("MongoDB connection error: ", err));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
