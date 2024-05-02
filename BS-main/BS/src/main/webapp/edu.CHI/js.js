/**
 * 
 */

  function validarFormulario() {
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden");
                return false;
            }

            // Aquí podrías agregar más validaciones según tus necesidades

            // Si todo está correcto, puedes enviar el formulario
            alert("Formulario enviado correctamente");
            return true;
        }
        
        
        
	// Obtener referencia al contador del carrito
const contadorCarrito = document.getElementById('contador-carrito');

// Escuchar clics en los botones "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtener el valor actual del contador
        let cantidad = parseInt(contadorCarrito.textContent);
        // Incrementar el contador en 1
        cantidad++;
        // Actualizar el texto del contador
        contadorCarrito.textContent = cantidad;
    });
});


