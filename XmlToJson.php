<?php
class XmlToJson {

    public function converter() {
        $xml_string = "http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml";
        $xml = simplexml_load_string($xml_string);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);
        return $array;
    }
}
?>