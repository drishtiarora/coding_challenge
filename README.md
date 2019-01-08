    # XM Code Challenge

This code challenge is an opportunity to demonstrate your knowledge of Angular2+ and solid web development patterns. This repo contains a skeleton Angular 5 app with Bootstrap 3 styling.

## Your challenge

Fetch a list of users from https://jsonplaceholder.typicode.com/users and display them in a table.

### Requirements
- The table should inclcude their full name, contact info (email, address, and phone number) and company name.
- Please put the company name in ALL CAPS.
- Please only display the first five digits of the zipcode.
- Do not show any users who have a phone number with an extension (e.g., phone number ending in x1234)
- Clicking on the "Full Name" header in the table should sort the users by last name from A-Z. Clicking on it again should sort by last name from Z-A.

## Please do:

- Create a service to manage fetching and parsing the data
- Use ES6/Typescript classes to model any data structures

## Please don't:

- Add any more npm packages, libraries, or plugins
- Worry about routing. A single Angular page is fine.

# Notes on this seed project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
