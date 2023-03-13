// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
//Milestone 2
//Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
//Milestone 3
//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
const esadecimalValue = [
	0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'
];

let color = '';

const listElements = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color 
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color
	},
];

const containerDom = document.getElementById('container');
let selectDom = document.getElementById('selector');
let choosenSelected = selectDom.value;

let base = ''
let mapped = [];
mapped.push('all');

listElements.map((element) =>{ 
if(element.type != base){
	mapped.push(element.type);
	base = element.type;
}
});

for(let i = 0; i < mapped.length;i++){
	selectDom.innerHTML += `<option value="${mapped[i]}">${mapped[i]}</option>`
}


listElements.forEach(element =>{ 
	element.color = randomColor(esadecimalValue); 
	appendCard(element,containerDom)
});

selectDom.addEventListener('change',function(){
	let choosenSelected = selectDom.value;
	const filteredElements = listElements.filter(element =>{
		if( element.type == choosenSelected){
			return element;
		}else if( choosenSelected == 'all'){
			return element;
		}
	});

	containerDom.innerHTML = '';

	filteredElements.forEach(element =>appendCard(element,containerDom));
});

function createCard(name, prefix, color){
	let cardbox = document.createElement('div');
	cardbox.classList.add('card');
	let iconbox = document.createElement('div');
	iconbox.classList.add('icon');
	let namebox = document.createElement('h5');

	iconbox.innerHTML = `<i class="fa-solid ${prefix}${name}" style="color: #${color}"></i>`

	namebox.append(name)
	cardbox.append(iconbox);
	cardbox.append(namebox);

	return cardbox
}

function appendCard(element,containerDom){
	let newCard = createCard(element.name, element.prefix, element.color);
		containerDom.append(newCard);
}

function randomColor(array){
	let number = '';
	let numeriCompleti = '';
	for(let i = 0; i < 6; i++){
		number = Math.floor(Math.random() * ((array.length - 1) -1) + 1);
		numeriCompleti += array[number];
	}
	return numeriCompleti;
}

// function optionCreations(array){
// 	// let base = ''
// 	// let mapped = [];
// 	// mapped.push('all');
// 	// mapped = array.map((element) =>{ 
// 	// if(element.type != base){
// 	// 	mapped.push(element.type);
// 	// 	base = element.type;
// 	// }
// 	// return mapped;
// });
// }

