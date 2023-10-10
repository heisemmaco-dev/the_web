let btn = document.querySelector('[data-js-btn]')
let link = document.querySelectorAll('[data-js-left]')
console.log(link);

link.forEach(con => {
  con.addEventListener('click', () => {
    if (btn.innerHTML === '<i class="fa-solid fa-xmark" style="color: #a92ed6;"></i>') {
      document.querySelector('.ul').style.left = '-1000px'
    }
    btn.innerHTML = '<i class="fa-solid fa-bars" style="color: #c210f4;"></i>'
  })
})

btn.addEventListener('click', () => {
  if (btn.innerHTML === '<i class="fa-solid fa-bars" style="color: #c210f4;"></i>'){
  btn.innerHTML = '<i class="fa-solid fa-xmark" style="color: #a92ed6;"></i>'
  document.querySelector('ul').style.left = '0'
  } else {
    btn.innerHTML = '<i class="fa-solid fa-bars" style="color: #c210f4;"></i>'
    document.querySelector('ul').style.left = '-1000px'
  }
})

window.addEventListener('scroll', reveal)

function reveal() {
  let reveals = document.querySelectorAll('.when')

  for(let i = 0; i < reveals.length; i++){
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight -revealpoint) {
      reveals[i].classList.add('active')
    }
    else {
      reveals[i].classList.remove('active')
    }
  }
}




