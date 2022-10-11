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
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    );
}
