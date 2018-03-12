//var dom = document.querySelector('.rgb-square');

<style>
	.rgb-square {
		display: block;
		background-color: #fff;
		width: 2em;
		height: 2em;
	}

	.rgb-square.--red {
		background-color: red;
	}
	.rgb-square.--blue {
		background-color: blue;
	}
	.rgb-square.--green {
		background-color: green;
	}
</style>

<span class="rgb-square"></span>

<script>
//style = span elements

const dom = document.querySelector('.rgb-square');
const colors = ['--red', '--blue', '--green'];
var index=-1;
console.log(dom);

dom.addEventListener('click',function(){
	console.log('Clicked rgb square');
//	debugger();
	const oldColor = getColor(colors, index);
	if(oldColor){
		dom.classList.remove(oldColor);
	}
	index++;
	index = index % colors.length;
	const newcolor = getColor(colors, index);
	dom.classList.add(newColor);
});
function getColor(colors, index){
	if(index<0){
		return'';
	}
	return colors[index];
}
</script>