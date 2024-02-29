let $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const likePost = $.querySelectorAll('.place_like')
const menuItem = $.querySelectorAll('.menu-item')

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav__btn--open");
  navMenu.classList.toggle("nav-menu--open");
});

const toggleThemeBtn = $.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    $.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    $.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

const toggleeThemeBtn = $.querySelector("#toggle-theme-1");
toggleeThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    $.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    $.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

likePost.forEach((item) => {
    item.addEventListener('click' , () => {
        let htmlColaction = item.children
        let arrHtml = Array.from(htmlColaction)

        arrHtml.forEach((val) => {
            val.classList.toggle('fill-[#E76F51]')
        })
    })
})

menuItem.forEach((item) => {
    item.addEventListener('click' , (e) => {
        e.preventDefault()
        $.querySelector('.menu-item__open').classList.remove('menu-item__open')
        item.classList.add('menu-item__open')
    })
})
