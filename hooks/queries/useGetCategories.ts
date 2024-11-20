import { ICategory } from '@/types';
import { axiosInstance } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

const getCategories = async () => {
    const res = await axiosInstance<ICategory[]>({
        url: '/hero-categories',
        method: 'GET',
    });

    return res.data;
};

export const useGetCategories = () => {
    const query = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    return query;
};
