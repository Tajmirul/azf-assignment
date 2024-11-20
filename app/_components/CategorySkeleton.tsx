import { cn } from '@/utils/cn';
import React from 'react';

interface Props {
    isSubCategory?: boolean;
}

const CategorySkeleton = ({ isSubCategory }: Props) => {
    return (
        <div
            className={cn(
                'absolute top-0 left-0 z-[1] w-[230px] h-[calc(100%-11px)] bg-white py-5 flex flex-col gap-y-3',
                {
                    'translate-x-full border-l border-gray-200 h-full':
                        isSubCategory,
                },
            )}
        >
            <div className="mx-2.5 h-3 w-3/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-4/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-2/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-3/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-3/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-4/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-2/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-3/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-3/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-4/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-2/5 rounded-sm bg-gray-200" />
            <div className="mx-2.5 h-3 w-3/5 rounded-sm bg-gray-200" />
        </div>
    );
};

export default CategorySkeleton;
