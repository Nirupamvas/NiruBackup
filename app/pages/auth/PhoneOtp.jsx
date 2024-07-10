import React, { useState, useEffect, useRef } from 'react'


const PhoneOtp = () => {
    const [inputs, setInputs] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        const handleKeyDown = (e, index) => {
            if (
                !/^[0-9]{1}$/.test(e.key)
                && e.key !== 'Backspace'
                && e.key !== 'Delete'
                && e.key !== 'Tab'
                && !e.metaKey
            ) {
                e.preventDefault();
            }

            if (e.key === 'Delete' || e.key === 'Backspace') {
                if (index > 0) {
                    const newInputs = [...inputs];
                    newInputs[index - 1] = '';
                    setInputs(newInputs);
                    inputRefs.current[index - 1].focus();
                }
            }
        };

        const handlePaste = (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text');
            if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
                return;
            }
            const digits = text.split('');
            const newInputs = [...inputs];
            digits.forEach((digit, index) => {
                newInputs[index] = digit;
            });
            setInputs(newInputs);
            inputRefs.current[inputs.length - 1].focus();
        };

        inputRefs.current.forEach((input, index) => {
            if (input) {
                input.addEventListener('keydown', (e) => handleKeyDown(e, index));
                input.addEventListener('paste', handlePaste);
            }
        });

        return () => {
            inputRefs.current.forEach((input, index) => {
                if (input) {
                    input.removeEventListener('keydown', (e) => handleKeyDown(e, index));
                    input.removeEventListener('paste', handlePaste);
                }
            });
        };
    }, [inputs]);

    const handleInput = (e, index) => {
        const { value } = e.target;
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        if (value) {
            if (index < inputs.length - 1) {
                inputRefs.current[index + 1].focus();
            } else {
                inputRefs.current[index].blur();
                // Add submit button focus if needed
            }
        }
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };
  return (
    <div className="relative font-inter antialiased">
    <main className="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">
                <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
                        <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your phone number.</p>
                    </header>
                    <form id="otp-form" onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center gap-3">
                            {inputs.map((input, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    value={input}
                                    onChange={(e) => handleInput(e, index)}
                                    onFocus={handleFocus}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    maxLength="1"
                                    pattern="\d*"
                                />
                            ))}
                        </div>
                        <div className="max-w-[260px] mx-auto mt-4">
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                            >
                                Verify Account
                            </button>
                        </div>
                    </form>
                    <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div>
                </div>

            </div>
        </div>
       
    </main>

</div>

  )
}

export default PhoneOtp