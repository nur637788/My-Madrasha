import React, { useEffect, useState } from 'react'

function ContactInfo() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        setMessages(savedMessages);
    }, []);

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
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((m, i) => (
                                <tr key={i} className="border-t text-center hover:bg-gray-100">
                                    <td className="px-2 py-1 border whitespace-nowrap">{m.name}</td>
                                    <td className="p-2 border">{m.email}</td>
                                    <td className="p-2 border">{m.message}</td>
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
