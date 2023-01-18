	
1.	
// Check lenth of String 

function lengthofString(student_name:string[]){
	

	var arrow_ans = student_name.map( n => n.length );

	return arrow_ans;
	
	}
	
	//Test
	var student_name = [
	  "Ram",
	  "Tushar",
	  "Teena",
	  "Rahul ",
	  "Ashneer"
	];
	console.log(student_name);
	console.log(lengthofString(student_name));
	
	
	

2. // sort Number

function sortId(id:number[]){
	return id.sort((a, b) => a - b);
}

//Test//

let id:number[]=[12,22,33,4,43,42];
console.log(sortId(id));

3. // check Palindrome 

function checkPalindrome(string) {

    const len = string.length;
    
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

//Test
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);

4.

class item{
    public itemId:number;
	private itemName:string; 
	public itemPrice:number;
    private itemCategory:string; 
   constructor(itemId:number,itemName:string,itemPrice:number,itemCategory:string)    
	{        
		this.itemId=itemId; 
		this.itemName=itemName; 
		this.itemPrice=itemPrice; 
		this.itemCategory=itemCategory;  		
   }    
  display=()=>{  
  console.log("itemId="+this.ItemId +",itemName=" +this.ItemName +",ItemPrice=" +this.itemPrice +",ItemCategory=" +this.itemCategory);    }

}
//Test
let item:item=new item(1,'Mobile',20000,'Phone');
item.display();



