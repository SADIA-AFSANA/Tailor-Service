import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import Loading from '../../../shared/Loading/Loading';
import ServiceCard from '../../../shared/ServiceCard/ServiceCard';

const Services = ({ limit }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useTitle('Service')

    useEffect(() => {
        setLoading(true)
        fetch(`https://tailor-service-server.vercel.app/services${limit ? `?limit=${limit}` : ""}`)

            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [limit]);
    if (loading) {
        return <h1>loading...</h1>
    }
    return (
        <div>
            <div><p className='text-2xl font-bold text-orange-600'>Services
            </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;