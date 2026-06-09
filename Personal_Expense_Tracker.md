# Personal Expense Tracker

## Project Title

**Personal Expense Tracker**

## Problem Statement

Many individuals face difficulties in tracking their daily income and expenses manually, which can lead to poor financial planning, overspending, and inaccurate record keeping. This project provides a digital solution to manage personal finances efficiently by recording, monitoring, and analyzing expenses and income.

## Project Objectives

- To maintain personal income and expense records digitally.
- To add, update, delete, and view financial transactions.
- To categorize expenses for better financial analysis.
- To reduce manual record-keeping and calculation errors.
- To provide secure and efficient financial data management.
- To improve financial awareness and budgeting.

## Modules List

### Authentication Module
- User login and logout functionality.
- Secure access to the system.
- User account management.

### Income Management Module
- Add income records.
- Update income details.
- Delete income entries.
- View income history.

### Expense Management Module
- Add daily expenses.
- Update expense details.
- Delete expense records.
- View expense history.

### Category Management Module
- Create and manage expense categories.
- Classify expenses such as Food, Transport, Bills, Entertainment, etc.

### Reports Module
- Generate monthly and yearly expense reports.
- View income vs. expense summaries.
- Analyze spending patterns.

### Search Module
- Search transactions by date, category, amount, or description.
- Quick retrieval of financial records.

### Database Management Module
- Store and manage financial data using MySQL.
- Ensure data consistency and integrity.

## Database Tables

### Users Table

| Field Name | Description |
|------------|-------------|
| user_id | Unique user ID |
| username | Login username |
| password | Encrypted password |
| email | User email address |
| role | User role |

### Income Table

| Field Name | Description |
|------------|-------------|
| income_id | Unique income ID |
| user_id | User reference ID |
| amount | Income amount |
| source | Income source |
| income_date | Date of income |
| description | Income description |

### Expenses Table

| Field Name | Description |
|------------|-------------|
| expense_id | Unique expense ID |
| user_id | User reference ID |
| category_id | Expense category ID |
| amount | Expense amount |
| expense_date | Date of expense |
| description | Expense description |

### Categories Table

| Field Name | Description |
|------------|-------------|
| category_id | Unique category ID |
| category_name | Expense category name |

## Technologies Used

- **Frontend:** HTML, CSS, Bootstrap
- **Backend:** PHP
- **Database:** MySQL
- **Concepts:** CRUD Operations, Session Management, Authentication & Authorization, Financial Tracking, Report Generation

## Conclusion

The **Personal Expense Tracker** simplifies personal financial management by providing a secure, efficient, and user-friendly platform for recording, monitoring, and analyzing income and expenses. It helps users maintain financial discipline, track spending habits, and make informed budgeting decisions.
