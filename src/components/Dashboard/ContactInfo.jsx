import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebaseInfo";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function ContactInfo() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "contactMessages"));
                const msgs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMessages(msgs);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure to delete this message?")) return;
        try {
            await deleteDoc(doc(db, "contactMessages", id));
            setMessages(messages.filter(msg => msg.id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    return (
        // Contact Messages
        <div className='px-5'>
            <h2 className="text-xl font-bold mt-8 mb-4 ">📩 Contact Messages</h2>
            {messages.length === 0 ? (
                <p className="text-center text-gray-600">No messages yet</p>
            ) : (
                <div className='overflow-x-auto'>
                    <table className="w-full border bg-white shadow rounded ">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="p-2 border border-black">Name</th>
                                <th className="p-2 border border-black">Email</th>
                                <th className="px-20 border border-black">Message</th>
                                <th className="p-2 border border-black">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((m, i) => (
                                <tr key={i} className="border-t text-center hover:bg-gray-100">
                                    <td className="px-2 py-1 border whitespace-nowrap">{m.name}</td>
                                    <td className="p-2 border">{m.email}</td>
                                    <td className="p-2 border">{m.message}</td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => handleDelete(m.id)}
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
    )
}

export default ContactInfo
