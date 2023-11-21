
<?php
    define("CLIENT_ID","local.65142df8e8d666.01765156");
    define("CLIENT_SECRET","l37e9E8Ji4C0isz14qafXuvD8KTNo0WCSKyBVcCfsmJX0X5OPa");
    define("APP_SID","e529fa947942078607bd060f8d0aff14");
    define("AUTH_ID","f3ca1b650067361d0004ce0400002046000007ed885f7e12a19a87bef9f3c4ceda72e0");
    define("REFRESH_ID","a65343650067361d0004ce0400002046000007b8623c820aa4319747fccca8a3e807dc");
    define("DOMAIN","cp.micros.uz");
    
function restCommand($method, array $params = Array(),$auth){
    $queryUrl = "https://".$auth["domain"]."/rest/".$method;
    $queryData = http_build_query(array_merge($params, array("auth" => $auth["access_token"])));
    // $queryData = array_merge($params, array("auth" => AUTH_ID));
    
    $curl = curl_init();
    
    curl_setopt_array($curl, array(
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_SSL_VERIFYPEER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));
    
    $result = curl_exec($curl);
    curl_close($curl);
    
    $result = json_decode($result, 1);
    
    if (isset($result['error']) && in_array($result['error'], array('expired_token', 'invalid_token'))){
        $auth = restAuth();
        if ($auth){
            $result = restCommand($method, $params,$auth);
        }
    }
    
    // $result = json_encode($result, 1);
    // return json_encode(array_merge($params, array("auth" => AUTH_ID)));
    return json_encode($result);
}

function restAuth(){
    
        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://oauth.bitrix.info/oauth/token/?grant_type=refresh_token&client_id='.CLIENT_ID.'&client_secret='.CLIENT_SECRET.'&refresh_token='.REFRESH_ID,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_HTTPHEADER => array(
            'Host: '.DOMAIN
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        
        // $result = json_decode($result, 1);
        // if (!isset($result['error'])){
        //     $result['domain'] = $auth['domain'];
        //     $auth = $result;
        // }else{
        //     $result = false;
        // }
        // echo json_decode($result,1);
        // return $result;

        return json_decode($response,1);
}



$arParams["PAGE_SIZES"][4] = [
    ["NAME"] => 200,
    ["VALUE"] =>200
];

// restAuth(["domain"=>DOMAIN,"refresh_token"=>REFRESH_ID]);