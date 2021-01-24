console.log("hej från jan8");

// for default scripts such as start and test you dont need to use run, 
//if you use names other than default scripts you need to use npm run instead
// npm run thisScript for example. 




const fs = require("fs"); //nodes own modules, not third party. 
                          //no need to use npm install package to make use of features.
                          // npm i package  installs package in dependencies
                          // npm i --save-dev package to install package in dev dependencies
                          // devDependencies are for stuff used in the development of the product
                          // but isnt used in the product.

                          // its possible to use modern javascript syntax import instead of require.
                          // import fs from "fs" es6 syntax BUT not sure if possible with nodejs as of yet




fs.readFile(path, callback) 