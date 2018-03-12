import constants from '../constants';

export default class Generator {
	/**
	 * Create a new generator based on the meta object passing in
	 * @constructor
	 * @param {object} meta - meta object for constructing generator
	 */
	constructor (meta) {
		this.type = meta.type;
		this.name = meta.name;
		this.description = meta.description;
		this.rate = meta.rate;
		this.quantity = meta.quantity;
		this.baseCost = meta.baseCost;
		this.unlockValue = meta.unlockValue;
	}

	/**
	 * getCost computes cost exponentially based on quantity (as formula below)
	 * xt = x0(1 + r)^t
	 * which 
	 * xt is the value of x with t quantity
	 * x0 is base value
	 * r is growth ratio (see constants.growthRatio)
	 * t is the quantity
	 * @return {number} the cost of buying another generator
	 */
	getCost () {
		if(typeof this.quantity !== 'undefined'){
			var firstCost = (this.baseCost)*Math.pow((1.00+(0.05)),(this.quantity));
	//		var secondCost = firstCost/this.quantity;
			if(this.quantity==0.00){
				return this.baseCost;
			}
			else{
				var finalCost = Number(firstCost.toFixed(2));
				//Number(Math.round(firstCost+'e2')+'e-2');
				return finalCost;
			}
		}
		else{
			return this.baseCost;
		}
//		// TODO: implement the function according to doc above
//		return 0;
	}

	/**
	 * generate computes how much this type of generator generates -
	 * rate * quantity
	 * @return {number} how much this generator generates
	 */
	generate () {
		var generated = this.rate * this.quantity;
		return generated;
//		// TODO: implement based on doc above
//		return 0;
	}
}
