//your JS code here. If required.
let Promise1 = new Promise((resolve,reject) =>{
	let time1 = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
	setTimeout(() => {
		resolve(time1);
	}, time1);
});
let Promise2 = new Promise((resolve,reject) =>{
	let time2 = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
	setTimeout(() => {
		resolve(time2);
	}, time2);
});
let Promise3 = new Promise((resolve,reject) =>{
	let time3 = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
	setTimeout(() => {
		resolve(time3);
	}, time3);
});

Promise.all([Promise1, Promise2, Promise3]).then((values) => {
	let maxTime = Math.max(...values);
	document.getElementById("output").innerHTML = "";
  values.forEach((item,index) => {
       document.getElementById("output").innerHTML += `<tr>
          <td>Promise ${index+1}</td>
          <td>${item/1000}</td>
        </tr>`
  });
	document.getElementById("output").innerHTML += `<tr>
          <td>Total</td>
          <td>${maxTime/1000}</td>
        </tr>`
});
