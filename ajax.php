<?php 
    include 'crest.php';


    if($_REQUEST["client_id"] && $_REQUEST["client_secret"] && $_REQUEST["refresh_token"]){
        
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://oauth.bitrix.info/oauth/token/?grant_type=refresh_token&client_id='.$_REQUEST["client_id"].'&client_secret='.$_REQUEST["client_secret"].'&refresh_token='.$_REQUEST["refresh_token"],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo json_encode($response,1);
        
    }elseif($_REQUEST["client_id"] && $_REQUEST["client_secret"]){
        $auth = '';

        foreach (getallheaders() as $name => $value){
            if($name =="authorization"){
                $auth = $value;
            }
        }
        
        $curl = curl_init();
        $url = 'https://'.$_REQUEST["portal_url"].'/extranet/oauth/authorize/?client_id='.$_REQUEST["client_id"].'&state='.json_encode(["client_id"=>$_REQUEST["client_id"],"client_secret"=>$_REQUEST["client_secret"]],1);
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://'.$_REQUEST["portal_url"].'/extranet/oauth/authorize/?client_id='.$_REQUEST["client_id"].'&state='.json_encode(["client_id"=>$_REQUEST["client_id"],"client_secret"=>$_REQUEST["client_secret"]],1),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_HTTPHEADER => array(
                "Authorization: $auth",
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;

        // echo json_encode($response,1);
    }