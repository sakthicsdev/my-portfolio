
// Preloader

window.addEventListener('load', function(){
    document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
    }, 1000);
});

// iTyped 

window.ityped.init(document.querySelector('.iTyped'), {
    strings: ["I'm a Web Developer", 'I Love Html5', 'I Love CSS3', 'I Love Jquery', 'I Love Laravel'],
    loop: true
});

// Portfolio Item Filter

// Portfolio Lighbox


// Aside Navbar

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){
        // remove back section class
        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                // add back section class
                addBackSectionClass(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }

        this.classList.add('active');

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    });
}

function addBackSectionClass(num) 
{
    allSection[num].classList.add('back-section');
}

function removeBackSectionClass() 
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section');
    }
}

function updateNav(element) 
{
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex = this.getAttribute('data-section-index');
    addBackSectionClass(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
});

function showSection(element) 
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
    }

    const target = element.getAttribute('href').split('#')[1];

    document.querySelector('#'+target).classList.add('active');
}

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() 
{
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    let name    = document.getElementById("name").value.trim();
    let email   = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let msgBox  = document.getElementById("formMsg");

    msgBox.style.color = "yellow";

    // Empty check
    if (name === "" || email === "" || subject === "" || message === "") {
        event.preventDefault();
        msgBox.innerHTML = "All fields are required!";
        return;
    }

    // Email validation (regex)
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        event.preventDefault();
        msgBox.innerHTML = "Enter a valid email address!";
        return;
    }

    msgBox.innerHTML = "Sending message... Please wait.";
});
