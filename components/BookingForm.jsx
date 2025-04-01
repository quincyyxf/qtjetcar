const BookingForm = () => {
    return (<div className="mt-6">
        <h2 className="text-xl font-bold">Book this Jet Car</h2>
        <form className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="rental_date" className="block text-sm font-medium text-gray-700">Rental Date</label>
                    <input type="date" id="rental_date" name="rental_date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div>
                    <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">Start Time</label>
                    <input type="time" id="start_time" name="start_time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
                <div>
                    <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">End Time</label>
                    <input type="time" id="end_time" name="end_time" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>
            </div>

            <div className="mt-6">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    Book Jet Car
                </button>
            </div>
        </form>
    </div>);
}

export default BookingForm;