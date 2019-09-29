function game(){
	//where my ships are
	var ship1 = parseInt(prompt("where's your ship??"));
	var ship2 = parseInt(prompt("where's your ship??"));
	var ship3 = parseInt(prompt("where's your ship??"));
	var ship4 = parseInt(prompt("where's your ship??"));
	var ship5 = parseInt(prompt("where's your ship??"));
	var ship6 = parseInt(prompt("where's your ship??"));
	var ship7 = parseInt(prompt("where's your ship??"));
	//where they're ships are
	var comp1 = 3;
	var comp2 = 3;
	var comp3 = 3;
	var comp4 = 3;
	var comp5 = 3;
	var comp6 = 3;
	var comp7 = 3;
	//2 counters showing the score
	var countera = 0;
	var counterb = 0;
	//run these loops until comp is different
	while(comp1 === comp2 || comp1 === comp3 || comp1 === comp4 || comp1 === comp5 || comp1 === comp6 || comp1 === comp7 || comp2 === comp3 || comp2 === comp4 || comp2 === comp5 || comp2 === comp6 || comp2 === comp7 || comp3 === comp4 || comp3 === comp5 || comp3 === comp6 || comp3 === comp7 || comp4 === comp5 || comp4 === comp6 || comp4 === comp7 || comp5 === comp6 || comp5 === comp7 || comp6 === comp7){	
		comp1 =	Math.round(Math.random() * 64);
		comp2 = Math.round(Math.random() * 64);
		comp3 = Math.round(Math.random() * 64);
		comp4 = Math.round(Math.random() * 64);
		comp5 = Math.round(Math.random() * 64);
		comp6 = Math.round(Math.random() * 64);
		comp7 = Math.round(Math.random() * 64);
	}
	// loop continues till these conditions are met (if i hit their ship they hit mine)
	while(countera<7 || counterb<7){
		//my guesses
		var input = parseInt(prompt("Enter a number from 1 to 64"));
		//computer guesses
		var guess = parseInt(Math.round(Math.random() *64) +1);
		//If my guess equals their ship position=Hit
		if(input == comp1 || input == comp2 || input == comp3 || input == comp4 || input == comp5 || input== comp6 || input == comp7){
			if(input == 1){
				document.getElementById("ones").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 2){
				document.getElementById("twos").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 3){
				document.getElementById("threes").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 4){
				document.getElementById("fours").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 5){
				document.getElementById("fives").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 6){
				document.getElementById("sixs").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 7){
				document.getElementById("sevens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 8){
				document.getElementById("eights").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 9){
				document.getElementById("nines").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 10){
				document.getElementById("tens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 11){
				document.getElementById("elevens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 12){
				document.getElementById("twelves").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 13){
				document.getElementById("thirteens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 14){
				document.getElementById("fourteens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 15){
				document.getElementById("fifteens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 16){
				document.getElementById("sixteens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 17){
				document.getElementById("seventeens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 18){
				document.getElementById("eighteens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 19){
				document.getElementById("nineteens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 20){
				document.getElementById("twenties").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 21){
				document.getElementById("twentyones").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 22){
				document.getElementById("twentytwos").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 23){
				document.getElementById("twentythrees").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 24){
				document.getElementById("twentyfours").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 25){
				document.getElementById("twentyfives").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 26){
				document.getElementById("twentysixs").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 27){
				document.getElementById("twentysevens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 28){
				document.getElementById("twentyeights").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 29){
				document.getElementById("twentynines").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 30){
				document.getElementById("thirtyies").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 31){
				document.getElementById("thirtyones").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 32){
				document.getElementById("thirtytwos").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 33){
				document.getElementById("thirtythrees").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 34){
				document.getElementById("thirtyfours").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 35){
				document.getElementById("thirtyfives").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 36){
				document.getElementById("thirtysixs").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 37){
				document.getElementById("thirtysevens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 38){
				document.getElementById("thirtyeights").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 39){
				document.getElementById("thirtynines").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 40){
				document.getElementById("fourties").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 41){
				document.getElementById("fourtyones").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 42){
				document.getElementById("fourtytwos").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 43){
				document.getElementById("fourtythrees").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 44){
				document.getElementById("fourtyfours").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 45){
				document.getElementById("fourtyfives").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 46){
				document.getElementById("fourtysixs").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 47){
				document.getElementById("fourtysevens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 48){
				document.getElementById("fourtyeights").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 49){
				document.getElementById("fourtynines").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 50){
				document.getElementById("fifties").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 51){
				document.getElementById("fiftyones").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 52){
				document.getElementById("fiftytwos").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 53){
				document.getElementById("fiftythrees").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 54){
				document.getElementById("fiftyfours").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 55){
				document.getElementById("fiftyfives").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 56){
				document.getElementById("fiftysixs").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 57){
				document.getElementById("fiftysevens").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 58){
				document.getElementById("fiftyeights").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 59){
				document.getElementById("fiftynines").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 60){
				document.getElementById("sixties").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 61){
				document.getElementById("sixtyones").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 62){
				document.getElementById("sixtytwos").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 63){
				document.getElementById("sixtythrees").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
			else if(input == 64){
				document.getElementById("sixtyfours").style.backgroundColor= "red";
				alert("Hit");
				countera++;
			}
		}
		//If doesnt = miss
		else{
			alert("Miss");
		}
		//if guess = ship computer hits my ship
		if(ship1 == guess || guess == ship2 || guess == ship3 || ship4 == guess || ship5 == guess || ship6 == guess || ship7 == guess){
			if(guess == 1){
				document.getElementById("onesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 2){
				document.getElementById("twosb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 3){
				document.getElementById("threesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 4){
				document.getElementById("foursb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 5){
				document.getElementById("fivesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 6){
				document.getElementById("sixsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 7){
				document.getElementById("sevensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 8){
				document.getElementById("eightsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 9){
				document.getElementById("ninesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 10){
				document.getElementById("tensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 11){
				document.getElementById("elevensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 12){
				document.getElementById("twelvesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 13){
				document.getElementById("thirteensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 14){
				document.getElementById("fourteensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 15){
				document.getElementById("fifteensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 16){
				document.getElementById("sixteensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 17){
				document.getElementById("seventeensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 18){
				document.getElementById("eighteensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 19){
				document.getElementById("nineteensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 20){
				document.getElementById("twentiesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 21){
				document.getElementById("twentyonesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 22){
				document.getElementById("twentytwosb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 23){
				document.getElementById("twentythreesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 24){
				document.getElementById("twentyfoursb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 25){
				document.getElementById("twentyfivesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 26){
				document.getElementById("twentysixsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 27){
				document.getElementById("twentysevensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 28){
				document.getElementById("twentyeightsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 29){
				document.getElementById("twentyninesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 30){
				document.getElementById("thirtiesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 31){
				document.getElementById("thirtyonesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 32){
				document.getElementById("thirtytwosb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 33){
				document.getElementById("thirtythreesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 34){
				document.getElementById("thirtyfoursb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 35){
				document.getElementById("thirtyfivesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 36){
				document.getElementById("thirtysixsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 37){
				document.getElementById("thirtysevensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 38){
				document.getElementById("thirtyeightsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 39){
				document.getElementById("thirtyninesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 40){
				document.getElementById("fourtiesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 41){
				document.getElementById("fourtyonesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 42){
				document.getElementById("fourtytwosb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 43){
				document.getElementById("fourtythreesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 44){
				document.getElementById("fourtyfoursb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 45){
				document.getElementById("fourtyfivesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 46){
				document.getElementById("fourtysixsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 47){
				document.getElementById("fourtysevensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 48){
				document.getElementById("fourtyeightsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 49){
				document.getElementById("fourtyninesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 50){
				document.getElementById("fiftiesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 51){
				document.getElementById("fiftyonesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 52){
				document.getElementById("fiftytwosb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 53){
				document.getElementById("fiftythreesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 54){
				document.getElementById("fiftyfoursb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 55){
				document.getElementById("fiftyfivesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 56){
				document.getElementById("fiftysixsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 57){
				document.getElementById("fiftysevensb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 58){
				document.getElementById("fiftyeightsb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 59){
				document.getElementById("fiftyninesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 60){
				document.getElementById("sixtiesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 61){
				document.getElementById("sixtyonesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 62){
				document.getElementById("sixtytwosb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 63){
				document.getElementById("sixtythreesb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
			else if(guess == 64){
				document.getElementById("sixtyfoursb").style.backgroundColor= "red";
				alert("You were Hit");
				counterb++;
			}
		}
		// if not they miss
		else{
			alert("They missed");
		}
	}
	if(countera>7){
		alert("You win");
	}
	else if(counterb>7){
		alert("You lose");
	}
}