This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  Cliente React API REST para películas en http://www.omdbapi.com.

### Linting

Configuración del linter de airbnb en una aplicación CRA.

### Redux

Usaremos redux, react-redux y redux-promise-middleware con action creators. Además configuración de dev tools de redux para explorar el store desde el navegador.

### Debounce

Nuestra caja de búsqueda esperará a que hayas dejado de escribir para disparar la búsqueda.

### React-bootstrap

La librería de componentes más popular para React.

### Instalación

git clone https://github.com/hanspoo/omdb-explorer
cd omdb-explorer
yarn install

Para usarlo debes obtener tu APÎ KEY en http://www.omdbapi.com/apikey.aspx, antes de dar start definir la variable de entorno REACT_APP_OMDB_KEY.

export REACT_APP_OMDB_KEY=12345678
yarn start


