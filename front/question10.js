/*
<script> 
    let response = await fetch('/user/1234'); 
    let user = await response.json(); 
</script>
*/

// This code isn't working because the await is only valid in async functions
// We can make this work by creating first an async function which we then call :

async function getUser() {
    let response = await fetch('/user/1234');
    let user = await response.json();
}

getUser();