import { useContext, useEffect, useState } from "react";
import useService from "../../../hooks/useService";
import VacationModel from "../../../models/vacation/VacationModel";
import VacationService from "../../../services/auth-aware/Vacations";
import "./Vacations.css";
import Vacation from "../vacation/Vacation";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { init } from "../../../redux/vacationSlice";
import { initFollows } from "../../../redux/followsSlice";
import FollowService from "../../../services/auth-aware/FollowsService";
import { AuthContext } from "../../auth/auth/Auth";
import { FilterType } from "./enum";

export default function Vacations(): JSX.Element {
  const [vacations, setVacations] = useState<VacationModel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const vacationsPerPage = 10;

  const vacationService = useService(VacationService);
  const followService = useService(FollowService);
  const dispatch = useAppDispatch();
  const follows = useAppSelector((state) => state.follows.follows);
  const { userId, role } = useContext(AuthContext)!;

  useEffect(() => {
    async function fetchFollows() {
      const allFollows = await followService.getAllFollows();
      dispatch(initFollows(allFollows));
    }

    fetchFollows();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const allVacations = await vacationService.getAllVacation();
        setVacations(allVacations);
        dispatch(init(allVacations));
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  let filteredVacations = vacations;
  switch (filter) {
    case FilterType.Followed:
      filteredVacations = vacations.filter((v) =>
        follows.some(
          (f) => f.vacationId === v.vacationId && f.userId === userId
        )
      );
      break;

    case FilterType.Future:
      filteredVacations = vacations.filter((v) => {
        const today = new Date();
        const start = new Date(v.startingDate);
        return start > today;
      });
      break;
    case FilterType.Active:
      filteredVacations = vacations.filter((v) => {
        const today = new Date();
        const start = new Date(v.startingDate);
        const end = new Date(v.endingDate);
        return start <= today && today <= end;
      });
      break;

    case FilterType.All:
    default:
      filteredVacations = vacations;
      break;
  }
  const totalPages = Math.ceil(filteredVacations.length / vacationsPerPage);

  const paginatedVacations = filteredVacations.slice(
    (currentPage - 1) * vacationsPerPage,
    currentPage * vacationsPerPage
  );

  function deleteMe(vacationId: string) {
    setVacations(vacations.filter((v) => v.vacationId !== vacationId));
  }

  return (
    <div className="Vacations">
      {role === "user" && (
        <div className="filters">
          <button onClick={() => setFilter(FilterType.All)}>
            All Vacations
          </button>
          <button onClick={() => setFilter(FilterType.Followed)}>
            Followed Only
          </button>
          <button onClick={() => setFilter(FilterType.Future)}>
            Upcoming Only
          </button>
          <button onClick={() => setFilter(FilterType.Active)}>
            Active Now{" "}
          </button>
        </div>
      )}
      {paginatedVacations.map((v) => (
        <Vacation vacation={v} deleteMe={deleteMe} key={v.vacationId} />
      ))}

      <div className="pagination-container">
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ⬅ Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}
