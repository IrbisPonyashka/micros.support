<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>Install APP</title>
    <link rel="stylesheet" href="/bitrix/js/ui/layout-form/ui.layout.form.css">
    <link href="app/dist/css/app.e58c004e.css" rel="stylesheet">
    <?php
    require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
    CJSCore::Init(array('window'));
//    \Bitrix\Main\UI\Extension::load("micros.vue");
//    $APPLICATION->ShowHead();
    \Bitrix\Main\UI\Extension::load("ui.forms");
    ?>
</head>
<body>

<div class="ui-ctl ui-ctl-textbox ui-ctl-before-icon ui-ctl-after-icon"> <!-- 1. Основной контейнер -->
    <div class="ui-ctl-before ui-ctl-icon-search"></div> <!-- 3. Дополнительный элемент (опционально)-->
    <button class="ui-ctl-after ui-ctl-icon-clear"></button> <!-- 3. Дополнительный элемент (опционально)-->
    <input type="text" class="ui-ctl-element"> <!-- 2. Основное поле -->
</div>


    <!--<div id="application"></div>
    <script type="text/javascript">
        const taskManager = new BX.TaskManager('#application');
        taskManager.start();
    </script>-->


    <!-- <div class="container">
        <form class="form__auth">
            <div class="form__auth-wrapp">
                <h2 class="form__auth-title">Авторизация</h2>
                <div class="ui-form"></div>
                <div class="ui-form-row">
                    <div class="ui-form-label"></div>
                    <div class="ui-form-content">
                        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100"><input class="ui-ctl-element" type="text" name="login" placeholder="Login"></div>
                    </div>
                </div>
                <div class="ui-form-row">
                    <div class="ui-form-label"></div>
                    <div class="ui-form-content">
                        <div class="ui-ctl ui-ctl-textbox ui-ctl-w100"><input class="ui-ctl-element" type="text" name="password" placeholder="Password"></div>
                    </div>
                </div>
                <div class="ui-form-row">
                    <div class="ui-form-content"><button type="submit">Авторизоваться</button></div>
                </div>
            </div>
        </form>
    </div>

    <script>

        document.querySelector(".form__auth").addEventListener("submit", (e) => {
            e.preventDefault();
            let login = document.querySelector("[name='login']").value,
                password = document.querySelector("[name='password']").value;
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic " + btoa(`${login}:${password}`));

            var formdata = new FormData();
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("ajax.php?AUTH=true", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

        })

    </script> -->
</body>
</html>


