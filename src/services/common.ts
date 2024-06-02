export const responseFunc = (status, data, errorFunc) => {
    // switch(status) {
    //     case 400:
    //         break;
    //     case 500:
    //         break;
    //     default:
    //         return new Response(JSON.stringify(data), {
    //          status: 200,      
    //          headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         });
    // }
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json"
        }
    });
}