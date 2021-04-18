import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Call us now (9am-8pm)',
        description: '+88 01796582287',
        icon: faPhone,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhaka, City Capital Read-1200',
        icon: faMapMarker,
        background: 'dark'
    }
]
const BusinessInfo = () => {
    return (
        <section style={{width: '100%'}} className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;