function Address() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Select Address</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Name:</label>
          <input type="text" placeholder="Enter a Name" className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-medium">Phone Number:</label>
          <input type="text" placeholder="Enter Phone Number" className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Address Line:</label>
          <textarea placeholder="Type an address" className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-medium">District:</label>
          <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div>
          <label className="block font-medium">State:</label>
          <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Pincode:</label>
          <input type="text" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div className="md:col-span-2">
          <label><input type="radio" value="Home" id="Home" name="address"/>Home Address
          </label>
        </div>
        <div className="md:col-span-2">
          <label>
          <input type="radio" value="Office" id="Office" name="address"/>Office Address
          </label>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition w-full">
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default Address;
