import {useState} from "react";

export const useApi = (callback: () => Promise<any>) => {
    const [result, setResult] = useState<any>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const job = () => {
        setIsLoading(true);
        callback()
            .then((result) => {
                if (result.status !== 200) alert('Плохой статус');
                setResult(result);
            })
            .catch((result) => {
                alert('Возникла ошибка');
                setResult(result);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return [job, result, isLoading] as const;
}