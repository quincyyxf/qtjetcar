import JetCarCard from '@/components/JetCarCard';
import Heading from '@/components/heading';
import getAllJetCars from './actions/getAllJetCars';

export default async function Home() {
  const jetcars = await getAllJetCars();
  
  return (
    <>
        <Heading title='Available Jet Cars'/>
        {cars.length > 0 ? (
          cars.map((car) => <JetCarCard car={car} />)
        ) :(
          <p>No cars available at the moment</p>
        )}
    </> 
  );
}
  