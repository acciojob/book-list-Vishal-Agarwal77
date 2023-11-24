//your JS code here. If required.
const form=document.getElementsByClassName("form-group")[0];
const title=document.getElementById("title");
const author=document.getElementById("author");
const isbn=document.getElementById("isbn");
const table_body=document.getElementById("book-list");
form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	let col2=document.createElement("td");
	let col3=document.createElement("td");
	let col4=document.createElement("td");
	let btn=document.createElement("button");
	col1.innerText=`${title.value}`;
	col2.innerText=`${author.value}`;
	col3.innerText=`${isbn.value}`;
	btn.innerHTML=`<i class="fa-solid fa-trash"></i>`;
	btn.className="delete";
	// console.log(btn);
	col4.appendChild(btn);
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
	row.appendChild(col4);
	table_body.appendChild(row);
	let del=document.getElementsByTagName("i");
	for(let item of del){
		item.addEventListener("click",()=>{
			let node=item.parentNode.parentNode;
			node.remove();
		})	
	}
})