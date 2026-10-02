document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe de forma automática (recarga de página)
    event.preventDefault();

    // Obtener los elementos de los campos
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Obtener los elementos de error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Variable para rastrear si todo el formulario es válido
    let isValid = true;

    // 1. Validar campo Nombre
    if (nameInput.value.trim() === "") {
        nameError.style.display = "block";
        nameInput.style.borderColor = "#000000";
        isValid = false;
    } else {
        nameError.style.display = "none";
        nameInput.style.borderColor = "#FD0001";
    }

    // 2. Validar campo Correo Electrónico (Estructura básica de email)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = "block";
        emailInput.style.borderColor = "#fd0001";
        isValid = false;
    } else {
        emailError.style.display = "none";
        emailInput.style.borderColor = "#FD0001";
    }

    // 3. Validar campo Mensaje
    if (messageInput.value.trim() === "") {
        messageError.style.display = "block";
        messageInput.style.borderColor = "#fd0001";
        isValid = false;
    } else  {
        messageError.style.display = "none";
        messageInput.style.borderColor = "#fd0001";
    }

    // Si todo es válido, simula el éxito
    if (isValid) {
        successMessage.style.display = "block";
        
        // Opcional: Limpiar el formulario después del éxito
        document.getElementById('contactForm').reset();
        
        // Ocultar mensaje de éxito después de 4 segundos
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    } else {
        successMessage.style.display = "none";
    }
});