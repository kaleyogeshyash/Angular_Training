// sort Number

function sortId(id:number[]){
	return id.sort((a, b) => a - b);
}

//Test//

let id:number[]=[12,22,33,4,43,42];
console.log(sortId(id));