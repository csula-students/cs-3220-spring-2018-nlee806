<<<<<<< HEAD
import reducer from '../src/reducer';
import constants from '../src/constants';
=======
>>>>>>> ad7ca3bf2051efcb7f412841aa45756fa87051a0

var quantity1 = 0;
var quantity2 = 0;
var quantity3 = 0;
<<<<<<< HEAD
var quantityFinal = 0;
=======
var quantityFinal = quantity1+quantity2+quantity3;
>>>>>>> ad7ca3bf2051efcb7f412841aa45756fa87051a0
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
function increase10(){
<<<<<<< HEAD
	const exCursor = {
	type: 'autonomous',
	name: 'Cursor',
	description: 'desc',
	rate: 5,
	baseCost: 5,
	quantity: 0,
	unlockValue: 5
	};
	quantity1=quantity1+1;
	document.getElementById("quantity1").innerHTML = quantity1;
	var price1 = reducer(store.state,constants.'BUY_GENERATOR');
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			name: 'Cursor',
			quantity: 1
		}
	};
	document.getElementById("clickIncrease1").innerHTML = price1+" Cookies";
	
	var counter1 = window.state.counter;
	counter1++;
	decrease(10);
	//quantityFinal = quantityFinal+10;
	//document.getElementById("counter").innerHTML = quantityFinal+10;
	//alert('Increased by 10');
	pubSub.publish(window.incrementalGame.state.counter);
//	pubSub.subscribe();
	return quantity1;
}
function genGrandma(){
	const exGrandma = {
	type: 'autonomous',
	name: 'Grandma',
	description: 'desc',
	rate: 10,
	baseCost: 10,
	quantity: 0,
	unlockValue: 10
	};
	quantity2=quantity2+1; 											// quantity of generators
		document.getElementById("quantity2").innerHTML = quantity2;
			var price2 = reducer(store.state,constants.'BUY_GENERATOR');
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			quantity: 1
		}
	};
	
	document.getElementById("clickIncrease1").innerHTML = price2+" Cookies";

		var counter2 = window.state.counter;
		counter2++;
		decrease(100);
		//quantityFinal = quantityFinal+100;
		//document.getElementById("counter").innerHTML = quantityFinal+100;
		//alert('Increased by 100');
		pubSub.publish(window.incrementalGame.state.counter);
//		pubSub.subscribe();
		return quantity2;
}
function increase500(){
	const exCookieFactory = {
	type: 'autonomous',
	name: 'CookieFactory',
	description: 'desc',
	rate: 20,
	baseCost: 20,
	quantity: 0,
	unlockValue: 20
	};
	quantity3=quantity3+1;
		document.getElementById("quantity3").innerHTML = quantity3;
			var price3 = reducer(store.state,constants.'BUY_GENERATOR');
	const action = {
		type: constants.BUY_GENERATOR,
		payload: {
			name: 'Cookie Factory',
			quantity: 1
		}
	};
	document.getElementById("clickIncrease1").innerHTML = price3+" Cookies";
		var counter3 = window.state.counter;
		counter3++;
		decrease(500);
		//quantityFinal = quantityFinal+500;
		//document.getElementById("counter").innerHTML = quantityFinal+500;
		//alert('Increased by 500');
		pubSub.publish(window.incrementalGame.state.counter);
//		pubSub.subscribe();
=======
	quantity1=quantity1+10;
	document.getElementById("quantity1").innerHTML = quantity1;
	increase(10);
	//quantityFinal = quantityFinal+10;
	//document.getElementById("counter").innerHTML = quantityFinal+10;
	//alert('Increased by 10');
	pubSub.publish(window.state.counter);
	pubSub.subscribe();
	pubSub.publish();
	return quantity1;
}
function increase100(){
	quantity2=quantity2+100;
		document.getElementById("quantity2").innerHTML = quantity2;
		increase(100);
		//quantityFinal = quantityFinal+100;
		//document.getElementById("counter").innerHTML = quantityFinal+100;
		//alert('Increased by 100');
		pubSub.publish(window.state.counter);
		pubSub.subscribe();
		pubSub.publish();
		return quantity2;
}
function increase500(){
	quantity3=quantity3+500;
		document.getElementById("quantity3").innerHTML = quantity3;
		increase(500);
		//quantityFinal = quantityFinal+500;
		//document.getElementById("counter").innerHTML = quantityFinal+500;
		//alert('Increased by 500');
		pubSub.publish(window.state.counter);
		pubSub.subscribe();
		pubSub.publish();
>>>>>>> ad7ca3bf2051efcb7f412841aa45756fa87051a0
		return quantity3;
}

function increase(increment){
	quantityFinal = quantityFinal+increment;
	document.getElementById("counter").innerHTML = quantityFinal;
<<<<<<< HEAD
	pubSub.publish(window.incrementalGame.state.counter);
//	pubSub.subscribe();
	return quantityFinal;
}
function decrease(increment2){
	quantityFinal = quantityFinal-increment2;
	document.getElementById("counter").innerHTML = quantityFinal;
	pubSub.publish(window.incrementalGame.state.counter);
//	pubSub.subscribe();
=======
	pubSub.publish(window.state.counter);
	pubSub.subscribe()
	pubSub.publish()
>>>>>>> ad7ca3bf2051efcb7f412841aa45756fa87051a0
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