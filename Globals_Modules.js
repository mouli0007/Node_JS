
Topics ! 

  Globals  - No window ! ( Window property will not be available in Node.js)
  
  advantage => You can access any of your files in your application
   
   
   __dirname  - pathto current directory
   __filename - file name
   require - function to use modules(common js)
   module - info about current module(file)
   process - info about env where the program is being executed
   
   
   ################ Modules in Node JS ###################
   
   
   #### For Exporting the modules 
   
   Example  ! 
   
     const john = "John"
	 const peter = 'peter'
	 
	 module.exports= {john,peter}
	 
	 
   #### For importing the modules
	
     const name = require('./import-file-name')	
	 console.log(name)
	 const {john,peter} = require('./import-file-name')
	 console.log(john,peter)
	 
