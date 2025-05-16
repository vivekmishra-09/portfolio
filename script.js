 // active hamburger menu 
 let menuIcon = document.querySelector(".menu-icon");
 let navlist = document.querySelector(".navlist")
 menuIcon.addEventListener("click",()=>{
     menuIcon.classList.toggle("active");
     navlist.classList.toggle("active");
     document.body.classList.toggle("open");
 });
 
 // remove navlist
 navlist.addEventListener("click",()=>{
     navlist.classList.remove("active");
     menuIcon.classList.remove("active");
     document.body.classList.remove("open");
 })
 
 // rotate text js code 
 let text = document.querySelector(".text p");
 
 text.innerHTML = text.innerHTML.split("").map((char,i)=>
     `${char}`
 ).join("");


//  Theme Dark light
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
