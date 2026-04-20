const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Customer routes
app.use('/api/customers', require('./routes/customers'));

// Conversation routes
app.use('/api/conversations', require('./routes/conversations'));

// Automation routes
app.use('/api/automation', require('./routes/automation'));

// Webhook routes for different platforms
app.use('/webhooks/whatsapp', require('./routes/webhooks/whatsapp'));
app.use('/webhooks/facebook', require('./routes/webhooks/facebook'));
app.use('/webhooks/instagram', require('./routes/webhooks/instagram'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
