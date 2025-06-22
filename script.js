// Validar formulario de registro
document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var ubicacion = document.getElementById('ubicacion').value;

    // Validaciones
    if (!nombre || !email || !ubicacion) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        event.preventDefault();
    }

    // Guardar los datos en localStorage
    var usuario = {
        nombre: nombre,
        email: email,
        ubicacion: ubicacion
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert("¡Registro exitoso!");

    // Limpiar los campos del formulario
    document.getElementById('registroForm').reset();
});

// Mostrar los datos del perfil de usuario
window.onload = function() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('nombreUsuario').textContent = `Nombre: ${usuario.nombre}`;
        document.getElementById('emailUsuario').textContent = `Correo: ${usuario.email}`;
        document.getElementById('ubicacionUsuario').textContent = `Ubicación: ${usuario.ubicacion}`;
    } else {
        document.getElementById('perfil').innerHTML = "<p>No tienes un perfil registrado.</p>";
    }
};

// Simular alerta de notificación
function mostrarAlerta() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        alert(`¡Hola ${usuario.nombre}! Tienes una nueva alerta sobre el clima en tu zona: ${usuario.ubicacion}. Revisa las recomendaciones en tu cuenta.`);
    } else {
        alert("No hay usuario registrado.");
    }
}

// Llamar a la función cada 10 segundos
setInterval(mostrarAlerta, 10000);
