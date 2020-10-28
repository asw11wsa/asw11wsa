<?php
require_once 'lib/call.php';
require_once 'view/header.php';
require_once 'dbconnect.php';
?>

<a href="create.php">create</a>
<?php if(isset($_GET['id'])){?>
    <a href="update.php?id=<?= $_GET['id']?>">update</a>
<?php }?>
<?php if(isset($_GET['id'])){?>
    <form action="delete_process.php" method="post">
        <input type="hidden" name="title" value="<?= $_GET['id']?>">
        <input type="submit" value="delete" onclick="button_event();">
    </form>
<?php }?>

<h2><?php call_title();?></h2>
<p><?php call_contents();?></p>
<script>
    function button_event() {
        if(confirm("정말 삭제하시겠습니까??") == true){
            document.form.submit();
        }else{

        }
    };
    if('<?php echo $_GET['id']?>'){
        console.log('<?php echo $_GET['id']?>'+'당');
    };
</script>
<?php require_once 'view/bottom.php';?>