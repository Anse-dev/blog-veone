// components/Sidebar.js
export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <h1 className="text-2xl font-bold p-4">Dashboard</h1>
            <ul>
                <li className="p-4 hover:bg-gray-700">Home</li>
                <li className="p-4 hover:bg-gray-700">Settings</li>
                <li className="p-4 hover:bg-gray-700">Profile</li>
            </ul>
        </div>
    );
}
