# DiscoverMOTrails 

---
## Project Setup

### React frontend
1. Navigate to the `\frontend` folder and run `npm install`.

### Spring Security Backend
1. Open the `\backend` folder in IntelliJ (or another IDEA of your choice). This is required 
for the IntelliJ to recognize the Gradle project to run 
2. Set environmental variables
   * Open the right hand `Gradle` tab and double click `bootRun`. ***The build will fail, and this is okay.***
   * In the upper right hand corner, next to the play button, click on the dropdown and select `Edit Configurations...`
   * Establish variables for: `DB_HOSTNAME`, `DB_PORT`, `DB_DATABASE`, `DB_USER`, `DB_PASSWORD`. Eric will provide these
for you.
   * Create a `constants` package inside `com.discovermotrails.securitybackend`.
   * Inside `constants` create an _interface_ with the file name: `SecurityConstants` with the following code. ***DO NOT ADD THE FILE TO GIT TO PROTECT YOUR JWT KEY***
```agsl
package com.discovermotrails.securitybackend.constants;

public interface SecurityConstants {

    public static final String JWT_KEY = "[FILL WITH YOUR OWN STRING OF RANDOM CHARACTERS]";
    public static final String JWT_HEADER = "Authorization";

}
```
   * Add a `.gitignore` file to the `\backend` directory folder and add the following to the bottom:

```agsl
*src/main/java/com/discovermotrails/securitybackend/constants/SecurityConstants.java
```
 



