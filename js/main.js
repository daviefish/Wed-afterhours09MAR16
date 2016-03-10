alert ('It works!');
var studentsFor = ["Singh", "Jenny", "Sean", "Adam", "David"];
var studentsWhile = ["Ilya", "Matt", "Lisa", "Erik", "Evan"];
var studentsDavid = ["Conrad", "Christina", "Ian", "Mari", "Meredith"];

for (var i=0; i<studentsFor.length; i++){
	console.log("A student named " + studentsFor[i] + " is in my class.");
}

var index = 0;
while (index<studentsWhile.length){
	console.log("A student named " + studentsWhile[index] + " is also in my class.");
	index++;
}

for (var i=0; i<studentsDavid.length; i++) {
  console.log("A very cool student named " + studentsDavid[i] + " is also in my class.")
}

var greatRappers = ["Andre 3000", "Tupac", "Talib Kweli", "Snoop Dog", "Black Thought"];
for(var i = 0; i < greatRappers.length; i ++) {
  console.log(greatRappers[i] + " can really flow!");
}
