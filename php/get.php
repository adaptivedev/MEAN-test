<?php
	$ch = curl_init("http://localhost/node.js/");
	$fp = fopen("example_htmlpage.html", "w");

	curl_setopt($ch, CURLOPT_FILE, $fp);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_exec($ch);
	curl_close($ch);
	fclose($fp);
?>
