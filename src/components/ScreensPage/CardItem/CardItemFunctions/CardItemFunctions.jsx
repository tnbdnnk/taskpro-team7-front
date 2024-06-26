export const handleSetColor = (label) => { 
    switch (label) {
        case label = 'without':
            return { backgroundColor: '#746666' }
        case label = 'low':
            return { backgroundColor: '#8fa1d0' }
        case label = 'medium':
            return { backgroundColor: '#e09cb5' }
        case label = 'high':
            return { backgroundColor: '#bedbb0' }
        default:
            return { backgroundColor: '#746666' }
    }
}

export const handleFormatDate = (deadline) => {
    if (!deadline) return 'No deadline';
    const date = new Date(deadline);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-GB', options); // Using en-GB to get day/month/year format
};

export const handleCompareDates = (date1, date2) => {
    const currentDate = new Date(date1);
    const deadlineDate = new Date(date2);

    const day1 = currentDate.getDate();
    const month1 = currentDate.getMonth();
    const year1 = currentDate.getFullYear();

    const day2 = deadlineDate.getDate();
    const month2 = deadlineDate.getMonth();
    const year2 = deadlineDate.getFullYear();

    return day1 === day2 && month1 === month2 && year1 === year2;
};

// export const handleFormatDate = (deadline) => {
//     const dateParts = deadline.split(', ')[0].split('/');
//     const day = dateParts[1].padStart(2, '0');
//     const month = dateParts[0].padStart(2, '0');
//     const year = dateParts[2];
//     const formattedDate = `${day}/${month}/${year}`;
//     return formattedDate;
// }

// export const handleCompareDates = (date1, date2) => {
//   const currentDate = new Date(date1);
//   const formattedDeadline = new Date(date2);

//   const day = currentDate.getDate().toString().padStart(2, '0');
//   const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//   const year = currentDate.getFullYear();
//   const formattedDate = `${day}/${month}/${year}`;

//   const parsedDate1 = new Date(formattedDate);
//   const parsedDate2 = formattedDeadline;

//   return parsedDate1.getTime() === parsedDate2.getTime();
// }