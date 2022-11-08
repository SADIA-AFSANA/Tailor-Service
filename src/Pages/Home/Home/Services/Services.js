import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div><p className='text-2xl font-bold text-orange-600'>Services
            </p>

            </div>
            <div>
                <h1>Services:{services.length}</h1>
            </div>

        </div>
    );
};

export default Services;