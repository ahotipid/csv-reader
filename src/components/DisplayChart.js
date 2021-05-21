import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const DisplayChart = ({ jsonData }) => {
    const [USUsers, setUSUsers] = useState([]);
    const [CAUsers, setCAUsers] = useState([]);
    const [MexUsers, setMexUsers] = useState([]);
    const state = {
        labels: ['United States', 'Canada', 'Mexico'],
        datasets: [
            {
                label: 'Users',
                backgroundColor: 'cadetblue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [USUsers.length, CAUsers.length, MexUsers.length]
            }
        ]
    }
    useEffect(() => {
        //copy jsonData
        const copiedData = [...jsonData];
        //US users
        const USData = copiedData.filter((user) => {
            return user.data.Country === "United States"
        });
        setUSUsers(USData);
        //Canada users
        const CAData = copiedData.filter((user) => {
            return user.data.Country === "Canada"
        });
        setCAUsers(CAData);
        //Mexico users
        const MexData = copiedData.filter((user) => {
            return user.data.Country === "Mexico"
        });
        setMexUsers(MexData);
    }, [jsonData])

    return (
        <div>
            <h2>Chart</h2>
            <h3>North America Users by Country</h3>
            <Bar
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'North America Users',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}

export default DisplayChart;