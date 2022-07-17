<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
<?php

$result = mail('steg620@aol.com', 'Application Submission', var_export($_POST,true));
if(!$result) {
     header('Location: https://www.diamondschool.com/education/error.html');
exit;
} else {
    header('Location: https://www.diamondschool.com/education/success.html');
exit;
}
?>





  </body>
</html>
