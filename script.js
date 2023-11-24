//your JS code here. If required.
const form=document.getElementsByClassName("form-group")[0];
const title=document.getElementById("title");
const author=document.getElementById("author");
const isbn=document.getElementById("isbn");
const table_body=document.getElementById("book-list");
form.addEventListener("submit",()=>{
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	col1.innerText=`${title.value}`;
	row.appendChild(col1);
	let col2=document.createElement("td");
	col2.innerText=`${author.value}`;
	row.appendChild(col2);
	let col3=document.createElement("td");
	col3.innerText=`${isbn.value}`;
	row.appendChild(col3);
	console.log(row.innerHTML);
	table_body.appendChild(row);
	console.log(table_body);
})