
const Services = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Web Development</h2>
          <p className="text-gray-700">Building modern and responsive websites to help your business grow online.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Mobile Development</h2>
          <p className="text-gray-700">Creating mobile applications that provide an engaging user experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Cloud Solutions</h2>
          <p className="text-gray-700">Implementing scalable cloud solutions to meet your business needs.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
