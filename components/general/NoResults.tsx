import { Ghost } from "lucide-react";

const NoResults = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center h-full w-full text-neutral-500 text-xl">
            <Ghost size={40} />
            It&aps s a ghost town in here ... no results found.
        </div>
    );
};

export default NoResults;