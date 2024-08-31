<?php
  require ("connect.php");
  $ref=$_SERVER['HTTP_REFERER'];
  $agent=$_SERVER['HTTP_USER_AGENT'];
  $ip=$_SERVER['REMOTE_ADDR'];
  $host = gethostbyaddr($_SERVER['REMOTE_ADDR']);

  $stmt = $conn->prepare("INSERT INTO connections (ref, agent, ip, host) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $ref, $agent, $ip, $host);
  $stmt->execute();
  $stmt->close();
  $conn->close();
?>