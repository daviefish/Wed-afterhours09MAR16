alert ('It works!');
var studentsFor = ["Singh", "Jenny", "Sean", "Adam", "David"];
var studentsWhile = ["Ilya", "Matt", "Lisa", "Erik", "Evan"];
var studentsDavid = ["Conrad", "Christina", "Ian", "Mari", "Meredith"];
var seansStudents = ["Philco", "Matt", "Conrad", "Kate", "John"];

for (var i=0; i<studentsFor.length; i++){
	console.log("A student named " + studentsFor[i] + " is in my class.");
}

var index = 0;
while (index<studentsWhile.length){
	console.log("A student named " + studentsWhile[index] + " is also in my class.");
	index++;
}

for (var i=0; i<studentsDavid.length; i++) {
  console.log("A very cool student named " + studentsDavid[i] + " is also in my class.");
}

for (var i=0; i<1; i++) {
//	console.log("I am part of developing the future.  My name is " + seansStudents[i] + " and I enjoy infinite loops!");
	console.log("My name is " + seansStudents[0] + " and I have great hair!");
	console.log("My name is " + seansStudents[1] + ".  I am a great developer!");
	console.log("My name is " + seansStudents[2] + " and I will make you work to figure out your problem!");
	console.log("My name is " + seansStudents[3] + ".  I will get your energy up, and you pumped for the lesson!");
	console.log("My name is " + seansStudents[4] + ".  I help create great arrays like this one!  B-)");
}