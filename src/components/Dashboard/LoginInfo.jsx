import React, { useEffect, useState } from 'react'

function LoginInfo() {
    const [users, setUsers] = useState([]);


    // ✅ Page load হলে users আনবে localStorage থেকে
    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(savedUsers);
    }, []);

    // ✅ Delete user function
    const handleDelete = (index) => {
        const confirmDelete = confirm("⚠️ Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        // user বাদ দেওয়া
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);

        // localStorage update করা
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);

        alert("🗑️ User deleted successfully!");
    };


    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 mt-5">
            <h1 className=" text-4xl font-bold text-pink-800 text-center my-4">👑 Admin <span className='text-blue-600'>Dashboard</span></h1>

            <h2 className='text-xl font-bold mt-8 mb-4'>📩 User Sing Up Info</h2>
            {users.length === 0 ? (
                <p className="text-center text-gray-600">No users found 😢</p>
            ) : (

                <div className="overflow-x-auto">
                    <table className="w-full  bg-white shadow-lg rounded">
                        <thead className="bg-pink-500 text-white ">
                            <tr>
                                <th className="p-3 border border-black">Name</th>
                                <th className="p-3 border border-black">Username</th>
                                <th className="p-3 border border-black">Email</th>
                                <th className="p-3 border border-black">Password</th>
                                <th className="p-3 border border-black">Terms & Conditions</th>
                                <th className="p-3 border border-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i} className=" hover:bg-gray-100 text-center">
                                    <td className="px-2 py-1 border whitespace-nowrap">{user.name1} {user.name2}</td>
                                    <td className="px-2 py-1 border">{user.username}</td>
                                    <td className="px-2 py-1 border">{user.email}</td>
                                    <td className="px-2 py-1 border">{user.password}</td>
                                    <td className="px-2 py-1 border">{user.checked ? "✅ Accept" : "❌ Not Accept"}</td>
                                    <td className="px-2 py-1 border">
                                        <button
                                            onClick={() => handleDelete(i)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default LoginInfo
