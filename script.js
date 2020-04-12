let events = [
{
	name:'Концерт-медитация в Темноте «Час Земли»',
	descr:'🎶 28 марта в 20:00 приглашаем всех неравнодушных на акустический концерт-медитацию в темноте с одноименным названием «Час Земли»',
	date:'28 мар',
	time:'20:00',
	metro:'Площадь Ильича',
	cost:'500',
	link:'https://vk.com/wall-187382873_31',
	piclink:'https://sun9-16.userapi.com/c857528/v857528292/1afd03/LW63KPILCxk.jpg',
},	
{
	name:'Кино в Local Time',
	descr:'В стоимость включены чай, кофе, печеньки, сладости, пицца от наших добрых друзей из "Пицца Хат", а также попкорн. Новорязанская ул., д.29, с. 4, Москва',
	date:'27 мар',
	time:'23:00',
	metro:'Бауманская',
	cost:'350',
	link:'https://vk.com/wall-184841834_1404?hash=2ade8b55c53bab47e1',
	piclink:'https://sun9-69.userapi.com/c206516/v206516292/bc18a/-yWq_Gbr5AE.jpg',
}
];

let i = 0
leaf ();

let bttn = document.querySelector('#btn');

function leaf(){
	if (i < events.length){	
		console.log(i);
		let datetime = document.querySelector('#datetime').innerText = events[i].date+' '+events[i].time;
		let metro = document.querySelector('#metro').innerText = events[i].metro;
		let pic = document.querySelector('#pic').src = events[i].piclink;
		i++;
	}else{
		bttn.style.display = "none"	;
	};
}
	
const btn = document.querySelector('#btn').addEventListener('click', (e) => {
	leaf ();
});







/*
let events = [
{
	name:'Концерт-медитация в Темноте «Час Земли»',
	descr:'🎶 28 марта в 20:00 приглашаем всех неравнодушных на акустический концерт-медитацию в темноте с одноименным названием «Час Земли»',
	date:'28 мар',
	time:'20:00',
	metro:'Площадь Ильича',
	cost:'500',
	link:'https://vk.com/wall-187382873_31',
	piclink:'https://sun9-16.userapi.com/c857528/v857528292/1afd03/LW63KPILCxk.jpg',
},	
{
	name:'Кино в Local Time',
	descr:'В стоимость включены чай, кофе, печеньки, сладости, пицца от наших добрых друзей из "Пицца Хат", а также попкорн. Новорязанская ул., д.29, с. 4, Москва',
	date:'27 мар',
	time:'23:00',
	metro:'Бауманская',
	cost:'350',
	link:'https://vk.com/wall-184841834_1404?hash=2ade8b55c53bab47e1',
	piclink:'https://sun9-69.userapi.com/c206516/v206516292/bc18a/-yWq_Gbr5AE.jpg',
}
];



for (let event of events){
	console.log(event.metro);
	//document.write(event.metro);
}


let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
{ text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
{ text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
{ text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
{ text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
{ text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
{ text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
{ text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
]:
let button = document.querySelector('.button'):
let phrase = document.querySelector('.phrase'):
let advice = document.querySelector('.advice'):
let image = document.querySelector('.image'):

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length):
  console.log(randIndex):
  return arr[randIndex]:
}

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases):
  phrase.textContent = randomElement.text:
  image.src=randomElement.image

  if (randomElement.length > 40) {
    advice.style.fontSize = '33px':
  } else {
    advice.style.fontSize = '42px':
  }
  //smoothly(phrase, 'textContent', randomElement.text):
  //smoothly(image, 'src', randomElement.image):
}):

console.log("pisun")
*/