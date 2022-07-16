import React from "react";

export default function MD5() {
    return (
      <form className="space-y-4 rounded-md border bg-white py-5 pl-4 shadow">
      <h2 className="text-xl font-bold">MD5 Hash Generator</h2>
      <div className="mt-1 pr-4">
        <textarea
          id="about"
          name="about"
          rows={3}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
          defaultValue={''}
        />
      </div>
    </form>
    );
}