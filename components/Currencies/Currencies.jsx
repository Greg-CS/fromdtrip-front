import React from 'react'

export const Currencies = () => {
  return (
    <div className="grid lg:flex lg:items-center gap-10">
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M2 4h20v16H2z" fill="#FFF" />
          <path d="M21 7H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H3v-4h18v4z" />
        </svg>
        <span className="ml-2">Visa</span>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5.5-4.5-10-10-10zm-1 15H9v-2h2v2zm2.38-5.75l-.69 2.98H9.63l.69-2.98h2.06zm1.12 4.75h-1.5v-1h-1v1h-1.5v-3h1.5v1h1v-1h1.5v3z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <span className="ml-2">PayPal</span>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm2 2v8h12V8H6zm4 2a2 2 0 1 1 4 0v2h2V8a4 4 0 0 0-8 0v2h2zm4 0a2 2 0 1 1 4 0v2h2V8a4 4 0 0 0-8 0v2h2zm-2 4v2h4v-2h-4z" />
        </svg>
        <span className="ml-2">Cash On Delivery</span>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8zm-2-9h4v1.586l2-2V10h2v2.586l2-2V10h1V8h-1V6h-2v1.414l-2 2V7H9v1.586l-2-2V9H6V7h1V6H5v4h5v2H6v1h3v-1.414l2 2V13h2v-1.414l2 2V14h1v2h-1v1h2v-4h-5v-2h5V9h-3v1.414l-2-2V11H9v1.414l-2-2V12H6v2h1v1H5v-4h5V9H6V6h3v1.414l2-2V7h2v1.586l2-2V8h1V6h-1V5h2v4h-5v2h5v4h-2v-1h1v-2h-3v-1.586l-2 2V13H9v1.586l-2-2V14H6v-2z" />
        </svg>
        <span className="ml-2">Google Pay</span>
      </div>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm2 16.764h-4v-1.885c-1.011-.123-1.705-.729-1.705-1.472 0-.639.459-1.098 1.178-1.098.586 0 .942.361 1.225.691l1.22-.786C12.999 9.446 12.705 9 11.345 9c-1.965 0-3.237 1.315-3.237 3.153 0 1.98 1.176 3.184 3.1 3.358v.05h.436zm-.071-2.52c-.833 0-1.337-.531-1.337-1.232 0-.742.531-1.267 1.336-1.267.833 0 1.324.531 1.324 1.267 0 .73-.491 1.232-1.323 1.232zm2.805-5.136h-1.965v1.314h1.965v-1.314zm0 2.449h-1.965v1.992h1.465c.505 0 .806-.26.806-.658 0-.31-.182-.538-.471-.639.182-.03.445-.123.593-.203l.07-.02v-.942l-.37-.122c-.188-.061-.525-.183-.893-.183-1.006 0-1.748.682-1.748 1.87 0 1.206.74 1.898 1.854 1.898.334 0 .601-.03.76-.061l.1-.03v-.905h-.729c-.79 0-1.081-.415-1.081-.994 0-.546.364-.913.958-.913.525 0 .84.301.84.857 0 .274-.061.506-.122.658h.76zm-2.805-4.824h1.965V9.6h-1.965V5.643z" />
        </svg>
        <span className="ml-2">Cash App</span>
      </div>
    </div>
  );
}
