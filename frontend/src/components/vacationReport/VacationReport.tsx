import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./VacationReport.css";
import VacationService from "../../services/auth-aware/Vacations";
import Followservice from "../../services/auth-aware/FollowsService";
import useService from "../../hooks/useService";
import { initFollows } from "../../redux/followsSlice";
import { init } from "../../redux/vacationSlice";

export default function VacationReport(): JSX.Element {
  const [data, setData] = useState<{ name: string; followers: number }[]>([]);
  const follows = useAppSelector((state) => state.follows.follows);
  const vacations = useAppSelector((state) => state.vacation.vacation);

  const vacationService = useService(VacationService);
  const followService = useService(Followservice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (vacations.length === 0) {
        const allVacations = await vacationService.getAllVacation();
        dispatch(init(allVacations));
      }

      if (follows.length === 0) {
        const allFollows = await followService.getAllFollows();
        dispatch(initFollows(allFollows));
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const reportData = vacations.map((vacation) => {
        const count = follows.filter(
          (f) => f.vacationId === vacation.vacationId
        ).length;
        return {
          name: vacation.destination,
          followers: count,
        };
      });

      setData(reportData);
    }

    loadData();
  }, [vacations, follows]);

  function downloadCSV() {
    function escapeCSVValue(value: string | number): string {
      return `"${value}"`;
    }

    const csvRows = [
      ["Vacation", "Followers"],
      ...data.map((row) => [
        escapeCSVValue(row.name),
        escapeCSVValue(row.followers),
      ]),
    ];

    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "vacations-report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  return (
    <div className="vacation-report">
      <h2>Vacations Report</h2>

      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{ top: 30, right: 30, left: 20, bottom: 100 }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis
          dataKey="name"
          angle={-45}
          textAnchor="end"
          interval={0}
          tick={{ fontSize: 12 }}
        />
        <YAxis allowDecimals={false} />
        <Tooltip />

        <Legend verticalAlign="top" height={30} />
        <Bar dataKey="followers" fill="#2196f3" />
      </BarChart>
      <button onClick={downloadCSV} className="download-btn">
        Download CSV
      </button>
    </div>
  );
}
