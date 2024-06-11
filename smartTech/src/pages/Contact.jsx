
const Contact = () => {
  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"></textarea>
        </div>
        <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">Send</button>
      </form>
    </div>
  );
}

export default Contact;
