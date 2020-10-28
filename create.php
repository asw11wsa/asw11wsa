<?php
require_once 'lib/call.php';
require_once 'view/header.php';
?>
<a href="create.php">create</a>
<form action="create_process.php" method="post">
    <p><input type="text" name="title" placeholder="Title"></p>
    <p><textarea name="description"></textarea></p>
    <p><input type="submit"></p>
</form>
<h2>
    <?php
    call_title();
    ?>
</h2>
<p>
    <?php
    call_contents();
    ?>
</p>
<?php require_once 'view/bottom.php';?>