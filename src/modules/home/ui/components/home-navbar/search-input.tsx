import React from 'react';

function SearchInput(props: object) {
    // TODO: Add search function

    return (
        <form className={'flex w-full max-w-[600px]'}>
            <div className={'relative w-full'}>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-r-0 rounded-r-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search"
                    required
                />
            </div>
            <button className={'px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'} type={'submit'}>
                <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </form>
    );
}

export default SearchInput;