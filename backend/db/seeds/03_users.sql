INSERT INTO users (name, email, password_hash, is_admin) VALUES
('John Doe', 'john@example.com', '$2a$10$VKGwM3d7vORf4ZLpQ2Kkyu94p9Fexb7B2z/HoCw2bKQtBZD0q5taK', false),
('Jane Smith', 'jane@example.com', '$2a$10$ioU0MimjUohMZdRqP2dt9ub.KbH4F9Jm/Z0UJG7jgfe94vs24w8LS', false),
('Admin User', 'admin@example.com', '$2a$10$uM4z0I0MnrVreeFWFTkT0.TUzhehd1JwkUK65yaDFmGjSsxpxxupK', true),
--  hash for 123456
('Alice Johnson', 'alice@example.com', '$2a$10$SfM88MujVIBpGpRO1WnvMeF2KDCR0tD8FW3Lg43s8.V5METhZgdPi', true),
('Bob Williams', 'bob@example.com', '$2a$10$EH5TP1v5pLM9vQPAe8.a0eomIUfcHq77cLeTH7sPhWZVgeM.1dQj2', false);


