document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    const coupon = document.querySelector('.coupon');
    const countdown = document.getElementById('countdown');
    const timer = document.getElementById('timer');

    copyBtn.addEventListener('click', () => {
        coupon.select();
        coupon.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(coupon.value)
            .then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.classList.add('success');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
                    copyBtn.classList.remove('success');
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                copyBtn.textContent = 'Failed to copy';
                copyBtn.classList.add('error');
            });
    });

    function startCountdown(duration, display) {
        let timer = duration, minutes, seconds;
        let countdown = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(countdown);
                display.textContent = "Offer expired!";
                copyBtn.disabled = true;
                copyBtn.textContent = "Expired";
            }
        }, 1000);
    }

    let oneMinutes = 60;
    startCountdown(oneMinutes, timer);
});