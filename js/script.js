/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
 function myMenu() {
 	var x = document.getElementById('myLinks');
 	if (x.style.display === 'block') {
 		x.style.display = 'none';
 	} else {
 		x.style.display = 'block';
 	}
}
 function myFunction() {
 	var x = document.getElementById("myTopnav");
 	if (x.className === "topnav") {
		
 	  x.className += "responsive";
 	} else {
 	  x.className = "topnav";
 	}
   }

   async function getData() {
	const result = await fetch('https://randomuser.me/api?results=4')
	const testimonials = await result.json();
	console.log(testimonials)
	testimonials.results.forEach(element => {
	
			const test_box = document.createRange().createContextualFragment(`
				
				 <div class="test-box-1">
					 <img src="${element.picture.large}" alt="">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptates officiis earum ipsam velit odio est. Omnis illum quis dolorum!</p>
					<h6>Monica I.</h6>
				</div>
	
				`)
				const testimonials_row = document.querySelector('.testimonials-row')
				testimonials_row.append(test_box)
		
	});
   }

   getData()

   async function getOneData() {
	const result = await fetch('https://randomuser.me/api?results=1')
	const oneUser = await result.json();
	const disclaimer_block = document.querySelector('.disclaimer-block');
	disclaimer_block.innerHTML = "";
	oneUser.results.forEach(user => {		
		const a = document.createElement('a');
		const img = document.createElement('img')
		const p = document.createElement('p');
		const h5 = document.createElement('h5');
		img.src = `${user.picture.large}`
		a.href="citas.html";
		a.className="btn button-2";
		a.textContent="agenda tu cita";
		p.textContent="\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda quos eos quam possimus necessitatibus cupiditate accusamus provident accusantium fugit explicabo nihil cumque voluptas ab, illo temporibus esse ipsa debitis.\""
		h5.textContent = `${user.name.first} ${user.name.last}`;
		disclaimer_block.appendChild(a);
		disclaimer_block.appendChild(img)
		disclaimer_block.appendChild(p);
		disclaimer_block.appendChild(h5)


	})
   }
   getOneData()

   const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
	//const btn_validar = document.getElementById('btn-validar');
	//function validar(){
		e.preventDefault();
		const nombre = document.getElementById('nombre');
		const email = document.getElementById('email');
		const fecha = document.getElementById('fecha');
		const hora = document.getElementById('hora');
		const mensaje = document.getElementById('mensaje');
		const arr = [nombre, email, fecha, hora, mensaje];
		const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
		for(i = 0; i < arr.length; i++){
			if(arr[i].value == ""){
				swal({
					title: `El campo ${messageArr[i]} no puede estar vacío`,
					icon: "error",
					 })
					 return false;
			}	
		}
		if(!emailValido(email)){
			swal({
				title: `El campo ${messageArr[1]} no tiene el formato correcto`,
				icon: "error",
				 })
				 return false;
		}
	
		swal({
			title: `Datos enviados satisfactoriamente`,
			icon: "success",
			 });
			 nombre.value = "";
			 email.value = "";
			 fecha.value = "";
			 hora.value = "";
			 mensaje.value = "";
		return true;
	//}
	
}
const emailValido = (email) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/ .test(email.value)
}


//btn_validar.addEventListener("click", validar)
   