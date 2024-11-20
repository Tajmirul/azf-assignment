import { ICategory } from '@/types';
import { cn } from '@/utils/cn';
import { memo } from 'react';
import CategoryItem from './CategoryItem';

interface Props {
    categories: ICategory[];
    isSubCategory?: boolean;
}

const Categories = memo(({ categories, isSubCategory = false }: Props) => {
    return (
        <div
            className={cn(
                'absolute top-0 left-0 z-[1] w-[230px] h-[calc(100%-11px)] bg-white py-3 flex flex-col transition-all',
                {
                    'subcategory-list translate-x-[calc(100%-2px)] border-l border-gray-200 h-full':
                        isSubCategory,
                },
            )}
        >
            {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
            ))}
        </div>
    );
});

Categories.displayName = 'Categories';

export default Categories;
