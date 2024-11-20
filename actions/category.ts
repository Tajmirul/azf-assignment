import { ICategory } from '@/types';

export const getCategories = async () => {
    const res = await fetch(
        'https://api.shope.com.bd/api/v1/public/hero-categories',
        {
            method: 'GET',
        },
    );

    return res.json() as Promise<ICategory[]>;
};
