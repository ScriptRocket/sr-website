<?php 

$filenameArray = array();
$filetimeArray = array();
$folder = '../images/design/';

$handle = opendir($folder);
        while($file = readdir($handle)){
            if($file !== '.' && $file !== '..'){
                array_push($filenameArray, "images/design/$file");
				array_push($filetimeArray, filemtime($folder . '/' . $file));
				}
        }

array_multisort($filetimeArray, SORT_DESC, $filenameArray);
echo json_encode($filenameArray,JSON_UNESCAPED_SLASHES);
?>
