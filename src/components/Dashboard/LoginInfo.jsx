import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebaseInfo";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function LoginInfo() {
    const [users, setUsers] = useState([]);

    // ✅ Firestore থেকে user data আনা
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const usersData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    // ✅ User Delete করা Firestore থেকে
    const handleDelete = async (id) => {
        const confirmDelete = confirm("⚠️ Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "users", id));
            setUsers(users.filter((user) => user.id !== id));
            alert("🗑️ User deleted successfully!");
        } catch (error) {
            console.log("Some Error", error)
            alert("❌ Failed to delete user!");
        }
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
