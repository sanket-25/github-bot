// Follow and Unfollow multiple users at once

(() => {
    let i = 0;
    let count = 0;
    const unfollowInterval = setInterval(() => {
        if (count >= 200) {
            clearInterval(unfollowInterval);
            return;
        }
        let list = document.getElementsByClassName('btn-sm');
        for(let btn of list)
        {
                btn.click();
                console.log('Unfollowed');
                count++;
        }
        if (list[i].innerText === 'Following') {
            list[i].click();
        }
        i++;
    }, 100);
    console.log("intervalID => ",unfollowInterval);
})();