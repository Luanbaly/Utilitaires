import React, { useRef, useState } from "react";

// Utility functions
import { generatePassword } from "./utils/form.utils";

export default function Password() {
  const lowercaseRef = useRef();
  const uppercaseRef = useRef();
  const numberRef = useRef();
  const symbolsRef = useRef();
  const lengthRef = useRef();

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPassword = generatePassword(
      lowercaseRef.current.checked,
      uppercaseRef.current.checked,
      numberRef.current.checked,
      symbolsRef.current.checked,
      lengthRef.current.value || 4
    );

    setPassword(newPassword);
  };

    return (
      <form className="space-y-4 rounded-md border bg-white py-5 pl-4 shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Password Random Generator</h2>
        
        <div className="flex">
          <input
            type="number"
            max={50}
            min={4}
            name="password-length"
            style={{ maxWidth: "8ch" }}
            ref={lengthRef}
            className="border rounded border-gray-400 shadow pt-1 pb-1 pl-2"
          />
        </div>
        <fieldset className="space-y-5">
        <legend className="sr-only">Notifications</legend>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="comments"
              ref={lowercaseRef}
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-900">
            Include Lowercase ( e.g. abcdefgh )
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="candidates"
              ref={uppercaseRef}
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="candidates" className="font-medium text-gray-900">
            Include Uppercase ( e.g. ABCDEFGH )
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="offers"
              ref={numberRef}
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-900">
            Include Numbers ( e.g. 123456789 )
            </label>
          </div>
        </div>
        <div className="relative flex items-start pb-4">
          <div className="flex items-center h-5">
            <input
              id="offers"
              ref={symbolsRef} 
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-900">
            Include Symbols ( e.g. @#$% )
            </label>
          </div>
        </div>
      </fieldset>
        <button
        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Random
      </button>
      <div className="pt-4 pr-4" >
      <h4 className="border rounded border-gray-400 shadow pt-1 pb-1 pl-2">{password}</h4>
      </div>
    </form>
    );
}