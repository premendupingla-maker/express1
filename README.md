# Express Posts App:
A simple and beginner-friendly CRUD web application built using Express.js and EJS.

# Features:
1. Create new posts
2. View all posts
3. View individual post
4. Edit post
5. Delete post
6. Unique ID using UUID

# Tech Stack:
1. Node.js
2. Express.js
3. EJS
4. UUID
5. Method-Override
6. HTML + CSS

# Routes:
Method  	Route	        Description
GET	        /posts	       Show all posts
GET	        /posts/new	   New post form
POST	    /posts	       Create post
GET	        /posts/	       View post
GET	        /posts//edit	Edit form
PATCH	    /posts/	        Update post
DELETE	    /posts/	       Delete post

# Author
Premendu Manna

# Important Notes:
Uses method-override for PATCH & DELETE
Data is stored in memory (array)
Restart server = data reset