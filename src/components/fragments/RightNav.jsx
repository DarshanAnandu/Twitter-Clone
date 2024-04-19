import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
        <div className="flex items-center rounded-[50px] border active:border-blue-500 px-4 text-[#fff]">
            <IoIosSearch color="white" size={20} />
            <input type="search" placeholder="Search" className="bg-transparent outline-none px-5 py-2" />
        </div>
    );
}

const Subsciption = () => {
    return (
        <div className="flex flex-col rounded-3xl border-[0.5px] border-[#2c2c2c] text-[#fff] my-5 py-3 px-4">
            <p className="font-bold my-1">Subscribe to Premium</p>
            <p className="my-1">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className="my-1 font-semibold bg-[#1d9bf0] hover:bg-[#1d9cf098] hover:translate-y-[-1px] hover:shadow-2xl active:translate-y-[0.15px] py-2 px-4 rounded-2xl w-max">Subscribe</button>
        </div>
    );
}

const Explore = () => {
    const ExploreContent = [
        {
            topic: 'Mobile',
            name: 'Unveiling the Samsung Galaxy S22 Series: Innovation Redefined!',
            date: '2024-04-19T08:00:00.000Z'
        },
        {
            topic: 'Mobile',
            name: 'Discover the Next Generation of Smartphones with Samsung Galaxy Z Fold 4',
            date: '2024-04-19T08:15:00.000Z'
        },
        {
            topic: 'Accessories',
            name: 'Enhance Your Mobile Experience with Samsung Galaxy Watch 5: Stylish and Smart!',
            date: '2024-04-19T08:30:00.000Z'
        },
        {
            topic: 'Mobile',
            name: 'Introducing the Samsung Galaxy A73: Premium Features at an Affordable Price',
            date: '2024-04-19T08:45:00.000Z'
        },
        {
            topic: 'Mobile',
            name: 'Unleash Your Creativity with the Samsung Galaxy Note 10: The Ultimate Productivity Tool',
            date: '2024-04-19T09:00:00.000Z'
        },
    ]
    const formatPostedTime = (postedAt) => {
        const postedTime = new Date(postedAt);
        const currentTime = new Date();
        const timeDifference = Math.floor((currentTime - postedTime) / 1000); // Convert milliseconds to seconds

        // If posted within the same minute
        if (timeDifference < 60) {
            return `${timeDifference} seconds ago`;
        }
        // If posted within the same hour
        else if (timeDifference < 3600) {
            return `${Math.floor(timeDifference / 60)} minutes ago`;
        }
        // If posted today
        else if (
            postedTime.getDate() === currentTime.getDate() &&
            postedTime.getMonth() === currentTime.getMonth() &&
            postedTime.getFullYear() === currentTime.getFullYear()
        ) {
            const hoursDifference = Math.floor(timeDifference / 3600);
            return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
        }
        // If posted before today
        else {
            return postedTime.toLocaleString(); // Return full date and time
        }
    };
    return (
        <div className="flex flex-col rounded-3xl border-[0.5px] border-[#2c2c2c] text-[#fff] my-5 py-3 px-4">
            <div className="flex justify-between">
                <h1 className="font-semibold">Explore</h1>
                <p className="text-[#FFCC99] bg-[#491600] rounded px-1">Beta</p>
            </div>
            <div>
                {ExploreContent.map((e, i) => (
                    <div key={i} className="my-1 border-b-[0.5px] border-b-[#2c2c2c]">
                        <h1 className="my-1">{e.name}</h1>
                        <div className="flex my-1">
                            <p className="p-1">{formatPostedTime(e.date)}</p>
                            <p className="p-1">{e.topic}</p>
                        </div>
                    </div>
                ))}
                <button className="text-[#1D9BF0]">Show more</button>
            </div>
        </div>
    );
}

const WhoToFollow = () => {
    return (
        <div className="flex flex-col rounded-3xl border-[0.5px] border-[#2c2c2c] text-[#fff] my-5 py-3 px-4">
            <h1 className="font-semibold">Who to follow</h1>
            <p className="my-1">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className="text-[#1D9BF0]">Show more</button>
        </div>
    );
}

const RightNav = () => {
    return (
        <div className="py-2 px-3 w-[370px]">
            <Search />
            <Subsciption />
            <Explore />
            <WhoToFollow />
        </div>
    )
}

export default RightNav