/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../Contexts/QuizContext';

export default function App() {
    const topics = useContext(QuizContext);
    const data = topics.data.map((topic) => {
        const newTopic = {
            total: topic.total,
            name: topic.name,
        };
        return newTopic;
    });

    return (
        <div className="grid place-items-center text-center bg-slate-300">
            <h2 className="mt-20"> Quiz Topics Vs Total question Visual representation</h2>
            <BarChart className="mt-20" width={350} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis className="text-white" dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#a42beb" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    );
}
