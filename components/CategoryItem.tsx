import { ICategory } from '@/types';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { memo } from 'react';
import Categories from './Categories';

interface Props {
    category: ICategory;
}

const CategoryItem = memo(({ category }: Props) => {
    return (
        <div className="py-[5px] px-2.5 category-item">
            <Link
                href={`/categories/${category.id}`}
                className="flex items-center justify-between w-full hover:text-primary"
            >
                <span>{category.title}</span>
                {category.childrens && <ChevronRight size={10} />}
            </Link>

            {category.childrens?.length && (
                <Categories isSubCategory categories={category.childrens} />
            )}
        </div>
    );
});

CategoryItem.displayName = 'CategoryItem';

export default CategoryItem;
