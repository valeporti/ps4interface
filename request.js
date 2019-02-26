function doRequest(e) {
  e.preventDefault();
  let from_date = $("#from_date").val();
  let to_date = $("#to_date").val();
  let latest = $("#latest").val();
  let format = $("#format").val();
  
  $.ajax({
      method: 'GET',
      url: 'https://api.ipify.org',
      data: {
        format: 'json'
        //from_date, to_date, latest, format
      }
    }).done(function(data, textStatus, jqXHR) {
      alert( "success, your IP: " + JSON.stringify(data) );
      console.log('data:', data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      alert( "error" );
      console.log('jqXHR:');
      console.log(jqXHR);
      console.log('textStatus:');
      console.log(textStatus);
      console.log('errorThrown:');
      console.log(errorThrown);
    })
    .always(function() {
      console.log( "complete w/always func" );
    });
 
}