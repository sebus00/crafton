import markerImage from './marker.png';

export default function initMap() {
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAzvtXXZKy5qlZGpVgjIxneAwYvPQZiOXU&callback=initMap';
  script.defer = true;
  script.async = true;

  window.initMap = () => {
    const position = { lat: 52.4165, lng: 16.9329 };
    // eslint-disable-next-line no-undef
    const map = new google.maps.Map(document.getElementById('google-maps-wrapper'), {
      center: position,
      zoom: 16,
      disableDefaultUI: true,
      styles: [
        {
          featureType: 'administrative',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape.man_made',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit.line',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ]
    });
    // eslint-disable-next-line no-undef
    const marker = new google.maps.Marker({
      position,
      map,
      icon: markerImage,
      // eslint-disable-next-line no-undef
      animation: google.maps.Animation.DROP
    });
  };

  document.head.appendChild(script);
}
