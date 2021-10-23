"# nodeJs" 

# --------- `node-start` ---------- 
# get start and print hello world
* start nodeJs using following command 'npm init'. and press enter again and again. 
* we can also do the same thing using 'npm -y' for shortcut way. 
* install express server 'npm install express --save'
* create a file name 'index.js'
* declare express, app and port number. Write a get method simply just showing a message when run server.
* run(node index.js) the file like as any javascript file. You will see the hello world message from app.get method.
* Right now our server will not show the updated data if we change anything in the function. We need to stop the server and open server again.
* To avoid this problem I install 'nodemon' by using following command- 'npm install -g nodemon'. Here I use g for install it globally.
* in the package.json file I added two properties 
    `"start": "node index.js",
    "start-dev": "nodemon index.js",`
* 'npm run start-dev' So now we will see the changed data if we change anything in our function.

# get hard code data.
* I don't have any database right now. So I use hard code data but I will use database soon.
* I make some users in the 'user' variable. Its an array data. I will show this in '/users' route. As it is a get users data so I use app.get method. Taking a req and res as parameters. and send the response(res.send(users)) to the client and client can see all the users data.

# get dynamic data.
* In the above we see all the users data and now I want to show dynamic data. Like specific users data. '/users/:id' in this route 'id' is users id. This id is for the specific users. '/users/3' in this route we will see users data which user has id==3.
* Its also a get method. But we have to receive the id which was typed in the url. 