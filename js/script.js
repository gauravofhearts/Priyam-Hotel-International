
// Lock keyboard
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        alert('Need codes contact to developer');
    }
    return false;
};
// Lock copy text
function clearData(){
    window.clipboardData.setData('text','') 
}
function cldata(){
    if(clipboardData){
        clipboardData.clearData();
    }
}
setInterval("cldata();", 1000);

// Popup Image
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-btn');

    // Display the popup when the page loads
    popup.style.display = 'block';

    // Close the popup when the user clicks on the close button
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close the popup when the user clicks anywhere outside of the popup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});
