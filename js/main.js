<script>
window.addEventListener('mousemove', function(e) {
  var customCursor = document.getElementById('custom-cursor');
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
  customCursor.style.display = 'block';
});
</script>

document.addEventListener('DOMContentLoaded', (event) => {
    // Resume, Email, LinkedIn are IDs given
    const resumeButton = document.querySelector('.neon-button#Resume');
    const emailButton = document.querySelector('.neon-button#Email');
    const linkedInButton = document.querySelector('.neon-button#LinkedIn');

    resumeButton.addEventListener('click', () => {
        window.location.href = 'https://';
    });

    emailButton.addEventListener('click', () => {
        window.location.href = 'https://';
    });


    linkedInButton.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/in/sebastian-ferreira-570961193/';
    });
});