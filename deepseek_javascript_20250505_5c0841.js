import { client } from '../lib/sanity';

export default function Services({ services }) {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-heading text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service._id} className="bg-white p-6 rounded-xl shadow-lg">
            <img 
              src={service.icon.asset.url} 
              alt={service.title}
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const services = await client.fetch(`*[_type == "service"]`);
  return { props: { services } };
}