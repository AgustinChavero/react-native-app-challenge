# Instalacion y despliegue

#### Recuerda que para que el despliegue funcione correctamente deben tener el backend andando/deployado con las variables de entorno listas, de lo contrario no funcionara

    npm i

### WEB

- Comando:

        npm start

- Selecciona la opcion W

### ANDROID BUILD

- Instalacion necesaria para buildear app:

        npm install -g eas-cli

- Logeate:

        eas login

- Configura el build:

        eas build:configure

- Buildea

        eas build -p android --profile preview
