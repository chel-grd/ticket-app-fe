export const apiEndPoint = () => {
    return 'https://ticket-app-backend-chel-grd.herokuapp.com';
};

export const configHeader = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return config;
};