# Portfolio Site | Server Side

This is a portfolio site to showcase my work to employers.  
I used the MERN stack to build this site

* Mongoose/MongoDB
* ExpressJS
* ReactJS
* NodeJS

Some of the challenges I faced was implementing the authentication/authorization feature on the client side.  I plan on implementing it in the future. 
<br>

But, you can still login on the server side.

## Project setup
### `npm install` 
To install dependencies

### `npm run app`
Runs the app in the development mode.
Open [http://localhost:8082](http://localhost:8082) to view it in your browser.
The page will reload when you make changes.

## General Desciption
You **DO NOT** need to log in or register to view the projects or blogs.<br>
You **DO** need to log in and register to **edit, create, update, or delete** a project or blog.

Once logged in

## Endpoints

### User
* `/register`

### Authorization | Authentications
* `/login`
* `/logout`
* `/refresh`

### Blogs
* `/blogs` - Both for **Fetch** & **Post** requests
* `/blogs/:id` - Fetch a single blog by it's id.
* `/blogs/:id/edit` - Edit a blog
* `/blogs/:id` - Delete a blog

### Projects
* `/projects` - Both for **Fetch** & **Post** requests
* `/projects/:id` - Fetch a single project by it's id.
* `/projects/:id/edit` - Edit a project
* `/projects/:id` - Delete a project
