document.getElementById('aboutLink').addEventListener('click', function (e) {
    e.preventDefault();
    const aboutElement = document.getElementById('about');
    aboutElement.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contactLink').addEventListener('click', function (e) {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    contactElement.scrollIntoView({
        behavior: 'smooth'
    });
});
let icon = document.createElement('i');
icon.classList = "fa-solid fa-bars";
let sayac = 0;
function screenSize() {
    if (window.innerWidth <= 500) {
        document.querySelector('.navbar ul').style.display = "flex";
        document.querySelectorAll('.navbar li').forEach(item => {
            item.style.display = "none";
        });
        document.querySelector('.navbar ul').style.alignItems = 'center';
        document.querySelector('.card').style.transform = "scale(0.5)";
        document.querySelector('.navbar ul').appendChild(icon);



    }

    iconBar();
}

function iconBar() {

    icon.addEventListener('click', () => {
        sayac++;
        if (sayac % 2 === 1) {
            document.querySelectorAll('.navbar li').forEach(item => {
                item.style.display = "flex";
                item.style.justifyContent = "center";
                item.style.alignItems = "center";
                item.style.flexDirection = "column";
                document.querySelector('.navbar').style.display = "flex";
                document.querySelector('.navbar').style.justifyContent = "center";
                document.querySelector('.navbar').style.alignItems = "center";

            })
        } else {
            document.querySelectorAll('.navbar li ').forEach(item => item.style.display = "none"
            );
            icon.style.float = 'right';
        }

    })

}


function topButton() {
    let button = document.getElementById('topButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            button.style.opacity = 1;
        } else {
            button.style.opacity = 0;
        }
    })

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

topButton();
screenSize();

