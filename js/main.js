// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
//Milestone 2
//Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
//Milestone 3
//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const listElements = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
const containerDom = document.getElementById('container');
let selectDom = document.getElementById('selector');
let choosenSelected = selectDom.value;


listElements.forEach(element =>{
	let newCard = createCard(element.name, element.prefix, element.color);
	containerDom.append(newCard);
});


selectDom.addEventListener('change',function(){
	let choosenSelected = selectDom.value;
	const filteredElements = listElements.filter(element =>{
		if( element.type == choosenSelected){
			return element;
		}else if( choosenSelected == ''){
			return element;
		}
	});

	containerDom.innerHTML = '';

	filteredElements.forEach(element =>{
		let newCard = createCard(element.name, element.prefix, element.color);
		containerDom.append(newCard);
	});
});


function createCard(name, prefix, color){
	let cardbox = document.createElement('div');
	cardbox.classList.add('card');
	let iconbox = document.createElement('div');
	iconbox.classList.add('icon');
	let namebox = document.createElement('h5');

	iconbox.innerHTML = `<i class="fa-solid ${prefix}${name}" style="color: ${color}"></i>`

	namebox.append(name)
	cardbox.append(iconbox);
	cardbox.append(namebox);

	return cardbox
}

// function appendCard(){
// 	let newCard = createCard(element.name, element.prefix, element.color);
// 		containerDom.append(newCard);
// }