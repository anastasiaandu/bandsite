//create an array of comments
const comments = [
    {
        name: 'Connor Walton',
        timestamp: '02/17/2021',
        image: 'https://www.fillmurray.com/640/360',
        comment: 'This is art.This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        timestamp: '01/09/2021',
        image: 'https://loremflickr.com/640/360',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Miles Acosta',
        timestamp: '12/20/2020',
        image: 'https://placebear.com/640/360',
        comment: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
    }
];

//create a function to display each comment
function displayComment(user) {
    const userComment = document.createElement('div');
    userComment.classList.add('comment__old');

    //create the image element
    const userAvatar = document.createElement('img');
    userAvatar.setAttribute('src', user.image)
    userAvatar.setAttribute('alt', 'profile picture');
    userAvatar.classList.add('comment__avatar', 'comment__avatar--new');
    userComment.appendChild(userAvatar);

    //create the comment container
    const commentContainer = document.createElement('div');
    userComment.appendChild(commentContainer);

    console.log(userComment);
}

//loop through the array and call the displayComment function to display each comment
comments.forEach((comment) => {
    displayComment(comment);
});



/* <div class="comment__old">
        <img src="#" alt="profile picture" class="comment__avatar comment__avatar--new">
        <div>
            <div class="comment__info">
                <div class="comment__writer">
                    Connor Walton
                </div>
                <div class="comment__date">
                    02/17/2021
                </div>
            </div>
            <p>
                This is art. 
                This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. 
                Let us appreciate this for what it is and what it contains.
            </p>
        </div>
    </div> */