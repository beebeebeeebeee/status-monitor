import { Badge, Card, CardContent, CardHeader } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Status, StatusMonth, StatusStatus } from "@domain/entity";
import { MONTHS } from "@domain/constant";
import { appConfigs } from "@adapter/configs";

const today = new Date(new Date().setMonth(appConfigs.currentMonth));

const getMonth = (month: number): StatusMonth => {
  if (month < 0) {
    return MONTHS[12 + month];
  }
  return MONTHS[month];
};

export type DiagramProps = {
  status: Status;
};

function getStatusColor(status: StatusStatus): string {
  switch (status) {
    case StatusStatus.SUCCESS:
      return "#17cb62";
    case StatusStatus.ERROR:
      return "#ff0000";
    default:
      return "#ff0000";
  }
}

export function Diagram(props: DiagramProps): JSX.Element {
  const { status } = props;

  return (
    <Badge
      color={status.status}
      badgeContent={status.isSuccess ? "good" : "bad"}
    >
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardHeader subheader={status.title} />
        <CardContent>
          {status.content}
          <Line
            width={100}
            height={10}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top" as const,
                },
                title: {
                  display: false,
                },
              },
              scales: {
                y: {
                  display: false,
                  beginAtZero: true,
                },
              },
            }}
            data={{
              labels: Array.from({ length: MONTHS.length }).map((_, i) =>
                getMonth(today.getMonth() - MONTHS.length + i + 1)
              ),
              datasets: [
                {
                  label: status.title,
                  data: [
                    ...Array.from({ length: MONTHS.length - 1 }).map((_, i) => {
                      if (
                        status.errorMonths == null ||
                        status.errorMonths.length === 0
                      )
                        return 1;
                      return status.errorMonths.includes(
                        getMonth(today.getMonth() - MONTHS.length + i + 1)
                      )
                        ? 0
                        : 1;
                    }),
                    status.isSuccess ? 1 : 0,
                  ],
                  borderColor: getStatusColor(status.status),
                  backgroundColor: getStatusColor(status.status),
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </Badge>
  );
}
