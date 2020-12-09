<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <title>Simple PHP document</title>
   </head>
   <body>
      <!-- print variable name�s value -->
      <h1><?php 
      echo 'variables_order = '.ini_get('variables_order').'<br>';
      echo 'About SERVER: <br>';
      foreach($_SERVER as $serval){
         echo "$serval <br>" ;    }
      echo '<br>About ENV: <br>';
      foreach(getenv() as $enval){  // variables_order = "GPCS"로 설정돼있어 $_ENV = null이기에 getenv()로 클라이언트 요소들을 출력
         echo "$enval <br>";} 
                    ?></h1>
   </body>
</html>
