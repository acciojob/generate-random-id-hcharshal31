function makeid(l) {
  for(let i = 0; i < l; i++){
	  let characters = const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	  let result = "";
	  let randomIndex = Math.floor(Math.random() * characters.length);
	  result += characters[randomIndex];
  }
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
