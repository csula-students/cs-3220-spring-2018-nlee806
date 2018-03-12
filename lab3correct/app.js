//import reducer from '../src/reducer';
//import constants from '../src/constants';
//<script type = "module" src = "../src/reducer"></script>
var quantity1 = 0;
var quantity2 = 0;
var quantity3 = 0;
//var quantityFinal = 0;
var counterHere = window.incrementalGame.state.counter;
var costCursor = 10;
var costGrandma = 100;
var costCookieFactory = 500;
var quantityFinal = quantity1+quantity2+quantity3;
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
	quantity1=quantity1+1;
	document.getElementById("quantity1").innerHTML = quantity1;
//	window.store.state = quantity1;
	window.incrementalGame.state.counter = counterHere;
	decrease(costCursor);
	Generator gen1 = new Generator();
	costCursor = gen1.getCost();
	document.getElementById("clickIncrease1").innerHTML = costCursor+" Cookies";
	return quantity1;
}
function genGrandma(){
	quantity2=quantity2+1; 											// quantity of generators
	document.getElementById("quantity2").innerHTML = quantity2;
//		window.store.state = quantity2;
	window.incrementalGame.state.counter = counterHere;
		decrease(costGrandma);
		costGrandma = Generator.getCost();
		document.getElementById("clickIncrease2").innerHTML = costGrandma+" Cookies";
		return quantity2;
}
function genCookieFactory(){
	quantity3=quantity3+1;
	document.getElementById("quantity3").innerHTML = quantity3;
//	window.store.state = quantity3;
	window.incrementalGame.state.counter = counterHere;
		decrease(costCookieFactory);
		costCookieFactory = Generator.getCost();
		document.getElementById("clickIncrease3").innerHTML = costCookieFactory+" Cookies";
		return quantity3;
}

function increase(increment){
	quantityFinal = quantityFinal+increment;
	counterHere = counterHere+increment;
	document.getElementById("counter").innerHTML = quantityFinal;
	window.incrementalGame.state.counter = counterHere;
	window.store.state.counter = window.incrementalGame.state.counter;
	pubSub.publish(window.incrementalGame.state.counter);
	return quantityFinal;
}
function decrease(increment2){
	quantityFinal = quantityFinal-increment2;
	counterHere = counterHere-increment2;
	document.getElementById("counter").innerHTML = quantityFinal;
	window.incrementalGame.state.counter = counterHere;
	window.store.state.counter = window.incrementalGame.state.counter;
	pubSub.publish(window.incrementalGame.state.counter);
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