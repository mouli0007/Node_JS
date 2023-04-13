	 
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

############## File-Path###################

// Interacting with File path

// Getting a seperate path of the current file
const path = require("path");
console.log(path.sep);

// Getting a specific filepath
const filePath = path.join("/content", "sub-folder", "test.txt");
console.log(filePath);

// Getting a specific file
const base = path.basename(filePath);
console.log(base);

// Getting the whole system directory path with the file path
const absolute = path.resolve(__dirname, "content", "sub-folder", "text.txt");
console.log(absolute);
console.log(__dirname);
