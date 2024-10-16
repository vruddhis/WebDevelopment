document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        let nextSibling = heading.nextElementSibling;
        const content = [];

        while (nextSibling && nextSibling.tagName !== 'H2') {
            content.push(nextSibling);
            nextSibling = nextSibling.nextElementSibling;
        }

        content.forEach(item => {
            item.style.display = 'block';
        });

        heading.addEventListener('click', function() {
            content.forEach(item => {
                if (item.style.display === 'none') {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    });
});
