This is a simple RESTful API built using Express and Node JS that provides user authentication and profile management. The API uses JWT (JSON Web Token) for secure user authentication, and MySQL as the database for persistence.

Features: User Registration: Register a new user with name, email, password, and role. User Login: Login using email and password to receive a JWT token. Protected Routes: Access user profile and update profile details with JWT-based authentication. Profile Management: Retrieve and update user profile information.

API End points:

# users/register:[POST]:

1. Firstly imported a function "createPool" from Sql module and initialised the variable "pool" and passed the required arguments masked in  .env file to setup the database.
2. Exported the module "pool" from dabase.js file to user_service.js file. Defined a create function that has two arguments, data and a call back function.
3. Used SQL 'query' method  onto pool module to insert the values given by the user in the from of data which was one of the arguments of the create function.
4. For the call back Function which has three arguments, error, results and fields, we use the first two arguments. one for catching the error and displaying it and the other
5. argument to display the result of the execution of the function.
6. Exported the "create" module to the user_controller.js where the user requests and the corresponding responds are handled.
7. Defined the function createUser to pass the middleware arguments, req and res. Stored the user req in const body variable and the password provided by the user is encrypted by genSaltSync and hashSync methods imported from bcrypt module.
8. In create function, we passed the body variable and a call back function to handle the error and the results.
9. At once the controller for createUser function is established, we export it to user_router file wherein we created a router using POST request method and recognised it
in our app.js file by importing the router.
10. From our app.js file, the router for users/register has been setup and renedered on the server with the given port.

# users/login:[POST]:

1. The database is well setup and we stored the data given by the user as each row in the table.
2. 'getUserByUserEmail' function is defined in the user_service which has two arguments email and a callBack func. The value for the email argument is passed by the query result from the table.
3. The error and the results arguments of the callBack func. catches the error and the result of the query respectively.
4. 'getUserByUserEmail' function is exported in the user_controller where in we defined the login function which has two arguments req and res.
5. req is the login data provided by the user and it is stored in const body variable.
6. 'getUserByUserEmail' controller has two arguments, one is email provided by the user and a callback parameter to check if the email provided by the user is valid.
7. To authenticate the user's password for the respective email ID, we make use of compareSync function to check if the given password matches with the password provided by the user when registered.
8. if the password matches, we create a JWT from the sign function inherited from 'jsonwebtoken' module which has the pass key and the expiresIn properties as its arguments.
9. At once the user is authenticated and JWT code is generated, we return the token to the user.
10. if the authentication fails, we return the statement, "invalid email or password" to let the user know the login is unsuccessful.
11. At once the controller for login function is established, we export it to user_router file wherein we created a router using POST request method and recognised it
in our app.js file by importing the router.
12. From our app.js file, the router for users/login has been setup and rendered on the server with the given port.  
     
# users/profile:[GET]: 
1. getUsers function is defined which has the callBack as its argument. The callBack leads to query which will return the users in the table and the parameters, error and results to catch and return the error and results respectively.
2. getUsers function is exported to user_controller.
3. getUsers controller is defined which has req and res, the user passes the JWT token as the authentication and the res argument of the controller ensures that the results has the users data from the database.
4. If in case, the JWT token is invalid, the res returns a err in the console.
5. At once the controller for getUsers function is established, we export it to user_router file wherein we created a router using GET request method and recognised it
in our app.js file by importing the router.
6. From our app.js file, the router for users/profile has been setup and rendered on the server with the given port.

# users/update:[PUT]:
1. updateData function is defined which has the data and the callBack arguments. The query method applied on the pool module is used to update changes on user data stored in the database.
2. The data provided by the user is stored in the data array and it's been updated in our database. The error and the results parameter of the callBack are used to catch and return the error statements and the results of the query respectively.
3. 'updateUser' controller has the user provided data and it's been assigned to the const body variable. 
4. if in case, the user has provided an update to the password, it will be encrypted once again using genSaltSync and hashSync functions and it will be stored in our database.
5. if the provided data is inconsistent, the data will not get stored in results and so the callBack parameter will catch the error and returns "failed to update users"    
6. if the data is consistent, it get updated to the database and the res argument of the callBack will return the statement, "updated successfully".
7. At once the controller for updateUser function is established, we export it to user_router file wherein we created a router using PUT request method and recognised it
in our app.js file by importing the router.
8. From our app.js file, the router for user/update has been setup and rendered on the server with the given port.




    
   
 


 
