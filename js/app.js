//Burger
document.addEventListener('DOMContentLoaded', function(event) {
  const body = document.querySelector('body');
  const headerMenuTrigger = document.querySelector('.burger');
  const headerMenu = document.querySelector('.header__menu');
  const headerMenuItems = document.querySelectorAll('.header__menu-item');

  function hidemenu() {
    if (window.innerWidth < 768) {
        headerMenuTrigger.classList.toggle('is-active');
        headerMenu.classList.toggle('is-active');
        body.classList.toggle('blocker');
    }
  }

  headerMenuTrigger.addEventListener('click', () => {
    hidemenu();
  });

  headerMenuItems.forEach((element) => {
    element.addEventListener('click', () => {
      hidemenu();
    });
  })
});

window.addEventListener('scroll', function() {
    
    // Fixed menu witch scroll

    let header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('is-fixed');
    } else {
        header.classList.remove('is-fixed');
    }
  });


  let menuLinks = document.querySelectorAll('.header__menu-item');
  let sections = document.querySelectorAll('section');

   // Menu current scroll

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    let sectionTop = section.offsetTop;
    if (scrollPosition >= sectionTop - 50 && 
        (!sections[index + 1] || scrollPosition < sections[index + 1].offsetTop - 50)) {
      menuLinks.forEach((link) => {
        link.classList.remove('is-active');
      });
      menuLinks[index].classList.add('is-active');
    }
  });
});

window.addEventListener('DOMContentLoaded', function() {

    // Tabs
    
	let tabs = document.querySelectorAll('.tab__list-item'),
		tabsContent = document.querySelectorAll('.tab__item'),
		tabsParent = document.querySelector('.tab__list');

	function hidetab__item() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tab__list-item--active');
        });
	}

	function showtab__item(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tab__list-item--active');
    }
    
    hidetab__item();
    showtab__item();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tab__list-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hidetab__item();
          showtab__item(i);
        }
    });
		}
	});
});

const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function buttonHandler(e) {
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });

  if (!Boolean(Number(isAllValid))) {
    e.preventDefault();
  }
}
