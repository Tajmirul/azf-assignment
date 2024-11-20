'use client';
import Image from 'next/image';
import Link from 'next/link';
import SearchForm from './SearchForm';
import { Heart, ShoppingCart, User } from 'lucide-react';

const Logobar = () => {
    const toggleCartSidebar = () => {
        console.log('Toggle cart sidebar');
    };

    return (
        <nav className="">
            <div className="container h-[70px] flex items-center gap-7">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={130} height={37} />
                </Link>

                <SearchForm />

                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="text-black/60 bg-[#F5F5F5] size-8 rounded-md inline-flex items-center justify-center hover:bg-gray-200"
                    >
                        <User size={18} />
                    </Link>
                    <Link
                        href="/wishlist"
                        className="text-black/60 bg-[#F5F5F5] size-8 rounded-md inline-flex items-center justify-center hover:bg-gray-200"
                    >
                        <Heart size={18} />
                    </Link>
                    <button
                        onClick={toggleCartSidebar}
                        className="text-black/60 bg-[#F5F5F5] size-8 rounded-md inline-flex items-center justify-center hover:bg-gray-200"
                    >
                        <ShoppingCart size={18} />
                    </button>

                    <Link href="/cloud-services" className="ml-5">
                        <Image
                            src="/cloud-services.png"
                            alt="cloud-services"
                            width={177}
                            height={44}
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Logobar;
