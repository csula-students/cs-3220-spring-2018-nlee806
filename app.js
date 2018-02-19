
var quantity1 = 0;
var quantity2 = 0;
var quantity3 = 0;
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
	quantity1=quantity1+10;
	document.getElementById("quantity1").innerHTML = quantity1;
	alert('Increased by 10');
	pubSub;
	return quantity1;
}
function increase100(){
	quantity2=quantity2+100;
		document.getElementById("quantity2").innerHTML = quantity2;
		alert('Increased by 100');
		pubSub;
		return quantity2;
}
function increase500(){
	quantity3=quantity3+500;
		document.getElementById("quantity3").innerHTML = quantity3;
		alert('Increased by 500');
		pubSub;
		return quantity3;
}

function count(){
	var quantityTotal=quantity1+quantity2+quantity3;
		document.getElementById("count").innerHTML = quantityTotal;
		pubSub;
		return quantityTotal;
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