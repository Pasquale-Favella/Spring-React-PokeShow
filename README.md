# React and Spring Boot Maven starter Template

![alt text](https://user-images.githubusercontent.com/62385965/144881389-1befd6c4-4d00-4710-aaa2-42a4189fcc42.PNG)

## Overview

Use this project to quickly create a React and Sprint boot application. Single project contains backend and frontend folders.

This project is pre-configured with below libraries

- Backend Spring Boot:
  - DevTools
  - Lombok

- Frontend React:
  - React router dom
  - Axios

### How to reuse this project?

* Clone this repo.
* Rename project folder name to what ever the new project you want.
* Edit pom.xml, update \<artifactId> and \<name> with proper project names.

### Contents of this project
- **pom.xml**: Maven POM file
- **src**: Java/Spring boot source folder (backend)
- **ui**: React files (frontend)

### Compile and Run project

`mvnw clean compile`

Builds Spring and ReactJs files

`mvnw spring-boot:run`

Runs application. Spring uses default 8080 port and React uses 3000 port.


Access application at http://localhost:3000


### Package application

`mnvw install`

Builds Spring and React JS applications, copies UI related files into target/classes/public folder.
Creates a Jar file in target folder, this contains both backend and front end.

### Run the application

Go into target folder and execute below command to run the application

`java -jar <app>.jar`

