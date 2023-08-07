export const loginPost = async (url, data, href) => {
    console.log(data)
    console.log('url', url)
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'ngrok-skip-browser-warning': '69420',

            },
            body: JSON.stringify(data),
        })
        const responseData = await response.json();

        if (response.status === 200) {
            const token = responseData.accessToken;
            document.cookie = `token=${token}; path=/; secure;`;
            localStorage.setItem('token', token);
            console.log('responseData', responseData)
            window.location = href;
            return responseData;
        } else if (response.status === 400) {
            console.log('response status', responseData)

            return responseData;
        } else if (response.status === 404) {
            console.log('response status', responseData);
            return responseData;
        } else if (!response.ok) {
            console.log('! response ok...');
            return responseData;
        }
    } catch (error) {
        console.log('catch error', error);
    }
}