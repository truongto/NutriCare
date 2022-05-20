
// async function RequestGETWeb(url, token, callback) {
//     console.log("url: ",url);
//     console.log("Token: ", token);
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Token': token,
//         },
//     })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log("response: ", responseJson)

//             callback(null, responseJson);
//         })
//         .catch((error) => {
//             callback(error, null);
//         })
//         .finally();

// };

// function RequestPOSTWeb(url, params, token, callback) {
//     console.log("url: ",url);
//     console.log("params: ", params)
//     console.log("Token: ", token);

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Key': AppContent.KeyApp,
//         },
//         timeout: 30000,
//         body: JSON.stringify(params)
//     })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log("response: ", responseJson)

//             callback(null, responseJson);
//         })
//         .catch((error) => {
//             callback(error, null);
//         })
//         .finally();

// };
const RequestGET = async (url, token, callback) => {
    console.log("url: ",url);
    console.log("Token: ", token);
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Key': token,
        },
        timeout: 30000,
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("response: ", responseJson)
            callback(null, responseJson);
        })
        .catch((error) => {
            callback(error, null);
            console.log("response: ", "EERRRR")
        })
        .finally();
};


// function RequestPOST(url, params, token, callback) {
//     console.log("url: ",url);
//     console.log("params: ", params)
//     console.log("Token: ", token);
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         timeout: 30000,
//         body: JSON.stringify(params)
//     })
//         .then((response) => response.json())
//         .then((responseJson) => {
//             console.log("response: ", responseJson)

//             callback(null, responseJson);
//         })
//         .catch((error) => {
//             callback(error, null);
//         })
//         .finally();

// };



export { RequestGET}
