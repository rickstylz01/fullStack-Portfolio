# Portfolio Site | Server Side

This is a portfolio site to showcase my work to employers.  
I used the MERN stack to build this site

* Mongoose/MongoDB
* ExpressJS
* ReactJS
* NodeJS

Some of the challenges I faced was implementing the authentication/authorization feature on the client side.  I plan on implementing it in the future. 
<br>

But, you can still login on the server side while using an API platform like [Postman](https://www.postman.com/).

## Project setup

### Database Setup
__1. Create a MongoDB Cloud account<br/>__
I used [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_content=rlsapostreg&utm_source=google&utm_campaign=gs_americas_uscan_search_brand_dsa_atlas_desktop_rlsa_postreg&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14383025495&adgroup=129270225274&gclid=Cj0KCQjwhqaVBhCxARIsAHK1tiNjMxbLQCh-LGKSvhYhzat08xXJzcPPP7Mn0koidJ0Be7OSC_i36sUaArLaEALw_wcB) to manage my MongoDB and it's fairly simple to set up.
<br/>
<br/>
__2. Create a MongoDB Atlas cluster__<br/>
When you are prompted to create an organization and a project, if you are a more experienced engineer, you can place your organizations name here to give them access.  As for the project, this will be your projects name.
<br>
<br/>
__3. Configure network access and create a cluster user__<br/>
The [documentation](https://www.mongodb.com/basics/mongodb-atlas-tutorial) is relatively easy to follow I simply went for anything that had the word __FREE__ in it.

__4. Connect to the cluster__<br/>
When choosing a connection method, since I am using the MERN stack I chose NodeJS as the DRIVER and left the version as the default which is probably the most recent version or later.

_--REMEMBER--_<br/>
_Make sure to change the `<username>` and `<password>` and `myFirstDatabase` in the connection string to YOUR username, password, and the name of the database that connections will use by default <br/>(e.g. the name of the db you just created)_
### Environment Setup
### `npm install` 
To install dependencies

### `npm run app`
Runs the app in the development mode.
Open [http://localhost:8082](http://localhost:8082) to view it in your browser.
The page will reload when you make changes.

## General Description
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
