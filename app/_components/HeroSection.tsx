import { getCategories } from '@/actions/category';
import Categories from '@/components/Categories';
import Image from 'next/image';

const HeroSection = async () => {
    const data = await getCategories();

    return (
        <section className="banner relative" id="banner">
            <div className="container">
                <div className="relative h-[390px]">
                    <Categories categories={data} />
                </div>
            </div>

            <Image
                src="/banner.png"
                width={1920}
                height={390}
                alt="banner"
                loading="eager"
                className="w-full h-full object-cover absolute inset-0"
            />
        </section>
    );
};

export default HeroSection;
