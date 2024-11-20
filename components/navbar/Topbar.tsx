import Link from 'next/link';
import React from 'react';

const Topbar = () => {
    return (
        <nav className="bg-[#F0F1F1] text-[#434343]">
            <div className="container flex items-center justify-between h-[25px]">
                <div className="flex items-center gap-8">
                    <select
                        name="language"
                        id="language"
                        className="bg-transparent outline-none h-6 hover:text-primary transition-all mr-3.5"
                    >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="bangla">Bangla</option>
                    </select>
                    <Link href="/help" className="hover:text-primary">
                        Help Center
                    </Link>
                    <a href="tel:0964781656" className="hover:text-primary">
                        Helpline: 0964781656
                    </a>
                </div>

                <div className="flex items-center gap-8">
                    <Link href="/seller/signup" className="hover:text-primary">
                        Become a Seller
                    </Link>
                    <Link href="/orders/tracker" className="hover:text-primary">
                        Order Track
                    </Link>
                    <Link href="/signin" className="text-primary">
                        Sign up / Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
