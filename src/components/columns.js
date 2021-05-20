const COLUMNS = [

    {
        Header: 'User Informations',
        columns : [
            {
                Header: 'I.D.',
                accessor: row=>row.data.Id,
            },
            {
                Header: 'First name',
                accessor: row=>row.data.First_name,
            },
            {
                Header: 'Last name',
                accessor: row=>row.data.Last_name,
            },
            {
                Header: 'Email',
                accessor: row=>row.data.Email,
            },
            {
                Header: 'Street address',
                accessor: row=>row.data['Street address'],
            },
            {
                Header: 'Country',
                accessor: row=>row.data.Country,
            },
        ]
    },
    {
        Header: 'Vehicle Informations',
        columns : [
            {
                Header: 'Car Make',
                accessor: row=>row.data['Car Make'],
            },
            {
                Header: 'Car Model',
                accessor: row=>row.data['Car Model'],
            },
            {
                Header: 'Car Color',
                accessor: row=>row.data['Car Color'],
            },
        ]
    }  
]

export default COLUMNS;