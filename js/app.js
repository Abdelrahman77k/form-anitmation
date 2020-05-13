function formAnimated() {

    const arrows = document.querySelectorAll(".fa-long-arrow-alt-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {

            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const next = parent.nextElementSibling;

            if (input.type === 'text' && userData(input)) {
                nextSlide(parent, next);
            } else if (input.type === 'email' && userEmail(input)) {
                nextSlide(parent, next);
            }

        });
    });
}


//chech the user input
function userData(user) {
    if (user.value.length < 6) {

        error('rgba(189,87,87)');
    } else {
        error('rgba(87, 189, 130)');
        return true;
    }
}

function userEmail(mail) {
    const emailUser = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailUser.test(mail.value)) {
        error('rgba(189,87,87)');
    } else {
        error('rgba(87, 189, 130)');
        return true;
    }
}

function nextSlide(parent, next) {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    next.classList.add("active");
}

function error(color) {
    document.body.style.backgroundColor = color;
}

formAnimated();