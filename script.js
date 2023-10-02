let like_button = document.querySelector('.like-button'),
    liked = false;

function like () {
    if (liked == true) {
        liked = false;
        like_button.classList.remove('like')
        like_button.classList.add('unlike')
    } else {
        liked = true;
        like_button.classList.add('like')
        like_button.classList.remove('unlike')
    }
}

like_button.addEventListener('click', like)
