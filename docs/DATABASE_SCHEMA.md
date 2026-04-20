# Database Schema for AfricaCRM

## Tables

### 1. Customers
- **customer_id** (PK, INT) - Unique identifier for each customer.
- **first_name** (VARCHAR) - First name of the customer.
- **last_name** (VARCHAR) - Last name of the customer.
- **email** (VARCHAR) - Email address of the customer (Unique).
- **phone** (VARCHAR) - Phone number of the customer.
- **created_at** (DATETIME) - Timestamp of when the customer was created.
- **updated_at** (DATETIME) - Timestamp of the last update.

### 2. Conversations
- **conversation_id** (PK, INT) - Unique identifier for each conversation.
- **customer_id** (FK, INT) - Reference to the customer who initiated the conversation.
- **agent_id** (FK, INT) - Reference to the agent managing the conversation.
- **started_at** (DATETIME) - Timestamp when the conversation started.
- **ended_at** (DATETIME) - Timestamp when the conversation ended, if applicable.

**Relationships:**
- Customers (1) --- (N) Conversations (A customer can have multiple conversations)
- Agents (1) --- (N) Conversations (An agent can handle multiple conversations)

### 3. Messages
- **message_id** (PK, INT) - Unique identifier for each message.
- **conversation_id** (FK, INT) - Reference to the conversation the message belongs to.
- **sender_id** (FK, INT) - Reference to the sender (customer or agent).
- **content** (TEXT) - Content of the message.
- **sent_at** (DATETIME) - Timestamp when the message was sent.

**Relationships:**
- Conversations (1) --- (N) Messages (A conversation can have multiple messages)

### 4. Agents
- **agent_id** (PK, INT) - Unique identifier for each agent.
- **username** (VARCHAR) - Username of the agent (Unique).
- **email** (VARCHAR) - Email address of the agent (Unique).
- **created_at** (DATETIME) - Timestamp of when the agent was created.
- **updated_at** (DATETIME) - Timestamp of the last update.

### 5. Automations
- **automation_id** (PK, INT) - Unique identifier for each automation.
- **name** (VARCHAR) - Name of the automation.
- **created_at** (DATETIME) - Timestamp of when the automation was created.
- **updated_at** (DATETIME) - Timestamp of the last update.

**Constraints:**
1. Foreign Key Constraints:
   - `customer_id` in Conversations references `customer_id` in Customers.
   - `agent_id` in Conversations references `agent_id` in Agents.
   - `conversation_id` in Messages references `conversation_id` in Conversations.
   - `sender_id` in Messages can reference either `customer_id` in Customers or `agent_id` in Agents (this can be handled using a polymorphic association).
2. Unique Constraints:
   - `email` in Customers must be unique.
   - `email` in Agents must be unique.
   - `username` in Agents must be unique.

## Notes
- Ensure proper indexing for fields frequently queried, such as `customer_id`, `agent_id`, `conversation_id`, and timestamps for performance optimization.