# Todo App

Esta es una **aplicación de lista de tareas** (Todo App) desarrollada con **React** y **TypeScript**, que utiliza una solución personalizada de gestión de estado llamada `todo-store`. La aplicación permite gestionar tareas, con características como añadir, eliminar, modificar, marcar tareas como completadas y filtrar las tareas según su estado.

> [!NOTE]  
> La app hace uso de la plantilla <a href="https://todomvc.com/"> TodoMVC </a> para los estilos


## Características

- **Añadir Nuevas Tareas:** Añade fácilmente nuevas tareas a tu lista de pendientes.
- **Marcar como Completada:** Marca las tareas como completadas para seguir tu progreso.
- **Eliminar Tareas:** Elimina tareas de tu lista cuando ya no las necesites.
- **Filtrar Tareas:** Filtra tus tareas para ver todas, completadas o pendientes.
- **Modificar Tarea:** Modifica una tarea al hacer doble click sobre él.
- **Persistencia de Estado:** El estado de la aplicación se guarda en el `localStorage`, asegurando que tus tareas se mantengan incluso al refrescar o cerrar el navegador.
- **Gestión de Estado Personalizada:** La app utiliza una solución de gestión de estado personalizada (`todo-store`) que imita la funcionalidad de Redux sin la complejidad adicional de librerías externas.


### Requisitos Previos

- Node.js 
- npm o yarn

### Instalación

- Clona el repositorio:

- Navega al directorio del proyecto:

  ```bash
  cd todo-app
  ```

- Instala las dependencias:

  ```bash
  npm install
  ```

- Ejecutar la app

```bash
npm run dev
 ```
