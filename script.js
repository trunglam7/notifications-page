function markAllRead(){
    const notificationCounter = document.getElementById('notification-counter');
    document.querySelectorAll('div .new-notification').forEach((element) => {
        element.classList.remove('new-notification');
    });

    document.querySelectorAll('div .new-icon').forEach((element) => element.remove());
    notificationCounter.innerText = 0;
}