<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Install APP</title>
    <link rel="stylesheet" href="/bitrix/js/ui/layout-form/ui.layout.form.css">
    <!-- <script src="//api.bitrix24.com/api/v1/"></script> -->
</head>
<body>

<form action="" method="post">
    <input type="submit" name="first_step" placeholder="Redirect">
</form>

<!-- <button>Redirect</button> -->

<script>

    document.querySelector("input").addEventListener("click", (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "BITRIX_SM_LOGIN=Ismail.Gaibov; BITRIX_SM_NCC=Y; BITRIX_SM_SALE_UID=0");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://cp.micros.uz/tech.support.app/ajax.php?TASKS_LIST=true", requestOptions)
        .then(response => response.text())
        .then(result => console.log(JSON.parse(result)))
        .catch(error => console.log('error', error));
    
    })

</script>

</body>
</html>