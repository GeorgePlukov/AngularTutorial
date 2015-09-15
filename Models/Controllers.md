##Controllers
A controller contains the business logic for one view in your web application. It should be as basic as possible, and should not try and act as the model for your data. This means that some other device should be used to make requests to actially store your data (factories, we will learn about these after). 

##What a controller is
The most common use for a controller is to define functions that can be called from your view to perform specific tasks.

## The controller Do's and Dont's

####Do's

####Dont's
1. DOM manipulation
	- This is problem the most common thing that you will break, although DOM manipulations should be done inside directives.
	- The main reason for trying to prevent DOM manipulations inside controllers is because they are difficult to test. They work differently on certain systems and platforms and are better to be totally encapuslated.
2. Input Formatting
	- This should be done using angulars form controls
3. Output Filtering
	- Angular has a built in out put filtering system which should be used












