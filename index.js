function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

var word_guess = "";
var word_guess_Random=Math.ceil(Math.random()*(country_list.length-1));
	word_guess = country_list[word_guess_Random];

var word_guess_DLWS = 0;

word_guess = word_guess.toUpperCase();

var word_guess_Length = word_guess.length;

var word_guess_Temp = "";

var word_guess_letter = new Array(32);

var count = 0;

var fail = 0;

var letter_Index = 0;

var progress = 0;

for (i=0; i<word_guess_Length; i++)
{
	if (word_guess.charAt(i) == " ")
	{
		word_guess_Temp = word_guess_Temp + " ";	
	} else {
		word_guess_Temp = word_guess_Temp + "-";
		word_guess_DLWS++;
	}
}

function show_word() {
	
	document.getElementById("word_guess").innerHTML = word_guess_Temp;
	
	alphabet();

}

window.onload = show_word;

function clickMe(letter) {

    for (i=0; i<word_guess_Length; i++) {

		if (word_guess.charAt(i) == letter) {

			count++;
			progress++;
			letter_Index = word_guess_letter.indexOf(letter);
			var letterid = "lett" + letter_Index;
			word_guess_Temp = setCharAt(word_guess_Temp,i,letter);
			document.getElementById("word_guess").innerHTML = word_guess_Temp;
			document.getElementById(letterid).onclick = " ";
			document.getElementById(letterid).style = "border-color: #14EC14; cursor: default; pointer-events: none;";
		}
	}

    if (count <= 0) {
        count = 0;
        fail++;
        letter_Index = word_guess_letter.indexOf(letter);
        var letterid = "lett" + letter_Index;
        document.getElementById("hangman").innerHTML = "<img src='Images/" + fail + ".png' alt='LEVEL " + fail + "'>";
        document.getElementById(letterid).onclick = " ";
        document.getElementById(letterid).style = "border-color: red; cursor: default; pointer-events: none;";
    } else {
        count = 0;
    }
    
    if (fail >= 8)
    {
    document.getElementById("letters").style = "margin: 0 auto; padding: 0;";
    document.getElementById("letters").innerHTML = "<div align='center' class='end' ><h1 style='color: red;'>GAME OVER!</h1><button class='button' onClick='window.location.reload()'>Restart!</button></div>";
    document.getElementById("key").innerHTML = key;
    }
    
    if (progress >= word_guess_DLWS) { 
    document.getElementById("letters").style = "margin: 0 auto; padding: 0;";
    document.getElementById("letters").innerHTML = "<div align='center'><h1 class='end' style='color: green;'>CONGRATS! </h1><button class='button' onClick='window.location.reload()'>Restart!</button></div>";		
    }
}

function alphabet() {
	var htmlAlphabetPart1 = "<div class=letter id=lett";
	var htmlAlphabetPart2 = " onclick=clickMe('";
	var htmlAlphabetPart3 = "')> ";
	var htmlAlphabetPart4 = " </div>";
	var abcd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var abcdLength = abcd.length;
	var ALPHA = "";
	
	for (i=0; i<abcdLength; i++)
	{
		var htmlAlphabet = htmlAlphabetPart1 + i + htmlAlphabetPart2 + abcd.charAt(i) + htmlAlphabetPart3 + abcd.charAt(i) + htmlAlphabetPart4;
		ALPHA = ALPHA + htmlAlphabet;
		document.getElementById("letters").innerHTML = ALPHA;
		word_guess_letter[i] = abcd.charAt(i);
	}
}