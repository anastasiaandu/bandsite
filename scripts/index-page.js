const apiKey = '813d53df-37dc-4909-ba9e-3a96e45a5e6f';
const commentsURL = 'https://project-1-api.herokuapp.com/comments/?api_key=813d53df-37dc-4909-ba9e-3a96e45a5e6f';


//declare function to format name to desired case
function formatName(string) {
    const names = string.split(' ');
    const newNames = names.map((name) => {
        return ((name.charAt(0).toUpperCase()) + (name.slice(1)).toLowerCase());
    });
    const formattedName = newNames.join(' ');
    return formattedName;
}


//declare function to format date to dynamic date
const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
];

function formatDate(date) {
    const seconds = Math.floor((Date.now() - date) / 1000);
    const interval = intervals.find((interval) => {
        return interval.seconds < seconds;
    });
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
}


//get the parent to which the comments would be appended
const commentSection = document.querySelector('.comment__section');
let comments = [];


// create a function to display all comments
function displayComments() {

    commentSection.innerHTML = '';

    comments.forEach((comment) => {
        const userComment = document.createElement('div');
        userComment.classList.add('comment__old');

        //image element
        if (!comment.image) {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('comment__avatar-missing');
            userComment.appendChild(imageDiv);
        } else {
            const userAvatar = document.createElement('img');
            userAvatar.setAttribute('src', comment.image);
            userAvatar.classList.add('comment__avatar', 'comment__avatar--new');
            userComment.appendChild(userAvatar);
        }

        //comment container
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment__old-container');
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
        date.innerText = formatDate(comment.timestamp);
        userInfo.appendChild(date);

        //comment text
        const text = document.createElement('p');
        text.innerText = comment.comment;
        commentContainer.appendChild(text);

        //append comment to webpage
        commentSection.appendChild(userComment);
    });  
}


//make axios request for comments
axios
    .get(commentsURL)
    .then((response) => {
        comments = response.data.reverse();
        displayComments(); 
    })
    .catch((error) => {
        console.log(error);
    });


//create function to post new comment
const addComment = ((event) => {
    event.preventDefault(); 

    commentSection.innerHTML = '';

    const newComment = {};
    const formFieldName = document.querySelector('.comment__input-name');
    const formFieldComment = document.querySelector('.comment__input-conversation');
    const formFieldvalidation = document.querySelector('.comment__validation');


    const userName = formatName(event.target.name.value);
    const userComment = event.target.comment.value;


    if(userName === '' || userComment === '') {
        formFieldName.classList.add('comment__input-error');
        formFieldComment.classList.add('comment__input-error');
        formFieldvalidation.innerText = '***Please check that you have entered your name or comment***';
    } else {
        formFieldName.classList.remove('comment__input-error');
        formFieldComment.classList.remove('comment__input-error');
        formFieldvalidation.innerText = '';

        newComment.name = userName;
        newComment.comment = userComment;
    
        
        axios
            .post(commentsURL, newComment)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get(commentsURL)
            .then((response) => {
                comments = response.data.reverse();
                displayComments();
            })
            .catch((error) => {
                console.log(error);
            });

        event.target.reset();
    }
});


//add new comment to page
const form = document.querySelector('.comment__form');
form.addEventListener('submit', addComment);
