-- Ejecutar en la DB para crear usuario admin (ajusta password con hashing en implementación real)
INSERT INTO users (id, name, email, password, role, "createdAt") VALUES ('admin-1','Admin','admin@grenergy.com','$2b$10$examplehash','admin',now());
