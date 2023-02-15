# Code examples for Fullstack Vue

## Setup

Please refer to the second chapter in the book for instructions on setting up your environment with Node & npm.

## Installing packages for all projects

You can install all the packages for all the projects up front, saving you time in the future. To do so, from this directory:

```
npm i
npm run install-all
```

Unless you have a quantum computer connected directly to an Amazon data center, this task will take a long time to complete.

## Running the code

See the respective `README.md` for each project.


If there were any dynamic changes made to a v-for list without the key attribute, Vue will opt
towards changing data within each element instead of moving the DOM elements accordingly. By
specifying a unique key attribute to each iterated item, we’re now telling Vue to reorder elements if
needed
###
vue
Vue.createApp(options)
app.component("name", options)

