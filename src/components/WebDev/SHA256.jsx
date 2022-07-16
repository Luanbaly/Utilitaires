import React, { useState } from 'react';
import { sha1, sha256, sha384, sha512 } from 'crypto-hash';

export default function SHA256() {
    const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
    let [text_input, setTextInput] = useState('');
    let [algorithm, setAlgorithm] = useState('sha1');
    let [output, setOutput] = useState('');
    const handleTextInput = async (e) => {
        let value = e.target.value;

        let result = '';

        if (algorithm == 'sha1') {
            result = await sha1(value);
        } else if (algorithm == 'sha256') {
            result = await sha256(value);
        } else if (algorithm == 'sha384') {
            result = await sha384(value);
        } else if (algorithm == 'sha512') {
            result = await sha512(value);
        }

        setOutput(result);

        setTextInput(value);
    }

    const handleAlgorithmChange = async (e) => {

        let value = e.target.value;

        let result = '';

        if (text_input) {

            if (value == 'sha1') {
                result = await sha1(text_input);
            } else if (value == 'sha256') {
                result = await sha256(text_input);
            }
            else if (value == 'sha384') {
                result = await sha384(text_input);
            }
            else if (value == 'sha512') {
                result = await sha512(text_input);
            }

        }

        setAlgorithm(value);

        setOutput(result);
    }

    return (
        <form className='space-y-4 rounded-md border bg-white py-3 pl-4 shadow'>

                <h4 className="text-xl font-bold pb-2">Sha256 Hash Generator</h4>
                <form>
                    <div className="mt-1 pr-4">
                    <textarea
                    id="text-input"
                    type="text"
                    name="about"
                    value={text_input} 
                    onChange={handleTextInput}
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                    placeholder="Enter content to hash"
                    />
                    </div>
                    </form>

                <div className="pt-2 pb-2">
                        {
                            algorithms.map(algo => {
                                return (
                                    <div className="pt-1 pb-1" key={algo}>
                                        <input className="form-check-input" type="radio" name="algorithm" id={algo} value={algo} checked={algorithm === algo} onChange={handleAlgorithmChange} />
                                        <label className="text-gray-900 pl-2 font-bold" htmlFor={algo}>
                                            {algo}
                                        </label>
                                    </div>
                                )
                            }
                            )}
                </div>

                <div className="pb-4">
                    <div className="pr-4">
                        <p className="border rounded border-gray-400 shadow pt-1  pb-1 pl-2">
                            {output}
                        </p>
                    </div>
                </div>

        </form>

    );

}