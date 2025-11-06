# API Contracts - Fire Extinguisher Company Website

## Current Mock Data (in mock.js)
- Contact form submissions (stored in localStorage)
- Products data
- Services data
- Safety tips
- Testimonials
- Company stats and certifications

## Backend Implementation Plan

### 1. MongoDB Collections

#### contacts
- name: String (required)
- email: String (required)
- phone: String (required)
- company: String (optional)
- message: String (required)
- timestamp: DateTime (auto-generated)
- status: String (default: "new") - for tracking lead status

### 2. API Endpoints

#### POST /api/contacts
**Purpose**: Submit contact form inquiry
**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 555-123-4567",
  "company": "Test Company",
  "message": "Need fire safety equipment"
}
```
**Response**: 
```json
{
  "success": true,
  "message": "Contact request submitted successfully",
  "id": "contact_id"
}
```

#### GET /api/contacts (Admin endpoint - optional)
**Purpose**: Retrieve all contact submissions
**Response**: Array of contact objects

### 3. Frontend Integration Changes

#### Contact.jsx
- Remove localStorage mock
- Replace with actual API call to POST /api/contacts
- Use axios for HTTP requests
- Handle success/error responses with toast notifications
- Clear form on successful submission

### 4. Error Handling
- Validate email format on backend
- Validate required fields
- Return appropriate error messages
- Handle database connection errors

### 5. CORS Configuration
- Already configured in server.py
- Allow all origins for development
