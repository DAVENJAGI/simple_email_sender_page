document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const regNumberInput = document.getElementById('regNumber');
    const messagePreview = document.getElementById('messagePreview');
    const emailForm = document.getElementById('emailForm');
    const attemptType = document.getElementById('attemptType');

    function updateMessagePreview() {
        const name = nameInput.value || '[Your Name]';
        const regNumber = regNumberInput.value || '[Your Registration Number]';
        const selectedOption = attemptType.options[attemptType.selectedIndex];
        const attempt = selectedOption ? selectedOption.text : '[Your Attempt Type]';
        
        const message = `Dear Engineering Department,\n\nMy name is ${name}, Registration Number: ${regNumber}. I am writing to request that Physical Electronics II be on offer upcoming January/May as it is a pending unit for me as a ${attempt}. Your consideration will be highly appreciated.\n\nThank you for your time and consideration.\n\nSincerely,\n${name}\n${regNumber}`;
        
        messagePreview.textContent = message;
    }

    function getAttemptText() {
        const selectedOption = attemptType.options[attemptType.selectedIndex];
        return selectedOption ? selectedOption.text : '[Your Attempt Type]';
    }

    function openGmailCompose() {
        const name = nameInput.value;
        const regNumber = regNumberInput.value;
        const attempt = getAttemptText();

        if (!name || !regNumber) {
            alert('Please fill in both your name and registration number.');
            return;
        }

        const recipient = 'engineering@mku.ac.ke';
        const subject = `Physical Electronics II Request - ${name} (${regNumber})`;
        
        const body = `Dear Engineering Department,\n\nMy name is ${name}, Registration Number: ${regNumber}. I am writing to request that Physical Electronics II be on offer upcoming January/May as it is a pending unit for me as a ${attempt}.\n Your consideration will be highly appreciated.\n\nThank you for your time and consideration.\n\nSincerely,\n${name}\n${regNumber}`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');

        alert('Compose window opened! Please review and send the email.');
    }

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        openGmailCompose();
    });

    nameInput.addEventListener('input', updateMessagePreview);
    regNumberInput.addEventListener('input', updateMessagePreview);
    attemptType.addEventListener('change', updateMessagePreview);

    updateMessagePreview();
});