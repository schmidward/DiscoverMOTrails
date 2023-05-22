# DiscoverMOTrails 


## :technologist: Project Setup

### React frontend
1. Navigate to the `\frontend` folder and run `npm install`.

### Spring Security Backend
1. Open the `\backend` folder in IntelliJ (or another IDEA of your choice). This is required 
for the IntelliJ to recognize the Gradle project to run. 
2. Modify or Add a gitignore
   * If no `.gitignore` file exists in the `\backend` directory folder, create one. 
   * Add the following statement to the bottom of the file:

```agsl
### JWT TOKEN ###
*src/main/java/com/discovermotrails/securitybackend/constants/SecurityConstants.java
```
3. Create the JWT Key
   * Inside `com.discovermotrails.securitybackend`, create a `constants` package.
   * Inside the `constants` package create an **_interface_** with the file name: `SecurityConstants` with the following code:
     * NOTE: IntelliJ will ask if you want to stage the file to commit to Git. ***DO NOT DO THIS.*** The `.gitignore` ensures this
       file and the authorization key inside of it is not tracked.

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

---
 



