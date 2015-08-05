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

``yo angular`

This starts the generator in the current working directory. If a project was generated in a parent directory make sure that there is no .yo-rc.json file, if there is one all new files will be generated relative to this.

