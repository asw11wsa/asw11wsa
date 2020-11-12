<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <script>
        const item = {
            inventory : 0,
            price : 3,
            salePrice : 2,
            saleInventory : 1 ,
        };

        function getLowestPrice(item) {
            var count = item.inventory;
            var price = item.price;
            if (item.salePrice){
                var count = item.saleInventory;
                if(count > 0){
                    price = item.salePrice;
                }
            }
            if(count){
                return price;
            }
            return 0;
        }

        console.log(getLowestPrice(item));
    </script>
</head>
<body>

</body>
</html>