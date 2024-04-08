const btn = document.querySelector(".btn")
const password = document.querySelector(".password")
const length = 8
let pass = ''
const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-='
btn.addEventListener("click",function(){
for(let i =0; i < char.length; i++){
const randomshit = Math.floor(Math.random() * char.length)
pass += char[randomshit]
password.value = pass
}
})