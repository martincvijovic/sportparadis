import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/googleimage.png'
import Apple from '../../assets/applelogo.png'
import Mail from '../../assets/mail.png'
import Facebook from '../../assets/facebooklogo.png'
import PropTypes from 'prop-types';

const LoginSignup = ({ showSignup, setShowSignup }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("NG"); // Default country: Nigeria
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const countryNames = data.map((country) => ({
          label: `${country.name.common} (+${country.idd?.root || ""}${country.idd?.suffixes?.[0] || ""})`,
          value: country.cca2,
        }));
        console.log(countryNames);
        
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setDropdownVisible(false); // Close dropdown after selecting
  };

  return (
    <div className="fixed top-8 inset-0 z-50 flex items-center justify-center bg-opacity-50 rounded-xl h-[530px] overflow-y-scroll">
      <div className={showSignup ? 'overlays' : ''}
        onClick={() => setShowSignup(false)}
        ></div>
      <div className="relative bg-white text-black rounded-xl w-[470px] md:w-[600px] explore h-full overflow-y-scroll scroll overflow-x-hidden">
        <div className="sticky top-0 right-0 bg-white z-50 flex items-center justify-between mb-4 border-b-[1px] p-4 py-2 border rounded-t-xl">
          <button onClick={() => setShowSignup(false)}  className="text-[2rem]">&times;</button>
          <p className="text-[1rem] font-[600]">Log in or Sign up</p>
          <div></div>
        </div>
        <div className="px-6 py-2 mt-[]">
          <h2 className="text-[1.5rem] font-semibold mb-2">Welcome to KNLTB</h2>
          <form>
            <div className="relative">
              <div
                onClick={() => setDropdownVisible(!dropdownVisible)} // Toggle dropdown visibility
                className="border p-2 rounded-t-md w-full cursor-pointer relative"
              >
                <span className="block text-gray-500 text-sm">Country code</span>
                <span className="block text-black font-medium">
                  {
                    countries.find((country) => country.value === selectedCountry)?.label ||
                    "Select a Country"
                  }
                </span>
              </div>
              {dropdownVisible && ( // Render dropdown only if visible
                <div className="absolute left-0 top-full bg-white shadow-md border rounded-md w-full max-h-48 overflow-auto z-10">
                  {countries.map((country) => (
                    <div
                      key={country.value}
                      onClick={() => handleCountryChange(country.value)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <span className="block text-gray-500 text-sm">hdgg</span>
                      <span className="block">{country.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              className="p-4 rounded-b-md border w-full outline-none"
              type="number"
              placeholder='Phone number'
            />
            <p className='text-[.9rem]'>We'll call or text you to confirm your number. Standard message and data rates apply. <Link className='underline'>Privacy Policy</Link></p>
            <div className='flex'><button className='w-full bg-pink-600 rounded-lg p-2 mt-4' type='submit'>Continue</button></div>
          </form>
          <div className='flex items-center justify-center relative mt-2'><p className='or'>or</p></div>
          <div className='flex flex-col gap-2'>
              <form action="">
                <button className='w-full flex items-center justify-between border rounded-md shadow-sm p-1 px-4'>
                  <div className='w-[1.8rem]'><img src={Google} alt="" /></div>
                  <div className='text-[.9rem] font-[500]'>Continue with Google</div>
                  <div></div>
                </button>
              </form>
              <form action="">
                <button className='w-full flex items-center justify-between border rounded-md shadow-sm p-1 px-4'>
                  <div className='w-[1.8rem]'><img src={Apple} alt="" /></div>
                  <div className='text-[.9rem] font-[500]'>Continue with Apple</div>
                  <div></div>
                </button>
              </form>
              <form action="">
                <button className='w-full flex items-center justify-between border rounded-md shadow-sm p-1 px-4'>
                  <div className='w-[1.8rem]'><img src={Mail} alt="" /></div>
                  <div className='text-[.9rem] font-[500]'>Continue with Email</div>
                  <div></div>
                </button>
              </form>
              <form action="">
                <button className='w-full flex items-center justify-between border rounded-md shadow-sm p-1 px-4'>
                  <div className='w-[1.8rem]'><img src={Facebook} alt="" /></div>
                  <div className='text-[.9rem] font-[500]'>Continue with Facebook</div>
                  <div></div>
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


LoginSignup.propTypes = {
  showSignup: PropTypes.bool.isRequired, // Boolean prop
  setShowSignup: PropTypes.bool.isRequired
};