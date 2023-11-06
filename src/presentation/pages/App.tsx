import { Box, Container, Divider, Stack } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { useStatusController } from "@adapter/controller";
import { Diagram } from "@presentation/component/Diagram";
import { Status } from "@domain/entity";
import { appConfigs } from "@adapter/configs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export function App() {
  const statusController = useStatusController();

  const [abortController, setAbortController] = useState<AbortController>();
  const [statusList, setStatusList] = useState<Status[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    setAbortController(abortController);

    void (async () => {
      const { result, error } = await statusController.getStatusList(
        abortController.signal
      );

      if (error != null) {
        console.error(error);
        return;
      }

      setStatusList(result);
    })();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Stack spacing={2}>
        <Box
          sx={{
            pt: 2,
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          {appConfigs.title}
        </Box>
        <Divider />
        {statusList.map((status, i) => (
          <Diagram status={status} key={i} />
        ))}
      </Stack>
    </Container>
  );
}
