# AngularTutorial
This is a tutorial for how to start an angular project from the ground up. It will take you through creating and configuring a project, launching your web app and the basics of AngularJs. This tutorial assumes that you have a basic knowledge of html and css, knowing some javascript will help but the relevant portions will be covered. 

## Getting started

####Installing Node
If you dont have Node.js installed (we will be using npm) go to https://nodejs.org/download/ and download/install the relevant version for your computer.

Once Node.js is installed type

``npm -v``


into your command prompt to make sure npm installed properly. The typical response to this will be something like

``2.13.0``

If you installed Node and the console response is ``command not found`` from the npm command try closing and reopening your console and trying again.

####Installing Yo
Yoemann is a project generator for many different types of web-apps. In this tutorial we will be using the angular generator. To install yo and its dependencies run

``npm install -g yo bower grunt-cli gulp``

To install the angular generator for Yo simply run this command

``npm install -g generator-angular``

##Generating our first project
Using the Yo angular generator is extremely easy. To begin run 

``yo angular``

This starts the generator in the current working directory. If a project was generated in a parent directory make sure that there is no .yo-rc.json file, if there is one all new files will be generated relative to this.

####Customizing Your project
Now there are some options the angular generator that are up to personal preference. 

1. Sass or css
  * In this tutorial we will say yes to sass but will mostly be using basic css concepts.
2. Bootstrap
  * Bootstrap can be your best friend in terms of styling, especially for quick projects. Yes!
3. Sass Bootstrap? 
  * This doesnt really matter unless you are planning on using it, I say Yes. Sometimes if you say no bootstrap wont work immediatley after generation.

There is a few more options after selecting the guidlines for the generated project. There is a list of 6 options, I leave them all in the default setting except for angular-cookies and angular-resource which I disable. To disable them navigate using the arrow keys and then press space.

####Running your projects
Now that the project has been generated you should be able to start the server by running the command

``grunt serve`` or ``sudo grunt serve``

This command opens the current version of the project in your default browser. 

####Customizing your project
Now that you know how to run the project editing the files and making the site your own is easy. All of the files are in the app folder of the project. Check out some of the examples I've made for how different Angular functions work.




