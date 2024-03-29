//name jest w zakresie GLOBALNYM - czyli dostępna jest z każdego miejsca w naszym kodzie
const name = 'Marysia'

//ustalając zmienną food bez nadania jej wartości możemy używać jej w każdym zakresie nie musząc tworzyć za każdym razem nowej zmiennej. 
let food

//funcja test również jest w zakresie GLOBALNYM
const test = () => {
	//ten const name jest w zakresie LOKALNYM, dlatego możemy użyć nazwy name drugi raz
	const name = 'Balbinka'
	//ten console log jest w zakresie LOKALNYM
	console.log(`NAME w funkcji - ${name}`);
	//zmienna age jest w zakresie lokalnym dlatego nie możemy wyświetlić jej poza funkcją test
	const age = 24
	console.log(age);

	const test2 = (name) => {
		//konsola wyświetli najpiew name z tej funkcji jeżeli nie podamy żadnego name, to przejdzie poziom wyżej do funkcji test i wyświetli zmienną name Balbinka. Jeżeli nadal nie byłoby nadanej zmiennej to przejdzie poziom wyżej i wyświetli dane z zakresu GLOBALNEGO
		console.log(name);
	}
	test2(name)

	//funkcja test3 jest funkcją siostrzaną do test2, ale nie ma dostępu do jej wnętrza, tj nie możemy używać tego co przechowuje test2
	const test3 = () => {
		const name = "test3 - Matylda"
		console.log(name);
	}
	test3()
}
test()
console.log('');

//ten console.log również jest w zakresie GLOBALNYM
console.log(`NAME poza funkcją - ${name}`);


