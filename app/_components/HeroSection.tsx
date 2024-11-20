'use client';
import Categories from '@/components/Categories';
import { useGetCategories } from '@/hooks/queries/useGetCategories';
import Image from 'next/image';
import CategorySkeleton from './CategorySkeleton';

const HeroSection = () => {
    const { data, isLoading } = useGetCategories();

    return (
        <section className="banner relative" id="banner">
            <div className="container">
                <div className="relative h-[390px]">
                    {isLoading ? (
                        <CategorySkeleton />
                    ) : (
                        <Categories categories={data!} />
                    )}
                </div>
            </div>

            <Image
                src="/banner.png"
                width={1920}
                height={390}
                alt="banner"
                className="w-full h-full object-cover absolute inset-0"
            />
        </section>
    );
};

export default HeroSection;
