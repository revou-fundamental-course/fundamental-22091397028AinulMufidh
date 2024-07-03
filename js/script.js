function getCurrentTime() {
    const now = new Date();
    const options = {
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'short'
    };
    return now.toLocaleString('en-US', options);
}

document.getElementById('currentTime').textContent = getCurrentTime();

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let birth = document.getElementById('birth').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.getElementById('message').value;

    document.getElementById('resultName').textContent = name;
    document.getElementById('resultBirth').textContent = birth;
    document.getElementById('resultGender').textContent = gender;
    document.getElementById('resultMessage').textContent = message;

});


