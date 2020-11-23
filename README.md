# Globo-Rural-Back-

Proyecto Final Globo Rural

Para ejecutar el docker-compose es necesario crear el fichero .env y definir estas variables:

```
MONGO_INITDB_DATABASE=nombre de la base de datos
MONGO_INITDB_ROOT_USERNAME=usuario administrador de la BD
MONGO_INITDB_ROOT_PASSWORD=contraseña de ese usuario
MONGO_URL=url que usará JS para conectarse
```

Llamadas a la API actuales:

- login de un usuario = **/api/user/login/** (POST: email, password)
- registrar un usuario = **/api/user/** (POST: todos los atributos del usuario)
- obtener los datos de un usuario = **/api/user/**{id del usuario} (GET, Requiere Token de Authenticacion)
- obtener una tiendas = **/api/shops/**{id de la tienda} (GET)
- obtener todas las tiendas = **/api/shops** (GET)
- obtener todas las tiendas en un CP = **/api/shops?postcode=**{código postal} (GET)
- obtener los productos de una tienda = **/api/products/shop/**{id de la tienda} (GET)
- obtener los productos de una tienda por categoría = **/api/products/shop/**{id de la tienda}**?category=**{nombre de la categoría} (GET)
