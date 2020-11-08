
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line


export default(emails) => {
    const emailArray = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegex.test(email) === false)

    if(emailArray.length) {
        return `These emails are invalid: ${emailArray}`;
    }

    return;
};