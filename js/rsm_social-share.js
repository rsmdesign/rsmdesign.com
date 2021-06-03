const linkedinButton = document.getElementById('linkedin-button');
linkedinButton.setAttribute('target', '_blank');
linkedinButton.setAttribute(
    'href',
    `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${document.title}`
);

const twitterButton = document.getElementById('twitter-button');
twitterButton.setAttribute('target', '_blank');
twitterButton.setAttribute(
    'href',
    `https://twitter.com/share?url=${window.location.href}`
);

const emailButton = document.getElementById('email-button');
emailButton.setAttribute('target', '_blank');
emailButton.setAttribute(
    'href',
    `mailto:%20?subject=${document.title}&body=${window.location.href}`
);

document.querySelector('#pinterest-button').addEventListener('click', (e) =>{
    document.querySelector('#pinterest-button-hidden span').click()
});