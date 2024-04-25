let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach(sec => {
    let top = sec.offsetTop - 150;
    let bottom = top + sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      let correspondingLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }
    }
  });
};


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
