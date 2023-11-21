
    export async function getOption(domain,auth_id){
        let method = "app.option.get";
        const response = await sendRequest(domain,auth_id,method);
        return response;
    }



    export async function sendRequest(domain,method,params,auth_id){

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(params);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`https://${domain}/rest/${method}?auth=${auth_id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            // console.log(result);
            return result;
        })
        .catch(error => console.log('error', error));
    }
