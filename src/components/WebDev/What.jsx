import React from "react";

export default function What() {
    return (
      <form className="space-y-2 rounded-md border bg-white py-4 pl-4 shadow">
      <h3 className="text-lg leading-6 font-medium text-gray-900">What is my User Agent?</h3>
        <p className="mt-1 text-sm text-gray-800">
        This page shows you what your web browser is sending in the "User-Agent" header for your HTTP requests
        </p>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Your User Agent is:</h3>
        <p className="mt-1 text-sm text-gray-800">
        Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 
        <p>Safari/537.36</p>
        </p>
    </form>
    );
}