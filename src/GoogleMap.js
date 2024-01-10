import React from 'react';

function GoogleMap() {
    return (
        <><p>Lorem Ipsum </p><div style={{ width: '100%', height: '250px', position: 'relative', marginLeft: '-2rem' }} className='map-responsive'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.354426762!2d12.371191770688828!3d41.91020879180107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRoma%20RM!5e0!3m2!1sit!2sit!4v1704850731320!5m2!1sit!2sit"
                width="350"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div></>
    );
}

export default GoogleMap;
