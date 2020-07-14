window.addEventListener( 'load' , () => {

  const btnFindMe = document.querySelector( '#btn-find-me' )
  btnFindMe.addEventListener( 'click' , getLocation )  

  function getLocation () {
    if ( navigator.geolocation ) {
      navigator.geolocation.watchPosition( showPosition , showError, { enableHighAccuracy: true, maximumAge: 1000, timeout: 60000 } )
    } else { 
      console.log('A localização geográfica não é suportada por este navegador')
    }
  }

  function showPosition ( position ) {
    const UserPosition = {
      Latitude: position.coords.latitude,
      Longitude: position.coords.longitude
    }

    console.clear()
    console.log('Latitude: ' + UserPosition.Latitude)
    console.log('Longitude: ' + UserPosition.Longitude)
  }

  function showError ( error ) { 
    switch ( error.code ) {
      case error.PERMISSION_DENIED:
        console.log('Usuário negou a solicitação de geolocalização.')
        break

      case error.POSITION_UNAVAILABLE:
        console.log('As informações de localização estão indisponíveis.')
        break

      case error.TIMEOUT:
        console.log('O pedido para obter a localização do usuário expirou.')
        break

      case error.UNKNOWN_ERROR:
        console.log('Ocorreu um erro desconhecido.')
        break
    }
  }
} )