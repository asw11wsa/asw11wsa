<?php
require_once 'lib/call.php';
require_once 'view/header.php';
?>
<a href="create.php">create</a>
<?php if(isset($_GET['id'])){?>
    <a href="update.php?id=<?= $_GET['id']?>">update</a>
<?php }?>

<form action="update_process.php" method="post">
    <input type="hidden" name="old_title" value="<?= $_GET['id']?>"
    <p><input type="text" name="title" placeholder="Title" value="<?php call_title(); ?>"></p>
    <p><textarea name="description" style="width: 60vw;height: 30vh;"><?php call_contents(); ?></textarea></p>
    <p><input type="submit"></p>
</form>
<?php require_once 'view/bottom.php';?>