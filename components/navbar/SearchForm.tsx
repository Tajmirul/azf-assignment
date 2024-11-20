import { Search } from 'lucide-react';
import React from 'react';

const SearchForm = () => {
    return (
        <div className="relative grow">
            <input
                type="text"
                className="h-11 pl-[13px] pr-14 bg-[#EFF0F5] placeholder:text-[#707070] text-sm w-full rounded-[10px] ring-2 ring-transparent ring-offset-2 focus:ring-primary focus:outline-none transition-all"
            />
            <button className="bg-primary text-primary-foreground rounded-[10px] h-11 w-12 inline-flex items-center justify-center absolute top-0 right-0 hover:bg-primary-foreground hover:text-primary">
                <Search size={22} />
            </button>
        </div>
    );
};

export default SearchForm;
