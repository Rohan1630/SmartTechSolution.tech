

const About = () => {
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">We are a tech services company dedicated to providing the best solutions for your business. Our team of experts is here to help you achieve your goals.</p>
      <h2 className="text-2xl font-bold mb-2">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-gray-600">CEO</p>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold">Jane Smith</h3>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold">Mike Johnson</h3>
          <p className="text-gray-600">Lead Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
