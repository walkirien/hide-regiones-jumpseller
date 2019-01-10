
 $(document).ready(function(){
   var shipping_to = ["01"]; //hides all regiones not included in this array
   var shipping_to_comuna = ["8261239", "8261249"]; //hides all comunas not included in this array

   setTimeout(function(){
     // remove other regions
     $('#order_shipping_address_region option').filter(function() {
       return $.inArray($.trim($(this).val()), shipping_to) == -1;
     }).remove();

     // fire change event on Region
     var element = $("#order_shipping_address_region");
     element.change();
     // fire event manually
     var evt = document.createEvent("HTMLEvents");
     evt.initEvent("change", false, true);
     element[0].dispatchEvent(evt);

     // remove other comunas
     setTimeout(function(){
       $('#order_shipping_address_municipality option').filter(function() {
         return $.inArray($.trim($(this).val()), shipping_to_comuna) == -1;
       }).remove();
     }, 1000);


   }, 1000);
 })
