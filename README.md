# People Management Web Application

A web application for managing a list of people. The app consists of two parts:
- **Frontend**: React.js + Vite
- **Backend**: Spring Boot + PostgreSQL

---

## Features

- View a list of people as a table
- Add, edit, and delete people
- Header and footer are added to make page look better

---

## Technologies Used

- **React 19 + Vite**
- **Bootstrap 5.3**
- **Spring Boot 3 (Java 17+)**
- **PostgreSQL (via Docker)**
- **Gradle build system**
- **Docker and Docker Compose**

---

## How to Run

### 1. Clone the Projects from GitHub

```bash
git clone https://github.com/ajermoshkina7/people-frontend.git
cd peaple-frontend
```

```bash
git clone https://github.com/ajermoshkina7/people-backend.git
cd people-backend
```

---

### 2. Requirements

Make sure you have the following installed:
- Docker + Docker Compose
- Java 17 or higher
- Node.js + npm

---

### 3. Database in Docker

1. Create a `.env` file in the project root with the following content:

```env
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=user
```

2. Start the PostgreSQL container:

```bash
docker-compose up -d
```

---

### 4. Backend (Spring Boot)

1. Ensure your `application.properties` contains:

```properties
spring.application.name=people
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=user
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

2. Run the backend:

```bash
./gradlew bootRun
```

> Backend will be available at: `http://localhost:8080`

---

### 5. Frontend (React + Vite)

1. Navigate to the frontend directory:

```bash
cd people-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

> Frontend is usually available at: `http://localhost:3000`

> Ensure the `UserService.js` API points to the backend:  
> `http://localhost:8080/api/users`

---

## Notes

- Data is stored in a PostgreSQL database running in Docker.
- Axios is used in the frontend for API calls, and Bootstrap for styling.

---

## Conclusion

Homework: Java Spring Boot + React.js based users management application.
