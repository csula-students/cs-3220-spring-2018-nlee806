//import reducer from '../src/reducer';
//import constants from '../src/constants';
//<script type = "module" src = "../src/reducer"></script>

var quantity1 = 0;
var quantity2 = 0;
var quantity3 = 0;
var quantityFinal = 0;
var counterHere = window.incrementalGame.state.counter;
var costCursor = 10;
var costGrandma = 100;
var costCookieFactory = 500;

/*
document.querySelector('#clickIncrease1').bind("click", function(){
	.onclick = function(){
		quantity1=quantity1+10;
		document.getElementById("quantity1").innerHTML = quantity1;
		alert('Increased by 10');
		pubSub;
		return quantity1;
	};
}
document.querySelector('#clickIncrease2').bind("click", function(){
	.onclick = function(){
		quantity2=quantity2+100;
		document.getElementById("quantity2").innerHTML = quantity2;
		alert('Increased by 100');
		pubSub;
		return quantity2;
	};
}
document.querySelector('#clickIncrease3').bind("click", function(){
	.onclick = function(){
		quantity3=quantity3+500;
		document.getElementById("quantity3").innerHTML = quantity3;
		alert('Increased by 500');
		pubSub;
		return quantity3;
	};
}
*/
function genCursor(){
//		window.incrementalGame.state.counter = counterHere;
/*	const exCursor = {
	type: 'autonomous',
	name: 'Cursor',
	description: 'desc',
	rate: 5,
	baseCost: 5,
	quantity: 0,
	unlockValue: 5
	}; 
*/
	quantity1=quantity1+1;
	document.getElementById("quantity1").innerHTML = quantity1;
		window.store.state = quantity1;
/*	var price1 = reducer(store.state,constants.'BUY_GENERATOR');
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			name: 'Cursor',
			quantity: 1
		}
	};
	document.getElementById("clickIncrease1").innerHTML = price1+" Cookies";
*/
//	counterHere++;
	window.incrementalGame.state.counter = counterHere;
	
	decrease(10);
	costCursor = Generator.getCost();
	document.getElementById("clickIncrease1").innerHTML = costCursor+" Cookies";
	//quantityFinal = quantityFinal+10;
	//document.getElementById("counter").innerHTML = quantityFinal+10;
	//alert('Increased by 10');
//	pubSub.publish(window.incrementalGame.state.counter);//window.incrementalGame.state.counter);
//	pubSub.subscribe();
	return quantity1;
}
function genGrandma(){
//		window.incrementalGame.state.counter = counterHere;

/*	const exGrandma = {
	type: 'autonomous',
	name: 'Grandma',
	description: 'desc',
	rate: 10,
	baseCost: 10,
	quantity: 0,
	unlockValue: 10
	};
*/
	quantity2=quantity2+1; 											// quantity of generators
	document.getElementById("quantity2").innerHTML = quantity2;
		window.store.state = quantity2;
/*			var price2 = reducer(store.state,constants.'BUY_GENERATOR');
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			quantity: 1
		}
	};
	
	document.getElementById("clickIncrease1").innerHTML = price2+" Cookies";
*/
	window.incrementalGame.state.counter = counterHere;
//		counterHere++;
		decrease(100);
		costGrandma = Generator.getCost();
		document.getElementById("clickIncrease2").innerHTML = costGrandma+" Cookies";
		//quantityFinal = quantityFinal+100;
		//document.getElementById("counter").innerHTML = quantityFinal+100;
		//alert('Increased by 100');
//		pubSub.publish(counterHere);//window.incrementalGame.state.counter);
//		pubSub.subscribe();
		return quantity2;
}
function genCookieFactory(){
//		window.incrementalGame.state.counter = counterHere;
/*	const exCookieFactory = {
	type: 'autonomous',
	name: 'CookieFactory',
	description: 'desc',
	rate: 20,
	baseCost: 20,
	quantity: 0,
	unlockValue: 20
	};
*/
	quantity3=quantity3+1;
	document.getElementById("quantity3").innerHTML = quantity3;
	window.store.state = quantity3;
/*			var price3 = reducer(store.state,constants.'BUY_GENERATOR');
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			name: 'Cookie Factory',
			quantity: 1
		}
	};

	document.getElementById("clickIncrease1").innerHTML = price3+" Cookies";
*/
	window.incrementalGame.state.counter = counterHere;
		//var counter3 = window.state.counter;
//		counterHere++;
		decrease(500);
		costCookieFactory = Generator.getCost();
		document.getElementById("clickIncrease3").innerHTML = costCookieFactory+" Cookies";
		//quantityFinal = quantityFinal+500;
		//document.getElementById("counter").innerHTML = quantityFinal+500;
		//alert('Increased by 500');
//		pubSub.publish(counterHere);//window.incrementalGame.state.counter);
//		pubSub.subscribe();
		return quantity3;
}

function increase(increment){
	quantityFinal = quantityFinal+increment;
	counterHere = counterHere+increment;
	document.getElementById("counter").innerHTML = quantityFinal;
	window.incrementalGame.state.counter = counterHere;
	pubSub.publish(window.incrementalGame.state.counter);
//	pubSub.subscribe();
	return quantityFinal;
}
function decrease(increment2){
	quantityFinal = quantityFinal-increment2;
	counterHere = counterHere-increment2;
	document.getElementById("counter").innerHTML = quantityFinal;
	window.incrementalGame.state.counter = counterHere;
	pubSub.publish(window.incrementalGame.state.counter);
//	pubSub.subscribe();
	return quantityFinal;
}

//document.getElementById("clickIncrease").addEventListener("click", function(){
//    document.getElementById("clickIncrease").innerHTML = "Hello World";
//});

// PubSub is single object for publish data to multiple subscribers
class PubSub {
    constructor () {
        this.subscribers = [];
    }

    // subscribe allows a new subscriber to listen for changes by providing
    // callback function in the parameter
    subscribe (fn) {
        this.subscribers.push(fn);
    }

    // one can publish any data to subscribers
    publish (data) {
        this.subscribers.forEach(subscriber => {
            subscriber(data);
        });
    }
}

const pubSub = new PubSub();

pubSub.subscribe(data => {
    console.log(data);
});

pubSub.publish('Hello world!');