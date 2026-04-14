(function() {
    document.querySelectorAll('link[rel*="icon"]').forEach(link => link.remove());
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon';
    link.href = 'https://raw.githubusercontent.com/nicopancakes/nepafreq.org/refs/heads/main/favicon.ico';
    link.sizes = '32x32';
    document.head.appendChild(link);

    console.log('Favicon Uploaded !');
})();
