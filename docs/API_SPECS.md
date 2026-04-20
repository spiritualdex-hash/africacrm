# REST API Specifications

## Overview
This document outlines the REST API specifications for the AfricaCRM application. 

## Endpoints

### 1. Customers
#### **GET /api/customers**  
- **Description**: Retrieve a list of customers.  
- **Response**:  
  - **200 OK**  
  ```json  
  [  
      {  
          "id": "1",  
          "name": "John Doe",  
          "email": "john@example.com"  
      },  
      {  
          "id": "2",  
          "name": "Jane Smith",  
          "email": "jane@example.com"  
      }  
  ]  
  ```

#### **POST /api/customers**  
- **Description**: Create a new customer.  
- **Request Body**:  
  ```json  
  {  
      "name": "John Doe",  
      "email": "john@example.com"  
  }  
  ```
- **Response**:  
  - **201 Created**  
  - **Response Body**:  
  ```json  
  {  
      "id": "3",  
      "name": "John Doe",  
      "email": "john@example.com"  
  }  
  ```

### 2. Conversations
#### **GET /api/conversations**  
- **Description**: Retrieve a list of conversations.  
- **Response**:  
  - **200 OK**  
  ```json  
  [  
      {  
          "id": "1",  
          "customer_id": "1",  
          "subject": "Inquiry about product"  
      }  
  ]  
  ```

### 3. Messages
#### **POST /api/conversations/{conversationId}/messages**  
- **Description**: Send a message in a conversation.  
- **Request Body**:  
  ```json  
  {  
      "sender_id": "1",  
      "message": "Hello, I have a question about my order."  
  }  
  ```
- **Response**:  
  - **201 Created**  

### 4. Automations
#### **GET /api/automations**  
- **Description**: Retrieve a list of automations.  
- **Response**:  
  - **200 OK**  
  ```json  
  [  
      {  
          "id": "1",  
          "name": "Welcome Email",  
          "status": "active"  
      }  
  ]  
  ```

## Status Codes
- **200 OK**: The request has succeeded.  
- **201 Created**: The request has succeeded and a new resource has been created.  
- **400 Bad Request**: The server could not understand the request due to invalid syntax.  
- **404 Not Found**: The server can not find the requested resource.  
- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.  

---