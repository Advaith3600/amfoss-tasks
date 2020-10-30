const selector = document.querySelector('.im_history_messages_peer');

if (selector) {
    setInterval(() => {
        selector.innerHTML += `<div class="spam im_message_wrap clearfix">Hi friend!</div>`;
    }, 1000)
} else {
    console.warn('Please select a chat to continue');
}
