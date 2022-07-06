const form = document.querySelector('form')

form.addEventListener('submit', () =>{
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    if (password.value !== confirmPassword.value){
        alert('Passwords do not match please try again')
    } else {
        return console.log('Good passwords')
    };
})