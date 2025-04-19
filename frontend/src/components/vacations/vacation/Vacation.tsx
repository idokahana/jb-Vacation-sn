import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useService from "../../../hooks/useService";
import VacationModel from "../../../models/vacation/VacationModel";
import { initFollows } from "../../../redux/followsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FollowService from "../../../services/auth-aware/FollowsService";
import VacationService from "../../../services/auth-aware/Vacations";
import { AuthContext } from "../../auth/auth/Auth";
import "./Vacation.css";

interface VacationProps {
  vacation: VacationModel;
  deleteMe(vacationId: string): void;
}

export default function Vacation(props: VacationProps): JSX.Element {
  const {
    destination,
    startingDate,
    endingDate,
    price,
    vacationDescription,
    imageUrl,
    vacationId,
  } = props.vacation;

  const { role, userId } = useContext(AuthContext)!;
  const vacationService = useService(VacationService);
  const followService = useService(FollowService);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const allFollows = useAppSelector((state) => state.follows.follows);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoadingLike, setIsLoadingLike] = useState(false);

  const toggleDeleteConfirm = () => setShowDeleteConfirm(!showDeleteConfirm);

  const deleteMe = async () => {
    if (!showDeleteConfirm) return;

    try {
      await vacationService.remove(vacationId);
      props.deleteMe(vacationId);
      setShowDeleteConfirm(false);
    } catch (err) {
      alert(err);
    }
  };

  const editMe = () => {
    navigate(`/vacation/${vacationId}`);
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  useEffect(() => {
    const liked = allFollows.some(
      (v) => v.vacationId === vacationId && v.userId === userId
    );
    setIsLiked(liked);
  }, [vacationId, userId, allFollows]);

  const likeCount = allFollows.filter(
    (f) => f.vacationId === vacationId
  ).length;

  const toggleLike = async () => {
    if (isLoadingLike) return;
    setIsLoadingLike(true);

    try {
      if (isLiked) {
        await followService.unlike(vacationId);
      } else {
        await followService.like(vacationId);
      }
      const updatedFollows = await followService.getAllFollows();
      dispatch(initFollows(updatedFollows));
    } catch (e) {
      alert(e);
    } finally {
      setIsLoadingLike(false);
    }
  };

  return (
    <div className="vacation-card">
      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt={destination} className="vacation-image" />
          <div className="image-overlay">
            <h2 className="destination-title">{destination}</h2>
          </div>
          <div className="action-buttons">
            {role !== "admin" && (
              <label className="like-container">
                <input
                  type="checkbox"
                  checked={isLiked}
                  onChange={toggleLike}
                />
                <span className="like-icon">
                  {isLiked ? "❤️" : "🤍"} {likeCount}
                </span>
              </label>
            )}
            {role === "admin" && (
              <>
                <button className="edit-button" onClick={editMe}>
                  ✏️
                </button>
                <button className="delete-button" onClick={toggleDeleteConfirm}>
                  🗑️
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="date-banner">
        <span className="date-icon">📅</span>
        <span className="dates">
          {formatDate(startingDate)} - {formatDate(endingDate)}
        </span>
      </div>

      <div className="vacation-details">
        <p className="vacation-description">{vacationDescription}</p>
        <div className="price-section">
          <span className="price">${price}</span>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="delete-confirmation">
          <span>Are you sure you want to delete this vacation?</span>
          <button onClick={deleteMe}>Yes</button>
          <button onClick={toggleDeleteConfirm}>No</button>
        </div>
      )}
    </div>
  );
}
