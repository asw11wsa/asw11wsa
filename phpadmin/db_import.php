<?php
/* $Id: db_import.php,v 2.4 2005/11/24 09:12:16 nijel Exp $ */
// vim: expandtab sw=4 ts=4 sts=4:

require_once('./libraries/common.lib.php');

/**
 * Gets tables informations and displays top links
 */
require('./libraries/db_details_common.inc.php');
require('./libraries/db_details_db_info.inc.php');

$import_type = 'database';
require('./libraries/display_import.lib.php');

/**
 * Displays the footer
 */
require('./libraries/footer.inc.php');
?>

