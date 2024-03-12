import { cn } from "@/lib/utilts"

type LoadingProps = {
    className?: string
}

const Loading = ({className}: LoadingProps) => {
    return (
        <div className={cn("animate-pulse bg-gray-200 dark:bg-gray-700 h-[100px] w-full rounded-[8px] p-2", className)} />
    );
};
export default Loading;
