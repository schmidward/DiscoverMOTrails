# REACT Authorization Context


## :technologist: Project Setup

### React frontend
1. Navigate to the `\frontend` folder and run `npm install`.

### Spring Security Backend
1. Open the `\backend` folder in IntelliJ (or another IDEA of your choice). This is required 
for the IntelliJ to recognize the Gradle project to run. 
2. Modify or Add a gitignore
   * Create a `.gitignore` file exists in the `\backend` directory folder if one does not exist. 
   * Add the following statement to the bottom of the file:

```agsl
### JWT TOKEN ###
*src/main/java/com/discovermotrails/securitybackend/constants/SecurityConstants.java
```
3. Create the JWT Key
   * Inside `com.discovermotrails.securitybackend`, create a `constants` package.
   * Inside the `constants` package create an **_interface_** with the file name: `SecurityConstants` with the code below:
     * NOTE: IntelliJ will ask if you want to stage the file to commit to Git. ***DO NOT DO THIS.*** The `.gitignore` ensures this
       file and the authorization key inside of it is not tracked.
   * Don't forget to import the `SecurityConstants` class into both the `JWTTokenGeneratorFilter` and `JWTTokenValidatorFilter`

```agsl
package com.discovermotrails.securitybackend.constants;

public interface SecurityConstants {

    public static final String JWT_KEY = "[FILL WITH YOUR OWN STRING OF RANDOM CHARACTERS]";
    public static final String JWT_HEADER = "Authorization";

}
```
4. Set the runtime environmental variables
   * Open the right hand `Gradle` tab and double click `bootRun`. ***The build will fail, and this is okay.***
   * In the upper right hand corner, next to the play button, click on the dropdown and select `Edit Configurations...`.
   * Establish variables for: `DB_HOSTNAME`, `DB_PORT`, `DB_DATABASE`, `DB_USER`, `DB_PASSWORD`. Eric will provide these
     for you.
     * Having trouble setting environmental variables? [Refer to this documentation from LaunchCode.](https://education.launchcode.org/gis-devops/configurations/02-environment-variables-intellij/index.html)
   * _This backend/frontend combination can also work with locally stored MySQL database instances._
5. The project should compile and run correctly on `http://localhost:8080`.

## :closed_lock_with_key: User Authentication and Authorization
### Overview
This project uses basic authentication for non-logged in users and issues a [JWT (JSON Web Token)](https://jwt.io/introduction/) on a successful
login that the React frontend stores as a cookie. On subsequent requests to a page _secured_ by the backend, the frontend sends the JWT Authorization 
in place of a user having to provide their login credentials again.

Tokens are valid for about 8 hours and are set to expire on both the frontend and backend. 
* Adjust this timing on the backend by updating the `.setExpiration()` method contained in the `JTWTokenGeneratorFilter.java` class.
* Adjust this timing on the frontend by updating `{maxAge: }` in the `setCookie()` method in `auth.jsx`.

JWTs can be stored in localStorage on the frontend, however [this is not encouraged because it comes with security risks.](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage)

### Authentication
The frontend achieves user authentication by making a GET request to `/user`, and passing a username and password using the auth header provided 
by [axios](https://github.com/axios/axios). The backend requires the passed username be an email.
```agsl
      axios.get(LOGIN_URL, {
      auth: {
        username: "user@email.com",
        password: "user-password"
      } 
    }
```

The user's information will be loaded into the frontend's userContext and localStorage if the GET request is successful. An 'Authorization' cookie
is also established with the JWT.

### Registration
New users to the site can register to log in by making a POST request to `/register`. The body of this request should contain a JSON object containing
the fields for displayName, email, password and role (which is assigned automatically by the frontend).
```agsl
{
    "displayName": "User-display-name",
    "email": "user@email.com",
    "pwd": "user-password"
}
```
### Testing 
Once a user is registered into the database, they will be able to log in using the `/login` link in the nav bar. A successful login will return a page listing the user's ID number, username and email.
A failed login will return `Invalid Credentials` on the login form.




