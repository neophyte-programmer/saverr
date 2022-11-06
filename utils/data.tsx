import { MdDashboard } from 'react-icons/md';
import { BiCreditCardAlt } from 'react-icons/bi';

export const dummyTargets = [
    {
        id: '1',
        title: 'Car',
        amount: 100000,
        current: 20000,
        deposits: [
            {
                id: `${Math.random()}`,
                amount: 7000,
                source: 'Salary',
                date: '2021-08-01',
            },
            {
                id: `${Math.random()}`,
                amount: 3000,
                source: 'Salary',
                date: '2021-10-01',
            },
            {
                id: `${Math.random()}`,
                amount: 10000,
                source: 'Salary',
                date: '2021-10-01',
            },
        ],
        isComplete: false,
    },
    {
        id: '2',
        title: 'iPhone 14 Pro Max',
        amount: 29000,
        current: 17000,
        deposits: [
            {
                id: `${Math.random()}`,
                amount: 4000,
                source: 'Salary',
                date: '2021-08-01',
            },
            {
                id: `${Math.random()}`,
                amount: 3000,
                source: 'Gift',
                date: '2021-10-01',
            },
            {
                id: `${Math.random()}`,
                amount: 10000,
                source: 'Donation',
                date: '2021-10-01',
            },
        ],
        isComplete: false,
    },
    {
        id: '3',
        title: 'Airpods Pro',
        amount: 600,
        current: 600,
        deposits: [
            {
                id: `${Math.random()}`,
                amount: 100,
                source: 'Savings',
                date: '2021-08-01',
            },
            {
                id: `${Math.random()}`,
                amount: 500,
                source: 'Gift',
                date: '2021-10-01',
            },
        ],
        isComplete: true,
    },
    {
        id: '4',
        title: 'Car',
        amount: 100000,
        current: 20000,
        deposits: [
            {
                id: `${Math.random()}`,
                amount: 7000,
                source: 'Salary',
                date: '2021-08-01',
            },
            {
                id: `${Math.random()}`,
                amount: 3000,
                source: 'Salary',
                date: '2021-10-01',
            },
            {
                id: `${Math.random()}`,
                amount: 10000,
                source: 'Salary',
                date: '2021-10-01',
            },
        ],
        isComplete: false,
    },
]