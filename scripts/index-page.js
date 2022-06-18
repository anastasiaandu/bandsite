//create an array of comments
const comments = [
    {
        name: 'Connor Walton',
        timestamp: '02/17/2021',
        image: 'https://www.fillmurray.com/640/360',
        commentText: 'This is art.This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        timestamp: '01/09/2021',
        image: 'https://loremflickr.com/640/360',
        commentText: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Miles Acosta',
        timestamp: '12/20/2020',
        image: 'https://placebear.com/640/360',
        commentText: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
    }
];


//get the parent to which the comments would be appended
const commentSection = document.querySelector('.comment__body');


//create a function to loop through the array and display each comment
function displayComment() {
    comments.forEach((comment) => {
        const userComment = document.createElement('div');
        userComment.classList.add('comment__old');

        //image element
        const userAvatar = document.createElement('img');
        userAvatar.setAttribute('src', comment.image)
        userAvatar.setAttribute('alt', 'profile picture');
        userAvatar.classList.add('comment__avatar', 'comment__avatar--new');
        userComment.appendChild(userAvatar);

        //comment container
        const commentContainer = document.createElement('div');
        userComment.appendChild(commentContainer);

        //user info
        const userInfo = document.createElement('div');
        userInfo.classList.add('comment__info');
        commentContainer.appendChild(userInfo);

        //user name
        const userName = document.createElement('div');
        userName.classList.add('comment__writer');
        userName.innerText = comment.name;
        userInfo.appendChild(userName);

        //date
        const date = document.createElement('div');
        date.classList.add('comment__date');
        date.innerText = comment.timestamp;
        userInfo.appendChild(date);

        //comment text
        const text = document.createElement('p');
        text.innerText = comment.commentText;
        commentContainer.appendChild(text);

        //append comment to webpage
        commentSection.appendChild(userComment);
    });
}


//call the function to display each comment on the bio page
displayComment();                                 
    