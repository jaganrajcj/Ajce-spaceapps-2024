## NASA Space Apps Challenge 2024 - Amal Jyothi College of Engineering
This repository contains the registration and landing page for the NASA Space Apps Challenge 2024 local event hosted at Amal Jyothi College of Engineering.

### Installation
Clone the repository and install dependencies:

```
git clone <repository_url>
cd <project_directory>
npm install
```
### Environment Variables
Create a .env file in the root directory based on .env.example and place your origianl API keys there. 

Also add the DATABASE_URL with a PostgreSQL connection string.

`Note: Add '?connect_timeout=500' at the end of the database connection URL to avoid timeouts`

### Prisma Initialization and Database Migration
For new databases run prisma migrations with the command
```
npx prisma migrate dev
```

### Running the Application
To run the application locally:

```
cd <project_directory>
npm run dev
```
The application will be accessible at http://localhost:3000

A vercel deployment is accessible at https://spaceappsajce.vercel.app/



### Technologies Used
Next.js: React framework for building server-side rendered applications.
Tailwind CSS: Utility-first CSS framework for styling.
