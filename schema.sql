-- node schema
-- docker exec -i mysql mysql -u root -ppassword join_us < schema.sql

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (email) VALUES('Katie34@yahoo.com'), ('Tunde@gmail.com');
