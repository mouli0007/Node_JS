	 
	 ######### Built in Modules ##############
	 
   For accessing and using the modules related to operating system
	
	 OS
	 Path
	 FS
	 HTTP
   
   ########## OS Module #############
   
   const os = require("os");

console.log(os.uptime());

const obj = {
  name: os.hostname(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(obj);
