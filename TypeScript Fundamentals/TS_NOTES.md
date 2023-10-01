Trying to understand TypeScript without first fully learning Node.js or JSON 

 

 

 

Objectives: 

TypeScript Introduction 
 

Installing TypeScript into your project: 

npm init 

install typescript 

install typescript –save-dev 
 

Compiling a TypeScript file to a JavaScript file. 

npx tsc 

npx tsc <filename.ts> 

npx tsc <filename.ts> --outFile <outputFilename.js> 

 

TypeScript Introduction 

 
The purpose of using TypeScript is to create JavaScript with no variable type issues. JavaScript allows the programmer to write code in which the variables and objects can change data types very easily, TypeScript prevents this by allowing the data type to be set when the variable is initialized. 

There are two different parts to using TypeScript. The first id the initial set-up and the second is the compiling which converts the TypeScript file (.ts) to a JavaScript file (.js). 

There are various approaches for installing and using TypeScript. The following steps are intended to guide you through the process when using Node.js and TypeScript. Keep in mind that some steps can be skipped, and all steps can be customized according to your needs. This step-by-step guide serves as a solid starting point, providing a foundational setup that you can adapt to suit your specific project requirements. It's an ideal way to help newcomers get started with TypeScript. 

 

Installing TypeScript in your project 
 

(Optional) Run the command npm init or npm init -y 
 
Running npm init before installing TypeScript (npm install typescript) is a common practice when setting up a Node.js or TypeScript project. Here's why you might want to do this: 
 
Initialize a Project Configuration: The npm init command creates a package.json file, which is essential for managing project dependencies, scripts, and metadata. It establishes a basic project structure and provides a place to specify project details like the project name, version, and description. 
 
Dependency Management: Before you install TypeScript or any other dependencies, it's a good practice to have a package.json file in place. When you install TypeScript later with npm install typescript, it will automatically be added to your project's dependencies in the package.json file. This makes it easier to keep track of and manage your project's dependencies. 
 
Configuration Customization: After running npm init, you can customize the package.json file to include additional information, dependencies, and scripts specific to your project. This is especially important when working on larger projects where you might have complex build and development workflows. 
 
Documentation and Collaboration: A well-documented package.json file provides information about your project that can be useful for collaborators or anyone else who works with your code. It makes it clear what dependencies are required and how to run project-related scripts. 
 
In summary, running npm init before npm install typescript is a recommended practice to establish a project configuration and prepare your project for dependency management and customization. It helps ensure that your project is well-organized and easy to work with as it evolves. 
 
Next step is to run the npm install typescript command, so you might be wondering why you would run the npm init command first. You might not, but if you do it’s because running npm init before installing TypeScript (npm install typescript) is a common practice when setting up a Node.js or TypeScript project. Here's why you might want to do this: 
 
Initialize a Project Configuration: The npm init command creates a package.json file, which is essential for managing project dependencies, scripts, and metadata. It establishes a basic project structure and provides a place to specify project details like the project name, version, and description. 
Dependency Management: Before you install TypeScript or any other dependencies, it's a good practice to have a package.json file in place. When you install TypeScript later with npm install typescript, it will automatically be added to your project's dependencies in the package.json file. This makes it easier to keep track of and manage your project's dependencies. 
Configuration Customization: After running npm init, you can customize the package.json file to include additional information, dependencies, and scripts specific to your project. This is especially important when working on larger projects where you might have complex build and development workflows. 
Documentation and Collaboration: A well-documented package.json file provides information about your project that can be useful for collaborators or anyone else who works with your code. It makes it clear what dependencies are required and how to run project-related scripts. 
In summary, running npm init before npm install typescript is a recommended practice to establish a project configuration and prepare your project for dependency management and customization. It helps ensure that your project is well-organized and easy to work with as it evolves. 
 

Run command install typescript or install typescript –save-dev 
 
The choice between npm install typescript and npm install typescript --save-dev depends on your project's specific requirements and how you intend to use TypeScript.  
 
npm install typescript:  
 
Use this command if TypeScript is a core part of your project, and you want it to be a direct dependency. 
When you install TypeScript without the --save-dev flag, it will be added to the dependencies section of your package.json file. 
This indicates that TypeScript is required for the runtime operation of your project and should be installed when someone else uses your package. 
 
npm install typescript --save-dev: 
 
Use this command if TypeScript is only needed during development, for tasks like transpiling TypeScript files to JavaScript or running TypeScript-related build scripts. 
When you install TypeScript with the --save-dev flag, it will be added to the devDependencies section of your package.json file. 
This indicates that TypeScript is a development dependency and is not required for the runtime operation of your project. It's typically used for development and build-related tasks. 
In many cases, when you're building a TypeScript project, you would want to install TypeScript as a development dependency (--save-dev) because it's primarily used during development and build processes. However, if your project is a library or module intended to be used by others, you might want to install TypeScript as a direct dependency (without --save-dev) so that it's included when someone installs your package. 
In summary, the choice between npm install typescript and npm install typescript --save-dev depends on whether TypeScript is a runtime requirement for your project or if it's only used during development and build processes. 
 
 
 
Running npm init –y 
 
 
The main difference between npm init and npm init -y is the level of user interaction and input required when initializing a new Node.js project. 
 
npm init: 
 
When you run npm init without any flags, it starts an interactive process that prompts you for various project details, such as the project name, version, description, entry point, test command, and more. 
You will be asked to provide input for each of these fields, and you can customize the project configuration by answering the prompts. 
It allows you to create a package.json file with customized values based on your input. 
 
npm init -y: 
 
When you run npm init -y with the -y or --yes flag, it skips the interactive prompts and automatically accepts default values for all the fields in the package.json file. 
This means that it will create a package.json file with default values without asking you for any input. It's a quick way to initialize a project with minimal configuration. 
 
In summary, npm init provides an interactive way to customize your project's package.json file by asking you for input, while npm init -y is a shortcut that automatically generates a package.json file with default values, making it faster to set up a new project when you don't need to customize the initial configuration. 
 
 
For a more complete understanding you will have to study up on Node.js and JSON files. 
 

 

Compiling a TypeScript file to a JavaScript file. 

 

After you have created your TypeScript (.ts) file, you will need to compile the TypeScript to JavaScript for the webpage or web app to be used in a browser. 
 

To do this you will need to run the command npx tsc. It can be run by itself, with a specified input file npx tsc <filename.ts>, or with a specified input and output file npx tsc <filename.ts> --outFile <outputFilename.js> 

If you have a tsconfig.json file in your project, you can simply run: npx tsc  

This will compile all TypeScript files in your project based on the configuration settings in tsconfig.json.  
 
If you want to compile a specific file, you can specify the file name: npx tsc <filename.ts> 
 

If you don't have a tsconfig.json file, you can compile a TypeScript file to JavaScript by specifying the TypeScript file and the output JavaScript file: c 

This command will compile a .ts and create .js in the same directory. 

  

Check the Output: After running the TypeScript compiler, you should have a JavaScript file (e.g., app.js) in the same directory as your TypeScript file. This JavaScript file contains the transpiled code that can be executed in a Node.js environment or a web browser. 

 

That's it! You've successfully compiled a TypeScript file into a JavaScript file. You can now use the generated JavaScript file as needed for your project. 