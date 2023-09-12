import {Badge, Box, Card, CardContent, CardHeader, Container, Divider, Stack} from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type Month =
    'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'
const months: Month[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getMonth = (month: number): Month => {
    if (month < 0) {
        return months[12 + month]
    }
    return months[month]
}

const status: {
    title: string;
    content: string;
    status: 'success' | 'error';
    errorMonths?: Month[];
}[] = [
    {
        title: 'Salary Pay Out Status',
        content: 'August Salary Paid @ 1 September',
        status: 'success',
    },
    {
        title: 'Snacks Status',
        content: 'Snack Arrived @ 12 September',
        status: 'success',
    },
    {
        title: 'Toilet Status',
        content: 'Still Broken!',
        status: 'error',
        errorMonths: ['July', 'August']
    }
]

function App() {
    return (
        <Container>
            <Stack spacing={2}>
                <Box sx={{
                    pt: 2,
                    textAlign: 'center',
                    fontSize: '1.5rem'
                }}>
                    NewType Ltd. Status Monitor
                </Box>
                <Divider/>

                {
                    status.map((e, i) => (
                        <Badge color={e.status} badgeContent={e.status === 'success' ? 'good' : 'bad'} key={i}>
                            <Card sx={{
                                width: '100%'
                            }}>
                                <CardHeader
                                    subheader={e.title}
                                />
                                <CardContent>
                                    {e.content}
                                    <Line
                                        width={100}
                                        height={10}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: 'top' as const,
                                                },
                                                title: {
                                                    display: false,
                                                },
                                            },
                                            scales: {
                                                y: {
                                                    display: false,
                                                    beginAtZero: true
                                                }
                                            }
                                        }} data={{
                                        labels: Array.from({length: months.length}).map((_, i) => getMonth((new Date().getMonth() - months.length + i + 1))),
                                        datasets: [
                                            {
                                                label: e.title,
                                                data: [...Array.from({length: months.length - 1}).map((_, i) => {
                                                    if (e.errorMonths == null || e.errorMonths.length === 0) return 1
                                                    return e.errorMonths.includes(getMonth((new Date().getMonth() - months.length + i + 1))) ? 0 : 1
                                                }), e.status === 'success' ? 1 : 0],
                                                borderColor: e.status === 'success' ? '#17cb62' : '#ff0000',
                                                backgroundColor: e.status === 'success' ? '#17cb62' : '#ff0000',
                                            }
                                        ]
                                    }}/>
                                </CardContent>
                            </Card>
                        </Badge>
                    ))
                }

            </Stack>
        </Container>
    )
}

export default App
