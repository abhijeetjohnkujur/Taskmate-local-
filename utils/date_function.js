const formatedDate = (duedate) => {
    const inputDate = new Date(duedate);  // Assuming 'duedate' comes from your form data

const formattedDate = inputDate.toLocaleDateString('en-US', {
    month: 'long', 
    day: 'numeric', 
    year: 'numeric'
});

return formattedDate;
}

module.exports = formatedDate;