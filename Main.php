<?php
// include 'db_connection.php';

// $conn = OpenCon();

// echo "Connected Successfully";

// CloseCon($conn);
 class Main
 {
//     We have an array of IDs and prices. Please create two functions as per the below, 
// One which will return the lists, which have prices greater than a certain threshold that can be dynamic provided by the user. 
// Another function will return the total sum of prices from that filtered list
function greatestPrice(priceProvidedByUser)
{
    $data = XmlToJson.converter();
    $result = array_diff($data.price, priceProvidedByUser);
    return $result;
}

function TotalSum(keyword)
{
    $data = XmlToJson.converter();
    $result = array_filter($data, keyword).array_sum($data.price);
    return $result;
}

 }
?>