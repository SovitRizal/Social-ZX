document.getElementById('generate').addEventListener('click', function () {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const link1 = document.getElementById('link1').value.trim();
    const link2 = document.getElementById('link2').value.trim();
    const link3 = document.getElementById('link3').value.trim();

    if (!name || !email || (!link1 && !link2 && !link3)) {
        alert("Please fill in all fields!");
        return;
    }

    const queryParams = new URLSearchParams({
        name,
        email,
        link1,
        link2,
        link3,
    }).toString();

    const universalLink = `links.html?${queryParams}`;
    const popup = document.getElementById('popup');
    const link = document.getElementById('generatedLink');

    link.textContent = universalLink;
    link.href = universalLink;

    popup.classList.remove('hidden');
});
