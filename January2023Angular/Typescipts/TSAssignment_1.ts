
function lengthofString(student_name:string[]){
	
    let printStrLength =(student_name: Array<string>) => {
        for(var i=0; i<student_name.length; i++)
        {   console.log("Student Name String is "+student_name[i]+" and its length is : "+student_name[i].length);    }}
    printStrLength(student_name)	
	}
	
	//Test
	var student_name = [
	  "Ram",
	  "Tushar",
	  "Teena",
	  "Rahul ",
	  "Ashneer"
	];
    lengthofString(student_name);
	
	