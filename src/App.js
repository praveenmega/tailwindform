import React from "react";

function App() {
  return (
    <div className="m-10 max-w-lg p-10">
      <form className="space-y-5 p-10">
        <div>
          <label className="text-gray-700" for="name">
            Full name
          </label>
          <input
            className="bg-gray-100 block w-full border-0 rounded-md focus:ring-gray-500"
            type="text"
            name="name"
          />
        </div>
        <div>
          <label className="text-gray-700" for="email">
            Email address
          </label>
          <input
            className="bg-gray-100 block w-full border-0 rounded-md focus:ring-gray-500"
            type="email"
            name="email"
          />
        </div>
        <div>
          <label className="text-gray-700" for="eventdate">
            When is your event
          </label>
          <input
            className="bg-gray-100 block w-full border-0 rounded-md focus:ring-gray-200"
            type="date"
            name="eventdate"
          />
        </div>
        <div>
          <label className="text-gray-700" for="event">
            What type of event is it?
          </label>
          <select
            className="bg-gray-100 block w-full border-0 rounded-md focus:ring-gray-200"
            name="event"
          >
            <option value="Corporate">Corporate event</option>
            <option value="Pulic">Wedding</option>
            <option value="private">Birthday</option>
            <option value="private">Other</option>
          </select>
        </div>
        <div>
          <label className="text-gray-700" for="detail">
            Additional details
          </label>
          <textarea
            className="bg-gray-100 block w-full border-0 rounded-md focus:ring-gray-200"
            rows="3"
            name="detail"
          ></textarea>
        </div>
        <div>
          <input
            className="bg-gray-300 rounded-sm border-0 mr-2 checked:bg-gray-700 focus:ring-1 focus:ring-gray-400"
            type="checkbox"
            name="offer"
          />
          <label className="text-gray-700" for="offer">
            Email me news and special offers
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;
