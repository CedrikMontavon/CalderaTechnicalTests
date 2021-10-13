export default  { 
    name:  "printer", 
    // ...
    data: () => ({ 
        timer: null 
    })
    // ...
}

// What will trigger a warning in the console is the fact that "data" is an arrow function
// The reason behind this warning is that the keyword "this" won't reflect the Vue Instance in an arrow function
// To fix it, we could for exemple change it to a regular function :

export default  { 
    name:  "printer", 
    // ...
    data: function() { 
        timer: null 
    }
    // ...
}