# Servidumbres Grenergy - Repo listo para GitHub (one-click deploy)

Este repositorio contiene un scaffold listo para desplegar en DigitalOcean App Platform
o en cualquier proveedor que acepte Docker images (Render, Railway, etc.).

Contenido:
- backend/: Node/Express API mínima (simulada) con Dockerfile
- frontend/: Vite + React prototipo con Dockerfile y nginx
- docker-compose.prod.yml: composición para pruebas locales con Postgres + MinIO
- .env.production: plantilla de variables para producción
- do_app.yaml: spec de DigitalOcean App (ejemplo)
- .github/workflows/ci.yml: CI para build y push de imágenes
- scripts/: scripts de ayuda (start local, create admin)

Instrucciones rápidas:

1. Clona este repo en GitHub.

2. Conecta el repo en DigitalOcean App Platform y sigue la guía en README.

3. Configura variables de entorno y servicios (DB, Spaces).

4. Despliega. La app estará disponible en la URL que te proporcione la plataforma.


