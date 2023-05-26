"# nodeJs" 

# --------- `node-start` ---------- 
# get start and print hello world
* start nodeJs using following command 'npm init'. and press enter again and again. 
* we can also do the same thing using 'npm init -y' for shortcut way. 
* install express server 'npm install express --save'
* create a file name 'index.js'
* declare express, app and port number. Write a get method simply just showing a message when run server.
* run(node index.js) the file like as any javascript file. You will see the hello world message from app.get method.
* Right now our server will not show the updated data if we change anything in the function. We need to stop the server and open server again.
* To avoid this problem I install 'nodemon' by using following command- 'npm install -g nodemon'. Here I use g for install it globally.
* in the package.json file I added two properties 
    "start": "node index.js",
    "start-dev": "nodemon index.js",`
* 'npm run start-dev' So now we will see the changed data if we change anything in our function.

# get hard code data.
* I don't have any database right now. So I use hard code data but I will use database soon.
* I make some users in the 'user' variable. Its an array data. I will show this in '/users' route. As it is a get users data so I use app.get method. Taking a req and res as parameters. and send the response(res.send(users)) to the client and client can see all the users data.

# get dynamic data.
* In the above section we see all the users data and now I want to show dynamic data. Like specific users data. '/users/:id' in this route 'id' is users id. This id is for the specific users. '/users/3' in this route we will see users data which user has id==3.
* Its also a get method. But we have to receive(req.params.id) the id which was typed in the url. as we a have users array so we just get the user data from the users array using array slice method or array index method. Then pass it to the app.send(data)

# search method 
* Its very easy to implement this. receive the search text by (req.query.search) then filter this text from the data and pass the data to app.send(data)

# connect react app and get data from nodeJs server
* I create a new react app named 'crud-app'
* In the app.js I write some code to fetch users data from our nodeJs server using useState and useEffect hook.
* But It did not work properly and give an error. Here is origin issue. Our react app and nodeJs server are two different origin. So we need to do something for this. And I will use 'cors' for cross-origin requests.
* I install 'npm install cors'
* then add two lines into index.js file -
    - const cors = require('cors'); // call cors origin.
    - app.use(cors()); // use cors origin for this app.
* Now We can see the user data in our react application. I have the users data and do map function and show all users data into the react application ui.

# -------- `POST` method ---------- 
* This is time user will post something to the backend. I use a html form that have some input data where user will give user data and that data will come to the backend side. 
* Need useRef hooks for receiving input value. Make a handler function(handleAddUser) for onSubmit data.
* add following line into index.js file (app.use(express.json());)
* for passing the data to the backend from frontend I write a fetch method. In this fetch I added a url as usual but in this time I added some property. 
    - method: 'post',
    - headers: {
        'content-type': 'application/json'
      },
    - body: JSON.stringify(newUser)
* then this data will come to the backend server and sending a response data to the frontend. 


# ----------- `node-with-mongodb` --------------- 
* mongodb database 
* npm i express cors mongodb  // install required packages.
* connect mongoDb database in my project.
* 

--------------- ######## ----------------- 
- install node 'npm init' on 'npm init -y' 
- install express 'npm install express --save'
- install nodemon 'npm install -g nodemon' (optional, if already installed it globally then ignore it)
- write two parameters into the package.json file. (start, start-dev)
- install cors 'npm install cors'
- all install in one command (npm install express mongodb cors dotenv)
- create react app
- index.js (express, cors, app,  port, use cors, use express.json)


---------- get -------------- 
- app.get('url', req, res){
    res.send(data or message.)
}
- app.listen(port, anonymous function() {
    listening message from port connection.
})

---------- post -------------- 
- make a form for post input data into react 
- write some useRef hooks for name(nameRef), email(emailRef) and others which I want to give input data.
- make a onSubmit function for receiving input data.
- in the constant variables save all input data ...ref.current.value
- make an object of data. fetch backend uri and post the data into body attribute.
- backend server receive the data and pass it to the database and back a response to the frontend server.