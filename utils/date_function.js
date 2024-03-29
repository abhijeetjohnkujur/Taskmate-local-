const formatedDate = (duedate) => {
    const inputDate = new Date(duedate);  // Taking due date as input

const formattedDate = inputDate.toLocaleDateString('en-US', {
    month: 'long', 
    day: 'numeric', 
    year: 'numeric'
});

return formattedDate;
}

module.exports = formatedDate;