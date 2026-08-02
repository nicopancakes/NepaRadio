<script>
document.addEventListener("keydown", function(e) {

    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }

    if (e.key === "F12") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey &&
        ["i","j","c"].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "r") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.key.toLowerCase() === "h") {
        e.preventDefault();
    }

});
</script>
