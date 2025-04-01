import jetcars from '@/data/jetcars.json';
import Heading from '@/components/heading';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';

const JetCarPage = ({ params }) => {
    const { id } = params;
    const jetcar = jetcars.find((jetcar) => jetcar.$id === id);

    if (!jetcar) {
        return <Heading title="Jet Car Not Found" />;
    }

    return (
        <>
            <Heading title={jetcar.name} />
            <div className="bg-white shadow rounded-lg p-6">
                <Link href="/jetcars.html" className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
                    <FaChevronLeft className="inline mr-1" />
                    <span className="ml-2">Back to Jet Cars</span>
                </Link>

                <div className="flex flex-col sm:flex-row sm:space-x-6">
                    <img src="images/jetcars/jetcar-1.jpg" alt="Luxury Jet Car" className="w-full sm:w-1/3 h-64 object-cover rounded-lg" />

                    <div className="mt-4 sm:mt-0 sm:flex-1">
                        <p className="text-gray-600 mb-4">
                            {jetcar.description}
                        </p>

                        <ul className="space-y-2">
                            <li><span className="font-semibold text-gray-800">Speed:</span>{jetcar.speed_mph}</li>
                            <li><span className="font-semibold text-gray-800">Capacity:</span>{jetcar.capacity}</li>
                            <li><span className="font-semibold text-gray-800">Features:</span>{jetcar.features}</li>
                            <li><span className="font-semibold text-gray-800">Availability:</span>{jetcar.availability}</li>
                            <li><span className="font-semibold text-gray-800">Price:</span>${jetcar.price_per_hour}/hour</li>
                            <li><span className="font-semibold text-gray-800">Location:</span>{jetcar.location}</li>
                        </ul>
                    </div>
                </div>

                <BookingForm/>
                
            </div>
        </>
    );
};

export default JetCarPage;
