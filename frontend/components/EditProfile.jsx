import React from 'react'

export const EditProfile = () => {
  return (
    <>
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="full-name" type="text" placeholder="Niru" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input id="phone-number" type="text" placeholder="+91 9876543210" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" placeholder="niru@example.com" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Pick Up Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="pickup-address-1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
              <input id="pickup-address-1" type="text" placeholder="123 Main St" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="pickup-address-2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input id="pickup-address-2" type="text" placeholder="Apt 456" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="pickup-city" className="block text-sm font-medium text-gray-700">City</label>
              <input id="pickup-city" type="text" placeholder="Hyderabad" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="pickup-state" className="block text-sm font-medium text-gray-700">State</label>
              <input id="pickup-state" type="text" placeholder="Telangana" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="pickup-zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input id="pickup-zip" type="text" placeholder="500070" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="pickup-country" className="block text-sm font-medium text-gray-700">Country</label>
              <select id="pickup-country" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="" disabled selected>Select country</option>
                <option value="usa">India</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="delivery-address-1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
              <input id="delivery-address-1" type="text" placeholder="123 Main St" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="delivery-address-2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input id="delivery-address-2" type="text" placeholder="Apt 456" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="delivery-city" className="block text-sm font-medium text-gray-700">City</label>
              <input id="delivery-city" type="text" placeholder="Hyderabad" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="delivery-state" className="block text-sm font-medium text-gray-700">State</label>
              <input id="delivery-state" type="text" placeholder="Telangana" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="delivery-zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input id="delivery-zip" type="text" placeholder="500070" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="space-y-2">
              <label htmlFor="delivery-country" className="block text-sm font-medium text-gray-700">Country</label>
              <select id="delivery-country" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="India">Select country</option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-end mt-6">
        <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Save Changes</button>
      </div>
    </div>


    </>
  )
}
